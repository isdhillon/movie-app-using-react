import React, { Component } from 'react'

export default class Table extends Component {
    render() {
        //props passed from main container
        let {filteredArr,sortByRating,sortByStock,deleteEntry}=this.props
        return (
            <table className="table"> 
                           <thead>
                               <tr>
                                   <th scope="col">#</th>
                                   <th scope="col">Title</th>
                                   <th scope="col">Genre</th>
                                   <th scope="col">
                                       {/*function to sort by stocks*/}
                                       <i className="fas fa-sort-up" onClick={sortByStock}></i>
                                       Stock
                                       <i className="fas fa-sort-down" onClick={sortByStock}></i>
                                       </th>
                                   <th scope="col">
                                       {/*function to sort by rates*/}
                                       <i className="fas fa-sort-up"onClick={sortByRating}></i>
                                       Rate
                                       <i className="fas fa-sort-down"onClick={sortByRating}></i>
                                       </th>
                               </tr>
                           </thead>
                           <tbody>
                           {
                               //ampping the filter array to get details of the table
                    filteredArr.map((movieObj)=>{
                        return (<tr scope="row" key ={movieObj._id}>
                            <td></td>
                            <td>{movieObj.title}</td>
                            <td>{movieObj.genre.name}</td>
                            <td>{movieObj.numberInStock}</td>
                            <td>{movieObj.dailyRentalRate}</td>
                            {/*if delete button is clicked the entry is deleted based on the id value*/}
                            <td><button type="button" className="btn btn-danger"onClick={()=>{deleteEntry(movieObj._id)}} >Delete</button></td>
                        </tr>)

                    })
                }
                           </tbody>
                       </table>
        )
    }
}
