import Icon from '@/app/components/icons'
import { Skill } from '@/app/data/skills'

interface ItemProps {
  skills: Skill[]
  title: string
  hasDescription?: boolean
}

export default function Item({ skills, title, hasDescription }: ItemProps) {
  return (
    <div className="flex flex-col items-center">
      <h6 id={`skill-title-${title}`} className="opacity-0 text-2xl md:text-3xl md:text-center mb-5 md:mb-10 font-extrabold capitalize">{title}</h6>
      {hasDescription ? (
        <div className="grid md:grid-cols-3 gap-x-16 gap-y-2.5">
          {skills.map(skill => (
            <p key={skill.title} id={skill.title.replaceAll(' ', '-')} className="opacity-0 m-0 font-medium">
              <strong className="text-lg">{skill.title}&nbsp;—</strong>
              <span className="text-zinc-500">&nbsp;{skill.description}</span>
            </p>
          ))}
        </div>
      ) : (
        <div className={`grid grid-cols-2 md:grid-cols-3 ${skills.length <= 3 ? '' : 'xl:grid-cols-4'} gap-10 md:gap-14`}>
          {skills.map(skill => (
            <div key={skill.title} id={skill.title.replaceAll(' ', '-')} className="opacity-0 flex items-center gap-1 3xs:gap-2">
              {skill.icon && <Icon className="w-10 3xs:w-12 md:w-14 xl:w-16 h-auto" name={skill.icon} />}
              <h3 className="font-bold text-sm">{skill.title}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}