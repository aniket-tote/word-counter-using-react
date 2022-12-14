import { Box, Button, Text, Textarea, Input, Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

export default function Textform() {
  const [text, setText] = useState("");
  const [currenttext, setcurrenttext] = useState("");
  const [newtext, setnewtext] = useState("");
  const [wordscount, setwordcount] = useState(0);
  const [linecount, setlinecount] = useState(0);
  const [paracount, setparacount] = useState(0);
  const [copytext, setcopytext] = useState("Copy");

  const douppercase = () => {
    setText(text.toUpperCase());
  };
  const dolowercase = () => {
    setText(text.toLowerCase());
  };
  const dosentencecase = () => {
    setText(text.charAt(0).toUpperCase() + text.slice(1));
  };
  useEffect(() => {
    setwordcount(text.trim().split(" ").length);
    setlinecount(text.split("\n").length);
    setparacount(text.split("\n\n").length);
    if (text === "") {
      setwordcount(0);
      setlinecount(0);
      setparacount(0);
    }
  }, [text]);
  const clear = () => {
    setText("");
  };

  const replaceintext = () => {
    setText(text.replace(currenttext, newtext));
    setcurrenttext("");
    setnewtext("");
  };

  const copytoclipboard = () => {
    navigator.clipboard.writeText(text);
    setcopytext("Copied");
    setInterval(() => {
      setcopytext("Copy");
    }, 3000);
  };

  const removeextraspace = () => {
    setText(text.split(/[ ]+/).join(" "));
  };
  return (
    <Flex
      width={"100vw"}
      flexDirection={["column", "column", "row"]}
      justifyContent={"space-evenly"}
      experimental_spaceY={["1rem","1rem","0rem"]}
      padding={"4rem"}
      className="home"
    >
      <Flex
        width={["100%", "100%", "60%"]}
        flexDirection={"column"}
        experimental_spaceY={"1rem"}
        className="textformleft"
      >
        <Text fontSize={"3xl"} fontWeight={"bold"} className="heading">
          Enter your text here
        </Text>
        <Textarea
          name="input"
          id="inputarea"
          value={text}
          width={"86.66%"}
          padding={"0.75rem"}
          boxShadow={"lg"}
          border={"2px"}
          borderColor={"gray.300"}
          onChange={(e) => setText(e.target.value)}
          placeholder="start typing.."
          rows="10"
        />
        <Flex flexWrap={"wrap"} alignItems={"center"} className="operations">
          <Button
            boxShadow={"md"}
            border={"2px"}
            borderColor={"gray.500"}
            onClick={douppercase}
            margin={"1rem 1rem 1rem 0rem"} 
          >
            ABCD
          </Button>
          <Button
            boxShadow={"md"}
            border={"2px"}
            borderColor={"gray.500"}
            onClick={dolowercase}
            margin={"1rem 1rem 1rem 0rem"} 
          >
            abcd
          </Button>
          <Button
            boxShadow={"md"}
            border={"2px"}
            borderColor={"gray.500"}
            onClick={dosentencecase}
            margin={"1rem 1rem 1rem 0rem"} 
          >
            Abcd
          </Button>
          <Button
            boxShadow={"md"}
            border={"2px"}
            borderColor={"gray.500"}
            onClick={clear}
            margin={"1rem 1rem 1rem 0rem"} 
          >
            Clear All
          </Button>
          <Button
            boxShadow={"md"}
            border={"2px"}
            borderColor={"gray.500"}
            onClick={copytoclipboard}
            margin={"1rem 1rem 1rem 0rem"} 
          >
            {copytext}
          </Button>
          <Button
            boxShadow={"md"}
            border={"2px"}
            borderColor={"gray.500"}
            onClick={removeextraspace}
            margin={"1rem 1rem 1rem 0rem"} 
          >
            Remove Extra spaces
          </Button>
        </Flex>
        <Text as={"p"} className="inf">
          Your text has {wordscount} words and {text.length} characters.
        </Text>
        <Text as={"p"} className="readtime">
        {(wordscount * 285/60).toFixed(2)} seconds read.
        </Text>
      </Flex>
      <Box width={["91.66%","91.66%","20%"]} className="textformright">
        <Flex width={"100%"} flexDirection={"column"} paddingLeft={["2.5rem","2.5rem","0.5rem"]} paddingRight={["2.5rem","2.5rem","0.5rem"]} paddingBottom={"2rem"} experimental_spaceY={"1.25rem"} className="details">
          <Text className="text-2xl">Details</Text>
          <Box borderLeft={"2px"} className="words flex justify-between px-3">
            <Text>Words</Text>
            <Text>{wordscount}</Text>
          </Box>
          <Box borderLeft={"2px"} className="Character flex justify-between px-3">
            <Text>Character</Text>
            <Text>{text.length}</Text>
          </Box>
          <Box borderLeft={"2px"} className="lines flex justify-between px-3">
            <Text>Lines</Text>
            <Text>{linecount}</Text>
          </Box>
          <Box borderLeft={"2px"} className="para flex justify-between px-3">
            <Text>Paragraph</Text>
            <Text>{paracount}</Text>
          </Box>
          <Box borderLeft={"2px"} className="Read flex justify-between px-3">
            <Text>Reading Time</Text>
            <Text>{(wordscount * 285/60).toFixed(2)} sec</Text>
          </Box>
        </Flex>
        <div className="w-full h-[1px] bg-slate-500"></div>
        <Flex width={"100%"} flexDirection={"column"} padding={["2.5rem","2.5rem","1.25rem"]} className="replacecontainer space-y-5 ">
          <Text className="text-2xl">Find and Replace</Text>
          <Flex width={"100%"} flexDirection={"column"} className="replace w-full flex flex-col space-y-1">
            <Text>Current</Text>
            <Input
              type="text"
              name="current"
              value={currenttext}
              onChange={(e) => setcurrenttext(e.target.value)}
              boxShadow={"sm"}
              className="bg-slate-300 px-4 py-2 border-2 border-solid rounded"
            />
          </Flex>
          <Box className="replacewith w-full flex flex-col space-y-1">
            <Text>New</Text>
            <Input
              type="text"
              name="new"
              value={newtext}
              onChange={(e) => setnewtext(e.target.value)}
              boxShadow={"sm"}
              className="bg-slate-300 px-4 py-2 border-2 border-solid rounded"
            />
          </Box>
          <Button
            type="submit"
            name="new"
            onClick={replaceintext}
            boxShadow={"md"}
            width={"max-content"}
            alignSelf={"center"}
            border={"2px"}
            borderColor={"gray.500"}
          >
            Replace
          </Button>
        </Flex>
        <div className="w-full h-[1px] bg-slate-500"></div>
      </Box>
    </Flex>
  );
}
