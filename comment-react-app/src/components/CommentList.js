import React, { Component } from 'react';
import Comment from './Comment';

class CommentList extends Component {
  static defaultProps = {
    comments: []
  };
  handleDeleteComment(index) {
    if(this.props.onDeleteComment) {
      this.props.onDeleteComment(index);
    }
  }
  render() {
      return (
          <div>
            {this.props.comments.map((item, index) => <Comment onDeleteComment={
              this.handleDeleteComment.bind(this)
            } index={index} key={index} item={item} />)}
          </div>
      );
  }
}

export default CommentList;