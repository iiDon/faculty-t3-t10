import { Grid, VStack } from "@chakra-ui/react";
import { type NextPage } from "next";
import { useState } from "react";
import Card from "../../components/Home/Card";
import Search from "../../components/Home/Search";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const { data } = trpc.faculty.getAll.useQuery();
  const [search, setSearch] = useState("");

  console.log(search);
  return (
    <VStack>
      <Search faculty={data} setSearch={setSearch} />
      <Grid
        templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]}
        gap={6}
        w="100%"
      >
        {data
          ?.filter((faculty) => faculty.name === search || search === "")
          .map((faculty) => (
            <Card key={faculty.id} faculty={faculty} />
          ))}
      </Grid>
    </VStack>
  );
};

export default Home;
