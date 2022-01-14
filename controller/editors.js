import Admin from "../model/editor.js";
export const login = async (req, res) => {
  try {
    let response = await Admin.findOne({ username: req.body.username });

    if (response && response.password === req.body.password) {
      console.log("Login successful");
      res.send({
        sucess: true,
        message: "Editor login successful",
        data: response,
      });
    } else if (response === null) {
      res.send({ sucess: false, error: "Editor account not found" });
    } else {
      res.send({ sucess: false, error: "Wrong Password" });
    }
  } catch (e) {
    console.log("Login failed");
    res.send({
      sucess: false,
      error: "Error occured, possible cause: " + e.message,
    });
  }
};

export const updateprofile = async (req, res) => {
  let username = req.body.username;

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
    let response = await Admin.updateOne({ username }, adminData);
    console.log(response);
    res.send({ sucess: true, data: response });
  } catch (e) {
    console.log("Error occured, possible cause: " + e.message);
    res.send({
      sucess: false,
      error: "Error occured, possible cause: " + e.message,
    });
  }
};
export const signup = async (req, res) => {
  try {
    const { email, username, name, password } = req.body;
    const result = await Admin.create({
      email,
      username,
      name,
      password,
      active: false,
      warn: 0,
    });
    if (!result) {
      return res.json({ sucess: false, data: "Something went wrong" });
    }
    res.json({ sucess: true, data: result });
  } catch (error) {
    res.send({
      sucess: false,
      error: "Error occured, possible cause: " + e.message,
    });
  }
};
export const all_editors = async (req, res) => {
  try {
    const result = await Admin.find({});
    res.json({ success: true, data: result });
  } catch (error) {
    res.send({
      sucess: false,
      error: "Error occured, possible cause: " + e.message,
    });
  }
};
export const delete_editor = async (req, res) => {
  try {
    const { id } = req.body;
    console.log(id);
    const result = await Admin.findByIdAndDelete({ _id: id });

    res.json({ sucess: true, data: result });
  } catch (error) {
    res.json({ sucess: false, data: "Editor not found" });
  }
};
export const online_editor = async (req, res) => {
  try {
    const username = req.params.username;
    const result = await Admin.findOne({ username });
    if (!result) {
      return res.json({ sucess: false, data: "Editor not found" });
    }
    res.json({ sucess: false, data: result });
  } catch (error) {
    res.json({ sucess: false, data: "Editor not found" });
  }
};
export const warn_editor = async (req, res) => {
  try {
    const username = req.params.username;
    const exist = await Admin.findOne({ username });
    if (!exist) {
      return res.json({ sucess: false, data: "Editor not found" });
    }
    let warn = exist.warn + 1;
    const result = await Admin.findOneAndUpdate(
      { username },
      {
        $set: {
          warn: warn,
        },
      }
    );
    res.json({ sucess: true, data: result });
  } catch (error) {
    res.json({ sucess: false, data: "Editor not found" });
  }
};
