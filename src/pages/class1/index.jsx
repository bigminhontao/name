import React from 'react';
import { Carousel, Collapse } from 'antd';

const contentStyle = {
  margin: 0,
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

function Class1() {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <div>
      <Carousel afterChange={onChange}>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
      <div style={{ height: 100 }}></div>
      <Collapse defaultActiveKey={['1']} onChange={onChange}>
        <Panel header="This is panel header 1" key="1">
          <p>{text}</p>
        </Panel>
        <Panel header="This is panel header 2" key="2">
          <p>{text}</p>
        </Panel>
        <Panel header="This is panel header 3" key="3">
          <p>{text}</p>
        </Panel>
      </Collapse>
    </div>
  );
}

export default Class1;
