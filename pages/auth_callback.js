import React from "react";
import { useRouter } from "next/router";

function OAuthCallback() {
  console.log("--=== I am token controller ===--");
  const router = useRouter();
  React.useEffect(() => {
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const token = params.get("token");
    if (token) {
      window.localStorage.setItem("jwt", token);
      router.push("/dashboard");
    }
  });

  return (
    <div>
      <div>I am OAuthComponent ....Loading</div>
    </div>
  );
}

export default OAuthCallback;
