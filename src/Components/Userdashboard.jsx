import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const Userdashboard = () => {
  const baseUrl = "https://task-backend-2-eq1x.onrender.com";
  const [assignments, setAssignments] = useState([]);
  const userId = JSON.parse(localStorage.getItem("User")) || {};

  const fetchAssignments = async () => {
    try {
      const response = await fetch(
        `${baseUrl}/user/assignments/${userId[0]._id}`
      );
      const data = await response.json();
      console.log(13, data);

      if (response.ok) {
        setAssignments(data);
      } else {
        Swal.fire({
          title: "Error",
          text: "Failed to fetch assignments",
          icon: "error"
        });
      }
    } catch (error) {
      console.error("Error fetching assignments:", error);
    }
  };

  useEffect(() => {
    if (userId) fetchAssignments();
  }, []);

  return (
    <div className="container mx-auto p-6 min-h-[600px]">
      <h2 className="text-2xl font-bold mb-4">My Assignments</h2>
      {assignments.length > 0 ? (
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {assignments.map((assignment) => (
            <div
              key={assignment._id}
              className="bg-white p-4 rounded-lg shadow-lg"
            >
              <h3 className="text-lg font-semibold">{assignment.course}</h3>
              <p className="text-gray-700">Goal: {assignment.goal}</p>
              <p className="text-gray-700">Topic: {assignment.topic}</p>
              <p className="text-gray-700">
                Date: {new Date(assignment.assignedAt).toLocaleDateString()}
              </p>
              <p className="text-gray-700">
                Time: {new Date(assignment.assignedAt).toLocaleTimeString()}
              </p>
              <p className="text-gray-500 text-sm">
                Assigned By: {assignment.assignedBy}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600">No assignments found.</p>
      )}
    </div>
  );
};

export default Userdashboard;
