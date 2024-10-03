import { Link, LinkProps } from "react-router-dom";
import { Halal } from "../components/Icons/Halal";
import Vegan from "../components/Icons/Vegan";
import { Pescatarian } from "../components/Icons/Pescatarian";
import { GlutenFree } from "../components/Icons/GlutenFree";
import { Kosher } from "../components/Icons/Kosher";
import { ReactElement, useEffect, useState } from "react";

import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SearchBar } from "../components/SearchBar/SearchBar";
import banner1 from "../assets/ad-banner.png";
import banner2 from "../assets/ad-banner-2.png";
import banner3 from "../assets/ad-banner-3.png";
import mission from "../assets/mission.png";
import story from "../assets/story.png";
import about from "../assets/about.png";

type IconLinkProps = { icon: JSX.Element } & LinkProps;
const IconLink = ({ icon, children, ...props }: IconLinkProps) => (
  <Link {...props} className="flex items-center gap-x-2 text-xl font-semibold">
    {icon}
    {children}
  </Link>
);

const LINK_LIST: Array<{ to: string; icon: ReactElement; label: string }> = [
  { to: "search?q=halal", icon: <Halal />, label: "Halal" },
  { to: "search?q=vegan", icon: <Vegan />, label: "Vegan" },
  {
    to: "search?q=pescatarian",
    icon: <Pescatarian />,
    label: "Pescatarian",
  },
  {
    to: "search?q=gluten-free",
    icon: <GlutenFree />,
    label: "Gluten Free",
  },
  { to: "search?q=kosher", icon: <Kosher />, label: "Kosher" },
];

const SLIDES = [
  {
    src: banner1,
    alt: "New in town!",
    className: "",
  },
  {
    src: banner2,
    alt: "Need fast lunch?",
    className: "scale-105",
  },
  {
    src: banner3,
    alt: "Brunch time",
    className: "scale-105",
  },
];

const HANDWRITE = `What started as a small idea has now grown into a mission to help people
        dine better, live better, and experience the joy of finding the perfect
        restaurant`;

