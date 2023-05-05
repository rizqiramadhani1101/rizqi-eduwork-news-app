import React, { Component} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class NewsApp extends Component {
    state = {
      query: '',
      articles: []
    };
  
    fetchArticles = async () => {
      const response = await axios.get(`
      https://newsapi.org/v2/everything?q=apple&from=2023-05-04&to=2023-05-04&sortBy=popularity&apiKey=814bbb4170e840ac86cd415a9134e13f`);
      this.setState({ articles: response.data.articles });
    }
  
    handleSearchInput = (event) => {
      this.setState({ query: event.target.value }, () => {
        this.fetchArticles();
      });
    }
  
    render() {
      return (
<div>
<br />
          <h1>News App</h1>
          <form>
            <input className='input' placeholder="Cari berita hari ini"type="text" value={this.state.query} onChange={this.handleSearchInput} />
          </form>
          {this.state.articles.map((article, index) => (
          <div className="card-container" key={index}>
            <div className="card-wrapper">
                <div className="tittle">{article.title}</div>
                    {/* <image className="img" src={article.urlToImage} alt={article.title}/> */}
                    <div className="sub-title">{article.description}</div>
                    <div className="read"><a href={article.url} target="_blank" rel="noreferrer">Read more</a></div>
                
            </div>
          </div>
          

              
                
               
               
                
              
            ))}
          
</div>
      );
    }
  }
  

