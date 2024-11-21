import { Button } from "@mui/material";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
const HomePage = () => {
  // console.log("👪👪👪👪👪👪👪👪👪👪👪👪👪");

  /************* */
  let [a, setA] = useState({
    data: 1,
  });
  const handleClick = () => {
    // setA(a + 1);
    // setA(a + 1);
    // setA(prev => prev + 1);
    setA({
      data: 2,
    });
  };
  /************* */
  return (
    <>
      <Helmet>
        <title>我的架构</title>
      </Helmet>
      <h1>HomePage</h1>
      <h1>{a.data}</h1>
      <Button variant="outlined" onClick={handleClick}>
        增加
      </Button>
    </>
  );
};
HomePage.whyDidYouRender = true;
export default HomePage;
