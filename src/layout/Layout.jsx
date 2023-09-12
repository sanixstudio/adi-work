/* eslint-disable react/prop-types */
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Header />
      <div className="flex-1 flex-grow-1">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
