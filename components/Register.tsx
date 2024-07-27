import { AbrilFont } from "@/app/lib/font";
import Arrow from "@/public/icons/list-arrow.svg";
import RegisterForm from "./elements/RegisterForm";
export default function Register() {
  return (
    <main>
      <section>
        <div className="my-container xs:grid xs:grid-cols-1 lg:grid-cols-2 items-center smd:items-start xmd:justify-between ">
          <article className="xs:order-2 xmd:order-1 w-full  ">
            <RegisterForm />
          </article>
          <article className="xs:order-1 xmd:order-2 xmd:mx-auto mb-14">
            <h1
              className={`${AbrilFont.className} text-4xl my-8 md:mt-16 md:mb-12 sm:text-center `}
            >
              Books Reading
            </h1>

            <div className="flex xs:flex-col smd:flex-row  gap-6 xmd:flex-col justify-center ">
              <div className="max-w-80">
                <h2 className="text-md font-medium mb-4">Will help you to</h2>
                <ul>
                  <li className="flex gap-3 items-center">
                    <Arrow />
                    <p>Create your goal faster and proceed to read</p>
                  </li>
                  <li className="flex gap-3 items-center">
                    <Arrow />
                    <p>Divide process proportionally for each day</p>
                  </li>
                  <li className="flex gap-3 items-center">
                    <Arrow />
                    <p>Track your success</p>
                  </li>
                </ul>
              </div>

              <div className=" max-w-80">
                <h2 className="text-md font-medium mb-4 ">You may also</h2>
                <ul>
                  <li className="flex gap-3 items-center">
                    <Arrow />
                    <p>Pose your own independent point of view</p>
                  </li>
                  <li className="flex gap-3 items-center">
                    <Arrow />
                    <p>
                      Improve your professional skills according to new
                      knowledge
                    </p>
                  </li>
                  <li className="flex gap-3 items-center">
                    <Arrow />
                    <p>Become an interesting interlocutor</p>
                  </li>
                </ul>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
