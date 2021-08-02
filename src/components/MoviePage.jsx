import React, { Component } from 'react'
import Pagination from './Pagination'
import Genre from './Genre'
import Search from './Search'
import Limit from './Limit'
import Table from './Table'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

export default class MoviePage extends Component {
    //setting the state
    state={
        //genre object has id and name
        genres:[{id:1,name:"All Genres"}],
    currSearchText:"",
    currentPage:1,
    limit:4,
    cGenre:"All Genres"
    }
    //finding the input entered by user
    setCurrentText=(e)=>
    {
        let task=e.target.value
        
        this.setState({
            //assigning it to state
            currSearchText:task,
            
        })
    }
    //sort by rating
    sortByRating=(e)=>{
        //if class name matches
        let className=e.target.className;
        let sortedMovies;
        let {movies}=this.state
        if(className==="fas fa-sort-up"){
            //sort works using a function using a parmeter to sort the array eg dailyrentalrate in this case
            sortedMovies=movies.sort((movieObjA,movieObjB)=>{
                return movieObjA.dailyRentalRate-movieObjB.dailyRentalRate
            })
        }
        else{
            
            sortedMovies=movies.sort((movieObjA,movieObjB)=>{
                return movieObjB.dailyRentalRate-movieObjA.dailyRentalRate
            })
        }
        //setting the array in setstate
        this.setState({
            movies:sortedMovies
        })

    }
    //sorting on the basis of stock same logic as rate
    sortByStock=(e)=>{
        let className=e.target.className;
        let sortedMovies;
        let {movies}=this.state
        if(className==="fas fa-sort-up"){
            sortedMovies=movies.sort((movieObjA,movieObjB)=>{
                return movieObjA.numberInStock-movieObjB.numberInStock
            })
        }
        else{
            sortedMovies=movies.sort((movieObjA,movieObjB)=>{
                return movieObjB.numberInStock-movieObjA.numberInStock
            })
        }
        //setting the state
        this.setState({
            movies:sortedMovies
        })
    }
    //changing the page no-
    changeCurrentPage=(pageNumber)=>{
     //changing the page no
     this.setState({
        currentPage:pageNumber
     })
    }
    //changing the limit in set state
    setLimit=(e)=>{
        let currLimit=e.target.value;
        this.setState({
            limit:currLimit
        })
    }

    //changing the genre
    changeGenre=(genreSelected)=>{
        this.setState({
            cGenre:genreSelected,
            currSearchText:""
        })
    }
    //mounting the data of genre
    async componentDidMount(){
        let res=await fetch("https://react-backend101.herokuapp.com/genres")
  let jsonGenres= await res.json()
  this.setState({
    //updating the genres  
    genres:[...this.state.genres, ...jsonGenres.genres]
    })
}
    render() {
        //used from state
        let {currSearchText,currentPage,limit,genres,cGenre}=this.state;
        //passed by app.js
        let {movies,deleteEntry}=this.props;
        
        let filteredArr=movies;
        //sorting on the basis of cgenre
        if(cGenre!=="All Genres"){
            filteredArr=filteredArr.filter((movieObj)=>{
                return movieObj.genre.name===cGenre;
            })
        }
        //sorting on the basis of search text entered
        if(currSearchText!==""){
            filteredArr=movies.filter((movieObj)=>{
                //getting title from obj convert it to lower case
                let title=movieObj.title.trim().toLowerCase();
                //if matches return
                return title.includes(currSearchText.trim())
            })
        }
        //page no logic
        //getiing the no of pages
        let noOfPages=Math.ceil(filteredArr.length/limit);
        //setting starting index
        let si=(currentPage-1)*limit;
        //ending index
        let eidx=si+limit;
        //slicing the array
        filteredArr=filteredArr.slice(si,eidx)
        return (
            <div className="row">
                {/*nav bar */}
                   <Navbar></Navbar>
                   {/*genres*/}
                   <Genre changeGenre={this.changeGenre} genres={genres}></Genre>
                   <div className="col-9">
                       <div className="mb-1">
                           {/*new btn*/}
                       <Link to="/new" className="mb-1">
                            <button type="button" class="btn btn-primary">New</button>
                      </Link>
                       </div>
                       {/*search button*/}
                       <Search currSearchText={currSearchText} setCurrentText={this.setCurrentText}></Search>
                       {/*limit*/}
                       <Limit limit={limit} setLimit={this.setLimit}></Limit>
                       {/*table*/}
                       <Table filteredArr={filteredArr} sortByrating={this.sortByRating} sortByStock={this.sortByStock} deleteEntry={deleteEntry}></Table>
                       <div className="row">
                       {/*pagination*/}
                       <Pagination noOfPages={noOfPages}  currentPage={currentPage} changeCurrentPage={this.changeCurrentPage}></Pagination>
                       </div>
                   </div>
               </div>
                
            
        )
    }
}
