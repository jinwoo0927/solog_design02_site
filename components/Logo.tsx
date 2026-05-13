import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="logo" aria-label="은혜의빛교회 홈">
      <Image src="/images/logo-transparent.svg" alt="은혜의빛교회" width={1220} height={350} priority />
    </Link>
  );
}
