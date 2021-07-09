import React from 'react'
import { Flex, Heading } from '@chakra-ui/react'

const ResultData = ({heading, results}) => {
    return (
        <Flex direction="column">
            <Heading>
                {heading}
            </Heading>
            <p>
                {results}
            </p>
        </Flex>
    )
}

export default ResultData