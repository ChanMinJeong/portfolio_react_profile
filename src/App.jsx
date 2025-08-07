import "./global_styles/App.css";
import HeaderNav from "./components/HeaderNav.jsx";
import {
  IntroCardContent,
  SelfInfoCardContent,
  PortFolioCardContentTitle,
  PortFolioCardContentDesc,
} from "./components/MainCard.jsx";
import SelfImg from "./assets/my-img.jpg";
import Nike from "./assets/nike_portfolio_page.png";
import Carrot from "./assets/carrot_portfolio_page.png";
import React from "./assets/react_portfolio_page.png";
import Publisher from "./assets/publisher_img.png";
import See from "./assets/see.png";

function HeaderSection() {
  return (
    <>
      <HeaderNav
        title="Chan Min"
        sub_title="Web Publisher"
        btn1="HOME"
        btn2="ABOUT"
        btn3="PORTPOLIO"
        btn4="LINK"
        about="본 사이트의 퍼블리싱 포함 모든 작업물 기여도는 100% 입니다."
      />
    </>
  );
}

function MainInfoSection(props) {
  return <IntroCardContent {...props} />;
  // (
  //   <>
  //     <IntroCardContent
  //       main_title="성과 중심 역량을 쌓아온 정찬민입니다."
  //       main_desc="저는 문제의 원인을 파악하고 해결하는 과정을 좋아하는 퍼블리셔 지망생입니다."
  //       main_btn="버튼 "
  //     />
  //   </>
  // );
}

function MainSelfSection(props) {
  return <SelfInfoCardContent {...props} />;
}

function PortFolioTitleSection(props) {
  return <PortFolioCardContentTitle {...props} />;
}

function PortFolioDescSection(props) {
  return <PortFolioCardContentDesc {...props} />;
}

