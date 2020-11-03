import React, { Component } from "react";

class Quote extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
      author: "",
    };
  }

  componentDidMount() {
    this.getQuote();
  }

  handleClick = () => {
    this.getQuote();
  };

  render() {
    const tweetHref = `https://twitter.com/intent/tweet?text=${this.state.text}&hashtags=${this.state.author}`;
    return (
      <div className="d-flex justify-content-center mt-4">
        <div id="quote-box" className="card" style={{ maxWidth: "60rem" }}>
          <div className="card-body">
            <blockquote className="blockquote text-right">
              <p id="text" className="lead mb-0">
                <i className="fa fa-quote-left mr-2"></i>
                {this.state.text}
                <i className="fa fa-quote-right ml-2"></i>
              </p>
              <footer id="author" className="blockquote-footer">
                {this.state.author}
              </footer>
            </blockquote>
            <div className="row d-flex justify-content-between">
              <a
                id="tweet-quote"
                className="btn btn-primary ml-3 twitter-share-button"
                href={tweetHref}
              >
                <i className="fa fa-twitter"></i>
                <span className="ml-2">tweet</span>
              </a>
              <button
                id="new-quote"
                onClick={this.handleClick}
                className="btn btn-success mr-3"
              >
                new quote
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  getQuote = () => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          text: data.content,
          author: data.author,
        });
      });
  };
}

export default Quote;
