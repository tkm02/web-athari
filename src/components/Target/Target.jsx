import "./Target.css"
import icon from '../../assets/feather_check-circle.png'
import image from '../../assets/BD7A0370.JPG'

const Target = () => {
  return <div className="container-target">
    <h2>Nos cibles</h2>
    <div className="content-target">
       <div className="left-target">
       <p className="para-target">
       Nous opérons avec le secteur public, les collectivités locales, les organisations internationales, le secteur privé, ainsi que les fondations et groupes philanthropiques, pour maximiser l'impact social et soutenir des projets majeurs

        </p>
        <ul className="list-target">
            <li >
                 <img src={icon} alt="icone de cible" />  <span >
                 Secteur Public, Parapublic et Collectivités locales
                 </span>
            </li>
            <li>
            <img src={icon} alt="icone de cible" />   Organisations internationales du monde du développement
            </li>
            <li>
            <img src={icon} alt="icone de cible" />   Secteur Privé 
            </li>
            <li>
            <img src={icon} alt="icone de cible" /> Fondations et groupes philanthropiques divers
            </li>
        </ul>
       </div>
       <div className="right-target">
        <img src={image} alt="cible" className="img-target" />
       </div>
    </div>
  </div>;
};

export default Target;
