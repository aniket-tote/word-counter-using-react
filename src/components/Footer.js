import React from "react";
import { SiTailwindcss } from "react-icons/si";
import { AiFillHeart, AiOutlineCopyrightCircle } from "react-icons/ai";
import { Flex, Image, useColorMode } from "@chakra-ui/react";

export default function Footer() {
  const { colorMode } = useColorMode();

  return (
    <Flex
      flexDirection={"column"}
      experimental_spaceY={"0.25rem"}
      width={"100vw"}
      justifyContent={"center"}
      alignItems={"center"}
      className="footer"
      backgroundColor={colorMode === "dark" ? "gray.700" : "gray.200"}
    >
      <Flex alignItems={"center"}>
        Designed By Aniket in{" "}
        <Image
          src="https://reactjs.org/favicon.ico"
          alt="reactlogo"
          height={"1rem"}
          width={"1.rem"}
          margin={"0px 0.25rem"}
        />{" "}
        and <SiTailwindcss className="mx-1 text-[#38bdf8]" /> with{" "}
        <AiFillHeart className="text-red-600 mx-1" />
      </Flex>
      <Flex alignItems={"center"}>
        <AiOutlineCopyrightCircle className="mx-1" />
        2022
      </Flex>
    </Flex>
  );
}
