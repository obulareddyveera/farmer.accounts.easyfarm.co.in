import React from "react";
import { useRouter } from "next/router";
import Spinner from "./client/components/spinner";

function OAuthCallback() {
  const router = useRouter();
  React.useEffect(() => {
    if (process.browser) {
      const search = window.location.search;
      const params = new URLSearchParams(search);
      const token = params.get("token");
      if (token) {
        window.localStorage.setItem("jwt", token);
        router.push("/app");
      }
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
