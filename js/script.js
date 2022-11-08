// Get Request

function getData() {
    console.log('three');
    let url = "https://randomuser.me/api";

    const request = new XMLHttpRequest();
    request.onload = function() {
        if(this.readyState === 4 && this.status === 200) {
            console.log(request.responseText);
            const responseObject = JSON.parse(request.responseText);
            console.log(responseObject);
            document.getElementById('avatar');
            avatar.src = responseObject.results[0].picture.large;
            document.getElementById('come').innerHTML = 
            JSON.parse (this.responseText).results[0].gender;
            document.getElementById('cone').innerHTML = 
            JSON.parse (this.responseText).results[0].name.title;
            document.getElementById('cop').innerHTML = 
            JSON.parse (this.responseText).results[0].name.first;
            document.getElementById('cos').innerHTML = 
            JSON.parse (this.responseText).results[0].name.last;
            document.getElementById('cost').innerHTML = 
            JSON.parse (this.responseText).results[0].location.street.number;
            document.getElementById('cosh').innerHTML = 
            JSON.parse (this.responseText).results[0].location.street.name;
            document.getElementById('cov').innerHTML = 
            JSON.parse (this.responseText).results[0].location.city;
            document.getElementById('cow').innerHTML = 
            JSON.parse (this.responseText).results[0].location.state;
            document.getElementById('cows').innerHTML = 
            JSON.parse (this.responseText).results[0].location.country;
            document.getElementById('coro').innerHTML = 
            JSON.parse (this.responseText).results[0].location.postcode;
            document.getElementById('coros').innerHTML = 
            JSON.parse (this.responseText).results[0].location.coordinates.latitude;
            document.getElementById('coross').innerHTML = 
            JSON.parse (this.responseText).results[0].location.coordinates.longitude;
            document.getElementById('corosis').innerHTML = 
            JSON.parse (this.responseText).results[0].location.timezone.offset;
            document.getElementById('corosis1').innerHTML = 
            JSON.parse (this.responseText).results[0].location.timezone.description;
            document.getElementById('corosis2').innerHTML = 
            JSON.parse (this.responseText).results[0].email;
            document.getElementById('corosis3').innerHTML = 
            JSON.parse (this.responseText).results[0].login.uuid;
            document.getElementById('corosis4').innerHTML = 
            JSON.parse (this.responseText).results[0].login.username;
            document.getElementById('corosis5').innerHTML = 
            JSON.parse (this.responseText).results[0].login.password;
            document.getElementById('corosis6').innerHTML = 
            JSON.parse (this.responseText).results[0].login.salt;
            document.getElementById('corosis7').innerHTML = 
            JSON.parse (this.responseText).results[0].login.md5;
            document.getElementById('corosis8').innerHTML = 
            JSON.parse (this.responseText).results[0].login.sha1;
            document.getElementById('corosis9').innerHTML = 
            JSON.parse (this.responseText).results[0].login.sha256;
            document.getElementById('corosis10').innerHTML = 
            JSON.parse (this.responseText).results[0].dob.date;
            document.getElementById('corosis11').innerHTML = 
            JSON.parse (this.responseText).results[0].dob.age;
            document.getElementById('corosis12').innerHTML = 
            JSON.parse (this.responseText).results[0].registered.date;
            document.getElementById('corosis13').innerHTML = 
            JSON.parse (this.responseText).results[0].registered.age;
            document.getElementById('corosis14').innerHTML = 
            JSON.parse (this.responseText).results[0].phone;
            document.getElementById('corosis15').innerHTML = 
            JSON.parse (this.responseText).results[0].cell;
            document.getElementById('corosis16').innerHTML = 
            JSON.parse (this.responseText).results[0].id.name;
            document.getElementById('corosis17').innerHTML = 
            JSON.parse (this.responseText).results[0].id.value;
            document.getElementById('btn').addEventListener('click', getData)
            
            // started using loop

            for(let i = 0; i < results.lenght; i++)
            console.log(results[i]);
            
            

            
// let avatar = document.getElementById('avatar');
// let fullname = document.getElementById('fullname');
// let username = document.getElementById('username');
// let email = document.getElementById('email');
// let city = document.getElementById('city');
// let offset = document.getElementById('offset');
// let gender = document.getElementById('gender');
// let btn = document.getElementById('btn');

// btn.addEventListener("click", function() {
//   fetch(url)
//     .then(handleErrors)
//     .then(parseJSON)
//     .then(updateProfile)
//     .catch(printError)
// });

// function handleErrors (res){
//   if(!res.ok){
//     throw error(this.status);
//   }
//   console.log(res);
//   return res;
// }

// function parseJSON (res){
//   return res.json();
// }

// function updateProfile (profile){
//   avatar.src = profile.results[0].picture.medium;
//   fullname.innerHTML = profile.results[0].name.first +" "+profile.results[0].name.last; 
//   username.innerHTML = profile.results[0].login.username; 
//   email.innerHTML = profile.results[0].email;
//   city.innerHTML = profile.results[0].location.city;
//   offset.innerHTML = responseObject.results.timezone[0].timezone.offset;
//   gender.innerHTML = profile.results[0].gender;
//   return 1;
// }

// function printError (error){
//   console.log(error);
// }
        }
    };
    request.open('GET', url, true);
    request.send();
};
getData();