import { useQuery } from "@tanstack/vue-query";
import { getProducts } from "../services/services";

export function useGetProducts() {
  return useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
}
