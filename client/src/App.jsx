import { Fragment } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Account } from "./pages/Account";
import { Protected } from "./components/Protected";
import Dashboard from "./pages/Dashboard";
import { useGlobalState } from "./data/custom";

function App() {
  const user = useGlobalState("user");
  return (
    <Fragment>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create-account" element={<Account />} />
            <Route
              path="/dashboard"
              element={
                <Protected isLoggedIn={user ? true : false}>
                  <Dashboard user={user} />
                </Protected>
              }
            />
          </Routes>
        </Layout>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
