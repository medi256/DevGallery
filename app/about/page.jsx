import Link from "next/link";
import Image from "next/image";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>About Me</h1>
        <p>
          Get tips and insights about your favorite programming languages,
          frameworks, libraries, and more. This site is dedicated to providing
          valuable content for developers of all levels.
        </p>

        <h2>What is DevGallery?</h2>
        <p>
          DevGallery is an online platform designed for developers—whether
          you're a junior developer, a senior developer, or someone just
          starting your coding journey. It offers a collection of posts,
          including developer roadmaps, tips, and tutorials on languages like
          JavaScript, Python, HTML, CSS, Java, and more.
        </p>
        <p>
          Beyond programming languages, DevGallery also covers frameworks,
          libraries, tools, and other technologies that developers use to build
          software applications.
        </p>

        <h3>DevGallery primarily consists of:</h3>
        <ul>
          <li>Posts with tips on how to start your coding journey.</li>
          <li>Roadmaps for mastering your favorite programming languages.</li>
          <li>
            Tutorials explaining concepts like variables, data types, operators,
            and more.
          </li>
          <li>
            Insights into tools, libraries, and technologies used in modern
            development.
          </li>
          <li>
            Content created by experienced developers who understand what they
            teach.
          </li>
        </ul>

        <h2>Who is DevGallery for?</h2>
        <p>
          DevGallery is for anyone passionate about programming and technology.
          Whether you're a beginner looking to learn the basics, an experienced
          developer seeking advanced insights, or simply someone curious about
          tech, DevGallery has something for you.
        </p>
        <p>
          Are you a beginner who wants to learn about your favorite programming
          language? Or are you looking to stay up-to-date with topics like APIs,
          frameworks, and coding best practices? If so, this site is for you.
        </p>

        <p>
          I'm always open to collaborating on new projects and connecting with
          like-minded individuals. If you're interested in working together or
          just want to chat about tech, feel free to reach out. I'd love to hear
          from you!
        </p>
        <p>
          Ready to explore? Head over to the <Link href="/">home page</Link> and
          start your journey with DevGallery.
        </p>

        <h2>How I Came Up With This Idea</h2>
        <p>
          The idea for DevGallery came from my desire to help people passionate
          about programming and technology. I wanted to create a platform where
          developers could learn about their favorite programming languages,
          frameworks, libraries, tools, and other technologies used in software
          development.
        </p>
        <p>
          Here's the story behind it: I'm a frontend developer who learned HTML,
          CSS, and JavaScript through online posts on platforms like Facebook,
          Instagram, and TikTok. After mastering the basics, I started sharing
          my knowledge by posting tips and tutorials. The positive feedback and
          encouragement I received inspired me to create DevGallery—a central
          hub for developers to find the content they love in one place.
        </p>

        <h3>A Little About Me</h3>
        <p>
          My name is Massa Medi. I'm a 22-year-old frontend developer with a
          passion for building small startups. My goal is to one day create a
          large tech company.
        </p>
        <Image
          src="https://kbldpypjgtjbrzmcoqcg.supabase.co/storage/v1/object/public/programming/php/MEDI.jpeg"
          alt="Massa Medi"
          layout="responsive"
          priority
          width={200}
          height={200}
        />
        <p>
          So far, I've built two websites:{" "}
          <Link href="https://www.mergesociety.com">MergeSociety</Link> and{" "}
          <Link href="/">DevGallery</Link>. I'm excited to continue growing and
          creating valuable resources for the developer community.
        </p>
      </div>
    </div>
  );
};

export default About;
