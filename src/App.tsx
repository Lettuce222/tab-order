import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [tabs, setTabs] = useState<chrome.tabs.Tab[]>([]);

  useEffect(() => {
    // タブの情報を取得して状態にセット
    chrome.tabs.query({}, (tabs) => {
      setTabs(tabs);
    });
  }, []);

  // タブをアクティブにする関数
  const activateTab = (tabId: number | undefined) => {
    if (tabId) {
      chrome.tabs.update(tabId, { active: true });
    }
  };

  return (
    <div>
      <h1>Open Tabs</h1>
      <ul>
        {tabs.map((tab) => (
          <li key={tab.id} onClick={() => activateTab(tab.id)} style={{cursor: 'pointer'}}>
            {tab.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
