import React, { Component, PropTypes } from 'react'

class About extends Component {
    constructor(props) {
        super(props);
        this.state = { counter: 1,data:[1,2,3,4,5,6,7,8,9] };
      }
      componentDidMount () {
          this.setState({counter: 2 });
      }

      counterAa(){
        this.setState({counter:this.state.counter+1});
      }
      
      renderNode(){
        let {counter} = this.state;
        var nodes = this.state.data.map(function(item,index){
            return <li key={index}> Counter:{counter},index:{index},data:data-{item}</li>
        })
        return(<div>
            <button onClick={this.counterAa.bind(this)}>AAA</button>
            Counter:{this.state.counter}
            <ul>
             {nodes}
             </ul>
            </div>) 
      }
      render() {
        
        return this.renderNode();
      }
}

About.propTypes = {

}

export default About