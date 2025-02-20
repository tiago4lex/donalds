import { db } from "@/lib/lib";

export const getRestaurantBySlug = async (slug: string) => {
  const restaurant = await db.restaurant.findUnique({ where: { slug: slug } });
  return restaurant;
};
