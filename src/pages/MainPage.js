import React, { Component } from "react";
import { axiosBase } from "../axios/axios";
import { addLoader } from "../hoc/addLoader/addLoader.js";
import Quote from "../components/Quote/Quote";
import ErrorBoundary from "../hoc/errorBoundary/errorBoundary";

class MainPage extends Component {
  state = {
    quoteList: null
  };

  async componentDidMount() {
    const response = await axiosBase.get("/quoteList.json");
    const data = response.data;
    const quoteList = [];
    Object.keys(data).forEach(qoute => quoteList.push(data[qoute]));
    this.setState({ quoteList });
  }

  render() {
    let data = "Not quotes";
    if (this.state.quoteList) {
      data = this.state.quoteList.map((elem, index) => (
        <ErrorBoundary key={index}>
          <Quote
            author={elem.author}
            qoute={elem.quote}
            category={elem.category}
          />
        </ErrorBoundary>
      ));
    }

    return <div className="d-flex  flex-column w-50 m-auto">{data}</div>;
  }
}

export default addLoader(MainPage, axiosBase);
