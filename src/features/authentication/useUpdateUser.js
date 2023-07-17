import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCurrentUser } from "../../services/apiAuth";
import { toast } from "react-hot-toast";

const useUpdateUser = () => {
  const queryClient = useQueryClient();
  const { isLoading, mutate: updateUser } = useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
      toast.success("User successfully updated");
    },
    onError: (err) => {
      console.log(err);
      toast.error(err.message);
    },
  });

  return { updateUser, isLoading };
};
export default useUpdateUser;
