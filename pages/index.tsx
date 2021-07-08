import { Checkbox, Flex, Heading, Stack, CheckboxGroup, useColorMode, Button, Spacer, useCheckbox } from '@chakra-ui/react'
import Inputfield from '../components/Inputfield'
import CheckboxItem from '../components/CheckboxItem'
import { Children, useState } from 'react'

const IndexPage = () => {
  const { toggleColorMode } = useColorMode()

  const [checkedItems, setCheckedItems] = useState([]);
  const items = [];

  const API_URL = "https://api.datamuse.com/words?";

  const runApi = () => {
    checkedItems.forEach((element) => {
      if (element) {
        console.log(`${element} is checked`)
      }
    })
  }

  return (
    <Flex height="100vh" alignItems="center" justifyContent="flex-start" direction="column">

      <Flex width="100vw">
        <Heading textColor="gray.200" size="md" m={5} >Word Finder 2.0</Heading>
        <Spacer />
        <Button onClick={toggleColorMode} m={5}> ☽ </Button>
      </Flex>

        <Flex height="inherit" alignItems="center" direction="column" justify="center">
          <Inputfield />
          <Stack spacing={6}>
            <CheckboxGroup colorScheme="blue" defaultValue={['similar']} onChange={setCheckedItems}>
              <Flex direction="row"alignItems="left" >      
                <Flex direction="column" alignItems="left">
                  <CheckboxItem value="similar" mx={5} content={'Similar words'} />
                  <CheckboxItem value="antonyms" mx={5} content={'Antonyms'}/>
                </Flex>

                <Flex direction="column" alignItems="left" wrap="inherit">        
                  <CheckboxItem mx={0} value="hypernyms" content={'Hypernyms'} />
                  <CheckboxItem mx={0} value="hyponyms" content={'Hyponyms'} />
                </Flex>

                <Flex direction="column" alignItems="left">   
                  <CheckboxItem mx={5} value="synonyms" content={'Synonyms'}  />
                  <CheckboxItem mx={5} value="rhymes" content={'Rhymes'}  />
                </Flex>

              </Flex>
            </CheckboxGroup>
          </Stack>
          <Button my={10} onClick={runApi}>Search</Button>

        </Flex>
    </Flex>  
  )
}

export default IndexPage
