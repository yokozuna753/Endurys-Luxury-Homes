import NavBar from "../components/LandingPage/NavBar";
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </>
  );
}
