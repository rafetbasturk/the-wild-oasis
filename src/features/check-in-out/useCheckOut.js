import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import { toast } from "react-hot-toast";

const useCheckOut = () => {
  const queryClient = useQueryClient();
  const { mutate: checkOut, isLoading: isCheckingOut } = useMutation({
    mutationFn: (id) =>
      updateBooking(id, {
        status: "checked-out",
      }),
    onSuccess: (data) => {
      toast.success(`Booking #${data.id} successfully checked out.`);
      queryClient.invalidateQueries({ active: true });
    },
    onError: () => {
      toast.error("There was an error while checking out.");
    },
  });

  return { checkOut, isCheckingOut };
};
export default useCheckOut;
