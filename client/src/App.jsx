import "./App.scss";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./features/Home";
import MyPage from "./features/MyPage";
import MyInfo from "./features/MyInfo";
import Register from "./features/Register";
import NotFound from "./components/NotFound";

import MyInfoTeacher from "./features/MyInfoTeacher";
import MyPageTeacher from "./features/MyPageTeacher";

function App() {
  return (
    <div style={{ height: '100%' }}>
      <Header />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/mypage" component={MyPage} />
        <Route path="/mypageTeacher" component={MyPageTeacher} />
        <Route path="/register" component={Register} />
        <Route path="/myinfo" component={MyInfo} />
        <Route path="/MyInfoTeacher" component={MyInfoTeacher} />
        <Route path="*" component={NotFound} />
      </Switch>

      <div style={{ textAlign: "center" }}>Created by Phiếm Fullstack with ❤️</div>
    </div>
  );
}

export default App;
