import { useMutation } from "@tanstack/vue-query";
import { loginApi } from "../services/services";

export function useGetToken() {
  return useMutation({
    mutationFn: ({ username, password }) => loginApi({ username, password }),
  });
}
