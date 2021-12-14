import EmptyState from "@/components/EmptyState";
import SiteTableSkeleton from "@/components/SiteTableSkeleton";
import { useAuth } from "@/lib/auth";
import useSWR from "swr";
import DashboardShell from "@/components/DashboardShell";
import { Button, Heading, Text, Code, Icon, Flex } from "@chakra-ui/core";
import fetcher from "utils/fetcher";
import SiteTable from "@/components/siteTable";
const Dashboard = () => {
  const auth = useAuth();
  const { data } = useSWR("/api/sites", fetcher);

  console.log(data);
  if (!data) {
    return (
      <DashboardShell>
        <SiteTableSkeleton />
      </DashboardShell>
    );
  }
  return (
    <DashboardShell>
      {data.sites ? <SiteTable sites={data.sites} /> : <EmptyState />}
    </DashboardShell>
  );
};

export default Dashboard;
