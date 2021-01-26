import React from "react";
import Instagram from './Instagram'
import Instahead from "./instahead";
import Border from './border'
import Profile from './profile'
import Bottom from "./Bottom";
export default class  FetchRandomUser extends React.Component {
   
      state = {
        loading:true,
        people:[]
       
      };
      async componentDidMount(){
        const url=" https://jsonplaceholder.typicode.com/photos";
        const response= await fetch(url);
        const data=await response.json();

        this.setState({people:data,loading:false});
        console.log(data);
        
      } 
    render() {
        if(this.state.loading){
            return   <div> loading...</div> 
        }
        if(!this.state.people.length){
            return <div>Didn't get a person</div>
        }
       
        const peopleJSX=[];
        this.state.people.forEach(person=>{
            peopleJSX.push(
                <div key={person.id}>
                    <Instagram
                    title={person.title}
                    body={person.body}
                    url={person.url}
                    />
                     <div><Border /></div>  
                </div>
            );
        });
      return(
            
              <div>
                     <div> <Instahead /></div>
                     <div><Profile /></div>
                    
                    {peopleJSX}    
                    <Bottom />   
                           
             </div>  
            );
        }
      }