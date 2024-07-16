import { Outlet } from "react-router";
import Navbar from "../components/navbar/Navbar";
import ScrollToTop from "../components/scrolltotop/ScrollToTop";
import Footer from "../components/footer/Footer";
const CommonLayout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <ScrollToTop />
            <Footer />
        </>
    )
}
export default CommonLayout;