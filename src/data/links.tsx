import {
  faAddressBook,
  faEnvelope,
  faUserGroup,
  faVrCardboard,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Discord,
  Facebook,
  Instagram,
  Linkedin,
  Reddit,
  Telegram,
  Tiktok,
  Twitter,
  Youtube,
} from "@icons-pack/react-simple-icons";
import { ReactNode } from "react";

export type linkType = {
  id: string;
  title: string;
  url: string;
  icon: ReactNode;
};

export const community: linkType[] = [
  {
    id: "fb-group",
    title: "Group",
    url: "https://facebook.com/groups/web3philippines",
    icon: <Facebook color="#fff" size={24} className="icon-style" />,
  },
  {
    id: "discord",
    title: "Discord",
    url: "https://web3philippines.org/discord",
    icon: <Discord color="#fff" size={24} className="icon-style" />,
  },
  {
    id: "reddit",
    title: "Reddit",
    url: "https://reddit.com/r/web3philippines",
    icon: <Reddit color="#fff" size={24} className="icon-style" />,
  },
  {
    id: "telegram",
    title: "Telegram",
    url: "https://t.me/web3philippines",
    icon: <Telegram color="#fff" size={24} className="icon-style" />,
  },
  {
    id: "gather",
    title: "Gather",
    url: "https://app.gather.town/app/EgdJnVXXhokxeu8g/web3philippines",
    icon: (
      <FontAwesomeIcon icon={faVrCardboard} className="icon-style" size="lg" />
    ),
  },
  {
    id: "nasio",
    title: "Nas.io",
    url: "https://nas.io/web3philippines",
    icon: (
      <FontAwesomeIcon icon={faUserGroup} className="icon-style" size="lg" />
    ),
  },
];

export const socials: linkType[] = [
  {
    id: "fb-page",
    title: "Page",
    url: "https://facebook.com/web3phl",
    icon: <Facebook color="#fff" size={24} className="icon-style" />,
  },
  {
    id: "tiktok",
    title: "TikTok",
    url: "https://tiktok.com/@web3phl",
    icon: <Tiktok color="#fff" size={24} className="icon-style" />,
  },
  {
    id: "youtube",
    title: "YouTube",
    url: "https://youtube.com/@web3phl",
    icon: <Youtube color="#fff" size={24} className="icon-style" />,
  },
  {
    id: "instagram",
    title: "Instagram",
    url: "https://instagram.com/web3phl",
    icon: <Instagram color="#fff" size={24} className="icon-style" />,
  },
  {
    id: "twitter",
    title: "Twitter",
    url: "https://twitter.com/web3phl",
    icon: <Twitter color="#fff" size={24} className="icon-style" />,
  },
  {
    id: "linkedin",
    title: "Linkedin",
    url: "https://linkedin.com/company/web3phl",
    icon: <Linkedin color="#fff" size={24} className="icon-style" />,
  },
  {
    id: "email-us",
    title: "Email Us",
    url: "mailto:gm@web3philippines.org?subject=GM%2C%20Web3%20Philippines%20Team!&body=LPG%20mga%20kabatak!",
    icon: (
      <FontAwesomeIcon icon={faEnvelope} className="icon-style" size="lg" />
    ),
  },
];

export const projects: linkType[] = [
  {
    id: "directory",
    title: "Directory",
    url: "https://directory.web3philippines.org",
    icon: (
      <FontAwesomeIcon icon={faAddressBook} className="icon-style" size="lg" />
    ),
  },
];

export const links = { community, socials, projects };
export default links;
