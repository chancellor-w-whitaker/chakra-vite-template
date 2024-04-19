import { Container, Flex } from "@chakra-ui/react";

import Details from "./Details";
import Cart from "./Cart";

const EggheadPage = () => {
  return (
    <Container maxWidth="container.xl" padding={0}>
      <Flex
        direction={{ base: "column-reverse", md: "row" }}
        height={{ base: "auto", md: "100vh" }}
        paddingY={[0, 10, 20]}
      >
        <Details></Details>
        <Cart></Cart>
      </Flex>
    </Container>
  );
};

export default EggheadPage;
