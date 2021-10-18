// Creating UI after user has been entered
class ui
{
    constructor()
    {
        this.profile = document.querySelector(`#profile`);
    }

    showProfile(user)
    {
        // Creating HTML code that will be put inside profile in main.html
        // console.log(user);
        document.querySelector(`#profile`).innerHTML =
        `
        <div class="card card-body mb-3">
        
        <div class="row" style="float: right;">
        
        <!-- md-3 points to how many columns will be taken up with the elements inside that div [therefore, img and link are both taking up 3 columns of space] -->

            <div class="col-md-4">
                <img class="img-fluid mb-2" src="${user.avatar_url}">
                <a href="${user.html_url}" targer="_blank" class="btn btn-primary btn-block mb-2">Go To Profile!</a>
            </div>


            <div class="col-md-8">
                <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                <span class="badge badge-secondary">Gists: ${user.public_gists}</span>
                <span class="badge badge-success">Followers: ${user.followers}</span>
                <span class="badge badge-danger">Following: ${user.following}</span>
                <br><br>
                
                <ul class="list-group">
                <li class="list-group-item">Name: ${user.name}</li>
                <li class="list-group-item">Company: ${user.company}</li>
                <li class="list-group-item">Type: ${user.type}</li>
                <li class="list-group-item">ID: ${user.id}</li>
                </ul>
            </div>
                
                
        </div>

         </div>

        <h3 class="page-heading mt-4">Latest Repos</h3>
        <div id="repos">
        
        </div>

        `
    }

    showAlert(msg, alertClass)
    {
        // Bootstrap classes that make an alert
        // this.profile.innerHTML = 
        // `
        // <div class="${alertClass}">${msg}</div>
        // `
        // OR

        // To call a function within another function, we can just use this in ES6
        // Run Clear if statement before appending the error
        this.clearAlert();

        // Create div
        const div = document.createElement('div');
        // Class Name
        div.className = `${alertClass}`;
        // Add Text
        div.textContent = `${msg}`;
        
        // Search Container
        const searchContainer = document.querySelector(`.searchContainer`);
        const search = document.querySelector(`.search`);
        searchContainer.insertBefore(div, search);
    }

    // Clear Alert Message
    clearAlert()
    {
        const currentAlert = document.querySelector(`.alert`);

        if(currentAlert)
        {
            currentAlert.remove();
        };
    }

    showRepos(repos)
    {
        
        repos.forEach((repo) =>
        {
            document.querySelector(`#repos`).innerHTML +=
           `
            <div class="card card-body mb-2">
                <div class="row">
                    <div class="col-md-6">
                        <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                    </div>    

                        <div class="col-md-6">
                            <span class="badge badge-primary">Public Repos: ${repo.stargazers_count}</span>
                            <span class="badge badge-secondary">Gists: ${repo.watchers_count}</span>
                            <span class="badge badge-success">Followers: ${repo.forks_count}</span>
                        </div>
                    </div>
                </div>
           `
        });

    }

    removeData()
    {
        document.querySelector(`#profile`).style.visibility = 'hidden';
    }

    
    blockData()
    {
        document.querySelector(`#profile`).style.display = 'block';
    }
    
    hideData()
    {
        document.querySelector(`#profile`).style.display = 'none';
    }

    showData()
    {
        document.querySelector(`#profile`).style.visibility = 'visible';   
    }

}