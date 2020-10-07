import React from "react";
import GoogleButton from "react-google-button";
import { useRouter } from "next/router";
import styled from "styled-components";

import { api, apiService } from "./../store/api_service";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

export default function Home() {
  const router = useRouter();
  const fetchOAuth2LoginLink = React.useCallback(() => {
    try {
      apiService.getGoogleLoginLink().then((data) => {
        router.push(data.loginLink);
      });
    } catch (err) {
      console.log(err);
    }
  });

  return (
    <div className="container-fluid">
      <div className="row">
        <div
          className="offset-4 col-4 d-flex flex-column align-items-center justify-content-center"
          style={{ height: "100vh" }}
        >
          <div className="card">
            <div className="card-body p-2">
              <Title className="d-flex justify-content-around">
                Farmer Accounts
              </Title>
              <h6 className="d-flex justify-content-around">
                Accounting for the way you run your farm
              </h6>
              <p className="d-flex justify-content-around mb-3">
                <a href="www.easyfarm.co.in" className="small">
                  www.easyfarm.co.in
                </a>
              </p>
              <p className="small">
                Farming is unique. There are few other types of business that
                rely on living produce, whether it's crops or livestock. That
                makes farm accounting more complex than other businesses when it
                comes to assets, liabilities, costs and revenue.
              </p>
            </div>
            <div className="card-footer">
              <div className="d-flex justify-content-around">
                <GoogleButton onClick={() => fetchOAuth2LoginLink()} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
