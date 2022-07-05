import { NextApiRequest, NextApiResponse } from "next";
import client from "../../../libs/client/client";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.status(401).end();
  }
  console.log(req.body);
  res.json({ ok: true });
}

export default withHandler("POST", handler);
