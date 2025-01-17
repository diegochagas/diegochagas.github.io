import Image from "next/image";
import Icon from "../../components/icons";
import { portfolio } from "../../data/portfolio";
import Title from "../../components/title";

export default function Portfolio() {
  return (
    <section
      className="pt-14 w-full 2xl:max-w-screen-2xl 2xl:my-0 2xl:mx-auto"
      id="portfolio"
    >
      <div className="px-3.5">
        <Title text="Portfolio" subTitle="Selected projects" />
        <div className="mt-12 md:mt-18 grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {portfolio.map((item, index) => (
            <div
              key={item.title}
              id={`project-${index}`}
              className="opacity-0 transform translate-y-4 transition-opacity duration-700 ease-out"
            >
              <a
                href={item.url}
                className="h-full relative block overflow-hidden border-0 border-none visible group before:bg-gray-900/95 before:absolute before:block before:w-full before:h-full before:top-0 before:left-0 before:z-10 before:opacity-60 hover:before:opacity-100 before:content-[''] before:box-border before:transition-opacity before:duration-200 before:ease-linear"
                rel="noopener noreferrer"
                target="_blank"
              >
                {index === 0 && (
                  <Icon className="absolute top-5 right-5 z-20" name="new" />
                )}
                <div className="bg-[0_0] transition-all duration-200 delay-300 relative">
                  <Image
                    src={`/portfolio/banner${portfolio.length - 1 - index}.jpg`}
                    width={372}
                    height={372}
                    className="transition-all duration-200 ease-linear relative block w-full h-auto z-0 pointer-events-none opacity-100 visible"
                    alt={`Site banner of ${item.title}`}
                  />
                </div>
                <strong className="opacity-100 absolute block top-9 left-0 z-20 pointer-events-none">
                  <span
                    className="opacity-70 transition-all duration-200 ease-linear py-1.5 px-8 block text-white text-sm
                    uppercase pt-1.5 pb-1.5 font-normal tracking-widest"
                  >
                    {item.startYear}
                    {item.endYear && ` - ${item.endYear}`}
                  </span>
                  <span className="text-white px-8 transition-all duration-200 ease-linear max-w-xs block text-2xl py-1 font-extrabold tracking-tight">
                    {item.title} — {item.description}
                  </span>
                  <span className="opacity-0 group-hover:opacity-60 transition-all duration-200 ease-linear px-8 mt-1 block">
                    <p className="text-white font-medium py-1 m-0 flex items-center">
                      <span className="capitalize">View project</span>
                      <span className="ml-2.5 w-4 h-4 inline-flex">
                        <Icon name="arrow-right" size={20} />
                      </span>
                    </p>
                  </span>
                </strong>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
