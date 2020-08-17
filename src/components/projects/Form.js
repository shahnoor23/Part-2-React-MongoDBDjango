import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addProjects } from "../../actions/projects";

export class Form extends Component {
  state = {
    BatchYear: "",
    Project_Name: "",
    Project_Supervisor: "",
    External_Supervisor: "",
    Co_Supervisor: "",
    Project_Id: "",
    Students: "",
  };
  static propTypes = {
    addProjects: PropTypes.func.isRequired,
  };
  onChange = (e) =>
    this.setState({
      [e.target.name]: e.target.value,
    });

  onSubmit = (e) => {
    e.preventDefault();
    const {
      BatchYear,
      Project_Name,
      Project_Supervisor,
      External_Supervisor,
      Co_Supervisor,
      Project_Id,
      Students,
    } = this.state;

    const project = {
      BatchYear,
      Project_Name,
      Project_Supervisor,
      External_Supervisor,
      Co_Supervisor,
      Project_Id,
      Students,
    };
    this.props.addProjects(project);
  };
  render() {
    const {
      BatchYear,
      Project_Name,
      Project_Supervisor,
      External_Supervisor,
      Co_Supervisor,
      Project_Id,
      Students,
    } = this.state;
    return (
      <div>
        <h1>Add Project Form</h1>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Batch Year</label>
            <input
              className="form-control"
              type="text"
              name="BatchYear"
              onChange={this.onChange}
              value={BatchYear}
            />
          </div>
          <div className="form-group">
            <label>Project Name</label>
            <input
              className="form-control"
              type="text"
              name="Project_Name"
              onChange={this.onChange}
              value={Project_Name}
            />
          </div>
          <div className="form-group">
            <label>Project_Supervisor</label>
            <input
              className="form-control"
              type="text"
              name="Project_Supervisor"
              onChange={this.onChange}
              value={Project_Supervisor}
            />
          </div>
          <div className="form-group">
            <label>External_Supervisor</label>
            <input
              className="form-control"
              type="text"
              name="External_Supervisor"
              onChange={this.onChange}
              value={External_Supervisor}
            />
          </div>
          <div className="form-group">
            <label>Co_Supervisor</label>
            <input
              className="form-control"
              type="text"
              name="Co_Supervisor"
              onChange={this.onChange}
              value={Co_Supervisor}
            />
          </div>
          <div className="form-group">
            <label>Project_Id</label>
            <input
              className="form-control"
              type="text"
              name="Project_Id"
              onChange={this.onChange}
              value={Project_Id}
            />
          </div>
          <div className="form-group">
            <label>Students</label>
            <input
              className="form-control"
              type="text"
              name="Students"
              onChange={this.onChange}
              value={Students}
            />
          </div>

          <div className="form-group">
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { addProjects })(Form);
