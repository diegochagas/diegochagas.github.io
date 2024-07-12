import { portfolio } from '@/app/data/portfolio'
import { contacts, social } from '@/app/data/contacts'
import LinkProject from './project-link'
import Signature from './signature'
import Title from '@/app/components/title'

export function Footer() {
  const projects = [...portfolio.slice(0, 5), { title: 'All projects', url: '#portfolio' }]

  return (
    <footer className="pt-14 w-full 2xl:max-w-screen-2xl 2xl:my-0 2xl:mx-auto " id="contact">
      <div className="px-3.5 pb-20">
        <Title text="Contact" subTitle="Need a developer?" />
        <div className="mt-12 md:mt-18 md:grid md:grid-cols-4 gap-10">
          <div className="col-span-4 xl:col-span-1 md:grid md:grid-cols-2 xl:grid-cols-1">
            <h3 className="text-lg pt-0.5 pb-1 font-extrabold md:col-span-2 xl:col-span-1">
              Let’s work <br className="hidden xl:inline" />together&nbsp;—
            </h3>
            <p className="mt-2.5 mb-0 mx-0 text-zinc-500 font-medium pt-0.5 pb-1 pr-0 md:pr-10 xl:pr-0">
              Feel free to reach out to me any time. I prefer to talk over email, especially since we may be a few time zones away.
            </p>
            <ul className="mt-2.5 mb-0 mx-0 pt-0.5 pb-1 px-0 font-medium">
              {contacts.map(contact => (
                <li key={contact.title} className="list-none">
                  <span className="text-zinc-500">{contact.initial}:&nbsp;</span>
                  <a
                    className="relative border-0 border-none inline-block no-underline transition-all duration-200"
                    href={contact.url}
                    target="_blank"
                  >
                    {contact.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-2 xl:col-span-1">
            <h3 className="text-lg pt-0.5 pb-1 font-extrabold m-0 ">
              Latest <br className="hidden md:inline" />projects&nbsp;—
            </h3>
            <ul className="mt-2.5 mb-0 mx-0 pt-0.5 pb-1 px-0 grid grid-cols-2 xl:grid-cols-1">
              {projects.map((project, index) => (
                <li key={project.title} className="list-none font-medium">
                  <LinkProject url={project.url} title={project.title} isLast={index < projects.length - 1} />
                </li>
              ))}
             </ul>
          </div>
          <div className="">
            <h3 className="text-lg pt-0.5 pb-1 font-extrabold">
              Current <br className="hidden md:inline" />availability&nbsp;—
            </h3>
            <p className="mt-2.5 mb-0 mx-0 text-zinc-500 pt-0.5 pb-1">
              I&apos;m currently working at a full-time job, but I&apos;d be happy to discuss new opportunities. Let&apos;s get in touch!
            </p>
          </div>
          <div>
            <h3 className="text-lg pt-0.5 pb-1 font-extrabold">
              Follow <br className="hidden md:inline" />me on&nbsp;—
            </h3>
            <ul className="mt-2.5 mb-0 mx-0 pt-0.5 pb-1 px-0 grid grid-cols-2 md:grid-cols-1">
              {social.map(item => (
                <li key={item.title} className="list-none font-medium">
                  <a
                    href={item.url}
                    className="relative border-0 border-none inline-block no-underline transition-all duration-200"
                    target="_blank"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <Signature />
        </div>
      </div>
    </footer>
  )
}