import {useEffect,useState} from 'react';
import ProjectImg from './ProjectImg';
import '../css/Project.css';

export default function Project(){
    const personalImgSourceArr=['shopping',];
    const teamImgSourceArr=['qr','travel'];
    const personalImgHeaderArr=['쇼핑몰'];
    const teamImgHeaderArr=['내 손안의 키오스크','여행 후기'];
    const personalImgTextArr=['멀티캠퍼스 과정에서 배운 자바웹 프로그래밍 기술들을 단계별로 적용하여 기본적인 쇼핑몰 기능들을 구현한 개인 프로젝트'];
    const teamImgTextArr=['오프라인 좌석에서 QR코드 키오스크 장비 없이 인증을 통한 비대면 통합 주문 시스템을 구현','여행 후기를 올릴 수 있는 사이트'];
    
    const personalSkillArr = [['https://jaehun2841.github.io/2018/09/01/2018-09-01-servlet/servlet.png','https://media.vlpt.us/images/gkstjdwns2/post/b3d848b5-90ac-4b96-a335-da43dc33f29c/spring_2.png','https://1000logos.net/wp-content/uploads/2020/08/MySQL-Logo.jpg','https://media.vlpt.us/images/jelkov/post/080f3641-8739-42fc-8ffe-6d4b86cae85d/Html%20css.png','https://blog.kakaocdn.net/dn/boKC7y/btqMrjGUeZU/hhB62cP3OAjlLNGKKmHKqK/img.png'],
                            ];
    const teamSkillArr = undefined;

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

    const [personalImgArr,setPersonalImgArr] = useState(undefined);
    const [teamImgArr,setTeamImgArr] = useState(undefined);

    const savePersonalPathArray = (folder,end) =>{
        let tempArr = [];
        for(let i = 0; i<folder.length; i++){
            const temp = [];
            for(let j = 0; j< end[i]+1; j++){
                temp.push(`/img/${folder[i]}/${j}.jpg`);
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
                temp.push(`/img/${folder[i]}/${j}.jpg`);
            }
            tempArr.push(tempArr);
        }
        setTeamImgArr(tempArr);
    };

    useEffect(()=>{
        savePersonalPathArray(['shopping'],[23]);    
    },[]);

    console.log(personalImgArr);
    return(
        <div id="Projects">
            <h1 id="projectHeader">Projects</h1>
            <div>
                <h5 className="projectArticleHeader">개인 프로젝트</h5>
                <div className="projectContentWrap">
                    {personalImgSourceArr.map((source,idx)=>(<ProjectImg key={source} imgSource={source} text={personalImgTextArr[idx]} header={personalImgHeaderArr[idx]} img={personalImgArr !== undefined ? personalImgArr[idx] : undefined} skill={personalSkillArr[idx]} title={personalTitleArr[idx]} paragraph={personalTextArr[idx]}/>))}
                </div>
            </div>
            <div>
                <h5 className="projectArticleHeader">팀 프로젝트</h5>
                <div className="projectContentWrap">
                    {teamImgSourceArr.map((source,idx)=>(<ProjectImg key={source} imgSource={source} header={teamImgHeaderArr[idx]} text={teamImgTextArr[idx]}/>))}
                </div>
            </div>
        </div>
    );
}