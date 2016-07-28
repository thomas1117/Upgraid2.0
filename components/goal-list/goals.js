import React from 'react';
import axios from 'axios';
import {completeGoal,addGoal} from '../../redux/actions/profile.js';

class GoalList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			theme:0,
			goalInput:''
		}
	}
	handleOption(num) {
		this.setState({
			theme:num
		});
	}
	handleInput(e) {
		this.setState({
			goalInput:e.target.value
		})
	}
	add(e) {
		e.preventDefault();
		var data = {title:this.state.goalInput,theme:this.state.theme,completed:false};
		addGoal(data)
		
	}
	goalList() {
		var that = this;
		return this.props.goals.filter(function(obj){

				if(obj.completed===false) {
					return obj;
				}
				
			
		}).map(function(obj){
				return (<li key={obj.id}>
				<span>{obj.title}</span>
				{!that.props.user ?<button className='btn btn-primary pull-right' onClick={()=> completeGoal(obj)}>x</button>:null}
				</li>)
		})
	}
	render() {
		return(<div className='col-sm-4'>
			<div className='col-sm-12'>
				{!this.props.user ? <h2>Your Goals</h2> : <h2>Profile Goals</h2> }
			</div>
			<div className='col-sm-12'>
				<ul>
					{this.goalList()}
				</ul>
			</div>
			<div className='col-sm-12'>
			{!this.props.user ?
				<form onSubmit={e=>this.add(e)}>
					<div className='form-group'>
						<input className='form-control' onChange={(e)=>this.handleInput(e)}/>
						<label className="radio-inline"><input type="radio" name="optradio" onClick={()=>this.handleOption(1)}/>Skills</label>
						<label className="radio-inline"><input type="radio" name="optradio" onClick={()=>this.handleOption(2)}/>Bad Habits</label>
						<label className="radio-inline"><input type="radio" name="optradio" onClick={()=>this.handleOption(3)}/>Health/Fitness</label>
						<button className='btn btn-primary pull-right'>Submit</button>
					</div>
				</form>:null}
			</div>
		</div>)
	}
}

export default GoalList;