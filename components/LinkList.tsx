import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export type Link = {
  href: string;
  text: string;
  icon: IconProp;
};

interface LinkListProps {
  links: Link[];
}

export const LinkList = ({ links = [] }: LinkListProps) => {
  return (
    <ul className="flex flex-col lg:flex-row lg:flex-wrap ">
      {links.map(({ href, text, icon }, index) => (
        <li key={index} className="mb-4 last:mb-0 lg:mb-0 lg:mr-8 lg:mb-4 ">
          <a
            href={href}
            className="flex flex-row gradient-background rounded-full px-8 py-4 items-center hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
          >
            <FontAwesomeIcon
              icon={icon}
              fontSize={26}
              className="text-white pr-6"
            />

            <span className="text-xl font-black font-primary text-white">
              {text}
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
};
