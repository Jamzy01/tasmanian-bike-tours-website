import { Box, Heading, Image, Text } from "@chakra-ui/react";
import PageSetup from "../../components/page/pageSetup";
import background from "./assets/background.jpg";
import Quote from "../../components/quote/quote";

function HomePage() {
  return (
    <PageSetup>
      <Text>Home Page</Text>
      <Heading fontSize="7xl" marginTop="16" color="white">
        Tasmanian Adventures
      </Heading>
      <Image
        position="fixed"
        left={0}
        top={0}
        zIndex={-1}
        src={background}
        filter="contrast(110%) saturate(70%)"
        height="150vh"
        width="100vw"
        objectFit="cover"
      />
      <Text marginTop="4" fontSize="2xl" maxWidth="60%" color="gray.100">
        Take a trip down Tasmania's east coast taking in the views and produce
        without the hassle of transport and picking places to travel.
      </Text>
      <Box height="900px" bg="whiteAlpha.400" marginTop="16" padding="12">
        <Quote>An experience like nothing you'll ever see</Quote>
      </Box>
    </PageSetup>
  );
}

export default HomePage;
