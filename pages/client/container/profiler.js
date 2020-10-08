import React from "react";
import { useSelector } from "react-redux";

export default function profiler() {
  const { users } = useSelector((state) => {
    return {
      users: state.Users,
    };
  });
  console.log("--== Users ", users);
  const { session } = users;

  return (
    <div className="row">
      {session && (
        <React.Fragment>
          <div className="col-sm-12 col-md-6 d-flex justify-content-center">
            <img
              src={session.picture || "./empty_profile.jpeg"}
              class="img-thumbnail"
              alt="profile"
            />
          </div>
          <div className="col-sm-12 col-md-6">
            <table className="table">
              <tr>
                <th>Name</th>
                <td>{session.name}</td>
              </tr>
              <tr>
                <th>Family Name</th>
                <td>{session.family_name}</td>
              </tr>
              <tr>
                <th>Full Name</th>
                <td>{session.given_name}</td>
              </tr>
              <tr>
                <th>Email</th>
                <td>{session.email}</td>
              </tr>
            </table>
          </div>
        </React.Fragment>
      )}
    </div>
  );
}
