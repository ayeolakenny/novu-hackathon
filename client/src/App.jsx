import { Fragment } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Register } from "./pages/Signup";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create-account" element={<Register />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
