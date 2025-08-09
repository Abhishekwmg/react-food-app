import Body from "./components/Body";
import Header from "./components/Header";
import Shimmer from "./components/Shimmer";
import { Outlet } from 'react-router-dom';

const AppLayout = () => {
  return <div className="app">
    <Header />
    <Outlet />
    {/* <Body /> */}
  </div>
}
export default AppLayout;
