let getIndex;

document.addEventListener('click', (e) => {
  e.preventDefault();
  const targetd = e.target.classList.contains('comment-span');
  if (targetd) {
    getIndex = targetd.id;
  }
});

const getComment = async (getIndex) => {
  const result = await fetch(`https://api.spaceflightnewsapi.net/v3/articles/${getIndex}`).then((response) => response.json())
    .catch((err) => new Error(err));
  return result;
};
