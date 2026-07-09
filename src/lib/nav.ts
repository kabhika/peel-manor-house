export type NavLink = {
  label: string;
  href: string;
};

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Accommodation", href: "/accommodation" },
];

export const EVENTS_LINKS: NavLink[] = [
  { label: "Weddings", href: "/weddings" },
  { label: "High Tea", href: "/high-tea" },
  { label: "Corporate Events", href: "/corporate-events" },
  { label: "Markets & Expos", href: "/markets-and-expos" },
];

export const NAV_LINKS_TRAILING: NavLink[] = [
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const ALL_NAV_LINKS: NavLink[] = [
  ...NAV_LINKS,
  ...EVENTS_LINKS,
  ...NAV_LINKS_TRAILING,
];

export const SITE = {
  name: "Peel Manor House",
  phone: "(08) 9524 2838",
  phoneHref: "tel:0895242838",
  email: "info@peelmanorhouse.com.au",
  emailHref: "mailto:info@peelmanorhouse.com.au",
  addressLine1: "164 Fletcher Road (off Stakehill Road)",
  addressLine2: "Karnup WA 6176",
  domain: "https://peelmanorhouse.com.au",
};
