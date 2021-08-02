import React, { Component } from 'react'
import Navbar from './Navbar'
//for adding new record
export default class New extends Component {
    //setting object
    state={
        data:{
            title:"",
            genre:"",
            stock:"",
            rate:""
        }
    }
    //on form submit the data is given to add movie function in app.js
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.addMovie(this.state.data)
    }
    //handle change is used to store the info which is typed in the form
    handleChange=(e)=>{
        //gett the id of the html tag
        let id=e.currentTarget.id;
        console.log(id);
        //value
        let value=e.target.value;
        //make copy of the object
        let newObject={...this.state.data};
        console.log(newObject);
        //assigning html tag the value acc to the id
        newObject[id]=value;
            //setting the new object
        this.setState({
            data:newObject
        })
    }
    render() {
        //this is stored in form of object
        let {title,genre,stock,rate}=this.state.data;
        return (
        <>
            {/*nav bar */}
            <Navbar></Navbar>
            <div className="mt-5">
            <div className="row">
            <div className="col-2"></div>
            <div className="col-9">
                {/*submit form*/}
            <form onSubmit={this.handleSubmit}>
                <div class="form-group">
                    {/*title value*/}
                    <label for="Enter title">Title</label>
                    <input type="text" class="form-control" id="title" value={title} onChange={this.handleChange} />
                    
                </div>
                {/*genre value*/}
                <div class="form-group">
                    <label for="Genre">Genre</label>
                    <select id="genre" class="form-control" value={genre} onChange={this.handleChange}>
                        <option>Action</option>
                        <option>Comedy</option>
                        <option>Thriller</option>
                    </select>
                    
                </div>
                {/*no of stock value*/}
                <div class="form-group">
                    <label for="Number in stock">Number in stock</label>
                    <input type="number" id="stock" class="form-control" value={stock} onChange={this.handleChange}/>
                    
                </div>
                {/*rate value*/}
                <div class="form-group">
                    <label for="rate">Rate</label>
                    <input type="number" id="rate" class="form-control" value={rate} onChange={this.handleChange}/>
                    
                </div>
                {/*submit button*/}
                <button type="submit" className="btn btn-primary" value="Submit">Save</button>
            </form>
            </div>
            </div>
            </div>
        </>
        )
    }
}
