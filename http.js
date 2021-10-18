// Creating functions and constructors within classes + http request function
class Github
{
    constructor()
    {
        this.client_id = '025e16d42e4205a65100';
        this.client_secret = 'dcf54b50d2b01f38b70a9c81657491aa9e5a5785';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

// This API takes 2 URLS,
// 1 API is used to get the profile response whereas the 2nd API is used to get the Repos of the user
async getUser(user)
{
    const profileResp = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResp = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profReturn = await profileResp.json();
    const repoReturn = await repoResp.json();

    return {
        profile: profReturn, // Returning profile in JSON
        rep: repoReturn // Returning repos in JSON
    }
}


}