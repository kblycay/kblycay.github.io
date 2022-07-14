
const Jobs = () => {
      
      const Jobs = [
         { position : 'Frontend Developer' , company : 'Terkos Bilişim' , location : 'İstanbul/Şişli' , status : '2011 - 2012' , description : 'lipsum dolor sit amet'},
         { position : 'Backend Developer' , company : 'Terkos Bilişim' , location : 'İstanbul/Şişli' , status : '2011 - 2012' , description : 'lipsum dolor sit amet'},
         { position : 'Full Stack Developer' , company : 'Öznet Yazılım' , location : 'İstanbul/Şişli' , status : '2011 - 2012' , description : 'lipsum dolor sit amet'},
      ];

      const JobsListItem = Jobs.map((job,key) =>
         <li key={key}>
            <div className="position">{ job.position }</div>
            <div className="information"><p className="status">{ job.status }</p>{ job.company } - { job.location }</div>
            <div className="description">{ job.description }</div>
         </li>
      );

      return (
         <ul className="jobs-list">
            {JobsListItem}
         </ul>
      )

}

export default Jobs;