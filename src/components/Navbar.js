import logo from "../assets/images/logo.svg";
import menu from "../assets/images/icon-menu.svg";
import links from "../utils/links";
import Drawer from "./Drawer";

function Navbar({ isOpen, setIsOpen }) {
  return (
    <>
      <header className="flex justify-between items-center">
        <div className="w-full flex justify-between items-center pb-3">
          <div>
            <img className="h-8" src={logo} alt="W." />
          </div>
          <div className="sm:hidden">
            <button
              className="focus:outline-none"
              onClick={() => {
                setIsOpen(true);
              }}
            >
              <img src={menu} />
            </button>
          </div>
        </div>

        <Drawer isOpen={isOpen} setIsOpen={setIsOpen} />

        <div className="hidden sm:block">
          <ul className="flex justify-center">
            {links.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="mx-3 hover:text-red-soft"
              >
                <li>{link.title}</li>
              </a>
            ))}
          </ul>
        </div>
      </header>
    </>
  );
}

export default Navbar;
