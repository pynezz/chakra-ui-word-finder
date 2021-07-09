import React, { useState } from 'react'
import { Flex, Heading } from '@chakra-ui/react'

const ResultData = (props) => {
    
    return (
        <Flex direction="column" mx={4}>
            <h1> {props.heading} </h1>
            <p> {props.results} </p>
            
        </Flex>
    )
}

export default ResultData