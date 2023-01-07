import "./App.css";
import React from "react";
import Header from "./Pages/header";
import { newsCategory } from "./news";
import NewsList from "./Pages/newsList/newsList";
import Pagination from "./Pages/pagination/pagination";

const fakeNews = [
  {
    title: "Title",
    content: "Content",
    url: "https://linktonews.com",
    urlToImage: "https://linktoimage.com",
    publishedAt: 'published date and time',
    source: {
      name: "CNN"
    },
  },
  {
    title: "Title",
    content: "Content",
    url: "https://linktonews.com",
    urlToImage: "https://linktoimage.com",
    publishedAt: 'published date and time',
    source: {
      name: "CNN"
    },
  },
]


class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 offset-md-3">
            <Header category={newsCategory.technology} />
            <div className="d-flex justify-content-between">
              <p className="text-black-50 ">
                About {0} result found
              </p>
              <p className="text-black-50 ml-auto">
                {1} page of {100}
              </p>
            </div>
            <NewsList news={fakeNews} />
            <Pagination />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
