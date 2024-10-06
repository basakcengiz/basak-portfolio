import coding from '../assets/coding.jpg';
const About = () => {
  return (
    <div id="about" className="h-max">
      <div className="flex flex-col items-center justify-evenly md:flex-row gap-10">
        <div className="w-2/3 sm:w-1/2 lg:w-1/3 ">
          <img src={coding} alt="coding" className="w-full rounded-2xl" />
        </div>
        <div className="w-2/3 md:w-1/3 flex flex-col items-center">
          <h4 className="text-[#b1b1b1] text-2xl mb-4">ABOUT ME</h4>
          <div className="text-md text-center">
            <p className="mb-4">
              Hi, I'm Başak Cengiz, a self-motivated Front End Developer with a year of experience. I graduated from the Department of Electrical and
              Electronics Engineering at Akdeniz University in 2022 with 3.18 CGPA.
            </p>
            <p className="mb-4">
              I specialize in modern web technologies such as JavaScript, TypeScript, React.js, GraphQL, Tailwind CSS, and Material-UI. My goal is to create
              seamless and efficient user experiences by blending clean, responsive design with cutting-edge functionality.
            </p>
            <p className="mb-4">Currently, I am expanding my knowledge by learning Next.js and working on side projects to refine my skills.</p>
            <p>
              Outside of coding, I have a variety of hobbies that keep me energized and inspired. I enjoy skiing, playing volleyball, and playing electric
              guitar. I’m also a fan of TV series and movies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
