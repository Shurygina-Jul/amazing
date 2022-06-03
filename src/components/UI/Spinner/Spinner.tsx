import light from "assets/icons/spinner/light.svg"
import dark from "assets/icons/spinner/dark.svg";


function Spinner({theme='light'}) {
  return (
    <div className="m-auto">
      <img src={theme==="light"?light:dark} alt="loader" />
    </div>
  );
  
}

export default Spinner;
