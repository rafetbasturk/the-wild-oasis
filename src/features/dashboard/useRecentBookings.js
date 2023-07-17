import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getBookingsAfterDate } from "../../services/apiBookings";
import { subDays } from "date-fns";

const useRecentBookings = () => {
  const [searchparams] = useSearchParams();
  const numDays = searchparams.get("last") || 7;

  const queryDate = subDays(new Date(), numDays).toISOString();

  const { data: bookings, isLoading } = useQuery({
    queryKey: ["bookings", `last-${numDays}`],
    queryFn: () => getBookingsAfterDate(queryDate),
  });
  return { bookings, isLoading };
};
export default useRecentBookings;
