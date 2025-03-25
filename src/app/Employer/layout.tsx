import Navbar from "@/components/Employer/Navbar/Navbar";

export default function Layout({children} : {children : React.ReactNode}) {
    return <div>
        <Navbar/>
        {children}
    </div>
}