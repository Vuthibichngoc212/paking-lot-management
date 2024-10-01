import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  {
    time: "08:00",
    carInOut: 40,
    avgParkingTime: 30,
    parkingRate: 70,
    revenue: 500000,
    emptySpaces: 10,
  },
  {
    time: "09:00",
    carInOut: 50,
    avgParkingTime: 25,
    parkingRate: 60,
    revenue: 600000,
    emptySpaces: 8,
  },
  {
    time: "10:00",
    carInOut: 35,
    avgParkingTime: 40,
    parkingRate: 75,
    revenue: 400000,
    emptySpaces: 12,
  },
  {
    time: "11:00",
    carInOut: 60,
    avgParkingTime: 35,
    parkingRate: 85,
    revenue: 750000,
    emptySpaces: 5,
  },
  {
    time: "12:00",
    carInOut: 70,
    avgParkingTime: 20,
    parkingRate: 90,
    revenue: 800000,
    emptySpaces: 3,
  },
];

const StatisticsChart = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" tick={{ fontSize: 14 }} />
        <YAxis yAxisId="left" tick={{ fontSize: 14 }} />
        <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 14 }} />
        
        <Tooltip contentStyle={{ fontSize: 16 }} />
        <Legend wrapperStyle={{ fontSize: 16 }} />
        
        <Line
          yAxisId="right"
          type="monotone"
          dataKey="carInOut"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
          name="Số lượng xe ra/vào"
          strokeWidth={2}
        />
        <Line
          yAxisId="right"
          type="monotone"
          dataKey="avgParkingTime"
          stroke="#82ca9d"
          name="Thời gian đỗ xe trung bình (phút)"
          strokeWidth={2}
        />
        <Line
          yAxisId="right"
          type="monotone"
          dataKey="parkingRate"
          stroke="#ffc658"
          name="Tỉ lệ đỗ xe (%)"
          strokeWidth={2}
        />
        <Line
          yAxisId="left"
          type="monotone"
          dataKey="revenue"
          stroke="#ff7300"
          name="Doanh thu (VND)"
          strokeWidth={2}
        />
        <Line
          yAxisId="right"
          type="monotone"
          dataKey="emptySpaces"
          stroke="#ff0000"
          name="Số lượng chỗ trống"
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default StatisticsChart;
