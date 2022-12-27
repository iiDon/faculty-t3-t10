import { Text, ListItem, List, ListIcon, Flex, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { AiOutlineHome, AiOutlineContacts } from "react-icons/ai";
import { SiAboutdotme } from "react-icons/si";

const Items = () => {
  const items = [
    {
      id: 1,
      name: "الدكاترة",
      icon: <AiOutlineHome />,
      link: "/",
    },
    {
      id: 1,
      name: "المواد",
      icon: <AiOutlineHome />,
      link: "/courses",
    },
    {
      id: 2,
      name: "عن الموقع",
      icon: <SiAboutdotme />,
      link: "/about",
    },
    {
      id: 3,
      name: "تواصل معنا",
      icon: <AiOutlineContacts />,
      link: "/contact",
    },
  ];

  return (
    <Flex
      px={3}
      direction="column"
      justify="center"
      alignItems="center"
      w="100%"
      pt={12}
    >
      {items.map((item) => (
        <Link style={{ width: "100%" }} href={item.link} key={item.id}>
          <Flex
            cursor="pointer"
            alignItems="center"
            w="100%"
            mb={3}
            p={2}
            bg="whiteBlue"
            borderRadius="lg"
            _hover={{ bg: "blue.100" }}
          >
            {item.icon}
            <Text mr={3} fontWeight="bold">
              {item.name}
            </Text>
          </Flex>
        </Link>
      ))}
    </Flex>
  );
};

export default Items;
