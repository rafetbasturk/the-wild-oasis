import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const useLogin = () => {
  const queryClient = useQueryClient()
  const navigate = useNavigate();
  const { isLoading, mutate: login } = useMutation({
    mutationFn: loginApi,
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user.user)
      navigate("/dashboard", { replace: true });
    },
    onError: (err) => {
      console.log("ERROR", err);
      toast.error(err.message);
    },
  });
  return { login, isLoading };
};
export default useLogin;
