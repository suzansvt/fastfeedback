import { compareDesc, parseISO } from "date-fns";
import { db } from "./firebase-admin";

export async function getAllSites() {
  const snapshot = await db.collection("sites").get();

  const sites = [];

  snapshot.forEach((doc) => {
    sites.push({ id: doc.id, ...doc.data() });
  });

  return { sites };
}

export async function getUserSites(uid) {
  const snapshot = await db
    .collection("sites")
    .where("authorId", "==", uid)
    .get();
  const sites = [];

  snapshot.forEach((doc) => {
    sites.push({ id: doc.id, ...doc.data() });
  });
  sites.sort((a, b) =>
    compareDesc(parseISO(a.createdAt), parseISO(b.createdAt))
  );

  return { sites };
}

export async function getAllFeedback(siteId, route) {
  try {
    let ref = db
      .collection("feedback")
      .where("siteId", "==", siteId)
      .where("status", "==", "active");

    if (route) {
      ref = ref.where("route", "==", route);
    }

    const snapshot = await ref.get();
    const feedback = [];

    snapshot.forEach((doc) => {
      feedback.push({ id: doc.id, ...doc.data() });
    });
    feedback.sort((a, b) =>
      compareDesc(parseISO(a.createdAt), parseISO(b.createdAt))
    );
    return { feedback };
  } catch (error) {
    return { error };
  }
}

export async function getUserFeedback(uid) {
  const snapshot = await db
    .collection("feedback")
    .where("authorId", "==", uid)
    .where("status", "in", ["pending", "active"])
    .get();
  const feedback = [];

  snapshot.forEach((doc) => {
    feedback.push({ id: doc.id, ...doc.data() });
  });

  return { feedback };
}

export async function getSite(siteId) {
  const doc = await db.collection("sites").doc(siteId).get();
  const site = { id: doc.id, ...doc.data() };

  return { site };
}
