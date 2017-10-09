import React, { Component } from 'react';
import { Input, FormBtn } from "../../components/Form";
import API from '../../utils/API';

class Main extends Component {
  state = {

  };

  render() {
    return (
      <div className="container containers">
        <h4>Search Articles</h4>
        <div className="row">
          <form id="search-form" className="col s12" action="" method="post">
            <div className="row">
              <Input
                id="searchTerm"
                type="text"
                colWidth="s12"
                className="validate"
                children="Topic"
              />
            </div>
            <div className="row">
              <Input
                id="startYear"
                type="text"
                colWidth="s6"
                className="validate"
                pattern="[0-9]{4}"
                children="Start Year (4 digits)"
              />
              <Input
                id="endYear"
                type="text"
                colWidth="s6"
                className="validate"
                pattern="[0-9]{4}"
                children="End Year (4 digits)"
              />
            </div>
            <FormBtn
              id="searchBtn"
              type="submit"
              className="btn waves-effect waves-light search-btn"
              children="Search"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default Main;
