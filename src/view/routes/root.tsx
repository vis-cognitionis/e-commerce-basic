import { Outlet } from "react-router-dom";
import Header from "view/components/header";

export default function Root() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
