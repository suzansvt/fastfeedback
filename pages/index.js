import { useAuth } from '@/lib/auth';
import { Button, Heading, Text, Code } from "@chakra-ui/core";
export default function Home() {
  const auth = useAuth();
  return (
     
    <div className="container">
       <head>
         <title>Fast Feedback</title>
       </head>
      <main>
        <Heading>
          Fast Feedback
        </Heading>

        <Text>
          Current user: <Code>{auth.user ? auth.user.email :'None'}</Code>
        </Text>
        
        
        {auth.user ? (
         <Button onClick={(e) => auth.signout()}>Sign Out</Button>
        ) :(
          <Button onClick={(e) => auth.signinWithGithub()}>Sign In</Button>
        )
      }
      </main>

    </div>
  )
}
