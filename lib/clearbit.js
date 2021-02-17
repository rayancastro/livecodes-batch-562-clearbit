const authorization = "Bearer sk_11a996a530ab669bcc09d9285552e006";
// find the target of the input box and submit form
const form = document.querySelector("#clearbitForm");
const email = document.querySelector("#clearbitEmail");
// add listener to the form
form.addEventListener("submit", (event)=> {
  // prevent event default behavior .preventDefault()
  // console.log(event)
  event.preventDefault();

  const options = {
    headers: {
      'Authorization': authorization
    }
  }

  const emailAdress = email.value
  const url = `https://person.clearbit.com/v2/combined/find?email=${emailAdress}`



  fetch(url, options)

     // we get a http repsonse and convert it to a json
     .then(response => response.json())
     //  we then store this response in the data variable
     .then((data) => {
        console.log(data);
        // next we need to display the name, email, biolocation
        const name = data.person.name.fullName
        const email= data.person.email
        const bio = data.person.bio
        const location = data.person.location
        console.log(name);
        // now lets insert into the HTML. we need to selecet the element to insert
        const userName = document.querySelector('#userName')
        userName.innerText = name

        const userEmail = document.querySelector('#userEmail')
        userEmail.innerText = email

        const userBio = document.querySelector('#userBio')
        userBio.innerText = bio

        const userLocation = document.querySelector('#userLocation')
        userLocation.innerText = location
     });
   // when the form is submitted, send ajax request to the API
   // Read the Json that is returned and inject into the HTML
});




