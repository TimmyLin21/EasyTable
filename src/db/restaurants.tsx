export type RestaurantType = {
  id: number;
  name: string;
  rating: number;
  reviewsCount: number;
  price: 1 | 2 | 3;
  cuisine: string[];
  reviews: string[];
  description: string;
  images: string[];
  address: string;
  location: [number, number];
  region: string;
  phone: string;
  hours: {
    1: string[];
    2: string[];
    3: string[];
    4: string[];
    5: string[];
    6: string[];
    7: string[];
  };
  website: string;
  menu: string;
  map?: string;
};
export const RESTAURANTS = [
  {
    id: 1,
    name: "Ipoh on York",
    rating: 4,
    reviewsCount: 1028,
    price: 1,
    cuisine: ["Malaysian", "Halal"],
    reviews: [
      `If you’re looking for somewhere affordable and delicious
                    for lunch in the city, try Ipoh on York.`,
      `Been here many times but never remember to leave a review!`,
    ],
    description:
      "Tucked away in the bustling streets of the business district is our York St haven, serving up the familiar spices of your favourite Malaysian dishes. Whether you’re there for the rich, soothing broth of our famous laksa or the succulent pieces of hainan chicken, our restaurant will be an easy favourite among you and your colleagues looking for a quick and satisfying bite of Malaysian food in Sydney.",
    images: ["../src/assets/banner-Ipoh.jpg"],
    address: "83 York St, Sydney NSW 2000",
    region: "Sydney City",
    phone: "02 9299 0001",
    hours: {
      1: ["10:30 AM - 7:00 PM"],
      2: ["10:30 AM - 7:00 PM"],
      3: ["10:30 AM - 7:00 PM"],
      4: ["10:30 AM - 7:00 PM"],
      5: ["10:30 AM - 7:00 PM"],
      6: ["11:00 AM - 3:00 PM"],
      7: ["11:00 AM - 3:00 PM"],
    },
    website: "https://ipohtown.com.au/",
    menu: "https://ipohtown.com.au/menu/",
    location: [151.205994, -33.869305],
  },
  {
    id: 2,
    name: "NOUR",
    rating: 4.8,
    reviewsCount: 2800,
    price: 3,
    cuisine: ["Middle Eastern", "Vegan"],
    reviews: [
      `Hands down the best dinner experience I’ve ever had.`,
      `For the price it was very good value for money in my view. They didn’t skimp on the portions.`,
    ],
    description:
      "NOUR is a fine dining restaurant in Surry Hills which is built on a dream of presenting classic Lebanese flavours in a fresh and exciting way. We provide Sydneysiders with a superb dining experience and are voted no. 1 restaurant in Sydney on Tripadvisor, thanks to its delicious food and welcoming charm. Our vibrant space coupled with our outstanding menu takes you on a journey through the Middle East. We believe Australians deserve to know what this humble country on the Mediterranean coastline has hidden in its Cedar branches. Our team takes an unrestricted approach when it comes to all things food and drink. Join us at NOUR and prepare to dive into a menu that challenges everything you know about traditional Middle Eastern cuisine.",
    images: ["../src/assets/banner-NOUR.jpeg"],
    address: "3/490 Crown St, Surry Hills NSW 2010",
    region: "Sydney City",
    phone: "02 9299 0001",
    hours: {
      1: ["5:30 - 8:30 PM"],
      2: ["5:30 - 8:30 PM"],
      3: ["5:30 - 8:30 PM"],
      4: ["12:00 - 2:15 PM", "5:30 - 9:00 PM"],
      5: ["12:00 - 2:15 PM", "5:30 - 9:00 PM"],
      6: ["12:00 - 2:15 PM", "5:30 - 9:00 PM"],
      7: ["12:00 - 2:15 PM", "5:00 - 8:00 PM"],
    },
    website: "https://www.noursydney.com/",
    menu: "https://www.noursydney.com/menus?utm_content=NOUR+-+Surry+Hills&utm_campaign=Google+My+Business+-+Menu&utm_medium=organic&utm_source=google&utm_term=plcid_8876915928515631771",
    location: [151.213818, -33.886656],
  },
  {
    id: 3,
    name: "Thai Pothong",
    rating: 4.6,
    reviewsCount: 4858,
    price: 2,
    cuisine: ["Asian", "Thai", "Vegan", "Gluten Free"],
    reviews: [
      `This place serves delicious Thai food in a big, nicely decorated space. The Pad Thai is really tasty, with just the right seasoning.`,
      `Very nice atmosphere and great service from the lovely team. There is a large variety of food and drinks with good quality and reasonable price.`,
    ],
    description:
      "The iconic Thai Pothong restaurant located in the Sydney’s Newtown district has been a favourite for over 20 years. Its reputation for authentic Thai food, impeccable Thai service, and a truly Thai ambiance is the recipe for a truly Thai experience. Thai Pothong (Golden Pho Leaf) is named after the “Pho” tree under which Buddha became enlightened on the full moon of May in his 35th year.",
    images: ["../src/assets/banner-Thai Pothong.jpeg"],
    address: "294 King St, Newtown NSW 2042",
    region: "Inner West",
    phone: "02 9550 6277",
    hours: {
      1: ["12:00 - 3:30 PM", "5:30 - 10:00 PM"],
      2: ["12:00 - 3:30 PM", "5:30 - 10:00 PM"],
      3: ["12:00 - 3:30 PM", "5:30 - 10:00 PM"],
      4: ["12:00 - 3:30 PM", "5:30 - 10:00 PM"],
      5: ["12:00 - 3:30 PM", "5:30 - 11:00 PM"],
      6: ["12:00 - 3:30 PM", "5:30 - 11:00 PM"],
      7: ["12:00 - 3:30 PM", "5:30 - 10:00 PM"],
    },
    website: "https://www.thaipothong.com.au/",
    menu: "https://online.fliphtml5.com/oksrg/pyii/#p=1",
    location: [151.179684, -33.896693],
  },
  {
    id: 4,
    name: "Harvest Buffet Sydney",
    rating: 4,
    reviewsCount: 3123,
    price: 2,
    cuisine: ["Asian", "Thai", "Vegan", "Gluten Free"],
    reviews: [
      `The entire experience was amazing from the food, to the service and staff.`,
      `Harvest buffet was highly recommended to me by a friend and it did not disappoint! The whole experience from food to atmosphere to service was fantastic!`,
    ],
    description:
      "Harvest Buffet is a feast for the senses. On weekends seafood becomes the star of the show, with the freshest sushi, oysters, prawns, crabs and mussels complementing roasts from the carvery, pizza, pasta, curries, soups and salads. Of course, you could go straight for the decadent dessert bar which includes three chocolate fountains. Because one is never enough at Harvest. For those that are spoilt for choice, look no further than Harvest Buffet Lunch for a Melbourne Cup Feast with live music and all your Premium Buffet favourites including an extensive seafood selection.",
    images: ["../src/assets/banner-Harvest Buffet Sydney.jpeg"],
    address: "Level 1/80 Pyrmont St, Pyrmont NSW 2009",
    region: "Sydney City",
    phone: "02 9550 6277",
    hours: {
      1: ["7:00 - 11:00 AM", "12:00 - 3:00 PM", "5:00 - 10:00 PM"],
      2: ["7:00 - 11:00 AM", "12:00 - 3:00 PM", "5:00 - 10:00 PM"],
      3: ["7:00 - 11:00 AM", "12:00 - 3:00 PM", "5:00 - 10:00 PM"],
      4: ["7:00 - 11:00 AM", "12:00 - 3:00 PM", "5:00 - 10:00 PM"],
      5: ["7:00 - 11:00 AM", "12:00 - 3:00 PM", "5:00 - 10:00 PM"],
      6: ["7:00 - 11:00 AM", "12:00 - 3:00 PM", "5:00 - 10:00 PM"],
      7: ["7:00 - 11:00 AM", "12:00 - 3:00 PM", "5:00 - 10:00 PM"],
    },
    website:
      "https://www.star.com.au/sydney/eat-and-drink/casual-dining/harvest-buffet",
    menu: "https://www.star.com.au/sites/default/files/2024-08/harvest_buffet_sydney_melbourne_cup_2024_sample_menu.pdf",
    location: [151.19541247897547, -33.8687925816121],
  },
];
