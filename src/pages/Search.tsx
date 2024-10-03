import { useEffect, useState } from "react";
import { SearchBar } from "../components/SearchBar/SearchBar";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { CaretDown } from "../components/Icons/CaretDown";
import { Rating } from "../components/Rating/Rating";
import { Menu } from "../components/Icons/Menu";
import { Button } from "../components/Button/Button";
import { MapPin } from "../components/Icons/MapPin";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import * as Checkbox from "@radix-ui/react-checkbox";
import { Money } from "../components/Icons/Money";
import { Check } from "../components/Icons/Check";
import { Utensils } from "../components/Icons/Utensils";
import { Link } from "react-router-dom";
import { RESTAURANTS } from "../db/restaurants";

const SORT_LIST = ["Popularity", "Rating", "Price"];
const toggleGroupItemClasses =
  "hover:bg-gray-200 data-[state=on]:bg-gray-200 first:border-r-2 last:border-l-2 flex h-[35px] w-[80px] items-center justify-center bg-white text-base leading-4 first:rounded-l-3xl last:rounded-r-3xl focus:z-10 focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none";
const REGION_LIST = [
  "Bayside",
  "Bondi Area",
  "Eastern Suburbs",
  "Inner South",
  "Inner West",
  "North Sydney Area",
  "Randwick and Surrounds",
  "Sydney City",
];
const CUISINE_LIST = [
  "American",
  "Asian",
  "Australian",
  "British",
  "Chinese",
  "European",
  "Gluten Free",
  "Greek",
  "Halal",
  "Indian",
  "Italian",
  "Japanese",
  "Korean",
  "Kosher",
  "Malaysian",
  "Mexican",
  "Middle Eastern",
  "Pescatarian",
  "Spanish",
  "Turkish",
  "Thai",
  "Vegan",
  "Vietnamese",
];

