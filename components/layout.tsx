import { Grid, GridItem } from "@chakra-ui/react";
import Sidebar from "./Sidebar/Sidebar";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <Grid
      dir="rtl"
      templateAreas={`"nav main "
                  "nav main "
                  "footer  footer"`}
      gridTemplateColumns={[`1fr`, `20rem 1fr}`, `20rem 1fr}`]}
    >
      <GridItem h="95vh" bg="lightBlue" area={"nav"}>
        <Sidebar />
      </GridItem>
      <GridItem p={4} bg="gray.200" area={"main"}>
        {children}
      </GridItem>
      <GridItem h="5vh" bg="blue.800" area={"footer"}>
        Footer
      </GridItem>
    </Grid>
  );
}
