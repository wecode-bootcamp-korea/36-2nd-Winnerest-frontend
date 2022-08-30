import styled from 'styled-components';
import LoginKakao from './LoginKakao';

const Login = () => {
  return (
    <Img>
      <FullScreen>
        <LoginContainer>
          <LoginLeftText>가입하여 더 많은 아이디어를 만나 보세요</LoginLeftText>
        </LoginContainer>
        <LoginContainer>
          <Form>
            <Loginform>
              <Logo>
                <LogoImg />
              </Logo>
              <FormTitle>Winnerest에 오신 것을 환영합니다</FormTitle>
              <SubTitle>시도해 볼 만한 새로운 아이디어 찾기</SubTitle>
              <LoginKakao />
            </Loginform>
          </Form>
        </LoginContainer>
      </FullScreen>
    </Img>
  );
};

const Img = styled.div`
  width: 100vw;
  height: 100vh;
  background-position: top;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbeFQ0h%2FbtrKXGpGeBF%2FelvwpB525Zzdt2uY4brYx1%2Fimg.jpg');
`;

const FullScreen = styled.div`
  display: flex;
  flex-direction: row;
`;

const LoginContainer = styled.div`
  width: 50%;
  height: 100vh;
  margin: 0 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginLeftText = styled.div`
  width: 426px;
  height: 264px;
  color: white;
  align-self: center;
  font-size: 70px;
  font-weight: 600;
  line-height: 127%;
`;

const Form = styled.div`
  width: 484px;
  height: 484px;
  padding: 20px 10px 24px;
  text-align: center;
  background-color: rgb(255, 255, 255);
  border-radius: 32px;
  box-shadow: rgb(0 0 0 / 45%) 0px 2px 50px;
`;

const Loginform = styled.form`
  margin: 30px 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const FormTitle = styled.h1`
  width: 100%;
  height: 80px;
  margin: 30px 0;
  padding: 0 16px;
  color: rgb(51, 51, 51);
  font-size: 32px;
  font-weight: 600;
  letter-spacing: -1.2px;
  line-height: 127%;
`;

const SubTitle = styled.h2`
  width: 100%;
  height: 20px;
  margin-top: 10px;
  font-size: 16px;
`;

const Logo = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  text-align: center;
`;

const LogoImg = styled.img`
  width: 40px;
  height: auto;
  border-style: none;
  background: url('https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FddLFql%2FbtrLiqFVaZ1%2FPEcPrJnxZ3cCchR1PMN0g1%2Fimg.png');
  background-size: contain;
`;
export default Login;
