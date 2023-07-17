import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiAuth";

const useCurrentUser = () => {
  const { data: user, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });
  return { isLoading, user, isAuthenticated: user?.role === "authenticated" };
};
export default useCurrentUser;
