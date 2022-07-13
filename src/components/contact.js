
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone , faEnvelope , faLocationArrow } from '@fortawesome/free-solid-svg-icons'

const Contact = () =>  {

   const contact = [
      { icon : faPhone , title : 'Telefon' , value : '0 505 007 47 97 '},
      { icon : faEnvelope , title : 'E-Posta' , value : 'kblycay@gmail.com'},
      { icon : faLocationArrow , title : 'Şehir' , value : 'İstanbul'},
   ];

   const ContactListItem = contact.map((contact,key) => 
         <li>
            <div className="iconbox"><FontAwesomeIcon icon={contact.icon} /></div>
            <div className="contactinfo">
            <p class="contact-title">{ contact.title }</p>
            <p>{ contact.value }</p>
            </div>
         </li>   
   );

   return (
      <ul className="contact-information">
         {ContactListItem}
      </ul>
   )

}

export default Contact;