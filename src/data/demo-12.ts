import User from "icons/lineal/User";
import Gift from "icons/lineal/Gift";
import Check from "icons/lineal/Check";
import IdCard from "icons/lineal/IdCard";
import ChatTwo from "icons/lineal/ChatTwo";
import Browser from "icons/lineal/Browser";
import { LinkType } from "types/demo-1";
import BriefcaseTwo from "icons/lineal/BriefcaseTwo";

const servicess = [
  {
    id: 1,
    link: "/document-management",
    Icon: Browser,
    title: "Improve Efficiency",
    linkType: LinkType.yellow,
    iconClassName: "icon-svg-md text-yellow mb-3",
    cardClassName: "card-border-bottom border-soft-yellow",
    description: `Document Management that suites to fit your healthcare structure to increase Efficiency.`,
  },
  {
    id: 2,
    link: "/compliance-regulation",
    Icon: ChatTwo,
    title: "Stay Compliant",
    linkType: LinkType.green,
    iconClassName: "icon-svg-md text-green mb-3",
    cardClassName: "card-border-bottom border-soft-green",
    description: `Compliance that meets all government requirements, providing automation and peace of mind.`,
  },
  {
    id: 3,
    link: "/claims-and-bills",
    Icon: Gift,
    linkType: LinkType.orange,
    title: "Increase Profits",
    iconClassName: "icon-svg-md text-orange mb-3",
    cardClassName: "card-border-bottom border-soft-orange",
    description: `Receive payments directly from your chosen medical insurance partner, without the need to chase.`,
  },
  {
    id: 4,
    link: "https://training.ryzolve.com/",
    Icon: IdCard,
    linkType: LinkType.blue,
    title: "Training",
    iconClassName: "icon-svg-md text-blue mb-3",
    cardClassName: "card-border-bottom border-soft-blue",
    description: `We facilitate the licensing and training processes for home care, provide certificates.`,
  },
];

const processList = [
  {
    no: "1",
    className: "me-lg-6",
    title: "Collect Ideas",
    subtitle:
      "Nulla vitae elit libero pharetra augue dapibus. Praesent commodo cursus.",
  },
  {
    no: "2",
    title: "Data Analysis",
    className: "ms-lg-13 mt-6",
    subtitle:
      "Vivamus sagittis lacus vel augue laoreet. Etiam porta sem malesuada magna.",
  },
  {
    no: "3",
    title: "Finalize Product",
    className: "mx-lg-6 mt-6",
    subtitle:
      "Cras mattis consectetur purus sit amet. Aenean lacinia bibendum nulla sed.",
  },
];

const factList = [
  { id: 1, number: 7518, title: "Completed Projects", Icon: Check },
  { id: 2, number: 3472, title: "Happy Customers", Icon: User },
  { id: 3, number: 2184, title: "Expert Employees", Icon: BriefcaseTwo },
];

const reviews = [
  {
    id: 1,
    name: "Coriss Ambady",
    designation: "Financial Analyst",
    review: `Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta. Cras mattis consectetur.`,
  },
  {
    id: 2,
    name: "Cory Zamora",
    designation: "Marketing Specialist",
    review: `Fusce dapibus, tellus ac cursus tortor mauris condimentum fermentum massa justo sit amet purus sit amet fermentum.`,
  },
  {
    id: 3,
    name: "Nikolas Brooten",
    designation: "Sales Manager",
    review: `Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor eu rutrum. Nulla vitae libero.`,
  },
  {
    id: 4,
    name: "Coriss Ambady",
    designation: "Financial Analyst",
    review: `Etiam adipiscing tincidunt elit convallis felis suscipit ut. Phasellus rhoncus eu tincidunt auctor nullam rutrum, pharetra augue.`,
  },
];

export { servicess, processList, factList, reviews };
