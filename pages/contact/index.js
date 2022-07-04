import Link from "next/link";

export default function Contact() {
  return (
    <div className="container contact">
      <h1>Contact Me</h1>
      <ul>
        <li>Contact Number: +60-1137251397</li>
        <li>
          <a href="">LinkedIn</a>
        </li>
        <li>
          <a href="">Twitter</a>
        </li>
      </ul>
      <Link href="/">Return to homepage</Link>
    </div>
  );
}
