import { Prisma, PrismaClient } from "@prisma/client";

declare global {
  var client: PrismaClient | undefined;
}

// global client를 client에 저장. 해당 값이 없으면 PrismaClient 생성
const client = global.client || new PrismaClient();

// 개발모드 일 때만
if (process.env.NODE_ENV === "development") {
  global.client = client;
}

export default client;
