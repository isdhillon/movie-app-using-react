import React, { Component } from 'react'

export default class Pagination extends Component {
    
    render() {
        //props passed from main container
        let { noOfPages,currentPage,changeCurrentPage}=this.props;
        let pageNoArray=[]   
        //for on of pages
        for(let i=0;i<noOfPages;i++){
            pageNoArray.push(i+1)
        }
        return (
                <nav aria-label="..." className="col-2">
                            <ul className="pagination">

                                {   //if the pages match change the active property
                                    pageNoArray.map((pageNumber)=>{
                                        let additional=pageNumber===currentPage?"page-item active":"page-item"
                                        return(
                                            //to change the current page 
                                        <li className={additional} aria-current="page" onClick={()=>{changeCurrentPage(pageNumber)}}>
                                        <span className="page-link">{pageNumber}</span>
                                    </li>

                                        )
                                    })
                                }
                                {/**/}
                            </ul>
                        </nav>
           
        )
    }
}
