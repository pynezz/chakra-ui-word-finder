import { Flex, Heading, Input } from "@chakra-ui/react"
import React from "react";

export default function InputField() {
  const [value, setValue] = React.useState("");
  const handleChange = (event) => setValue(event.target.value);
  return (
    <Input 
        placeholder="Enter a word..." 
        variant="flushed" 
        type="text" 
        height="100px" 
        width="300px" 
        m={2} 
        fontSize="38px"
        textAlign="center"
      />
  )
}