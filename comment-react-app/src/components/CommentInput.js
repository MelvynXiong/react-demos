import React, {Component} from 'react';
import PropTypes from 'prop-types';


class CommentInput extends Component {
  //增加传入组件的参数的类型验证
  static propTypes = {
    onSubmit: PropTypes.func,
    data: PropTypes.any,
    onUserNameInputBlur: PropTypes.func.isRequired
  }
  constructor(props) {
      super(props);
      this.state = {
          username: props.data ? props.data : '',
          content: ''
      }
  }
  //将用户名存入localStorage
  // _saveUsername(username) {
  //   localStorage.setItem('username', username);
  // }
  //加载存在localStorage里的用户名
  // _loadUsername() {
  //   const username = localStorage.getItem('username');
  //   if(username) {
  //     this.setState({username});
  //   }
  // }
  //每次失去焦点时，重新存一遍用户名
  handleUsernameBlur(e) {
    if (this.props.onUserNameInputBlur) {
      this.props.onUserNameInputBlur(e.target.value);
    }
  }
  handleUsernameChange(e) {
      this.setState({
         username: e.target.value
      });
  }
  handleContentChange(e) {
      this.setState({
          content: e.target.value
      });
  }
  //通过回调函数来实现状态提升
  handleSubmit() {
      if(this.props.onSubmit) {
          const {username, content} = this.state;
          //加上+号自动转换类型，得到了一个毫秒数
          const timestamp = +new Date();
          //传出去的数据带上时间戳
          this.props.onSubmit({username, content, timestamp});
      }
      //回到初始状态
      this.setState({
          content: ''
      });
  }
  //自动聚焦到评论框
  componentDidMount() {
    this.textarea.focus();
  }
  //组件挂载前加载缓存的用户名
  // componentWillMount() {
  //   this._loadUsername();
  // }
  render() {
      return (
          <div className='comment-input'>
              <div className='comment-field'>
                  <span className='comment-field-name'>User Name: </span>
                  <div className='comment-field-input'>
                      <input value={this.state.username}
                      onChange={this.handleUsernameChange.bind(this)}
                      onBlur={this.handleUsernameBlur.bind(this)}/>
                  </div>
              </div>
              <div className='comment-field'>
                  <span className='comment-field-name'>Content: </span>
                  <div className='comment-field-input'>
                      <textarea ref={ (textarea) => this.textarea=textarea} value={this.state.content}
                      onChange={this.handleContentChange.bind(this)}/>
                  </div>
              </div>
              <div className='comment-field-button'>
                  <button onClick={this.handleSubmit.bind(this)}>
                      Release
                  </button>
              </div>
          </div>
      );
  }
}
export default CommentInput;