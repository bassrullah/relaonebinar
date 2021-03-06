import React from 'react';
import { Form, FormGroup, Label, Input, FormText, Button, Row, Col } from 'reactstrap';
import { Link, withRouter } from 'react-router-dom'
import '../assets/css/_style2.scss';
import Img from '../assets/images/image1.png'
import Logo from '../assets/images/blue-logo.png'
import { signIn } from "../actions/memberActions";
import { connect } from "react-redux";
import { getRole } from "../actions/mainActions";
import history from '../history'


class LoginPage extends React.Component {

  componentDidMount(){
    document.title= "Login - RelaOne"
    let role = localStorage.getItem('role')
    if ( role === 'member' ) {
      history.push('/user/dashboard')
    } else if (role === 'organization') {
      history.push('/organization/event')
    } else if (role === 'admin') {
      history.push('/')
    }
}
constructor(props) {
  super(props)

  this.state = {
     username: '',
     password: ''
  }
}

onChange = e => this.setState({ [e.target.name]: e.target.value });

onSubmit = e => {
  e.preventDefault();

  let days = 7;
  let now = new Date().getTime();
  let setupTime = localStorage.getItem('setupTime');
  if (setupTime == null) {
      localStorage.setItem('setupTime', now)
  } else {
      if(now-setupTime > days*24*60*60*1000) {
          localStorage.clear()
      }
  }
  
  this.props.signIn(this.state.username, this.state.password)
  this.setState({
    username: '',
    password: ''
  });
}

  render() {
    this.props.role === "member" && this.props.history.push("/user/dashboard")

    
    return (
      <div className="container2">
        <div className=" my-4 logo" >
        <Link to="/"><img className="" src={Logo} alt=""/></Link>
        </div>
        <Row className="whitebg">
          <Col md={6} className="nopadding">
            <img className="width" src={Img} alt=""/>
          </Col>
          <Col md={6} className="right">
              <h2>Login</h2>
                <Row className="box">
                  <Form onSubmit={this.onSubmit}>
                    <FormGroup>
                      <Label >Username</Label>
                      <Input 
                        onChange={this.onChange}
                        value={this.state.username}
                        className="input-border"
                        type="text" 
                        name="username" 
                        id="username" 
                        placeholder="Your Username" />
                    </FormGroup>
                    <FormGroup>
                      <Label >Password</Label>
                      <Input 
                        onChange={this.onChange}
                        value={this.state.password}
                        className="input-border" 
                        type="password" 
                        name="password" 
                        id="password" 
                        placeholder="Your Password" />
                    </FormGroup>
                    <FormText ><Link to='/user/forgot-password'>Forgot password?</Link>
                    </FormText>
                    <Button color="primary button-right mt-3 ">Login</Button>
                    <FormText className=" clear text-center mtop">
                      Don't have an account? <Link to='/register'>Register here </Link>
                      or <Link to='/login-org'>Login as Organization</Link>
                    </FormText>
                  </Form>
                </Row>
                </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    role: state.auth.role
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signIn: (username, password) => {
      dispatch(signIn(username, password));
    },
    getRole: () => {
      dispatch(getRole())
    }
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(LoginPage)
);