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
        className="w-auto h-auto"
      />
    </Link>
  );
}
