import './SeasonDisplay.css'
import React from 'react';


//dic variable
const seasoncongif={
    summer:{
        text:"let's hit the beach",
        iconName:'sun'
    },
    winter:{
        text:'Burr it is cold!',
        iconName:'snowflake'
    }
};

//function to return season 'summer or winter'
const getSeason=(lat,month)=>{
    if(month>2 && month<9){
        return lat>0?'summer':'winter';
    }else{
        return lat>0?'winter':'summer';
    }
};


const SeasonDisplay=props=>{
    const season=getSeason(props.lat,new Date().getMonth());
    const {text,iconName}=seasoncongif[season];

    return(
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`}/>
            <h1>{text}</h1>
            <i className={`icon-right massive ${iconName} icon`}/>
        </div>
    );
};

export default SeasonDisplay;