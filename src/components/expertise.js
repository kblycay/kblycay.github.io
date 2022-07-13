
const Expertise = () => {
      
      const expertises = [
         { title : 'ReactJS ' , 'width' : '86%'},
         { title : 'React Native ' , 'width' : '70%'},
         { title : 'Figma ' , 'width' : '60%'},
         { title : 'MySQL ' , 'width' : '95%'},
         { title : 'Laravel ' , 'width' : '95%'},
         { title : 'Electron ' , 'width' : '40%'},
         { title : 'Lua' , 'width' : '20%'},
         { title : 'Php' , 'width' : '100%'},
         { title : 'jQuery' , 'width' : '70%'},
         { title : 'Photoshop ' , 'width' : '80%'},
      ];

      const ListItems = expertises.map((expert,key) =>
         <li key={ key }>
            <div className="expertise-title">{ expert.title }</div>
            <div className="expertise-proggress">
               <div class="progress">
                  <div class="progress-bar" role="progressbar" style={{width: expert.width}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
               </div>
            </div>
         </li>
      );

      return (
         <ul className="expertise-list">
            {ListItems}
         </ul>
      )

}

export default Expertise;