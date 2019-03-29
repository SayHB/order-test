import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <header style={{
                    padding:'15px 10px',
                    backgroundColor:'#e9203d',
                    color: '#fff',
                    textAlign: 'center',
                    fontSize: '15px',
                    lineHeight: '1'
                }}>
                    我的订单
                </header>
            </React.Fragment>
        );
    }
}

export default Header;