import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="bg-charcoal pt-24 pb-14 border-t border-ivory/10 text-ivory">
      <div className="container-page grid md:grid-cols-3 gap-12 mb-20">
        <div>
          <span className="text-2xl tracking-[0.28em] font-medium uppercase block mb-6">Jaaju</span>
          <p className="text-base text-ivory/60 leading-relaxed max-w-[32ch]">
            Jaaju Kitchen & Bar — an editorial take on Andhra and Telangana
            cuisine, plated with quiet luxury in the heart of Miyapur.
          </p>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.25em] text-gold font-semibold mb-6">
            Reservations
          </h4>
          <p className="text-base mb-3 leading-relaxed">
            Table for two? Call <span className="font-medium">090522 10101</span> or book online.
          </p>
          <Link
            to="/reserve"
            className="text-base font-medium border-b border-ivory/20 hover:border-saffron hover:text-saffron transition-colors"
          >
            Book a table →
          </Link>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.25em] text-gold font-semibold mb-6">
            Visit
          </h4>
          <p className="text-base text-ivory/70 mb-1">First Floor, Block 1, Satyanarayana Enclave</p>
          <p className="text-base text-ivory/70 mb-1">Block-F, Madinaguda, Miyapur</p>
          <p className="text-base text-ivory/70 mb-3">Hyderabad, Telangana 500049</p>
          <ul className="flex gap-5 mt-4">
            <li>
              <a
                href="https://www.instagram.com/jaaju.hyd/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm uppercase tracking-[0.2em] hover:text-saffron transition-colors"
              >
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="text-sm uppercase tracking-[0.2em] hover:text-saffron transition-colors">
                Journal
              </a>
            </li>
            <li>
              <a href="#" className="text-sm uppercase tracking-[0.2em] hover:text-saffron transition-colors">
                Archive
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container-page flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-xs uppercase tracking-[0.25em] text-ivory/40 font-medium">
        <p>© {new Date().getFullYear()} Jaaju Kitchen & Bar</p>
        <p>Hyderabad · Andhra & Telangana Cuisine</p>
      </div>
    </footer>
  );
}