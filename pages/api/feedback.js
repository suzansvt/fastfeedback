import { getAllFeedback } from "@/lib/db-admin";
import { auth } from "@/lib/firebase-admin";
export default async function Handler(req, res) {
  try {
    const { uid } = await auth.verifyIdToken(req.headers.token);
    const { feedback } = await getAllFeedback(uid);

    res.status(200).json({ feedback });
  } catch (error) {
    res.status(200).json({ error });
  }
}
