import Link from "next/link";

export default function InquiryButton() {
  return (
    <Link
      href="/meet-an-advisor"
      className="
        inline-flex
        h-11
        items-center
        justify-center
        rounded-full
        bg-[#D84D95]
        px-6
        text-sm
        font-semibold
        text-white
        shadow-md
        transition-all
        duration-300
        hover:-translate-y-0.5
        hover:bg-[#c73f86]
        hover:shadow-xl
      "
    >
      Start Your Journey
    </Link>
  );
}
