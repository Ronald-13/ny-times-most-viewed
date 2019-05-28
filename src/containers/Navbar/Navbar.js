import React, { Component } from 'react';
import './Navbar.scss';
import menuIcon from '../../assets/icons/white-menu.jpg';
import { connect } from 'react-redux';
import { SEARCH_TEXT } from '../../store/actions';

class Navbar extends Component {

    render() {

        return (
            <nav className="navbar aqua-marine" >
                <div className="navbar-brand white">
                    <div className="row">
                        <div className="col-6">
                            <img src={menuIcon} width="20" height="20" className="d-inline-block align" alt="" />
                            <span className="nav-title pad-left">NY Times Most Popular</span>
                        </div>
                        <div className="col-6">
                            <div className="float-right">
                                <input type="text" className="form-control" placeholder="Search" onChange={this.props.onChange.bind(this)} />
                            </div>
                        </div>
                    </div>
                </div>
            </nav >
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onChange: (e) => dispatch({
            type: SEARCH_TEXT,
            payload: {
                search: e.target.value,
            }
        })
    }
}

export default connect(null, mapDispatchToProps)(Navbar);