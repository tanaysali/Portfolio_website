import SingleSkill from "./SingleSkill";
import { PiMicrosoftExcelLogo } from "react-icons/pi";
import { BsFiletypeSql } from "react-icons/bs";
import { FaPython } from "react-icons/fa";
import { MdOutlineQueryStats } from "react-icons/md";
import { LuBrainCircuit } from "react-icons/lu";
import { BsFillFileEarmarkBarGraphFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { VscAzure } from "react-icons/vsc";
import { BsRobot } from "react-icons/bs";
import { fadeIn } from "../../framerMotion/variants";

const skills = [
  {
    skill: "Excel",
    icon: PiMicrosoftExcelLogo,
  },
  {
    skill: "Statistics",
    icon: MdOutlineQueryStats,
  },
  {
    skill: "SQL",
    icon: BsFiletypeSql,
  },
  {
    skill: "Python",
    icon: FaPython,
  },
  {
    skill: "Power_BI",
    icon: BsFillFileEarmarkBarGraphFill,
  },
  {
    skill: "AI_Tools",
    icon: BsRobot,
  },
  {
    skill: "ML",
    icon: LuBrainCircuit,
  },
  {
    skill: "Azure",
    icon: VscAzure,
  },
];

const AllSkills = () => {
  return (
    <div>
      <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
        {skills.map((item, index) => {
          return (
            <motion.div
              variants={fadeIn("up", `0.${index}`)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
              key={index}
            >
              <SingleSkill
                key={index}
                text={item.skill}
                imgSvg={<item.icon />}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AllSkills;
