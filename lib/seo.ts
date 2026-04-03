import { prisma } from "./prisma";


export async function getSEO(slug: string) {
  return prisma.seoEntry.findUnique({
    where: { slug },
  });
}