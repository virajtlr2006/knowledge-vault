import Link from "next/link"

export function Footer() {
  return (
    <footer className="mt-0 bg-linear-to-r from-slate-900/70 via-slate-800/60 to-slate-900/70 backdrop-blur-xl border-t border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.4)] relative">

      {/* Top neon accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-linear-to-r from-cyan-400 via-purple-500 to-pink-500 opacity-80" />

      {/* Slight glow orbs */}
      <div className="absolute -top-6 left-10 h-10 w-10 rounded-full bg-cyan-400/20 blur-2xl pointer-events-none" />
      <div className="absolute -top-4 right-10 h-10 w-10 rounded-full bg-pink-500/20 blur-2xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

          <FooterColumn title="Product" items={["Features", "Pricing", "Security"]} />
          <FooterColumn title="Company" items={["About", "Blog", "Contact"]} />
          <FooterColumn title="Resources" items={["Help Center", "Documentation", "API"]} />
          <FooterColumn title="Legal" items={["Privacy", "Terms", "Cookies"]} />

        </div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row items-center justify-between border-t border-white/10 pt-6">

          <p className="text-sm text-white/70">
            © 2025 Knowledge Vault. All rights reserved.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0">
            {["Twitter", "GitHub", "LinkedIn"].map((social) => (
              <Link
                key={social}
                href="#"
                className="text-white/70 hover:text-transparent hover:bg-clip-text hover:bg-linear-to-r hover:from-cyan-300 hover:via-purple-300 hover:to-pink-300 transition-all"
              >
                {social}
              </Link>
            ))}
          </div>

        </div>
      </div>
    </footer>
  )
}

function FooterColumn({ title, items }: { title: string, items: string[] }) {
  return (
    <div className="space-y-3">
      <h3 className="text-lg font-semibold text-transparent bg-clip-text bg-linear-to-r from-cyan-300 via-purple-300 to-pink-300">
        {title}
      </h3>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item}>
            <Link
              href="#"
              className="text-white/70 hover:text-white hover:pl-1 transition-all"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