export const Home = () => {
  const [handwrite, setHandwrtie] = useState("_");

  useEffect(() => {
    let interval;
    if (handwrite.length !== HANDWRITE.length + 1) {
      interval = setInterval(() => {
        setHandwrtie(HANDWRITE.substring(0, handwrite.length) + "_");
      }, 100);
    } else {
      interval = setInterval(() => {
        setHandwrtie("_");
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [handwrite, handwrite.length]);

  return (
    <div className="container">
      <h2 className="text-8xl font-black text-center mb-4">Dine in?</h2>
      <ul className="flex gap-x-8 justify-center py-4 my-4 flex-wrap gap-y-4">
        {LINK_LIST.map(({ to, icon, label }) => (
          <li key={to} className="group">
            <IconLink to={to} icon={icon}>
              <div className="relative">
                {label}
                <span className="absolute block opacity-0 h-[2px] w-full bg-black group-hover:opacity-100 transition-opacity"></span>
              </div>
            </IconLink>
          </li>
        ))}
      </ul>
      <SearchBar />
      <div className="mt-6 mx-auto max-w-[1040px]">
        <Swiper
          spaceBetween={50}
          modules={[Pagination, Autoplay, EffectFade]}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            stopOnLastSlide: false,
          }}
          loop={true}
          effect="fade"
          className="rounded-[20px] mb-6"
        >
          {SLIDES.map(({ src, alt, className }) => (
            <SwiperSlide key={src}>
              <img src={src} alt={alt} className={`${className}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div id="about" className="lg:grid lg:grid-cols-2 items-center gap-x-8">
        <section className="py-12">
          <h2 className="text-4xl font-bold mb-4">About Us</h2>
          <h3 className="text-3xl mb-4 bg-gradient-to-r from-primary-600 to-primary-300 bg-clip-text">
            <span className="text-transparent">
              At EasyTable, we believe dining should be enjoyable, accessible,
              and tailored to everyone’s unique preferences.
            </span>
          </h3>
          <p className="text-xl mb-3 text-slate-700">
            Our platform is designed to cater to specific dietary needs, making
            it simple to find restaurants that offer Halal, kosher, gluten-free,
            vegan-friendly, and other dietary options.
          </p>
          <p className="text-xl text-slate-700">
            By combining advanced search, personalized recommendations, and
            seamless booking features, we’re transforming the dining experience
            for those often overlooked by traditional platforms. Whether you’re
            a diner with specific dietary preferences or a restaurant showcasing
            your unique offerings, EasyTable connects you with the right match
            effortlessly.
          </p>
        </section>
        <img
          src={about}
          alt="Our office"
          className="rounded-lg h-auto w-full mb-24 lg:mb-0"
        />
        <div className="relative grid grid-rows-subgrid flex lg:grid-cols-2 col-span-2 gap-x-8 items-center">
          <div className="absolute bg-primary-50 -top-12 lg:top-0 bottom-0 w-[150vw] -translate-x-1/3 -z-10"></div>
          <img
            src={mission}
            alt="Our office"
            className="rounded-lg h-auto w-full"
          />
          <section className="py-12">
            <h2 className="text-4xl font-bold mb-4">Our Mission</h2>
            <h3 className="text-3xl mb-4 bg-gradient-to-r from-success-600 to-success-300 bg-clip-text">
              <span className="text-transparent">
                Our mission is to make dining out a personalized, hassle-free
                experience for individuals with specific dietary needs.
              </span>
            </h3>
            <p className="text-xl mb-3 text-slate-700">We strive to:</p>
            <ul className="list-disc list-inside mb-4">
              <li className="text-lg text-slate-700">
                Empower Diners: By providing a platform where users can easily
                search for restaurants that cater to their dietary preferences
                and book tables instantly.
                <p></p>
              </li>
              <li className="text-lg text-slate-700">
                Support Restaurants: By giving them the tools they need to
                promote their unique offerings, attract new customers, and
                streamline their reservation process.
              </li>
              <li className="text-lg text-slate-700">
                Build Inclusivity: Ensuring that people from diverse cultures,
                lifestyles, and health conditions can enjoy dining out without
                the stress of finding a place that meets their needs.
              </li>
            </ul>
            <p className="text-xl text-slate-700">
              We believe that everyone deserves a place at the table, and we’re
              committed to making that happen.
            </p>
          </section>
        </div>
        <section className="py-12">
          <h2 className="text-4xl font-bold mb-4">Our Story</h2>
          <h3 className="text-3xl mb-4 bg-gradient-to-r from-info-600 to-info-300 bg-clip-text">
            <span className="text-transparent">
              EasyTable was born out of personal experience.
            </span>
          </h3>
          <p className="text-xl mb-3 text-slate-700">
            One of our founders, a Muslim, often faced challenges finding Halal
            restaurants when dining out. He realized there was a significant gap
            in the market for platforms that cater to people with specific
            dietary requirements. After searching through numerous apps and
            websites that either lacked filtering options or booking
            functionality, it became clear that dining platforms were missing a
            crucial opportunity to serve a diverse audience.
          </p>
          <p className="text-xl text-slate-700">
            This inspired us to create EasyTable, a one-stop solution that not
            only helps people like him find Halal-certified restaurants but also
            supports other dietary preferences such as kosher, gluten-free,
            vegetarian, and more. Our team is passionate about food and
            technology, and we've brought together these two passions to create
            a platform that simplifies the dining experience for everyone.
          </p>
        </section>
        <img
          src={story}
          alt="Our office"
          className="rounded-lg h-auto w-full mb-24 lg:mb-0"
        />
      </div>
      <h3 className="font-handwriting text-4xl text-center mb-10 -mt-10 lg:mt-0">
        {handwrite}
      </h3>
    </div>
  );
};
