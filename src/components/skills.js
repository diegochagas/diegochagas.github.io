import React, {Component} from 'react';
import iconSkill from "../images/skill.png";

export default class Skills extends Component {
  renderSkill(name, value){
    const percentage = `${value}%`;
    return(
      <div className="row">
        <div className="col-md-2 skills-grid">
          <p>{name}</p>
        </div>
        <div className="col-md-8">
          <div className="progress">
            <span className="progress-percent">{percentage}</span>
            <progress className="progress-bar" value={value} max="100"></progress>
          </div>
        </div>
      </div>
    );
  }

  render(){
    return(
      <section className="skill">
        <div className="skills text-center">
          <div className="container">
            <h3>SKILLS</h3>
            <div className="strip text-center">
              <img src={iconSkill} alt="icon skill"/>
            </div>
            <div className="row skill-grids">
              <div className="col-sm-6">
                {this.renderSkill("HTML", "90")}
                {this.renderSkill("CSS", "90")}
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
              <div className="clearfix"></div>
            </div>
          </div>
        </div>
        <div className="skill-back"></div>
      </section>
    );
  }
}