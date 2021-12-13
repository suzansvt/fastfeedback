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
          <Button onClick={(e) => auth.signout()}>Sign Out</Button>
        ) : (
          <Button mt={4} size="sm"onClick={(e) => auth.signinWithGithub()}
          >
             Sign In
          </Button>

        )}
      </Flex>
   
  );
};

export default Home;