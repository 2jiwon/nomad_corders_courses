import { NextApiRequest, NextApiResponse } from "next";
import client from "../../libs/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(401).end();
  }

  console.log(req.body);

  const { username, email, password } = req.body;
  let user;

  // signin일때
  if (!email && username && password) {
    user = await client.user.findUnique({
      where: {
        username,
      },
    });

    // 패스워드 틀림
    if (user?.password != password) {
      res.status(200).json({ password: false });
    }

    // 해당하는 사용자가 없음
    if (!user) {
      res.status(200).json({ user: false });
    }
  }

  // signup일때
  if (email && username && password) {
    user = await client.user.create({
      data: {
        username,
        email,
        password,
      },
    });
  }

  res.status(200).json({ ok: true });
}
