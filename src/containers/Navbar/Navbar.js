import React, { Component } from 'react';
import './Navbar.scss';
import menuIcon from '../../assets/icons/white-menu.jpg';
import { connect } from 'react-redux';
import { SEARCH_TEXT } from '../../store/actions';
import { withRouter } from 'react-router-dom';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showSearch: true
        }
    }

    searchInputHandler = (location) => {
        if (location.pathname !== '/') {
            this.setState({
                showSearch: false
            })
        }
        else {
            this.setState({
                showSearch: true
            })
        }
    }

    componentDidUpdate(prevProps, prevState) {
        // only update chart if the location has changed
        if (prevProps.location !== this.props.location) {
            this.searchInputHandler(this.props.location);
        }
    }

    render() {
        return (
            <nav className="navbar aqua-marine" >
                <div className="navbar-brand white">
                    <div className="row">
                        <div className="col-6">
                            <img src={menuIcon} width="20" height="20" className="d-inline-block align" alt="" />
                            <span className="nav-title pad-left">NY Times Most Popular</span>
                        </div>
                        {
                            this.state.showSearch ? <div className="col-6">
                                <div className="float-right">
                                    <input type="text" className="form-control" placeholder="Search" onChange={this.props.onChange.bind(this)} />
                                </div>
                            </div> : null
                        }
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

export default connect(null, mapDispatchToProps)(withRouter(Navbar));