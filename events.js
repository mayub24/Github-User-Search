// Instantiating the Class created in the http.js file so we can call
// the functions that were created inside the Github Class
const http = new Github;

// Same as above...we created a UI class with function, and now
// we will instantiate it to call function from that class
const interface = new ui;

// Adding events such as keyup, clicks, moveup, etc...
const searchUser = document.querySelector(`#searchUser`);
searchUser.addEventListener('keyup', () =>
{
    const userText = searchUser.value;

    if(userText !== "")
    {
        // Making an HTTP call
        http.getUser(userText).
        then((data) => {
            if(data.profile.message !== `Not Found`)
            {
                console.log(data);
                // Show Profile and Repos
                interface.showData();
                interface.blockData();
                interface.showProfile(data.profile);
                interface.showRepos(data.rep);
                // console.log(data.repos_url);
                interface.clearAlert();
            }
            else
            {
                // Show an alert
                interface.showData();
                interface.hideData();
                interface.showAlert(`User ${searchUser.value} not found!`, `alert alert-danger`);
                console.log(data);
                console.log(data.profile.message);
          }
        })
    }
    else
    {
        interface.removeData();
    }
});

