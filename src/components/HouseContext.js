 import React, { createContext, useState, useEffect } from 'react';
//  import axios from 'axios';

//  import { housesData } from '../data';

//  import {HTTP_API_PATH} from "../utils"
 export const HouseContext = createContext();

 const HouseContextProvider = ({ children }) => {
    
   const [houses, setHouses] = useState([]);
   const [houses2, setHouses2] = useState([]);
   const [location, setLocation] = useState('Location (any)');
   const [Locations, setLocations] = useState([]);
   const [SubLocations, setSubLocations] = useState([]);
   const [subLocation, setsubLocation] = useState('Property type (any)');
   const [price, setPrice] = useState('Price (any)');
   const [loading, setLoading] = useState(false);


    


    useEffect(() => {
      if(houses.length>0){
      setHouses2(houses)
      const allLocations = houses.map((house) => {
           return house.location_name;
      });

      const uniqueLocation = ['Location (any)', ...new Set(allLocations)];

      setLocations(uniqueLocation);

      const allSubLocation = houses.map((house) =>{
         return house.sub_location_name;
      });

      const uniqueSubLocation = ['Property type (any)', ...new Set(allSubLocation)];

      setSubLocations(uniqueSubLocation);
      }
    },[houses])
   

   //  useEffect(() => {
   //    const allProperties = houses.map((house) =>{
   //       return house.type;
   //    });

   //    //remove duplicates
   //    const uniqueProperties = ['Property type (any)', ...new Set(allProperties)];

   //    setProperties(uniqueProperties);
      
   //  }, []);

    const handleClick = () =>{
      setLoading(true);
      //check the string if includes any
      const isDefault = (str) => {
         return str.split(' ').includes('(any)');
      };

      const minPrice = parseInt(price.split(' ')[0]);

      const maxPrice = parseInt(price.split(' ')[2]);

      
      const newHouses = houses.filter((house) => {
         const housePrice = parseInt(house.rent_amount);

         if(
            house.location_name === location &&
            house.sub_location_name === subLocation &&
            housePrice >= minPrice &&
            housePrice <= maxPrice
         ){
            return house;
         }

         //all values are default
         if(isDefault(location) && isDefault(subLocation) && isDefault(price)){
            return house;
         }
         //county is not default
         if(!isDefault(location) && isDefault(subLocation) && isDefault(price)){
            return house.location_name === location;
         }
         //property is not default
         if(!isDefault(subLocation) && isDefault(location) && isDefault(price)){
            return house.sub_location_name === subLocation;
         }

          // price is not default
      if (!isDefault(price) && isDefault(location) && isDefault(subLocation)) {
         if (housePrice >= minPrice && housePrice <= maxPrice) {
           return house;
         }
       }
       // county and property is not default
       if (!isDefault(location) && !isDefault(subLocation) && isDefault(price)) {
         return house.location_name === location && house.sub_location_name === subLocation;
       }
       // county and price is not default
       if (!isDefault(location) && isDefault(subLocation) && !isDefault(price)) {
         if (housePrice >= minPrice && housePrice <= maxPrice) {
           return house.location_name === location;
         }
       }
       // property and price is not default
       if (isDefault(location) && !isDefault(subLocation) && !isDefault(price)) {
         if (housePrice >= minPrice && housePrice <= maxPrice) {
           return house.sub_location_name === subLocation;
         }
       }
      });

      setTimeout(() =>{
         return (
            newHouses.length < 1 ? setHouses2([]) : setHouses2(newHouses),
            setLoading(false)
         );
      }, 1000);
   };

   return(
      <HouseContext.Provider
         value={{
            setHouses,
            houses,
            setHouses2,
            houses2,
            Locations,
            setLocations,
            location,
            setLocation,            
            subLocation,
            setsubLocation,
            SubLocations,
            setSubLocations,
            price,
            setPrice,
            handleClick,
            loading,            
         }}
      >
         { children }
      </HouseContext.Provider>   
   );
 };

 export default HouseContextProvider;