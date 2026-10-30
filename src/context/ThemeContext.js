import React, { createContext, useContext, useState, useEffect } from "react";

const themes = {
  default: { id: "default", name: "Default", label: "Cyan Blue", color: "#06b6d4" },
  netflix: { id: "netflix", name: "Netflix", label: "Netflix Red", color: "#e50914" },
  facebook: { id: "facebook", name: "Facebook", label: "Facebook Blue", color: "#1877f2" },
  amazon: { id: "amazon", name: "Amazon", label: "Amazon Orange", color: "#ff9900" },
  spotify: { id: "spotify", name: "Spotify", label: "Spotify Green", color: "#1db954" },
};

// Brand-specific UI configuration for immersive experiences
const brandConfig = {
  default: {
    logo: null,
    heroGreeting: "Hello, I'm",
    heroSubtitle: "Aspiring Software Engineer passionate about building meaningful applications, solving real-world problems, and turning ideas into reality.",
    sections: {
      about: "About Me",
      experience: "Work Experience",
      skills: "Technical Skills",
      portfolio: "Portfolio",
      education: "Education",
      testimonials: "Testimonials",
      contact: "Get In Touch",
    },

    sectionSubtitles: {
      about: null,
      experience: "My professional journey in software development",
      skills: "Technologies and tools I work with professionally",
      portfolio: "Check out some of my recent work and projects",
      education: "My academic background",
      testimonials: "What colleagues and managers say about working with me",
      contact: "I'd love to hear from you! Let's connect and discuss opportunities.",
    },
    cardStyle: "default",
    navBrand: "Ansh Gandharve",
  },
  netflix: {
    logo: "netflix",
    heroGreeting: "NOW STREAMING",
    heroSubtitle: "Currently in my MCA: The Making of a Software Engineer. Press play on his story.",
    sections: {
      about: "The Storyline",
      experience: "Seasons & Episodes",
      skills: "Genre Tags",
      portfolio: "My Originals",
      education: "Origin Story",
      testimonials: "Audience Reviews",
      contact: "Cast & Crew Contact",
    },
    sectionSubtitles: {
      about: null,
      experience: "Each company is a season, every role a new episode",
      skills: "The tech stack powering every production",
      portfolio: "Trending now on my profile",
      education: "Where the story began",
      testimonials: "What the critics are saying",
      contact: "Ready to collaborate? Let's write the next episode.",
    },
    cardStyle: "netflix",
    navBrand: "ANSHFLIX",
  },
  facebook: {
    logo: "facebook",
    heroGreeting: "PROFILE",
    heroSubtitle: "Aspiring Full Stack Developer. Lives in New Delhi, India. Studies at Guru Gobind Singh Indraprastha University. Working on My Profile… Becoming a Software Engineer.",
    sections: {
      about: "Intro",
      experience: "Work History",
      skills: "Skills & Endorsements",
      portfolio: "Featured Posts",
      education: "Education",
      testimonials: "Recommendations",
      contact: "Send Message",
    },
    sectionSubtitles: {
      about: null,
      experience: "See all positions",
      skills: "Endorsed by colleagues and peers",
      portfolio: "Shared projects and accomplishments",
      education: "Schools and degrees",
      testimonials: "What connections are saying",
      contact: "Drop a message, let's connect!",
    },
    cardStyle: "facebook",
    navBrand: "anshbook",
  },
  amazon: {
    logo: "amazon",
    heroGreeting: "BEST SELLER",
    heroSubtitle: "Top-rated Aspiring Full Stack Developer with eager to experience new challenges. Prime delivery on scalable applications. Free returns on bugs (because there aren't many).",
    sections: {
      about: "Product Description",
      experience: "Work History & Specifications",
      skills: "Technical Specifications",
      portfolio: "Customers Also Viewed",
      education: "Certification & Education",
      testimonials: "Customer Reviews",
      contact: "Contact Seller",
    },
    sectionSubtitles: {
      about: null,
      experience: "Verified professional history",
      skills: "Full specification sheet",
      portfolio: "Frequently bought together with these projects",
      education: "Verified credentials",
      testimonials: "4.9 out of 5 stars",
      contact: "Have a question? Ask the seller directly.",
    },
    cardStyle: "amazon",
    navBrand: "anshzon",
  },
  spotify: {
    logo: "spotify",
    heroGreeting: "NOW PLAYING",
    heroSubtitle: "The soundtrack of an aspiring software engineer. Streaming live from New Delhi. Hit shuffle on the skills or play the greatest hits.",
    sections: {
      about: "Artist Bio",
      experience: "Discography",
      skills: "Top Tracks",
      portfolio: "Playlists",
      education: "Early Years",
      testimonials: "Fan Reviews",
      contact: "Book This Artist",
    },
    sectionSubtitles: {
      about: null,
      experience: "Albums released across 4 studios",
      skills: "Most played technologies on repeat",
      portfolio: "Curated collections of my best work",
      education: "Where the first notes were played",
      testimonials: "What the fans are saying",
      contact: "Ready to collaborate? Let's make some noise.",
    },
    cardStyle: "spotify",
    navBrand: "Anshify",
  },
};

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // Check for saved theme from BrandSelector or previous selections
    const savedTheme = localStorage.getItem("portfolioTheme") || localStorage.getItem("portfolio-theme");
    return savedTheme && themes[savedTheme] ? savedTheme : "default";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("portfolioTheme", theme);
    localStorage.setItem("portfolio-theme", theme); // Keep for backwards compatibility
  }, [theme]);

  const brand = brandConfig[theme];

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themes, brand }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
