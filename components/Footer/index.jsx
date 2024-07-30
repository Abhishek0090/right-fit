import { navLinks } from "@/constants";

export default function Footer() {
  return (
    <footer className="bg-footerColor text-white py-20 mt-6 h-full">
      <div className="flex justify-between gap-10 mx-6 px-4">
        <div className="flex justify-between items-center gap-20 mx-6 px-4">
          <div className="flex flex-col gap-10">
            <p className="gradientText text-2xl font-bold">RIGHTFIT.COM</p>
            <div className="flex flex-col gap-4">
              {navLinks.map(({ id, title, link }) => (
                <a href={link} key={id}>
                  {title}
                </a>
              ))}
            </div>
          </div>
          <div>
            <span className="text-gray-300 tracking-normal">
              We are a registered E-commereec seller and we suspanport a variety
              of Local and International
              <br /> payment modes
            </span>
            <div className="flex space-x-2 mt-2">
              <img src="/images/links.svg" alt="Visa" className="h-10" />
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div>
            <p className="mb-2 text-gray-300">Website protected by</p>
            <img src="/images/logo.svg" alt="Digicert" className="h-16" />
          </div>
        </div>
      </div>
    </footer>
  );
}
