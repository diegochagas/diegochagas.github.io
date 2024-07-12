import Link from 'next/link'
import PortfolioLink from './portfolio-link'

export default function AboutMe() {
  return (
    <section id="about-me" className="md:h-screen flex flex-col justify-end relative w-full 2xl:max-w-screen-2xl 2xl:my-0 2xl:mx-auto pt-[360px] md:pt-0 animate">
      <div
        id="background-photo"
        className="opacity-0 mt-18 bg-[url('/bg_home.png')] bg-no-repeat bg-[auto_100%] bg-[top_0_center] md:bg-[top_0_right_-120px] lg:bg-[top_10px_right_-50px] xl:bg-[top_0_right_0] absolute block w-full h-[460px] md:h-[80%] xl:h-[120%] top-0 left-0 z-10"
      />
      <div className="relative z-20 w-full py-0 px-3.5 md:px-8">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 lg:w-3/5">
            <h5
              id="diego-chagas-subtitle"
              className="opacity-0 animate-[animation-1st_0.6s_linear] text-sm uppercase text-zinc-500 tracking-[0.4em] py-1.5"
            >
              Diego Chagas
            </h5>
            <h1
              id="front-end-title"
              className="opacity-0 mt-0.5 md:mt-5 text-3xl sm:text-4xl md:text-7xl font-extrabold tracking-tighter"
            >
              Front-End Developer
            </h1>
            <h3
              id="front-end-description"
              className="opacity-0 mt-2.5 md:mt-6 font-medium tracking-normal text-zinc-500 text-base xs:text-lg md:text-xl"
            >
              Started as a developer professional in March 2016, where worked on many projects, focused on web development. Advanced knowledge in front-end and intermediate knowledge in back-end. Major works using React and Next technologies.
            </h3>
            <Link
              id="curriculum-link"
              href="/CV-Diego-Chagas.docx"
              download="CV-Diego-Chagas.docx"
              className="opacity-0 text-lg font-extrabold mt-2.5 md:mt-5 relative border-b-2 border-transparent hover:border-gray-900 inline-block transition-all duration-200 ease-[cubic-bezier(.3,0,0.5,1)] capitalize"
            >
              Download curriculum
            </Link>
          </div>
        </div>
        <PortfolioLink />
      </div>
    </section>
  )
}