import Admin from "../model/admin.js";
export const admin_signup = async (req, res) => {
  const userData = new Admin({
    name: "Tanzeel Khan",
    username: "admin",
    password: "admin",
    email: "tnt@gmail.com",
  });

  try {
    let response = await userData.save();
    console.log(response);
    res.send({
      code: 0,
      message: "Admin Registered Successfully",
      data: response,
    });
  } catch (e) {
    console.log("Error occured, possible cause: " + e.message);
    res.send({ code: 1, error: "Error occured, possible cause: " + e.message });
  }
};

export const admin_signin = async (req, res) => {
  console.log("icoming admin user name", req.body.username);
  console.log("icoming admin password", req.body.password);

  try {
    let response = await Admin.findOne({ username: req.body.username });

    if (response && response.password === req.body.password) {
      console.log("Login successful");
      res.send({ code: 0, message: "Admin login successful", data: response });
    } else if (response === null) {
      res.send({ code: -1, error: "Admin  account not found" });
    } else {
      res.send({ code: 1, error: "Wrong Password" });
    }
  } catch (e) {
    console.log("Login failed");
    res.send({ code: 1, error: "Error occured, possible cause: " + e.message });
  }
};
export const admin_update = async (req, res) => {
  let username = req.body.username;
  console.log("incoming UserName for Amin update:", username);
  console.log("incoming request body:", req.body);

  let adminData = {};

  if (req.body.username) {
    adminData.username = req.body.username;
  }

  if (req.body.name) {
    adminData.name = req.body.name;
  }

  if (req.body.password) {
    adminData.password = req.body.password;
  }

  if (req.body.email) {
    adminData.email = req.body.email;
  }

  try {
    let response = await Admin.updateOne({}, adminData);
    console.log(response);
    res.send({ code: 0, data: response });
  } catch (e) {
    console.log("Error occured, possible cause: " + e.message);
    res.send({ code: 1, error: "Error occured, possible cause: " + e.message });
  }
};
export const admin_retrive = async (req, res) => {
  try {
    const response = await Admin.findOne({});
    console.log("admin retrive response ", response);
    res.send({ code: 0, data: response });
  } catch (e) {
    console.log("Error occured, possible cause: " + e.message);
    res.send({ code: 1, error: "Error occured, possible cause: " + e.message });
  }
};
