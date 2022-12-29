import { React, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import PinForMain from './PinForMain';

const Main = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('accessToken');
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
      .get(`http://localhost:8000/pins?pageSize=10&page=${page}`, {
        headers: {
          Authorization: token,
        },
      })
      .then(res => {
        console.log(res);
        setItems(prevState => [...res.data.data, ...prevState]);
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
  }, []);

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
  margin-top: 100px;
`;

const MainStyle = styled.div`
  margin: 0 auto;
  max-width: 2000px;
  column-count: 5;
  column-gap: 1em;
`;

export default Main;
