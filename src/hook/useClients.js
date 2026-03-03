import { useQuery } from "@tanstack/vue-query";
import { getClients } from "../services/services";

export function useGetClients() {
  return useQuery({
    queryKey: ["clients"],
    queryFn: getClients,
  });
}
