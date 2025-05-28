import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Project-Intern",
    company: "IBAB",
    date: "Jan-2025 - Apr-2025",
    responsibilities: [
      "Collaborate with research teams to analyze complex biological datasets and provide insights",
      "Develop and maintain SQL databases to manage genomic and proteomic data efficiently.",
      "Create interactive dashboards using Power BI to visualize research data.",
    ],
  },
  {
    job: "Project-Intern",
    company: "SillicoScientia",
    date: "Jun-2024 - Sep-2024",
    responsibilities: [
      "Developed and tested ML algorithms for disease prediction and medicine recommendation using Python and Scikit-learn.",
      "Achieving an 90% improvement in accuracy.",
      ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
