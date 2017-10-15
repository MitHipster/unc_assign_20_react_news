import axios from 'axios';

export default {
  // Get all saved articles from database
  getSavedArticles: () => {
    return axios.get('/api/saved');
  },
  // Save new article to database
  saveArticle: (articleInfo) =>  {
    return axios.post('/api/saved', articleInfo);
  },
  // Delete an article with the given id
  removeArticle: articleInfo =>  {
    return axios.delete('/api/saved/' + articleInfo._id);
  },
  // Send search parameters to fetch articles
  searchArticles: req => {
    let url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json'
    return axios.get(url, {
      params: {
        'api-key': '6a9227ab76c54f3b861db580d7fd45c9',
        'q': req.searchTerm,
        'begin_date': req.startYear + '0101',
        'end_date': (req.endYear || (new Date()).getFullYear()) + '1231',
        'sort': 'newest'
      }
    });
  }
};
