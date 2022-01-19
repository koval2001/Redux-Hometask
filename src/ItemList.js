import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { fetchData, removeData } from "./actions";

class ItemList extends Component {
  componentDidMount() {
    this.props.fetchData("https://swapi.dev/api/people");
  }

  render() {
    const { error, loading, items } = this.props;

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    if (!items.length) {
      return <div>No items to display</div>;
    }

    return (
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => this.props.removeData(item.name)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    items: state.items.items,
    error: state.items.error,
    loading: state.items.loading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(fetchData(url)),
    removeData: (id) => dispatch(removeData(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
