import { Box, Button, Container, Flex, Spacer} from "@chakra-ui/react";
import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";

const Navbar = () => {
  const { isAuthenticated, emailer, Logout } = useContext(AuthContext);

  return (
    <Container  bg="teal.100"  py="10px" maxW={"100%"} m={0} p={0}>
      {isAuthenticated && (
         
          <Flex align="center" justify="space-between" gap={2} px={14} py={2}>
            <Box fontSize="20px" color="teal" fontWeight={600}>Email: {emailer}</Box>
            <Box fontSize="20px" color="teal" fontWeight={600} >
              <ChakraLink as={ReactRouterLink} to="/">
                Home
              </ChakraLink>
              <Button ml={4} onClick={Logout} colorScheme="teal" variant={"outline"}  >Logout</Button>
                
            </Box>
            
          </Flex>
       
      )}

      {isAuthenticated == false && (
        <Flex alignItems="center" py={2} justify="center">
 <ChakraLink   fontSize="24px" fontWeight="600" as={ReactRouterLink} to="/login">
   Login
 </ChakraLink>
        </Flex>
       
       
       
      )}
    </Container>
  );
};

export default Navbar;
