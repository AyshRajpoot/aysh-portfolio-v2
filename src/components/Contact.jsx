import SectionHead from './SectionHead'
import { CONTACT } from '../data/content'

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="mx-auto w-[92%] max-w-[1150px]">
        <SectionHead
          eyebrow="Get In Touch"
          title={
            <>
              Contact <span className="grad-text">Me</span>
            </>
          }
        />

        <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CONTACT.map((item) => {
            const inner = (
              <>
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-pri to-pri-2 text-xl text-white shadow-[0_10px_24px_rgba(139,92,246,.35)] transition-transform duration-300 group-hover:scale-110">
                  <i className={item.icon} aria-hidden="true" />
                </div>
                <h3 className="font-sora text-sm font-bold">{item.title}</h3>
                <p className="mt-1 text-[0.82rem] break-words text-mut">{item.value}</p>
              </>
            )
            const cls =
              'rv group block rounded-2xl border border-white/10 bg-card p-6 py-7 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-pri/70 hover:shadow-[0_16px_40px_rgba(0,0,0,.4)]'

            return item.href ? (
              <a
                key={item.title}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={cls}
              >
                {inner}
              </a>
            ) : (
              <div key={item.title} className={cls}>
                {inner}
              </div>
            )
          })}
        </div>

        <div
          className="rv relative overflow-hidden rounded-3xl border border-white/10 bg-card px-6 py-14 text-center sm:px-10"
          style={{
            background:
              'radial-gradient(500px 200px at 50% 0%,rgba(139,92,246,.15),transparent),var(--color-card)',
          }}
        >
          <div
            className="pointer-events-none absolute -top-16 left-1/2 h-40 w-[80%] -translate-x-1/2"
            style={{
              background: 'radial-gradient(circle,rgba(236,72,153,.18),transparent 70%)',
              filter: 'blur(40px)',
            }}
            aria-hidden="true"
          />

          <h2 className="font-sora text-[clamp(1.5rem,3vw,2rem)] font-bold tracking-tight">
            Let&apos;s Build Something Amazing Together
          </h2>
          <p className="mx-auto mt-3 max-w-[520px] text-mut">
            I&apos;m currently available for backend development roles and freelance projects. Drop me a message
            and I&apos;ll respond within 24 hours.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:ms.ayshrajpoot@gmail.com"
              className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-pri to-pri-2 px-8 py-3.5 text-[0.94rem] font-semibold text-white shadow-[0_8px_26px_rgba(139,92,246,.4)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(236,72,153,.5)]"
            >
              <i className="fa-solid fa-paper-plane" aria-hidden="true" />
              Say Hello
            </a>
            <a
              href="/cv/Ayesha_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.02] px-8 py-3.5 text-[0.94rem] font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:border-pri hover:text-lilac"
            >
              <i className="fa-solid fa-download" aria-hidden="true" />
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}