import React from 'react';
import './Profile.css';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.user.name,
      age: props.user.age, //can use props without this keyword because constructor(props)
      pet: props.user.pet
      //although app.js already have the states, it is better we declare local state so it wont keep render eveyrthing under app js
    };
  }

  onFormChange = event => {
    switch (
      event.target.name //htmlFor is the name propertise
    ) {
      case 'user-name':
        this.setState({ name: event.target.value });
        break;
      case 'user-age':
        this.setState({ age: event.target.value });
        break;
      case 'user-pet':
        this.setState({ pet: event.target.value });
        break;
      default:
        return;
    }
  };

  onProfileUpdate = data => {
    fetch(`http://localhost:3000/profile/${this.props.user.id}`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Authorization: window.sessionStorage.getItem('token')
      },
      body: JSON.stringify({ formInput: data })
    })
      .then(resp => {
        if (resp.status === (200 || 304)) {
          //304 is cached response
          this.props.toggleModal();
          this.props.loadUser({ ...this.props.user, ...data });
        }
      })
      .catch(console.log);
  };

  render() {
    const { isProfileOpen, toggleModal, user } = this.props;
    const { name, age, pet } = this.state;

    return (
      <div className="profile-modal">
        <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center bg-white">
          <main className="pa4 black-80 w-80">
            <img
              src="http://tachyons.io/img/logo.jpg"
              className="h3 w3 dib"
              alt="avatar"
            />
            <h1>{this.state.name}</h1>
            <h4>
              Images Submitted:
              {user.entries}
            </h4>
            <p>
              Memeber since:
              {user.joined}
            </p>
            <hr />
            <label className="mt2 fw6" htmlFor="user-name">
              Name:
            </label>
            <input
              onChange={this.onFormChange}
              className="pa2 ba w-100"
              placeholder="john"
              type="text"
              name="user-name"
              id="name"
            />
            <label className="mt2 fw6" htmlFor="user-age">
              Age:
            </label>
            <input
              onChange={this.onFormChange}
              className="pa2 ba w-100"
              placeholder="56"
              type="text"
              name="user-age"
              id="age"
            />
            <label className="mt2 fw6" htmlFor="user-age">
              Pet:
            </label>
            <input
              onChange={this.onFormChange}
              className="pa2 ba w-100"
              placeholder="dragon"
              type="text"
              name="user-pet"
              id="pet"
            />
            <div
              className="mt4"
              style={{ display: 'flex', justifyContent: 'space-evenly' }}
            >
              <button
                className="b pa2 grow pointer hover-white w-40 bg-light-blue b--black-20"
                onClick={() => {
                  this.onProfileUpdate({ name, age, pet });
                }}
              >
                Save
              </button>
              <button
                className="b pa2 grow pointer hover-white w-40 bg-light-red b--black-20"
                onClick={toggleModal}
              >
                Cancel
              </button>
            </div>
          </main>
          <div className="modal-close" onClick={toggleModal}>
            &times;
            {/* this is a html entity(reserve character) that display special character*/}
          </div>
        </article>
      </div>
    );
  }
}

export default Profile;
