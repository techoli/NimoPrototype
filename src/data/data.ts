import {
  InstructionDatatype,
  BenefitDataTypes,
  GradeDataTypes,
  NavDataTypes,
} from "../types/types";
import images1 from "../images/1.png";
import images2 from "../images/2.png";
import images3 from "../images/3.png";
import images4 from "../images/4.png";
import varimg from "../images/var.png";
import robot from "../images/robot.png";
import study from "../images/study.png";
import universe from "../images/universe.png";
import grade1 from "../images/grade1.png";
import grade2 from "../images/grade2.png";
import grade3 from "../images/grade3.png";
import t1 from "../pages/sections/topics/image/t1.png";
import t2 from "../pages/sections/topics/image/t2.png";
import t3 from "../pages/sections/topics/image/t3.png";
import { url } from "inspector";

export const InstructionData: InstructionDatatype[] = [
  { id: 1, image: images1, text: "Sign your child up on Tioo " },
  {
    id: 2,
    image: images2,
    text: "Get access to school curriculum and co-curriculum contents ",
  },
  { id: 3, image: images3, text: "Choose a subject and start learning!" },
  {
    id: 4,
    image: images4,
    text: "Enjoy gamified lesson slides and real-time  feedback!",
  },
];

export const BenefitData: BenefitDataTypes[] = [
  {
    id: 1,
    h1: "Why Tioo?",
    h2: "Globally Competitive",
    p1: "With Tioo, we take your child’s grades and productivity to a next level",
    p2: "Our platform allows students access to carefully curated contents by Licensed educators and diverse curriculum which equips students with the necessary skills, knowledge, and mindset to thrive in an interconnected and rapidly changing global landscape. It prepares them to be active participants, responsible global citizens, and contributors to a globalized society.",
    img: universe,
    rightrender: true,
  },
  {
    id: 2,
    h1: "Immersive and Gamified",
    h2: "",
    p1: "Our self-learning platform allows students access their lessons, quizzes and school work in an immersive and interactive format which makes their learning less traditional and more fun & engaging.",
    p2: "This is one of the best ways to keep your child learning and learning",
    img: varimg,
    rightrender: false,
  },
  {
    id: 3,
    h1: "Real-Time Feedback",
    h2: "",
    p1: "Our AI provides instant and real-time feedback to children as they learn, helping them in areas they encounter challenges. Our AI tutor can help students solve maths problems, Which makes learning seamless and easy!",
    p2: "Try Tioo today!",
    img: robot,
    rightrender: true,
  },
  {
    id: 4,
    h1: "Self-Learning",
    h2: "",
    p1: "The platform's AI capabilities enable it to continuously learn and improve over time, ensuring that the content and recommendations remain up to date and relevant.",
    p2: " This self-learning aspect allows children and teenagers to take control of their education, exploring topics of interest and advancing at their own pace, while still receiving guidance and support from the AI system.",
    img: study,
    rightrender: false,
  },
];

export const GradeData: GradeDataTypes[] = [
  {
    id: 1,
    img: grade1,
    heading: "Nursery",
    text: "Immersive lessons in school curriculum and extra curriculum to provide the ideal academic start.",
  },
  {
    id: 2,
    img: grade2,
    heading: "Primary",
    text: "Lessons in Mathematics, English, Basic Science, and Technology that are simple to understand to help your youngster solve problems like a pro.",
  },
  {
    id: 3,
    img: grade3,
    heading: "Secondary",
    text: "Learn challenging ideas through simplified lessons in Mathematics, English, Science, Arts, and Commercials.",
  },
];
export const TopicsData: GradeDataTypes[] = [
  {
    id: 1,
    img: t2,
    heading: "Get the App",
    text: "And enjoy access to diverse curriculum and a seamless learning flow",
  },
  {
    id: 2,
    img: t1,
    heading: "Own a smart school",
    text: "Educational institutions can own a smart school by uploading their curriculum on our platform and giving access to students. ",
  },
  {
    id: 3,
    img: t3,
    heading: "Become an educator",
    text: "With the help of AI, you can create and design lessons with our vast resources and earn passive income when you publish them on our marketplace.",
  },
];

export const NavData: NavDataTypes[] = [
  {
    id: 1,
    text: "Home",
    url: "",
  },
  {
    id: 2,
    text: "About",
    url: "",
  },
  {
    id: 3,
    text: "Schools",
    url: "",
  },
  {
    id: 4,
    text: "Educators",
    url: "",
  },
  {
    id: 5,
    text: "Flipped classroom",
    url: "",
  },
  {
    id: 6,
    text: "More",
    url: "",
  },
];
