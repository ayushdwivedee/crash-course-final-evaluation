import {   Container,   HStack,   Select,   SimpleGrid } from '@chakra-ui/react'
import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react'
import Loading from '../Components/Loading';
import ProductCard from '../Components/ProductCard';

const Home = () => {
const [err,setErr]=useState(false);
const [loading,setLoading]=useState(false);
const [data,setData]=useState([]);
const [filterVal,setFilterVal]=useState("");


async function getData(filterVal){
    setLoading(true)
    try {
        let res=await axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?filter=${filterVal}`)
        console.log(res?.data?.data)
        setData(res?.data?.data)
        setLoading(false)
    } catch (error) {
        setLoading(false)
        setErr(true)
    }
}

    useEffect(()=>{
        getData(filterVal)
    },[filterVal])

    if(loading){
        return <Loading/>
    }
    if(err){
        return <Error/>
    }
  return (
      <Container>
        <HStack spacing={4} mt={4}>
        <Select placeholder='Sort by Price'>
  <option value='asc'>ascending</option>
  <option value='desc'>Descending</option>
   
</Select>
<Select placeholder='Filter by Category' onChange={(e)=>setFilterVal(e.target.value)}>
  <option value='men'>Men</option>
  <option value='women'>Women</option>
  <option value='kids'>Kids</option>
  <option value='homedecor'>Home Decor</option>
</Select>
        </HStack>
        <SimpleGrid columns={3} gap={6} w={"700px"}>
           
        {data.map((card,index)=>{
     return <ProductCard key={index} {...card}/>
 })}
           
        </SimpleGrid>
      </Container>
  
  
  
     
  )
}

export default Home
