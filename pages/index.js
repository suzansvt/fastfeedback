import { useAuth } from "@/lib/auth";
import { Button, Stack, Icon, Flex, Text, Link } from "@chakra-ui/core";
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
        <script
          dangerouslySetInnerHTML={{
            __html: `
             if (document.cookie && document.cookie.includes('fast-feedback-auth')) {
               window.location.href = "/dashboard"
             }
        `,
          }}
        />
      </head>

      <Icon color="black" name="logo" size="48px" mb={2} />
      <Text mb={4} fontSize="lg" p={6}>
        <Text as="span" fontWeight="bold" display="inline">
          Fast Feedback
        </Text>
        {" is being built as part of "}
        <Link
          href="https://react2025.com"
          isExternal
          textDecoration="underline"
        >
          React 2025
        </Link>
        {`. It's the easiest way to add comments or reviews to your static site. Try it out by leaving a comment below. After the comment is approved, it will display below.`}
      </Text>
      {auth.user ? (
        <Button
          as="a"
          href="/dashboard"
          backgroundColor="white"
          color="gray.900"
          variant="outline"
          fontWeight="medium"
          mt={4}
          _hover={{ bg: "gray.100" }}
          _active={{
            bg: "gray.100",
            transform: "scale(0.95)",
          }}
        >
          View Dashboard{" "}
        </Button>
      ) : (
        <Stack>
          <Button
            onClick={(e) => auth.signinWithGithub()}
            backgroundColor="gray.900"
            color="white"
            fontWeight="lg"
            leftIcon="github"
            _hover={{ bg: "gray.700" }}
            align-self="flex-end"
            _active={{
              bg: "gray.800",
              transform: "scale(0.95)",
            }}
          >
            Sign In with Github
          </Button>
          <Button
            onClick={(e) => auth.signinWithGoogle()}
            backgroundColor="white"
            color="gray.900"
            variant="outLine"
            fontWeight="medium"
            mt={4}
            leftIcon="google"
            _hover={{ bg: "gray.100" }}
            align-self="flex-end"
            _active={{
              bg: "gray.100",
              transform: "scale(0.95)",
            }}
          >
            Sign In with Google
          </Button>
        </Stack>
      )}
    </Flex>
  );
};

export default Home;
