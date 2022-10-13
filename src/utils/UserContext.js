import {User} from "../models/user"


//add api-call for fetching user by ID 
fetch("https://randomuser.me/api?results=2")
.then(function (response) {
    console.log("Response Data:", response);
    return response.json()
})
.then(function(json) {
    console.log("JSON Data:", json);
    //create user by userdata api request. Needs updating when APi is ready
    
    //Set and export current user
  
    var currentUser = new User(json.results)
})

.catch(function(error) {
    console.log(error);
})
console.log("After the fetch");


async function fetchUserData() {
  try {
      const response = await fetch("https://meFit.herokuapp.com/id=1212")
      const userData= await response.json()
      return userData
  }
  catch (error) {
      console.error("Error: ", error.message)
  }
}
