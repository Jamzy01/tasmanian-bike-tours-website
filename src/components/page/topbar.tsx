import {
  Box,
  Button,
  ButtonGroup,
  Circle,
  HStack,
  Text,
} from "@chakra-ui/react";

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
        Tasmanian Adventures
      </Text>
      <Box>
        <ButtonGroup color="gray.900" fontWeight="500">
          <Button color="inherit" fontWeight="inherit">
            Home
          </Button>
          <Button color="inherit" fontWeight="inherit">
            Events
          </Button>
          <Button color="inherit" fontWeight="inherit">
            Accomodation
          </Button>
          <Button color="inherit" fontWeight="inherit">
            Contact
          </Button>
        </ButtonGroup>
      </Box>
    </Box>
  );
}

export default Topbar;
