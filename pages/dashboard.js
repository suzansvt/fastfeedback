import EmptyState from "@/components/EmptyState";
import { useAuth } from "@/lib/auth";
import { Button, Heading, Text, Code, Icon, Flex } from "@chakra-ui/core";
const Dashboard=() => {
  const auth = useAuth();
  if(!auth.user){
      return '...Loading'
    
  }
  return <EmptyState />;

}

export default Dashboard;
