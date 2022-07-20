import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const [checked, setChecked] = useState(false);

  return (
    <section className="navigation">
      <div className="navigation__name">
        <Link href="/">
          <a className="navigation__logo">
            EK<span className="navigation__logo-design">JA</span>
          </a>
        </Link>
      </div>
      <input
        type="checkbox"
        id="navi-toggle"
        className="navigation__checkbox"
        onChange={(e) => {
          setChecked((checked) => !checked);
        }}
        defaultChecked={checked}
        checked={checked}
      ></input>
      <label for="navi-toggle" className="navigation__button">
        <span className="navigation__line"></span>
      </label>
      <div className="navigation__background"></div>
      <ul className="navigation__list">
        <li
          className="navigation__items"
          onClick={() => {
            setChecked((checked) => !checked);
          }}
        >
          <Link href="/contact">
            <div>
              <a className="navigation__links-1">contact</a>
              <span className="icon-basic-mail navigation__icon"></span>
            </div>
          </Link>
        </li>
        <li
          className="navigation__items"
          onClick={() => setChecked((checked) => !checked)}
        >
          <Link href="/projects">
            <div>
              <a className="navigation__links-2">projects</a>
              <span className="icon-basic-webpage-multiple navigation__icon"></span>
            </div>
          </Link>
        </li>
        <li className="navigation__items" onClick={() => setChecked(!checked)}>
          <Link href="/blog">
            <div>
              <a className="navigation__links-3">blog</a>
              <span className="icon-basic-book-pencil navigation__icon"></span>
            </div>
          </Link>
        </li>
      </ul>
    </section>
  );
}
