import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking as deleteBookingApi } from "../../services/apiBookings";
import { toast } from "react-hot-toast";

const useDeleteBooking = () => {
  const queryClient = useQueryClient();
  const { mutate: deleteBooking, isLoading: isDeleting } = useMutation({
    // mutationFn: (id) => deleteBookingApi(id),
    mutationFn: deleteBookingApi,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["bookings"],
        // or
        // active: true
      });
      toast.success(`Booking successfully deleted.`);
    },
    onError: (err) => toast.error(err.message),
  });
  return { deleteBooking, isDeleting };
};
export default useDeleteBooking;
