import { Link, Outlet } from "react-router-dom";
import { Facebook } from "../components/Icons/Facebook";
import { Twitter } from "../components/Icons/Twitter";
import { Instagram } from "../components/Icons/Instagram";
import { Globe } from "../components/Icons/Globe";
import { MapPin } from "../components/Icons/MapPin";
import { Button } from "../components/Button/Button";
import { ReactNode, useState } from "react";
import { Bell } from "../components/Icons/Bell";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { User } from "../components/Icons/User";
import { Bookmark } from "../components/Icons/Bookmark";
import { Settings } from "../components/Icons/Settings";
import { Deals } from "../components/Icons/Deals";
import { HistoryIcon } from "../components/Icons/History";
import { Logout } from "../components/Icons/Logout";
import ScrollToHashElement from "@cascadia-code/scroll-to-hash-element";
import { scrollToHashElement } from "../utilities/scrollToHash";
import { Toast, ToastProvider } from "../components/Toast/Toast";

const NAV_LIST = [
  {
    name: "About",
    link: "/#about",
    onClick: scrollToHashElement,
  },
  {
    name: "Restaurants",
    link: "/search",
  },
  {
    name: "Blog",
    link: "/blog",
  },
  {
    name: "FAQs",
    link: "/FAQs",
  },
];
const COMPANY_LIST = [
  {
    name: "About us",
    link: "/#about",
    onClick: scrollToHashElement,
  },
  {
    name: "Our offerings",
    link: "/offerings",
  },
  {
    name: "Careers",
    link: "/careers",
  },
  {
    name: "Blog",
    link: "/blog",
  },
  {
    name: "Terms & conditions",
    link: "/terms",
  },
  {
    name: "Privacy policy",
    link: "/privacy",
  },
];
const SOCIAL_LIST = [
  {
    name: "Facebook",
    link: "https://facebook.com",
    component: <Facebook />,
  },
  {
    name: "Twitter",
    link: "https://twitter.com",
    component: <Twitter />,
  },
  {
    name: "Instagram",
    link: "https://instagram.com",
    component: <Instagram />,
  },
];
const DROPDOWN_LIST = [
  {
    name: "My Profile",
    link: "/profile",
    icon: <User />,
  },
  {
    name: "Collections",
    link: "/collections",
    icon: <Bookmark />,
  },
  {
    name: "Account Settings",
    link: "/settings",
    icon: <Settings />,
  },
  {
    name: "Dine-in Deals",
    link: "/deals",
    icon: <Deals />,
  },
  {
    name: "Dine-in History",
    link: "/history",
    icon: <HistoryIcon />,
  },
];

