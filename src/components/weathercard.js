import ProjectCard from "./projectcard";

export default function Weathercard() {
  return (
<ProjectCard
  icon="https://cdn-icons-png.flaticon.com/512/1163/1163624.png"
  iconAlt="weather icon"
  title="Weather Application"
  description="This application shows weather parameters like temperature, description, wind speed, humidity, max and min temperatures, and pressure when a city is searched."
  techStack={["React", "API", "CSS", "JavaScript"]}
  hashtags={["frontend", "weather", "api", "react"]}
  techIcons={["⚛️", "🌧️", "🌊"]}
  link="https://github.com/srisruthipopuri25/weatherapp"
/>
  );
}


