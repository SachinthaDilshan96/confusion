import {Navbar,NavbarBrand} from 'reactstrap';
import Menu from './Menu';
import {DISHES} from '../shared/dishes';
import React,{Component} from 'react';
import DishdetailComponent from "./DishdetailComponent ";

class Main extends Component{
  constructor(props){
    super(props);
    this.state={
      dishes:DISHES,
      selectedDish:null
    };
  }
  onDishSelect(dishId){
    this.setState({selectedDish:dishId});
}

  render(){
    return(
      <div className="App">
      <Navbar dark color="primary">
       <div className='="container'>
         <NavbarBrand href="/">Con Fusion</NavbarBrand>
       </div>
      </Navbar>
      <Menu dishes={this.state.dishes}
      onClick={(dishId)=>this.onDishSelect(dishId)}/>
      <DishdetailComponent dish={this.state.dishes.filter((dish)=>dish.id===this.state.selectedDish)[0]}/>
     </div>
    );
  }
}


export default Main;
