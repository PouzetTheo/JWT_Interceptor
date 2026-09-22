import { getToken } from "./Auth.service";
import type { ReactNode } from "react";
import { Navigate } from "react-router";

type ProtectedRouteProps = {
  children: ReactNode;
};

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const token = getToken();
  if (!token) {
    return <Navigate to="/" />;
  }
  return <>{children}</>;
}
