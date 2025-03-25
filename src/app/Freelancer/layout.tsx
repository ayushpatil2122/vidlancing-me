import Footer from "@/components/Freelancer/Footer/Footer";
import Navbar from "@/components/Freelancer/Navbar/Navbar";

export default function Layout({children} : {children : React.ReactNode}) {
    return <div>
        <Navbar/>
        {children}
        <Footer/>
    </div>
}