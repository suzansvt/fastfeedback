import EmptyState from "@/components/EmptyState";
import SiteTableSkeleton from "@/components/SiteTableSkeleton";
import { useAuth } from "@/lib/auth";
import useSWR from "swr";
import DashboardShell from "@/components/DashboardShell";
import fetcher from "utils/fetcher";
import FeedbackTable from "@/components/FeedbackTable";
import FeedbackTableHeader from "@/components/FeedbackTableHeader";
import { useRouter } from "next/router";
import Page from "@/components/Page";
const SiteFeedback = () => {
  const { user } = useAuth();
  const { query } = useRouter();
  const { data } = useSWR(
    user ? [`/api/feedback/${query.siteId}`, user.token] : null,
    fetcher
  );
  console.log(data);
  if (!data) {
    return (
      <DashboardShell>
        <FeedbackTableHeader />
        <SiteTableSkeleton />
      </DashboardShell>
    );
  }
  return (
    <DashboardShell>
      <FeedbackTableHeader siteName={data.site.name} />
      {data?.feedback ? (
        <FeedbackTable allFeedback={data.feedback} />
      ) : (
        <EmptyState />
      )}
    </DashboardShell>
  );
};

const SiteFeedbackPage = () => (
  <Page name="All Feedback" path="/feedback">
    <SiteFeedback />
  </Page>
);
export default SiteFeedbackPage;
