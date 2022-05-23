import jerkyImg from "../assets/img/jerkywide.jpeg";
import cheeseImg from "../assets/img/cheesewide.jpeg";
import salmonImg from "../assets/img/salmonwide.jpeg";
import barBImg from "../assets/img/platedbbyaki.jpg";
import thaiChiliImg from "../assets/img/chili.jpg";
import honeyPepImg from "../assets/img/honeypeppered.jpeg";
import colbyImg from "../assets/img/colby.jpeg";
import mozzImg from "../assets/img/packagedcheese.jpeg";
import pepperJackImg from "../assets/img/pepperjack.jpeg";
import cheddarImg from "../assets/img/cheddar.jpeg";

export const PRODUCTS = [
  {
    id: 0,
    name: "Jerky",
    image: jerkyImg,
    description:
      "Every piece of jerky gets slow smoked in a variety of hardwoods that include Mesquite, Hickory, Alder, and Apple. Our jerky comes in portions of 5lbs and is made weekly.",
    process:
      "We start with the finest Local Grass-Fed Texas Beef: Eye of the Round, to be exact. This beef is super lean and makes for a jerky unlike ANY you've ever tried.",
    type: "top",
    price: "$10.00",
    portion: "4 ounces",
    seasonal: false,
  },
  {
    id: 1,
    name: "Cheese",
    image: cheeseImg,
    description:
      "All of our cheese is the highest quality and smoked with Applewood. Our cheeses come in 4oz portions, and all cheese are $5.00.",
    type: "top",
    price: "$5.00",
    portion: "4 ounces",
    seasonal: false,
  },
  {
    id: 2,
    name: "Salmon",
    image: salmonImg,
    description:
      "Freshly smoked wild caught Alaskan Sockeye and Coho salmon (type depends on season). Portions are 7oz for $10.00. (All orders require a 3-day minimum advance notice.)",
    type: "top",
    price: "$10.00",
    portion: "7 ounces",
    seasonal: false,
  },
  {
    id: 3,
    name: "Dragon's Fire Thai Chili",
    image: thaiChiliImg,
    description:
      "Dragons Fire Thai Chili starts with exactly what you see in this picture: dozens of fresh Thai Chilis are used in each five-pound batch.  Very tender, this jerky finishes with a dragon's bite.",
    type: "jerky",
    price: "$10.00",
    portion: "4 ounces",
    seasonal: false,
  },
  {
    id: 4,
    name: "Bar-B-Yaki",
    image: barBImg,
    description:
      "Our Bar-B-Yaki flavor Beef Jerky is made with Sweet Baby Ray's BBQ sauce combined with our own blend of teriyaki sauce and secret spices.",
    type: "jerky",
    price: "$10.00",
    portion: "4 ounces",
    seasonal: false,
  },
  {
    id: 5,
    name: "Honey Peppered",
    image: honeyPepImg,
    description:
      "We use Local Raw Organic Honey in our Honey Peppered Marinade, which gets brushed on each piece in the smoking process.",
    type: "jerky",
    price: "$10.00",
    portion: "4 ounces",
    seasonal: false,
  },
  {
    id: 6,
    name: "Colby Jack",
    image: colbyImg,
    description: "",
    type: "cheese",
    price: "$5.00",
    portion: "4 ounces",
    seasonal: false,
  },
  {
    id: 7,
    name: "Mozzarella",
    image: mozzImg,
    description: "",
    type: "cheese",
    price: "$5.00",
    portion: "4 ounces",
    seasonal: false,
  },
  {
    id: 8,
    name: "Pepper Jack",
    image: pepperJackImg,
    description: "",
    type: "cheese",
    price: "$5.00",
    portion: "4 ounces",
    seasonal: false,
  },
  {
    id: 9,
    name: "Sharp Cheddar",
    image: cheddarImg,
    description: "",
    type: "cheese",
    price: "$5.00",
    portion: "4 ounces",
    seasonal: false,
  },
  {
    id: 10,
    name: "Hatch Chile",
    image: "",
    description: "Seasonal hatch chile flavored jerky",
    type: "jerky",
    price: "$10.00",
    portion: "4 ounces",
    seasonal: true,
  },
];
