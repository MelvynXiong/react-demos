import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CommentInput from './containers/CommentInput';
import CommentList from './components/CommentList';
import wrapWithLoadData from './common/wrapWithLoadData'

class CommentApp extends Component {
  static propTypes = {
    data: PropTypes.any,
    saveData: PropTypes.func.isRequired
  }
  constructor(props) {
    super(props);
    this.state = {
      //注意为空的情况
      comments: props.data ? props.data: []
    }
  }
  // componentWillMount() {
  //   this._loadComments();
  // }
  // _loadComments() {
  //   let comments = localStorage.getItem('comments');
  //   if(comments) {
  //     comments = JSON.parse(comments);
  //     this.setState({comments});
  //   }
  // }
  // _saveComments(comments) {
  //   localStorage.setItem('comments', JSON.stringify(comments));
  // }
  //层层通过回调函数拿到要删除的comment的下标
  handleDeleteComment(index) {
    console.log(index);
    const {comments} = this.state;
    comments.splice(index, 1);
    this.setState({comments});
    // this._saveComments(comments);
    this.props.saveData(comments);
  }
  handleSubmitComment(comment) {
    if (!comment) return;
    if (!comment.username) return alert('请输入用户名');
    if (!comment.content) return alert('请输入评论内容');
    const {comments} = this.state;
    comments.push(comment);
    this.setState({comments});
    // this._saveComments(comments);
    this.props.saveData(comments);
  }
  render() {
    return (
        <div className='wrapper'>
            <CommentInput onSubmit={this.handleSubmitComment.bind(this)}/>
            <CommentList onDeleteComment={this.handleDeleteComment.bind(this)} comments={this.state.comments}/>
        </div>
    );
  }
}
CommentApp = wrapWithLoadData(CommentApp, 'comments');
export default CommentApp;
