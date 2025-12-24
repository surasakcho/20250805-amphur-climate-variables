import React from "react";
import { LazyPlotly } from "../../../../src/components/Plots";

// 1. VARIABLE DEFINITIONS (Colors and Names)
const VARS = [
  {
    group: "อุณหภูมิ (T)",
    short: "T",
    name: "Baseline",
    color: "rgb(214.0, 199.6, 223.6)",
    rank: 5
  },
  {
    group: "อุณหภูมิ (T)",
    short: "T",
    name: "Trend",
    color: "rgb(181.0, 152.2, 200.2)",
    rank: 4
  },
  {
    group: "อุณหภูมิ (T)",
    short: "T",
    name: "Seasonal",
    color: "rgb(148.0, 104.8, 176.8)",
    rank: 3
  },
  {
    group: "อุณหภูมิ (T)",
    short: "T",
    name: "Idiosyncratic",
    color: "rgb(115.0, 57.4, 153.4)",
    rank: 2
  },
  {
    group: "อุณหภูมิ (T)",
    short: "T",
    name: "Covariate",
    color: "rgb(82.0, 10.0, 130.0)",
    rank: 1
  },
  {
    group: "ปริมาณน้ำฝน (P)",
    short: "P",
    name: "Baseline",
    color: "rgb(206.6, 217.6, 225.4)",
    rank: 10
  },
  {
    group: "ปริมาณน้ำฝน (P)",
    short: "P",
    name: "Trend",
    color: "rgb(166.2, 188.2, 203.8)",
    rank: 9
  },
  {
    group: "ปริมาณน้ำฝน (P)",
    short: "P",
    name: "Seasonal",
    color: "rgb(125.8, 158.8, 182.2)",
    rank: 8
  },
  {
    group: "ปริมาณน้ำฝน (P)",
    short: "P",
    name: "Idiosyncratic",
    color: "rgb(85.4, 129.4, 160.6)",
    rank: 7
  },
  {
    group: "ปริมาณน้ำฝน (P)",
    short: "P",
    name: "Covariate",
    color: "rgb(45.0, 100.0, 139.0)",
    rank: 6
  },
  {
    group: "ดัชนี SPI-3",
    short: "SPI",
    name: "Baseline",
    color: "rgb(198.8, 216.4, 205.8)",
    rank: 15
  },
  {
    group: "ดัชนี SPI-3",
    short: "SPI",
    name: "Trend",
    color: "rgb(150.6, 185.8, 164.6)",
    rank: 14
  },
  {
    group: "ดัชนี SPI-3",
    short: "SPI",
    name: "Seasonal",
    color: "rgb(102.4, 155.2, 123.4)",
    rank: 13
  },
  {
    group: "ดัชนี SPI-3",
    short: "SPI",
    name: "Idiosyncratic",
    color: "rgb(54.2, 124.6, 82.2)",
    rank: 12
  },
  {
    group: "ดัชนี SPI-3",
    short: "SPI",
    name: "Covariate",
    color: "rgb(6.0, 94.0, 41.0)",
    rank: 11
  },
];

const CROPS_8 = [
  "ทุเรียน",
  "ยางพารา",
  "ข้าวโพดเลี้ยงสัตว์",
  "อ้อย",
  "มันสำปะหลัง",
  "ข้าวเหนียว",
  "ข้าวเจ้า",
  "ข้าวหอมมะลิ",
];
const CROPS_4 = ["ทุเรียน", "ยางพารา", "ข้าวเจ้า", "ข้าวหอมมะลิ"];

