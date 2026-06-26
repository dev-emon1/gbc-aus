import FooterBottom from "./FooterBottom";
import FooterTop from "./FooterTop";

export default function Footer() {
  return (
    <footer
      className="
        relative
        overflow-hidden

        bg-[radial-gradient(circle_at_top_left,rgba(216,77,149,0.10),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(183,213,49,0.10),transparent_35%),linear-gradient(to_bottom,#FAFAFA,#FFFFFF,#F8FAFC)]
      "
    >
      {/* Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(216,77,149,0.06),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(183,213,49,0.06),transparent_35%),radial-gradient(circle_at_center,rgba(148,163,184,0.05),transparent_55%)]" />

      {/* Premium Top Border */}
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-[#D84D95]/60 to-transparent" />

      {/* Content */}
      <div className="relative z-10">
        <FooterTop />
        <FooterBottom />
      </div>
    </footer>
  );
}
