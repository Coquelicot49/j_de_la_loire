import React, { useEffect, useState } from 'react';
import { useFetch } from '../../hooks/useFetch';


const MyComponent = () => {

    const data = useFetch('/');
 
return ( 
    <div>

  <div> {data ? ( <p>{data.message}</p> ) : ( <p>Loading data...</p> )} </div>
<div> test hello </div>

</div>
  );
};

export default MyComponent;