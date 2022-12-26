import { Flex, Image, VStack } from "@chakra-ui/react";
import Items from "./Items";

const Sidebar = () => {
  return (
    <Flex justify="center" alignItems="center" w="100%">
      <VStack w="100%">
        {/* open and close side bar icon */}

        <Image src="/images/logo.png" alt="logo" />
        <Items />
      </VStack>
    </Flex>
  );
};

export default Sidebar;
