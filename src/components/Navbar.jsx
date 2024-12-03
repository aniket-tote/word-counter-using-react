import { Flex, IconButton, useColorMode } from "@chakra-ui/react";
// import { Link } from "react-router-dom";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import React from "react";

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  let darkmode = false;
  const toggle = () => {
    toggleColorMode();
    if (darkmode) {
      darkmode = false;
    } else {
      darkmode = true;
    }
  };

  return (
    <Flex
      height={20}
      alignItems={"center"}
      justifyContent={"space-between"}
      padding={"1rem"}
      className="list"
      background={colorMode === "dark" ? "gray.700" : "gray.200"}
    >
      <span className="item1 font-bold cursor-pointer hover:underline text-2xl">
        Word Counter
      </span>
      {/* <Link className="item2 font-bold cursor-pointer hover:underline" to="/second">
        Second
      </Link> */}
      <IconButton
        borderRadius={"100%"}
        onClick={toggle}
        icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
      />
    </Flex>
  );
}
