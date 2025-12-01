import Link from "next/link"

export function Footer() {
  return (
    <footer
      className="
        bg-card/60 backdrop-blur-xl 
        border-t border-blue-200/30 
        mt-16
        shadow-[0_-4px_18px_rgba(125,211,252,0.15)]
        transition-all
      "
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">

          {/* Column */}
          <div>
            <h3 className="font-semibold text-foreground mb-4 tracking-wide">Product</h3>
            <ul className="space-y-2">
              {["Features", "Pricing", "Security"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="
                      text-muted-foreground text-sm 
                      hover:text-blue-500 
                      transition-colors duration-300
                    "
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column */}
          <div>
            <h3 className="font-semibold text-foreground mb-4 tracking-wide">Company</h3>
            <ul className="space-y-2">
              {["About", "Blog", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="
                      text-muted-foreground text-sm 
                      hover:text-blue-500 
                      transition-colors duration-300
                    "
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column */}
          <div>
            <h3 className="font-semibold text-foreground mb-4 tracking-wide">Resources</h3>
            <ul className="space-y-2">
              {["Help Center", "Documentation", "API"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="
                      text-muted-foreground text-sm 
                      hover:text-blue-500 
                      transition-colors duration-300
                    "
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column */}
          <div>
            <h3 className="font-semibold text-foreground mb-4 tracking-wide">Legal</h3>
            <ul className="space-y-2">
              {["Privacy", "Terms", "Cookies"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="
                      text-muted-foreground text-sm
                      hover:text-blue-500 
                      transition-colors duration-300
                    "
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div
          className="
            border-t border-blue-200/20 
            pt-8 flex items-center justify-between
          "
        >
          <p className="text-muted-foreground text-sm">
            © 2025 Knowledge Vault. All rights reserved.
          </p>

          <div className="flex gap-4">
            {["Twitter", "GitHub", "LinkedIn"].map((social) => (
              <Link
                key={social}
                href="#"
                className="
                  text-muted-foreground 
                  hover:text-blue-500 
                  transition-colors duration-300 
                  hover:underline underline-offset-4
                "
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
