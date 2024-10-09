import CloseIcon from '@mui/icons-material/Close';
import { links } from '../helpers/arrays';
import { LinkType } from '../helpers/types';
type Props = {
   setSidebar: React.Dispatch<React.SetStateAction<boolean>>;
};

const Sidebar = ({ setSidebar }: Props) => {
   return (
      <div className="fixed inset-0 bg-[#FAF7F0] z-50 flex flex-col w-full h-screen border ">
         <div
            className="flex justify-end p-6 cursor-pointer"
            onClick={() => {
               setSidebar(false);
            }}
         >
            <CloseIcon />
         </div>
         <div className="flex flex-col items-center justify-between mt-40 h-2/5 ">
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
