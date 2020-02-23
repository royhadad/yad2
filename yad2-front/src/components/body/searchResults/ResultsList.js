import React from 'react';

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
                    this.state.data.map((item) => {
                        return (
                            <div style={{ height: '500', border: '1px solid gray' }}>
                                {item}
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}

export default SearchResults;