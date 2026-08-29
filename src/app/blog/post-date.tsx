export function PostDate({ date }: { date: string }) {
  return (
    <time
      dateTime={date}
      className="block text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 mb-8"
    >
      {new Date(`${date}T00:00:00`).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })}
    </time>
  );
}
