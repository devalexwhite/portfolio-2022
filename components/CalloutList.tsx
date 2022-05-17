import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export type Callout = {
  text: string;
  subtext?: string;
  icon: IconProp;
};

interface CalloutListProps {
  callouts: Callout[];
}

export const CalloutList = ({ callouts = [] }: CalloutListProps) => {
  return (
    <ul className="flex flex-col md:flex-row md:flex-wrap w-full lg:justify-between items-center md:items-start">
      {callouts.map(({ text, subtext, icon }, index) => (
        <li key={index} className="grid grid-cols-4 p-2 w-48">
          <div className="col-span-1 flex items-center justify-center sm:justify-start mr-24 md:mr-0">
            <FontAwesomeIcon
              icon={icon}
              fontSize={26}
              className="gradient-svg"
            />
          </div>
          <div className="col-span-3 flex flex-col text-sm justify-center text-content font-primary whitespace-nowrap">
            <span className="font-medium">{text}</span>
            <span className="font-bold">{subtext}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};
