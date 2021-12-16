import { getAllFeedback } from "@/lib/db-admin";
import { db } from "@/lib/db-admin";
export default async function Handler(req, res) {
  const siteId = req.query.siteId;
  const { feedback, result } = await getAllFeedback(siteId);
  if (result.error) {
    res.status(200).json({ error });
  }

  res.status(200).json({ feedback });
}
