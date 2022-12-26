import { VStack } from "@chakra-ui/react";
import { type NextPage } from "next";
import Search from "../../components/Home/Search";

const Home: NextPage = () => {
  return (
    <VStack>
      <Search />
    </VStack>
  );
};

export default Home;
