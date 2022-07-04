import Navigation from "./Navigation";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <div className="container">
        <Navigation></Navigation>
      </div>
      <main>{children}</main>
      <Footer></Footer>
    </>
  );
}
