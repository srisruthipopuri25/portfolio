import ProjectCard from "./projectcard";

export default function TaskManagementCard() {
  return (
    <ProjectCard
      icon="https://cdn-icons-png.flaticon.com/512/2921/2921222.png"
      iconAlt="task management icon"
      title="Task Management System"
      description="A full-stack task management system that allows users to create, track, and manage tasks efficiently. Built with a modern frontend and a robust backend to support scalable and organized workflows."
      techStack={["React", "FastAPI", "PostgreSQL", "Docker"]}
      hashtags={["fullstack", "tasks", "productivity", "crud"]}
      techIcons={["⚛️", "⚙️", "🗄️"]}
      link="https://github.com/srisruthipopuri25/taskmanagementsystem"
    />
  );
}
