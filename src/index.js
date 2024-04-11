import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.less';
import App from './App';
import reportWebVitals from './reportWebVitals';
import locale from 'antd/locale/zh_CN';
import {ConfigProvider} from "antd";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
	  <ConfigProvider locale={locale}>
		  <App />
	  </ConfigProvider>
  </React.StrictMode>
);

reportWebVitals();
