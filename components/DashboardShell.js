import React, { Children } from "react";
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
import { useAuth } from "@/lib/auth";
import { transform } from "framer-motion";
import AddSiteModel from "./AddSiteModel";

const DashboardShell = ({ children }) => {
  const { user, signout } = useAuth();
  return (
    <Box backgroundColor="gray.100" h="100hv">
      <Flex backgroundColor="white" mb={16} w="full">
        <Flex
          alignItems="center"
          justifyContent="space-between"
          pt={4}
          pb={4}
          maxW="1250px"
          margin="0 auto"
          w="full"
          px={8}
        >
          <Flex>
            <Icon name="logo" size="24px" mr={8} />
            <Link mr={4}>Sites</Link>
            <Link>Feedbacks</Link>
          </Flex>
          <Flex justifyContent="center" alignItems="center">
            {user && (
              <Button variant="ghost" mr={2} onClick={() => signout()}>
                Log out
              </Button>
            )}
            <Avatar size="sm" src={user?.photoUrl} />
          </Flex>
        </Flex>
      </Flex>
      <Flex margin="0 auto" direction="column" maxW="1250px" px={8}>
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink>Sites</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <Flex justifyContent="space-between">
          <Heading mb={8}>My Sites</Heading>
          <AddSiteModel>+ Add Site</AddSiteModel>
        </Flex>
        {children}
      </Flex>
    </Box>
  );
};

export default DashboardShell;
