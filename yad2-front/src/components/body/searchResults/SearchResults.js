import React from 'react';

class SearchResults extends React.Component {
    state={
        data:undefined
    }
    componentDidMount(){
        fetch('http://localhost:8080/api/feed').then((res)=>{
            this.setState({data: res});
            
        });
    }
    render() {        
        return (
            <div>
                <p>
                    {JSON.stringify(this.state.data)}
                    aaa
                </p>
            </div>
        );
    }
}

export default SearchResults;