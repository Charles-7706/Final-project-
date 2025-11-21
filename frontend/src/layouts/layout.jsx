import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import RoleBasedNav from "../components/RoleBasedNav.jsx";

function Layout({children}) {
    return <div className="flex flex-col min-h-screen bg-gray-50">
        <Header />
        <RoleBasedNav />
        <main className="flex-1 container mx-auto px-6 py-8">
            {children}
        </main>
        <Footer />
    </div>;
}

export default Layout;