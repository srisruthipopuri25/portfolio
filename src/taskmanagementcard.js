export default function TaskManagementCard() {
  return (
    <div className="relative bg-[#0b2545] text-white p-6 pt-12 rounded-2xl w-80 text-center shadow-lg">
      
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white p-3 rounded-full shadow-md">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2921/2921222.png"
          alt="task management icon"
          className="w-12 h-12"
        />
      </div>

      <h2 className="mt-8 text-xl font-bold">
        Task Management System
      </h2>

      <p className="text-sm mt-4 text-gray-300">
        A full-stack task management system that allows users to create, track,
        and manage tasks efficiently. Built with a modern frontend and a robust
        backend to support scalable and organized workflows.
      </p>

      <div className="flex justify-center gap-4 mt-5 mb-4 text-2xl">
        <span>⚛️</span>
        <span>⚙️</span>
        <span>🗄️</span>
      </div>

      <a
        href="https://github.com/srisruthipopuri25/taskmanagementsystem"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-6 bg-gradient-to-r from-sky-500 to-blue-500 text-white px-6 py-2 rounded-full font-semibold hover:scale-105 transition"
      >
        View
      </a>
    </div>
  );
}
