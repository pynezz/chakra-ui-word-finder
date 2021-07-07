import { Checkbox, Flex, Heading, Stack, Text } from '@chakra-ui/react'
import Inputfield from '../components/Inputfield'

const IndexPage = () => (
  <Flex height="100vh" alignItems="center" justifyContent="center" direction="column">
    <Flex direction="column" background="white.200" p={2}>
      <Heading textColor="gray.200" size="md">Word Finder 2.0</Heading>
    </Flex>
    <Inputfield />
    <Stack spacing={6}>
      <Flex direction="row">
        <Checkbox mx={5}>check</Checkbox>
        <Checkbox mx={5}>check</Checkbox>
        <Checkbox mx={5}>check</Checkbox>
      </Flex>
      <Flex direction="row">
        <Checkbox mx={5}>check</Checkbox>
        <Checkbox mx={5}>check</Checkbox>
        <Checkbox mx={5}>check</Checkbox>
      </Flex>
    </Stack>    
  </Flex>  
)

export default IndexPage
