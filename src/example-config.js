const test = {
  firebase: {
    config: {
      apiKey: "",
      authDomain: "",
      databaseURL: "",
      projectId: "",
      storageBucket: "",
      messagingSenderId: ""
    }
  }
};

const dev = {
  firebase: {
    config: {
      apiKey: "",
      authDomain: "",
      databaseURL: "",
      projectId: "",
      storageBucket: "",
      messagingSenderId: ""
    }
  }
};

const prod = {
  firebase: {
    config: {
      apiKey: "",
      authDomain: "",
      databaseURL: "",
      projectId: "",
      storageBucket: "",
      messagingSenderId: ""
    }
  }
};

const config = env => {
  switch (env) {
    case "testing":
      return test;
    case "development":
      return dev;
    case "production":
      return prod;
    default:
      return test;
  }
};

export default {
  ...config(process.env.REACT_APP_STAGE)
};
