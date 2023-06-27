import { Box } from "@chakra-ui/react";
import * as React from "react";
import Topbar from "./topbar";

interface PageSetupProps {
  children: React.ReactNode;
}

function PageSetup({ children }: PageSetupProps) {
  return (
    <Box paddingX="32">
      <Topbar />
      <Box paddingTop="8">{children}</Box>
    </Box>
  );
}

export default PageSetup;
