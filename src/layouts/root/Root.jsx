import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";

const Root = () => {
    return (
        <div className="">
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;