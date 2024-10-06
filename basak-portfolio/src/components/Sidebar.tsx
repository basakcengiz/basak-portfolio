import CloseIcon from '@mui/icons-material/Close';
import { links } from '../helpers/arrays';
import { LinkType } from '../helpers/types';
type Props = {
  setSidebar: React.Dispatch<React.SetStateAction<boolean>>;
};

const Sidebar = ({ setSidebar }: Props) => {
  return (
    <div className="h-screen w-full border flex flex-col">
      <div
        className="flex justify-end p-6 cursor-pointer"
        onClick={() => {
          setSidebar(false);
        }}
      >
        <CloseIcon />
      </div>
      <div className="flex flex-col items-center justify-between h-2/5 mt-40 ">
        {links.map((link: LinkType) => {
          return (
            <a
              href={link.id}
              key={link.id}
              onClick={() => {
                setSidebar(false);
              }}
            >
              {link.name}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
