import "./styles/MainCard.css";

const IntroCardContent = ({
  main_title_1,
  main_title_2,
  main_desc,
  main_btn,
}) => (
  <div className="main-container">
    {main_title_1 && <h1 className="main-title_1">{main_title_1}</h1>}
    {main_title_2 && <h2 className="main-title_2">{main_title_2}</h2>}
    {main_desc && <p className="main-desc">{main_desc}</p>}
    {main_btn && (
      <a href="https://www.notion.so/202e1f1c9cde80d98d98dce44bc5fe16?source=copy_link">
        <div className="main-btn">{main_btn}</div>
      </a>
    )}
  </div>
);

const SelfInfoCardContent = ({
  content_title,
  content_decs,
  content_list_1,
  content_list_2,
  content_ps,
  content_list_decs,
}) => (
  <div className="self-info-container">
    {content_title && <h3 className="self-title">{content_title}</h3>}
    {content_decs && <p className="self-desc">{content_decs}</p>}
    {content_ps && <p className="self-ps">{content_ps}</p>}
    <div className="self-list-box">
      <div className="self-list-desc-box-1">
        {content_list_1 && <p className="self-list-desc-1">{content_list_1}</p>}
      </div>
      <div className="self-list-desc-box-2">
        {content_list_2 && (
          <h4 className="self-list-desc-2">{content_list_2}</h4>
        )}
        <div className="self-list-desc-box-3">
          {content_list_decs && (
            <p className="self-list-desc-3">{content_list_decs}</p>
          )}
        </div>
      </div>
    </div>
  </div>
);

const PortFolioCardContentTitle = ({ pofol_title, pofol_sub_title }) => (
  <div>
    <div className="title-wrap">
      {pofol_title && <h3 className="portfolio-title">{pofol_title}</h3>}
      {pofol_sub_title && (
        <p className="portfolio-sub-title">{pofol_sub_title}</p>
      )}
    </div>
  </div>
);

const PortFolioCardContentDesc = ({ pofol_tool, pofol_desc, pofol_img }) => (
  <div>
    <div>
      <div className="desc-wrap">
        <div>
          {pofol_tool && <p className="portfolio-desc">{pofol_tool}</p>}
        </div>
        <div>
          {pofol_desc && <p className="portfolio-desc">{pofol_desc}</p>}
        </div>
      </div>
      {pofol_img && <div className="portfolio-img">{pofol_img}</div>}
    </div>
  </div>
);

export {
  IntroCardContent,
  SelfInfoCardContent,
  PortFolioCardContentTitle,
  PortFolioCardContentDesc,
};
