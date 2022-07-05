import Link from "next/link";

export default function Navigation() {
  return (
    <div className="navigation">
      <div className="navigation_name">
        <Link href="/">
          <a className="logo">
            EK<span>JA</span>
          </a>
        </Link>
      </div>
      <input class="side-menu" type="checkbox" id="side-menu" />
      <label class="hamb" for="side-menu">
        <span class="hamb-line"></span>
      </label>
      <div className="links">
        <Link href="/contact">contact</Link>
        <Link href="/projects">projects</Link>
        <Link href="/blog">blog</Link>
      </div>
    </div>
  );
}
