import React, { Component } from "react";

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    error: ""
  };

  componentDidCatch = (error, errorInfo) => {
    this.setState({ hasError: true, error });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div class="card text-white bg-danger mb-3">
          <div class="card-header">Header</div>
          <div class="card-body">
            <h5 class="card-title">Danger card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      );
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
