import type { ReactNode } from "react";
import { Navigate } from "react-router";
import { hasRole } from "./Auth.service";

type RoleRouteProps = {
  children: ReactNode;
  roles: string[];
};

export function RoleRoute({ children, roles }: RoleRouteProps) {
  const isAuthorized = roles.some((role) => hasRole(role));

  if (!isAuthorized) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
}