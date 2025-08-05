import { createContext, useReducer } from "react";

const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const DEFAULT_POST_LIST = [
  {
    id: '1',
    title: 'Going To Mumbai',
    body: 'Hi Friends, I am going to Mumbai for holidays. Peace out!',
    reactions: 2,
    userId: 'user-9',
    tags: ['vacation', 'mumbai']
  }
];

const postListReducer = (currPostList, action) => {
  return currPostList;
};

const PostListprovider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, DEFAULT_POST_LIST);

  const addpost = () => {};
  const deletePost = () => {};

  return (
    <PostList.Provider value={{ postList, addpost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

// ✅ Export both
export { PostList, PostListprovider };
