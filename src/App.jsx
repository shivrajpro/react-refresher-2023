import { useState } from "react";
import MainHeader from "./components/MainHeader";
import PostsLIst from "./components/PostsList";
function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function showModalHandler() {
    setModalIsVisible(true);
  }
  function hideModalHandler() {
    setModalIsVisible(false);
  }
  
  return <>
    <MainHeader onCreatePost={showModalHandler} />
    <main>
      <PostsLIst isPosting={modalIsVisible} stopPosting={hideModalHandler} />
    {/* <p style={{color:'blue'}} > Test CSS Styling </p> */}
    </main>
  </>;
}

export default App;
