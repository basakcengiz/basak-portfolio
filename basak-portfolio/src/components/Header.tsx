import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import { links } from '../helpers/arrays';
import { LinkType } from '../helpers/types';

type Props = {
  setSidebar: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header = ({ setSidebar }: Props) => {
  return (
    <div className="flex items-center justify-around p-6 bg-[#FAF7F0] font-medium shadow-xl sticky top-0 z-2">
      <a href="/">Basak.dev</a>

      <div className="hidden sm:flex justify-evenly  sm:w-3/5 md:w-2/5 ">
        {links.map((link: LinkType) => {
          return (
            <a href={link.id} key={link.id}>
              {link.name}
            </a>
          );
        })}
      </div>
      <span
        className="sm:hidden cursor-pointer"
        onClick={() => {
          setSidebar(true);
        }}
      >
        <DensityMediumIcon />
      </span>
    </div>
  );
};

export default Header;
