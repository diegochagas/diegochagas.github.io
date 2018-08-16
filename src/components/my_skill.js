import React, {Component} from 'react';
import iconSkill from "../images/skill.png";

export default class MySkill extends Component {

	renderSkill(name, value){
		const percentage = `${value}%`;
		return(
			<div className="row">
                <div className="col-md-2 skills-grid">
					<p>{name}</p>
				</div>
                <div className="col-md-8">
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" aria-valuenow={value} aria-valuemin="0" aria-valuemax="100" style={{width: percentage}}>
                            <span>{percentage}</span>
                        </div>
                    </div>
                </div>
            </div>
		);
	}

	render(){
		return(
			<div className="my-skill">
				<div className="my-skills text-center">
					<div className="container">
						<h3>MY SKILLS</h3>
						<div className="strip text-center">
							<img src={iconSkill} alt="icon skill"/>
						</div>
						<div className="row skill-grids">
			                <div className="col-sm-6">
			                	{this.renderSkill("HTML/HTML5", "90")}
			                    {this.renderSkill("CSS/CC3", "90")}
			                	{this.renderSkill("JavaScript", "80")}
			                	{this.renderSkill("React/Redux", "60")}
			                	{this.renderSkill("Node.js", "70")}
			                	{this.renderSkill("Sass/Less", "90")}
			                	{this.renderSkill("jQuery/Ajax", "80")}
			                </div>
			                <div className="col-sm-6">
			                    {this.renderSkill("Angular", "40")}
								{this.renderSkill("Java", "60")}
								{this.renderSkill("MySQL", "50")}
								{this.renderSkill("Photoshop", "90")}
								{this.renderSkill("Premiere", "80")}
								{this.renderSkill("After Effects", "60")}
			                </div>
							<div className="clearfix"> </div>
			            </div>
						</div>
					</div>
				<div className="my-skill-back"></div>
			</div>
		);
	}
}