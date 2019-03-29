import React, {Component} from 'react';

class OrderItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            editing:false,
            comment: props.data.comment || ''
        }
    }

    render() {
        const {picture,product,shop,price,isCommented} = this.props.data;
        return (
            <React.Fragment>
                <div>
                    <img src={picture}/>
                </div>
                <div>
                    <div>{product}</div>
                    <div>{shop}</div>
                    <div>{price}</div>
                    <div>
                        {
                            isCommented ?(
                                <button>已评价</button>
                            ):(
                                <button onClick={this.handleOpen}>评价</button>
                            )
                        }
                    </div>
                </div>
                {this.state.editing?this.renderArea():null}
            </React.Fragment>
        );
    }
    renderArea() {
        return(
            <React.Fragment>
                <textarea onChange={this.handleAreaComment} value={this.state.comment}></textarea>
                <button onClick={this.handleCommentSubmit}>提交</button>
                <button onClick={this.handleCancel}>取消</button>
            </React.Fragment>
        )
    }
    handleOpen = ()=>{
        this.setState({
            editing: true
        })
    }
    handleAreaComment = (e)=>{
        this.setState({
            comment:e.target.value
        })
    }
    handleCommentSubmit = ()=>{
        this.setState({
            editing:false,
        })
        this.props.submit(this.props.data.id,this.state.comment)
    }
    handleCancel = () => {
        this.setState({
            comment:this.props.data.comment || '',
            editing:false
        })
    }
}

export default OrderItem;