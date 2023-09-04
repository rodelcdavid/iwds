import {
  Box,
  Flex,
  IconButton,
  Input,
  Link,
  Tag,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { websiteList } from "../websiteList";

function Search() {
  const [searchResults, setSearchResults] = useState(null);
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = () => {
    if (searchValue) {
      const results = websiteList.filter(
        (item) =>
          item.name
            .toString()
            .toLowerCase()
            .includes(searchValue.toLowerCase()) ||
          item.code.toString().toLowerCase().includes(searchValue.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults(null);
    }
  };
  return (
    <>
      <Text fontWeight="bold">Search Website</Text>
      <Flex gap="0.1rem">
        <Input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
          type="search"
          size="sm"
          border="1px solid"
          borderColor="blackAlpha.400"
        />
        <IconButton icon={<FaSearch />} size="sm" onClick={handleSearch} />
      </Flex>
      <Box display="flex" flexDir="column">
        {searchResults?.map((item) => (
          <Link
            key={item.code}
            href={item.location}
            target="_blank"
            display="flex"
            padding="0.3rem"
            mt="0.5rem"
            _hover={{
              textDecor: "none",
              border: "1px solid black",
            }}
          >
            <Text>{item.name}</Text>
            {/* <Link href={item.location}>{item.name}</Link> */}
            <Box display="flex" gap="0.3rem" ml="auto">
              {item.categories.map((category, index) => (
                <Tag size="sm" key={index} colorScheme="blue">
                  {category}
                </Tag>
              ))}
            </Box>
          </Link>
        ))}
      </Box>
    </>
  );
}

export default Search;
