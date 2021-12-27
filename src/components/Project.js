import {useEffect,useState} from 'react';
import ProjectImg from './ProjectImg';
import '../css/Project.css';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

export default function Project(){
    const [personalImgArr,setPersonalImgArr] = useState(undefined);
    const [teamImgArr,setTeamImgArr] = useState(undefined);

    const personalImgSourceArr=['shopping',];
    const teamImgSourceArr=['qr','travel'];
    const personalImgHeaderArr=['쇼핑몰'];
    const teamImgHeaderArr=['내 손안의 키오스크','여행 후기'];
    const personalImgTextArr=['멀티캠퍼스 과정에서 배운 자바웹 프로그래밍 기술들을 단계별로 적용하여 기본적인 쇼핑몰 기능들을 구현한 개인 프로젝트'];
    const teamImgTextArr=['오프라인 좌석에서 QR코드 키오스크 장비 없이 인증을 통한 비대면 통합 주문 시스템을 구현','여행 후기를 올릴 수 있는 사이트'];
    
    const personalSkillArr = [['https://jaehun2841.github.io/2018/09/01/2018-09-01-servlet/servlet.png','https://media.vlpt.us/images/gkstjdwns2/post/b3d848b5-90ac-4b96-a335-da43dc33f29c/spring_2.png','https://1000logos.net/wp-content/uploads/2020/08/MySQL-Logo.jpg','https://media.vlpt.us/images/soso0/post/a79c4dc8-32fc-4121-812e-a8c2bcf57de3/javascript-vs-html-vs-css-1024x683.jpg','https://blog.kakaocdn.net/dn/boKC7y/btqMrjGUeZU/hhB62cP3OAjlLNGKKmHKqK/img.png'],
                            ];
    const teamSkillArr = [['https://www.joshinnovations.com/adminstyles/img/gallery/1612177449.png','https://pch720.github.io/portfolio_pch/assets/img/reactjs.png','https://1.bp.blogspot.com/-RjGFCcZvKXQ/WMwawK99xJI/AAAAAAAAAFI/dYw7ROhy9dkLbbazKwHl4-pKWgNPGIS1wCLcB/s1600/logo_og_bootstrap.png','https://pro.guslyon.fr/static/material-ui-4a66e3fd52c7ec9469f4684b68aca251.png','https://1000logos.net/wp-content/uploads/2020/08/MySQL-Logo.jpg','https://media.vlpt.us/images/soso0/post/a79c4dc8-32fc-4121-812e-a8c2bcf57de3/javascript-vs-html-vs-css-1024x683.jpg','https://mms.businesswire.com/media/20210923005988/en/712541/23/elastic-logo-V-full_color.jpg','https://www.loginradius.com/blog/async/static/4eda1ce5a0f541d97fdf27cd88bf2a49/03979/index.png','https://lh3.googleusercontent.com/proxy/X2E14EyytvXA0_IKzIKren0AYAq1cbJVChZg2bm1faqVtwPhRONMii-ayxRnap3rXBSLqUqm7-eIO4x9424ody2ulpQosuKfMmTz-pIKbJf-yHto0VaY4ES69vxfIGtmJF_92KrVljx2IBgyyzm_Sa3BHocdT51toKkv0AK5Gg0LUBZQUCWdwgERXiB7_cmLDar9-TdRj_k6lkSuNCPEUdUxniSb-kwtinbIQw5vcOYnHsOdgAOw9hMkMIJonZSjpp5WK5d-p6gqnE2YBObcBQ','data:image/jpeg;base64,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'],
    ['https://www.joshinnovations.com/adminstyles/img/gallery/1612177449.png','https://blog.kakaocdn.net/dn/bhA5Jh/btqFdnPjovv/JMXRrwJ6SdMSq5KE4ssYmk/img.png','https://1.bp.blogspot.com/-RjGFCcZvKXQ/WMwawK99xJI/AAAAAAAAAFI/dYw7ROhy9dkLbbazKwHl4-pKWgNPGIS1wCLcB/s1600/logo_og_bootstrap.png','https://1000logos.net/wp-content/uploads/2020/08/MySQL-Logo.jpg','https://media.vlpt.us/images/soso0/post/a79c4dc8-32fc-4121-812e-a8c2bcf57de3/javascript-vs-html-vs-css-1024x683.jpg','https://blog.kakaocdn.net/dn/boKC7y/btqMrjGUeZU/hhB62cP3OAjlLNGKKmHKqK/img.png',]];

    const personalTitleArr=[[
    '데이터베이스 구조'
    ,'메인 페이지'
    ,'로그인 페이지',
    '회원가입 페이지'
    ,'회원가입 우편번호 검색 페이지'
    ,'프론트 컨트롤러 코드'
    ,'회원가입 & 우편번호 검색 액션 컨트롤러'
    ,'회원가입 & 우편번호 검색 DAO 클래스'
    ,'상품 목록 페이지'
    ,'상품 세부내역 페이지'
    ,'미니 IOC 컨테이너'
    ,'IOC 컨테이너를 적용한 컨트롤러'
    ,'장바구니 페이지'
    ,'주문내역 페이지'
    ,'주문 상세 내역 페이지'
    ,'스프링 프레임워크 주문 시스템 XML'
    ,'주문 컨트롤러'
    ,'주문넣기 컨트롤러 & AJAX를 이용한 주문 버튼'
    ,'주문 DAO 메소드'
    ,'Q&A 게시판'
    ,'Q&A 게시판 글 작성'
    ,'Q&A 게시판 글 수정'//
    ,'Q&A 게시판 글 작성 컨트롤러 & 페이지네이션 코드'
    ,'페이지네이션 코드 & Q&A 게시판 검색 코드'],];
    const personalTextArr=[['',
    '',
    '',
    'AJAX를 활용한 아이디 중복 검사 구현',
    '새창에서 AJAX로 검색어로 입력한 동 이름을 넘기고, 해당 동에 대한 목록을 자바 객체로 받아온다. 그 후 선택 버튼을 누르면 우편번호와 주소가 회원가입 페이지에 자동 입력된다.',
    '모델 2단계를 적용한 프론트 컨트롤러로써 ActionFactory 클래스에서 클라이언트에서 넘어온 요청 내역에 해당하는 클래스에 요청 사항을 넘겨준다.',
    '요청을 받은 클래스는 처리하는데 필요한 데이터를 DTO 인스턴스에 담아 DAO클래스로 넘겨준다.',
    '데이터베이스와 연결된 DAO클래스는 필요한 데이터를 데이터베이스로부터 가져와 데이터를 요청한 클래스로 반환한다.',
    '',
    '',
    '스프링 프레임워크의 IOC 컨테이너 기능을 구현한 미니 IOC컨테이너로, WAS 실행 시 컨텍스트로부터 데이터를 로드할 때 각 클래스가 객체로 생성되면서 해당 클래스에 구현된 set메소드의 매개변수에 필요한 인스턴스를 찾아 넣어주는 방식으로 구현되어 있다. properties 파일에는 각 컨트롤러 패키지 경로가 저장되어 있어 해당 파일을 불러와 컨트롤러 인스턴스를 만들어준다. 컨트롤러 인스턴스를 만들 때, jndi.로 키값이 시작되면, 해당 컨트롤러는 DB 연결에 필요한 커넥션 객체를 넣어주고, 그 외에는 각 컨트롤러 클래스에 set함수를 callSetter 메소드로 찾고, set 함수에서 필요한 인스턴스들을 findObjByType으로 찾아 주입해준다.',
    '만든 IOC 컨테이너를 적용한 상품 조회와 관련된 시스템 코드',
    '',
    '',
    '',
    '주문 시스템에 스프링 프레임워크를 XML 방식으로 적용',
    '스프링 프레임워크의 XML에는 앞에서 만든 IOC 컨테이너처럼 set함수를 찾아 매개변수에 필요한 인스턴스를 주입해주며, 스프링 프레임워크에서는 URL마다 메소드가 매핑되어 있어 URL 요청시 해당 URL을 처리하는 메소드를 실행하도록 구현되어 있다.',
    '장바구니 페이지에서 처리해야할 데이터는 테이블에 여러 행으로 저장되어 있기 때문에 주문 버튼을 누르면, 테이블에 저장된 데이터를 제이쿼리 셀렉터로 가져와 각 행의 열 값들을 자바스크립트 객체에 저장하고, 행 객체들을 배열에 할당하여, 해당 배열을 문자열화 시켜 json 객체로 서버에 넘겨준다. 서버에서는 문자열로 표현된 json 객체를 파싱하여 데이터를 꺼내고, 장바구니에 담긴 상품 데이터들을 데이터베이스에 저장하기 위하여 DAO 객체에 넘겨준다.',
    'DAO 클래스의 주문 메소드에서는 데이터베이스의 orders 테이블에 주문을 생성하고, 생성된 주문의 일련번호를 데이터베이스로부터 받아와 해당 일련번호로 장바구니 상품들을 order_detail 테이블에 넣어준다. 이 때 orders 테이블로부터 생성된 주문의 일련번호를 받아와야 하는데, 서버에서 orders 테이블의 행 개수를 받아와 일련번호를 부여하게 되면 여러 사람이 동시에 주문할 경우, 주문 일련번호가 겹쳐 주문 생성이 안되는 상황이 발생할 수 있어, 주문 생성과 동시에 데이터베이스로부터 가장 최근에 생성된 해당 id의 주문 일련번호를 가져오는 방식으로 기능을 구현하였다. 이는 임시적인 방안으로 더 좋은 방법이 있으면 해당 프로세스로 변경할 필요가 있어보인다. ',
    '질문 게시판으로 검색, 페이지네이션, 글쓰기, 댓글 쓰기가 구현되어 있다.',
    '',
    '',
    '페이지네이션을 하기 위한 코드로 처음 질문 게시판에 들어왔는지를 검사하는 코드가 앞에 있으며, 만약 처음 들어와 페이지 정보나 전체 페이지 정보가 없을 시 전체 게시글 수를 데이터베이스로부터 가져와 전체 페이지수를 계산한다. 한 페이지에 표시할 게시글 수를 변수로 나눠주기 때문에 추후에 보여주는 게시글 수를 변경하는 기능을 만들 시 해당 변수를 클라이언트로부터 입력 받아 페이징 처리를 하는 기능을 구현할 수 있을 것으로 생각된다. startPage 변수는 페이지 네비게이션에서 시작되는 페이지 번호를 계산한 것이고, endPage는 가장 마지막 페이지 번호를 계산한 것이다. 만약 endPage보다 전체 페이지수가 작다면, endPage는 전체 페이지수가 되어야 한다. 이를 검사하기 위하여 코드 초반에 전체 페이지 수를 가져오는 작업을 하였다.',
    'Like 검색을 통해 게시판을 검색하도록 구현하였다'],];
    const personalSummaryArr=[
        `교육 과정에서 배운 자바 웹 기술을 단계별로 적용한 쇼핑몰입니다.
 - 모델 2 패턴을 적용하여 회원 시스템을 구현
 - 서블릿 클래스로 만든 미니 스프링으로 상품 페이지 구현
 - 스프링 프레임워크를 적용하여 주문 시스템 및 Q&A 게시판 구현`,];
    const personalLearnArr=[
        ['서블릿과 JSP를 활용한 자바 웹 개발을 단계별로 적용하여 자바 웹 구조에 대해 학습할 수 있었습니다.',
            'IOC 컨테이너를 서블릿 클래스로 만들어, IOC 원리를 자연스럽게 이해할 수 있었고, 스프링 프레임워크가 내부적으로 어떻게 설계되었는지 간접적으로 알 수 있었습니다.',
            '완성도 높은 페이지네이션을 구현하기 위해서는 단순히 원하는 페이지 목록을 데이터베이스로부터 가져오는 것을 넘어 전체 게시글 수로 페이지 개수가 몇개까지 필요한지 계산이 필요하며, 게시글의 수가 늘어날 수록 데이터베이스로부터 원하는 목록을 가져오는데 필요한 연산량이 늘어 효율성이 떨어질 수 있다는 사실도 알게 되었습니다. 현재 프로젝트에서는 게시글 수가 적어 단순한 쿼리문을 통해 원하는 목록을 불러오고 있지만 추후 최적화된 쿼리문을 연구해볼 필요가 있습니다.']
    ];
    const personalDifficultyArr=[
        ['자바 웹 구현 기술을 단계별로 적용하다 보니 중간 중간 다른 기술을 적용하기 위하여, 기존에 작성된 코드 구조를 전부 바꿔줘야 하는 번거로움이 많았습니다.특히나 유지보수를 고려하지 않은 채 코드를 작성했기 때문에 클래스 명을 변경하거나, 메소드를 다른 것으로 바꾸는 등의 작업이 필요할 때 변경할 내용이 들어 있는 모든 클래스를 전부 찾아 바꿔줘야 것이 가장 큰 어려움이었던 것 같습니다. Inversion of Control 원칙과 Dependency Injection를 학습을 통해 원리를 아는 것을 넘어 실무에서 해당 원칙들을 적용하기 위한 많은 노력이 필요하다는 것을 알게 되었습니다. 해당 원칙은 스프링 프레임워크에서만 아니라 일반적인 자바 클래스를 구현할 때에도 항상 염두에 두며 구조를 설계해야 유지 보수가 용이할 수 있다는 것을 알게 되었습니다.']
    ];
    const personalGitLinkArr = ['https://github.com/BISohn27/JavaWebLearn/tree/master/shopping'];

    const teamTitleArr= [
        ['데이터베이스 구조',
        '주문 시스템 흐름',
        '서비스 목표',
        '전체 서비스',
        '업체 정보 관리',
        '온라인 이용자 관점 서비스',
        '오프라인 이용자 관점 서비스',
        '메인 페이지 & 점주 로그인 페이지 & 업체 등록 페이지',
        '업체 로그인 리액트 코드',
        '업체 로그인 스프링부트 컨트롤러 코드',
        'JWT 필터 클래스 & 인증 관리 Configure 메소드',
        'JWT 생성 및 관리 스프링부트 코드',
        '검색 결과 페이지',
        '검색 결과 페이지 리액트 코드',
        '검색 서비스 컨트롤러 & 엘라스틱 스택 로그스태시 conf 파일 & JPA를 사용한 엘라스틱 서치 QueryDSL',
        '업체 소개 페이지 & 업체 메뉴 페이지 & 업체 갤러리 페이지',
        '업체 테이블현황 페이지',
        '테이블 현황 리액트 코드',
        '업체 로그인 페이지',
        '업체 매출 현황 페이지',
        '업체 매출 현황 리액트 페이지',
        '매출 현황 컨트롤러 코드',
        '매출 현황 서비스 처리 코드1',
        '매출 현황 서비스 처리 코드2',
        '메뉴 페이지 -> 장바구니 페이지 -> 주문 들어온 POS 페이지 -> 오프라인 이용자 결제 요청 -> 업주 결제 요청 승인 여부 -> 결제 완료 페이지',
        '실시간 결제 동기화 적용이 안된 리액트 POS 코드를 수정',
        '노드 서버 실시간 결제 서비스 코드 추가',
        'POS 화면 좌석 데이터 컨트롤러 & 결제 처리 컨트롤러'],
        ['데이터베이스 설계',
            '화면 구성 스토리보드',
            '서비스 이용 흐름',
            '메인 페이지 & 로그인 페이지 & 회원가입 페이지',
            '검색 결과 페이지',
            '여행 후기 작성 페이지 & 댓글 작성 페이지',
            '메인 페이지 구현 코드',
            '검색 기능 구현 코드',
            '게시글 DAO 구현 마이바티스 코드']
    ];
    const teamTextArr = [
        ['',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '스프링부트에서 관리하는 JWT를 리액트에서 발급받아 로컬 저장소에서 저장하여 인증 관리 시스템을 구축하였습니다.',
        'authenticate 메소드는 브라우저로부터 아이디와 비밀번호를 post방식으로 받아 데이터베이스와 비교하여 데이터가 일치하면 JWT를 생성하여 브라우저로 전송합니다. authorize는 브라우저가 헤더로 보낸 토큰의 유효성을 불리언 타입으로 반환해주는 메소드와 토큰의 eno를 반환해주는 메소드를 오버로딩하였으며, 실제 유효성 검사는 authorize 메소드로 HTTP 메세지가 전달 되기 전 Configuration 단계에서 이뤄집니다. 이때 필터 클래스에서 토큰 유효성 검사가 실제로 이뤄집니다. 로그아웃 시스템은 인 메모리 데이터베이스인 Redis에 해당 토큰이 키 형태로 logout이 값으로 저장되며, Redis 데이터베이스에 해당 키 벨류는 토큰의 남은 유효 기간만큼 저장되며, 필터 클래스에서 해당 토큰이 logout 값으로 Redis 데이터베이스에 저장되어 있는지 조회를 하여 요청 받은 토큰의 로그아웃 여부를 검사합니다.',
        '필터 클래스에서는 우선적으로 헤더 담긴 유효한 JWT인지를 1차적으로 검사하고, 유효한 JWT라면, Redis 데이터베이스에 해당 JWT가 로그아웃 상태로 저장되어 있는지를 2차적으로 검사합니다. 이런 절차를 모두 통과한 JWT만이 인증이 필요한 api에 접근할 수 있으며, 만약 1차 또는 2차에서 인증에 실패한다면 해당 JWT로 접근한 클라이언트에는 401 unauthorized 에러가 발생됩니다. 아래는 인증 시스템의 Configuration 클래스의 configure 메소드로 현재는 /authorize 로 접근한 url에 대해서만 인증 시스템을 거치도록 등록된 상태입니다.',
        'JWT 생성 및 관리를 하는 클래스로 이 프로젝트에서 아직 인증 시스템만 구현해놓고, 권한에 따른 api 사용은 아직 구현되어 있지는 않는 상태입니다. JWT를 생성하기 위한 키 값을 설정하는 메소드가 처음 정의되어 있으며, 그 아래에 JWT를 생성하는 메소드가 있습니다. 토큰의 유효 기간은 우선적으로 토큰 생성을 요청한 시간으로부터 24시간까지로 설정되어 있으며, JWT에는 eno와 유효시간이 엔코딩됩니다. JWT 생성 메소드 아래에는 필터 클래스에서 유효한 토큰으로 판정되었을 때, 스프링 시큐리티 라이브러리에서 사용할 수 있는 인증 계정을 발급하는 메소드로, 이 메소드로부터 계정을 발급받아 스프링 시큐리티에 등록되어야만 인증이 필요한 api에 접근할 수 있습니다. 인증 계정을 발급하는 메소드 아래에는 로그아웃 시 Redis 데이터베이스에 Redis 데이터베이스 내에 해당 토큰이 로그아웃 상태로 저장되는 기간을 설정할 때 필요한 시간을 계산하기 위해서 JWT에서 유효 기간을 파싱하여 반환하는 메소드가 정의되어 있고, 그 아래에는 토큰의 유효성 검사를 해주는 메소드와 토큰에서 유효성 검사를 한 후 eno를 반환해주는 메소드가 있습니다.',
        '',
        '검색 결과 페이지 리액트 코드로  헤더 부분에 검색 창 부분이 있고 그 아래에는 검색된 업체들의 위치를 카카오 맵 api에 표시해주는 부분이 있으며, 아래에는 검색된 업체 목록을 표시해주는 부분이 있습니다. 검색된 업체는 5개씩 표시되게 구현되어 있으며, 더보기 버튼을 누를 때마다 5개씩 추가로 보여주고, 추가된 업체들의 위치가 카카오 맵에 누적되어 보이도록 구현되어 있습니다.',
        '업체 검색은 오픈 소스인 엘라스틱 서치로 구현되어 있으며, 엘라스틱 서치에는 같은 회사의 로그스태시 프로그램을 통해서 데이터베이스에 저장된 업체 목록이 엘라스틱 서치에 저장되도록 하였습니다. 옆에는 스프링에서 제공하는 엘라스틱 서치 QueryDSL을 구현한 클래스로, 검색 키워드를 매개변수로 받아 multi match의 cross_field 방식으로 검색하도록 설정해놓았으며, 검색되는 cross field는 업체의 이름, 주소, 분류, 소개에서 해당 키워드가 들어있는지를 검색하도록 구현되어 있습니다. 검색의 의도에 맞게 multi match가 아닌 combined fields를 사용하려고 했으나 스프링에서 제공하는 QueryDSL로 구현하는데 실패하여 차선책으로 multi match의 cross_field 방식로 설정하였습니다. 엘라스틱 서치의 형태소 분석기는 엘라스틱 서치에서 제공하는 노리 형태소 분석기를 mix 모드로 사용했으며, 필터 설정으로 토큰화 된 형태소를 3개 단어씩 합성하도록 설정하였습니다. 그 외 검색 결과 페이지에서 카페, 음식점 카테고리로 검색할 수 있도록 특정 카테고리를 포함하는 목록을 검색하는 QueryDSL 메소드를 구현하였습니다.',
        '',
        '',
        '테이블 점유 현황을 보여주는 페이지로 우선적으로 스프링 부트 서버로부터 일반석과 창가석 데이터를 가져오는 방식 와 리액트로 화면을 만들어 보여주는 방식으로 구현하였으며, 추후 기회가 된다면 영화관 좌석 예매 시스템처럼 실시간 동기화되어 좌석 점유 변화가 클라이언트의 요청 없이 업데이트 되도록 구현할 예정입니다.',
        '',
        '',
        '업체의 매출 현황을 분석할 수 있도록 만든 페이지로, 최종 계획은 임의로 설정된 기간의 매출 현황을 보여줄 수 있는 페이지를 구현하는 것입니다. 현재는 전체 매출과 메뉴별 매출을 조회하고자 하는 연도를 선택하면 선택한 기간의 연도별, 분기별, 월별, 시간 별 추이를 비교할 수 있는 기능만 구현된 상태입니다.',
        '매출 현황 요청을 받는 컨트롤러로, 요청된 데이터가 전체 매출인지 특정 메뉴에 대한 매출인지를 우선적으로 판단하며, 그 후 요청한 매출에 대한 연도별, 분기별, 월별, 기산별 데이터를 데이터베이스로부터 가져와 맵 자료구조에 담고, 해당 데이터에 대한 일별 매출 목록도 맵 자료구조에 담아 반환하도록 구현되어 있습니다.',
        '컨트롤러에 요청된 데이터에 필요한 데이터를 마이바티스로 구현된 매퍼 클래스에 요청하기 위하여 필요한 매개변수 데이터들을 컨트롤러로부터 받아 가공하는 서비스 클래스로, 연도별 매출을 받아오는 메소드는 시작 연도와 종료 연도로 데이터를 조회하며, 분기별 매출은 각 분기를 매퍼 객체에 전달하여 데이터베이스로부터 해당 분기의 매출 데이터를 받고, 조회된 분기의 라벨도 저장한 다음 컨트롤러로 반환할 수 있도록 구현되어 있습니다. 월별 매출 현황을 처리하는 서비스 메소드는 요청된 기간의 연도에 해당하는 각 달의 매출을 매개변수로 매퍼 객체에 전달하여 데이터를 받은 후 컨트롤러에 반환하도록 구현되어 있으며, 시간 별 매출 현황을 처리하는 메소드는 0~1시 에서부터 23~24시 사이의 매출을 매개변수로 입력하여 각 시간 별 매출 합계를 데이터베이스로부터 받아오도록 구현되어 있습니다.',
        '',
        '',
        '팀원이 구현한 pos 페이지에서 실시간으로 들어온 주문이 pos페이지에 표시만 되도록 구현되어 있어 pos 화면의 완성도를 높히기 위하여 왼쪽의 코드를 오른쪽 코드로 변경하였습니다. 업체의 주문 현황을 화면에 표시하는 부분이 구현되어 있지 않아, 스프링서버로부터 데이터를 비동기적으로 받아 주문 현황이 화면에 표시될 수 있도록 구현하였으며, 노드 서버로부터 결제 요청을 받을 수 있도록 구현하였습니다. 또한 노드 서버로부터 결제 요청을 받고, 결제를 승인하였을 때, 해당 결과가 화면에 실시간으로 반영되지 않는 문제가 있어, 요청을 승인하면, 리액트의 컴포넌트들을 리랜더링 하도록 코드를 변경하였습니다. 현재 코드는 리랜더링 시 서버로부터 주문 현황을 다시 받아서 그리도록 구현되어 있기 때문에 결제 요청으로 화면에서 지워져야 되는 컴포넌트는 하나이나 서버로부터 다시 데이터를 받아오는 비효율적인 방식으로 구현되어 있기 때문에, 코드를 수정하여 오버헤드를 줄여야 하고, 결제 요청이 comfirm 방식으로 이뤄져 있기 때문에 다중 결제 처리가 요청될 때 문제가 발생할 여지가 있어, 이를 개선할 방법도 찾아야하는 등 개선해야할 과제가 아직 남아 있는 상태입니다',
        '팀원이 구현한 pos 실시간 연동 노드 서버에 결제 요청 코드를 구현한 것입니다.',
        'pos 페이지에 현재 업체에서 현재 점유된 테이블의 주문 현황을 처리하는 컨트롤러로, 우선적으로 해당 업체의 전체 테이블 목록을 pos 페이지로 반환하는 메소드가 있고, 현재 사용되고 있는 테이블을 받아가 점유된 테이블의 컴포넌트에 주문 현황을 표시할 데이터를 반환하는 메소드가 있습니다. 상세 주문 테이블을 1:N구조로 되어 있어, tno로 해당 테이블의 주문을 불러오면 리스트 형태로 데이터베이스에서 가져오기 때문에, 가져온 리스트와 매칭되는 테이블 일련번호를 map 자료구조로 저장하여 반환하도록 구현되어 있습니다. 또한 테이블에서 주문이 들어올 경우 주문 상태로 바꾸는 메소드가 구현되어 있으며, 결제 요청을 승인할 경우 해당 테이블의 상태를 결제 완료 상태로 바꾸고, 데이터베이스 orders 테이블도 결제 완료 상태로 바꿔주는 메소드도 구현되어 있습니다.'],
        ['',
        '',
        '',
        '',
        '',
        '',
        '데이터베이스로부터 베스트 여행기로 등록된 게시글의 사진과 7일 이내에 올라온 신규 게시글의 사진을 불러오는 코드이다',
        '클라이언트에서 검색 키워드를 받아 해당 게시글의 일련번호를 검색 결과 페이지로 넘겨주는 기능을 구현한 코드로, 메인 화면에서 필터 없이 검색할 경우 데이터베이스 테이블의 전체 칼럼에서 해당 키워드가 있는 게시글을 모두 가져오도록 구현하였으며, 필터 기능을 통해 특정 국가, 지역, 장소를 선택하면 필터 조합에 대응되는 마이바티스의 쿼리 메소드가 실행되도록 구현하였다.',
        '쿼리문이 마이바티스로 구현된 매퍼 클래스로 메인 페이지 필터에서 상위 필터 목록을 선택할 때마다 ajax를 통해 상위 필터 목록에 속한 하위 필터 목록들을 불러오도록 하는 쿼리문들과, 검색 시 조합된 필터 목록에 대응하는 쿼리문도 각각 구현되어 있다.']
    ];
    const teamSummaryArr=[
        ['오프라인 매장에서 키오스크 장비 없이 테이블에서 QR코드로 주문하는 통합 주문 시스템을 구현하기 위한 프로젝트입니다. 매장 이용자가 소유한 스마트폰으로 QR코드를 찍어 주문 시스템에 접근하여 주문하고, 주문을 구현된 포스 화면을 통해 확인하여 매장 고객에게 음식과 음료를 제공할 수 있는 서비스를 기획하였습니다. 또한 QR코드로 테이블에서 주문을 넣고, 결제를 요청하는 시스템은 로그인 시스템과 유사한 방식으로 작동한다는 점을 착안하여, 테이블의 로그인 상태(좌석 점유 상태)로 온라인 좌석 현황 서비스를 구현할 수 있도록 설계하였습니다. 한편 주문 시스템을 이용하는 과정에서 저장되는 데이터베이스를 이용하여 매출 현황을 분석하는 서비스를 구현하였습니다. 추후 많은 데이터가 쌓이면, 데이터로 지역별, 시간별 매출 현황을 분석하는 컨설팅 시스템으로도 확장하는 등 확장성을 고려하여, 다양한 디바이스에서 서버의 데이터를 이용가능하도록 rest api로 서버를 설계하였기 때문에, 모바일 앱으로도 서비스 구현이 가능합니다. 프로젝트는 네이버 클라우드 서비스를 통해 배포하였습니다.'],
        [`코로나가 확산되면서 국가 간 이동이 힘들어진 상황에서 해외 여행에 대한 향수를 느낄 수 있는 웹사이트를 구현
 -여행 후기를 사진 위주 게시
 -인스타그램,핀터레스트 사이트 벤치마킹
 -여행지 검색하여 검색 결과 페이지로 들어가면 사용자가 올린 해당 여행지 사진들이 바둑판 배열 형식으로 나오게 구현`]
    ];
    const teamContributionArr=[
        ['검색 결과 페이지 & 서버 (검색 결과 스프링부트, 카카오 map api, 엘라스틱 서치 검색 엔진 스프링부트)'
            ,'토큰 방식 인증 시스템(인증이 필요한 리액트 화면 수정(로그인 페이지, 업체 소개 페이지),JWT 스프링부트, Redis)'
            ,'매출 현황 페이지 & 서버'
            ,'팀원이 구현한 포스 라이브 노드 서버에 결제 시스템 추가'
            ,'구현된 포스 페이지 & 서버에 실시간 데이터 연동이 가능하도록 수정'
            ,'좌석 현황 페이지 & 서버'],
        ['회원 시스템'
            ,'메인 페이지'
            ,'컨텐츠 검색 기능(Like 검색)'
            ,'카테고리별 세부 설정 검색 기능'
            ,'베스트 여행지 사진 디스플레이 기능'
            ,'신규 여행지 사진 디스플레이 기능'
        ]
    ];

    const teamLearnArr = [
        ['최근 프론트엔드 분야에서 가장 널리 쓰이는 리액트를 프로젝트에 적용하면서, 프론트엔드 분야에 대한 흐름을 좀 더 이해할 수 있었던 계기가 되었습니다.'
            ,'검색 엔진 오픈소스를 적용해보면서, 저장된 데이터베이스를 어떻게 가공(역인덱싱)하여 검색 엔진이 구현되어 있는지 작게나마 학습해볼 수 있었습니다. 그리고 관계형 데이터베이스인 MYSQL만 주로 사용하여 비 관계형 데이터베이스에 대한 이해가 전혀 없었는데, JSON 방식으로 데이터를 저장하는 엘라스틱 서치를 적용하기 위하여 학습하는 과정에서 간접적으로 No SQL 데이터베이스에 대해서도 학습할 수 있었습니다. 또한 ORM을 구현한 JPA를 활용한 엘라스틱 서치 QeuryDSL으로 엘라스틱 서치 조건문을 구현해보면서, JPA를 통해서 자바 클래스가 데이터베이스 테이블에 매핑되어 SQL문이 실행되는지 간접적으로 경험해볼 수 있었습니다.'
            ,'정형화되어 있지 않는 서비스를 기획, 설계 단계에서부터 개발해보면서, 기획 및 설계 단계의 어려움을 직접 경험해볼 수 있었습니다. 특히 기획 및 설계 단계에서  도출된 회의 결과를 문서화 시키는 것에 대한 중요성을 인식하게 되었습니다.'
            ,'기능 구현을 위해 처음 접하는 기술들을 학습하여 구현하는 경험을 해보면서, 다양한 기술들을 배우고, 응용하는 방법을 배우게 되었고, 이런 경험을 통해, 문제 해결을 위해서 다양한 기술을 응용하여 원하는 결과를 도출해내는 분야라는 것을 몸으로 느낄 수 있었습니다.'
            ,'다양한 문제를 해결하기 위한 다양한 기술들이 개발되어 있기 때문에, 문제 해결을 위해 다양한 방식으로 접근할 수 있다는 것을 배웠고, 그 가운데 가장 효율적인 방법을 선택하여 적용해야 한다는 것을 알게 되었습니다.'
            ,'특정 기술에서 사용된 원리가 해당 기술 분야에 적용되는 것으로 끝나는 것이 아니라 다양한 기술에서 여러 문제들을 해결하기 위해 도입되어 끊임없이 응용되는 사례들을 보며, 원리에 대한 학습이 응용 능력을 기르고, 문제 해결력을 향상시킬 수 있다는 것을 알게 되었습니다.'
            ,'서버를 rest api로 적용하면서 다양한 디바이스에 접목 가능한 서버를 구현해보는 경험이 해보았습니다.'
        ],
        ['팀 프로젝트를 진행해보면서, 팀 프로젝트에서 발생할 수 있는 문제에 대해 알게 되었습니다.'
            ,'ajax 통신을 많이 사용해보면서 비동기 통신에 대한 이해를 좀 더 높일 수 있었습니다.'
            ,'마이바티스를 적용하여 프로젝트를 진행하여, DAO 클래스 외 다른 방식으로 SQL을 다루는 법을 배울 수 있었습니다.'
            ,'부트스트랩을 적용해보면서, 프론트 단의 컴포넌트 개발을 경험해볼 수 있었습니다.'
        ],
    ];
    const teamDfficultyArr = [
        ['가장 어려웠던 것은 팀원 간의 소통이 긴밀한 팀 프로젝트에서 소통을 위한 효율적인 방법들을 적용하지 못해 프로젝트 진행 속도가 생각보다 느렸던 것입니다. 회의 결과를 문서화하여 계획을 공유하고, 어떻게 구현할 것인지 설계 단계에서 좀더 구체적으로 만들었어야 하는데, 그러지 못하여 중간 중간 계획도 많이 변경되었고, 공유 문서를 통해 매주 어디까지 완성되었는지 확인할 수 있는 현황판을 만들었어야 하는데, 그런 시스템을 만들지 않아 구현 수준을 파악하는데 어려움을 겪었습니다. 또한 시간을 정하고 주기적으로 회의를 진행하여 프로젝트 상황 파악이 필요했으나, 실제 프로젝트에서는 비정기적으로 필요하다 싶을 때 회의를 하여 효율적인 진행이 되지 못하였습니다. '
            ,'리액트라는 학습량이 많은 라이브러리를 단기간에 학습하여 적용하려다 보니 많은 어려움을 겪었습니다. 단기간 학습으로 리액트를 사용하다보니 코드들이 유지 보수와 재사용성을 높히는데 장점을 가진 리액트의 취지를 살리지 못하는 방향으로 작성되어 리액트를 사용해보는 수준 머물렀던 점이 많이 아쉬웠습니다. 또한 정확한 작동 원리에 대한 이해도가 부족하여, 라우터로 이동 시 기존 페이지의 정보들을 지우는 작업을 하지 않았습니다. 그로 이동 전 페이지와 이동 후 페이지의 데이터가 얽혀 제대로된 화면이 구현되지 않는 시행착오를 너무 많이 겪었고, 특히 기술에 대한 이해도가 떨어지는 문제는 카카오 맵 api 사용 시 컴포넌트 중첩이 일어나는 문제를 야기하여 해당 문제를 해결하는데 많은 시간을 소모했습니다.'
            ,'리액트로 화면을 만드는데 너무 많은 시간을 할애하다 보니 상대적으로 스프링 부트 서버에 대한 시간 투자를 못하는 문제가 발생했습니다. 스프링 부트 서버 구현이 기능을 구현하는 수준에 머무르고, 실제 효율성을 개선하여 서비스 속도를 높히는 수준에는 도달하지 못하였습니다.'
            ,'검색 엔진이 기업의 한 사업부로 구성되어 있을만큼 많은 학습이 필요함에도 정확한 이해 없이 구현하는 수준에 머물러, 원하는 결과를 얻기 위해 계속해서 수정해야 하는 상황이 많았습니다. 또한 많은 학습량을 요구하는 검색엔진이기 때문에 현재 수준은 엘라스틱 서치라는 api를 단순히 써본 수준에 머물렀다는 점이 아쉬웠고, mysql에서 concat을 통해 칼럼을 통합하고, like 서치를 적용한 것이 검색 속도가 느려 검색 서비스 만족도를 저해할 수 있다는 이유 때문에 엘라스틱 서치를 적용하였지만, 현재 수준에서 엘라스틱 서치를 적용한 것이 과연 검색 효율성을 높혔는지 의문이 듭니다.'
            ,'이해도가 없는 기술을 너무 많이 적용하다 보니, 대부분의 기술이 깊은 이해도 없이 적용해본 수준에 머무는 점이 가장 아쉽고, 선택과 집중을 통해 기존에 학습한 기술들을 최대한 적용하여, 기술 숙련도를 높히는 방향으로 프로젝트를 진행하는게 더 효율적으로 시스템을 구현하는 방법이었을 것 같습니다.'
        ],
        ['페이지 별로 업무를 할당한 후 데이터베이스 설계와 화면 구성 설계를 마치자 마자 바로 각자가 맡은 부분을 개발하다 보니 페이지 간 주고 받아야 할 데이터의 변수 명과 내용을 어떻게 할지 정하지 않고 프로젝트를 진행하여 프로젝트 중간에 데이터를 주고 받는 방법을 다시 변경해야 하는 어려움이 있었습니다. '
            ,'업무 분담 및 진행 상황을 문서로 남기는 작업을 하지 않아서 개별적으로 맡은 부분이 어디까지 진행되었는지 프로젝트를 합치는 날까지 확인되지 않아 프로젝트를 합치는 날 업무 진행이 되지 않았다는 사실을 알게 되어 최종 발표날까지 프로젝트를 완성시킬 수 없었습니다.'
            ,'팀원들 기술 별 숙련도가 다르다는 것을 고려하지 않고, 페이지 별로 프로젝트를 나누다보니 프론트 쪽에 이해도가 높은 팀원이 스프링부트로 백엔드를 진행하게 되면서 많은 오류가 발생하였고, 서로 발생한 오류에 대해 공유하여 문제를 해결하는 케이스 스터디가 없었기 때문에 해당 팀원은 혼자 힘으로 오류를 해결해야 하는 어려움이 있었습니다.'
            ,'스프링부트를 처음 적용하여 어노테이션으로 클래스 내 메소드를 제어하다보니, 어노테이션 숙련도가 떨어져 잘못된 어노테이션으로 오류가 발생하는 경우가 많았습니다. 특히 어노테이션의 정확한 의미를 파악하지 못하고, 기계적으로 어노테이션을 적용하다 보니 컨트롤러에서 데이터를 처리할 때 원하지 않는 데이터가 타임리프 쪽으로 넘어가거나 restcontroller와 controller의 차이를 몰라서 뷰가 아닌 문자열을 넘겨 원하지 않는 화면이 나오는 문제가 발생하여 오류를 잡기 위해 많은 시간을 소모하였습니다.'
            ,'기존에 사용하던 JSP가 아닌 타임리프를 프론트 개발에 적용하면서, 짧은 프로젝트 기간에 타임리프를 학습하여 웹 페이지를 구현해야 하는 어려움 있었습니다. 특히 HTML에서 자바 객체를 사용할 때 별도의 구분자를 추가하여 자바 객체를 다루는 것이 아니라 HTML 태그 내 타임리프 속성 값으로 자바 객체를 다루는 방식에 익숙하지 않아 화면을 구현할 때 많은 시행착오를 겪게 되었습니다.'
            ,'부트스트랩을 적용하여 화면의 컴포넌트들을 구성하다보니 css 값 적용시 원하는대로 적용되지 않는 경우가 많았습니다. 해당 문제를 해결하고자 불필요한 <div> 값을 많이 적용하여, HTML 코드 자체가 길어져 가독성이 떨어지는 문제가 있었습니다.'
        ]
    ];

    const teamGitLinkArr = ['https://github.com/BISohn27/CombinedFinalProject','https://github.com/multi-ProjectTeam/BBC'];

    const savePersonalPathArray = (folder,end) =>{
        let tempArr = [];
        for(let i = 0; i<folder.length; i++){
            const temp = [];
            for(let j = 0; j< end[i]+1; j++){
                temp.push(process.env.PUBLIC_URL+`/img/${folder[i]}/${j}.jpg`);
            }
            tempArr.push(temp);
        }
        setPersonalImgArr(tempArr);
    };
    
    const saveTeamPathArray = (folder,end) =>{
        let tempArr = [];
        for(let i = 0; i<folder.length; i++){
            const temp = [];
            for(let j = 0; j< end[i]+1; j++){
                temp.push(process.env.PUBLIC_URL+`/img/${folder[i]}/${j}.jpg`);
            }
            tempArr.push(temp);
        }
        setTeamImgArr(tempArr);
    };

    useEffect(()=>{
        savePersonalPathArray(['shopping'],[23]);
        saveTeamPathArray(['qr','travel'],[27,8]);
    },[]);

    return(
        <div id="Projects">
            <h1 id="projectHeader">Projects</h1>
            <div style={{display:"flex",paddingLeft:"15%"}}>
                <div>
                    <h5 className="projectArticleHeader">개인 프로젝트</h5>
                    <Container fluid className="projectContentWrap">
                    <Row>
                        {personalImgSourceArr.map((source,idx)=>(<ProjectImg key={source} difficulty={personalDifficultyArr[idx]} imgSource={source} text={personalImgTextArr[idx]} header={personalImgHeaderArr[idx]} img={personalImgArr !== undefined ? personalImgArr[idx] : undefined} skill={personalSkillArr[idx]} title={personalTitleArr[idx]} paragraph={personalTextArr[idx]} url={personalGitLinkArr[idx]} summary={personalSummaryArr[idx]} learn={personalLearnArr[idx]}/>))}
                    </Row>
                    </Container>
                </div>
                <div>
                    <h5 className="projectArticleHeader">팀 프로젝트</h5>
                    <Container fluid className="projectContentWrap">
                    <Row>
                        {teamImgSourceArr.map((source,idx)=>(<ProjectImg key={source} imgSource={source} header={teamImgHeaderArr[idx]} difficulty={teamDfficultyArr[idx]} text={teamImgTextArr[idx]} img={teamImgArr !== undefined ? teamImgArr[idx] : undefined} skill={teamSkillArr[idx]} title={teamTitleArr[idx]} paragraph={teamTextArr[idx]} url={teamGitLinkArr[idx]} summary={teamSummaryArr[idx]} learn={teamLearnArr[idx]} contribution={teamContributionArr[idx]}/>))}
                    </Row>
                    </Container>
                </div>
                </div>
            </div>
    );
}