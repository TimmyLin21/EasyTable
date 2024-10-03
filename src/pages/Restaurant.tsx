import { Link, useLoaderData } from "react-router-dom";
import { Money } from "../components/Icons/Money";
import { Utensils } from "../components/Icons/Utensils";
import { Rating } from "../components/Rating/Rating";
import { SearchBar } from "../components/SearchBar/SearchBar";
import { Select } from "../components/Select/Select";
import { RestaurantType } from "../db/restaurants";
import { useContext, useMemo, useState } from "react";
import * as Label from "@radix-ui/react-label";
import { Button } from "../components/Button/Button";
import { MapPin } from "../components/Icons/MapPin";
import { Book, Compass, Phone } from "react-feather";
import { Dialog } from "../components/Dialog/Dialog";
import { Input } from "../components/Input/Input";
import { Textarea } from "../components/Textarea/Textarea";
import { Checkbox } from "../components/Checkbox/Checkbox";
import { Map } from "../components/Map/Map";
import { ToastContext } from "../components/Toast/Toast";

type TimeOptions = { value: string; text: string }[];
interface FormElements extends HTMLFormControlsCollection {
  people: HTMLInputElement;
  date: HTMLInputElement;
  time: HTMLInputElement;
}
interface BookingFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}

interface BookingInformation {
  people: number | undefined;
  date: string | undefined;
  time: string | undefined;
  firstName: string | undefined;
  lastName: string | undefined;
  email: string | undefined;
  phone: string | undefined;
  requests: string | undefined;
}

function getAvailableTimes(hour: string, options: TimeOptions) {
  let [open, close] = hour.split(" - ");
  if (open.includes("AM") && close.includes("PM")) {
    open = open.slice(0, -3);
    getAvailableTimes(open + " - 11:30 AM", options);
    getAvailableTimes("12:00 - " + close, options);
  } else if (close.includes("AM")) {
    close = close.slice(0, -3);
    let time = open;
    while (time !== close) {
      const [hour, minute] = time.split(":").map(Number);
      options.push({ value: time + " AM", text: time + " AM" });
      if (minute === 30) {
        time = `${hour + 1}:00`;
      } else {
        time = `${hour}:30`;
      }
    }
    options.push({ value: close + " AM", text: close + " AM" });
  } else if (close.includes("PM")) {
    close = close.slice(0, -3);
    let time = open;
    while (time !== close) {
      const [hour, minute] = time.split(":").map(Number);
      options.push({ value: time + " PM", text: time + " PM" });
      if (minute === 30 && hour !== 12) {
        time = `${hour + 1}:00`;
      } else if (minute === 0) {
        time = `${hour}:30`;
      } else {
        time = "1:00";
      }
    }
    options.push({ value: close + " PM", text: close + " PM" });
  }
}

