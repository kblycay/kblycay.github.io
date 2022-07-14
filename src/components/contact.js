
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment , faEnvelope , faLocationArrow } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react';
import axios from 'axios';

const Contact = () =>  {

   const [ Contact , SetContact ] = useState([]);

   useEffect(() => {

      axios.get('https://raw.githubusercontent.com/kblycay/kblycay.github.io/main/data/contact.json').then(response => {
         SetContact(response.data)
      });

   });

   // https://raw.githubusercontent.com/kblycay/kblycay.github.io/main/data/contact.json
   // Contact json okunacak ve veriler bu alana yazılacak.

   const ContactListItem = Contact.map((contact,key) => 
         <li key={key}>
            <div className="iconbox">{contact.icon}</div>
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