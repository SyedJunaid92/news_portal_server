import createClassModel from "../model/chat.js";

export const chatting = async (req, res) => {
  try {
    const { msg, username, email } = req.body;
    const chat = {
      msg,
      username,
      email,
      date: new Date().toLocaleTimeString(),
    };

    const classDetail = await createClassModel.create({
      chat,
    });

    if (!classDetail) {
      return res.status(404).json({ message: "Not Found Class" });
    }

    res.status(200).json({ message: `Inserted ${classDetail}` });
  } catch (error) {
    res.status(500).json({ message: `Error: ${error}` });
  }
};

export const roomChat = async (req, res) => {
  const room = await createClassModel.find({});
  if (!room) {
    return res.status(404).json({ message: "Class Not Found" });
  }

  res.status(202).send(room);
};
