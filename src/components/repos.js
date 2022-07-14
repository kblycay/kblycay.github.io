
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment , faEnvelope , faLocationArrow } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import { useEffect, useState } from 'react';

const Repos = () =>  {

   const [Repos , SetRepos] = useState([]);
   const [languages , SetLanguages] = useState([]);

  useEffect(() => {

      if(Repos.length == 0){

         axios.get('https://api.github.com/users/kblycay/repos').then(response => {
               SetRepos(response.data);
         });

      }

  });

   const ReposListItem = Repos.map((repo,key) =>  {

      return (
         <li key={key}>
            <div className="repo-name"><a href={repo.html_url} target="_blank">{repo.name}</a></div>
            <div className="repo-visibility">{ repo.visibility }</div>
         </li>
      );

   });

   return (
      <ul className="github-repos">
         {ReposListItem}
      </ul>
   )

}

export default Repos;