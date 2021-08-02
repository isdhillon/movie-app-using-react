import React, { Component } from 'react'

export default class Genre extends Component {
    render() {
        {/*genres and change genre is passed as props from the main container */}
        let {genres,changeGenre}=this.props;
        return (
            //genre html
            <div className="col-3">
                    <ul className="list-group">
                        { //mapping genre with object and assignng key and name to genre
                            genres.map((cgObj)=>{
                                //chnage gnere function is used to sort the array on the basis of genre
                                return (<li className="list-group-item" key={cgObj.id} onClick={()=>{changeGenre(cgObj.name)}}>{cgObj.name}</li>)
                            })
                        }
                    </ul>
            </div>
        )
    }
}
