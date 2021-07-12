import { Flex, Heading, Stack, CheckboxGroup, useColorMode, Button, Spacer, Input } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import Words from '../components/Words'

const IndexPage = () => {

  // TOGGLE DARKMODE
  const { toggleColorMode } = useColorMode()

  // THE API ENDPOINT
  const API_URL = "https://api.datamuse.com/words?";

  // HOOKS
  const [inputValue, setInputValue] = useState('');
  const [response, setResponse] = useState([])

  useEffect(() => {
    getWords('ml', 'boat');
  }, []);

  // THE API FUNCTION
  const getWords = async (param, search) => {
    const response = await fetch(`${API_URL}${param}=${search}&max=12`);
    const data = await response.json();
    let textObj = await JSON.stringify(data);
    textObj = JSON.parse(textObj)
    setResponse(data);
    console.log(textObj[0]);
  }
    //var data_ = jsonObj.map(v => v.data)
  

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
          <Stack spacing={5}>
            <Flex direction="column">
              {response.map(word => (
                  <Words data={word.word}></Words>
              ))}

            </Flex>
          </Stack>
          

          {/* <Button my={10} onClick={() => runApi(inputValue)}>Search</Button> */}
          {/* <ApiData parameter='ml' maxRes='&max=12' search={inputValue} /> */}
        </Flex>
    </Flex>  
  )
}

export default IndexPage
