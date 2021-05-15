import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { ConfigProvider } from "antd";
import koFR from "antd/lib/locale/ko_KR";
import { hot } from 'react-hot-loader/root'

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <ConfigProvider locale={koFR}>
                <App />
            </ConfigProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);

// env를 통한 환경설정을 하고 있다고 가정. 딱히 배포계획이 없는 개인 프로젝트라면
// 일단 그냥 hot(App)으로 감싸고 테스트해보시길
export default hot(App);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
