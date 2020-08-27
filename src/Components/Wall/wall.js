import React from 'react';
import Brick from '../Brick/Brick.js'
import './style.css';

class Wall extends React.Component{
    //state ={
      //  brickvalue: []
    //}
    constructor(props){
        super(props);
        this.state ={
            brickvalue: [1]
        }

    }
    
addMoreBricks=()=>{
    const newBrickValue=[...this.state.brickvalue];
        newBrickValue.push(newBrickValue.length+1);
        this.setState({
            brickvalue: newBrickValue
        });
}

render = () => {
    return (
    
    <div className="wall-container">
        {
            this.state.brickvalue.map( (brick)=> {
                return <Brick key={brick} name={brick} />
            })
        }
        <button className="btn" onClick={this.addMoreBricks}>Add More</button>
    

    </div>
    );


    };
}
export default Wall;