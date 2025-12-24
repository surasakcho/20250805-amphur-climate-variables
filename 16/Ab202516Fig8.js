import React from "react";
import { LazyPlotly } from "../../../../src/components/Plots";

// 1. VARIABLE CONFIGURATION
const VAR_DEFS = [
  {
    group: "อุณหภูมิ (T)",
    short: "T",
    name: "Baseline",
    color: "rgb(214.0, 199.6, 223.6)",
    bdata: "1TyMKELpmD/orpoXtqGdP3ps21pbn2U/",
  },
  {
    group: "อุณหภูมิ (T)",
    short: "T",
    name: "Trend",
    color: "rgb(181.0, 152.2, 200.2)",
    bdata: "YsRmlC2dpj9z0fwHbbqbPwvJa7/Muak/",
  },
  {
    group: "อุณหภูมิ (T)",
    short: "T",
    name: "Seasonal",
    color: "rgb(148.0, 104.8, 176.8)",
    bdata: "pYfp93iKkD/4KJzlUh+UP/UMFGEeJ2s/",
  },
  {
    group: "อุณหภูมิ (T)",
    short: "T",
    name: "Idiosyncratic",
    color: "rgb(115.0, 57.4, 153.4)",
    bdata: "fLaw25R5kD+XYmswFBqHPxW3tpl7VGo/",
  },
  {
    group: "อุณหภูมิ (T)",
    short: "T",
    name: "Covariate",
    color: "rgb(82.0, 10.0, 130.0)",
    bdata: "Ffl/EArAiD/doT/nx+qOP3FqXPdP/YU/",
  },
  {
    group: "ปริมาณน้ำฝน (P)",
    short: "P",
    name: "Baseline",
    color: "rgb(206.6, 217.6, 225.4)",
    bdata: "Ty8/oVyIhz+vbCkIhBubPziuIPAf84s/",
  },
  {
    group: "ปริมาณน้ำฝน (P)",
    short: "P",
    name: "Trend",
    color: "rgb(166.2, 188.2, 203.8)",
    bdata: "E1fQJAmIhD/A83skj95yP0J/A+zGZ3s/",
  },
  {
    group: "ปริมาณน้ำฝน (P)",
    short: "P",
    name: "Seasonal",
    color: "rgb(125.8, 158.8, 182.2)",
    bdata: "QX22UhgvZz9cGSJGB459P0qiXhqVSV8/",
  },
  {
    group: "ปริมาณน้ำฝน (P)",
    short: "P",
    name: "Idiosyncratic",
    color: "rgb(85.4, 129.4, 160.6)",
    bdata: "tqOaRSA9gD+0jRUCUL2CP3/meMJ22Wo/",
  },
  {
    group: "ปริมาณน้ำฝน (P)",
    short: "P",
    name: "Covariate",
    color: "rgb(45.0, 100.0, 139.0)",
    bdata: "bTKNjkUFtD8/owVcpWivP9Fdq4grc2k/",
  },
  {
    group: "ดัชนี SPI-3",
    short: "SPI",
    name: "Baseline",
    color: "rgb(198.8, 216.4, 205.8)",
    bdata: "qi+AVp+Xiz+c45Yc3pqZPzvCSNLlUHE/",
  },
  {
    group: "ดัชนี SPI-3",
    short: "SPI",
    name: "Trend",
    color: "rgb(150.6, 185.8, 164.6)",
    bdata: "p2wAj+qpkD/6i7+97ld8P7kQUrI/+os/",
  },
  {
    group: "ดัชนี SPI-3",
    short: "SPI",
    name: "Seasonal",
    color: "rgb(102.4, 155.2, 123.4)",
    bdata: "CrG099cXjD/8m8RhZGWTP9bB0saf1VA/",
  },
  {
    group: "ดัชนี SPI-3",
    short: "SPI",
    name: "Idiosyncratic",
    color: "rgb(54.2, 124.6, 82.2)",
    bdata: "peJ9FCsjej8trjif2R2aPwyuLl1d14I/",
  },
  {
    group: "ดัชนี SPI-3",
    short: "SPI",
    name: "Covariate",
    color: "rgb(6.0, 94.0, 41.0)",
    bdata: "D8uYcV+owj/1/cQwrTxIPxrCZ77he6E/",
  },
];

const CATEGORIES = ["จ่ายเงินต้น", "หนี้เสีย", "หนี้เสียใหม่"];

export default function Ab202516Fig8() {
  const dataTraces = VAR_DEFS.map((v, idx) => ({
    type: "bar",
    orientation: "h",
    width: 0.5,
    name: v.name,
    legendgroup: v.group,
    legendgrouptitle: {
      text: `<b>${v.group}</b>`,
      font: { size: 12, color: "black" },
    },
    legendrank: idx % 5,
    marker: { color: v.color },
    hovertemplate: `<b>%{y}</b><br>${v.short} ${v.name}: %{x:.2%}<extra></extra>`,
    y: CATEGORIES,
    x: {
      dtype: "f8",
      bdata: v.bdata,
    },
  }));

  return (
    <LazyPlotly
      data={dataTraces}
      layout={{
        font: { size: 18, color: "black" },
        barmode: "stack",
        paper_bgcolor: "white",
        plot_bgcolor: "white",
        showlegend: true,

        legend: {
          font: { size: 14, color: "black" },
          orientation: "v",
          traceorder: "grouped",
          yanchor: "top",
          y: 1,
          xanchor: "left",
          x: 1.02,
          tracegroupgap: 15,
        },

        yaxis: {
          tickfont: { size: 16, color: "black" },
          autorange: "reversed",
          showgrid: false,
          ticksuffix: "  ",
        },

        xaxis: {
          tickfont: { size: 16, color: "black" },
          range: [0, 0.8],
          tickformat: ".0%",
          showgrid: true,
          gridcolor: "#BDBDBD",
          gridwidth: 1,
          zeroline: false,
        },

        hoverlabel: {
          bgcolor: "white",
          font: { size: 16, color: "black" },
        },

        // height: 600, // Reduced height since there are only 3 categories
        // width: 1400,
      }}
    />
  );
}
