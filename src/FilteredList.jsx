import React, { Component } from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import SortedList from './SortedList';

class FilteredList extends Component {
    constructor(props) {
        super(props);

        //The state is just a list of key/value pairs (like a hashmap)
        //TODO (FilteredList): Add an additional state variable within this.state called "type" and set it to a default value
        this.state = {
            search: "",
            element: "",
            season: "",
            element_title: "Element",
            season_title: "Season"
        };
    }

    //Sets the state whenever the user types on the search bar
    onSearch = (event) => {
        this.setState({search: event.target.value.trim().toLowerCase()});
    }

        //TODO (FilteredList): Set the state of the "type" state variable depending on what is passed in
        onElementFilter = (event) => {
            this.setState({
                element: event.trim().toLowerCase(),
                element_title: event.trim().toLowerCase()
            });
        }

        onSeasonFilter = (event) => {
            this.setState({
                season: event.trim().toLowerCase(),
                season_title: event.trim().toLowerCase()
            });
        }

        //TODO (FilteredList): Change filterItem to take into account the "type" state variable when filtering
        filterItem = (item) => {
            return item.name.toLowerCase().search(this.state.search) !== -1 
                && (item.season.toLowerCase().search(this.state.season) !== -1 || this.state.season === 'all')
                && (item.element.toLowerCase().search(this.state.element) !== -1 || this.state.element === 'all');
        }

        render(){
            return (
                <div>
                    <input type = "text" placeholder = "Search" onChange = {this.onSearch} className="search"/>
                    <div className="filter">
                        <span>Filters:</span>
                        <DropdownButton id="elementDropdown" title={this.state.element_title}>
                            <MenuItem eventKey="all" onSelect = {this.onElementFilter}>All</MenuItem>
                            <MenuItem eventKey="fire" onSelect = {this.onElementFilter}>Fire</MenuItem>
                            <MenuItem eventKey="water" onSelect = {this.onElementFilter}>Water</MenuItem>
                            <MenuItem eventKey="earth" onSelect = {this.onElementFilter}>Earth</MenuItem>
                            <MenuItem eventKey="air" onSelect = {this.onElementFilter}>Air</MenuItem>
                        </DropdownButton>
                        <DropdownButton id="elementDropdown" title={this.state.season_title}>
                            <MenuItem eventKey="all" onSelect = {this.onSeasonFilter}>All</MenuItem>
                            <MenuItem eventKey="spring" onSelect = {this.onSeasonFilter}>Spring</MenuItem>
                            <MenuItem eventKey="summer" onSelect = {this.onSeasonFilter}>Summer</MenuItem>
                            <MenuItem eventKey="autumn" onSelect = {this.onSeasonFilter}>Autumn</MenuItem>
                            <MenuItem eventKey="winter" onSelect = {this.onSeasonFilter}>Winter</MenuItem>
                        </DropdownButton>
                    </div>
                    <SortedList items = {this.props.items.filter(this.filterItem)}/>
                </div>
          );
        }
    }

    export default FilteredList;
