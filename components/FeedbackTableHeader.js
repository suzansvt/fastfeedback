import React from "react";
import {
  Flex,
  Breadcrumb,
  Heading,
  BreadcrumbItem,
  BreadcrumbLink,
  Box,
} from "@chakra-ui/core";
import NextLink from "next/link";

const FeedbackTableHeader = ({ siteName }) => (
  <Box>
    <Breadcrumb>
      <BreadcrumbItem>
        <NextLink href="/feedback" passHref>
          <BreadcrumbLink>Feedback</BreadcrumbLink>
        </NextLink>
      </BreadcrumbItem>
    </Breadcrumb>

    <Flex justifyContent="space-between">
      <Heading mb={8}>All Feedback</Heading>
    </Flex>
  </Box>
);
export default FeedbackTableHeader;
