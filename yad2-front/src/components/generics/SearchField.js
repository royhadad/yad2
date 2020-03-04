import React from 'react';

class SearchField extends React.Component{
    render(){
        const classForEmptyMetaText = this.props.metaText===''?'search-field__invisible-meta-text':'';
        const metaText = this.props.metaText===''?'.':this.props.metaText;
        return (
            <div className='search-field__wrapper'>
                <p className={classForEmptyMetaText}>{metaText}</p>
                {this.props.selectorJSX}
            </div>
        );
    }
}

export default SearchField;