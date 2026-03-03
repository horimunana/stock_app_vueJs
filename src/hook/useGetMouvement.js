import { useQuery } from "@tanstack/vue-query";
import { getMouvements } from "../services/services";

export function useGetMouvements() {
  return useQuery({
    queryKey: ["mouvements"],
    queryFn: getMouvements,
  });
}
