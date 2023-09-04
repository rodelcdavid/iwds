import { Box, Button, IconButton, Link, Text } from "@chakra-ui/react";
import React from "react";
import { NavLink, Navigate, useNavigate, useParams } from "react-router-dom";
import { websiteList } from "../websiteList";
import { FaArrowLeft } from "react-icons/fa";
import ErrorPage from "./ErrorPage";

function Category() {
  const params = useParams();
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/");
  };

  const isValidCategory = (category) => {
    return ["iwspc", "it", "finance"].includes(category);
  };

  if (isValidCategory(params.category)) {
    return (
      <Box w="100%">
        <Box
          display="flex"
          gap="0.3rem"
          alignItems="center"
          borderBottom="2px solid"
          borderColor="blue.500"
        >
          <IconButton
            icon={<FaArrowLeft />}
            onClick={handleBack}
            size="sm"
            color="blue"
          />
          <Text>Back to Categories</Text>
        </Box>
        <Text>{params.category}</Text>
        {websiteList.map(
          (item) =>
            item.categories.includes(params.category) && (
              <Button
                key={item.code}
                as={NavLink}
                to={item.location}
                target="_blank"
              >
                {item.name}
              </Button>
            )
        )}
      </Box>
    );
  } else {
    return <Navigate to={<ErrorPage />} />;
  }
}

export default Category;
