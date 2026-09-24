import { NAV_LINKS } from '../data/content'

export default function SideNav({ active }) {
  return (
    <nav
      className="fixed right-7 top-1/2 z-[900] hidden -translate-y-1/2 flex-col items-center gap-4 wide:flex"
      aria-label="Section navigation"
    >
      {NAV_LINKS.map((link) => (
        <a
          key={link.id}
          href={`#${link.id}`}
          className={`group block h-2.5 w-2.5 rounded-full transition-all duration-300 ${
            active === link.id
              ? 'scale-150 bg-pri-2'
              : 'bg-[#3b2f63] hover:scale-125 hover:bg-pri'
          }`}
          aria-label={link.label}
          aria-current={active === link.id ? 'true' : undefined}
        >
          <span className="pointer-events-none absolute right-6 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg border border-white/10 bg-card-2 px-3 py-1 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100">
            {link.label}
          </span>
        </a>
      ))}
    </nav>
  )
}