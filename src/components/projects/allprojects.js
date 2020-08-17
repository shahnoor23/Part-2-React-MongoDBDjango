import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getallProjects } from "../../actions/projects";

export class allprojects extends Component {
  static propTypes = {
    projects: PropTypes.array.isRequired,
    getallProjects: PropTypes.func.isRequired,
  };
  state = {
    search: "",
  };
  upddateSearch(event) {
    this.setState({ search: event.target.value.substr(0, 20) });
  }
  componentDidMount() {
    this.props.getallProjects();
  }
  render() {
    let filtered = this.props.projects.filter((project) => {
      return (
        project.Project_Name.toLowerCase().indexOf(
          this.state.search.toLowerCase()
        ) !== -1
      );
    });
    return (
      <Fragment>
        <h2>Projects</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th> BatchYear </th>
              <th> Project_Name </th>
              <th> Project_Supervisor </th>
              <th> External_Supervisor </th>
              <th> Co_Supervisor </th>
              <th> Project_Id </th>
              <th> Students </th>
              <th></th>
              <input
                type="text"
                value={this.state.search}
                onChange={this.upddateSearch.bind(this)}
              />
            </tr>
          </thead>
          <tbody>
            {filtered.map((project) => (
              <tr key={project.id}>
                <td>{project.BatchYear}</td>
                <td>{project.Project_Name}</td>
                <td>{project.Project_Supervisor}</td>
                <td>{project.External_Supervisor}</td>
                <td>{project.Co_Supervisor}</td>
                <td>{project.Project_Id}</td>
                <td>{project.Students}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  projects: state.projects.projects,
});
export default connect(mapStateToProps, { getallProjects })(allprojects);
