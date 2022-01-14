import Article from "../model/create_article.js";
import { v4 as uuidv4 } from "uuid";

export const create_article = async (req, res) => {
  try {
    const { title, body, author, image, tags } = req.body;
    let status;

    var check = plag_checker();
    {
      check < 40 ? (status = true) : (status = false);
    }

    const result = await Article.create({
      title,
      body,
      author,
      image,
      tags,
      like: 0,
      dislike: 0,
      uuid: uuidv4(),
      status,
      plag: check,
    });
    res.json({ sucess: true, data: result });
  } catch (error) {
    res.status(501).json({ sucess: false, data: error });
  }
};
export const delete_article = async (req, res) => {
  try {
    const uuid = req.params.uuid;
    const exist = await Article.findOneAndDelete({ uuid });
    if (!exist) {
      res.json({ sucess: false, data: "Article not found" });
    }
    res.json({ sucess: true, data: "Deleted" });
  } catch (error) {
    res.status(501).json({ sucess: false, data: error });
  }
};
export const update_article = async (req, res) => {
  try {
    const { title, body, image, tags, uuid } = req.body;
    await Article.findOneAndUpdate(
      { uuid },
      {
        $set: {
          title,
          body,
          image,
          tags,
        },
      }
    );
    res.json({ sucess: true, data: "Updated" });
  } catch (error) {
    res.status(501).json({ sucess: false, data: error });
  }
};
export const getarticle = async (req, res) => {
  try {
    const author = req.params.author;
    console.log(author);
    const result = await Article.find({ author });
    console.log(result);
    if (!result) {
      return res.json({ sucess: false, data: "Articles not found" });
    }
    res.json({ sucess: true, data: result });
  } catch (error) {
    res.status(501).json({ sucess: false, data: error });
  }
};

export const all_article = async (req, res) => {
  try {
    const result = await Article.find({});
    if (!result) {
      return res.json({ sucess: false, data: "Articles not found" });
    }
    res.json({ sucess: true, data: result });
  } catch (error) {
    res.status(501).json({ sucess: false, data: error });
  }
};

export const article_status = async (req, res) => {
  try {
    const { id, active } = req.body;
    console.log(id, active);
    const result = await Article.findByIdAndUpdate(
      { _id: id },
      {
        $set: {
          status: active,
        },
      }
    );
    if (!result) {
      return res.json({ sucess: false, data: "Articles not found" });
    }
    res.json({ sucess: true, data: result });
  } catch (error) {
    res.json({ sucess: false, data: "Articles not found" });
  }
};

const plag_checker = () => {
  const options = {
    method: "POST",
    url: "https://plagiarism-checker-and-auto-citation-generator-multi-lingual.p.rapidapi.com/plagiarism",
    headers: {
      "content-type": "application/json",
      "x-rapidapi-host":
        "plagiarism-checker-and-auto-citation-generator-multi-lingual.p.rapidapi.com",
      "x-rapidapi-key": "4ddd17dfe0msh1d34677b826a198p162601jsn377e73919206",
    },
    data: {
      text: "alasud",
      language: "en",
      includeCitations: false,
      scrapeSources: false,
    },
  };
  let plag_checker = Math.floor(Math.random() * (80 - 30 + 1)) + 0;
  return plag_checker;
};
