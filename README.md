# 앗차피디아 (왓챠피디아 클론코딩)
<a href="https://www.youtube.com/watch?v=CBenPZkhncU&ab_channel=%EA%B9%80%EC%98%81%ED%98%B8">![AtchaPedia_Logo_Big](https://user-images.githubusercontent.com/79790476/132983431-8c559de4-d409-4d06-8eac-232b40f763a8.png)</a>

# 👆 앗차피디아 Demo 유튜브 이동

## 앗차피디아 팀원

- F.E<br>
  김영현<br>
  김영호<br>
  김태수<br>
  <br>
- B.E<br>
  성우진<br>
  손명희<br>
  이무현<br>
  <br>

### 개발 인원 및 기간

- 개발기간 : 2021/8/30 ~ 2021/9/10
- 개발 인원 : 프론트엔드 3명, 백엔드 3명

<br />

### 프로젝트 소개

- 영화 추천 서비스인 왓챠피디아를 클론한 프로젝트입니다.
- 앗차피디아에 등록된 영화들의 상세정보를 제공합니다.
- 앗차피디아 회원이 시청한 영화의 평점 및 리뷰 댓글을 등록 및 제공합니다.

<br />


## 적용 기술 및 구현 기능


### 적용 기술


> -Front-End : JSX, React, Scss<br>
> -Back-End : Python, Django, MySQL<br>
> -Common : Postman, Slack, Trello, AWS

<br />

### 구현 기능

직접 구현한 기능은 ✅, 팀원이 구현한 기능은 ✔️로 표시했습니다. <br/>

#### 회원가입 / 로그인 페이지

✅ JWT 토큰을 이용한 회원가입, 로그인, 로그아웃 기능 <br/>
✅ 로그아웃 시 저장된 토큰 삭제하여 메인페이지로 이동 <br/>
✅ 유효성 검사 로직에 따른 레이아웃 및 모달창 구현 <br/>
✅ `this.props.children`과 컴포넌트 재사용을 통한 레이아웃 구현 <br/>

#### 내비게이션 바

✔️ 인기검색어가 포함되어 있는 검색 기능
✅ 로그인, 로그아웃 시 내비게이션 바 레이아웃 변경
✅ `filter`, `map` 메소드를 통한 연관 검색어 기능

#### 메인 페이지

✔️ 국가, 장르, 별점 순으로 필터링된 데이터를 통해 레이아웃 구현(캐러셀)
✔️ 동적 라우팅을 통한 상세 페이지 이동
✔️ 조건부 렌더링을 통해 별점 4.0 이상인 영화에 **앗차픽** 로고 구현

#### 상세 페이지

✔️ 모달창을 이용한 **코멘트 남기기**를 클릭하여 `fetch`로 서버에 넘기고 불러내 새로고침 시 코멘트에 추가
✔️ `onMouseEnter`, `onClick` 등의 기능에 따른 별점 기능 구현
✔️ 유튜브 영상 ID를 통한 URL 연결

#### 마이 프로필

✔️ 로그인한 회원이 마이 프로필 클릭 시, 별점 평가한 영화 개수 구현
✔️ 사용자가 별점 평가를 진행한 목록을 `map` 메소드를 통해 구현하여 **포스터, 타이틀, 본인의 별점** 확인 가능

## Reference

- 이 프로젝트는 [왓챠피디아](https://pedia.watcha.com/ko-KR) 사이트를 참조하여 만들었습니다.
- 실무 수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.
<hr>
앗차피디아 프로젝트는 <a href="https://pedia.watcha.com/ko-KR">왓챠피디아<a/> 클론 프로젝트이지만, 백지 상태에서 구현되었습니다. 개발자의 역할은 기획이 아닌, 기획 의도를 현실로 바꾸는, 기획의 ‘구현’이라 생각합니다. 따라서, 기획 과정을 건너 뛰고 구현에 집중하기 위해 <a href="https://pedia.watcha.com/ko-KR">왓챠피디아<a/> 라는 서비스를 참고한 것일 뿐, 프로젝트의 모든 기능은, 실제 서비스 개발과정과 마찬가지로, 백지 상태에서 구현되었음을 밝힙니다.
