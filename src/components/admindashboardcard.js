import ProjectCard from "./projectcard";

export default function AdminDashboardCard() {
  return (
    <ProjectCard
      icon="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
      iconAlt="stock dashboard icon"
      title="Admin Dashboard"
      subtitle="Stock Market"
      description="A modern admin dashboard built to track and visualize stock market data using interactive charts and tables."
      techStack={["React", "Charts.js", "API Integration", "CSS"]}
      hashtags={["dashboard", "analytics", "stocks", "frontend"]}
      techIcons={["📈", "📊", "💹"]}
      link="https://github.com/srisruthipopuri25/StockMarketDashboard"
    />
  );
}
