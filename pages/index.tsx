import { Checkbox, Flex, Heading, Stack, CheckboxGroup } from '@chakra-ui/react'
import Inputfield from '../components/Inputfield'
import CheckboxItem from '../components/CheckboxItem'

const IndexPage = () => (
  <Flex height="100vh" alignItems="center" justifyContent="center" direction="column">
    <Flex direction="column" background="white.200" p={2}>
      <Heading textColor="gray.200" size="md">Word Finder 2.0</Heading>
    </Flex>
    <Inputfield />
    <Stack spacing={6}>
      <CheckboxGroup colorScheme="blue" defaultValue={['similar']}>
        <Flex direction="row"alignItems="left" >      

          <Flex direction="column" alignItems="left">
            <CheckboxItem mx={5} value="Similar words" setId={'similar'}  />
            <Checkbox mx={5} value="antonyms">Antonyms</Checkbox>
          </Flex>

          <Flex direction="column" alignItems="left">        
            <Checkbox mx={2} value="hypernyms">Hypernyms</Checkbox>
            <Checkbox mx={2} value="hyponyms">Hyponyms</Checkbox>
          </Flex>

          <Flex direction="column" alignItems="left">   
            <Checkbox mx={5} value="synonyms">Synonyms</Checkbox>
            <Checkbox mx={5} value="rhymes">Rhymes</Checkbox>
          </Flex>

        </Flex>
      </CheckboxGroup>
    </Stack>    
  </Flex>  
)

export default IndexPage
