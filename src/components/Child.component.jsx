import React from 'react';

class ReactChild extends React.Component {
    constructor(props) {
        super();
    }

    
    componentWillUnmount() {
        console.log('destroying component');
    }

    render() {
        const {children, text} = this.props;
        return (
            <div>
                {children}
                <p>{text}</p>
            </div>
        )
    }

}

export default ReactChild;