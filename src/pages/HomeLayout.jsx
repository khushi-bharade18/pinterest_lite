import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import { useState } from "react";

export default function HomeLayout() {
  const [activePage, setActivePage] = useState("home");
  return (
    <>
      <Navbar activePage={activePage} setActivePage={setActivePage} />

      <main>
        <Outlet />
      </main>
    </>
  );
}
