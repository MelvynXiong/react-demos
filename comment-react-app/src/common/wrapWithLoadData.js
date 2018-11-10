import React, {Component} from 'react';
export default (WrappedComponent, name) => {
  class LocalStorageActions extends Component {
    constructor() {
      super();
      this.state = {
        data: null
      }
    }
    componentWillMount() {
      let data = localStorage.getItem(name);
      //因为要满足data有可能是json也有可能是字符串
        this.setState({
          data: JSON.parse(data)
        });
    }
    saveData(data) {
        localStorage.setItem(name, JSON.stringify(data));
    }
    render() {
      return (<WrappedComponent data={this.state.data}
            saveData={this.saveData.bind(this)}
                                //把其他参数原封不动地传进去
                                {...this.props}/>);
    }
  }
  return LocalStorageActions;
};
