import NavBar from "../components/NavBar/NavBar";
import { Outlet, ScrollRestoration } from "react-router-dom";
import "../index.css"

export default function Layout() {
  return (
    <>
      <NavBar />
      <main className="pt-16 overflow-x-hidden">
        <Outlet />
        <ScrollRestoration />
      </main>
    </>
  );
}
