import React from 'react';
import MyFirstComponent from '../../component/myfirst';
import MyTwoComponent from '../../component/mysecond';
function Class2() {
  return (
    <div>
      <MyFirstComponent propsName={'propsName'} />
      <MyTwoComponent propsName={'propsName 1'} />
      <MyTwoComponent propsName={'propsName 2'} />
      <MyTwoComponent propsName={'propsName 3'} />
    </div>
  );
}

export default Class2;
