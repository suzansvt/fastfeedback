import { useAuth } from "@/lib/auth";
import { Button, Heading, Text, Code, Icon, Flex } from "@chakra-ui/core";
const Home = () => {
  const auth = useAuth();
  return (
    <Flex
      as="main"
      direction="column"
      align="center"
      justify="center"
      h="100vh"
    >
      <head>
        <title>Fast Feedback</title>
      </head>
      <Icon color="black" name="logo" size="48px" />
      {auth.user ? (
        <Button
          as="a"
          href="/dashboard"
          backgroundColor="gray.900"
          color="white"
          fontWeight="medium"
          mt={4}
          maxW="200px"
          _hover={{ bg: "gray.700" }}
          _active={{
            bg: "gray.800",
            transform: "scale(0.95)",
          }}
        >
          View Dashboard{" "}
        </Button>
      ) : (
        <Button mt={4} size="sm" onClick={(e) => auth.signinWithGithub()}>
          Sign In
        </Button>
      )}
    </Flex>
  );
};

export default Home;
