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
    <ul className="flex flex-col lg:flex-row w-full">
      {links.map(({ href, text, icon }, index) => (
        <li
          key={index}
          className="relative mb-4 last:mb-0 lg:mb-0 lg:mr-8 w-full lg:w-auto sm:max-w-xs"
        >
          <a
            href={href}
            className="flex flex-row gradient-background rounded-full px-6 py-2 items-center justify-center hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
          >
            <FontAwesomeIcon
              icon={icon}
              fontSize={26}
              className="text-white pr-6"
            />

            <span className="w-32 text-xl font-black font-primary text-white">
              {text}
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
};
