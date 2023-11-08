"use client";

import React from "react";
import SearchBar from '@/components/search-bar-with-box'

import {
  Box,
  Button,
  Flex,
  HStack,
  Stack,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [searchResult, setSearchResult] = useState([]);
  const [searchTerm, setSearchTerm] = useState('')
  const router = useRouter();


  const handleItemClick = (item) => {
    setSearchResult([])
    setSearchTerm('')
    router.push("/recommendation");
  };

  const handleInputChange = async (item) => {
    setSearchTerm(item)
    if(item.length >= 3) {
      try {
        const response = await fetch("/api/search/" + item + "/20/1", {
          method: "GET",
        });
        if (response.ok) {
          const data = await response.json();
  
          setSearchResult(data)
        }
      } catch (error) {}
    }else {
      setSearchResult([])
    }

  };



  return (
    <>
      <Box px={4} borderBottom={'1px'} borderStyle={'solid'} borderColor={'gray.300'}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>LOGO</Box>

          <Box w="40%">
            <SearchBar
              onItemClick={handleItemClick}
              onInputChange={handleInputChange}
              searchResult={searchResult}
              searchTerm={searchTerm}
            />
          </Box>

          <Flex alignItems={"center"} spacing={6}>
            <HStack
              as={"nav"}
              display={{ base: "none", md: "flex" }}
              spacing={4}
              alignItems={"center"}
            >
              <Box
                as="a"
                px={4}
                py={2}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("gray.200", "gray.700"),
                }}
                href={"/home"}
              >
                Home
              </Box>
              <Box
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("gray.200", "gray.700"),
                }}
                as="a"
                px={4}
                py={2}
                rounded={"md"}
                href={"#"}
              >
                About
              </Box>

              <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode} backgroundColor={"transparent"}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>

            </HStack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}

export default Navbar;
