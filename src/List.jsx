import React, {Component} from 'react';

class List extends Component {
    renderList() {
    const items = this.props.items.map(item => {
        return             <div key="{item.name}">
                               <img src={item.image} alt="sign" className="img"/>
                               <h3><b>{item.name}</b></h3>
                               <p>Dates: <i>{item.dates}</i></p>
                               <h5>Element: <i>{item.element}</i></h5>
                               <h5>Season: <i>{item.season}</i></h5>
                           </div>
    });

    return items;
  }

  render() {
    return (
      <div className="layout">
        {this.renderList()}
      </div>
    );
  }
}

export default List; 