export const Search = () => {
  const [filteredList, setFilteredList] = useState(() => {
    return RESTAURANTS.sort((a, b) => b.reviewsCount - a.reviewsCount);
  });
  const [sort, setSort] = useState("Popularity");
  const [prices, setPrices] = useState<string[]>([]);
  const [regions, setRegions] = useState<string[]>([]);
  const [cuisines, setCuisines] = useState<string[]>([]);

  const handlePriceChange = (values: string[]) => {
    if (values.length === 0) {
      setPrices([]);
    }
    setPrices(
      values.map((value) => (value === "$" ? "1" : value === "$$" ? "2" : "3"))
    );
  };

  const handleCheckChange = (
    type: "region" | "cuisine",
    checked: boolean | "indeterminate",
    option: string
  ) => {
    if (type === "region") {
      if (checked) {
        setRegions([...regions, option]);
      } else {
        setRegions(regions.filter((r) => r !== option));
      }
    } else if (type === "cuisine") {
      if (checked) {
        setCuisines([...cuisines, option]);
      } else {
        setCuisines(cuisines.filter((r) => r !== option));
      }
    }
  };
  const changeSort = (value: string) => {
    setSort(value);
    switch (value) {
      case "Popularity":
        setFilteredList((prev) =>
          prev.sort((a, b) => b.reviewsCount - a.reviewsCount)
        );
        break;
      case "Rating":
        setFilteredList((prev) => prev.sort((a, b) => b.rating - a.rating));
        break;
      case "Price":
        setFilteredList((prev) => prev.sort((a, b) => b.price - a.price));
        break;
    }
  };

  useEffect(() => {
    if (prices.length === 0 && regions.length === 0 && cuisines.length === 0) {
      setFilteredList(RESTAURANTS);
      return;
    }
    let tempfilteredList = RESTAURANTS;

    if (prices.length > 0) {
      tempfilteredList = tempfilteredList.filter((restaurant) => {
        if (prices.includes(restaurant.price.toString())) {
          return restaurant;
        }
      });
    }
    if (regions.length > 0) {
      tempfilteredList = tempfilteredList.filter((restaurant) => {
        if (regions.includes(restaurant.region)) {
          return restaurant;
        }
      });
    }
    if (cuisines.length > 0) {
      tempfilteredList = tempfilteredList.filter((restaurant) => {
        if (restaurant.cuisine.some((c) => cuisines.includes(c))) {
          return restaurant;
        }
      });
    }

    setFilteredList(tempfilteredList);
  }, [prices, regions, cuisines]);

  return (
    <div className="container flex w-full gap-x-6 mb-12">
      <section>
        <div className="border relative w-[300px] h-[300px] flex items-center justify-center mb-6 bg-mapview">
          <button
            type="button"
            className="absolute w-fit h-fit  group flex items-center text-nowrap gap-x-2 border-2 rounded-md p-2 border-black font-medium bg-white hover:text-slate-50 hover:bg-primary-500 transition-colors"
          >
            <MapPin className="group-hover:fill-danger-500 group-hover:stroke-black transition-colors" />
            View Map
          </button>
        </div>
        <form>
          <h3 className="text-xl font-semibold mb-5">Filters</h3>
          <p className="text-lg font-semibold mb-4 flex items-center gap-x-3">
            <span className="block w-6">
              <Money />{" "}
            </span>
            Price
          </p>
          <ToggleGroup.Root
            type="multiple"
            aria-label="Price"
            className="mb-8 inline-flex rounded-3xl shadow-[0_2px_3px]  shadow-slate-300"
            onValueChange={handlePriceChange}
          >
            <ToggleGroup.Item
              value="$"
              aria-label="cheap"
              className={toggleGroupItemClasses}
            >
              $
            </ToggleGroup.Item>
            <ToggleGroup.Item
              value="$$"
              aria-label="medium"
              className={toggleGroupItemClasses}
            >
              $$
            </ToggleGroup.Item>
            <ToggleGroup.Item
              value="$$$"
              aria-label="expensive"
              className={toggleGroupItemClasses}
            >
              $$$
            </ToggleGroup.Item>
          </ToggleGroup.Root>
          <fieldset className="mb-8">
            <legend className="text-lg font-semibold mb-4 flex items-center gap-x-3">
              <MapPin />
              Regions
            </legend>
            <div className="flex flex-col gap-y-4">
              {REGION_LIST.map((region) => (
                <div className="flex items-center gap-x-3" key={region}>
                  <Checkbox.Root
                    id={region}
                    className="h-6 w-6 rounded-md border border-black appearance-none outline-none focus:shadow-[0_0_0_2px_black]"
                    checked={regions.includes(region)}
                    onCheckedChange={(checked) =>
                      handleCheckChange("region", checked, region)
                    }
                  >
                    <Checkbox.Indicator>
                      <Check />
                    </Checkbox.Indicator>
                  </Checkbox.Root>
                  <label htmlFor={region}>{region}</label>
                </div>
              ))}
            </div>
          </fieldset>
          <fieldset>
            <legend className="text-lg font-semibold mb-4 flex items-center gap-x-3">
              <span className="block w-6">
                <Utensils />{" "}
              </span>
              Cuisine
            </legend>
            <div className="flex flex-col gap-y-4">
              {CUISINE_LIST.map((cuisine) => (
                <div className="flex items-center gap-x-3" key={cuisine}>
                  <Checkbox.Root
                    id={cuisine}
                    className="h-6 w-6 rounded-md border border-black appearance-none outline-none focus:shadow-[0_0_0_2px_black]"
                    checked={cuisines.includes(cuisine)}
                    onCheckedChange={(checked) =>
                      handleCheckChange("cuisine", checked, cuisine)
                    }
                  >
                    <Checkbox.Indicator>
                      <Check />
                    </Checkbox.Indicator>
                  </Checkbox.Root>
                  <label htmlFor={cuisine}>{cuisine}</label>
                </div>
              ))}
            </div>
          </fieldset>
        </form>
      </section>
      <section className="w-full">
        <div className="flex items-center justify-between mb-4">
          <SearchBar />
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <div className="flex items-center text-lg">
                Sort: <span className="ml-1 font-bold">{sort}</span>{" "}
                <span className="w-3 block ml-3">
                  <CaretDown />
                </span>
              </div>
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
              <DropdownMenu.Content
                align="end"
                className="px-4 py-2 bg-white rounded-md shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
              >
                {SORT_LIST.map((item) => (
                  <DropdownMenu.Item
                    key={item}
                    onSelect={() => changeSort(item)}
                    className={`p-2 ${
                      sort === item ? "bg-slate-50" : ""
                    } transition-colors hover:bg-slate-50 rounded-md`}
                  >
                    {item}
                  </DropdownMenu.Item>
                ))}
                <DropdownMenu.Arrow className="fill-white" />
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
        </div>
        <ul className="flex flex-col gap-y-3">
          {filteredList.map((restaurant, index) => (
            <li
              key={index}
              className="flex gap-x-6 border rounded-md border-gray-200"
            >
              <Link to={`/restaurant/${restaurant.id}`}>
                <img
                  className="rounded-md h-full max-w-[300px]"
                  src={restaurant.images[0]}
                  alt={restaurant.name}
                />
              </Link>
              <div className="flex-1 py-7 pr-4">
                <div className="flex justify-between w-full mb-4">
                  <Link to={`/restaurant/${restaurant.id}`}>
                    <h3 className="text-2xl font-semibold text-info-600 hover:text-info-700 active:text-info-800">
                      {restaurant.name}
                    </h3>
                  </Link>
                  <span className="h-fit block py-1 w-[48px] text-center rounded-xl bg-slate-100">
                    {restaurant.price === 1
                      ? "$"
                      : restaurant.price === 2
                      ? "$$"
                      : "$$$"}
                  </span>
                </div>
                <div className="flex justify-between w-full border-b pb-2 mb-2">
                  <p className="flex gap-x-2 items-center">
                    {restaurant.rating}
                    <Rating rating={restaurant.rating} />
                    <span className="text-info-700">
                      {restaurant.reviewsCount} Google reviews
                    </span>
                  </p>
                  <p>
                    <span className="text-success-600 font-semibold mr-3">
                      Open
                    </span>
                    10:00 AM - 8:00 PM
                  </p>
                </div>
                <div className="flex gap-x-8 items-center">
                  <p>{restaurant.cuisine.join(",")}</p>
                  {restaurant.menu && (
                    <a
                      href={restaurant.menu}
                      className="flex items-center gap-x-1"
                    >
                      <Menu />
                      Menu
                    </a>
                  )}
                </div>
                <div className="border-l border-r p-4 flex flex-col gap-y-3 mb-4">
                  {restaurant.reviews.map((review, index) => (
                    <p key={index}>{`"${review}"`}</p>
                  ))}
                </div>
                <Button color="primary" className="rounded-xl">
                  Reserve
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};
