import close from "../assets/images/icon-menu-close.svg";
import links from "../utils/links";

function Drawer({ isOpen, setIsOpen }) {
  return (
    <div
      className={`fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out 
    ${
      isOpen
        ? " transition-opacity opacity-100 duration-500 translate-x-0  "
        : " transition-all delay-500 opacity-0 translate-x-full  "
    }`}
    >
      <div
        className={`w-[260px] right-0 absolute bg-white h-full p-6 shadow-xl delay-400 duration-500 ease-in-out transition-all transform 
      ${isOpen ? " translate-x-0" : " translate-x-full"}`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-0 pr-6"
        >
          <img src={close} />
        </button>
        <ul className="pt-28">
          {links.map((link) => (
            <a className="block mt-6" key={link.id} href={link.href}>
              <li>{link.title}</li>
            </a>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Drawer;
