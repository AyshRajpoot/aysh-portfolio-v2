export default function SectionHead({ eyebrow, title, sub }) {
  return (
    <div className="rv mb-14 text-center">
      <span className="text-[0.78rem] font-semibold uppercase tracking-[0.25em] text-lilac">{eyebrow}</span>
      <h2 className="mt-2.5 text-[clamp(1.8rem,3.5vw,2.4rem)] font-bold tracking-tight">{title}</h2>
      <span
        className="mx-auto mt-4 block h-[3px] w-16 rounded-full bg-gradient-to-r from-pri to-pri-2"
        aria-hidden="true"
      />
      {sub && <p className="mx-auto mt-4 max-w-[640px] text-[0.95rem] text-mut">{sub}</p>}
    </div>
  )
}