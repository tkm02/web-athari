import React from "react";

import induimg from "../../assets/indu.png";
import eduimg from "../../assets/edu.png";
import digitalimg from "../../assets/digital.png";
import agroimg from "../../assets/agro.png";
import financeimg from "../../assets/finance.png";
import santeimg from "../../assets/sante.png";
import devpmeimg from "../../assets/devpme.png";
import envimg from "../../assets/env.png";
import genreimg from "../../assets/genre.png";
import villeimg from "../../assets/ville.png";
import energieimg from "../../assets/energie.png";
import conflitimg from "../../assets/conflit.png";
import "./style.css";
import CardService from "../../components/CardServices/CardService";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import Headers from "../../components/Headers/Headers";
import BesoinAide from "../../components/BesoinAide/BesoinAide";

const ServicesPage = () => {
  return (
    <>
      <NavBar />
      <Headers />
      <>
        <div className="content-card">
          <CardService text={"Education"} img={eduimg}>
            Le respect de la dignité humaine consiste à traiter chaque personne
            avec respect et équité, en valorisant son identité et ses droits.
          </CardService>
          <CardService
            text={"Santé"}
            img={santeimg}
            fond="#fff"
            col="#128081"
            colpara="#128081"
          >
            Le respect de la dignité humaine consiste à traiter chaque personne
            avec respect et équité, en valorisant son identité et ses droits.
          </CardService>
          <CardService text={"AgroBusinness"} img={agroimg}>
            Le respect de la dignité humaine consiste à traiter chaque personne
            avec respect et équité, en valorisant son identité et ses droits.
          </CardService>
        </div>
        <div className="content-card">
          <CardService
            fond="#fff"
            col="#128081"
            colpara="#128081"
            text={"Digital & Technologie"}
            img={digitalimg}
          >
            Le respect de la dignité humaine consiste à traiter chaque personne
            avec respect et équité, en valorisant son identité et ses droits.
          </CardService>
          <CardService text={"Inclusion Financière"} img={financeimg}>
            Le respect de la dignité humaine consiste à traiter chaque personne
            avec respect et équité, en valorisant son identité et ses droits.
          </CardService>
          <CardService
            fond="#fff"
            col="#128081"
            colpara="#128081"
            text={"Industrialisation"}
            img={induimg}
          >
            Le respect de la dignité humaine consiste à traiter chaque personne
            avec respect et équité, en valorisant son identité et ses droits.
          </CardService>
        </div>
        <div className="content-card">
          <CardService
            text={"Environnement et developpement durable"}
            img={envimg}
          >
            Le respect de la dignité humaine consiste à traiter chaque personne
            avec respect et équité, en valorisant son identité et ses droits.
          </CardService>
          <CardService
            fond="#fff"
            col="#128081"
            colpara="#128081"
            text={"Genre/Automatisation des femmes"}
            img={genreimg}
          >
            Le respect de la dignité humaine consiste à traiter chaque personne
            avec respect et équité, en valorisant son identité et ses droits.
          </CardService>
          <CardService
            text={"Develop. du secteur privé et appui aux PME"}
            img={devpmeimg}
          >
            Le respect de la dignité humaine consiste à traiter chaque personne
            avec respect et équité, en valorisant son identité et ses droits.
          </CardService>
        </div>
        <div className="content-card">
          <CardService
            text={"ville et terrirtoire"}
            img={villeimg}
            fond="#fff"
            col="#128081"
            colpara="#128081"
          >
            Le respect de la dignité humaine consiste à traiter chaque personne
            avec respect et équité, en valorisant son identité et ses droits.
          </CardService>
          <CardService text={"Energie"} img={energieimg}>
            Le respect de la dignité humaine consiste à traiter chaque personne
            avec respect et équité, en valorisant son identité et ses droits.
          </CardService>
          <CardService
            text={"Conflis, securité et aide alimentaire"}
            img={conflitimg}
            fond="#fff"
            col="#128081"
            colpara="#128081"
          >
            Le respect de la dignité humaine consiste à traiter chaque personne
            avec respect et équité, en valorisant son identité et ses droits.
          </CardService>
        </div>
        <BesoinAide />
        <Footer />
      </>
    </>
  );
};

export default ServicesPage;
