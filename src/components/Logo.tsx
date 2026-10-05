import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" aria-label="Vidyakashi home" className="shrink-0">
      <Image
        src="/logo.png"
        alt="Vidyakashi"
        width={421}
        height={283}
        priority
        className="h-14 w-auto sm:h-[72px]"
      />
    </Link>
  );
}
