import picture from "../public/profile.png";
import Image from "next/image";

export default function Biography() {
  return (
    <section className="biography">
      <div className="biography__plane">{/* <a href="#">12345</a> */}</div>
      <div className="biography__description">
        <div className="biography__introduction">Welcome to my site! I am</div>
        <h1 className="biography__header">Edmund Koh</h1>
        <div className="biography__tag">
          A Kuala Lumpur-based Frontend Engineer
        </div>

        <p className="biography__paragraph">
          Hello there! I&apos;m a self taught frontend web developer. I am
          working towards becoming a full stack MERN engineer in the future.
          Here are some of the technology I currently use to build my projects:
          <div className="biography__tech-stack">
            <i className="biography-icon fi fi-brands-html5"></i>
            <i className="biography-icon fi fi-brands-css3"></i>
            <i className="biography-icon fi fi-brands-sass"></i>
            <i className="biography-icon-js fi fi-brands-js"></i>
            <i className="biography-icon fi fi-brands-atom"></i>
            <span className="biography-icon-nextjs">NextJS</span>
          </div>
        </p>
        {/* <div className="biography__content">
          <ul className="biography__list">
            <li className="biography__items">
              HTML5 <i class="biography-icon fi fi-brands-html5"></i>
            </li>
            <li className="biography__items">
              CSS3 <i class="biography-icon fi fi-brands-css3"></i>
            </li>
            <li className="biography__items">
              SCSS <i class="biography-icon fi fi-brands-sass"></i>
            </li>
          </ul>
          <ul className="biography__list">
            <li className="biography__items">
              Javascript <i class="biography-icon fi fi-brands-js"></i>
            </li>
            <li className="biography__items">
              React.js <i class="biography-icon fi fi-brands-atom"></i>
            </li>
            <li className="biography__items">Next.js</li>
          </ul>
          <div className="biography__container-image">
            <div className="biography__image"></div>
            <div className="biography__image-overlay"></div>
          </div>
        </div> */}

        <ul className="biography__contact">
          <li className="biography__contact-items">
            <a>
              <i class="fi fi-brands-twitter"></i>
            </a>
          </li>
          <li className="biography__contact-items">
            <a>
              <i class="fi fi-brands-github"></i>
            </a>
          </li>
          <li className="biography__contact-items">
            <a>
              <i class="fi fi-brands-linkedin"></i>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
