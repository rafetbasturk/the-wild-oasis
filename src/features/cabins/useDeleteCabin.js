import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin as deleteCabinApi } from "../../services/apiCabins";
import { toast } from "react-hot-toast";

const useDeleteCabin = () => {
  const queryClient = useQueryClient();
  const { isLoading: isDeleting, mutate: deleteCabin } = useMutation({
    // mutationFn: (id) => deleteCabinApi(id),
    mutationFn: deleteCabinApi,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
      toast.success("Cabin deleted.");
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteCabin };
};

export default useDeleteCabin;
