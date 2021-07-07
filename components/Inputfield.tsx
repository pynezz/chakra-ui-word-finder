import { Flex, Heading, Input } from "@chakra-ui/react"

export default function InputField() {
  return (
    <Flex height="100vh" alignItems="center" justifyContent="center" direction="column">
      <Flex direction="column" background="white.200" p={2}>
        <Heading textColor="gray.200" size="md">Word Finder 2.0</Heading>
      </Flex>
      <Input placeholder="Enter a word..." variant="filled" type="text" height="100px" width="30vw" m={2} fontSize="4vw" rounded={5}/>
    </Flex>
  )
}