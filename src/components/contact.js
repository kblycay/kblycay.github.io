import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment , faEnvelope , faLocationArrow } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

import ContactJson from './../data/contact.json'

const Contact = () =>  {

   library.add(faComment , faEnvelope , faLocationArrow);

   // axios.get('https://raw.githubusercontent.com/kblycay/kblycay.github.io/main/data/contact.json').then(response => {
   //       console.log(response.data);
   // });

   const ContactListItem = ContactJson.map((contact,key) => 
         <li key={key}>
            <div className="iconbox"><FontAwesomeIcon icon={ contact.icon } /></div>
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