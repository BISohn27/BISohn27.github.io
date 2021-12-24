import {useEffect,useState} from 'react';
import ProjectImg from './ProjectImg';
import '../css/Project.css';

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
    const teamSkillArr = [[],['https://www.joshinnovations.com/adminstyles/img/gallery/1612177449.png','https://blog.kakaocdn.net/dn/bhA5Jh/btqFdnPjovv/JMXRrwJ6SdMSq5KE4ssYmk/img.png','https://1.bp.blogspot.com/-RjGFCcZvKXQ/WMwawK99xJI/AAAAAAAAAFI/dYw7ROhy9dkLbbazKwHl4-pKWgNPGIS1wCLcB/s1600/logo_og_bootstrap.png','https://1000logos.net/wp-content/uploads/2020/08/MySQL-Logo.jpg','https://media.vlpt.us/images/soso0/post/a79c4dc8-32fc-4121-812e-a8c2bcf57de3/javascript-vs-html-vs-css-1024x683.jpg','https://blog.kakaocdn.net/dn/boKC7y/btqMrjGUeZU/hhB62cP3OAjlLNGKKmHKqK/img.png',]];

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
    const personalLearningArr=[
        `배운점
 -서블릿과 JSP를 활용한 자바 웹 개발을 단계별로 적용하여 자바 웹 구조에 대해 학습할 수 있었습니다.
 -IOC 컨테이너를 서블릿 클래스로 만들어, IOC 원리를 자연스럽게 이해할 수 있었고, 스프링 프레임워크가 내부적으로 어떻게 설계되었는지 간접적으로 알 수 있었습니다.
 -완성도 높은 페이지네이션을 구현하기 위해서는 단순히 원하는 페이지 목록을 데이터베이스로부터 가져오는 것을 넘어 전체 게시글 수로 페이지 개수가 몇개까지 필요한지 계산이 필요하며, 게시글의 수가 늘어날 수록 데이터베이스로부터 원하는 목록을 가져오는데 필요한 연산량이 늘어 효율성이 떨어질 수 있다는 사실도 알게 되었습니다. 현재 프로젝트에서는 게시글 수가 적어 단순한 쿼리문을 통해 원하는 목록을 불러오고 있지만 추후 최적화된 쿼리문을 연구해볼 필요가 있습니다.
    
어려웠던 점
 -자바 웹 구현 기술을 단계별로 적용하다 보니 중간 중간 다른 기술을 적용하기 위하여, 기존에 작성된 코드 구조를 전부 바꿔줘야 하는 번거로움이 많았습니다.특히나 유지보수를 고려하지 않은 채 코드를 작성했기 때문에 클래스 명을 변경하거나, 메소드를 다른 것으로 바꾸는 등의 작업이 필요할 때 변경할 내용이 들어 있는 모든 클래스를 전부 찾아 바꿔줘야 것이 가장 큰 어려움이었던 것 같습니다. Inversion of Control 원칙과 Dependency Injection를 학습을 통해 원리를 아는 것을 넘어 실무에서 해당 원칙들을 적용하기 위한 많은 노력이 필요하다는 것을 알게 되었습니다. 해당 원칙은 스프링 프레임워크에서만 아니라 일반적인 자바 클래스를 구현할 때에도 항상 염두에 두며 구조를 설계해야 유지 보수가 용이할 수 있다는 것을 알게 되었습니다.`,
];
    const personalGitLinkArr = ['https://github.com/BISohn27/JavaWebLearn/tree/master/shopping'];

    const teamTitleArr= [
        [],
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
        [],
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
        [],
        [`코로나가 확산되면서 국가 간 이동이 힘들어진 상황에서 해외 여행에 대한 향수를 느낄 수 있는 웹사이트를 구현
 -여행 후기를 사진 위주 게시
 -인스타그램,핀터레스트 사이트 벤치마킹
 -여행지 검색하여 검색 결과 페이지로 들어가면 사용자가 올린 해당 여행지 사진들이 바둑판 배열 형식으로 나오게 구현`]
    ];
    const teamContributionArr=[
        null,
        [`기여
 -회원 시스템
 -메인 페이지
 -컨텐츠 검색 기능(Like 검색)
 -카테고리별 세부 설정 검색 기능
 -베스트 여행지 사진 디스플레이 기능
 -신규 여행지 사진 디스플레이 기능`]
    ];
    const teamLearningArr = [
        [],
        [`-배운점
 1.팀 프로젝트를 진행해보면서, 팀 프로젝트에서 발생할 수 있는 문제에 대해 알게 되었습니다.
 2.ajax 통신을 많이 사용해보면서 비동기 통신에 대한 이해를 좀 더 높일 수 있었습니다.
 3.마이바티스를 적용하여 프로젝트를 진행하여, DAO 클래스 외 다른 방식으로 SQL을 다루는 법을 배울 수 있었습니다.
 4.부트스트랩을 적용해보면서, 프론트 단의 컴포넌트 개발을 경험해볼 수 있었습니다.
       
-어려웠던 점 
 1.페이지 별로 업무를 할당한 후 데이터베이스 설계와 화면 구성 설계를 마치자 마자 바로 각자가 맡은 부분을 개발하다 보니 페이지 간 주고 받아야 할 데이터의 변수 명과 내용을 어떻게 할지 정하지 않고 프로젝트를 진행하여 프로젝트 중간에 데이터를 주고 받는 방법을 다시 변경해야 하는 어려움이 있었습니다. 
 2. 업무 분담 및 진행 상황을 문서로 남기는 작업을 하지 않아서 개별적으로 맡은 부분이 어디까지 진행되었는지 프로젝트를 합치는 날까지 확인되지 않아 프로젝트를 합치는 날 업무 진행이 되지 않았다는 사실을 알게 되어 최종 발표날까지 프로젝트를 완성시킬 수 없었습니다. 
 3. 팀원들 기술 별 숙련도가 다르다는 것을 고려하지 않고, 페이지 별로 프로젝트를 나누다보니 프론트 쪽에 이해도가 높은 팀원이 스프링부트로 백엔드를 진행하게 되면서 많은 오류가 발생하였고, 서로 발생한 오류에 대해 공유하여 문제를 해결하는 케이스 스터디가 없었기 때문에 해당 팀원은 혼자 힘으로 오류를 해결해야 하는 어려움이 있었습니다.
 4. 스프링부트를 처음 적용하여 어노테이션으로 클래스 내 메소드를 제어하다보니, 어노테이션 숙련도가 떨어져 잘못된 어노테이션으로 오류가 발생하는 경우가 많았습니다. 특히 어노테이션의 정확한 의미를 파악하지 못하고, 기계적으로 어노테이션을 적용하다 보니 컨트롤러에서 데이터를 처리할 때 원하지 않는 데이터가 타임리프 쪽으로 넘어가거나 restcontroller와 controller의 차이를 몰라서 뷰가 아닌 문자열을 넘겨 원하지 않는 화면이 나오는 문제가 발생하여 오류를 잡기 위해 많은 시간을 소모하였습니다.
 4. 기존에 사용하던 JSP가 아닌 타임리프를 프론트 개발에 적용하면서, 짧은 프로젝트 기간에 타임리프를 학습하여 웹 페이지를 구현해야 하는 어려움 있었습니다. 특히 HTML에서 자바 객체를 사용할 때 별도의 구분자를 추가하여 자바 객체를 다루는 것이 아니라 HTML 태그 내 타임리프 속성 값으로 자바 객체를 다루는 방식에 익숙하지 않아 화면을 구현할 때 많은 시행착오를 겪게 되었습니다.
 5. 부트스트랩을 적용하여 화면의 컴포넌트들을 구성하다보니 css 값 적용시 원하는대로 적용되지 않는 경우가 많았습니다. 해당 문제를 해결하고자 불필요한 <div> 값을 많이 적용하여, HTML 코드 자체가 길어져 가독성이 떨어지는 문제가 있었습니다.`]
]
    const teamGitLinkArr = ['https://github.com/BISohn27/CombinedFinalProject','https://github.com/multi-ProjectTeam/BBC'];

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
            tempArr.push(temp);
        }
        setTeamImgArr(tempArr);
    };

    useEffect(()=>{
        savePersonalPathArray(['shopping'],[23]);
        saveTeamPathArray(['qr','travel'],[0,8]);
    },[]);

    return(
        <div id="Projects">
            <h1 id="projectHeader">Projects</h1>
            <div>
                <h5 className="projectArticleHeader">개인 프로젝트</h5>
                <div className="projectContentWrap">
                    {personalImgSourceArr.map((source,idx)=>(<ProjectImg key={source} imgSource={source} text={personalImgTextArr[idx]} header={personalImgHeaderArr[idx]} img={personalImgArr !== undefined ? personalImgArr[idx] : undefined} skill={personalSkillArr[idx]} title={personalTitleArr[idx]} paragraph={personalTextArr[idx]} url={personalGitLinkArr[idx]} summary={personalSummaryArr[idx]} learning={personalLearningArr[idx]}/>))}
                </div>
            </div>
            <div>
                <h5 className="projectArticleHeader">팀 프로젝트</h5>
                <div className="projectContentWrap">
                    {teamImgSourceArr.map((source,idx)=>(<ProjectImg key={source} imgSource={source} header={teamImgHeaderArr[idx]} text={teamImgTextArr[idx]} img={teamImgArr !== undefined ? teamImgArr[idx] : undefined} skill={teamSkillArr[idx]} title={teamTitleArr[idx]} paragraph={teamTextArr[idx]} url={teamGitLinkArr[idx]} summary={teamSummaryArr[idx]} learning={teamLearningArr[idx]} contribution={teamContributionArr[idx]}/>))}
                </div>
            </div>
        </div>
    );
}