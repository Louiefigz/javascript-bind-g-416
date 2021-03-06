const app = "I don't do much.";




const myProfile = {
  id: 1382,
  firstName: 'Akuna',
  lastName: 'Matata',
  friends: [],
  getFriends() {
    fetch('http://api.example.com/1382/friends')
      .then(function (response) {
        return response.json();
      })
      .then(function (friends) {
        this.friends = friends;
      })
  }
}

// refactor into this
// getFriends() {
//   const self = this;
//
//   fetch('http://api.example.com/1382/friends')
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (friends) {
//       self.friends = friends;
//     });
// }
//
// //And using binding
//
// getFriends() {
//   fetch('http://api.example.com/1382/friends')
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (friends) {
//       this.friends = friends;
//     }.bind(this));
// }
//
// //Using Arrow function to bind
//
// getFriends() {
//   fetch('http://api.example.com/1382/friends')
//     .then(response => response.json())
//     .then(friends => this.friends = friends);
// }
