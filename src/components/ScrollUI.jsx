import { useScrollUI } from '../hooks/useScrollUI'

export default function ScrollUI() {
  const { progress, showTop } = useScrollUI()

  return (
    <>
      <div
        className="fixed left-0 top-0 z-[1002] h-[3px] rounded-r-full bg-gradient-to-r from-pri to-pri-2"
        style={{ width: `${progress}%` }}
        aria-hidden="true"
      />

      <button
        type="button"
        onClick={() => scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
        className={`fixed bottom-6 right-6 z-[950] flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-pri to-pri-2 text-white shadow-[0_8px_24px_rgba(139,92,246,.5)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(236,72,153,.55)] ${
          showTop ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <i className="fa-solid fa-arrow-up" aria-hidden="true" />
      </button>
    </>
  )
}