import { navLinks } from "@/constants";

export default function Footer() {
  return (
    <footer className="bg-footerColor text-white py-10 mt-6">
      <div className="flex flex-col lg:flex-row justify-between gap-10 mx-6">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10 mx-6 px-4">
          <div className="flex flex-col gap-4 lg:gap-10">
            <img src="/images/RIGHTFIT.COM.svg" className="h-12" alt="Logo" />
          <div className="flex flex-col gap-2 lg:gap-4">
              {navLinks.map(({ id, title, link }) => (
                <a href={link} key={id} className="hover:underline">
                  {title}
                </a>
              ))}
            </div>
          </div>
          <div className="mt-6 lg:mt-0">
            <span className="text-gray-300 tracking-normal text-sm lg:text-base">
              We are a registered E-commerce seller and we support a variety of
              local and international
              <br className="hidden lg:inline" /> payment modes
            </span>
            <div className="flex space-x-2 mt-2">
              <img src="/images/links.svg" alt="Visa" className="h-10" />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center lg:flex-row lg:items-center lg:justify-between mt-10 lg:mt-0">
          <div className="text-center lg:text-left">
            <p className="mb-2 text-gray-300 text-sm lg:text-base">
              Website protected by
            </p>
            <img
              src="/images/logo.svg"
              alt="Digicert"
              className="h-10 lg:h-16 mx-auto lg:mx-0"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
