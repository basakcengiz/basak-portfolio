import bc from '../assets/bc.jpg';
import html from '../assets/html.svg';
import css from '../assets/css.svg';
import js from '../assets/js.svg';
import ts from '../assets/typescript.svg';
import react from '../assets/react.svg';
import redux from '../assets/redux.svg';
import tailwind from '../assets/tailwind.svg';
import yarn from '../assets/yarn.png';
import graphql from '../assets/graphql.png';

const Home = () => {
   return (
      <div className="h-screen ">
         <div className="flex flex-col items-center gap-2 mt-20 justify-evenly sm:flex-row h-3/5">
            <div>
               <img src={bc} alt="bc" className="rounded-full w-56 h-72 border-[#b1b1b1] border-2 md:hover:scale-125 duration-300 ease-in-out" />
            </div>
            <div className="flex flex-col items-center gap-4">
               <span className="font-bold text-3xl rounded-lg p-4 text-white bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
                  HI, I AM BASAK CENGIZ! 👋🏻
               </span>
               <span>Frontend Developer 💻</span>
               <span className="border-b-2 border-[#764ABC]">Tech Stack</span>
               <div>
                  <div className="flex flex-wrap justify-center gap-2">
                     <img src={html} alt="html" className="w-10 h-10" />
                     <img src={css} alt="css" className="w-10 h-10" />
                     <img src={js} alt="js" className="w-10 h-10" />
                     <img src={ts} alt="ts" className="w-10 h-10" />
                     <img src={react} alt="react" className="w-10 h-10" />
                     <img src={redux} alt="redux" className="w-10 h-10" />
                     <img src={tailwind} alt="tailwind" className="w-10 h-10" />
                     <img src={graphql} alt="graphql" className="w-10 h-10" />
                     <img src={yarn} alt="yarn" className="w-10 h-10" />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Home;
