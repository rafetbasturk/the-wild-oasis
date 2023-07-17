import Button from "../../ui/Button";
import SpinnerMini from "../../ui/SpinnerMini";
import useCheckOut from "./useCheckOut";

function CheckoutButton({ id }) {
  const { checkOut, isCheckingOut } = useCheckOut();
  return (
    <Button variation="primary" size="small" onClick={() =>checkOut(id)} disabled={isCheckingOut}>
      {isCheckingOut ? <SpinnerMini /> : "Check out"}
    </Button>
  );
}

export default CheckoutButton;
