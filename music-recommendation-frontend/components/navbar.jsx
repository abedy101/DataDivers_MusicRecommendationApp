"use client";

import React from "react";
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

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box px={4} borderBottom={'1px'} borderStyle={'solid'} borderColor={'gray.300'}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>LOGO</Box>

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
                href={"#"}
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