function App() {
  return (
    <>
      {/* 맨 아래쪽 배경(필요없을수도) */}
      <div className="background">
        {/* 헤더<->카드를 감싸는 부모 */}
        <div className="wrap">
          {/* 헤더 컨텐츠*/}
          <nav>
            <div className="header-nav">
              <HeaderSection />
            </div>
          </nav>
          {/* 메인 컨텐츠 */}
          <main>
            <div className="main-card-wrap">
              <div className="main-card-home" id="home">
                <div className="main-card-desc">
                  <MainInfoSection main_title_1="성과 중심의 역량을 쌓아온" />
                  <MainInfoSection main_title_2="정찬민입니다." />
                  <MainInfoSection main_desc="끊임없이 배움을 추구함과 동시에 다양한 업무 경험을 바탕으로 문제 해결 능력을 키운 WebPublisher" />
                  <MainInfoSection main_desc="정찬민입니다. 어떤 업무를 맡더라도 항상 최선의 결과를 만들어내기 위해 고민하고 행동하여" />
                  <MainInfoSection main_desc="성과를 인정받았습니다. 함께 일하고 싶은 동료가 되자는 가치관을 가지고 열린 태도로 소통하고" />
                  <MainInfoSection main_desc="흐름을 함께 만드는 동료로서 역활을 성실히 해낼 준비가 되어있습니다" />
                </div>

                <div className="main-card-btn">
                  <MainInfoSection main_btn="More +" />
                </div>
              </div>

              <div className="main-card-profile" id="profile">
                <div className="main-card-profile-tilte">
                  <div className="main-card-profile-title-content">
                    <h4 className="main-card-profile-tilte-text">About Me</h4>
                    <div className="underline"></div>
                    <img
                      className="main-card-profile-img"
                      src={SelfImg}
                      alt="증명사진"
                    />
                  </div>
                </div>

                <div className="main-card-profile-text">
                  <div>
                    <MainSelfSection content_title="안녕하세요," />
                    <MainSelfSection content_decs="2012년부터 사회경험을 쌓아온 웹 퍼블리셔 지망생 정찬민입니다. " />
                    <MainSelfSection content_decs="포천시청 입사 후 1년 만에 민원처리부분 장려상을 수상하였습니다." />
                    <MainSelfSection content_decs="나아가 청사 에너지관리 및 인허가 처리 부분에서 공로를 인정받아  " />
                    <MainSelfSection content_decs=" 경기도지사 표창을 받는 성과를 이루어 내어 발자취를 남겼습니다. " />
                    <MainSelfSection content_decs="(주)더월클라이밍에서는 지점 매니저로써 다양한 사람들과 함께 일하며" />
                    <MainSelfSection content_decs="열린 사고방식을 가지고 커뮤니케이션 능력을 키웠습니다." />
                  </div>
                  <div className="main-card-line"></div>

                  <div className="main-card-profile-decs-box-title">
                    <MainSelfSection
                      content_list_1="2012. 11."
                      MainSelfSection
                      content_list_2="포천시청 입사"
                    />
                    <MainSelfSection content_list_decs="재난관리과 하천팀 발령" />
                  </div>
                  <div className="main-card-profile-decs-box">
                    <MainSelfSection
                      content_list_1="2014. 02."
                      MainSelfSection
                      content_list_2="민원처리부분 포천시장 장려상 수상"
                    />
                    <MainSelfSection content_list_decs="지하수 개발 인허가 및 민원처리 1,100건 처리" />
                    <div className="main-card-profile-decs-box">
                      <MainSelfSection
                        content_list_1="2014. 08."
                        MainSelfSection
                        content_list_2="8급 공무원 승진"
                      />
                    </div>
                    <div className="main-card-profile-decs-box">
                      <MainSelfSection
                        content_list_1="2016. 09."
                        MainSelfSection
                        content_list_2="회계과 청사관리팀 부서이동"
                      />
                      <MainSelfSection content_list_decs="청사 에너지 사용량 데이터화" />
                      <MainSelfSection content_list_decs="2018년도 온실가스 감축 28%달성" />
                    </div>
                    <div className="main-card-profile-decs-box">
                      <MainSelfSection
                        content_list_1="2019. 01."
                        MainSelfSection
                        content_list_2="7급 공무원 승진"
                      />

                      <MainSelfSection content_list_decs="공장 설립 인허가 부서 이동" />
                    </div>
                    <div className="main-card-profile-decs-box">
                      <MainSelfSection
                        content_list_1="2019. 08."
                        MainSelfSection
                        content_list_2="경기도지사 자랑스러운 공무원 표창 수상"
                      />
                    </div>
                    <div className="main-card-profile-decs-box">
                      <MainSelfSection
                        content_list_1="2022. 04."
                        MainSelfSection
                        content_list_2="(주)더 월 클라이밍 입사"
                      />
                      <MainSelfSection content_list_decs="직원 스케줄 관리 및 고객응대" />
                    </div>
                    <div className="main-card-profile-decs-box-line"></div>
                  </div>
                  <div className="main-card-line"></div>
                  <div className="main-card-profile-ps-box">
                    <MainSelfSection content_ps="정찬민" />
                    <MainSelfSection content_ps="1994. 06. 27." />
                    <MainSelfSection content_ps="dnatkdh@gmail.com" />
                  </div>
                </div>
              </div>

              <div className="portfolio-wab-link" id="portpolio">
                <div className="portfolio-wab-link-wrap">
                  <div>
                    <h3 className="portfolio-wab-link-title">Portfolio</h3>
                    <p className="portfolio-wab-link-sub-title">
                      Web Publishing
                    </p>
                    <div className="underline"></div>
                  </div>
                  <div className="portfolio-wab-link-desc">
                    <div className="portfolio-img-wrap">
                      <a href="https://portfolio-nike-homepage-tkmu-git-main-chanminjeongs-projects.vercel.app/">
                        <img
                          className="portfolio-img"
                          src={Nike}
                          alt="나이키 홈페이지"
                        />
                      </a>
                    </div>
                    <div className="portfolio-text-wrap">
                      <div>
                        <PortFolioTitleSection pofol_title="적응형 홈페이지" />
                        <PortFolioTitleSection pofol_sub_title="2025. 06. 개인 프로젝트" />
                        <PortFolioDescSection
                          pofol_tool="작업부분:"
                          PortFolioSection
                          pofol_desc="웹 퍼블리싱"
                        />

                        <PortFolioDescSection
                          pofol_tool="작업툴:"
                          PortFolioSection
                          pofol_desc="VS Code"
                        />
                        <PortFolioDescSection pofol_tool="작업언어" />
                      </div>
                      <div className="portfolio-language">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
                      </div>
                    </div>
                  </div>
                  <div className="portfolio-wab-link-desc">
                    <div className="portfolio-img-wrap">
                      <a
                        href="https://portfolio-carrot-homepage-git-main-chanminjeongs-projects.vercel.app
"
                      >
                        <img
                          className="portfolio-img"
                          src={Carrot}
                          alt="당근 비즈니스 홈페이지"
                        />
                      </a>
                    </div>

                    <div className="portfolio-text-wrap">
                      <div>
                        <PortFolioTitleSection pofol_title="적응형 홈페이지" />
                        <PortFolioTitleSection pofol_sub_title="2025. 07. 개인 프로젝트" />
                        <PortFolioDescSection
                          pofol_tool="작업부분:"
                          PortFolioSection
                          pofol_desc="웹 퍼블리싱"
                        />

                        <PortFolioDescSection
                          pofol_tool="작업툴:"
                          PortFolioSection
                          pofol_desc="VS Code"
                        />
                        <PortFolioDescSection pofol_tool="작업언어" />
                      </div>
                      <div className="portfolio-language">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
                      </div>
                    </div>
                  </div>
                  <div className="portfolio-wab-link-desc">
                    <div className="portfolio-img-wrap">
                      <a href="#">
                        <img
                          className="portfolio-img"
                          src={React}
                          alt="리액트 포트폴리오 페이지"
                        />
                      </a>
                    </div>
                    <div className="portfolio-text-wrap">
                      <div>
                        <PortFolioTitleSection pofol_title="반응형 홈페이지" />
                        <PortFolioTitleSection pofol_sub_title="2025. 07. 개인 프로젝트" />
                        <PortFolioDescSection
                          pofol_tool="작업부분:"
                          PortFolioSection
                          pofol_desc="웹 퍼블리싱"
                        />

                        <PortFolioDescSection
                          pofol_tool="작업툴:"
                          PortFolioSection
                          pofol_desc="VS Code"
                        />
                        <PortFolioDescSection pofol_tool="작업언어" />
                      </div>
                      <div className="portfolio-language">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg" />
                      </div>
                    </div>
                  </div>
                  <a
                    href="https://www.notion.so/202e1f1c9cde80d98d98dce44bc5fe16?source=copy_link"
                    className="portpolio-notion-link"
                  >
                    <div className="portpolio-notion-link-box">
                      <div className="portpolio-notion-link-btn">
                        <svg
                          className="link-svg"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                        </svg>
                        <h4>작업기록</h4>
                        <p>노션 페이지</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
