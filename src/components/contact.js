
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment , faEnvelope , faLocationArrow } from '@fortawesome/free-solid-svg-icons'

const Contact = () =>  {

   const contact = [
      { icon : faComment , title : 'Whatsapp' , value : '0 850 303 25 81'},
      { icon : faEnvelope , title : 'E-Posta' , value : 'kblycay@gmail.com'},
      { icon : faLocationArrow , title : 'Şehir' , value : 'İstanbul'},
   ];

   const ContactListItem = contact.map((contact,key) => 
         <li key={key}>
            <div className="iconbox"><FontAwesomeIcon icon={contact.icon} /></div>
            <div className="contactinfo">
            <p className="contact-title">{ contact.title }</p>
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