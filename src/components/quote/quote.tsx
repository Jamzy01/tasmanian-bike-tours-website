import { Box, Text } from "@chakra-ui/react";
import * as React from "react";

interface QuoteProps {
  children: React.ReactNode;
}

function Quote({ children }: QuoteProps) {
  return (
    <Box display="flex" justifyContent="center">
      <Text
        fontSize="5xl"
        maxWidth="40%"
        textAlign="center"
        fontFamily="'Dancing Script', cursive"
      >
        "{children}"
      </Text>
    </Box>
  );
}

export default Quote;
