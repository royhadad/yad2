import React from 'react';
import {connect} from 'react-redux';

class SearchResults extends React.Component {
    state = {
        data: []
    }
    componentDidMount() {
        fetch('/api/feed')
            .then(res => res.json())
            .then((res) => {
                this.setState({ data: res.data });
            });
    }
    render() {
        return (
            <div className='results-list'>
                {
                    this.state.data.map((item, index) => {
                        return (
                            <div key={item} style={{ height: '500', border: '1px solid gray' }}>
                                {item}
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}

export default connect()(SearchResults);