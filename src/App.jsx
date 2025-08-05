import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import CreatePost from "./components/CreatePost";
import { PostListprovider } from "./store/post-list-store";
import PostList from "./components/PostList";

function App() {
  const [selectedTab, setSelectedTab] = useState("Create post");

  return (
    <PostListprovider>
      <div className="app-container">
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <div className="content">
          <Header />
          {selectedTab === "Create post" ? <CreatePost /> : <PostList />} {/* ✅ Fixed */}
          <Footer />
        </div>
      </div>
    </PostListprovider>
  );
}

export default App;
