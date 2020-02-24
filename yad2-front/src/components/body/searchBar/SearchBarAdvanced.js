import React from 'react';
import {deriveXfromViewPortX, deriveYfromViewPortY} from '../../../utility/calculatePositions';
import onClickOutside from 'react-onclickoutside';

class SearchBarAdvanced extends React.Component {
    handleClickOutside = this.props.toggleShouldLoadAdvancedSearch;  
    render(){
        const parentRect = this.props.parentRect;
        const style={
            left: deriveXfromViewPortX(parentRect.left),
            top: deriveYfromViewPortY(parentRect.bottom),
            width: parentRect.width,
        };
        return (
            <div className='search-bar__advanced__wrapper' style={style}>
                im advanced!!!!
            </div>
        );
    }
}

export default onClickOutside(SearchBarAdvanced);