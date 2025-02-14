import React from "react";
import { MdMenu } from "react-icons/md";
import { motion } from "framer-motion";


const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    link: "#",
  },
  {
    id: 2,
    title: "Work",
    link: "#",
  },
  {
    id: 3,
    title: "My Info",
    link: "#",
  },
  {
    id: 4,
    title: "Services",
    link: "#",
  },
  {
    id: 5,
    title: "Contact Me",
    link: "#",
  },
];

const Navbar = () => {
  return (
    <>
      <div className="bg-brandDark text-white py-6 font-varela">
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className=" container flex justify-between items-center"
        >
          {/* logo section */}
          <div>
            <a href="" className="text-xl font-bold uppercase">
              Portfolio /{" "}
              <span className="font-extralight text-white/70"> CS</span>
            </a>
          </div>

          {/* menu section */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-4">
              {NavbarMenu.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.link}
                    className="inline-block text-sm py-2 px-3 uppercase"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* mobile hamburger section */}
          <div className="md:hidden">
            <MdMenu className="text-3xl" />
          </div>
        </motion.nav>
      </div>
    </>
  );
};

export default Navbar;
