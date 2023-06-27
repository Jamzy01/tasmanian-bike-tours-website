import { Box, Divider, Text } from "@chakra-ui/react";
import * as React from "react";

interface QuoteProps {
  children: React.ReactNode;
}

function Quote({ children }: QuoteProps) {
  return (
    <Box display="flex" alignItems="center" flexDirection="column" gap="3">
      <Divider
        width="8%"
        borderBottomWidth="1px"
        borderColor="whiteAlpha.500"
      />
      <Text
        fontSize="5xl"
        width="60%"
        textAlign="center"
        fontFamily="'Dancing Script', cursive"
      >
        "{children}"
      </Text>
      <Divider
        width="8%"
        borderBottomWidth="1px"
        borderColor="whiteAlpha.500"
      />
    </Box>
  );
}

export default Quote;
