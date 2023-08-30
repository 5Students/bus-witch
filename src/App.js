import logo from "./logo.svg";
import "./App.css";
import { createGlobalStyle } from "styled-components";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
const GlobalStyle = createGlobalStyle`
 *{
      margin: 0;
      padding: 0;
      font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
  }
  body {
    text-align: center;
    margin: 0;
    min-height: 100vh;
    /* max-width: 479px; */
  }
  .hidden {height:100%; min-height:100%; overflow:hidden !important; touch-action:none;}
  .button {color: #056CF2; border-radius: 30px;}
`;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
