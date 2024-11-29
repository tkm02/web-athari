import "./Partner.css"
import pat1  from '../../assets/ministere.png'
import pat2  from '../../assets/technoserve.png'
import pat3  from '../../assets/giz.png'
import pat4  from '../../assets/orangeFondation.png'
import pat5  from '../../assets/codimed.png'
import pat6  from '../../assets/PDC2V.png'
import Title from "../TitleCustom/Title"

const Partner = () => {
  return <div className="container-partner">
    <Title text="Nos partenaires"/>
    <div className="partner-content">
        <img src={pat1} alt="cabinet partenaire" />
        <img src={pat2} alt="cabinet partenaire" />
        <img src={pat3} alt="cabinet partenaire" />
        <img src={pat4} alt="cabinet partenaire" />
        <img src={pat5} alt="cabinet partenaire" />
        <img src={pat6} alt="cabinet partenaire" />
    </div>
  </div>;
};

export default Partner;
