import Image from "next/image";
import ProjectCard from "./project-card";
import dp from '@/app/images/kusheen-dp.jpg';
import { Github, Linkedin, Mail, FileText } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <div className="mb-6">
            <Image
              src={dp.src}
              width={300}
              height={300}
              style={{width: '300px', height: '300px  '}}
              alt="Kosheen Dhar's profile picture"
              className="rounded-full object-cover border-4 border-white shadow-lg mx-auto"
            />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Kusheen Dhar</h1>
          <p className="text-xl text-gray-600 font-light">Computer Science Student</p>
        </header>

        <section className="mb-12">
          <h2 className="text-2xl text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-gray-700">
            Hello! I'm a passionate computer science student at Nitte Meenakshi Institute of Technology (Bangalore).
            I'm enthusiastic about web development and always eager to learn new technologies.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl text-gray-900 mb-4">Skills</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Programming Languages: JavaScript, Python, C</li>
            <li>Web Technologies: HTML, CSS, React</li>
            <li>Database: SQL</li>
            <li>Tools: Git, VS Code</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl text-gray-900 mb-6">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProjectCard
              title="Countdown Timer"
              description="Developed a full-stack e-commerce platform using React, Node.js, and MongoDB. Implemented user authentication, product catalog, and payment integration."
              technologies={["React", "Node.js", "MongoDB", "Stripe"]}
              link="https://github.com/kusheen8/Frontend-Development-Project-1"
            />
            <ProjectCard
              title="Shoes Website"
              description="Created a machine learning model to predict stock prices using historical data. Utilized Python, pandas, and scikit-learn for data processing and model training."
              technologies={["Python", "pandas", "scikit-learn", "Matplotlib"]}
              link="https://github.com/kusheen8/CAMPUS-SHOES-WEBSITE"
            />
            <ProjectCard
              title="Animation Webpage"
              description="Built a cross-platform mobile app for task management using React Native. Implemented features like task creation, reminders, and cloud synchronization."
              technologies={["React Native", "Firebase", "Redux"]}
              link="https://github.com/kusheen8/animation"
            />
            <ProjectCard
              title="Portfolio Website"
              description="Designed and developed an interactive data visualization dashboard using D3.js and Vue.js. The dashboard displays complex datasets in an intuitive and visually appealing manner."
              technologies={["Vue.js", "D3.js", "CSS Grid", "REST API"]}
              link="https://github.com/kusheen8/portfolio-website"
            />
          </div>
        </section>

        <section>
          <h2 className="text-2xl text-gray-900 mb-4">
            Contact Me
          </h2>
          <div className="flex justify-center space-x-4">
            <a
              href="https://github.com/kusheen8"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900"
            >
              <Github className="w-8 h-8" />
            </a>
            <a
              href="https://www.linkedin.com/in/kusheen-dhar-129ab22b6/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900"
            >
              <Linkedin className="w-8 h-8" />
            </a>
            <a
              href="kusheendhar942@gmail.com"
              className="text-gray-700 hover:text-gray-900"
            >
              <Mail className="w-8 h-8" />
            </a>
            <a
              href="/your-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900"
            >
              <FileText className="w-8 h-8" />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
