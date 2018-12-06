import React, { Component } from 'react';
import './App.css';
import FilteredList from './FilteredList';
import Aries from './aries.png';
import Taurus from './taurus.png';
import Gemini from './gemini.png';
import Cancer from './cancer.png';
import Leo from './leo.png';
import Virgo from './virgo.png';
import Libra from './libra.png';
import Scorpio from './scorpio.png';
import Sagittarius from './sagittarius.png';
import Capricorn from './capricorn.png';
import Aquarius from './aquarius.png';
import Pisces from './pisces.png';
//TODO (FilteredList): create a produce list using the 'const' variable keyword
/*
This list of produce that is passed into the FilteredList component.
Notice that it is a list of javascript objects where {key: value}.
*/
const signs = [
    { name: "Aries", element: "Fire", season: "Spring", month: 4, dates: "March 21 - April 19", image: Aries },
    { name: "Taurus", element: "Earth", season: "Spring", month: 5, dates: "April 20 - May 20", image: Taurus },
    { name: "Gemini", element: "Air", season: "Spring", month: 6, dates: "May 21 - June 20", image: Gemini },
    { name: "Cancer", element: "Water", season: "Summer", month: 7, dates: "June 21 - July 22", image: Cancer},
    {name: "Leo", element: "Fire", season: "Summer", month: 8, dates: "July 23 - August 22", image: Leo},
    {name: "Virgo", element: "Earth", season: "Summer", month: 9, dates: "August 23 - September 21", image: Virgo},
    {name: "Libra", element: "Air", season: "Autumn", month: 10, dates: "September 22 - October 23", image: Libra},
    {name: "Scorpio", element: "Water", season: "Autumn", month: 11, dates: "October 24 - November 21", image: Scorpio},
    {name: "Sagittarius", element: "Fire", season: "Autumn", month: 12, dates: "November 22 - December 21", image: Sagittarius},
    {name: "Capricorn", element: "Earth", season: "Winter", month: 1, dates: "December 22 - January 19", image: Capricorn},
    {name: "Aquarius", element: "Air", season: "Winter", month: 2, dates: "January 20 - February 18", image: Aquarius},
    {name: "Pisces", element: "Water", season:"Winter", month: 3, dates: "February 19 - March 20", image: Pisces},
];

class App extends Component {
    render() {
        return (
			<div className="App">
                <h1>Zodiac Search</h1>
                <FilteredList items={signs}/>
            </div>
        );
    }
}

export default App;