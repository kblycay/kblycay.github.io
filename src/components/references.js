
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment , faEnvelope , faLocationArrow } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import { useEffect, useState } from 'react';

import ReferencesJson from './../data/references.json'

const References = () =>  {

   const ReposListItem = ReferencesJson.map((ref,key) =>  {

      return (
         <li key={key}>
            <div className="repo-name"><a href={ref.uri} target="_blank">{ref.title}</a></div>
            <div className="repo-visibility"><a href={ref.uri} target="_blank">{ref.uri}</a></div>
            <div className="description">{ref.description}</div>
            <ul className="tech-list">
               { ref.tech.map((tech,key) => { return <li key={key}>{ tech }</li> }) }
            </ul>
         </li>
      );

   });

   return (
      <ul className="references-list">
         {ReposListItem}
      </ul>
   )

}

export default References;