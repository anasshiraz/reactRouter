export const githubInfo = async () => {
  const response = await fetch("https://api.github.com/users/anasshiraz");
  return response.json();
};