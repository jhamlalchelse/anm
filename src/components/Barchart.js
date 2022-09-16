import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { UserData } from "./UserData";
import { Chart as ChartJS } from "chart.js/auto";

const BarChart = () => {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.date),
    datasets: [
      {
        label: "Rate/Quintal max-price",
        data: UserData.map((data) => data.max),
        backgroundColor: ["#228B22"],
        barThickness: 30,
        borderRadius: 50,   
      },
      {
        label: "Rate/Quintal min-price",
        data: UserData.map((data) => data.min),
        backgroundColor: ["#C5012D"],
        barThickness: 30,
        borderRadius: 50,
      },
    ],
  });

  return (
    <>
      <div className=" mx-auto">
        <Bar data={userData} />
      </div>
    </>
  );
};

export default BarChart;
