import "./works.css";
import Weathercard from "./components/weathercard";
import Portfoliocard from "./components/portfoliocard";
import AdminDashboardCard from "./components/admindashboardcard";
import Taskmanagementcard from "./components/taskmanagementcard";
import Ecommercecard from "./components/ecommercecard";

export default function Works() {
  return (
    <div className="Fullheight mb-30" id="works">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800">
          My <span className="text-blue-600">Works</span>
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 place-items-center">
        <Ecommercecard></Ecommercecard>
        <Weathercard></Weathercard>
        <AdminDashboardCard></AdminDashboardCard>
        <Taskmanagementcard></Taskmanagementcard>
        <Portfoliocard></Portfoliocard>
      </div>
    </div>
  );
}

