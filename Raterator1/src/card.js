import React, { Component } from 'react'

export class Card extends Component{
     state={count:this.props.Likes}
     LikeCount = () => {
         let Like = this.state.count + 1
         this.setState({
         count: Like
         })
      } 
render(){
         const InstructorName = (this.props.Instructor);
         const SchoolName = (this.props.Schools);
         
   return(
               <div className='Card'> 
               <div className='Card1'>    
               <div className='Card2'>
                     <div className="InstructorName">Instructor:<span>{InstructorName}</span></div>
                     <div className="SchoolName">Schools:<span> {SchoolName} </span></div> 
                     <div>
                  <span className = "star" style= {{color:"rgb(152, 0,0",fontSize:"1.5rem", textAlign:"center"}}>
                     <i className="fas fa-star"></i>
                     <i className="fas fa-star"></i>
                     <i className="fas fa-star"></i>
                     <i className="fas fa-star"></i>
                     <i className="fas fa-star"></i>
                  </span>
               </div>
               </div>
               </div>
               <div className='buttonMenu'>
                     <button onClick={this.LikeCount} className="likeButton">LIKE</button>{this.state.count}
                     <button className="reviewButton">SHOW REVIEWS</button> 
               </div>
            </div>
         );
      }
}