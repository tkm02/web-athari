import React from "react";
import "./style.css";
// "../../assets"
import background from "../../assets/b.jpg";
import HeaderText from "./Headertext/HeaderText";


const Headers = ({ backgroundImage = background  }) => {
  return (
    <section className="container-headers">
      <div
        className="content-header"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <h2 className="title">Nos domaines d’expertise <br/> sectorielle</h2>
      </div>
      <HeaderText>
        Athari a développé une solide expérience de l'ensemble des secteurs
        d'activité. Nos équipes rassemblent des expertises sur-mesure pour
        apporter à la fois une connaissance approfondie de votre secteur et de
        vos enjeux ainsi qu'une vision élargie à d'autres secteurs. Notre
        mission s'inscrit dans une ambition : aider nos clients à créer de
        nouvelles normes d'excellence dans leur secteur d'activité.
      </HeaderText>
    </section>
  );
};

export default Headers;
