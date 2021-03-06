import React from 'react';
import Typewriter from 'typewriter-effect';


const TypeWriter = ({ texts }) => (
  <Typewriter
    options={{
      strings: texts,
      autoStart: true,
      loop: true,
      deleteSpeed: 70,
      wrapperClassName: 'head_tags'
    }}
  />
); 

export default TypeWriter;