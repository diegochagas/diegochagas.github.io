import ScrollTitle from './scroll-title'

interface TitleProps {
  text: string
  subTitle: string
}

export default function Title({ text, subTitle }: TitleProps) {
  return (
    <div className="">
      <h5 id={`${text}-subtitle`} className="opacity-0 text-sm uppercase leading-5 pt-0.5 pb-1 text-zinc-500 tracking-[0.4em]">
        {subTitle}
      </h5>
      <div className="mt-0 pt-0.5 pb-1">
        <ScrollTitle title={text} />
      </div>
    </div>
  )
}