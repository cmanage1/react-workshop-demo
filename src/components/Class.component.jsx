import React from 'react';

class ReactClass extends React.Component {
    constructor(props){
        super();

        this.state = {
            count: null,
        }
    }

    componentDidMount(){
        console.log('COMPONENT DID MOUNT');
        console.log('COUNT', this.state.count);
    }

    componentDidUpdate() {
        console.log('COUNT', this.state.count);
    }
    

    render(){
        return(
            <div>
                <p> Class component counter: {this.state.count}</p>
                <button
                onClick={() => {
                    this.setState({count: this.state.count+1})
                }}
                >Click me</button>

            </div>
        )
    }
    
}

export default ReactClass;