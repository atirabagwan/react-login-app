import React from 'react';

const MyComponent = ({props}) => {
    return (
       <div className='container'>
        {props.map(ele => {
          const {id, category, name} = ele
        return(
          <div key = {id} >
            <h1>Name : {name}</h1>
            <p>Category : {category}</p>
          </div>
        )
      })}
    </div>
       
    );
}
export default MyComponent
