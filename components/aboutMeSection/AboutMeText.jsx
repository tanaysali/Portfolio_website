import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        I’m Tanay, I’m a curious data analyst and AI expert who thrives on turning data into discovery.
        Whether I’m decoding trends, building intelligent models, or visualizing insights, 
        I approach every challenge with a mix of creativity and precision. 
        I love asking the “why” behind the numbers — and using machine learning to find the answer. 
        For me, data is more than information; it’s a story waiting to be told. 
        Driven by curiosity, powered by code — 
        I’m here to turn raw data into real impact.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
