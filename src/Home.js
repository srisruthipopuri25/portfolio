import "./home.css";

export default function Home() {
  return (
    <div className="Fullheight" id="home">
      <div className="home-container">
        <div className="home-left">
          <div className="home-greeting">Hey There, Welcome!!</div>

          <div className="name-container">
            <span className="normal-text">I am</span>
            <div className="wave-text">
              <span>S</span><span>R</span><span>U</span><span>T</span><span>H</span><span>I</span>
            </div>
            <a target="_blank" href="https://drive.google.com/file/d/1QG-MTWF-vSX62hYl5pAPM7GSjTeXMqUe/view?usp=sharing" className="resume-link">
              Resume
            </a>
          </div>
        </div>

        <div className="home-right">
          <img
            className="home-image"
            src="https://media.gettyimages.com/id/1400646644/photo/girl-sitting-on-the-high-school-stairs-studing-with-laptop.jpg?s=612x612&w=0&k=20&c=tYZfcoFQ8FmXBwXZA2SdUyCgoVLj8xOFS5RgytMieOI="
            alt="student"
          />
        </div>
      </div>
    </div>
  );
}