// 2. DATA MAPPING (Extracted from your source)
const REGION_DATA = [
  {
    name: "ภาคกลาง",
    suffix: "",
    domain: [0.75, 1.0],
    crops: CROPS_8,
    xValues: [
      [0.101, 0.003, 0.037, 0.002, 0.005, 0.048, 0.055, 0.113], // T Base
      [0.014, 0.069, 0.047, 0.078, 0.053, 0.059, 0.012, 0.01], // T Trend
      [0.107, 0.007, 0.03, 0.004, 0.03, 0.13, 0.161, 0.063], // T Sea
      [0.023, 0.018, 0.005, 0.006, 0.004, 0.004, 0.063, 0.014], // T Idio
      [0.0, 0.018, 0.034, 0.044, 0.011, 0.008, 0.002, 0.0], // T Cov
      [0.125, 0.008, 0.074, 0.004, 0.028, 0.116, 0.101, 0.039], // P Base
      [0.052, 0.008, 0.025, 0.015, 0.031, 0.165, 0.072, 0.015], // P Trend
      [0.049, 0.004, 0.095, 0.001, 0.013, 0.091, 0.072, 0.033], // P Sea
      [0.013, 0.004, 0.003, 0.009, 0.002, 0.005, 0.009, 0.003], // P Idio
      [0.001, 0.03, 0.037, 0.106, 0.004, 0.003, 0.0, 0.0], // P Cov
      [0.04, 0.006, 0.012, 0.005, 0.019, 0.022, 0.013, 0.013], // SPI Base
      [0.042, 0.023, 0.021, 0.036, 0.052, 0.034, 0.031, 0.013], // SPI Trend
      [0.121, 0.004, 0.116, 0.001, 0.041, 0.051, 0.037, 0.024], // SPI Sea
      [0.002, 0.001, 0.003, 0.021, 0.01, 0.004, 0.002, 0.001], // SPI Idio
      [0.005, 0.013, 0.012, 0.02, 0.001, 0.006, 0.001, 0.0], // SPI Cov
    ],
  },
  {
    name: "ภาคเหนือ",
    suffix: "2",
    domain: [0.46, 0.71],
    crops: CROPS_8,
    xValues: [
      [0.027, 0.0, 0.043, 0.002, 0.021, 0.035, 0.069, 0.039], // T Base
      [0.012, 0.035, 0.085, 0.072, 0.002, 0.018, 0.015, 0.016], // T Trend
      [0.092, 0.004, 0.013, 0.002, 0.041, 0.058, 0.068, 0.046], // T Sea
      [0.028, 0.014, 0.039, 0.008, 0.011, 0.008, 0.009, 0.012], // T Idio
      [0.012, 0.035, 0.012, 0.031, 0.011, 0.023, 0.015, 0.01], // T Cov
      [0.016, 0.001, 0.078, 0.001, 0.079, 0.105, 0.132, 0.09], // P Base
      [0.004, 0.003, 0.019, 0.011, 0.007, 0.037, 0.032, 0.03], // P Trend
      [0.026, 0.0, 0.061, 0.001, 0.047, 0.203, 0.231, 0.136], // P Sea
      [0.027, 0.01, 0.006, 0.001, 0.012, 0.007, 0.007, 0.004], // P Idio
      [0.03, 0.031, 0.032, 0.097, 0.017, 0.004, 0.0, 0.002], // P Cov
      [0.079, 0.001, 0.006, 0.002, 0.008, 0.007, 0.019, 0.009], // SPI Base
      [0.022, 0.007, 0.084, 0.052, 0.003, 0.068, 0.03, 0.031], // SPI Trend
      [0.028, 0.0, 0.034, 0.002, 0.039, 0.022, 0.011, 0.04], // SPI Sea
      [0.04, 0.007, 0.009, 0.003, 0.004, 0.003, 0.002, 0.008], // SPI Idio
      [0.003, 0.006, 0.011, 0.017, 0.011, 0.006, 0.003, 0.002], // SPI Cov
    ],
  },
  {
    name: "ภาคตะวันออก<br>เฉียงเหนือ",
    suffix: "3",
    domain: [0.17, 0.42],
    crops: CROPS_8,
    xValues: [
      [0.074, 0.001, 0.017, 0.001, 0.007, 0.014, 0.004, 0.006], // T Base
      [0.064, 0.044, 0.004, 0.064, 0.129, 0.005, 0.033, 0.011], // T Trend
      [0.074, 0.002, 0.086, 0.001, 0.017, 0.014, 0.004, 0.02], // T Sea
      [0.006, 0.012, 0.012, 0.003, 0.005, 0.025, 0.005, 0.008], // T Idio
      [0.044, 0.029, 0.009, 0.021, 0.003, 0.025, 0.028, 0.025], // T Cov
      [0.063, 0.002, 0.042, 0.001, 0.009, 0.018, 0.006, 0.006], // P Base
      [0.12, 0.01, 0.017, 0.017, 0.023, 0.011, 0.009, 0.034], // P Trend
      [0.083, 0.003, 0.056, 0.002, 0.032, 0.011, 0.002, 0.004], // P Sea
      [0.01, 0.026, 0.003, 0.002, 0.006, 0.032, 0.002, 0.031], // P Idio
      [0.001, 0.056, 0.001, 0.07, 0.027, 0.001, 0.014, 0.004], // P Cov
      [0.042, 0.007, 0.011, 0.006, 0.017, 0.01, 0.011, 0.003], // SPI Base
      [0.11, 0.02, 0.016, 0.032, 0.074, 0.013, 0.035, 0.033], // SPI Trend
      [0.05, 0.003, 0.073, 0.002, 0.011, 0.014, 0.003, 0.028], // SPI Sea
      [0.002, 0.067, 0.009, 0.005, 0.011, 0.007, 0.001, 0.006], // SPI Idio
      [0.002, 0.011, 0.003, 0.013, 0.019, 0.001, 0.015, 0.002], // SPI Cov
    ],
  },
  {
    name: "ภาคใต้",
    suffix: "4",
    domain: [0.0, 0.13],
    crops: CROPS_4,
    xValues: [
      [0.08, 0.004, 0.196, 0.031], // T Base
      [0.02, 0.066, 0.022, 0.15], // T Trend
      [0.021, 0.004, 0.055, 0.021], // T Sea
      [0.017, 0.051, 0.007, 0.029], // T Idio
      [0.033, 0.085, 0.007, 0.01], // T Cov
      [0.033, 0.002, 0.075, 0.013], // P Base
      [0.029, 0.008, 0.143, 0.041], // P Trend
      [0.015, 0.002, 0.03, 0.079], // P Sea
      [0.007, 0.033, 0.003, 0.028], // P Idio
      [0.003, 0.072, 0.002, 0.03], // P Cov
      [0.019, 0.008, 0.017, 0.005], // SPI Base
      [0.041, 0.039, 0.034, 0.166], // SPI Trend
      [0.035, 0.003, 0.037, 0.013], // SPI Sea
      [0.021, 0.113, 0.006, 0.001], // SPI Idio
      [0.003, 0.019, 0.002, 0.032], // SPI Cov
    ],
  },
];

