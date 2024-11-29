import "./style.css";
import rightimg from "../../../assets/right.png";
import lefttimg from "../../../assets/left.png";
import BoxPhoto from "./BoxPhoto/BoxPhoto";


const BesoinAide = () => {
  return (
    <section className="container-besoin">
      <BoxPhoto img={lefttimg}/>
      <div className="box-center">
        <h3>
          Besoin d'échanger avec l'un de nos <br/> consultants pour une meilleure
          gestion ?
        </h3>
        <button className="box-center-btn">Contactez Nous</button>
      </div>
      <BoxPhoto img={rightimg}/>
    </section>
  );
};

export default BesoinAide;
