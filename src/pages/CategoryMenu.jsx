import { Box, Button, Link, Text } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";

function CategoryMenu() {
  return (
    <Box>
      <Text fontWeight="bold">Categories</Text>
      <Button as={NavLink} to="/iwspc" w="10rem">
        IWSPC
      </Button>
      <Box display="grid">
        <Button as={NavLink} to="it" w="10rem">
          IT
        </Button>
        <Button as={NavLink} to="finance" w="10rem">
          Finance
        </Button>
      </Box>
    </Box>
  );
}

export default CategoryMenu;
