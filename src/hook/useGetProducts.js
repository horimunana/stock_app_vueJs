import { useQuery } from "@tanstack/vue-query";
import { getProducts } from "../services/services";

export function useGetProducts() {
  return useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
    // onSuccess: (data) => {
    //   localStorage.setItem("products", JSON.stringify(data));
    //   console.log("Products data:", data);
    // },
  });
}
