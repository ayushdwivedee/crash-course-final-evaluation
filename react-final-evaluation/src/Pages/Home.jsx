import { Container, HStack, Select, SimpleGrid } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import Loading from "../Components/Loading";

import ProductCard from "../Components/ProductCard";
import Err from "../Components/Err";

const Home = () => {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [filterVal, setFilterVal] = useState("");
  const [sortVal, setSortVal] = useState("");
  let queryparams = {};

  async function getData(filterVal, sortVal) {
    setLoading(true);
    setErr(false);
    try {
      if (sortVal) {
        queryparams.sort = "price";
        queryparams.order = sortVal;
      }
      if (filterVal) {
        queryparams.filter = filterVal;
      }
      let res = await axios({
        method: "get",
        url:`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products`,
        params: queryparams,
      });
      console.log(res?.data?.data);
      setData(res?.data?.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setErr(true);
    }
  }

  useEffect(() => {
    getData(filterVal, sortVal);
  }, [filterVal, sortVal]);

  if (loading) {
    return <Loading />;
  }
  if (err) {
    return <Err />;
  }
  return (
    <Container>
      <HStack spacing={4} mt={4}>
        <Select
          placeholder="Sort by Price"
          onChange={(e) => setSortVal(e.target.value)}
        >
          <option value="asc">ascending</option>
          <option value="desc">Descending</option>
        </Select>
        <Select
          placeholder="Filter by Category"
          onChange={(e) => setFilterVal(e.target.value)}
        >
          <option value="men">Men</option>
          <option value="women">Women</option>
          <option value="kids">Kids</option>
          <option value="homedecor">Home Decor</option>
        </Select>
      </HStack>
      <SimpleGrid columns={3} gap={6} w={"700px"}>
        {data.map((card, index) => {
          return <ProductCard key={index} {...card} />;
        })}
      </SimpleGrid>
    </Container>
  );
};

export default Home;
