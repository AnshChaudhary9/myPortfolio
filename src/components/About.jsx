import React from "react";
import { FaDownload } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const About = () => {
  const { brand } = useTheme();
  return (
    <div
      name="about"
      className="w-full text-t-text"
      style={{ background: "linear-gradient(to bottom, var(--c-bg-alt), var(--c-bg-base))" }}
    >
      <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-20 flex flex-col justify-center">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-t-primary">
            {brand.sections.about}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-xl leading-relaxed text-t-text-secondary">
              I'm a passionate software developer who enjoys building practical applications and solving real-world problems through code. After completing my <span className="text-t-text font-semibold">BCA</span>, I'm currently pursuing my <span className="text-t-accent font-semibold">Master of Computer Applications (MCA)</span> to deepen my knowledge of software development.
            </p>
            
            <p className="text-lg leading-relaxed text-t-text-secondary mt-4">
              My journey into software development has led me to work with technologies such as Java, JavaScript, React.js, Node.js, Express.js, Spring Boot, and MongoDB. I enjoy developing full-stack applications, designing RESTful APIs, implementing secure authentication, and turning ideas into functional, user-friendly products.
            </p>

            <p className="text-lg leading-relaxed text-t-text-secondary mt-4">
              I'm currently looking for opportunities to grow as a software developer, contribute to real products, and keep improving through hands-on projects.</p>

          </div>

          <div className="space-y-6">
            <div className="bg-t-card rounded-lg p-6 border border-t-border hover:border-t-primary transition-all duration-300">
              <h3 className="text-xl font-bold text-t-accent mb-3">My Philosophy</h3>
              <p className="text-t-text-secondary italic">
                "I believe every problem is a puzzle waiting to be understood, and every line of code is a step toward turning imagination into reality."
              </p>
            </div>

            <div className="bg-t-card rounded-lg p-6 border border-t-border hover:border-t-primary transition-all duration-300">
              <h3 className="text-xl font-bold text-t-accent mb-3">What I Bring</h3>
              <ul className="space-y-2 text-t-text-secondary">
                <li className="flex items-start"><span className="text-t-accent mr-2">▹</span><span>Turning ideas into full-stack applications that solve real problems.</span></li>
                <li className="flex items-start"><span className="text-t-accent mr-2">▹</span><span>Connecting intuitive frontend experiences with reliable backend systems.</span></li>
                <li className="flex items-start"><span className="text-t-accent mr-2">▹</span><span>Learning by experimenting, building projects, and tackling unfamiliar challenges.</span></li>
                <li className="flex items-start"><span className="text-t-accent mr-2">▹</span><span>Continuous learner, always exploring new technologies</span></li>
              </ul>
            </div>

            <div className="flex justify-center">
              <a href={`${process.env.PUBLIC_URL}/resume.pdf`}
                download="Ansh_Gandharve_Resume.pdf"
                className="flex items-center gap-2 px-6 py-3 bg-t-primary text-white rounded-lg hover:scale-105 transition-transform duration-200 font-semibold">
                <FaDownload size={20} />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
