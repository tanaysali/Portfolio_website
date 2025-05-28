import { PiMicrosoftExcelLogo } from "react-icons/pi";
import { BsFiletypeSql } from "react-icons/bs";
import { FaPython } from "react-icons/fa";
import { MdOutlineQueryStats } from "react-icons/md";
import { LuBrainCircuit } from "react-icons/lu";
import { BsFillFileEarmarkBarGraphFill } from "react-icons/bs";
import { VscAzure } from "react-icons/vsc";
import { BsRobot } from "react-icons/bs";
import { motion } from "framer-motion";
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

const AllSkillsSM = () => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12">
      {skills.map((item, index) => {
        return (
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            key={index}
            className="flex flex-col items-center"
          >
            <item.icon className="text-7xl text-orange" />
            <p className="text-center mt-4">{item.skill}</p>
          </motion.div>
        );
      })}
    </div>
  );
};

export default AllSkillsSM;
