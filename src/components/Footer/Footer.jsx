import "./Footer.css";
import tel from '../../assets/bxs_phone-call.png'
import mail from '../../assets/ic_sharp-email.png'
import localisation from '../../assets/carbon_location-filled.png'

import logo from '../../assets/logo.png'

const ContactItem = ({ icon, text, Icon }) => (
  <li className="contact-item">
    {Icon ? (
      <>
        <Icon className="text-2xl" /> 
        <span className="text">{text}</span>
      </>
    ) : (
      <>
        {icon && <img src={icon} alt="Icon" width={20} height={20} />} 
        <span className="text">{text}</span>
      </>
    )}
  </li>
);


const Footer = () => {
  return <div className="container-footer">
    <div className="logo-footer">
      <img src={logo} alt="logo" />
    </div>
    <hr className="barre"/>
    <div className="content-footer">
        <div className="content-section">
        <div className="ul-footer">
            <div className="ul-footer--sections">
                    <h4 className="title-footer">Contactez nous</h4>
                    <ul className="list-footer">
                      <ContactItem icon={tel} text="+2250759956898" />
                      <ContactItem icon={mail} text="infos@athari-as.com" />
                      <ContactItem 
                    icon={localisation} 
                    text={`Côte d'Ivoire, Abidjan,\nCocody, Angré Nouveau CHU,\ncarrefour Daddy's Schekina`} 
                      />
                  </ul>
              </div>
              <div className="ul-footer--sections">
                    <h4 className="title-footer">Athari</h4>
                    <ul className="list-footer">
                    <ContactItem  icon={tel} text="A propos" />
                    <ContactItem  icon={tel} text="Contact" />
                    <ContactItem  icon={tel} text="Blog" />
                    
                </ul>
              </div>
            <div className="ul-footer--sections">
                    <h4 className="title-footer">Mentions légales</h4>
                    <ul className="list-footer">
                    <ContactItem text="politique de confidentialité" />
                    <ContactItem  text="Conditions et services" />
                    <ContactItem text="Conditions d'utilisation"/>
                    <ContactItem text="Politique de remboursement"/>  
                    </ul>
            </div>

            <div className="ul-footer--sections">
                  <h4 className="title-footer">Services</h4>
                  <ul className="list-footer">
                      <ContactItem text="Techlabz Keybox" />
                      <ContactItem text="Downloads" />
                      <ContactItem text="Forum" />
              
                  </ul>
            </div>

            <div className="newsletter-container">
              <h2>Rejoignez notre newsletter</h2>
              <div className="newsletter">
                <input type="email" name="size" id="newsletter" placeholder="Adresse Email"/>
                <button>Envoyer</button>
              </div>
              
            </div>
        </div>
        </div>
        
    </div>
  </div>;
};

export default Footer;
