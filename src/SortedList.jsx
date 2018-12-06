import React, { Component } from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import List from './List';

class SortedList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sort: "",
            sort_title: "Sort by"
        };
    }

    sortItem = (a,b) => {
        if (this.state.sort === 'alphabet') {
            return a.name.localeCompare(b.name);
        } else if (this.state.sort === 'month(descending)') {
            return b.month - a.month;
        }else if (this.state.sort === 'month(ascending)') {
            return a.month - b.month;
        } else {
            return a;
        }
    }

    onSort = (event) => {
        this.setState({
            sort: event.trim().toLowerCase(),
            sort_title:event.trim().toLowerCase()
    });
    }    

    render() {
        return (
            <div>
                <div className="sort">
                <span>Sort:</span>
                    <DropdownButton id="elementDropdown" title={this.state.sort_title}>
                        <MenuItem eventKey="alphabet" onSelect = {this.onSort}>Alphabet</MenuItem>
                        <MenuItem eventKey="month(ascending)" onSelect = {this.onSort}>Month(Ascending)</MenuItem>
                        <MenuItem eventKey="month(descending)" onSelect = {this.onSort}>Month(Descending)</MenuItem>
                        <MenuItem eventKey="none" onSelect = {this.onSort}>None</MenuItem>
                    </DropdownButton>
                </div>
                <List items = {this.props.items.slice(0).sort(this.sortItem)} />
            </div>
        );
    }
}

export default SortedList;
