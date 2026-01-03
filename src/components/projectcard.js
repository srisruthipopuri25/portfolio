export default function ProjectCard({
  icon,
  iconAlt,
  title,
  subtitle,
  description,
  techIcons,
  techStack,
  hashtags,
  link,
}) {
  return (
    <div
      className="relative bg-[#0b2545] text-white 
                 w-80 min-h-[460px]
                 rounded-2xl shadow-lg
                 flex flex-col items-center
                 px-6 pt-14 pb-6"
    >
      <div
        className="absolute top-0 left-1/2 
                   -translate-x-1/2 -translate-y-1/2
                   bg-white p-3 rounded-full shadow-md"
      >
        <img src={icon} alt={iconAlt} className="w-12 h-12" />
      </div>

      <h2 className="mt-4 text-xl font-bold text-center">
        {title}
      </h2>

      {subtitle && (
        <h3 className="text-lg font-semibold text-center">
          {subtitle}
        </h3>
      )}
      <p
        className="text-sm mt-4 text-gray-300 text-center
             h-[96px] overflow-hidden"
      >
        {description}
      </p>

      {techStack && (
        <div className="mt-4 text-sm text-gray-200 text-center">
          <span className="font-semibold">Tech Stack:</span>{" "}
          {techStack.join(", ")}
        </div>
      )}

      {hashtags && (
        <div className="flex flex-wrap justify-center gap-2 mt-3">
          {hashtags.map((tag, index) => (
            <span
              key={index}
              className="text-xs bg-blue-900/60 
                         px-3 py-1 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}

      <div className="flex-grow" />

      <div className="flex justify-center gap-4 mt-4 text-2xl">
        {techIcons.map((icon, index) => (
          <span key={index}>{icon}</span>
        ))}
      </div>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 bg-gradient-to-r from-sky-500 to-blue-500 
                   text-white px-6 py-2 rounded-full 
                   font-semibold hover:scale-105 transition"
      >
        View
      </a>
    </div>
  );
}
