import React, { Component } from 'react';
import {Container, Form} from 'react-bootstrap';
import CommentBoxAdd from './CommentBoxAdd';
import axios from 'axios';





//  Data Dummy

// const Comment = [
//     {
//         id : 1,
//         author :"Dimas Aji Wicaksono",
//         date : "12 Jan",
//         comment :" kjahdkhakhdahjdkhahdahjkdhahjkahdhajkdhkajhdahjdk",
//         img :"https://cdn-images-1.medium.com/fit/c/36/36/1*BtYbqp0aAHnQ0s0XG7h1uQ@2x.jpeg",
//     },





export default class CommentBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            comments: []
        };
}
    

    componentDidMount() {
        axios.get('http://localhost:5000/api/v1/articles')
        .then(res => {
            const comments = res.data;
            this.setState({comments});
            console.log(comments)
    })
    }

    render() {
        console.log("masuk kesini")
        return (
            <React.Fragment>
            <Container className="container-md">
                <div className="container-comment" style={{ flexDirection: "column", display: "flex", alignItems: "center", marginBottom:"40px" }}>
                <p className="justify-center"><strong>Responses </strong></p>
                    <Form style={{width:"750px"}}>
                        <Form.Group controlId="Form.ControlTextarea" style={{marginLeft:"0",width:"750px"}}>
                            <Form.Control as="textarea" placeholder="Write responses..." />
                        </Form.Group>
                    </Form>
                    {this.state.comments.map(item =>
                            <CommentBoxAdd
                            // img={item.img}
                            author={item.createdBy.fullname}
                            comment={item.comments.comment}
                            date={item.createdAt} />
                        )}

                </div>
            </Container>
            </React.Fragment>
        )
    }
}
