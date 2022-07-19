
const Jobs = () => {
      
      const Jobs = [
         { position : 'Backend Developer' ,        company : 'GC TASARIMGC' , location : 'İstanbul/Gaziosmanpaşa' , status : '2011 - 2013' , description : ''},
         { position : 'Frontend Developer' ,       company : 'Terkos Bilişim' , location : 'İstanbul/Şişli' , status : '2013 - 2014' , description : 'lipsum dolor sit amet'},
         { position : 'Backend Developer' ,        company : 'Öznet Yazılım' , location : 'Muğla/Marmaris' , status : '2017 - 2018' , description : 'lipsum dolor sit amet'},
         { position : 'Geliştirme Ekibi Lideri',   company : 'U4 Oyun Yazılım Bilişim A.Ş' , location : 'İstanbul/Levent' , status : '2021 - 2022' , description : 'lipsum dolor sit amet'},
      ];

      const JobsListItem = Jobs.reverse().map((job,key) =>
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