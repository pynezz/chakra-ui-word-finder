import { Checkbox } from "@chakra-ui/react"
import React from "react";

export default function CustomCheckboxGroup(props) {
    const [checkedItem, setcheckedItem] = React.useState(false)
    return(
        <>
            <Checkbox
            id={props.setId}
            isChecked={checkedItem}
            onChange={(e) => setcheckedItem(e.target.checked)}
            >{props.value}
            </Checkbox>
        </>
    )
}