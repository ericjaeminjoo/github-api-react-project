const fetchGitHubRepos = (language) => {
  let encodeURI = window.encodeURI(
    `https://api.github.com/search/repositories?q=stars:>25+language:${language}&sort=stars&order=desc&type=Repositories`
  );
  return fetch(encodeURI)
    .then((res) => res.json())
    .then((data) => {
      if (!data.items) {
        throw new Error(data.message);
      }
      return data.items;
    });
};

export default fetchGitHubRepos;