export default function Restaurant() {
  const { restaurant } = useLoaderData() as { restaurant: RestaurantType };
  const { setOpen, setTitle, setDescription, setTheme } =
    useContext(ToastContext);
  const [openDialog, setOpenDialog] = useState(false);
  const [bookingInformation, setBookingInformation] =
    useState<BookingInformation>({
      people: undefined,
      date: undefined,
      time: undefined,
      firstName: undefined,
      lastName: undefined,
      email: undefined,
      phone: undefined,
      requests: undefined,
    });

  const bookingTimes = useMemo(() => {
    const options: TimeOptions = [];
    for (const duration of restaurant.hours[3]) {
      getAvailableTimes(duration, options);
    }
    return options;
  }, [restaurant]);

  const submitReserve = (e: React.FormEvent<BookingFormElement>) => {
    e.preventDefault();
    setBookingInformation((prev) => ({
      ...prev,
      people: Number(e.currentTarget.elements.people.value),
      date: e.currentTarget.elements.date.value,
      time: e.currentTarget.elements.time.value,
    }));
    setOpenDialog(true);
  };

  const requestBooking = (e: React.FormEvent<BookingFormElement>) => {
    e.preventDefault();
    setOpenDialog(false);
    setTheme("success");
    setTitle("Success");
    setDescription(
      "Your booking has been confirmed. You will receive a confirmation email shortly."
    );
    setOpen(true);
  };
  return (
    <>
      <SearchBar />
      <div className="w-screen mt-8 xl:container flex flex-col items-center relative">
        <img
          src={restaurant.images[0]}
          className="w-full xl:w-[1440px] h-[300px] object-fill rounded-md"
          alt="Ipoh dinning"
        />
        <button className="text-white bg-[rgba(0,0,0,0.65)] rounded-3xl px-4 py-2 transition-colors hover:bg-danger-600 w-fit absolute bottom-10 z-10">
          See all photos
        </button>
      </div>
      <section className="container">
        <ul className="flex gap-x-4 text-lg mb-6">
          <li className="text-danger-600 border-b-2 border-danger-600 py-2 cursor-pointer">
            Overview
          </li>
          <li className="hover:text-danger-600 py-2 cursor-pointer">
            <Link to={`/restaurant/${restaurant.id}/#location`}>Location</Link>
          </li>
          <li className="hover:text-danger-600 py-2 cursor-pointer">
            <Link to={`/restaurant/${restaurant.id}/#openingtime`}>
              Opening Time
            </Link>
          </li>
          <li className="hover:text-danger-600 py-2 cursor-pointer">
            <Link to={`/restaurant/${restaurant.id}/#reviews`}>Reviews</Link>
          </li>
        </ul>
        <section className="flex gap-x-6 mb-8">
          <div>
            <h2 className="text-4xl font-bold mb-4">{restaurant.name}</h2>
            <div className="flex gap-x-6 text-lg mb-4">
              <p className="flex gap-x-1">
                {restaurant.rating.toPrecision(2)}{" "}
                <Rating rating={restaurant.rating} />
                <span className="text-info-700">
                  {restaurant.reviewsCount} Google reviews
                </span>
              </p>
              <p className="flex items-center gap-x-2 font-semibold">
                <span className="w-4">
                  <Money />
                </span>{" "}
                {restaurant.price === 1
                  ? "$"
                  : restaurant.price === 2
                  ? "$$"
                  : "$$$"}
              </p>
              <p className="flex gap-x-1 items-center gap-x-2">
                <span className="w-4">
                  <Utensils />
                </span>{" "}
                {restaurant.cuisine.join(", ")}
              </p>
            </div>
            <p className="mb-4">{restaurant.description}</p>
            <p className="flex gap-x-2 mb-2">
              <Phone /> Phone:{""}
              <a
                className="text-indigo-500 hover:text-indigo-600 active:text-indigo-700"
                href={`tel:${restaurant.phone}`}
              >
                {restaurant.phone}
              </a>
            </p>
            <p className="flex gap-x-2 mb-2">
              <Compass /> Website:{""}
              <a
                className="text-indigo-500 hover:text-indigo-600 active:text-indigo-700"
                target="_blank"
                href={restaurant.website}
              >
                {restaurant.website}
              </a>
            </p>
            <p className="flex gap-x-2">
              <Book /> Menu:{""}
              <a
                className="text-indigo-500 hover:text-indigo-600 active:text-indigo-700"
                target="_blank"
                href={restaurant.menu}
              >
                {restaurant.menu}
              </a>
            </p>
          </div>
          <form
            className="min-w-[375px] flex flex-col items-center"
            onSubmit={submitReserve}
          >
            <fieldset className="text-center font-bold text-xl mb-2 border-b-2 pb-2 w-full">
              Make a booking
            </fieldset>
            <div className="grid grid-cols-2 gap-4 w-full px-2 pt-2">
              <Select
                name="people"
                label="Number of people"
                options={Array.from({ length: 10 }, (_, i) => ({
                  value: `${i + 1}`,
                  text: `${i + 1} ${i === 0 ? "person" : "people"}`,
                }))}
                placeholder="Select number of people"
                className="col-span-2"
              />
              <div>
                <Label.Root className="block mb-1 font-semibold" htmlFor="date">
                  Date
                </Label.Root>
                <input
                  type="date"
                  id="date"
                  name="date"
                  className="w-full py-1 pl-2 border-b-2 border-slate-200 gap-2 bg-white hover:bg-slate-50 data-[placeholder]:text-slate-400"
                  defaultValue={new Date().toISOString().slice(0, 10)}
                />
              </div>
              <Select
                name="time"
                label="Time"
                options={bookingTimes}
                placeholder="Select booking time"
              />
            </div>
            <Button
              type="submit"
              color="danger"
              className="w-[200px] mt-4 mx-0"
            >
              Reserve
            </Button>
          </form>
          <Dialog
            title="Reserve a Table"
            open={openDialog}
            setOpen={setOpenDialog}
          >
            <div className="flex justify-between border-b-2 border-slate-200 pb-5 px-2">
              <section className="text-slate-400">
                <p className="font-bold text-xl text-black">
                  {restaurant.name}
                </p>
                <p className="mb-2">{restaurant.cuisine.join(", ")}</p>
                <p>
                  {bookingInformation.date} at {bookingInformation.time}
                </p>
                <p>Table for {bookingInformation.people}</p>
              </section>
              <img
                src={restaurant.images[0]}
                className="w-[100px] rounded-sm"
              />
            </div>
            <form onSubmit={requestBooking}>
              <fieldset className="grid grid-cols-2 py-4 gap-y-4 gap-x-8">
                <Input label="First Name" required />
                <Input label="Last Name" required />
                <Input label="Email" type="email" required />
                <Input label="Phone" type="tel" required />
                <Textarea
                  label="Special Requests (Optional)"
                  className="col-span-2"
                />
                <Checkbox
                  className="col-span-2"
                  label={
                    <p>
                      By selecting{" "}
                      <span className="font-bold">"Complete Booking"</span> you
                      agree to EasyTable's Terms & Conditions and Privacy
                      Policy.
                    </p>
                  }
                />
              </fieldset>
              <Button type="submit" color="danger" className="w-full">
                Comfirm Booking
              </Button>
            </form>
          </Dialog>
        </section>
        <div className="flex gap-x-8">
          <section id="location" className="mb-8 flex-1">
            <h3 className="text-3xl font-bold mb-4">Location</h3>
            <p className="flex gap-x-2 mb-3">
              <MapPin className="fill-danger-400" />
              {restaurant.address}
            </p>
            <Map location={restaurant.location} />
          </section>
          <section id="openingtime" className="min-w-[375px]">
            <h3 className="text-3xl font-bold mb-4">Opening Time</h3>
            <div className="grid grid-cols-2">
              <p className="">Monday</p>
              <p>{restaurant.hours[1].join(" ")}</p>
              <p className="">Tuesday</p>
              <p>{restaurant.hours[2].join(" ")}</p>
              <p className="">Wednesday</p>
              <p>{restaurant.hours[3].join(" ")}</p>
              <p className="">Thursday</p>
              <p>{restaurant.hours[4].join(" ")}</p>
              <p className="">Friday</p>
              <p>{restaurant.hours[5].join(" ")}</p>
              <p className="">Saturday</p>
              <p>{restaurant.hours[6].join(" ")}</p>
              <p className="">Sunday</p>
              <p>{restaurant.hours[7].join(" ")}</p>
            </div>
          </section>
        </div>
        <section id="reviews">
          <h3 className="text-3xl font-bold mb-4">Reviews</h3>
          <div className="border-l border-r p-4 flex flex-col gap-y-3 mb-4">
            {restaurant.reviews.map((review, index) => (
              <p key={index}>{`"${review}"`}</p>
            ))}
          </div>
        </section>
      </section>
    </>
  );
}
