export type fetchReposRequest = {
  userName: string,
  pageNumber: number,
  perpage: number,
}

export async function fetchRepos({userName, perpage, pageNumber}: fetchReposRequest) {
  const response = await fetch(
    `https://api.github.com/users/${userName}/repos?sort=fullname&per_page=${perpage}&page=${pageNumber}`,
    {
      headers: {
        'Authorization': 'dc9eef111fdc5e39500837fedc1ebd3206dca4e9'
      }
    }
  )
  return await response.json();
}