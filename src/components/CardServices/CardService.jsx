import { Link } from "react-router-dom";
import "./style.css";

const CardService = ({ text, children, img, fond= "#128081", col="#fff", colpara="#F5F5F5" }) => {
  return (
    <Link to="#" className="container-card" style={{background: `${fond}`}}> 
      <div 
        className="head-card" 
        style={{
          backgroundImage: `url(${img})` 
        }}
      ></div>
      <div className="body-card">
        <h4 style={{color: `${col}`}}>{text}</h4>
        <p style={{color: `${colpara}`}}>
          {children}
        </p>
      </div>
    </Link>
  );
};

export default CardService;
