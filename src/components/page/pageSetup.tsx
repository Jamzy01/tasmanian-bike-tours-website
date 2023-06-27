import { Box } from "@chakra-ui/react";
import * as React from "react";
import Topbar from "./topbar";

interface PageSetupProps {
  children: React.ReactNode;
}

function PageSetup({ children }: PageSetupProps) {
  return (
    <Box paddingX="48" overflow="clip">
      <Topbar />
      <Box marginTop="8">{children}</Box>
    </Box>
  );
}

export default PageSetup;
