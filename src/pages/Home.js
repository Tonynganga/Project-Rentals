import React,{useContext,useEffect} from 'react';
import { HouseContext } from "../components/HouseContext";
import {HTTP_API_PATH} from "../utils"
import axios from 'axios';
//pages
import HouseList from '../components/HouseList';
import Hero from '../components/Hero';

const Home = () =>{
    const { setHouses } = useContext(HouseContext);
    useEffect(() =>{
        //return all counties
        axios.get (HTTP_API_PATH+'/api/rentals/get_appartment', {headers: {'Content-Type': 'application/json',}})
       .then (res => {
             setHouses(res.data)            
       })
       .catch (err => {
       console.log(err.data)
       });     
     }, []);
     
    return (
        <div className='min-h-[1800px'>
            <Hero />
            <HouseList />
        </div>
    )
}

export default Home;