import logo from "../assets/images/logo.svg";
import menu from "../assets/images/icon-menu.svg";

function Navbar() {
  return (
    <nav className="relative w-full flex items-center justify-between py-4">
      <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
        <div className="container-fluid w-full flex justify-between items-center">
          <a
            className="flex items-center text-gray-900 hover:text-gray-900 focus:text-gray-900 mt-2 lg:mt-0 mr-1"
            href="#"
          >
            <img src={logo} alt="logo" loading="lazy" />
          </a>
          <img src={menu} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
