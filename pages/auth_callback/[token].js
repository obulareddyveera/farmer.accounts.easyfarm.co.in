import React from "react";
import { useRouter } from "next/router";
import Spinner from "../client/components/spinner";

function OAuthCallback() {
  console.log("--=== I am token controller ===--");
  const router = useRouter();
  React.useEffect(() => {
    console.log(router.query);
    const {token} = router.query;
    if (token) {
      window.localStorage.setItem("jwt", token);
      router.push("/app");
    }
  });

  return (
    <div className="container">
      <div className="row" style={{ height: "100vh" }}>
        <div className="offset-5 col-2 d-flex flex-column align-items-center justify-content-center">
          <Spinner width="6rem" height="6rem" />
        </div>
      </div>
    </div>
  );
}

export default OAuthCallback;
