import { Mail, Phone, ShieldCheck } from "lucide-react";
import Logo from "./Logo";

interface FooterProps {
  onScrollTo: (selector: string) => void;
  onOpenReseller: () => void;
}

export default function Footer({ onScrollTo, onOpenReseller }: FooterProps) {
  return (
    <footer className="bg-dark-bg border-t border-sky-200 text-gray-500 py-12 md:py-16" id="main-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          <div className="md:col-span-4 flex flex-col items-start gap-4">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => onScrollTo("#hero-section")}>
              <div className="w-8 h-8 rounded-lg bg-sky-100 border border-sky-300 flex items-center justify-center">
                <Logo size={22} />
              </div>
              <span className="text-lg font-bold font-display tracking-tight text-gray-900">SwivTV</span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed max-w-sm">SwivTV is de meest stabiele IPTV provider van Nederland en België. Geniet van live TV, sport en VOD op al je apparaten.</p>
            <div className="flex items-center gap-2 text-[10px] uppercase font-mono tracking-wider font-bold text-sky-600 mt-2">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>All Services Operational 100%
            </div>
          </div>
          <div className="md:col-span-2 flex flex-col items-start gap-3.5">
            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider font-mono">Pakketten</h4>
            <div className="flex flex-col gap-2 text-xs">
              {["3 Maanden Pakket","6 Maanden Pakket","12+3 Maanden Bonus Deal","1 Maand Proefabonnement"].map(l=>(
                <button key={l} onClick={() => onScrollTo("#pricing-section")} className="hover:text-gray-900 transition-colors text-left">{l}</button>
              ))}
            </div>
          </div>
          <div className="md:col-span-3 flex flex-col items-start gap-3.5">
            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider font-mono">Installatie</h4>
            <div className="flex flex-col gap-2 text-xs">
              {["Samsung & LG Smart TV Setup","Amazon Fire TV Stick Setup","Apple TV / iOS Setup","Formuler & Android Box Setup"].map(l=>(
                <button key={l} onClick={() => onScrollTo("#setup-section")} className="hover:text-gray-900 transition-colors text-left">{l}</button>
              ))}
            </div>
          </div>
          <div className="md:col-span-3 flex flex-col items-start gap-3.5">
            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider font-mono">Klantenbeheer</h4>
            <div className="flex flex-col gap-2.5 text-xs">
              <button onClick={onOpenReseller} className="hover:text-gray-900 transition-colors text-left font-bold flex items-center gap-1.5 text-sky-700">
                <ShieldCheck className="w-3.5 h-3.5" /> Wordt een Reseller
              </button>
              <a href="https://wa.me/447449708976" target="_blank" rel="noreferrer" className="hover:text-gray-900 transition-colors flex items-center gap-1">
                <Phone className="w-3.5 h-3.5" /> WhatsApp Direct Support
              </a>
              <div className="flex items-center gap-1.5 text-gray-400 text-[11px] mt-1">
                <Mail className="w-3.5 h-3.5" /><span>support@swivtv.net</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-sky-200 pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-xs text-gray-400">
            <span>&copy; {new Date().getFullYear()} SwivTV Premium IPTV. Alle rechten voorbehouden.</span>
          </div>
          <div className="flex flex-wrap items-center gap-3 bg-sky-50 border border-sky-200 px-4 py-2 rounded-xl">
            <span className="text-[9px] uppercase font-mono tracking-widest text-gray-400 mr-1.5 font-bold">Veilig Betalen:</span>
            {["iDEAL","Bancontact","PayPal","VISA / MC"].map(p=>(
              <span key={p} className="text-gray-700 font-bold text-[10px] px-1.5 py-0.5 rounded bg-white border border-sky-200">{p}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
