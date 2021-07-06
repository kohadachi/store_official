import React, { useState, useEffect } from "react";
import InstagramLogin from "react-instagram-oauth";
import "./App.css";

export const App: React.FC = () => {
  // const [data, setData] = useState<any>();
  const fetchFacebookApiToken = () => {
    console.log("fetch");

    // アクセストークン
    // let token =
    //   "IGQVJXTmFZANTdTZADJnSkdPOXJKd2trODJLcjExZAVQzekgzTnZAWUS1FQjVSYW44b01RNDVZAa0g2LWJrb21yOXVjanNnQ3VQQ2Y5NVNkSHBPV2ZANSVBnQ0R1cHV3bFF6MGNkZA0ZAwVmV6R1lSMm4xbGl3RwZDZD";
    // fetch(
    //   `https://graph.instagram.com/me/media?fields=id,username,caption,media_type,media_url,permalink&access_token=${token}`
    // )
    //   .then((res) => res.json())
    //   .then((json) => {
    //     setData(json);
    //   });
    fetch(
      `https://api.instagram.com/oauth/authorize?client_id=551891612493691&redirect_uri=https://blueish.co.jp/&scope=user_profile,user_media&response_type=code`
    )
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        // setData(json);
      });
  };

  const responseInstagram = (response: any) => {
    console.log(response);
  };

  useEffect(() => {
    fetchFacebookApiToken();
  }, []);

  // console.log("API取得データ", data.data[0]);
  return (
    <InstagramLogin
      authCallback={responseInstagram}
      appId="551891612493691"
      appSecret="c05590cdf6f448a1616d38c71600e246"
      redirectUri="https://store-official.netlify.app/"
    />
  );
};
