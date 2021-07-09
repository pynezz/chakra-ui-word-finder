import { Flex, Heading, Stack, CheckboxGroup, useColorMode, Button, Spacer, Input } from '@chakra-ui/react'
import Checkboxes from '../components/Checkboxes'
import ResultData from '../components/ResultData'
import { useState } from 'react'


const IndexPage = () => {

  // TOGGLE DARKMODE
  const { toggleColorMode } = useColorMode()

  // THE API ENDPOINT
  const API_URL = "https://api.datamuse.com/words?";

  // HOOKS
  const [checkedItems, setCheckedItems] = useState([])
  const [inputValue, setInputValue] = useState('');
  const [response, setResponse] = useState([])

  // THE API FUNCTION
  const runApi = (search) => {
    const r: number = 12
    const maxResponses: string = `&max=${r}`
    //search = 'another'
    checkedItems.forEach((element) => {
      if (element) {                    // If an element is checked(this checks for bools)
        let req = new XMLHttpRequest(); // Make a new request:
        console.log(`search term: ${search}`)
        req.open(
          "GET",
          `${API_URL}${element}=${search}${maxResponses}`
        );
        req.setRequestHeader("Accept", "application/json");
        req.send();       // Send the request to the API with the checkbox's value as a parameter
        req.onload = () => {
          // When the request is done
          if (req.status == 200) {
            let res = req.response; // Assign the response to the string variable 'res'
            console.log('Response', JSON.parse(res))
            setResponse(JSON.parse(res));
          }
        };
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
          <Input 
            placeholder="Enter a word..."
            variant="flushed" 
            type="text" 
            height="60px" 
            width="400px" 
            mb={4} 
            fontSize="38px"
            textAlign="center"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
          />
          <Stack spacing={6}>
            <CheckboxGroup colorScheme="blue" /*defaultValue={['ml']}*/ onChange={setCheckedItems}>
              <Flex direction="row"alignItems="left" >
                <Checkboxes />
              </Flex>
            </CheckboxGroup>

          </Stack>
          <Button my={10} onClick={() => runApi(inputValue)}>Search</Button>
          <Flex direction="row">
            {response.map(words => (
              <ResultData
              heading = {'hello'}
              results = {words.word}
               />
            ))}
          </Flex>
          

        </Flex>
    </Flex>  
  )
}

export default IndexPage
