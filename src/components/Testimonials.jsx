import React from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const Testimonials = () => {
  const { brand } = useTheme();
  const testimonials = [
    {
      id: 1,
      name: "Faculty Mentor",
      role: "FM at GGSIPU",
      image: "https://ui-avatars.com/api/?name=Faculty+Mentor&background=06b6d4&color=fff&size=200",
      rating: 5,
      text: "Ansh demonstrated exceptional problem-solving abilities during the AI Innovators competition. He worked collaboratively with his team to address a challenging real-world problem and contributed meaningfully to developing an innovative solution. His ability to think critically, collaborate, and turn ideas into practical outcomes is commendable.",
    },
    {
      id: 2,
      name: "Assistant Professor",
      role: "AP at GGSIPU",
      image: "https://ui-avatars.com/api/?name=Assistant+Professor&background=3b82f6&color=fff&size=200",
      rating: 5,
      text: "Ansh has consistently maintained an excellent academic record, achieving a CGPA of over 9.0. His dedication to academics, disciplined approach to learning, and strong understanding of technical concepts reflect his commitment to excellence. He has shown a commendable balance between academic performance and practical learning!",
    },
    {
      id: 3,
      name: "Project Guide",
      role: "Project Guide at GGSIPU",
      image: "https://ui-avatars.com/api/?name=Project+Guide&background=8b5cf6&color=fff&size=200",
      rating: 5,
      text: "Ansh is a curious and enthusiastic learner who approaches technical challenges with a positive mindset. His willingness to explore new technologies, contribute to team projects, and continuously improve his skills makes him a promising aspiring software developer. I appreciate his dedication and eagerness to learn.",
    },
    {
      id: 4,
      name: "Assistant Professor",
      role: "AP at GGSIPU",
      image: "https://ui-avatars.com/api/?name=Assistant+ProfessorM&background=10b981&color=fff&size=200",
      rating: 5,
      text: "Ansh has demonstrated enthusiasm for learning and a keen interest in software development. His willingness to explore new technologies and work on practical projects reflects his commitment to improving his technical skills!",
    },
  ];

  return (
    <div
      name="testimonials"
      className="w-full text-t-text"
      style={{ background: "linear-gradient(to bottom, var(--c-bg-base), var(--c-bg-alt))" }}
    >
      <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-20 flex flex-col justify-center">
        <div className="pb-8 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-t-primary">
            {brand.sections.testimonials}
          </p>
          <p className="py-6 text-t-text-secondary">{brand.sectionSubtitles.testimonials}</p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {testimonials.map(({ id, name, role, image, rating, text }) => (
            <div key={id}
              className="bg-t-card rounded-lg p-6 border border-t-border hover:border-t-primary transition-all duration-300 relative">
              <div className="absolute top-4 right-4 text-t-border">
                <FaQuoteLeft size={40} />
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(rating)].map((_, index) => (
                  <FaStar key={index} className="text-yellow-400" size={20} />
                ))}
              </div>

              <p className="text-t-text-secondary italic mb-6 relative z-10">"{text}"</p>

              <div className="flex items-center">
                <img src={image} alt={name}
                  className="w-14 h-14 rounded-full mr-4 border-2 border-t-primary" />
                <div>
                  <p className="text-t-text font-semibold">{name}</p>
                  <p className="text-t-text-muted text-sm">{role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-t-text-secondary mb-4">Want to see more recommendations?</p>
          <a href="https://www.linkedin.com/in/ansh-gandharve-700048303/" target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-t-primary text-white rounded-lg hover:scale-105 transition-transform duration-200">
            View LinkedIn Recommendations
          </a>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
