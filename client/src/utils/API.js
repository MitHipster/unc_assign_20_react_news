import axios from 'axios';

export default {
  // Get all saved articles from database
  getArticles: function() {
    return axios.get('/api/saved');
  },
  // Save new article to database
  saveArticle: function() {
    return axios.post('/api/saved');
  },
  // Delete an article with the given id
  deleteArticle: function(id) {
    return axios.delete('/api/saved/' + id);
  }
};
