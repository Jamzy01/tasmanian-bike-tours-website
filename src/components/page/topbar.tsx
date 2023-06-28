import { Box, Button, ButtonGroup, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Topbar() {
  return (
    <Box
      position="sticky"
      top={0}
      zIndex={1}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      bg="white"
      padding="1"
      borderRadius="0px 0px var(--chakra-radii-md) var(--chakra-radii-md)"
      color="black"
      shadow="md"
    >
      <Text userSelect="none" marginLeft="3">
        Velour Tasmanian Expeditions
      </Text>
      <Box>
        <ButtonGroup color="gray.900" fontWeight="500">
          <Link to="/home">
            <Button color="inherit" fontWeight="inherit">
              Home
            </Button>
          </Link>
          <Link to="/accomodation">
            <Button color="inherit" fontWeight="inherit">
              Accomodation
            </Button>
          </Link>
          <Link to="/contact">
            <Button color="inherit" fontWeight="inherit">
              Contact
            </Button>
          </Link>
        </ButtonGroup>
      </Box>
    </Box>
  );
}

export default Topbar;
