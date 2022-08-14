import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(req.body);

  if (req.method !== "POST") {
    res.status(401).end();
  }
  res.status(200).json({ ok: true });
}
