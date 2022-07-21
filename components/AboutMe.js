export default function AboutMe() {
  return (
    <section className="aboutme">
      <h2 className="aboutme__header">About Me</h2>

      <div className="aboutme__container">
        <div className="aboutme__description">
          <p className="aboutme__paragraph">
            Hi, I'm Edmund and I am a frontend engineer living in Kuala Lumpur,
            Malaysia. I enjoy building websites and my goal is ultimately to
            build full stack web applications.
            <p className="aboutme__paragraph">
              I&apos;ve always been fascinated by code ever since my first
              encounter working with the Arduino microcontroller and its native
              IDE during my undergraduate days.
            </p>
          </p>
          <p className="aboutme__paragraph">
            After graduating in 2016, I&apos;ve worked a couple of industries
            within the Chemical Engineering field- manufacturing, wastewater,
            consultancy - before deciding go into web development full time in
            November 2021.
          </p>
        </div>
        <div className="aboutme__profile-pic"></div>
      </div>
    </section>
  );
}
