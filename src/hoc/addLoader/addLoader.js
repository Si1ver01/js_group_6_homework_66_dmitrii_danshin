import React, { Component, Fragment } from "react";
import Preloader from "../../components/Preloader/Preloader";

export const addLoader = (WrappedComponent, axios) => {
  return class wrapLoader extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: false,
        interceptorsId: null
      };

      axios.interceptors.request.use(
        option => {
          this.setState({ loading: true });
          return option;
        },
        error => {
          console.log(error);
          return error;
        }
      );

      axios.interceptors.response.use(
        res => {
          this.setState({ loading: false });
          return res;
        },
        error => {
          this.setState({ loading: false });
          return error;
        }
      );
    }

    componentWillUnmount() {
      axios.interceptors.response.eject(this.state.interceptorId);
    }

    render() {
      return (
        <Fragment>
          {this.state.loading && <Preloader/> }
          <WrappedComponent {...this.props} />
        </Fragment>
      );
    }
  };
};

