import picture from "../public/profile.png";
import Image from "next/image";

export default function Biography() {
  return (
    <section className="biography">
      <div className="biography__description">
        <h1 className="biography__header">Profile</h1>

        <p>
          Hello there and welcome to my site! 😊 I&apos;m a self taught frontend
          web developer and my tech stack is HTML, CSS, SCSS, JS, React.Js and
          Next.Js
        </p>
        <p>
          I&apos;ve always been fascinated by code ever since my first encounter
          working with the Arduino microcontroller and its native IDE during my
          undergraduate days.
        </p>
        <p>
          After graduating in 2016, I&apos;ve worked a couple of industries
          within the Chemical Engineering field- manufacturing, wastewater,
          consultancy - before deciding go into web development full time in
          November 2021.
        </p>
      </div>
      <div className="biography__image">
        <Image
          width="700px"
          height="950px"
          layout="intrinsic"
          src={picture}
          className="biography__profile-pic"
          alt="profile_picture"
        ></Image>
      </div>
    </section>
  );
}
