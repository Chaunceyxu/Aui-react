/**
 * Created by xudao on 16/8/14.
 */

import React from 'react';
require('./ninegrid.css');

export default class NineGrid extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

  }

  componentDidMount() {

  }

  render() {
    const props = this.props;
    const className = props.className ? props.className : '';

    const itemDom = props.items.map(function(r, i){
      return React.createElement(
        'li',
        {
          className: 'aui-col-xs-4 aui-text-center ' + r.className,
          key: 'nineGrid'+i,
          onClick: this.handleClick.bind(this, i),
          onTouchStart: this.handleTouchStart.bind(this)
        },
        r.children
      )
    }.bind(this));


    return React.createElement(
      'ul',
      {
        className: 'aui-grid-nine ' + className
      },
      itemDom
    );
  }

  handleClick(i) {
    this.props.items[i].onClick ? this.props.items[i].onClick(i) : '';
  }

  handleTouchStart() {
    this.props.onTouchStart ? this.props.onTouchStart() : '';
  }


}
