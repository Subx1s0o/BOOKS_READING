import { AbrilFont } from "@/app/lib/font";

export default function Register() {
  return (
    <section>
      <div className="my-container xs:flex xs:flex-col md:flex-row items-center">
        <div className="xs:order-2 md:order-1">second</div>
        <div className="xs:order-1 md:order-2">
          <h1 className={`${AbrilFont.className} text-4xl  `}>Books Reading</h1>
        </div>
      </div>
    </section>
  );
}
