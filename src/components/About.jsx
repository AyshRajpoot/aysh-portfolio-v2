import SectionHead from './SectionHead'

export default function About() {
  return (
    <section id="about" className="section-alt py-16 md:py-24">
      <div className="mx-auto w-[92%] max-w-[1150px]">
        <SectionHead
          eyebrow="Who I Am"
          title={
            <>
              About <span className="grad-text">Me</span>
            </>
          }
        />

        <div className="rv mx-auto max-w-[880px] rounded-3xl border border-white/10 bg-card p-7 text-center shadow-[0_20px_50px_rgba(0,0,0,.35)] sm:p-10">
          <h3 className="mb-4 flex items-center justify-center gap-2.5 font-sora text-xl font-bold">
            <i className="fa-solid fa-user-gear text-pri-2" aria-hidden="true" />
            My Journey
          </h3>
          <p className="mb-3.5 text-[0.98rem] text-mut">
            I&apos;m a passionate <b className="text-white">MERN Stack Developer</b> from Gujranwala, Pakistan.
            I&apos;ve built production backends for multiple live platforms — an AI health platform (Luna), a
            custom QR button e-commerce app (CAB / Create A Button), the Petronas Malaysia Bid Round platform, and
            a fundraising app (UFund).
          </p>
          <p className="text-[0.98rem] text-mut">
            My work covers the full backend lifecycle: REST API development, JWT &amp; cookie-based authentication,
            role-based authorization, conditional Stripe payment flows, template-based email systems, Cloudinary
            media handling, and AI integrations — <b className="text-white">Terra wearables API</b> and{' '}
            <b className="text-white">ElevenLabs voice AI</b> for chat &amp; call features.
          </p>
        </div>
      </div>
    </section>
  )
}