import React, { useContext,useState, useEffect } from "react";
import { axiosInstance, endPoint } from "../../endPoint/api";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Authv1/AuthContext";

const NewQuestion = () => {
  const [title, setTitle] = useState("");
  const [questionDescription, setQuestionDescription] = useState("");
const { state } = useContext(AuthContext);
const { user, isAuthenticated } = state;
console.log(user)
const navigate = useNavigate()

  const handlePost = async (e) => {
    e.preventDefault();
    const token = Cookies.get("token");
    console.log("at newquestion",token)

    try {
      await axiosInstance.post(
        endPoint.QUESTIONS,
        {
          question: title,
          questionDescription: questionDescription,
         userId:state?.user.userId
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setTitle("")
      setQuestionDescription("")
      navigate('/home')
    } catch (error) {
      console.log("Error posting question:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handlePost}>
        <div className="mb-3">
          <textarea
            name="question"
            placeholder="Title"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <textarea
            name="questionDescription"
            style={{ height: "200px" }}
            placeholder="Question Description..."
            className="form-control"
            value={questionDescription}
            onChange={(e) => setQuestionDescription(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Post Your Question
        </button>
      </form>
    </div>
  );
};

export default NewQuestion;
