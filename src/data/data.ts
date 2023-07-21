import { InstructionDatatype, BenefitDataTypes } from "../types/types";
import images1 from "../images/1.png";
import images2 from "../images/2.png";
import images3 from "../images/3.png";
import images4 from "../images/4.png";
import varimg from "../images/var.png";
import robot from "../images/robot.png";
import study from "../images/study.png";
import universe from "../images/universe.png";

export const InstructionData: InstructionDatatype[] = [
  { image: images1, text: "Sign your child up on Tioo " },
  {
    image: images2,
    text: "Get access to school curriculum and co-curriculum contents ",
  },
  { image: images3, text: "Choose a subject and start learning!" },
  {
    image: images4,
    text: "Enjoy gamified lesson slides and real-time  feedback!",
  },
];

export const BenefitData: BenefitDataTypes[] = [
  {
    h1: "Why Tioo?",
    h2: "Globally Competitive",
    p1: "With Tioo, we take your child’s grades and productivity to a next level",
    p2: "Our platform allows students access to carefully curated contents by Licensed educators and diverse curriculum which equips students with the necessary skills, knowledge, and mindset to thrive in an interconnected and rapidly changing global landscape. It prepares them to be active participants, responsible global citizens, and contributors to a globalized society.",
    img: universe,
    rightrender: true,
  },
  {
    h1: "Immersive and Gamified",
    h2: "",
    p1: "Our self-learning platform allows students access their lessons, quizzes and school work in an immersive and interactive format which makes their learning less traditional and more fun & engaging.",
    p2: "This is one of the best ways to keep your child learning and learning",
    img: varimg,
    rightrender: false,
  },
  {
    h1: "Real-Time Feedback",
    h2: "",
    p1: "Our AI provides instant and real-time feedback to children as they learn, helping them in areas they encounter challenges. Our AI tutor can help students solve maths problems, Which makes learning seamless and easy!",
    p2: "Try Tioo today!",
    img: robot,
    rightrender: true,
  },
  {
    h1: "Self-Learning",
    h2: "",
    p1: "The platform's AI capabilities enable it to continuously learn and improve over time, ensuring that the content and recommendations remain up to date and relevant.",
    p2: " This self-learning aspect allows children and teenagers to take control of their education, exploring topics of interest and advancing at their own pace, while still receiving guidance and support from the AI system.",
    img: study,
    rightrender: false,
  },
];
