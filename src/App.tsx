import React from "react";
import Header from "./Components/Header/Header";
import "./app.css";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";

function App() {
  const [categoryName, setCategoryName] = React.useState("mobile news");
  const [favouritePosts, setFavouritePosts] = React.useState<number[]>([]);

  const clickCategory = (name: string) => {
    setCategoryName(name);
  };

  const addFavouritePost = (postId: number) => {
    setFavouritePosts((prevState) => { return ( [...prevState, postId])});
    
  };

  return (
    <>
      <Header clickCategory={clickCategory} />
      <Main
        categoryName={categoryName}
        favouritePosts={favouritePosts}
        clickCategory={clickCategory}
        addFavouritePost={addFavouritePost}
        favouriteCount={favouritePosts.length}
      />
      <Footer clickCategory={clickCategory} />
    </>
  );
}

export default App;
