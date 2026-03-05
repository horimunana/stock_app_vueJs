import { useMutation } from "@tanstack/vue-query";
import { addNewProduct } from "../services/services";

export function useAddNewProduct() {
  return useMutation({
    mutationFn: (productData) => addNewProduct(productData),
  });
}
