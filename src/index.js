import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'


function Hi(props){
  return <div className="main">
    <strong>Hello World</strong>
    <h1>Some Info</h1>
<ul>
<h2>name :{props.name}</h2> 
<h2>fname :{props.fname}</h2> 
<h2>title :{props.title}</h2> 
<h2>add :{props.add}{5 + 10}</h2> 

</ul>

  </div>
}
ReactDOM.render(<Hi name="Muaaz" fname="Abdul Qadir" title="Alone But Happy" add="{5+10}" />,document.querySelector("#root"))

