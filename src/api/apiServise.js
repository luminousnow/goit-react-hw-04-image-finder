const KEY = '19092084-bc4ccb70eacd908f2d855c18b';
const URL = 'https://pixabay.com/api/';
const pagePerPage = 12;

function apiServise(imgName, pageNum) {
  return fetch(
    `${URL}?q=${imgName}&page=${pageNum}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=${pagePerPage}`,
  ).then(res => {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(new Error(`Картинки с именем ${imgName} отсутсвуют`));
  });
}

export default apiServise;
