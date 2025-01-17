import React from "react";

function article_1() {
  return {
    date: "10 May 2023",
    title: "The Benefits of Cloud Computing",
    description:
      "Cloud computing offers a range of benefits, including cost savings and increased flexibility. Find out why more businesses are turning to the cloud.",
    keywords: ["The Benefits of Cloud Computing"],
    style: `
      .article-content {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .randImage {
        align-self: center;
        outline: 2px solid red;
      }
    `,
    body: (
      <React.Fragment>
        <div className="article-content">
          <div className="paragraph">Content of article 1</div>
          <img
            src="https://picsum.photos/200/300"
            alt="random"
            className="randImage"
          />
        </div>
      </React.Fragment>
    ),
  };
}

function article_2() {
  return {
    date: "7 May 2023",
    title: "Artificial Intelligence in Healthcare",
    description:
      "AI is transforming the healthcare industry, from improving patient outcomes to streamlining operations. Discover the latest applications of this game-changing technology.",
    keywords: ["Artificial Intelligence in Healthcare"],
    style: ``,
    body: (
      <React.Fragment>
        <h1>Content of article 2</h1>
      </React.Fragment>
    ),
  };
}

function article_3() {
  return {
    date: "15 May 2023",
    title: "Exploring Quantum Computing",
    description:
      "Quantum computing is poised to revolutionize the tech world. Learn about its principles and potential applications.",
    keywords: ["Quantum Computing", "Technology"],
    style: ``,
    body: (
      <React.Fragment>
        <div>
          <p>Quantum computing leverages quantum mechanics to process information. This emerging field has vast potential for solving complex problems.</p>
        </div>
      </React.Fragment>
    ),
  };
}

function article_4() {
  return {
    date: "20 May 2023",
    title: "The Rise of Remote Work",
    description:
      "Remote work is becoming the new norm. Explore its advantages, challenges, and the tools making it possible.",
    keywords: ["Remote Work", "Work from Home"],
    style: ``,
    body: (
      <React.Fragment>
        <div>
          <p>The shift to remote work has changed how we view productivity and collaboration. Learn how to thrive in this new work environment.</p>
        </div>
      </React.Fragment>
    ),
  };
}

const myArticles = [article_1, article_2, article_3, article_4];

export default myArticles;
