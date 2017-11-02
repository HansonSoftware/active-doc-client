/**
 * Created by saharmehrpour on 9/6/17.
 */


import React, {Component} from 'react';
import '../App.css';
import FaArrowLeft from 'react-icons/lib/fa/arrow-left';
import FaArrowRight from 'react-icons/lib/fa/arrow-right';

// import ReactDOM from 'react-dom';

export class NavBar extends Component {

    render() {
        return (
            <div className="container-fluid">
                <ul className="nav navbar-nav">
                    <li className="disabled"><a id="back_button"><FaArrowLeft size={25}/></a></li>
                    <li className="disabled"><a id="forward_button"><FaArrowRight size={25}/></a></li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                    <li><a href="#/index">Table of Content</a></li>
                    <li><a href="#/rules">Rules</a></li>
                    <li className="disabled"><a>Project Hierarchy</a></li>
                    {/*href="#/hierarchy"*/}
                    <li className="disabled"><a>Generate Rules</a></li>
                </ul>
            </div>
        )
    }

}


export default NavBar;