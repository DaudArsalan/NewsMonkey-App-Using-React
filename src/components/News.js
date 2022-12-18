import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export default function News(props) {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [loading, setLoading] = useState(true);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const UpdateNews = () => {
    setTimeout(() => {
      const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${props.apiKey}&pagesize=${props.pageSize}&category=${props.category}&page=${page}`;
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setArticles(data.articles);
          setTotalResults(data.totalResults);
          setLoading(false);
        });
    }, 500);
  };

  useEffect(() => {
    UpdateNews();
    document.title = `NewsMonkey -  ${capitalizeFirstLetter(props.category)}`;
    // eslint-disable-next-line
  }, []);

  const fetchMoreData = () => {
    setTimeout(() => {
      setPage(page + 1);
      const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${
        props.apiKey
      }&pagesize=${props.pageSize}&category=${props.category}&page=${page + 1}`;
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setArticles(articles.concat(data.articles));
          setTotalResults(data.totalResults);
        });
    }, 500);
  };

  const filteredArray = articles.filter(
    (element) =>
      element.title !== null &&
      element.description !== null &&
      element.urlToImage !== null &&
      element.url !== null
  );

  return (
    <div className="mt-24 mx-3 md:mx-28">
      <h1 className="text-2xl md:text-3xl font-bold text-center">
        NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines
      </h1>
      <hr className="my-5 " />

      {loading && <Spinner />}

      <div className="row1 flex flex-col flex-wrap items-center md:justify-evenly mb-5 md:flex-row md:space-y-0 ">
        {filteredArray.map((element) => {
          return (
            <NewsItem
              key={element.url}
              title={element.title ? element.title.slice(0, 75) : ""}
              description={
                element.description ? element.description.slice(0, 115) : ""
              }
              imageUrl={element.urlToImage}
              newsUrl={element.url}
              author={element.author}
              date={element.publishedAt}
            />
          );
        })}
      </div>

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      />
    </div>
  );
}

News.defaultProps = {
  pageSize: 9,
  category: "general",
};

News.propTypes = {
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
