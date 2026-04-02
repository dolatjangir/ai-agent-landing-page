import { prisma } from "./prisma";


export async function getSEO(slug: string) {
  return prisma.sEOEntry.findUnique({
    where: { slug },
  });
}