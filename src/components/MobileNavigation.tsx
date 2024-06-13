'use client';
import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Sidebar from './Sidebar';
import Logo from './Logo';
import { IoMenuOutline, IoClose } from 'react-icons/io5';
import HeaderLink from './HeaderLink';

export const navigationLinks = [
  {
    title: 'Men',
    href: '/products/men',
  },
  {
    title: 'Women',
    href: '/products/women',
  },
  {
    title: 'Kids',
    href: '/products/kids',
  },
];

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:hidden ">
      {/* burger icon  */}
      <button onClick={toggleMenu} className="rounded-full p-1.5 hover:bg-grey hoverEffect ">
        <IoMenuOutline className="text-2xl" />
      </button>
      {/* burger icon end */}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.4 } }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}>
            <nav className="w-full pl-12 py-6 fixed top-0 right-0 bottom-0  bg-white z-20 flex flex-col justify-between">
              {/* close button  */}
              <button
                className="ml-auto mr-6 rounded-full p-1.5 hover:bg-grey hoverEffect"
                onClick={toggleMenu}>
                <IoClose className="text-2xl" />
              </button>
              {/* close button end */}
              <Logo width={100} height={100} onClick={toggleMenu} />

              {/* Links  */}
              <ul className="flex flex-col   gap-y-8 font-semibold">
                {navigationLinks.map((link, index) => (
                  <li key={index} onClick={() => setIsOpen(false)}>
                    <HeaderLink href={link.href} title={link.title} />
                  </li>
                ))}
              </ul>
              {/* Links End */}

              <Sidebar onClick={toggleMenu} />
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNavigation;
