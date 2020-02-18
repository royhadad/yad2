import React from 'react';
import {deriveXfromViewPortX, deriveYfromViewPortY} from '../../../utility/calculatePositions';

class SearchBarAdvanced extends React.Component {
    
    
    
    render(){
        const parentRect = this.props.parentRect;
        const style={
            left: deriveXfromViewPortX(parentRect.left)+'px',
            top: deriveYfromViewPortY(parentRect.bottom)+'px',
            width: parentRect.width+'px',
        };
        return (
            <div className='search-bar__advanced__wrapper' style={style}>
                im advanced!!!!
            </div>
        );
    }
}

export default SearchBarAdvanced;