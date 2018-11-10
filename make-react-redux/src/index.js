import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Content from './Content';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
// import {connect} from 'react-redux';
// import PropTypes from 'prop-types';

const themeReducer = (state, action) => {
  if (!state) return {
    themeColor: 'blue'
  };
  switch (action.type) {
    case 'CHANGE_COLOR':
      return { ...state, themeColor: action.themeColor };
    default:
      return state;
  }
};

const store = createStore(themeReducer);

class Index extends Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
      </div>
    );
  }
}
// /**
//  * 环境中已经注入了 React-redux，你可以直接使用 connect，或者 ReactRedux.connect
//  */
//
// const usersReducer = (state, action) => {
//   if(!state) {
//     return [];
//   }
//   switch(action.type) {
//     case 'ADD_USER':
//       return [
//         ...state,
//         action.user
//       ];
//     case 'DELETE_USER':
//       return [...state.slice(0, action.index), ...state.slice(action.index+1)];
//     case 'UPDATE_USER':
//       return [...state.slice(0, action.index), {...state[action.index], ...action.user},...state.slice(action.index+1)];;
//     default:
//       return state;
//   }
// };
// const store = createStore(usersReducer);
// class User extends Component {
//   handleDeleteUser(index) {
//     if(this.props.onDeleteUser) {
//       this.props.onDeleteUser(index);
//     }
//   }
//   render () {
//     const {user} = this.props;
//     return (
//       <div>
//         <div>Name: {user.username}</div>
//         <div>Age: {user.age}</div>
//         <div>Gender: {user.gender}</div>
//         <button onClick={this.handleDeleteUser.bind(this, this.props.index)}>删除</button>
//       </div>
//     )
//   }
// }
//
// class UsersList extends Component {
//   static propTypes = {
//     onAddUser: PropTypes.func,
//     onDelUser: PropTypes.func,
//     users: PropTypes.array
//   }
//   constructor() {
//     super();
//     this.state = {
//       username: '',
//       age: 18,
//       gender: 'male'
//     }
//   }
//   handleInputChange(e) {
//     const name = e.target.name;
//     if(name === 'age') {
//       this.setState({
//         [name]: parseInt(e.target.value)
//       });
//     } else {
//       this.setState({
//         [name]: e.target.value
//       });
//     }
//   }
//   handleAddUser(user) {
//     if(this.props.onAddUser) {
//       this.props.onAddUser(user);
//     }
//   }
//   handleDeleteUser(index) {
//     if(this.props.onDeleteUser) {
//       this.props.onDeleteUser(index);
//     }
//   }
//   render () {
//     return (
//       <div>
//         {/* 输入用户信息，点击“新增”按钮可以增加用户 */}
//         <div className='add-user'>
//           {/*注意别忘了输name属性*/}
//           <div>Username: <input type='text' name="username" value={this.state.username} onChange={this.handleInputChange.bind(this)}/></div>
//           <div>Age: <input type='number'name="age" value={this.state.age} onChange={this.handleInputChange.bind(this)}/></div>
//           <div>Gender:
//             <label>Male: <input type='radio' name='gender' value='male' onChange={this.handleInputChange.bind(this)} /></label>
//             <label>Female: <input type='radio' name='gender' value='female' onChange={this.handleInputChange.bind(this)} /></label>
//           </div>
//           <button onClick={this.handleAddUser.bind(this, this.state)}>增加</button>
//         </div>
//         {/* 显示用户列表 */}
//         <div className='users-list'>{
//           this.props.users.map((user, index) => <User user={user} key={index} index={index}
//                                                       onDeleteUser={this.handleDeleteUser.bind(this)}/>)
//         }</div>
//       </div>
//     )
//   }
// }
// const mapStateToProps = (state) => {
//   return {
//     users: state
//   }
// }
// const mapDispatchToProps = (dispatch) => {
//   return {
//     onAddUser: (user) => {
//       dispatch({
//         type: 'ADD_USER',
//         user: user
//       });
//     },
//     onDeleteUser: (index) => {
//       dispatch({
//         type: 'DELETE_USER',
//         index: index
//       });
//     }
//   }
// }
// UsersList = connect(mapStateToProps, mapDispatchToProps)(UsersList);
ReactDOM.render(<Provider store={store}>
  <Index />
</Provider>, document.getElementById('root'));
