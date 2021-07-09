import React, { useState } from 'react'
import { Flex, Heading } from '@chakra-ui/react'

const ResultData = ({heading, results}) => {
    
    return (
        <Flex direction="column" mx={4}>
            <h1> {heading} </h1>
            <p> {results} </p>
            
        </Flex>
    )
}

export default ResultData