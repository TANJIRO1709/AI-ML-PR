import Image from "next/image";
import {FloatingNavDemo} from "../components/main";
import {BackgroundBoxesDemo} from "../components/body";
import {HoverEffect} from "../components/ui/card-hover-effect";
import {LampDemo} from "../components/ai";
import {InfiniteMovingCardsDemo} from "../components/review";
import { AppleCardsCarouselDemo} from "../components/text";
import Footer from "@/components/footer";
export default function Home() {
  return (
    <main className="">
      <FloatingNavDemo/>
      <BackgroundBoxesDemo/>
      <HoverEffect items={[
        { title: "Analog Electronics", description: "Analog Electronics in the 3rd semester of B.Tech covers the principles of electronic circuits handling continuous signals. It includes topics like diodes, transistors (BJT, MOSFET), amplifiers (small-signal, power, feedback), and oscillators (sinusoidal and non-sinusoidal). Operational amplifiers (op-amps) are explored with configurations like inverting, non-inverting, and differential amplifiers. The course also introduces filters, rectifiers, voltage regulators, and power supplies. Emphasis is placed on circuit design, analysis, and practical applications, often supported by simulation tools.", link: "https://example.com/1" },
        { title: "Signal and System", description: "Signals and Systems, studied in the 3rd semester of B.Tech, explores the representation, analysis, and behavior of signals and systems. It covers signal types (continuous and discrete), system properties (linearity, time-invariance, causality), and transformations like Fourier, Laplace, and Z-transforms. Topics include convolution, sampling, filtering, and the study of systems in time and frequency domains. The course forms the foundation for understanding communication systems, control systems, and signal processing.", link: "https://example.com/2" },
        { title: "Probability and Statistics", description: "Probability and Statistics, studied in the 3rd semester of B.Tech, focuses on mathematical tools for analyzing uncertainty and data. Key topics include probability concepts, random variables, probability distributions, expectation, and variance. It covers statistical methods like hypothesis testing, regression, correlation, and analysis of variance (ANOVA). Applications include data analysis, decision-making, and modeling real-world systems under uncertainty.", link: "https://example.com/3" },
        { title: "HS ELECTIVE", description: "The HS Elective course in the 3rd semester of B.Tech focuses on humanities and social sciences, offering insights into societal, cultural, and ethical dimensions. Topics vary by elective and may include subjects like economics, psychology, philosophy, or communication skills. The course aims to enhance critical thinking, broaden perspectives, and develop interpersonal and analytical skills essential for engineers in a global context.", link: "https://example.com/1" },
        { title: "AI ML", description: "AI and ML, studied in the 3rd semester of B.Tech, introduces the fundamentals of artificial intelligence and machine learning. Key topics include supervised and unsupervised learning, regression, classification, clustering, and neural networks. The course covers algorithms like decision trees, SVMs, and k-means, along with basics of deep learning. Emphasis is placed on applications in data analysis, prediction, and automation, using tools like Python and libraries such as TensorFlow or Scikit-learn.", link: "https://example.com/2" },
        { title: "VALUE ADDED COURSE", description: "The Value-Added Course in the 3rd semester of B.Tech provides specialized knowledge or skills beyond the regular curriculum. Topics vary widely, including areas like coding, data science, IoT, robotics, or soft skills. These courses are designed to enhance employability, industry readiness, and technical expertise, offering practical insights and hands-on experience in emerging fields.", link: "https://example.com/3" }
      ]}/>
      <LampDemo/>
      < AppleCardsCarouselDemo/>
      <Footer/>
    </main>
  );
}
