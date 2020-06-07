import React, {Component} from 'react';
import {Raterator} from './raterator.js';
import Data from './data.json';


export class App extends Component{
    constructor(props){
        super(props);
        let data = [];
       
     Data.Ratings.forEach(e => {
            let instruct = data.find(element => {
                return element.InstructorSid === e.InstructorSid
            });           
            if(instruct)
            {
                instruct===0;
            }

            else{
                    let instruct =Data.Instructors.find(Iid=>{
                        return Iid.InstructorSid === e.InstructorSid 
                    });
                    let ScholID = Data.Schools.find(Sid=>{
                        return Sid.SchoolSid === e.SchoolSid
                    });
                    let like = Data.Likes.find(like=>{
                        return like.InstructorSid === e.InstructorSid                     
                    });   
                data.push({
                    Instructor: instruct.Instructor,
                    Name : ScholID.Name,
                    Likes : like.Likes
                });

            }
     });
        this.state = {data}
    }
    render(){
    return(
            <div>
            <Raterator container={this.state.data}/>
            </div>
        );
    }
}



