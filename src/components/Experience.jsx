import React, { useState } from "react";
import { MdWork } from "react-icons/md";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const PREVIEW_COUNT = 2;

const ExperienceCard = ({ id, company, role, duration, location, achievements, tech, label }) => {
  const [expanded, setExpanded] = useState(false);
  const visibleAchievements = expanded ? achievements : achievements.slice(0, PREVIEW_COUNT);
  const hasMore = achievements.length > PREVIEW_COUNT;

  return (
    <div className="bg-t-card rounded-lg shadow-lg p-4 sm:p-6 border border-t-border hover:border-t-primary transition-all duration-300">
      {label && (
        <div className="mb-3">
          <span className="text-xs font-bold tracking-wider text-t-primary bg-t-primary/10 px-3 py-1 rounded-full uppercase">
            {label}
          </span>
        </div>
      )}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
        <div>
          <h3 className="text-lg sm:text-2xl font-bold text-t-text">{company}</h3>
          <p className="text-base sm:text-xl text-t-accent mt-1">{role}</p>
        </div>
        <div className="mt-2 sm:mt-0 sm:text-right">
          <p className="text-sm text-t-text-secondary">{duration}</p>
          <p className="text-sm text-t-text-muted">{location}</p>
        </div>
      </div>

      <ul className="mt-4 space-y-2">
        {visibleAchievements.map((achievement, i) => (
          <li key={i} className="text-t-text-secondary text-sm flex">
            <span className="text-t-accent mr-2">▹</span>
            <span>{achievement}</span>
          </li>
        ))}
      </ul>

      {hasMore && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-3 flex items-center gap-1.5 text-t-primary text-sm font-medium hover:text-t-accent transition-colors cursor-pointer"
        >
          {expanded ? (
            <><FaChevronUp size={12} /> Show less</>
          ) : (
            <><FaChevronDown size={12} /> Read more ({achievements.length - PREVIEW_COUNT} more)</>
          )}
        </button>
      )}

      <div className={`mt-4 flex flex-wrap gap-2 ${!expanded && hasMore ? "opacity-80" : ""}`}>
        {tech.map((technology, i) => (
          <span key={i}
            className="px-3 py-1 text-xs bg-t-base text-t-accent rounded-full border border-t-border-accent">
            {technology}
          </span>
        ))}
      </div>
    </div>
  );
};

const Experience = () => {
  const { theme, brand } = useTheme();

  // Brand-specific labels for each experience entry
  const getExperienceLabel = (index) => {
    const labels = {
      netflix: [`Season ${4 - index}`, "Now Streaming", "6 Episodes", "7 Episodes", "6 Episodes", "6 Episodes"],
      spotify: [`Album ${4 - index}`, "Latest Release", `${6} Tracks`, `${6} Tracks`, `${6} Tracks`, `${7} Tracks`],
      amazon: [`#${index + 1} Best Seller`, "Currently Available", "Verified Purchase", "Verified Purchase", "Verified Purchase", "Verified Purchase"],
      facebook: [null, null, null, null],
      default: [null, null, null, null],
    };
    return labels[theme]?.[index] || null;
  };
  const experiences = [
    
  ];

  return (
    <div
      name="experience"
      className="w-full text-t-text"
      style={{ background: "linear-gradient(to bottom, var(--c-bg-base), var(--c-bg-alt))" }}
    >
      <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-20 flex flex-col justify-center">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-t-primary">
            {brand.sections.experience}
          </p>
          <p className="py-6 text-t-text-secondary">{brand.sectionSubtitles.experience}</p>
        </div>

        <div className="relative border-l-2 border-t-border ml-4 sm:ml-8">
          {experiences.map(({ id, company, role, duration, location, achievements, tech }, index) => (
            <div key={id} className="mb-10 ml-4 sm:ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 bg-t-primary rounded-full -left-[13px] sm:-left-4 ring-4 ring-t-ring">
                <MdWork className="text-white text-xs sm:text-base" />
              </span>

              <ExperienceCard
                key={id}
                id={id}
                company={company}
                role={role}
                duration={duration}
                location={location}
                achievements={achievements}
                tech={tech}
                label={getExperienceLabel(index)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
