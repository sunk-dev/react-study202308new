// rafce

import React from 'react';
import Card from './components/UI/Card';

const Hello = (props) => {
  console.log('Hello Component!');
  console.log(props);

  return (
    [<div></div>,
    <p></p>]
  );

  // return (
  //   <Card className='rectangle'>
  //     <div>
  //       {props.children}
  //       Hello React
  //     </div>
  //   </Card>
  // );
};

export default Hello;
