import React, {Component} from 'react';
import OrderItem from '../OrderItem';

class OrderList extends Component {
    constructor(props){
        super(props);
        this.state = {data:[]};
    }
    componentDidMount() {
        fetch('/mock/info.json').then((res)=>{
            if(res.ok){
                res.json().then((data)=>{
                    this.setState({data})
                })
            }
        })
    }

    render() {
        return (
            <React.Fragment>
                {this.state.data.map((item)=>{
                    return <OrderItem key={item.id} data={item} submit={this.handleSubmit}/>
                })}
            </React.Fragment>
        );
    }
    handleSubmit = (id,comment)=>{
        const newData = this.state.data.map((item)=>{
            return item.id === id ?{
                ...item,comment,isCommented:true
            }:item
        })
        this.setState({
            data: newData
        })
    }
}

export default OrderList;