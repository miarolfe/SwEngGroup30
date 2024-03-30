import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow py-5">
        {children}
      </main>
      <Footer />
    </div>
  )
};

export default Layout;