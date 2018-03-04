import React, { Component } from 'react'
import './App.css'
import { scaleLinear, scaleThreshold } from 'd3-scale'
import { max, sum } from 'd3-array'
import { select } from 'd3-selection'
import { transition } from 'd3-transition'

class BarChart extends Component {
  constructor(props){
    super(props);
    this.createBarChart = this.createBarChart.bind(this);
  }

  componentDidMount() {
    this.createBarChart();
  }

  componentDidUpdate() {
    this.createBarChart();
  }

  createBarChart() {
    const node = this.node;
    const dataMax = max(this.props.data);
    const barWidth = this.props.size[0] / this.props.data.length;

    const yScale = scaleLinear()
      .domain([0, dataMax])
      .range([0, this.props.size[1]]);

    select(node)
      .selectAll("rect.bar")
      .data(this.props.data)
      .enter()
      .append("rect")
        .attr("class", "bar")
        .on("mouseover", this.props.onHover);

    select(node)
      .selectAll("rect.bar")
      .data(this.props.data)
      .exit()
        .remove();

    select(node)
      .selectAll("rect.bar")
      .data(this.props.data)
        .attr("x", (d,i) => i * barWidth)
        .attr("y", d => this.props.size[1] - yScale(d))
        .attr("height", d => yScale(d))
        .attr("width", barWidth)
        .style("fill", (d,i) => this.props.hoverElement === d.id ? "#FCBC34" : this.props.colorScale(d.launchday))
        .style("stroke", "black")
        .style("stroke-opacity", 0.25);
  }

  render() {
    return <svg ref={node => this.node = node} width={this.props.size[0]} height={this.props.size[1]}>
    </svg>
  }
}

export default BarChart;