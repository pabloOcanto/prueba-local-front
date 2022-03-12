import React from 'react';

import Select from './Select';

const Regions =({count,props,cities})=>{

    let regions=[]
    for (var i = 0; i < count; i++) {
        regions.push(<Select key={i} id={"region_"+i} props={props} value={props.values["region_"+i]}  elements={cities}/>)
        regions.push(<br/>); 
        
    }

    return(
        regions.map(elem=>elem)

    )
}

export default Regions;