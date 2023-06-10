import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="">
        <h1 className="font-bold text-xl">about me</h1>
        <p className="text-light">
          I am a seasoned IT professional with over 5 years of industry
          experience, including 2 years of hands-on experience working with the
          Golang Gin framework. With a strong passion for creating captivating
          web-based experiences, my expertise lies primarily in front-end
          development and Golang. This well-rounded background enables me to
          take projects from inception to completion, delivering comprehensive
          and seamless solutions. In front-end development, I am proficient in
          technologies such as React.js, Redux, JavaScript, TypeScript, AJAX,
          HTML5, and CSS3. On the back-end side, I have extensive experience in
          Golang Gin and PHP Codeigniter. I possess a deep understanding of
          object-oriented programming in both JavaScript and PHP, consistently
          striving to enhance user experience. Additionally, I bring valuable
          expertise in form validation using the react-hook-form library,
          ensuring robust and error-free data capture. While I am familiar with
          Node.js Express, my primary focus and expertise lie in Golang Gin.
        </p>
      </div>
    </main>
  );
}
