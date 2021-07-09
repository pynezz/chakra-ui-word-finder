import { Flex, Heading, Stack, CheckboxGroup, useColorMode, Button, Spacer, Input, useForceUpdate } from '@chakra-ui/react'
import Checkboxes from '../components/Checkboxes'
import ResultData from '../components/ResultData'
import { Children, useState } from 'react'



const IndexPage = () => {

  // TOGGLE DARKMODE
  const { toggleColorMode } = useColorMode()

  // THE API ENDPOINT
  const API_URL = "https://api.datamuse.com/words?";

  // HOOKS
  const [checkedItems, setCheckedItems] = useState([])
  const [inputValue, setInputValue] = useState('');
  const [response, setResponse] = useState([])

  let jsonObj ={

      'ml':     [''],
      'rel_syn':[],
      'rel_ant':[],
      'rel_spc':[],
      'rel_gen':[],
      'rel_rhy':[]
  }
  const dataMap = new Map<string, string[]>()
  const [data, setData] = useState([])

  let calls = ['']

  const handleChange = ({ item, value }) => {
    setCheckedItems(item);
    calls.push(value)
  }
  let responses = ['', '']
  // THE API FUNCTION
  const runApi =  (search) =>  {

    const r: number = 12
    const maxResponses: string = `&max=${r}`
    //search = 'another'
    checkedItems.forEach( async (element) => {
      if (element) {                    // If an element is present
        console.log(element)
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
            //res = JSON.parse(res)
            console.log('Response', res)
            responses.push(element, res)
            setResponse(res);
            jsonObj[element] = JSON.parse(res);
            dataMap.set(element, JSON.parse(res))
            console.log(jsonObj)
            setData(JSON.parse(res))
          }
        };
      }
    })
    
    //var data_ = jsonObj.map(v => v.data)
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
            <CheckboxGroup 
              colorScheme="blue" 
              /*defaultValue={['ml']}*/ 
              onChange={setCheckedItems} //setCheckedItems
            >
              <Flex direction="row"alignItems="left" >
                <Checkboxes />
              </Flex>
            </CheckboxGroup>

          </Stack>
          <Button my={10} onClick={() => runApi(inputValue)}>Search</Button>
          <Flex direction="row">


              <ResultData heading = {'Similar'} results={'jsonObj.ml.keys.apply()'} key={Math.floor(Math.random() * 1000)}/>
              {/* <ResultData heading = {'Hyponyms'} results = {jsonObj['rel_spc']} key={Math.floor(Math.random() * 1000)}/>
              <ResultData heading = {'Rhymes'} results = {data} key={Math.floor(Math.random() * 1000)}/> */}


            {/* <ResultData 
              heading={'Similar'}
              results={data}
            />

            <ResultData 
              heading={'Hypernyms'}
              results={dataMap.size} 
            />

            <ResultData 
              heading={'Hyponyms'}
              results={dataMap.get('rel_gen')} 
            />

            <ResultData 
              heading={'Synonyms'}
              results={dataMap.get('rel_syn')} 
            />

            <ResultData 
              heading={'Antonyms'}
              results={dataMap.values} 
            />

            <ResultData 
              heading={'Rhymes'}
              results={dataMap.forEach(k => k.values.toString())} 
            /> */}
          </Flex>

          

        </Flex>
    </Flex>  
  )
}

export default IndexPage
