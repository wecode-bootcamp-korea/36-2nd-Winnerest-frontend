# winnerest

# FE

- 권영준
- 김다현
- 조은지

# BE

- 길성민
- 백민석

---



![메인 파일](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F9Cp4b%2FbtrLMzIWjfm%2FQfmklxGjs9MGLKSHHmx0eK%2Fimg.png)






핀터레스트 클론 코딩 입니다

# 구현한 기능

## 김다현
### 1. 핀 상세 페이지

- 이미지 다운로드
   - html의 a 태그에서 download 속성을 지원해주는데 재대로 사용하지를 못한 거 같다.

- url 복사
   - ClipboardAPI를 이용하여 url 복사 기능 구현
   - [브라우저에서 클립 보드 사용하기 [javascript]](https://goldenthumb.net/Clipboard-API)

- 핀 수정
   - axios에서 PATCH 메서드를 이용하여 핀의 대한 정보를 수정하였다.

- 댓글 추가 기능
   - textarea 태그에서 글을 입력할시 엄청난 양의 렌더링이 되는데 그것을 최소화 하기 위해서 useRef를 이용하여 마지막 클릭했을 때만 입력한 값을 POST메서드를 이용하여 서버에 보냈다.
   - 핀터레스트에서는 글자를 한 번만 입력해도 확인 버튼이 활성화되는데 useRef만 사용하면 글자를 입력했는지 바로 확인이 불가능하여 useState를 같이 사용하였다.


```js
  const reviewInputChange = e => {
    handleResizeHeight('40px');
    e.target.value.length <= 1 &&
      setIsStateObj({
        ...isStateObj,
        reviewValue: textRef.current.value,
      });
  };
```

- 댓글 리뷰 좋아요 기능
   - 선택한 리뷰에 해당하는 id를 가지고 POST 메서드를 이용하여 선택된 리뷰의 id를 서버에 보내는 방식으로 해결하였다.

- 무한 스크롤
   - 보통의 스크롤 기능만 이용하면 한 번만 휠을 움직일 시 엄청난 양의 이벤트가 발생하는데 발생되는 이벤트들을 제어하기 위해서 debounce, throttle 중 debounce 방법을 이용하여 이벤트를 제어하였다. (throttle하고 intersection-observer부터 사용할걸 그랬네요...)
   - [[JavaScript] 디바운스와 쓰로틀의 차이](https://velog.io/@plu457/JavaScript-%EB%94%94%EB%B0%94%EC%9A%B4%EC%8A%A4%EC%99%80-%EC%93%B0%EB%A1%9C%ED%8B%80%EC%9D%98-%EC%B0%A8%EC%9D%B4)

- 팔로우 기능
   - 좋아요 기능과 비슷한 양식으로 해결하였다.
   - 토큰을 서버단에 보내서 계산된 값을 다시 받아온 뒤 팔로우가 된 경우와 안된 경우를 분리하였다. (버튼 스타일 변경)

### 2. 공통 Nav 바





## 조은지
### 1. 로그인 페이지

- 카카오 API를 이용해 로그인 페이지 구현, 자바스크립트 키를 이용해 개인 프로필, 닉네임, 이메일을 받아 해당 페이지를 회원가입할 수 있도록 했습니다.


### 2. 메인 페이지

-  라이브러리를 이용한 무한 스크롤 구현, 사진 클릭시 상세 페이지로 넘어갑니다


### 3. 마이 페이지

- 카카오 프로필, 닉네임이 UI에 띄워지고 보드를 만들거나 해당 보드에 업로드한 사진을 확인할 수 있습니다.
- 보드를 누르면 보드 하단에 보드 안에 들어있는 하단 핀(사진)들이 