export const Layout = ({ outlet }: { outlet?: ReactNode }) => {
  const [isLogin, setIsLogin] = useState(false);
  const handleLogin = () => {
    setIsLogin(true);
  };
  const handleLogout = () => {
    setIsLogin(false);
  };
  return (
    <ToastProvider>
      <Toast />
      <ScrollToHashElement behavior="smooth" inline="center" />
      <header className="container py-4 mb-6 mx-auto flex items-center justify-between">
        <Link className="flex items-center gap-x-2 w-fit" to="/">
          <img src="logo.svg" className="w-12" alt="logo" />
          <h1 className="text-4xl font-bold">EasyTable</h1>
        </Link>
        <div className="flex items-center gap-x-6">
          <nav className="flex gap-x-6">
            {NAV_LIST.map(({ name, link, onClick }) => (
              <Link
                key={link}
                to={link}
                onClick={onClick}
                className="text-xl font-semibold group relative"
              >
                {name}
                <span className="absolute block opacity-0 h-[2px] w-full bg-black group-hover:opacity-100 transition-opacity"></span>
              </Link>
            ))}
          </nav>
          {isLogin ? (
            <>
              <button type="button">
                <Bell />
                <span className="sr-only">notification</span>
              </button>
              <DropdownMenu.Root>
                <DropdownMenu.Trigger>
                  <button type="button">
                    <img
                      src="avatar.png"
                      className="w-10 h-10 rounded-full"
                      alt="avatar"
                    />
                  </button>
                </DropdownMenu.Trigger>
                <DropdownMenu.Content
                  align="end"
                  sideOffset={5}
                  className="min-w-[220px] bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade flex flex-col z-50 py-4"
                >
                  {DROPDOWN_LIST.map(({ name, link, icon }) => (
                    <DropdownMenu.Item
                      key={link}
                      className="group rounded-[3px] h-fit pl-[25px] py-3 select-none outline-none data-[highlighted]:bg-primary-500 data-[highlighted]:text-white transition-colors"
                    >
                      <Link to={link} className="flex items-center gap-x-4">
                        <div className="w-6 h-6">{icon}</div>
                        {name}
                      </Link>
                    </DropdownMenu.Item>
                  ))}
                  <DropdownMenu.Item className="group rounded-[3px] h-fit pl-[25px] py-3 select-none outline-none data-[highlighted]:bg-primary-500 data-[highlighted]:text-white transition-colors">
                    <button
                      className="flex items-center gap-x-4"
                      onClick={handleLogout}
                    >
                      <div className="w-6 h-6">
                        <Logout />
                      </div>
                      Logout
                    </button>
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Root>
            </>
          ) : (
            <Button
              color="primary"
              className="rounded-2xl"
              onClick={handleLogin}
            >
              Sign in
            </Button>
          )}
        </div>
      </header>
      <main className="mx-auto">{outlet ? outlet : <Outlet />}</main>
      <footer className="bg-primary-50 py-8 mt-auto">
        <div className="container mx-auto grid grid-cols-2 gap-y-6 mb-4 md:grid-cols-3">
          <section className="grid grid-cols-[48px_minmax(0,_1fr)] items-center gap-x-2 self-center col-span-2 md:col-span-1">
            <img src="logo.svg" className="w-12" alt="logo" />
            <p className="text-4xl font-bold text-primary-500">EasyTable</p>
            <p className="text-2xl font-semibold text-primary-400 col-start-2">
              Your personal dining butler.
            </p>
          </section>
          <section className="md:justify-self-center">
            <h2 className="text-2xl font-semibold text-primary-500 mb-2">
              Compnay
            </h2>
            <ul>
              {COMPANY_LIST.map(({ name, link, onClick }) => (
                <li key={link}>
                  <Link
                    onClick={onClick}
                    to={link}
                    className="text-xl font-thin text-primary-500 hover:text-primary-600 active:text-primary-700 transition-colors"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
          <section className="md:justify-self-center">
            <h2 className="text-2xl font-semibold text-primary-500 mb-2">
              Get in touch
            </h2>
            <ul className="flex gap-3 mb-6">
              {SOCIAL_LIST.map(({ name, link, component }) => (
                <li key={link}>
                  <Link
                    to={link}
                    className="flex items-center gap-x-2 text-xl font-semibold w-7 fill-primary-500 hover:fill-primary-600 active:fill-primary-700 transition-colors"
                  >
                    {component}
                    <span className="sr-only">{name}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <form>
              <label
                htmlFor="signup"
                className="text-xl font-thin text-primary-500"
              >
                Sign up for our latest news and coupons
              </label>
              <div className="flex flex-wrap gap-2 items-baseline">
                <input
                  type="email"
                  id="signup"
                  name="signup"
                  placeholder="Enter email address"
                  className="rounded-[28px] py-4 px-7 mt-2"
                />
                <Button type="submit" color="primary">
                  Subscribe
                </Button>
              </div>
            </form>
          </section>
        </div>
        <div className="container mx-auto flex justify-between align-middle">
          <p className="text-lg font-thin text-primary-500">
            &copy; 2024 EasyTable. All rights reserved.
          </p>
          <ul className="text-primary-500 flex gap-2">
            <li>
              <button className="flex gap-1 hover:text-primary-600 active:text-primary-700">
                <Globe />
                English
              </button>
            </li>
            <li>
              <button className="flex gap-1 hover:text-primary-600 active:text-primary-700">
                <MapPin />
                Sydney
              </button>
            </li>
          </ul>
        </div>
      </footer>
    </ToastProvider>
  );
};
