import React from "react";

class Item extends React.Component{
  render() {
    return (
        <li>
            {this.props.name},
            ${this.props.price}
        </li>

        // <li>
        //   My name is {this.props.name},
        //   I'm {this.props.age} years old.
        // </li>

    )
  }
}

class App extends React.Component {
  state = {
    items : [
        {id : 1, name : "Item1", price : 0.99},
        {id : 2, name : "Item2", price : 0.89},
    ]
  }

  nameRef = React.createRef();
  priceRef = React.createRef();

  add = () =>{
    let id = this.state.items.length + 1;
    let name = this.nameRef.current.value;
    let price = this.priceRef.current.value;
    this.setState({
      items : [
        ...this.state.items,
        {id, name, price}
      ]
      
    })
  }
  // state = {
  //   employee : [
  //         {id : 1, name : "Kyaw Kyaw", age : 23},
  //         {id : 2, name : "Maung Maung", age : 21},
  //   ]
  // }

  render() {
  return (
      <div>
        <h1>Hello React</h1>
        <ul>
          {/* <Item name = "Apple" price = "0.99" />
          <Item name = "Orange" price = "1.90"/> */}

          {this.state.items.map(i => {
            return (
              <Item 
                key = {i.id}
                name = {i.name}
                price = {i.price }
              />
            )
          })}
        </ul>

        <input type = "text" ref={this.nameRef} /><br />
        <input type = "text" ref={this.priceRef} /><br />


        {/* State Example */}
        {/* <ul>
          {this.state.employee.map(i => {
            return(
              <Item 
                name = {i.name}
                age = {i.age}
              />
            )
          })}
        </ul> */}

        <button onClick={this.add}>Add</button>

      </div>
  );
  }
 }
 export default App;