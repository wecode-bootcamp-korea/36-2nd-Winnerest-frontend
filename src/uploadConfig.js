import axios from 'axios';

const token = localStorage.getItem('Token');

export const updateImage = async () => {
  const file = document.getElementById('imageFile').files[0];
  return await uploadImage(file);
};

export const uploadImage = async (
  file,
  tags,
  setCatchErr,
  pinContent,
  setIsModal,
  setErrMessage,
  boardId,
  fileImage
) => {
  setCatchErr(false);

  // eslint-disable-next-line no-useless-concat
  const result = tags.map(el => 'tagIds' + '=' + el).join('&');

  const url = `http://10.58.7.159:3000/pins?boardId=${boardId}&title=${pinContent.title}&contents=${pinContent.content}&${result}`;

  const form = new FormData();
  form.append('imgUrl', file);

  const config = {
    headers: {
      Authorization: token,
    },
  };

  try {
    await axios.post(url, form, config);
    window.location.href = '/pins';
  } catch (rej) {
    if ((pinContent.title.length || pinContent.content.length) === 0) {
      setCatchErr(true);
      setIsModal(true);
      setErrMessage('제목이나 , 설명을 적어주세요');
    } else if (!fileImage) {
      setCatchErr(true);
      setIsModal(true);
      setErrMessage('업로드할 사진을 첨부해주세요');
    }
    return;
  }
};

export const getUser = async setUserInfo => {
  const res = await axios.get('http://10.58.7.159:3000/auth', {
    headers: {
      Authorization: token,
    },
  });
  return setUserInfo(res.data.data);
};

export const getBoards = async setGetBoard => {
  const res = await axios.get('http://10.58.7.159:3000/board/title', {
    headers: {
      Authorization: token,
    },
  });

  setGetBoard(res.data);
};

export const createBoard = async (createBoardName, setGetBoard) => {
  await axios
    .post(
      'http://10.58.7.159:3000/board',
      {
        title: createBoardName,
      },
      {
        headers: {
          Authorization: token,
        },
      }
    )
    .catch(err => {
      throw err;
    });
  getBoards(setGetBoard);
};
