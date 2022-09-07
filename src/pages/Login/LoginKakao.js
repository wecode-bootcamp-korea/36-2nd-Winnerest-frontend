import { React } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const LoginKakao = () => {
  const navigate = useNavigate();
  const { Kakao } = window;
  const getKakaoAuth = () => {
    Kakao.init(process.env.REACT_APP_KAKAO_INIT_KEY);
    Kakao.Auth.login({
      scope: 'profile_nickname, account_email ,profile_image',
      success: function (authObj) {
        fetch('http://10.58.7.159:3000/auth/kakao-login', {
          method: 'GET',
          headers: { authorization: authObj.access_token },
        })
          .then(res => res.json())
          .then(data => {
            if (data.accessToken) {
              localStorage.setItem('Token', data.accessToken);
              alert('로그인 되었습니다');
              navigate('/pins');
            } else {
              alert('다시 시도해주세요!');
            }
          });
      },
    });
  };

  return (
    <Btn
      onClick={getKakaoAuth}
      src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FrhoPq%2FbtrKU7ah9ad%2FWs2WbP80GtHd0Tbq3TXxOK%2Fimg.png"
    />
  );
};

export default LoginKakao;

const Btn = styled.img`
  margin-top: 60px;
  border-radius: 12px;
  box-shadow: rgb(0 0 0 / 45%) 0px 2px 10px;
  cursor: pointer;
`;
