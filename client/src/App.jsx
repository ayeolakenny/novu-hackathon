import { Fragment } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Account } from "./pages/Account";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create-account" element={<Account />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
