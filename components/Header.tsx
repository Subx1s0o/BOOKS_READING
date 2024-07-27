import Link from "next/link";
import { AbrilFont } from "./../app/lib/font";

export default function Header() {
  return (
    <header>
      <div className="my-container relative py-4 bg-white border-gray-300 border-b flex justify-center xmd:block">
        <Link href="/" className={`${AbrilFont.className} text-md`}>
          BR
        </Link>
      </div>
    </header>
  );
}
