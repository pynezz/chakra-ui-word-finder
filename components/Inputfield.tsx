import { Input } from "@chakra-ui/react"
import React from "react";

let Val: string = '';

export default function InputField() {
  const [value, setValue] = React.useState('');
  const handleChange = (event) => setValue(event.target.value);

  return (
    <Input 
      placeholder="Enter a word..."
      variant="flushed" 
      type="text" 
      height="60px" 
      width="400px" 
      mb={4} 
      fontSize="38px"
      textAlign="center"
      value={value}
      onChange={handleChange}
    />
  )
}
