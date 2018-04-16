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
        <div style={{width: '80%'}}>
          <ul style={{padding: 0}}>{this.props.users.map(user => (
            <div className='person'>
              <img className='image' src={user.photo}></img>
              <p style={{color: 'black', fontSize:'24px', fontWeight:'bold'}}>{user.name.charAt(0).toUpperCase() + user.name.slice(1)}</p>
              <p>Phone Number: {user.number}</p>
              <p>Age: {user.age}</p>
              <p style={{color: 'grey'}}>Bio: {user.bio}</p>
            </div>
          )
          )}</ul>
        </div>
      );
    } else {
      return(
        <div>
          <img src='https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif'></img>
        </div>
      )
    }

  }
}

export default List;
