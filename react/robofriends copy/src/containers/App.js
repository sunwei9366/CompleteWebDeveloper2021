import React, { Component } from 'react';
import CardList from '../components/CardList'
import {robots} from '../robots'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import ErrorBoundary from '../components/ErrorBoundary'


 class App extends Component{

    constructor (){
        super();
        this.state = {
            robots: [],
            searchField: ''
        }

        
    }


    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then(response=>{
            return response.json();
        }).then(users => {
            this.setState({robots:users})
        })
        //this.setState({robots:robots});
    }


    onSearchChange = (event) =>{
        this.setState({searchField:event.target.value})
       
    }


    render () {

        const filteredRobots = this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        });

        if(this.state.robots.length === 0){
            return <h1>Loading</h1>;
        }
        else{
            return (

                    <div className='tc'>
                        <h1 className="f2 tc">RoboFriends</h1>
                        <SearchBox searchChange={this.onSearchChange}></SearchBox>
                        <Scroll>
                            <ErrorBoundary>
                             <CardList robots={filteredRobots}></CardList>
                            </ErrorBoundary>
                        </Scroll>
                    </div>
                );
            
       }
    }
 }  

export default App;
