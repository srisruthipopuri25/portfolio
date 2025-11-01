import "./works.css";
import Weathercard from "./weathercard";
import Portfoliocard from "./portfoliocard";
import Admindashboardcard from "./admindashboardcard";

export default function Works() {
  return (
    <div className="Fullheight mb-30" id="works">
      <h1>works</h1>
      <div className="flex flex-row items-start justify-center gap-16 flex-wrap">
        <Weathercard></Weathercard>
        <Portfoliocard></Portfoliocard>
        <Admindashboardcard></Admindashboardcard>
      </div>
    </div>
  );
}
