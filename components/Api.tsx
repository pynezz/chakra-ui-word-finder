import { Button } from "@chakra-ui/react";
import React, { useState, useEffect } from "react"

interface IProps {
    parameter: string,
    maxRes: string,
    search: string
}

// const ApiData : React.FC<IProps> = ({parameter, maxRes, search }): JSX.Element => {
//     const API_URL = "https://api.datamuse.com/words?";
//     let res = fetch(`${API_URL}${parameter}=${search}${maxRes}`, {
//         method:'GET',
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     }).then(res => console.log(res))
//     .catch(err => console.log(err))
//     return <ApiData parameter={parameter} maxRes={maxRes} search={search}>
        
    
//     <p>{res}</p>
    
//     </ApiData>
    
// }
/*
    Parameter: what to ask the API for (ml, rel_rhy etc.)
    maxRes: Max responses
    Search: Keyword(s) to search for
    Category: Similar, Rhymes etc.
*/
// const ResComp = ({parameter, maxRes, search, category}) => {
//     const API_URL = "https://api.datamuse.com/words?";
//     let res = fetch(`${API_URL}${parameter}=${search}${maxRes}`, {
//     method:'GET',
//     headers: {
//         'Content-Type': 'application/json'
//     }}).then(res => console.log(res)).catch(err => console.log(err))
//     return (
//         <>
//             <h1>{category}</h1>
//             <p>{res}</p>
//         </>
//     )
// }


// export default ApiData
// export default ResComp