import { Checkbox, CheckboxGroup, Flex } from "@chakra-ui/react";
import CheckboxItem from "./CheckboxItem";
import React from "react";

const Checkboxes = () => {
	return (
		<>
			<Flex direction="column" alignItems="left">
				<CheckboxItem value="ml" mx={5} content={"Similar words"} />
				<CheckboxItem value="rel_ant" mx={5} content={"Antonyms"} />
			</Flex>

			<Flex direction="column" alignItems="left" wrap="inherit">
				<CheckboxItem mx={0} value="rel_gen" content={"Hypernyms"} />
				<CheckboxItem mx={0} value="rel_spc" content={"Hyponyms"} />
			</Flex>

			<Flex direction="column" alignItems="left">
				<CheckboxItem mx={5} value="rel_syn" content={"Synonyms"} />
				<CheckboxItem mx={5} value="rel_rhy" content={"Rhymes"} />
			</Flex>
		</>
	);
};

export default Checkboxes;
