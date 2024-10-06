import chat from '../assets/chat.png';
import movie from '../assets/movie.png';
import shopoholic from '../assets/shopoholic.jpeg';
import carentify from '../assets/carentify.jpeg';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

const Projects = () => {
  return (
    <div id="projects" className="h-max md:h-screen flex flex-col justify-center items-center">
      <h4 className="text-[#b1b1b1] text-2xl my-24 ">PROJECTS</h4>

      <div className="flex flex-wrap items-center justify-center gap-6">
        <div className="h-full md:h-1/2 lg:h-full w-2/3 sm:w-1/2 md:w-1/3 lg:w-1/5 border-[#515151] border-2 rounded-lg flex flex-col items-center justify-between p-4 gap-4">
          <img src={chat} className="rounded-md"></img>
          <div className="text-[#515151] text-sm text-center">
            AI Chatter is a real-time chat application that uses the OpenAI API to provide dynamic AI-powered responses.
          </div>
          <div className="">
            <a href="https://github.com/basakcengiz/AI-Chatter/tree/main/ai-chatter" target="_blank" rel="noopener noreferrer">
              <GitHubIcon className="!h-5 !w-5 mr-4" />
            </a>
            <a href="https://ai-chatter-ten.vercel.app/" target="_blank" rel="noopener noreferrer">
              <LaunchIcon className="!h-5 !w-5" />
            </a>
          </div>
        </div>

        <div className="h-full md:h-1/2 lg:h-full w-2/3 sm:w-1/2 md:w-1/3 lg:w-1/5 border-[#515151] border-2 rounded-lg flex flex-col items-center justify-between p-4 gap-4">
          <img src={movie} className="rounded-md"></img>
          <div className="text-[#515151] text-sm text-center">
            Movie search app lets users find movies by title, year, and type using the OMDB API, displaying results in a paginated table with detailed movie
            info.
          </div>
          <div className="">
            <a href="https://github.com/basakcengiz/movie-app/tree/main/movie-app" target="_blank" rel="noopener noreferrer">
              <GitHubIcon className="!h-5 !w-5 mr-4" />
            </a>
            <a href="https://movie-app-seven-iota.vercel.app/" target="_blank" rel="noopener noreferrer">
              <LaunchIcon className="!h-5 !w-5" />
            </a>
          </div>
        </div>

        <div className="h-full md:h-1/2 lg:h-full w-2/3 sm:w-1/2 md:w-1/3 lg:w-1/5 border-[#515151] border-2 rounded-lg flex flex-col items-center justify-between p-4 gap-4">
          <img src={carentify} className="rounded-md"></img>
          <div className="text-[#515151] text-sm text-center">
            (ONGOING) Carentify, a modern car rental site built with React, TypeScript, GraphQL, MUI, and TailwindCSS, offering seamless booking and vehicle
            selection.
          </div>
          <div className="">
            <a href="https://github.com/basakcengiz/AI-Chatter/tree/main/ai-chatter" target="_blank" rel="noopener noreferrer">
              <GitHubIcon className="!h-5 !w-5" />
            </a>
            {/* <a href="" target="_blank" rel="noopener noreferrer">
              <LaunchIcon className="!h-5 !w-5" />
            </a> */}
          </div>
        </div>

        <div className="h-full md:h-1/2 lg:h-full w-2/3 sm:w-1/2 md:w-1/3 lg:w-1/5 border-[#515151] border-2 rounded-lg flex flex-col items-center justify-between p-4 gap-4">
          <img src={shopoholic} className="rounded-md"></img>
          <div className="text-[#515151] text-sm text-center">
            (My first project) Shopoholic, e-commerce app lets users browse, search with features like filtering sorting, and viewing product details.
          </div>
          <div className="">
            <a href="https://github.com/basakcengiz/E-Commerce-App/tree/main" target="_blank" rel="noopener noreferrer">
              <GitHubIcon className="!h-5 !w-5 " />
            </a>
            {/*   <a href="" target="_blank" rel="noopener noreferrer">
              <LaunchIcon className="!h-5 !w-5" />
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
