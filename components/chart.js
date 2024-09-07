"use client";

import React from "react";
import { Chart } from "react-google-charts";

export function ChartGraph({ title, population }) {
  const options = {
    title,
    chartArea: { width: "75%" },
    hAxis: {
      title: "Total Population",
      minValue: Math.min(...population.map((pop) => parseInt(pop.value))),
    },
    vAxis: {
      title: "Year",
      minValue: Math.min(...population.map((pop) => parseInt(pop.year))),
    },
  };
  const data = [
    ["Year", "Population"],
    ...population.map((pop) => [parseInt(pop.year), parseInt(pop.value)]),
  ];
  return (
    <div>
      <Chart
        chartType="BarChart"
        width="100%"
        height="400px"
        data={data}
        options={options}
      />
    </div>
  );
}
