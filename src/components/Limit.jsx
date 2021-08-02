import React, { Component } from 'react'

export default class Limit extends Component {
    render() {
        //this is used to change he limit of movies in a container
        //limit and set limit are props passed from main container
        let {limit,setLimit}=this.props;
        return (
            //set limit function is used to change he limit of the page
            <input type="number" className="col-1"  value={limit} onChange={setLimit} />
        )
    }
}
