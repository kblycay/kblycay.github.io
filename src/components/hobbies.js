import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGuitar , faCar , faGamepad , faMotorcycle } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

import HobbiesJson from './../data/hobbies.json'

const Hobbies = () =>  {

   library.add(faGuitar , faCar , faGamepad , faMotorcycle);

   // axios.get('https://raw.githubusercontent.com/kblycay/kblycay.github.io/main/data/contact.json').then(response => {
   //       console.log(response.data);
   // });

   const ContactListItem = HobbiesJson.map((hobbies,key) => 
         <li key={key}>
            <div className="hobbieIcon"><FontAwesomeIcon icon={ hobbies.icon } /></div>
            <div className="hobbieTitle">{ hobbies.title }</div>
         </li>   
   );

   return (
      <ul className="hobbies-list">
         {ContactListItem}
      </ul>
   )

}

export default Hobbies;