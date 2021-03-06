import React, { Component } from "react";
import Sidebar from "../../../layout/sidebar/SkillSetSidebar";
import { BrowserRouter as Router, Route, withRouter} from "react-router-dom";
import Navbar from '../../../layout/navbar/SkillSetNavbar'
import Footer from '../../../layout/FooterAdmin'
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { Table, Button } from 'reactstrap';

import {
  getSkillSet,
  delSkillSet } from '../../../actions/adminActions'

class User extends Component {

  componentDidMount(){
    this.props.getSkillSet();
  }

  delete = (id) => {
    this.props.delSkillSet(id)
  }



  render() {
    const skillsets = this.props.skillsets

    const displaySkillSet = skillsets.length ? (
      skillsets.map(({_id, name}, i) => {
        return(
          <tr>
            <td>{i +1}</td>
            <td key={_id}>{name}</td>
            <td key={_id}>
                        <Button color="link" className="event-action">
                        <Link to={'/admin/users/edit/' + _id}><i class="fa fa-pencil-square-o" aria-hidden="true"></i></Link>

                        </Button>
                        <Button color="link" className="event-action" onClick={() => this.delete(_id)}> 
                        <i class="fa fa-trash" aria-hidden="true"></i>

                        </Button>
                    </td>
        </tr>
      )
  })
) : (
  <tr>Loading ..</tr>
);

    return (
      <Router>
        {this.props.role !== "admin"}
        
        <body className="">
        <div id="wrapper">
          <div className="admin-grid">
            <Sidebar />
              <div className="main-panel">
                <div className="content">
                  <Navbar/> 
                  <div className="row">
                  <div className="col-md-12">
            <div className="card">
                <div className="card-header">
                <h5 className="card-title">List Skill Sets</h5>
                <div class="card-body">
                <div class="table-responsive">
                <table class="table">
                    <thead class=" text-primary">
                      <th>
                        No
                      </th>
                      <th>
                        Name
                      </th>

                      <th className="right">
                        Action
                      </th>
                    </thead>
                    <tbody>
                    {displaySkillSet}
                    </tbody>
                    </table>
                    <div className="event-action">
                          <Button color="primary"><Link to="/admin/skill-sett/create" className="create-event-button">Create Skill Set</Link></Button>
                      </div>
                </div>
              </div>
                </div>
            </div>
    </div>
                  </div>
                </div>
                <footer className="footer footer-black footer-white">
                  <Footer/>
                </footer>
              </div>
          </div>
        </div>
        </body>
        
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    skillsets: state.skillset.skillsets
  }
}

const mapDispatchToProps = dispatch => {
  return {
      getSkillSet: () => { dispatch(getSkillSet())},
      delSkillSet: (id) => { dispatch(delSkillSet(id))}
  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(User));
