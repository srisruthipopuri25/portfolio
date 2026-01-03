import ProjectCard from "./projectcard";

export default function EcommerceCard() {
  return (
    <ProjectCard
      icon="https://cdn-icons-png.flaticon.com/512/891/891462.png"
      iconAlt="ecommerce icon"
      title="E-Commerce Application"
      description="A full-featured e-commerce web application inspired by Nykaa. Users can browse products, add items to the cart, place orders, and track purchases."
      techStack={["React", "Next.js", "MongoDB", "Tailwind CSS"]}
      hashtags={["ecommerce", "fullstack", "shopping", "react"]}
      techIcons={["🛒", "🛍️", "💳"]}
      link="https://e-commerce-nykaa.vercel.app/"
    />
  );
}
