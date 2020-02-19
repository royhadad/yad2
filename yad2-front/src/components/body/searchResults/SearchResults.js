import React from 'react';

class SearchResults extends React.Component {
    state = {
        data: undefined
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
            <div>
                <p>
                    {this.state.data}
                </p>
            </div>
        );
    }
}

export default SearchResults;