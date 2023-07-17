import { useNavigate } from "react-router-dom";
import useCurrentUser from "../features/authentication/useCurrentUser";
import Spinner from "./Spinner";
import { styled } from "styled-components";
import { useEffect } from "react";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  // 1. Check if user is authenticated
  const { isLoading, isAuthenticated } = useCurrentUser();

  // 2. If no authenticated user, redirect to the "/login" route
  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/login");
  }, [isAuthenticated, isLoading, navigate]);

  // 3. Show loading spinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  // 4. If user is authenticated, render the app
  if (isAuthenticated) return children;
};
export default ProtectedRoute;
