import { Box, Button, Text } from "@chakra-ui/react";

function Topbar() {
  return (
    <Box
      position="sticky"
      top={0}
      display="flex"
      justifyContent="center"
      minHeight="var(--chakra-sizes-10)"
      bg="white"
      borderRadius="0px 0px var(--chakra-radii-md) var(--chakra-radii-md)"
      shadow="mds"
    >
      <Text>Topbar</Text>
    </Box>
  );
}

export default Topbar;
