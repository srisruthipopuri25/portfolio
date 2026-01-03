import ProjectCard from "./projectcard";

export default function PortfolioCard() {
  return (
    <ProjectCard
      icon="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
      iconAlt="portfolio icon"
      title="Portfolio Website"
      subtitle="Professional Summary"
      description="A responsive portfolio showcasing my skills, projects, and professional experience. Designed to present my work clearly and help recruiters quickly understand my technical capabilities."
      techStack={["React", "Next.js", "Tailwind CSS", "JavaScript"]}
      hashtags={["portfolio", "frontend", "react", "web"]}
      techIcons={["👩‍💻", "💼", "🌐"]}
      link="https://github.com/srisruthipopuri25/portfolio"
    />
  );
}
