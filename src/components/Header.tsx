// import Button from "./Button";
// import Navigation from "./Navigation";
// import Banner from "./Banner";
// import Card from "./Card";
const Header = () => {
  return (
    <div>
      <header className="bg-[#2474E5]">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex-1 md:flex md:items-center md:gap-12">
              <a className="block text-teal-600" href="#">
                <span className="sr-only">Home</span>
                <img
                  width={148}
                  src="../../public/Link → icon_vxr_full_2.svg.png"
                  alt=""
                />
              </a>
            </div>

            <div className="md:flex md:items-center md:gap-12">
              <nav aria-label="Global" className="hidden md:block">
                <ul className="flex items-center gap-6 text-sm">
                  <li>
                    <a
                      className="text-white transition hover:text-[#FFD333]"
                      href=""
                    >
                      {" "}
                      Quản lý đơn hàng{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-white transition hover:text-[#FFD333]"
                      href="#"
                    >
                      {" "}
                      Mở bán vé trên Vexere{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-white transition hover:text-[#FFD333]"
                      href="#"
                    >
                      {" "}
                      Trở thành đối tác{" "}
                    </a>
                  </li>
                </ul>
              </nav>

              <div className="flex items-center gap-4">
                <div className="sm:flex sm:gap-4">
                  <a
                    className="rounded-md bg-[#E0E0E0] px-5 py-2.5 text-sm font-medium text-[#0D2E59]"
                    href="#"
                  >
                    Login
                  </a>

                  <div className="hidden sm:flex">
                    <a
                      className="rounded-md bg-[#E0E0E0] px-5 py-2.5 text-sm font-medium text-[#0D2E59]"
                      href="#"
                    >
                      Register
                    </a>
                  </div>
                </div>

                <div className="block md:hidden">
                  <button className="rounded bg-[#E0E0E0] p-2 text-gray-600 transition hover:text-gray-600/75">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* end */}
    </div>
  );
};

export default Header;
