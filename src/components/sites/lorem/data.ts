// Placeholder content for layout demonstration only.
// All copy is loremipsum; no real or fictional brand/claims.

export const SITE = {
  brand: "Lorem®",
  wordmark: "Lorem // Ipsum®",
  email: "hello@example.com",
  phone: "(000) 000-0000",
  timezone: "Europe/London",
  socials: [
    { label: "X", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "Dribbble", href: "#" },
  ],
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
] as const;

export const CLIENT_LOGOS = [
  { src: "/sites/lorem/logos/HW5z6wRHKmhuZ0m6M0N7qCzNo.svg", name: "Lorem", width: 84, height: 46 },
  { src: "/sites/lorem/logos/sDAhMZpK9734P2R9NeGhX7LeP0c.svg", name: "Ipsum", width: 91, height: 42 },
  { src: "/sites/lorem/logos/hS4KnAAX8cphKiUPqH7y79YMwc.svg", name: "Dolor", width: 69, height: 42 },
  { src: "/sites/lorem/logos/QpJmtz3dO6YmWniwVdN4muiSbY.svg", name: "Sit", width: 68, height: 42 },
  { src: "/sites/lorem/logos/tW5wE35YJtuIeBeLu1VoLh1MDbY.svg", name: "Amet", width: 67, height: 42 },
  { src: "/sites/lorem/logos/jW388YA5ksAvsmr34Qj2SIdWE.svg", name: "Consectetur", width: 82, height: 42 },
] as const;

export const HERO_TAGS = ["loremipsum", "Dolor sit amet", "Consectetur elit", "Sed do eiusmod"] as const;

export const STATS = [
  {
    value: 25,
    suffix: "+",
    label: "loremipsum dolor",
    copy: "loremipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  },
  {
    value: 350,
    suffix: "+",
    label: "Sit amet consectetur",
    copy: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
  },
  {
    value: 120,
    suffix: "+",
    label: "Adipiscing elit sed",
    copy: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
] as const;

export type Service = {
  number: string;
  title: string;
  tags: string[];
  copy: string;
  images: string[];
};

export const SERVICES: Service[] = [
  {
    number: "01",
    title: "loremipsum",
    tags: ["Dolor sit", "Amet consectetur", "Adipiscing elit", "Sed do eiusmod"],
    copy: "loremipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    images: ["IhfQZeWVM2YXEvVTKrfWwYsdmI", "4VpfEk0LtjOyNNkZwrBWWVA9FOk", "3msFGBOR1DnLbODXfwziFXWw05I"],
  },
  {
    number: "02",
    title: "Dolor Sit",
    tags: ["Tempor incididunt", "Labore magna", "Aliqua enim", "Ad minim"],
    copy: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
    images: ["NynSPIFR6MvgAtt2cidtstLMNBc", "maKc2uLruEL63V3cm4PIFcURGSk", "UOMuWc9YJJAXjVbxiubCXrR5KWQ"],
  },
  {
    number: "03",
    title: "Amet Consectetur",
    tags: ["Duis aute", "Irure dolor", "Reprehenderit", "Voluptate velit"],
    copy: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    images: ["9bOYY3nqSD9M9hUuHish6cJsU", "U2O9jY88tD1F9iJAyBdOMSPAlC0", "mLeuCCeF9pvJC2ZvupsHjCWK8s"],
  },
  {
    number: "04",
    title: "Sed Do Eiusmod",
    tags: ["Excepteur sint", "Occaecat", "Cupidatat non", "Proident sunt"],
    copy: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.",
    images: ["iWAwHSzjRcs6YbOx0FgdD17rnFQ", "kvAXK5hBN3zlGWGdFOYSCE9FGwk", "IeSOLWYbvrvjptyaHlV7kPX3EUk"],
  },
];

export const PROCESS = [
  {
    number: "01",
    title: "Lorem",
    copy: "loremipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
  },
  {
    number: "02",
    title: "Ipsum",
    copy: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    number: "03",
    title: "Dolor",
    copy: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
] as const;

export type Project = {
  name: string;
  year: string;
  copy: string;
  client: string;
  service: string;
  timeline: string;
  image: string;
  logo: string;
};

const LOREM_LONG =
  "loremipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam quis nostrud.";

export const PROJECTS: Project[] = [
  {
    name: "Lorem",
    year: "20XX",
    copy: LOREM_LONG,
    client: "loremipsum",
    service: "Dolor Sit",
    timeline: "00 weeks",
    image: "oJDtXbA7vk2Y7wdRJtgy4h5NwIk",
    logo: "70KZAkwp5milqgaAcVnRbrAGSq8",
  },
  {
    name: "Ipsum",
    year: "20XX",
    copy: LOREM_LONG,
    client: "Dolor Amet",
    service: "Consectetur Elit",
    timeline: "00 weeks",
    image: "rGTXAJUlNcRFMdckQThps8z5L4",
    logo: "kesQvuBK5jmizqf089MznxR3w8I",
  },
  {
    name: "Dolor",
    year: "20XX",
    copy: LOREM_LONG,
    client: "Sed Eiusmod",
    service: "Tempor Labore",
    timeline: "00 weeks",
    image: "xut8Fsk6ZsY3HotmckEtNdmfPA",
    logo: "OkS9KSe1NQY6WnSjflUSLRfstM",
  },
  {
    name: "Amet",
    year: "20XX",
    copy: LOREM_LONG,
    client: "Magna Aliqua",
    service: "Veniam Quis",
    timeline: "00 weeks",
    image: "rDLYhf8m1lzjY38CP6Ui6Y1DJS4",
    logo: "yGamP0S88Z0ROkW89o0VAW7Gxi8",
  },
];

export const WHY_US_FEATURES = [
  "loremipsum",
  "Dolor sit amet",
  "Consectetur",
  "Adipiscing elit",
  "Sed do eiusmod",
] as const;

export const WHY_US = [
  {
    title: "loremipsum Dolor",
    copy: "loremipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    icon: "chat",
  },
  {
    title: "Sit Amet Consectetur",
    copy: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
    icon: "handshake",
  },
  {
    title: "Adipiscing Elit",
    copy: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    icon: "calendar",
  },
] as const;

export const POSTS = [
  {
    date: "Jan 1, 20XX",
    category: "loremipsum",
    title: "loremipsum dolor sit amet",
    image: "Na9cPIghNKaoJ7Riprb5RmxI",
  },
  {
    date: "Feb 1, 20XX",
    category: "Dolor Sit",
    title: "Consectetur adipiscing elit sed",
    image: "rNH30XIMZsCeJQhsNDa6twVn4",
  },
  {
    date: "Mar 1, 20XX",
    category: "Amet Elit",
    title: "Tempor incididunt ut labore",
    image: "CTUWsyDxm93FLe87C6zNP2fFT0",
  },
  {
    date: "Apr 1, 20XX",
    category: "loremipsum",
    title: "Duis aute irure dolor in reprehenderit",
    image: "6E3OEiGcuiFOlVUpw5BvFYc",
  },
] as const;

export const img = (id: string) => `/sites/lorem/images/${id}.jpg`;
export const logo = (id: string) => `/sites/lorem/logos/${id}.svg`;

