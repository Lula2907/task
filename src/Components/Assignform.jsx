import React from "react";
import "../App.css";
import { useEffect, useState } from "react";

import Swal from "sweetalert2";

const Assignform = () => {
  const baseUrl = "https://task-backend-2-eq1x.onrender.com";
  const [allUser, setAllUser] = useState([]);
  const [goal, setGoal] = useState("");
  const [course, setCourse] = useState("");
  const [topic, setTopic] = useState("");
  const [user, setUser] = useState("");
  const adminId = JSON.parse(localStorage.getItem("Admin")) || {};

  const assignTask = async () => {
    try {
      if (!goal || !course || !topic || !user) {
        return Swal.fire({
          title: "Bad news",
          text: "Fildes can't be empty",

          icon: "error"
        });
      }
      const newTask = {
        goal: goal,
        course: course,
        topic: topic,
        userId: user,
        assignedBy: adminId.adminemail
      };

      const request = {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(newTask)
      };

      const responce = await fetch(`${baseUrl}/admin/assign`, request);
      const data = await responce.json();

      if (responce.ok) {
        Swal.fire({
          title: "Good job!",
          text: "Task has assigned successfully",
          icon: "success"
        });
      } else {
        Swal.fire({
          title: "Failed to assign the task",

          icon: "error"
        });
      }
    } catch (error) {
      console.log("error in assignment", error);
    } finally {
      setGoal("");
      setCourse("");
      setUser("");
      setTopic("");
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    }
  };

  const getallUsers = async () => {
    const responce = await fetch(`${baseUrl}/user/getAlluser`);
    const data = await responce.json();

    setAllUser(data);
  };

  useEffect(() => {
    getallUsers();
  }, []);
  return (
    <>
      <div className=" box-b absolute top-[150px] sm:[600px] w-full bg-white shadow-2xl h-full">
        <div>
          <div className=" py-8 px-4 mx-auto max-w-2xl lg:py-16 shadow-2xl rounded-xl gradiant">
            <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
              Assign A Task
            </h2>
            <form
              method="post"
              onSubmit={(e) => {
                e.preventDefault();
                assignTask();
              }}
            >
              <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                <div>
                  <label
                    htmlFor="category"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Pick Goals
                  </label>
                  <select
                    required
                    onChange={(e) => {
                      setGoal(e.target.value);
                    }}
                    id="category"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  >
                    <option selected>Select Goals</option>
                    <option value="Learn Coding">Learn Coding</option>
                    <option value="Master Data Science">
                      Master Data Science
                    </option>

                    <option value="Become a UI/UX Designer">
                      Become a UI/UX Designer
                    </option>
                    <option value="Cloud & DevOps Mastery">
                      Cloud & DevOps Mastery
                    </option>
                    <option value="AI & Machine Learning Specialist">
                      AI & Machine Learning Specialist
                    </option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="category"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Pick Courses
                  </label>
                  <select
                    required
                    onChange={(e) => {
                      setCourse(e.target.value);
                    }}
                    id="category"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  >
                    <option selected>Select Courses</option>
                    <option value="Frontend Fun">Frontend Fun</option>
                    <option value="Python for Data Science">
                      Python for Data Science
                    </option>

                    <option value="Figma for Beginners">
                      Figma for Beginners
                    </option>
                    <option value="AWS for Beginners">AWS for Beginners</option>
                    <option value="Deep Learning with TensorFlow">
                      Deep Learning with TensorFlow
                    </option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="category"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Pick Topics
                  </label>
                  <select
                    required
                    onChange={(e) => {
                      setTopic(e.target.value);
                    }}
                    id="category"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  >
                    <option selected>Select Topics</option>
                    <option value="HTML & Semantic Markup">
                      HTML & Semantic Markup
                    </option>
                    <option value="pythone basics">pythone basics</option>

                    <option value="Figma basics">Figma basics</option>
                    <option value="AWS basics">AWS basics</option>
                    <option value="TensorFlow basics">TensorFlow basics</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="category"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Pick User
                  </label>
                  <select
                    required
                    onChange={(e) => {
                      setUser(e.target.value);
                    }}
                    id="category"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  >
                    <option selected>Select User</option>
                    {allUser.map((user) => (
                      <option key={user._id} value={user._id}>
                        {user.useremail}
                      </option>
                    ))}
                  </select>
                </div>
                <button
                  type="submit"
                  className=" bg-lime-400 inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-lime-400"
                >
                  Assign
                </button>
                {/* {load ? (
                  <div className="loader2"></div>
                ) : (
                  <div className="relative right-5 max-w-lg mx-auto">
                    <label
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      htmlFor="user_avatar"
                    >
                      Upload file
                    </label>
                    <input
                      onChange={(e) => {
                        handleImageUpload(e);
                      }}
                      className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                      aria-describedby="user_avatar_help"
                      id="user_avatar"
                      type="file"
                    />
                    <div
                      className="mt-1 text-sm text-gray-500 dark:text-gray-300"
                      id="user_avatar_help"
                    >
                      Please upload your products image
                    </div>
                  </div>
                )} */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Assignform;
