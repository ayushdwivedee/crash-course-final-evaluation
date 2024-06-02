import {   Container,   SimpleGrid } from '@chakra-ui/react'
import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react'
import Loading from '../Components/Loading';
import ProductCard from '../Components/ProductCard';

const Home = () => {
const [err,setErr]=useState(false);
const [loading,setLoading]=useState(false);
const [data,setData]=useState([]);


async function getData(){
    setLoading(true)
    try {
        let res=await axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products`)
        console.log(res?.data?.data)
        setData(res?.data?.data)
        setLoading(false)
    } catch (error) {
        setLoading(false)
        setErr(true)
    }
}

    useEffect(()=>{
        getData()
    },[])

    if(loading){
        return <Loading/>
    }
    if(err){
        return <Error/>
    }
  return (
      <Container>
        <SimpleGrid columns={3} gap={6} w={"700px"}>
           
        {data.map((card,index)=>{
     return <ProductCard key={index} {...card}/>
 })}
           
        </SimpleGrid>
      </Container>
  
  
  
     
  )
}

export default Home
