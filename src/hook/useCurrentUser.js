import { useQuery } from "@tanstack/vue-query";
import { getCurrentUser } from "../services/services";

export function useCurrentUser() {
  return useQuery({
    queryKey: ["users"],
    queryFn: getCurrentUser,
  });
}