export default function Ab202516Fig7() {
  const traces = [];
  REGION_DATA.forEach((reg, rIdx) => {
    VARS.forEach((v, vIdx) => {
      traces.push({
        type: "bar",
        orientation: "h",
        width: 0.5,
        name: v.name,
        legendgroup: v.group,
        legendrank: v.rank, 
        legendgrouptitle: {
          text: `<b>${v.group}</b>`,
          font: { size: 12, color: "black" },
        },        
        showlegend: rIdx === 0, // Only show legend for first region
        marker: { color: v.color },
        hovertemplate: `Region: ${reg.name}<br>Crop: %{y}<br>${v.short} ${v.name}: %{x:.2%}<extra></extra>`,
        xaxis: `x${reg.suffix}`,
        yaxis: `y${reg.suffix}`,
        y: reg.crops,
        x: reg.xValues[vIdx],
      });
    });
  });

  return (
    <LazyPlotly
      data={traces}
      layout={{
        barmode: "stack",
        font: { size: 14, color: "black" },
        paper_bgcolor: "white",
        plot_bgcolor: "white",
        margin: { l: 250 },

        legend: {
          x: 1.02,
          xanchor: "left",
          y: 1,
          yanchor: "top",
          font: { size: 14 },
          tracegroupgap: 20,
        },
        ...REGION_DATA.reduce((acc, reg) => {
          acc[`xaxis${reg.suffix}`] = {
            domain: [0, 1],
            anchor: `y${reg.suffix}`,
            range: [0, 0.8],
            tickformat: ".0%",
            showgrid: true,
            gridcolor: "#BDBDBD",
            showticklabels: reg.suffix === "4",
          };
          acc[`yaxis${reg.suffix}`] = {
            domain: reg.domain,
            anchor: `x${reg.suffix}`,
            showgrid: false,
            ticksuffix: "  ",
            tickfont: {
              size: 10,
              color: "black",
            },
          };
          return acc;
        }, {}),
        annotations: REGION_DATA.map((reg) => ({
          text: `<b>${reg.name}</b>`,
          font: { size: 16, color: "black" },
          showarrow: false,
          textangle: -90,
          x: -0.3,
          xanchor: "center",
          xref: "paper",
          y: 0.5,
          yref: `y${reg.suffix} domain`,
        })),
      }}
    />
  );
}
