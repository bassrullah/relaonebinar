import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import '../assets/css/_style.scss';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getSkillset, getEvent, editEvent } from '../actions/organizationActions';
import Moment from 'moment'

class EventEdit extends Component {

  constructor(props) {
    super(props);

    let events = {}
    if (this.props.events) {
      events = this.props.events
    }

    let initDeadline = events.deadline
    Moment.locale('en');
    let deadline = Moment(initDeadline).format('YYYY-MM-DD')

    let initQuota = events.quotaMax
    let quotaMax = initQuota.toString()

    this.state = {
      skillsets : this.props.skillsets,
      events : this.props.events,
      id : props.match.params.event_id,
      title : events.title,
      description : "",
      deadline : deadline,
      location : "",
      quotaMax : quotaMax, 
      skillSet : []
    }
  }


  componentDidMount(){
    this.props.getSkillset();
    this.props.getEvent();

    let events = {}
    if (this.props.events) {
      events = this.props.events
    }

    let initDeadline = events.deadline
    Moment.locale('en');
    let deadline = Moment(initDeadline).format('YYYY-MM-DD')

    let initQuota = events.quotaMax
    let quotaMax = initQuota.toString()

    this.setState({
      title : events.title,
      description : events.description,
      deadline : deadline,
      location : events.location,
      quotaMax : quotaMax, 
      skillSet : events.skillSet      
    })
  }


  componentWillReceiveProps(props){
    this.setState({
      skillsets : props.skillsets,
      events : props.events 
    })

    let events = {}
    if (this.props.events) {
      events = this.props.events
    }

    let initDeadline = events.deadline
    Moment.locale('en');
    let deadline = Moment(initDeadline).format('YYYY-MM-DD')

    this.setState({
      title : events.title,
      description : events.description,
      deadline : deadline,
      location : events.location,
      quotaMax : events.quotaMax, 
      skillSet : events.skillSet      
    })
  }

  onChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
  }

  onChangeNum = (e) => {
    let num = e.target.value;
    let str = num.toString();
    this.setState({
      [e.target.name]: str
    })
  }

  handleCheck = (e) => {
    const id = (e.target.value)
    const skillsets = this.props.skillsets
    const skills = skillsets.filter(skill => skill._id === id)
    skills[0].status = !(skills[0].status)
    if (skills[0].status === true) {
        this.setState({
            skillset: [...this.state.skillset, skills[0]._id]
        })
    } else {
        this.setState({
            skillset: this.state.skillset.filter(x => x !== skills[0]._id)
        })
    }
}

  onSubmit = (e) => {
    e.preventDefault();
    this.props.editEvent(this.state.id, this.state.title, this.state.description, this.state.location, this.state.quotaMax, this.state.skillSet, this.state.deadline);
}

  render() {
    console.log(this.state)

    let events = {}
    if (this.props.events) {
      events = this.props.events
    }

    let skillSet = []
    if (events.skillSet) {
      skillSet = events.skillSet
    }    
    
    const skillsets = this.props.skillsets    

    for (let i=0; i<skillsets.length; i++){ 
      for (let j=0; j<skillSet.length; j++){
        if (skillsets[i].name===skillSet[j].name){
          skillsets[i].status=true
        }
      }
    }

    const displaySkillset = skillsets.length ? (
      skillsets.map(skillset => {
        return (
            <div key={skillset._id}><label><input onChange={this.handleCheck} defaultChecked={skillset.status} type="checkbox" name="skillSet" key={skillset._id} value={skillset._id}/> {skillset.name}</label><br></br></div>
        )
      })
    ) : (
        <div>Loading skill-set list</div>
    );

    let initDeadline = events.deadline
    Moment.locale('en');
    let deadline = Moment(initDeadline).format('YYYY-MM-DD')


    return (
      <div className="form-organization-profile">
        <div>
            <h3><b>Update Event</b></h3>
        </div>
        <hr></hr>
        <Form onSubmit={this.onSubmit}>
            <FormGroup>
                <Label for="exampleTitle">Title</Label>
                <Input defaultValue={events.title} onChange={this.onChange} className="form-control" type="text" name="title" id="exampleTitle"/>
            </FormGroup>
            <FormGroup>
                <Label for="exampleDescription">Description</Label>
                <Input defaultValue={events.description} onChange={this.onChange} type="text" name="description" id="exampleDescription" />
            </FormGroup>
            <FormGroup>
                <Label for="exampleLocation">Location</Label>
                <Input defaultValue={events.location} onChange={this.onChange} type="text" name="location" id="exampleLocation"/>
            </FormGroup>
            <FormGroup>
                <Label for="exampleQuotaMax">Maximal Quota</Label>
                <Input defaultValue={events.quotaMax} onChange={this.onChangeNum} type="text" name="quotaMax" id="exampleQuotaMax"/>
            </FormGroup>
            <FormGroup>
                <Label for="exampleSkillSet">Skill Set</Label><br></br>
                {displaySkillset}
            </FormGroup>
            <FormGroup>
                <Label for="exampleDeadline">Deadline</Label>
                <Input required onChange={this.onChange} defaultValue={deadline} type="date" name="deadline" id="exampleDeadline" placeholder="" />
            </FormGroup>
            <Button color="primary">Save</Button>
        </Form>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.event_id;
    return {
      skillsets: state.skillset.skillsets,
      events: state.event.events.find(event => event._id === id)
    }
  }

const mapDispatchToProps = dispatch => {
  return {
    getSkillset: () => { dispatch(getSkillset()) },
    getEvent: () => { dispatch(getEvent()) },
    editEvent: (_id, title, description, location, quotaMax, skillSet, deadline) => { dispatch(editEvent(_id, title, description, location, quotaMax, skillSet, deadline))}
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EventEdit));


