import React, { Component } from 'react';
import jQCloud from 'jqcloud2';
import $ from 'jquery';

class AmChartSLineChart extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      word_array: this.props.word_array || []
    }
  }

  componentDidMount() {
    this._wordCloud();
  }

  _wordCloud() {
    $(this._cloud).jQCloud(this.state.word_array);
  }

  render() {
    return (
      <div ref={a => this._cloud = a} style={{ width: "550px", height: "350px"}}>
        {!this.state.word_array.length && 
          <div
            style={{
              textAlign: "center",
              fontSize: "20px",
              color: "#777777",
              padding: "25px 20px",
              border: "1px dashed #1c1c1c"
            }}
          >Please add words to generate cloud!</div>}
      </div>
    );
  }
}

export default AmChartSLineChart;
