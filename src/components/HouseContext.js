 import React, { createContext, useState, useEffect } from 'react';

 import { housesData } from '../data';

 export const HouseContext = createContext();

 const HouseContextProvider = ({ children }) => {
    const [houses, setHouses] = useState(housesData);
    const [county, setCounty] = useState('Location (any)');
    const [counties, setCounties] = useState([]);
    const [property, setProperty] = useState('Property type (any)');
    const [properties, setProperties] = useState([]);
    const [price, setPrice] = useState('Price (any)');
    const [loading, setLoading] = useState(false);


    useEffect(() =>{
       //return all counties
       const allCounties = houses.map((house) => {
            return house.county;
       });

       //remove duplicates
       const uniqueCounties = ['Location (any)', ...new Set(allCounties)];

       //set Counties state
       setCounties(uniqueCounties);
    }, []);

    useEffect(() => {
      const allProperties = houses.map((house) =>{
         return house.type;
      });

      //remove duplicates
      const uniqueProperties = ['Property type (any)', ...new Set(allProperties)];

      setProperties(uniqueProperties);
    }, []);

    const handleClick = () =>{
      setLoading(true);

      //check the string if includes any
      const isDefault = (str) => {
         return str.split(' ').includes('(any)');
      };

      const minPrice = parseInt(price.split(' ')[0]);

      const maxPrice = parseInt(price.split(' ')[2]);

      const newHouses = housesData.filter((house) => {
         const housePrice = parseInt(house.price);

         if(
            house.county === county &&
            house.type === property &&
            housePrice >= minPrice &&
            housePrice <= maxPrice
         ){
            return house;
         }

         //all values are default
         if(isDefault(county) && isDefault(property) && isDefault(price)){
            return house;
         }
         //county is not default
         if(!isDefault(county) && isDefault(property) && isDefault(price)){
            return house.county === county;
         }
         //property is not default
         if(!isDefault(property) && isDefault(county) && isDefault(price)){
            return house.type === property;
         }

          // price is not default
      if (!isDefault(price) && isDefault(county) && isDefault(property)) {
         if (housePrice >= minPrice && housePrice <= maxPrice) {
           return house;
         }
       }
       // county and property is not default
       if (!isDefault(county) && !isDefault(property) && isDefault(price)) {
         return house.county === county && house.type === property;
       }
       // county and price is not default
       if (!isDefault(county) && isDefault(property) && !isDefault(price)) {
         if (housePrice >= minPrice && housePrice <= maxPrice) {
           return house.county === county;
         }
       }
       // property and price is not default
       if (isDefault(county) && !isDefault(property) && !isDefault(price)) {
         if (housePrice >= minPrice && housePrice <= maxPrice) {
           return house.type === property;
         }
       }
      });

      setTimeout(() =>{
         return (
            newHouses.length < 1 ? setHouses([]) : setHouses(newHouses),
            setLoading(false)
         );
      }, 1000);
   };

   return(
      <HouseContext.Provider
         value={{
            county,
            setCounty,
            counties,
            setCounties,
            property,
            setProperty,
            properties,
            setProperties,
            price,
            setPrice,
            handleClick,
            houses,
            loading
         }}
      >
         {{ children }}
      </HouseContext.Provider>   
   );
 };

 export default HouseContextProvider;