import { Box } from "@chakra-ui/react";
import type { Faculty, RateValue } from "@prisma/client";
import Select from "react-select";

interface Props {
  faculty:
    | (Faculty & {
        Rate: {
          RateValue: RateValue[];
        }[];
        Department: {
          name: string;
        } | null;
      })[]
    | undefined;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const Search = (Props: Props) => {
  const facultyNames = Props.faculty?.map((faculty) => ({
    value: faculty.id,
    label: faculty.name,
  }));

  return (
    <Box w="100%">
      <Select
        name="color"
        className="basic-single"
        classNamePrefix="select"
        isRtl
        isSearchable
        isClearable
        options={facultyNames}
        onChange={(e) => Props.setSearch(e?.label || "")}
      />
    </Box>
  );
};

export default Search;
