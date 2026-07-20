import AccreditationStrip from "./AccreditationStrip";
import FooterBottom from "./FooterBottom";
import FooterTop from "./FooterTop";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-slate-200 bg-gradient-to-b from-white via-[#FCFCFD] to-slate-50">
      {/* Ambient Background */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(216,77,149,.05),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(183,213,49,.05),transparent_28%)]" />

      <div className="relative z-10">
        <AccreditationStrip />

        <FooterTop />

        <FooterBottom />
      </div>
    </footer>
  );
}
