import React from "react";

const commentsData = [
  {
    name: "Surendra Yalakala",
    text: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
    replies: [
      {
        name: "Surendra Yalakala",
        text: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
        replies: [],
      },
      {
        name: "Surendra Yalakala",
        text: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
        replies: [
          {
            name: "Surendra Yalakala",
            text: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Surendra Yalakala",
    text: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
    replies: [
      {
        name: "Surendra Yalakala",
        text: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
        replies: [
          {
            name: "Surendra Yalakala",
            text: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
            replies: [],
          },
          {
            name: "Surendra Yalakala",
            text: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
            replies: [
              {
                name: "Surendra Yalakala",
                text: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
                replies: [
                  {
                    name: "Surendra Yalakala",
                    text: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
                    replies: [
                      {
                        name: "Surendra Yalakala",
                        text: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
                        replies: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Surendra Yalakala",
        text: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
        replies: [],
      },
    ],
  },
  {
    name: "Surendra Yalakala",
    text: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2  rounded-lg my-2">
      <img
        className="w-12 h-12"
        alt="user"
        src={"https://cdn-icons-png.flaticon.com/512/149/149071.png"}
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) =>
  comments.map((comment, index) => (
    <div>
      <Comment key={index} data={comment} />
      <div className="pl-5 border border-l-gray-100 ml-5">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
