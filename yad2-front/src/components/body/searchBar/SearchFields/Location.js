import React from 'react';

class Location extends React.Component{
    getPlaceHolderText(){
        return 'לדוגמא: באר שבע, רמות';
    }
    render(){
        return(
            <input placeholder={this.getPlaceHolderText()}></input>
        );
    }
}

export default Location;