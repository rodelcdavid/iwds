import { Box, Input, Link, Text } from "@chakra-ui/react";
import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Search from "../components/Search";

function Root() {
  return (
    <div>
      <Text padding="1rem" bgColor="blue.500" color="#fff">
        IWSPC Website Directory System
      </Text>
      <Box display="flex" gap="5rem" padding="1rem">
        <Box w="30%">
          <Search />
        </Box>
        <Outlet w="70%" />
      </Box>
    </div>
  );
}

export default Root;
