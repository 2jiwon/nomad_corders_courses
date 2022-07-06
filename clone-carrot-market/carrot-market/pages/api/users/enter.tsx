import client from "@libs/client/client";
import withHandler from "@libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { phone, email } = req.body;
  const user = await client.user.upsert({
    where: {
      ...(phone && { phone: +phone }),
      ...(email && { email }),
    },
    create: {
      name: "Anonymous",
      ...(phone && { phone: +phone }),
      ...(email && { email }),
    },
    update: {},
  });
  console.log(user);

  return res.status(200).end();
}

export default withHandler("POST", handler);
