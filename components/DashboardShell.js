import React, { Children, useEffect } from "react";
import { Flex, Link, Icon, Avatar, Box, Button } from "@chakra-ui/core";
import { useAuth } from "@/lib/auth";
import NextLink from "next/link";
import { NextSeo } from "next-seo";
const DashboardShell = ({ children }) => {
  const { user, signout } = useAuth();
  // const path = window.location.pathname;
  // const name = path.charAt(1).toUpperCase() + path.slice(2);
  // const title = ` Fast Feedback – ${name}`;
  // const url = ` http://fastfeedback-suzansvt.vercel.app${path}`;
  return (
    <>
      {/* <NextSeo
        title={title}
        canonical={url}
        openGraph={{
          url,
          title,
        }}
      /> */}
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
              <NextLink href="/" passHref>
                <Link>
                  <Icon name="logo" size="24px" mr={8} />
                </Link>
              </NextLink>
              <NextLink href="/dashboard" passHref>
                <Link mr={4}>Sites</Link>
              </NextLink>
              <NextLink href="/feedback" passHref>
                <Link>Feedback</Link>
              </NextLink>
            </Flex>
            <Flex justifyContent="center" alignItems="center">
              {/* {user && (
              <Button variant="ghost" mr={2} onClick={() => signout()}>
                Log out
              </Button>
            )} */}{" "}
              <NextLink href="/account" passHref>
                <Link>
                  <Button variant="ghost" mr={2}>
                    Account
                  </Button>
                </Link>
              </NextLink>
            </Flex>
          </Flex>
        </Flex>
        <Flex margin="0 auto" direction="column" maxW="1250px" px={8}>
          {children}
        </Flex>
      </Box>
    </>
  );
};

export default DashboardShell;
