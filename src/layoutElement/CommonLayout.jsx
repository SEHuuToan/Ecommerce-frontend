import { Outlet } from "react-router";
import Navbar from "../components/navbar/Navbar";
import ScrollToTop from "../components/scrolltotop/ScrollToTop";
import FloatingActionButton from "../components/floating_button/FloatingActionButton";
import Footer from "../components/footer/Footer";
const CommonLayout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <ScrollToTop />
            <FloatingActionButton />
            <Footer />
        </>
    )
}
export default CommonLayout;