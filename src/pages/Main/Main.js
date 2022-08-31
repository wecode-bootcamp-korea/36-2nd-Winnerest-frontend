import { React, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import PinForMain from './PinForMain';

const Main = () => {
  const navigate = useNavigate();
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTY2MjEyMjE2MX0.j5a-YigS0uywWrn6mEs34Fqy9hWTTFIFcr2Js_PP1FE';
  // const token = localStorage.getItem('token'); // 로그인이 안 되면 접근이 불가한 메인페이지므로 merge 전에 들어갈 수 있게끔 토큰 넣어놓았습니다
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const getItems = async () => {
    setLoading(true);
    await axios
      .get(`http://10.58.7.159:3000/pins?pageSize=10&page=${page}`, {
        headers: {
          Authorization: token,
        },
      })
      .then(res => {
        setItems(prevState => [...prevState, ...res.data.data]);
      });
    setLoading(false);
  };

  useEffect(() => {
    if (!token) {
      alert('로그인이 필요한 서비스입니다!');
      navigate('/auth/signIn');
    } else {
      getItems();
    }
  }, [page]);

  useEffect(() => {
    if (inView && !loading) {
      setPage(prevState => prevState + 1);
    }
  }, [inView, loading]);

  return (
    <MainLayout>
      <MainStyle>
        {items.map((item, id) => {
          return (
            <div key={id}>
              <PinForMain />
              {items.length % 10 === 0 ? (
                <PinForMain {...item} ref={ref} />
              ) : (
                <PinForMain {...item} />
              )}
            </div>
          );
        })}
      </MainStyle>
    </MainLayout>
  );
};
const MainLayout = styled.div`
  width: 100%;
  height: auto;
  margin-top: 250px;
`;

const MainStyle = styled.div`
  margin: 0 auto;
  max-width: 2000px;
  column-count: 5;
  column-gap: 1em;
`;

export default Main;
