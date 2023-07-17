import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { signup as signupApi } from "../../services/apiAuth";

const useSignup = () => {
  const navigate = useNavigate();
  const { isLoading, mutate: signup } = useMutation({
    mutationFn: signupApi,
    onSuccess: () => {
      toast.success("Account successfully created! Please verify your email!")
      navigate("/dashboard", { replace: true });
    },
    onError: (err) => {
      console.log("ERROR", err);
      toast.error(err.message);
    },
  });
  return { signup, isLoading };
};
export default useSignup;
