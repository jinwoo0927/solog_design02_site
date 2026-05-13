import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="logo" aria-label="은혜의빛교회 홈">
      <Image src="/images/logo-current-transparent.png" alt="은혜의빛교회" width={2629} height={712} priority />
    </Link>
  );
}
