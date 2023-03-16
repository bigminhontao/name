import React, { Component } from 'react';

class MyFirstComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'My First Component',
    };
  }

  /**
   * react生命周期 挂载前
   */
  componentWillMount() {
    console.log('Component will mount');
  }
  /**
   * react生命周期 挂载后
   */
  componentDidMount() {
    console.log('Component did mount');
  }

  /**
   * react生命周期 更新前
   */
  componentWillUpdate() {
    console.log('Component will update');
  }

  /**
   * react生命周期 更新后
   */
  componentDidUpdate() {
    console.log('Component did update');
  }

  /**
   * react生命周期 卸载前
   */
  componentWillUnmount() {
    console.log('Component will unmount');
  }

  /**
   * react生命周期 卸载后 不存在
   */
  componentDidUnmount() {
    console.log('Component did unmount');
  }

  render() {
   
    return <div><div>{this.state.name}</div>
    <div>{this.props.name}</div>
    <div
          onClick={() => {
            this.setState({
              name: '鸡你太美',
            });
          }}
        >
          点我
        </div>
    
    </div>;
    
    





  }
}

export default MyFirstComponent;