import React, { Component } from "react";
import { scroller } from "react-scroll";
import "../style/screens/landingPage.css";

//components
import Header from "../components/header/Header.jsx";
import IconBlock from "../components/landingPage/IconBlock";
import GetManualBlock from "../components/landingPage/GetManualBlock";
import BubbleMorph from "../components/effect/BubbleMorph";
import QATable from "../components/qaTable/QATable";

// imgs
import app_bg from "../images/landingPage/app_bg.png";
import app_map from "../images/landingPage/app_map.png";
import enginner from "../images/landingPage/enginner.svg";
import customerService from "../images/landingPage/customerService.svg";
import superbilHead from "../images/landingPage/superbilHead.svg";
import font_ios from "../images/font/font_iOS.svg";
import font_dev from "../images/font/font_Dev.svg";

//data
import landingPage_contents_data from "../data/landingPage_contents_data";

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rwd_header_status: false
    };
  }

  componentDidMount = () => {
    window.addEventListener("scroll", this.handleOnScroll);
  };

  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.handleOnScroll);
  };

  handleOnScroll = () => {
    const wScroll = window.scrollY;
    wScroll > 50
      ? this.setState({ rwd_header_status: true })
      : this.setState({ rwd_header_status: false });
  };

  scrollToElement(element) {
    scroller.scrollTo(element, {
      duration: 500,
      smooth: true
    });
  }

  render() {
    const { rwd_header_status } = this.state;

    return (
      <div id="landingPage" name="top">
        <Header
          scrollCallback={this.scrollToElement}
          rwd_header_status={rwd_header_status}
        />

        <div className="banner">
          <div className="app_screenshoot">
            <div className="app_screenshoot_bg">
              <img src={app_bg} alt="app_screenshoot_bg" />
            </div>
            <div className="app_screenshoot_map">
              <img src={app_map} alt="app_screenshoot_map" />
            </div>
          </div>

          <div className="banner_right">
            <div className="banner_slogan">
              <h1>專業職人工程師</h1>
              <h2>
                超過 8 年的 ios 開發經驗，瞭解 ios 發展歷史，
                能針對您的需求，做適切的開發。
              </h2>
            </div>

            <div className="banner_enginner">
              <div className="dataline" />
              <div className="enginner">
                <img src={enginner} alt="superbill" />
              </div>

              <div className="bubbleMorph">
                <div className="bubble_fir">
                  <BubbleMorph nth={"1"} />
                </div>
                <div className="bubble_sec">
                  <BubbleMorph nth={"2"} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div name="serviceItems">
          <IconBlock contentsData={landingPage_contents_data.serviceItem} />
        </div>

        <GetManualBlock sort={"first"}>
          <h4>App 內可以收費嗎？Apple 平台會怎麼拆分？上架有什麼好處？</h4>
          <p>
            App 除了購買，您也可以在 App 內收費，Apple 使用條款說明，您在 App
            內收費仍需要扣除固定的手續費。 想要知道更多詳情，請留下您的 Email
            ，我們會將建議手冊寄送給您！
          </p>
        </GetManualBlock>

        <div name="coopProcess">
          <IconBlock contentsData={landingPage_contents_data.copProcess} />
        </div>

        <GetManualBlock sort={"sec"}>
          <h4>在 App 開發中，您要如何和開發人員合作？如何評估專案時程？</h4>
          <p>
            您可以將 Apple store
            當成上游廠商，提供原物料，但您仍需要專業職人工程師，協助您搭建 App。
          </p>
          <p>
            來領去建議手冊吧！您會更清楚要如何準備開發 App
            資料，幫助您和團對溝通。
          </p>
        </GetManualBlock>

        <div className="qa" name="nativeDev">
          <div className="qa_info">
            <h4>混合開發是什麼？原生開發是什麼？</h4>
            <p>
              市面上常聽到原生開發，混合開發，到底是什麼，要怎麼選擇，才是最好的？
              <br />
              您可以用下列表格，試問自己專案的需求。
            </p>
          </div>

          <QATable />

          <div className="qa_evaluation">
            <img src={customerService} alt="customerService" />
            <div className="qa_evaluation_info">
              <h4>讓我們為您做精確的評估吧！</h4>
              <p>
                原生開發、混合開發各有優缺點，技術同時也在與時俱進。除了開發的成本，也需要針對維護的能力評估。
              </p>
              <p>來和我們聊聊您的專案吧！我們能為您做出更精確的評估！</p>
            </div>
          </div>
        </div>

        <div className="person_block" name="contactUs">
          <img src={superbilHead} alt="superbill" />
          <div className="person_info">
            <div className="person_info_iosdev">
              <img src={font_ios} alt="ios" />
              <img src={font_dev} alt="dev" />
            </div>
            <p>
              我是 Superbil ，需要 App 設計上的協助嗎？
              期待與您交流想法！寫信給我吧！
            </p>
            <div className="person_info_btn">
              <input type="button" value="case@superbil.co" />
              <input type="button" value="領取建議手冊" />
            </div>
          </div>

          <div className="bubbleMorph">
            <div className="bubble_fir">
              <BubbleMorph nth={"1"} />
            </div>
            <div className="bubble_sec">
              <BubbleMorph nth={"2"} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
