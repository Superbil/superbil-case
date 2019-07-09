import React from "react";
import "../style/screens/landingPage.css";
//components
import Header from "../components/header/Header.jsx";

// imgs
import app from "../images/landingPage/App.png";
import enginner from "../images/landingPage/enginner.png";
import dataline from "../images/landingPage/dataline_desktop.png";
import customerService from "../images/landingPage/customerService.png";
import superbilHead from "../images/landingPage/superbilHead.png";
import font_slogan from "../images/font/font_slogan.svg";
import font_ios from "../images/font/font_iOS.svg";
import font_dev from "../images/font/font_Dev.svg";

import icn_developeSuggest from "../images/icon/icn_developeSuggest.svg";
import icn_techPlan from "../images/icon/icn_techPlan.svg";
import icn_AppMaintain from "../images/icon/icn_AppMaintain.svg";

const landingPage_contents_data = {
  serviceItem: {
    title: "服務項目",
    info:
      "我們專注提供 iOS App 技術，定期更新技術，能為您的 App 做最扎實的建議",
    contents: [
      {
        img: icn_developeSuggest,
        content_title: "開發建議",
        content_info:
          "針對您的需求，我們提供開發建議，用淺顯易懂的方式為您說明，讓您能快速掌握專案方向。"
      },
      {
        img: icn_techPlan,
        content_title: "技術規劃",
        content_info:
          "iOS 技術一日千里，我們定期更新技術和條款，能為您專案的規劃，找出最適合的技術配置。"
      },
      {
        img: icn_AppMaintain,
        content_title: "App 維護",
        content_info:
          "開發後的 App 維護，您也可以向我們尋求建議。我們能依據您的預算，提供適合的維護方案。"
      }
    ]
  },
  copProcess: {
    title: "合作流程",
    info: "瞭解工程師的工作流程，能讓您的企劃更完善",
    contents: [
      {
        img: icn_developeSuggest,
        content_title: "需求分析",
        content_info:
          "需要和您討論 App 目的，初步推廣想法，和是否收費，及可能用到的法規。"
      },
      {
        img: icn_developeSuggest,
        content_title: "架構規劃及報價",
        content_info:
          "我們會提供時程規劃及報價，會來回修改約數次，確保彼此的共識一致"
      },
      {
        img: icn_developeSuggest,
        content_title: "設計階段",
        content_info: "我們會提供設計稿供您調整，確保您的想法能具體實現。"
      },
      {
        img: icn_developeSuggest,
        content_title: "正式開發",
        content_info:
          "依據設計稿，我們正式為您開發 App。也會提供測試版本供您確認。"
      },
      {
        img: icn_developeSuggest,
        content_title: "App 上架",
        content_info:
          "App 上架需要購買開發員帳號這一點我們已經為您處理好。您不需擔心，如何申請新帳號。"
      },
      {
        img: icn_developeSuggest,
        content_title: "App 維護",
        content_info:
          "開發後的 App 維護，您也可以向我們尋求建議，提供適合的維護方案。"
      }
    ]
  }
};

function LandingPage() {
  return (
    <div id="landingPage">
      <Header />

      <div className="banner">
        <div className="app_screenshoot">
          <img src={app} alt="app_screenshoot" />
        </div>

        <div className="banner_right">
          <div className="banner_slogan">
            <img src={font_slogan} alt="專業職人工程師" />
            <h2>
              超過 8 年的 ios 開發經驗，瞭解 ios 發展歷史，
              能針對您的需求，做適切的開發。
            </h2>
          </div>

          <div className="banner_enginner">
            <div className="dataline">
              <img src={dataline} alt="dataline" />
            </div>
            <div className="enginner">
              <img src={enginner} alt="superbill" />
            </div>
          </div>
        </div>
      </div>

      <div className="landingPage_contents_block">
        <div className="contents_title">
          <h3>{landingPage_contents_data.serviceItem.title}</h3>
          <h4>{landingPage_contents_data.serviceItem.info}</h4>
        </div>
        <div className="contents">
          {landingPage_contents_data.serviceItem.contents.map(content => {
            return (
              <div className="content">
                <img src={content.img} alt={content.content_title} />
                <h4>{content.content_title}</h4>
                <p>{content.content_info} </p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="getManual_block getManual_first">
        <div className="getManual_info">
          <h4>App 內可以收費嗎？Apple 平台會怎麼拆分？上架有什麼好處？</h4>
          <p>
            App 除了購買，您也可以在 App 內收費，Apple 使用條款說明，您在 App
            內收費仍需要扣除固定的手續費。 想要知道更多詳情，請留下您的
            Email，我們會將建議手冊寄送給您！
          </p>
          <div className="getManual_email">
            <input type="text" placeholder="您的 Email" />
            <input type="button" value="領取建議手冊" />
          </div>
        </div>
        <div className="getManual_bg_first" />
      </div>

      <div className="landingPage_contents_block">
        <div className="contents_title">
          <h3>{landingPage_contents_data.copProcess.title}</h3>
          <h4>{landingPage_contents_data.copProcess.info}</h4>
        </div>
        <div className="contents">
          {landingPage_contents_data.copProcess.contents.map(content => {
            return (
              <div className="content">
                <img src={content.img} alt={content.content_title} />
                <h4>{content.content_title}</h4>
                <p>{content.content_info} </p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="getManual_block getManual_sec">
        <div className="getManual_info">
          <h4>在 App 開發中，您要如何和開發人員合作？如何評估專案時程？</h4>
          <p>
            您可以將 Apple store
            當成上游廠商，提供原物料，但您仍需要專業職人工程師，協助您搭建 App。
            <br />
            來領去建議手冊吧！您會更清楚要如何準備開發 App
            資料，幫助您和團對溝通。
          </p>
          <div className="getManual_email">
            <input type="text" placeholder="您的 Email" />
            <input type="button" value="領取建議手冊" />
          </div>
        </div>
        <div className="getManual_bg_sec">
          <div className="chart_circle_b" />
          <div className="chart_circle" />
        </div>
      </div>

      <div className="qa">
        <div className="qa_info">
          <h4>混合開發是什麼？原生開發是什麼？</h4>
          <p>
            市面上常聽到原生開發，混合開發，到底是什麼，要怎麼選擇，才是最好的？
            <br />
            您可以用下列表格，試問自己專案的需求。
          </p>
        </div>
        <div className="qa_table">
          <table>
            <tr>
              <th>我希望...</th>
              <th>混合開發</th>
              <th>原生開發</th>
            </tr>

            <tr>
              <td>可以同時上架 iOS & Android 平台</td>
              <td>✓</td>
              <td />
            </tr>
            <tr>
              <td>節省開發成本</td>
              <td>✓</td>
              <td />
            </tr>
            <tr>
              <td>快速驗證市場</td>
              <td>✓</td>
              <td />
            </tr>
            <tr>
              <td>較精細的 UI 互動，支持大量圖、動畫、手勢</td>
              <td />
              <td>✓</td>
            </tr>
            <tr>
              <td>更進階的客製化，最新的 UI 支援</td>
              <td />
              <td>✓</td>
            </tr>
            <tr>
              <td>更好的效能，讓操作不卡卡</td>
              <td />
              <td>✓</td>
            </tr>
          </table>
        </div>
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

      <div className="person_block">
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
      </div>
    </div>
  );
}

export default LandingPage;
