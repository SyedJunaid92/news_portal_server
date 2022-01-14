import User from "../model/user.js";

export const all_user = async (req, res) => {
  try {
    const result = await User.find({});
    res.json({ sucess: true, data: result });
  } catch (error) {
    res.status(501).json({ sucess: false, data: error });
  }
};
export const user_signin = async (req, res) => {
  try {
    let response = await User.findOne({ username: req.body.userName });

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
  } catch (error) {
    res.status(501).json({ sucess: false, data: error });
  }
};
export const user_signup = async (req, res) => {
  try {
    const { email, username, name, password } = req.body;
    const result = await User.create({
      email,
      username,
      name,
      password,
      active: false,
    });
    if (!result) {
      return res.json({ sucess: false, data: "Something went wrong" });
    }
    res.json({ sucess: true, data: result });
  } catch (error) {
    res.status(501).json({ sucess: false, data: error });
  }
};
export const delete_user = async (req, res) => {
  try {
    const { id } = req.body;
    console.log(id);
    const result = await User.findByIdAndDelete({ _id: id });

    res.json({ sucess: true, data: result });
  } catch (error) {
    res.json({ sucess: false, data: "User not found" });
  }
};
