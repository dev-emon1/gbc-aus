import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/logo.png"
        alt="George Brown College"
        width={240}
        height={60}
        priority
        className="
    h-auto
    w-[170px]
    xl:w-[190px]
    2xl:w-[220px]
  "
      />
    </Link>
  );
}
