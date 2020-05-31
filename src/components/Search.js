import React, { Component } from "react";
import { SearchBar } from "react-native-elements";
import { wp, hp } from "./common";

export default class Search extends Component {
  state = {
    search: "",
  };

  updateSearch = (search) => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      <SearchBar
        placeholder="search for meals, dishes"
        onChangeText={this.updateSearch}
        value={search}
        platform="android"
        cancelIcon={null}
        placeholderTextColor="rgba(74, 74, 74, 0.521798)"
        round={true}
        containerStyle={{
          backgroundColor: "#fff",
          margin: 0,
          padding: 0,
          marginRight: wp(34),
          marginLeft: wp(34),
          fontSize: hp(14),
        }}
        inputContainerStyle={{
          height: hp(41),
          width: wp(307),
          backgroundColor: "#f6f6f6",
        }}
      />
    );
  }
}
