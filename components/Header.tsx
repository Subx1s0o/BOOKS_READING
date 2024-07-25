import Link from "next/link";
import { AbrilFont } from "./../app/lib/font";

export default function Header() {
  return (
    <header>
      <div className="my-container py-4 bg-white border-gray-300 border-b xs:flex xs:justify-center md:block">
        <Link href="/" className={`${AbrilFont.className} text-md`}>
          BR
        </Link>
      </div>
    </header>
  );
}
