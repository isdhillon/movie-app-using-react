import './App.css';
import MoviePage from './components/MoviePage';
import Login from './components/Login'
import New from './components/New'
import {Route,Switch} from "react-router-dom"
import React, { Component } from 'react'

export default class App extends Component {
//movies 
  state={
    movies:[],
    
}
//movies are set to the state
setMovies=(array)=>{
  this.setState({
    movies:array
  })
}
//delete entry
deleteEntry=(id)=>{
  //make a seprate array thta does not have the selected id
  let filteredArr=this.state.movies.filter((movieObj)=>{
      return movieObj._id!==id
  })
  //set the array
  this.setState({
      movies:filteredArr
  })
}
//data is fecth from link
async componentDidMount(){
  let res=await fetch("https://react-backend101.herokuapp.com/movies")
  //json file
  let jsonMovies= await res.json()
  this.setState({
    //set to the state
      movies:jsonMovies.movies
  })
}
//add movie
addMovie=(obj)=>{
  //adding variable from the object
  let {title,genre,stock,rate}=obj;
  //genre obj
  let genreObj = [{ _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
    { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" }
    ];
    //assign genre which matches
    for(let i=0;i<genreObj.length;i++){
      if(genreObj[i].name===genre){
        genre=genreObj[i]
      }
    }
    //assign id as date.now
    let movieObj={
      _id:Date.now(),
      title,
      genre,
      //daily rental as rate
      dailyRentalRate:rate,
      //number in stcok as stock
      numberInStock:stock

    }
    //make a copy of array and add the object at the last
    let copyofMovies=[...this.state.movies,movieObj]
    this.setState({
      //set the state
      movies:copyofMovies
    })
}
  render() {
    return (
      <>
      {/*switch is used with route so that only specifc route is selected */}
      <Switch>
        {/*/new route to enter a new entry */}
        <Route path="/new" render={
          (props) => {
            {/*pass the route props along with add movie function */}
            return (<New {...props}
              addMovie={this.addMovie}
            ></New>)
          }
        }></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/" render={(props) => {
              {/*add route props movies and set movies delete function to movie page */}
          return (<MoviePage {...props}
            deleteEntry={this.deleteEntry}
            movies={this.state.movies}
            setMovies={this.setMovies}></MoviePage>)
        }}></Route>
      </Switch>
    </>
    )
  }
}
