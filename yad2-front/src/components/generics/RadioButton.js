import React from 'react';

export default ({isChecked})=>{
    return (
        <div className='radio-button__wrapper'>  
            <div className='outer-1' style={isChecked?{backgroundColor:'#ff7100'}:{}}>
                <div className='inner-1'>
                    &nbsp;
                </div>
                <div className='inner-2' style={isChecked?{backgroundColor:'#ff7100'}:{}}>
                    &nbsp;
                </div>
            </div>
        </div>
    );
}