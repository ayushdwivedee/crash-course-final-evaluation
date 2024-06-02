import {  Button, Container, Heading, VStack } from '@chakra-ui/react'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { Input } from '@chakra-ui/react'
import axios from 'axios'
import { AuthContext } from '../Context/AuthContext'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
     const {setToken,setEmailer,setIsAuthenticated}=useContext(AuthContext);
    const navigate=useNavigate()

const refer=useRef()

 useEffect(()=>{
    refer.current.focus()
 })

    async function handleLogin(){
        try {
            let res= await axios.post("https://reqres.in/api/login",{email,password})
            setToken(res?.data?.token)
            setIsAuthenticated(true)
            console.log(res?.data?.token)
            navigate("/")
            setEmailer(email)
            
        } catch (error) {
            console.log("error",error)
        }
    }
  return (
    <Container mt={4}>
       <Heading mb={3}>Login page</Heading>
        <VStack>
            <Input ref={refer} placeholder='Enter your Email' onChange={(e)=>setEmail(e.target.value)} />
            <Input placeholder='Enter your Password' onChange={(e)=>setPassword(e.target.value)}/>
            <Button onClick={handleLogin} colorScheme='teal' variant="outline">Login</Button>
        </VStack>
    </Container>
  )
}

export default Login
