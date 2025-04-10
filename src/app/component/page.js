 "use client";
 import { MenuUnfoldOutlined } from "@ant-design/icons"; 
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavbarLinks = ({ links = [], pathname = "/" }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex items-center gap-10">
      {/* Desktop Menu */}
      <div className="hidden sm:flex gap-10">
        {links.map((item) => {
          const linkPath = item === "home" ? "/" : `/${item}`;
          const isActive = pathname === linkPath;

          return (
            <Link
              key={item}
              href={linkPath}
              className={`relative text-sm md:text-base transition ${
                isActive
                  ? "text-yellow-300 before:content-[''] before:absolute before:-bottom-10 before:left-0 before:w-full before:h-[1px] before:bg-yellow-300"
                  : "text-white hover:text-yellow-300 hover:before:content-[''] hover:before:absolute hover:before:-bottom-10 hover:before:left-0 hover:before:w-full hover:before:h-[1px] hover:before:bg-yellow-300"
              }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          );
        })}
      </div>

      <div className="sm:hidden flex items-center">
       
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white hover:text-yellow-300"
        >
          {menuOpen ? (
            <MenuUnfoldOutlined
              style={{ fontSize: "24px", transform: "rotate(180deg)" }}
            />
          ) : (
            <MenuUnfoldOutlined style={{ fontSize: "24px" }} />
          )}
        </button>

      
        {menuOpen && (
          <div className="absolute top-16 right-0 w-48 bg-white shadow-md z-50 p-4 space-y-4">
            {links.map((item) => {
              const linkPath = item === "home" ? "/" : `/${item}`;
              const isActive = pathname === linkPath;

              return (
                <Link
                  key={item}
                  href={linkPath}
                  className={`relative text-sm transition ${
                    isActive
                      ? "text-yellow-300 before:content-[''] before:absolute before:-bottom-7 before:left-0 before:w-full before:h-[2px] before:bg-yellow-300"
                      : "text-black hover:text-yellow-300 hover:before:content-[''] hover:before:absolute hover:before:-bottom-7 hover:before:left-0 hover:before:w-full hover:h-[2px] hover:before:bg-yellow-300"
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
};

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="bg-black text-white p-4 flex items-center justify-between">
      <NavbarLinks
        links={["home", "mint", "staking", "account"]}
        pathname={pathname}
      />
    </header>
  );
};

export default Navbar;
