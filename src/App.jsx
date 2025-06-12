import React from "react";
import { Route, Routes } from "react-router-dom";

import ContactUs from "./pages/ContactUs";
import Events from "./pages/Events";
import Team from "./pages/Team";
import Exhibit from "./pages/Exhibit";
import Home from "./Pages/Home";
import PageNotFound from "./pages/PageNotFound";
import Dashboard from "./pages/Dashboard";
import News from "./pages/News";
import ExhibitDetails from "./pages/ExhibitDetails";
import SignIn from "./components/SignInPage";
import Loader from "./components/Loader";

const App = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exhibit" element={<Exhibit />} />
        <Route path="/exhibit/:id" element={<ExhibitDetails />} />
        <Route path="/events" element={<Events />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/news" element={<News />} />
        <Route path="/sign" element={<SignIn />} />
        <Route path="/loader" element={<Loader />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </main>
  );
};

export default App;
