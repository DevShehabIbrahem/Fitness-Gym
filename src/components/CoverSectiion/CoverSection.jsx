import "../../assets/coverGym.jpg";
import "../../css/CoverSectiion/CoverSection.css";
import arrowRight from "../../assets/rightArrow.png";

const CoverSection = () => {
  return (
    <div className="cover">
      <div className="cover_content">
        <span>
          YOUR FITNESS STARTS HERE SAVE TIME AND SIGN UP <span>ONLINE</span>
        </span>
        <span>
          BECOME A MEMBER <img src={arrowRight} alt="" />
        </span>
      </div>
    </div>
  );
};

export default CoverSection;
