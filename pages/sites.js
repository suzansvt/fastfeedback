import EmptyState from "@/components/EmptyState";
import SiteTableSkeleton from "@/components/SiteTableSkeleton";
import { useAuth } from "@/lib/auth";
import useSWR from "swr";
import DashboardShell from "@/components/DashboardShell";
import fetcher from "utils/fetcher";
import SiteTable from "@/components/siteTable";
import SiteTableHeader from "@/components/SiteTableHeader";
import Page from "@/components/Page";

const Dashboard = () => {
  const { user } = useAuth();
  const { data } = useSWR(user ? ["/api/sites", user.token] : null, fetcher);

  if (!data) {
    return (
      <DashboardShell>
        <SiteTableHeader />
        <SiteTableSkeleton />
      </DashboardShell>
    );
  }
  return (
    <DashboardShell>
      <SiteTableHeader />
      {data.sites ? <SiteTable sites={data.sites} /> : <EmptyState />}
    </DashboardShell>
  );
};
const DashboardPage = () => (
  <Page name="Dashboard" path="/dashboard">
    <Dashboard />
  </Page>
);
export default DashboardPage;
