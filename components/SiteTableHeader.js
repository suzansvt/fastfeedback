import React from "react";
import {
  Flex,
  Breadcrumb,
  Heading,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/core";
import AddSiteModel from "./AddSiteModel";

const SiteTableHeader = () => (
  <>
    <Breadcrumb>
      <BreadcrumbItem>
        <BreadcrumbLink>Sites</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
    <Flex justifyContent="space-between">
      <Heading mb={8}>My Sites</Heading>
      <AddSiteModel>+ Add Site</AddSiteModel>
    </Flex>
  </>
);
export default SiteTableHeader;
