import { createContext } from "react";

const PostList = createContext({})

const PostListprovider = ({children}) => {
    return <PostList.Provider value={[]}>{children}</PostList.Provider>
}

export default PostListprovider