"use client";
import { useState } from "react";
import { MdOutlineMenu, MdOutlineMenuOpen } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";
import { FaSearch } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaFire } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { MdFavorite } from "react-icons/md";
import { useRouter } from "next/navigation";
import useIsMobile from "@/hooks/isMobile";
import NavLinks from "./NavLinks";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const isMobile = useIsMobile();

  const [isOpenMenu, setIsOpenMenu] = useState(!isMobile);
  const [searchValue, setSearchValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const toggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  const handleSubmitSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Search submitted:", searchValue);

    if (searchValue.trim()) {
      router.push(`/search?query=${encodeURIComponent(searchValue)}`);
    } else {
      router.push("/");
    }

    setSearchValue("");
    setIsFocused(false);
  };

  const handleOverlayClick = () => {
    if (isMobile && isOpenMenu) {
      setIsOpenMenu(false);
    }
  };

  const mainLinks = [
    {
      name: "Home Page",
      href: "/",
      icon: <FaHome className="text-2xl" />,
      shortName: "Home",
    },
    {
      name: "Recommendations",
      href: "/recommendations",
      icon: <FaFire className="text-2xl" />,
      shortName: "Rec",
    },
    {
      name: "Top Songs",
      href: "/top-songs",
      icon: <FaTrophy className="text-2xl" />,
      shortName: "Top",
    },
  ];

  const userLinks = [
    {
      name: "Your Library",
      href: "/library",
      icon: <IoLibrary className="text-2xl" />,
      shortName: "Library",
    },
    {
      name: "Your Favorites",
      href: "/favorites",
      icon: <MdFavorite className="text-2xl" />,
      shortName: "Favorites",
    },
  ];

  const inputItem = (
    <div className="relative w-full md:w-auto">
      <form
        className="flex items-center space-x-2 relative"
        onSubmit={handleSubmitSearch}
      >
        <FaSearch className="text-xl absolute left-3 z-10" />
        <input
          type="text"
          onChange={handleSearchChange}
          value={searchValue}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 200)}
          maxLength={50}
          className="bg-neutral-800 p-2 pl-11 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-700 w-full"
          placeholder="Search..."
        />
      </form>
      <div
        className={`absolute top-full left-0 w-full bg-neutral-800 rounded-lg mt-2 p-4 transition-all duration-300 z-20 ${
          isFocused && searchValue
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      >
        <ul className="space-y-2">
          {searchValue && (
            <li className="text-white">
              Search results for: <strong>{searchValue}</strong>
            </li>
          )}
          <li className="text-gray-400 cursor-pointer hover:text-white">
            Result 1
          </li>
          <li className="text-gray-400 cursor-pointer hover:text-white">
            Result 2
          </li>
          <li className="text-gray-400 cursor-pointer hover:text-white">
            Result 3
          </li>
        </ul>
      </div>
    </div>
  );

  const userIcon = (
    <button className="transition-colors p-1.5 rounded-2xl hover:bg-neutral-800 flex-shrink-0">
      <RxAvatar className="text-4xl" />
    </button>
  );

  return (
    <div className="flex flex-col h-screen bg-neutral-900 text-white">
      {/* Header */}
      <header className="flex justify-between items-center pt-6 pb-4 px-6 md:border-b-2 border-neutral-500">
        {/* Desktop layout */}
        <div className="hidden md:flex items-center space-x-8 flex-1">
          <button
            onClick={toggleMenu}
            className="transition-colors p-1.5 rounded-2xl hover:bg-neutral-800"
          >
            {isOpenMenu ? (
              <MdOutlineMenuOpen className="text-4xl" />
            ) : (
              <MdOutlineMenu className="text-4xl" />
            )}
          </button>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-700 via-indigo-300 to-indigo-700 bg-clip-text text-transparent animate-gradient-x md:pr-2">
            Vibefy
          </h1>
          {inputItem}
        </div>
        <div className="hidden md:block">{userIcon}</div>

        {/* Mobile layout */}
        <div className="flex md:hidden items-center justify-between w-full">
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleMenu}
              className="transition-colors p-1.5 rounded-2xl hover:bg-neutral-800"
            >
              {isOpenMenu ? (
                <MdOutlineMenuOpen className="text-3xl" />
              ) : (
                <MdOutlineMenu className="text-3xl" />
              )}
            </button>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-700 via-indigo-300 to-indigo-700 bg-clip-text text-transparent animate-gradient-x">
              Vibefy
            </h1>
          </div>
          {userIcon}
        </div>
      </header>

      {/* Mobile search bar */}
      <div className="md:hidden px-6 pb-3 md:py-3 border-b border-neutral-700">
        {inputItem}
      </div>

      {/* Main content area */}
      <div className="flex-1 flex relative">
        {/* Mobile overlay */}
        {isMobile && isOpenMenu && (
          <div
            className="fixed inset-0 backdrop-blur-lg z-30 md:hidden"
            onClick={handleOverlayClick}
          />
        )}

        {/* Navigation */}
        <nav
          className={`${
            isMobile
              ? `fixed left-0 top-0 h-full z-40 transform transition-transform duration-300 ${
                  isOpenMenu ? "translate-x-0" : "-translate-x-full"
                } w-64`
              : `${isOpenMenu ? "w-64" : "w-24"} transition-all duration-300`
          } bg-neutral-900 text-white py-6 px-3 space-y-4 border-r-2 border-neutral-500`}
        >
          {isMobile && (
            <button
              onClick={toggleMenu}
              className="transition-colors p-1.5 rounded-2xl hover:bg-neutral-800"
            >
              {isOpenMenu ? (
                <MdOutlineMenuOpen className="text-4xl" />
              ) : (
                <MdOutlineMenu className="text-4xl" />
              )}
            </button>
          )}
          <NavLinks
            header="Main items"
            links={mainLinks}
            isOpenMenu={isOpenMenu}
          />

          <div className="h-[1px] w-full bg-neutral-400"></div>

          <NavLinks
            header="User items"
            links={userLinks}
            isOpenMenu={isOpenMenu}
          />
        </nav>

        {/* Main content */}
        <main className="flex-1 overflow-auto">{children}</main>
      </div>
    </div>
  );
}
