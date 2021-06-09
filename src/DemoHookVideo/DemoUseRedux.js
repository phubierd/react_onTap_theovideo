
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { commentAction } from '../redux/actions/FakeBookAction';

export default function DemoUseRedux(props) {

    //useSelector thay cho mapStateToProps
    let comments = useSelector(state => state.FakeBookReducer.comments)

    //lay hàm disptach từ useDispatch => dể gửi giá trị lên reducer thay thế cho mapDispatchToProp hoặc this.props.dispatch
    let dispatch = useDispatch();
    //lấy thông tin người dùng nhập vào
    let [userComment, setUserComment] = useState({
        name: '',
        content: '',
        avatar: ''
    });
    console.log('userComment', userComment)
    const handleChange = (e) => {
        let { value, name } = e.target;
        // console.log(value,name)

        setUserComment({
            ...userComment,
            [name]: value
        })
    }
    const handleComment = (e) => {
        e.preventDefault();

        let usComment= {...userComment,avatar:`https://i.pravatar.cc/150?img=${userComment.name}`}

        // let action={
        //     type:'add_comment',
        //     userComment : usComment
        // }
        dispatch(commentAction(usComment))
    }

    return (
        <div className="container">
            <h3>FakeBook!!</h3>
            <div>
                <div className="card text-white bg-dark">
                    <div className="card-header">
                        {comments.map((item, index) => {
                            return <div className="row" key={index}>
                                <div className="col-1">
                                    <img src={item.avatar} style={{ height: 50 }} />

                                </div>
                                <div className="col-11">
                                    <h6 className="text-danger">{item.name}</h6>
                                    <p className>{item.content}</p>
                                </div>
                            </div>
                        })}


                    </div>
                    <form className="card-body" onSubmit={handleComment}>
                        <div className="form-group">
                            <h4 className="card-title">Name</h4>
                            <input className="form-control" name="name" onChange={handleChange}></input>

                        </div>
                        <div className="form-group">
                            <h4 className="card-title">contenet</h4>
                            <input className="form-control" name="content" onChange={handleChange}></input>

                        </div>
                        <div className="form-group">
                            <button className="btn btn-info">Send</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}
