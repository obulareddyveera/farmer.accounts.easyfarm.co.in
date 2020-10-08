export const api = {
  activeSessionUser: {
    url: "auth/users/session/active",
    method: "post",
  },
  googleLoginLink: {
    url: "api.farmer.accounts.easyfarm.co.in/",
    method: "get",
  },
  baseUrl: "api.farmer.accounts.easyfarm.co.in/",
  getProtocol: () => {
    return `${window.location.protocol}//`;
  },
};

export const apiService = {
  getGoogleLoginLink: async () => {
    debugger;
    const url = `${api.getProtocol()}${api.googleLoginLink.url}`;
    const response = await fetch(url, {
      method: api.googleLoginLink.method,
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.json();
  },
  postData: async (apiEntity, data) => {
    try {
      const url = `${api.getProtocol()}${api.baseUrl}${apiEntity.url}`;

      const request = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": localStorage.getItem("jwt"),
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
      };
      if (data) {
        request.body = JSON.stringify(data);
      }
      const response = await fetch(url, request);

      return response.json();
    } catch (error) {
      return error;
    }
  },
};
