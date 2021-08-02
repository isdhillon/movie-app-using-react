import React, { Component } from 'react'

export default class Search extends Component {
    render() {
        //props passed from main container
        let {currSearchText,setCurrentText}=this.props;
        return (
            //settng the value of the current search task and handling the function
            <input type="search" value={currSearchText} onChange={setCurrentText} />
        )
    }
}
