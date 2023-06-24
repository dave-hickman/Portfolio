import "../Styling/Scroller.css"
import arrowImage from "../assets/arrow.png"

const Scroller = () => {
    const handleScrollToBottom = () => {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: "smooth",
        });
      };
    
      return (
        <div className="scroll-down" onClick={handleScrollToBottom}>
      <p>Projects</p><img id="down-arrow" src={arrowImage} alt="arrow" />
    </div>
  );
};
export default Scroller;
