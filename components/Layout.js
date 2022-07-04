import Navigation from "./navigation";
import Footer from "./footer";

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
