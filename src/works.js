import "./works.css";
import Weathercard from "./weathercard";
import Portfoliocard from "./portfoliocard";
import AdminDashboardCard from "./admindashboardcard";
import Taskmanagementcard from "./taskmanagementcard";
import Ecommercecard from "./ecommercecard";

export default function Works() {
  return (
    <div className="Fullheight mb-30" id="works">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800">
          My <span className="text-blue-600">Works</span>
        </h1>
      </div>
      <div className="flex flex-row items-start justify-center gap-16 flex-wrap">
        <Weathercard></Weathercard>
        <Portfoliocard></Portfoliocard>
        <AdminDashboardCard></AdminDashboardCard>
        <Taskmanagementcard></Taskmanagementcard>
        <Ecommercecard></Ecommercecard>
      </div>
    </div>
  );
}

