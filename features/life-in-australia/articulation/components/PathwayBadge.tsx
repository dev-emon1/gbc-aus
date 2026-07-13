type Props = {
  children: React.ReactNode;
};

export default function PathwayBadge({ children }: Props) {
  return (
    <span
      className="
        inline-flex
        items-center
        rounded-full
        border
        border-[#D84D95]/15
        bg-[#D84D95]/8
        px-3
        py-1.5
        text-xs
        font-semibold
        tracking-wide
        text-[#D84D95]
      "
    >
      {children}
    </span>
  );
}
