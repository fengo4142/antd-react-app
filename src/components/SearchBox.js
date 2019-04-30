import React from "react";

import { Icon, Button, Input, AutoComplete } from "antd";

const Option = AutoComplete.Option;

function onSelect(value) {
  console.log("onSelect", value);
}

function getRandomInt(max, min = 0) {
  return Math.floor(Math.random() * (max - min + 1)) + min; // eslint-disable-line no-mixed-operators
}

function searchResult(query) {
  return new Array(getRandomInt(5))
    .join(".")
    .split(".")
    .map((item, idx) => ({
      query,
      category: `${query}${idx}`,
      count: getRandomInt(200, 100)
    }));
}

function renderOption(item) {
  return (
    <Option key={item.category} text={item.category}>
      <div className="global-search-item">
        <span className="global-search-item-desc">
          {item.query} 在
          <a
            href={`https://s.taobao.com/search?q=${item.query}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.category}
          </a>
          区块中
        </span>
        <span className="global-search-item-count">约 {item.count} 个结果</span>
      </div>
    </Option>
  );
}

class SearchBox extends React.Component {
  state = {
    dataSource: []
  };

  handleSearch = value => {
    this.setState({
      dataSource: value ? searchResult(value) : []
    });
  };

  render() {
    const { dataSource } = this.state;
    return (
      <div className="global-search-wrapper">
        <AutoComplete
          className="global-search"
          style={{ width: "100%" }}
          dataSource={dataSource.map(renderOption)}
          onSelect={onSelect}
          onSearch={this.handleSearch}
          placeholder="Search for a vehicle..."
          optionLabelProp="text"
        >
          <Input
            suffix={
              <Button type="primary" className="search-box-button">
                <Icon type="search" />
              </Button>
            }
          />
        </AutoComplete>
      </div>
    );
  }
}

export default SearchBox;
