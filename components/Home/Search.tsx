import { Box } from "@chakra-ui/react";
import Select from "react-select";

const Search = () => {
  const colourOptions = [
    { value: "ocean", label: "Ocean" },
    { value: "blue", label: "Blue" },
    { value: "purple", label: "Purple" },
    { value: "red", label: "Red" },
    { value: "orange", label: "Orange" },
    { value: "yellow", label: "Yellow" },
    { value: "green", label: "Green" },
    { value: "forest", label: "Forest" },
  ];
  return (
    <Box w="100%">
      <Select
        name="color"
        className="basic-single"
        classNamePrefix="select"
        isRtl
        isSearchable
        options={colourOptions}
      />
    </Box>
  );
};

export default Search;
