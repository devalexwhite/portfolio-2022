import {
  faBriefcase,
  faDownload,
  faMapPin,
  faMicrophone,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import type { NextPage } from "next";
import Head from "next/head";
import { Callout, CalloutList } from "../components/CalloutList";
import { Link, LinkList } from "../components/LinkList";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const callouts: Array<Callout> = [
    {
      text: "Irvine",
      subtext: "California",
      icon: faMapPin,
    },
    {
      text: "RevLocal",
      subtext: "Product Designer",
      icon: faBriefcase,
    },
    {
      text: "Frontend Columbus",
      subtext: "Organizer",
      icon: faMicrophone,
    },
  ];

  const links: Array<Link> = [
    {
      href: "/files/alex_white_resume.pdf",
      text: "Resume",
      icon: faDownload,
    },
    {
      href: "https://www.linkedin.com/in/devalexwhite/",
      text: "LinkedIn",
      icon: faLinkedin,
    },
    {
      href: "https://github.com/devalexwhite/",
      text: "Github",
      icon: faGithub,
    },
  ];

  return (
    <div
      className={`${styles.patternBackground} flex flex-col md:min-h-screen`}
    >
      <div className="w-full h-5 gradient-background mb-8"></div>
      <div
        className={`bg-cover flex flex-col items-center justify-center flex-1`}
      >
        <Head>
          <title>Alex White - Full Stack Engineer in Irvine, CA</title>
          <meta
            name="description"
            content="Alex White is a creative, solution driven full stack software engineer based in Irvine, California."
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="py-8 container max-w-5xl mx-auto px-8">
          {/* <div className="w-full h-5 gradient-background rounded-full mb-8"></div> */}

          <div className="flex items-center md:items-start flex-col md:flex-row mb-16">
            <div className="relative flex-shrink-0 mb-16 md:mb-8 md:mb-0 md:mr-16 w-56">
              <div className="absolute top-0 left-0 -ml-4 mt-4 z-0 gradient-background rounded-full h-56 w-56"></div>

              <img
                src="/images/headshot.webp"
                alt="Portrait shot of Alex White"
                className="rounded-full z-10 relative h-56 w-56 block"
              />
            </div>
            <div className="md:flex-1">
              <div className="mb-16 md:mb-8 w-full">
                <CalloutList callouts={callouts} />
              </div>

              <span className="font-primary font-semibold text-xl md:text-2xl block md:mb-2 text-content">
                Alex White
              </span>

              <h1 className="font-primary font-black text-2xl md:text-5xl text-black max-w-xl mb-6 md:mb-10">
                Full stack engineer in Irvine, California.
              </h1>

              <p className="font-primary text-content leading-relaxed">
                Alex White is a creative and solution-driven professional with
                7+ years in full stack development. Alex’s expertise includes
                user experience, front end development, accessibility, and
                backend development. He has a proven track record of leading
                technical teams and overseeing software development lifecycles
                from inception through launch.
              </p>
              <div className="mt-8">
                <LinkList links={links} />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
