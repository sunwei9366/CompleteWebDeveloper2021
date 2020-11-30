import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList'
import {robots} from '../robots'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import ErrorBoundary from '../components/ErrorBoundary'


 function App (){

    // constructor (){
    //     super();
    //     this.state = {
    //         robots: [],
    //         searchField: ''
    //     }     
    // }

    const [robots, setRobots] = useState([]);
    const [searchField, setSearchField] = useState('');
    const [count, setCount] = useState(0);

    // componentDidMount(){
    //     fetch('https://jsonplaceholder.typicode.com/users').then(response=>{
    //         return response.json();
    //     }).then(users => {
    //         this.setState({robots:users})
    //     })
    //     //this.setState({robots:robots});
    // }

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users').then(response=>{
            return response.json();
        }).then(users => {
            setRobots(users)
        })
    }, [count])

        const onSearchChange = (event) =>{
            setSearchField(event.target.value)
            
            }
        const filteredRobots = robots.filter(robots =>{
            return robots.name.toLowerCase().includes(searchField.toLowerCase());
        });

        if(robots.length === 0){
            return <h1>Loading</h1>;
        }
        else{
            return (

                    <div className='tc'>
                        <h1 className="f2 tc">RoboFriends</h1>
                        <button onClick={()=>setCount(count+1)}>Click Me</button>
                        <SearchBox searchChange={onSearchChange}></SearchBox>
                        <Scroll>
                            <ErrorBoundary>
                             <CardList robots={filteredRobots}></CardList>
                            </ErrorBoundary>
                        </Scroll>
                    </div>
                );
            
       }
    
 }  

export default App;
