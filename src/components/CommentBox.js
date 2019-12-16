import React, { Component } from 'react';
import {Container, Form} from 'react-bootstrap';
import CommentBoxAdd from './CommentBoxAdd';





// Data Dummy

const Comment = [
    {
        id : 1,
        author :"Dimas Aji Wicaksono",
        date : "12 Jan",
        comment :" kjahdkhakhdahjdkhahdahjkdhahjkahdhajkdhkajhdahjdk",
        img :"https://cdn-images-1.medium.com/fit/c/36/36/1*BtYbqp0aAHnQ0s0XG7h1uQ@2x.jpeg",
    },
    {
        id : 2,
        author :"Dimas",
        date : " 28 Feb",
        comment :" kjahdkhakhdahjdkhahdahjkdhahjkahdhajkdhkajhdahjdk",
        img :"https://cdn-images-1.medium.com/fit/c/36/36/1*BtYbqp0aAHnQ0s0XG7h1uQ@2x.jpeg",
    },
    {
        id : 3,
        author :"Wicaksono",
        date : "4 Jan",
        comment :" kjahdkhakhdahjdkhahdahjkdhahjkahdhajkdhkajhdahadjajkhdjkahdhadjkhakjhdjkahahjdkhakjdhkjahdkjahkjdhakjdhahkjdhakjdhkjahdkhakjdhkjahdhajkdhkahdjkahdkjhajkdhadhahdkjahkdjhadhajkdhadhkajhdkjhajkdhjdk",
        img :"https://cdn-images-1.medium.com/fit/c/36/36/1*BtYbqp0aAHnQ0s0XG7h1uQ@2x.jpeg",
    },
    {
        id : 4,
        author :"Aji Wicaksono",
        date : "16 Aug",
        comment :" alkjdlajldkjalkjdakdjlkajkldjasssssssalkjdklajdjklajkldjklajdkjakldjkadjkahdhakjdhahjkdhadjalkklajdkjakljdklajdjklajdlkjalkdkah",
        img :"https://cdn-images-1.medium.com/fit/c/36/36/1*BtYbqp0aAHnQ0s0XG7h1uQ@2x.jpeg",
    }
]





export default class CommentBox extends Component {
    render() {
        return (
            <Container className="container-md">
                <div className="container-comment" style={{ flexDirection: "column", display: "flex", alignItems: "center", marginBottom:"40px" }}>
                <p className="justify-center"><strong>Responses </strong></p>
                    <Form style={{width:"750px"}}>
                        <Form.Group controlId="Form.ControlTextarea" style={{marginLeft:"0",width:"750px"}}>
                            <Form.Control as="textarea" placeholder="Write responses..." />
                        </Form.Group>
                    </Form>
                    {Comment.map(item =>
                        <CommentBoxAdd
                        img={item.img}
                        author={item.author}
                        comment={item.comment}
                        date={item.date} />
                    )}
                    
                </div>
            </Container>
        )
    }
}
