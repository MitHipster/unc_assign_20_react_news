import React, { Component } from 'react';
import { Input, FormBtn } from '../../components/Form';
import API from '../../utils/API';
import { Link } from 'react-router-dom';
import { List, ListItem } from '../../components/List';

class Main extends Component {
  state = {
    articles: [],
    searchTerm: '',
    startYear: '',
    endYear: ''
  };

  loadArticles = () => {
    // API.getArticles()
    //   .then( res => res )
    //   .catch( err => console.log(err) );
  };

  saveArticle = articleInfo => {
    API.saveArticle(articleInfo)
      .then(res => this.loadArticles())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.searchTerm && this.state.startYear) {
      API.searchArticles({
        searchTerm: this.state.searchTerm,
        startYear: this.state.startYear,
        endYear: this.state.endYear
      })
        .then( res => {
          console.log(res.data.response.docs);
          this.setState({
            articles: res.data.response.docs,
            searchTerm: '',
            startYear: '',
            endYear: ''
          });
        })
        .catch( err => console.log(err) );
    }
  };

  render() {
    return (
      <div className="container containers">
        <h4 id="search">Search for Articles</h4>
        <div className="row">
          <form id="search-form" className="col s12" action="" method="get">
            <div className="row">
              <Input
                value={this.state.searchTerm}
                onChange={this.handleInputChange}
                id="searchTerm"
                name="searchTerm"
                type="text"
                colWidth="s12"
                className="validate"
                required="required"
                children="Topic"
              />
            </div>
            <div className="row">
              <Input
                value={this.state.startYear}
                onChange={this.handleInputChange}
                id="startYear"
                name="startYear"
                type="text"
                colWidth="s6"
                className="validate"
                required="required"
                pattern="[0-9]{4}"
                children="Start Year (4 digits)"
              />
              <Input
                value={this.state.endYear}
                onChange={this.handleInputChange}
                id="endYear"
                name="endYear"
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
              onClick={this.handleFormSubmit}
              disabled={ !(this.state.searchTerm && this.state.startYear) }
              children="Search"
            />
          </form>
        </div>
        {this.state.articles.length ? (
          <div>
            <h4 id="results">Your Search Results</h4>
            <List>
              {this.state.articles.map(article => (
                <ListItem
                  key={article._id}
                  _id={article._id}
                  url={article.web_url}
                  headline={article.headline.main}
                  summary={article.snippet}
                  byline={ (article.byline && article.byline.original) ? article.byline.original : "NOT AVAILABLE" }
                  image="https://placehold.it//210x140"
                  date={article.pub_date}
                  saveArticle={this.saveArticle}
                  title="Add article"
                  icon="add"
                />
              ))}
            </List>
          </div>
        ) : (
          <h4 id="results">Search to display results here</h4>
        )}
      </div>
    );
  }
}

export default Main;
