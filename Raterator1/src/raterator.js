import React, { Component } from 'react'
import { Card } from './card';
import Logo from'./logo.png';


export class Raterator extends Component{
    constructor (props){
        super(props);
        this.state = {
            Mydata:[]
        }; 
    }

componentDidMount(){    
    const Newdata= [];
    if (this.props.container){ 
        this.props.container.forEach(e=>
              {Newdata.push(<Card
                Instructor = {e.Instructor}
                Schools={e.Name}
                Likes = {e.Likes}
            />);
        })
    
    }
   this.setState({Mydata:Newdata})   
}

render(){
    return(
        <section>
                <div className="hamburger-Menu"></div>
                <div className="hamburger-Menu"></div>
                <div className="hamburger-Menu"></div>
            <div>
                <div className="Logo">
                <img  src={Logo} alt ="logo"/>
                </div>
                <div>{this.state.Mydata}</div>
            </div>
        </section>
    );
  }
}
