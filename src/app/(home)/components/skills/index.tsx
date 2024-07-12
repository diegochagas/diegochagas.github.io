import Title from '@/app/components/title'
import Item from './item'
import { codeSkills, designSkills, softSkills } from '@/app/data/skills'

export default function Skills() {
  return (
    <section id="skills" className="pt-14 w-full 2xl:max-w-screen-2xl 2xl:my-0 2xl:mx-auto">
      <div className="px-3.5">
        <Title text="Skills" subTitle="Hard and soft" />
        
        <div className="mt-12 md:mt-18 grid gap-y-14 md:gap-y-28">
          <Item skills={codeSkills} title="Code" />
          <Item skills={designSkills} title="Design" />
          <Item skills={softSkills} title="Personal" hasDescription />
        </div>
      </div>
    </section>
  )
}