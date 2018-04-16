import React from 'react';

class List extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      blah: 'blah'
    };
  }


  componentDidMount(){
    this.props.fetchUsers();
  }

  render(){
    if(this.props.users){
      return(
        <div>
          <ul>{this.props.users.map(user => (
            <li>
              <img src={user.photo}></img>
              <p>Name: {user.name}</p>
              <p>Phone Number: {user.number}</p>
              <p>Age: {user.age}</p>
            </li>
          )
          )}</ul>
        </div>
      );
    } else {
      return(
        <div>loading</div>
      )
    }

  }
}

export default List;
