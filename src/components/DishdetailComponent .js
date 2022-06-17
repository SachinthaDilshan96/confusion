import React, { Component } from 'react'
import {Card,CardBody,CardTitle,CardImg} from 'reactstrap'
export default class DishdetailComponent  extends Component {
    renderComment(comment){
        comment=this.props.dish;
        if (comment!=null){
            return(
            <div className="col-12 col-md-5 m-1">
                <CardTitle>hdhdh</CardTitle>
            </div>
                );
        }
        else{
            return <div></div>
        }
    }
  render() {
    const dish=this.props.dish;
    const commentss=dish.comments.map((comment)=>{
        return(
            <div key={comment.id} className="ml-6">
       <Card >
      
      <CardBody>
          <p>--{comment.author} </p>
          <p>{comment.comment}</p>
      </CardBody>
        </Card> 
       </div>
        );
    });
    return (
      <div >
        <div className="ml-6">
        <Card >
      <CardImg width="100%" object src={dish.image} alt={dish.name}/>
      <CardBody>
          <CardTitle>{dish.name} </CardTitle>
          <p>{dish.description}</p>
      </CardBody>
</Card> 
        </div>
        <div className="ml-6"><CardTitle>Comments</CardTitle>
            {commentss}
            </div>
        </div>
    )
  }
}
