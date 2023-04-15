import {Component} from 'react';

class News extends Component{
    constructor(props){
        super(props)

        this.state={
            count: 0
        }
    }

    onIncrement = ({count}) =>{
        this.setState(item => ({
            count : item.count +1

        })
        )
        
    }


    onRestart = ({count}) => {
        this.setState({count : 0})
    }
    render() {

        return(
            <div>
                <h1>{this.props.name}</h1>
                <h2>{this.state.count}</h2>
                <button onClick={this.onIncrement}>+</button>
                <button onClick={this.onRestart}>O</button>
            </div>
        )
    }
}

export default News;

