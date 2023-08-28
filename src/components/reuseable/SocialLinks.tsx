import { useQuery } from "@tanstack/react-query";
import { getSocialMediaLinks } from "queries/footer";
import { FC } from "react";

// ========================================================
type SocialLinksProps = { className?: string };
// ========================================================

const links = [
  { id: 1, icon: "uil uil-twitter", url: "https://twitter.com/uilibofficial" },
  {
    id: 2,
    icon: "uil uil-facebook-f",
    url: "https://facebook.com/uiLibOfficial/",
  },
  { id: 3, icon: "uil uil-dribbble", url: "#" },
  {
    id: 4,
    icon: "uil uil-instagram",
    url: "https://www.instagram.com/uilibofficial/",
  },
  {
    id: 5,
    icon: "uil uil-youtube",
    url: "https://www.youtube.com/channel/UCsIyD-TSO1wQFz-n2Y4i3Rg",
  },
];

const SocialLinks: FC<SocialLinksProps> = ({
  className = "nav social social-white mt-4",
}) => {
  const { data } = useQuery({
    queryKey: ["socialMediaLinks"],
    queryFn: getSocialMediaLinks,
  });

  const requiredData = data?.socialMediaLinks.map((value: any) => {
    return { ...value, icon: `uil uil-${value.name}`, url: value.link };
  });
  return (
    <nav className={className}>
      {requiredData?.map(({ id, icon, url }: any) => (
        <a href={url} key={id} target="_blank" rel="noreferrer">
          <i className={icon} />
        </a>
      ))}
    </nav>
  );
};

export default SocialLinks;
