import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Contact = () => {
   return (
      <div id="contact" className="h-max">
         <div className="flex flex-col items-center max-lg:my-24">
            <h4 className="text-[#b1b1b1] text-2xl my-24">CONTACT</h4>
            <div className="flex items-center w-full pb-16 justify-evenly">
               <div className="text-xl">
                  FEEL FREE TO CONTACT ME!
                  <div className="text-[#515151]">Don't be shy 👉🏻</div>
               </div>

               <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-2">
                     <EmailIcon className="text-[#B1B1B1]" />
                     <span>basakcengiiz384@gmail.com</span>
                  </div>

                  <div className="flex items-center gap-2">
                     <LinkedInIcon className="text-blue-600" />
                     <a target="_blank" href="https://www.linkedin.com/in/başak-cengiz-056601173/">
                        Başak Cengiz
                     </a>
                  </div>
                  <div className="flex items-center gap-2">
                     <GitHubIcon className="" />
                     <a target="_blank" href="https://github.com/basakcengiz">
                        basakcengiz
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Contact;
