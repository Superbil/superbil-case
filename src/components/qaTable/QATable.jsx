import React from "react";
import "../../style/components/qaTable/qaTable.css";

export default function QATable() {
  return (
    <>
      <div className="qa_table">
        <table>
          <thead>
            <tr>
              <th>我希望...</th>
              <th>混合開發</th>
              <th>原生開發</th>
            </tr>
          </thead>

          <tbody>
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
          </tbody>
        </table>
      </div>

      <div className="qa_table_rwd">
        <table>
          <thead>
            <tr>
              <th>混合開發</th>
              <th />
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>可以同時上架 iOS & Android 平台</td>
              <td>✓</td>
            </tr>
            <tr>
              <td>節省開發成本</td>
              <td>✓</td>
            </tr>
            <tr>
              <td>快速驗證市場</td>
              <td>✓</td>
            </tr>
          </tbody>
        </table>

        <table>
          <thead>
            <tr>
              <th>原生開發</th>
              <th />
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>較精細的 UI 互動，支持大量圖、動畫、手勢</td>
              <td>✓</td>
            </tr>
            <tr>
              <td>更進階的客製化，最新的 UI 支援</td>
              <td>✓</td>
            </tr>
            <tr>
              <td>更好的效能，讓操作不卡卡</td>
              <td>✓</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
