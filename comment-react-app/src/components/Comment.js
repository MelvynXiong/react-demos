import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Comment extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
    onDeleteComment: PropTypes.func,
    index: PropTypes.number
  };
  constructor() {
    super();
    this.state = {
      elapsedTime: ''
    };
  }
  componentWillMount() {
    this._updateTime();
    this._timer = setInterval(this._updateTime.bind(this), 5000);
  }
  componentWillUnmount() {
    clearInterval(this._timer);
  }
  _updateTime() {
    const duration = (+Date.now() - this.props.item.timestamp)/1000;
    this.setState({
      elapsedTime: duration > 60 ?
        `${Math.round(duration / 60)} 分钟前`
        : `${Math.round(Math.max(duration, 1))} 秒前`
    });
  }
  _getProcessedContent(content) {
    return content
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;")
      .replace(/`([\S\s]+?)`/g, '<code>$1</code>');
  }
  handleDeleteComment(index) {
    if(this.props.onDeleteComment) {
      this.props.onDeleteComment(index);
    }
  }
  render() {
    return (
      <div className='comment'>
        <div className='comment-user'>
          <span className='comment-username'>{this.props.item.username}:</span>
        </div>
        <p dangerouslySetInnerHTML={{__html: this._getProcessedContent(this.props.item.content)}} />
        <span className='comment-createdTime'>
          {this.state.elapsedTime}
        </span>
        <span onClick={this.handleDeleteComment.bind(this, this.props.index)}
          className='comment-delete'>
          删除
        </span>
      </div>
    );
  }
}
export default Comment;