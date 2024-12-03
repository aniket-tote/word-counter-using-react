import React from "react";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { Flex, useColorMode } from "@chakra-ui/react";

export default function Footer() {
  const { colorMode } = useColorMode();

  return (
    <Flex
      flexDirection={"row"}
      width={"100vw"}
      justifyContent={"center"}
      alignItems={"center"}
      className="footer py-2"
      backgroundColor={colorMode === "dark" ? "gray.700" : "gray.200"}
    >
      <Flex alignItems={"center"}>
        Designed By <a href="https://github.com/aniket-tote" className="mx-1 hover:underline">Aniket</a> 
        {/* in
        <DiReact color="#61DAFB" className="mx-1"/>
        and <SiTailwindcss className="mx-1 text-[#38bdf8]" /> with
        <AiFillHeart className="text-red-600 mx-1" /> */}
      </Flex>
      <Flex alignItems={"center"}>
        <AiOutlineCopyrightCircle className="mx-1" />
        2022
      </Flex>
    </Flex>
  );
}
