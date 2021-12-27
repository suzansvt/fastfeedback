import { getAllFeedback } from "@/lib/db-admin";
export default async function Handler(req, res) {
  try {
    const [siteId, route] = req.query.site;
    const { feedback } = await getAllFeedback(siteId, route);
    console.log({ feedback });
    res.status(200).json({ feedback });
  } catch (error) {
    res.status(500).json({ error });
  }
}
