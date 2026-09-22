import { Route } from "react-router";
import { TodosPage } from "./todos/TodosPage";
import { ProtectedRoute } from "./auth/ProtectedRoute";
import { RoleRoute } from "./auth/RoleRoute";

export function App() {
  return (
    <main className="container">
     <Route
  path="/todos"
  element={
    <ProtectedRoute>
      <RoleRoute roles={["ROLE_USER", "ROLE_ADMIN"]}>
        <TodosPage />
      </RoleRoute>
    </ProtectedRoute>
  }
/>
    </main>
  );
}
