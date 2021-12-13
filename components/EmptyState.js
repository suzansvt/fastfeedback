import React from "react";
import {
  ChakraProvider,
  Flex,
  Link,
  Stack,
  Icon,
  Avatar,
  Breadcrumb,
  Heading,
  Box,
  BreadcrumbItem,
  BreadcrumbLink,
  Text,
  Button,
} from "@chakra-ui/core";

import DashboardShell from "./DashboardShell";
import AddSiteModel from "./AddSiteModel";

const EmptyState = () => (
  <DashboardShell>
    <Flex
      width="100%"
      backgroundColor="white"
      borderRadius="8px"
      p={16}
      justify="center"
      align="center"
      direction="column"
    >
      <Heading size="lg" mb={2} >
        You havent added any sites.
      </Heading>
      <Text mb={4}>WElcome👋 Lets get started!</Text>
      <AddSiteModel />
    </Flex>
  </DashboardShell>
);

export default EmptyState;
