import { Checkbox } from "@chakra-ui/react"
import React from "react";

export default function CustomCheckboxItem(props) {
    const [checkedItem, setcheckedItem] = React.useState(false)

    return(
        <>
            <Checkbox
            mx={props.mx}
            id={props.id}
            isChecked={checkedItem}
            onChange={(e) => setcheckedItem(e.target.checked)}
            value={props.value}
            >{props.content}
            </Checkbox>
        </>
    )
}