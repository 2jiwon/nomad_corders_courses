import { NextApiRequest, NextApiResponse } from "next";
import client from "../../libs/client";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(401).end();
  }

  console.log(req.body);

  const { username, email, password } = req.body;
  let user;

  // signin일때
  if (email === "" && username && password) {
    user = await client.user.findUnique({
      where: {
        username,
      },
    });

    // 해당하는 사용자가 없음
    if (!user) {
      return res.status(200).json({ user: false });
    }

    // 패스워드 틀림
    if (user?.password != password) {
      return res.status(200).json({ password: false });
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

  return res.status(200).json({ ok: true });
}

export default handler;
