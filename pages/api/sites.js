import db from "@/lib/firebase-admin";
export default async function Handler(_, res) {
  const sitesRef = await db.collection("sites");
  const snapshot = await sitesRef.get();
  const sites = [];
  snapshot.forEach((doc) => {
    sites.push({ id: doc.id, ...doc.data() });
  });
  res.status(200).json({ sites });
}
