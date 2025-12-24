import React from "react";
import { LazyPlotly } from "../../../../src/components/Plots";

// 1. DATA AND VARIABLE CONFIGURATION
// Added 'rank' to control the internal order of the legend
const VAR_DEFS = [
  { group: "อุณหภูมิ (T)", short: "T", name: "Baseline", color: "rgb(214.0, 199.6, 223.6)", rank: 1 },
  { group: "อุณหภูมิ (T)", short: "T", name: "Trend", color: "rgb(181.0, 152.2, 200.2)", rank: 2 },
  { group: "อุณหภูมิ (T)", short: "T", name: "Seasonal", color: "rgb(148.0, 104.8, 176.8)", rank: 3 },
  { group: "อุณหภูมิ (T)", short: "T", name: "Idiosyncratic", color: "rgb(115.0, 57.4, 153.4)", rank: 4 },
  { group: "อุณหภูมิ (T)", short: "T", name: "Covariate", color: "rgb(82.0, 10.0, 130.0)", rank: 5 },
  
  { group: "ปริมาณน้ำฝน (P)", short: "P", name: "Baseline", color: "rgb(206.6, 217.6, 225.4)", rank: 6 },
  { group: "ปริมาณน้ำฝน (P)", short: "P", name: "Trend", color: "rgb(166.2, 188.2, 203.8)", rank: 7 },
  { group: "ปริมาณน้ำฝน (P)", short: "P", name: "Seasonal", color: "rgb(125.8, 158.8, 182.2)", rank: 8 },
  { group: "ปริมาณน้ำฝน (P)", short: "P", name: "Idiosyncratic", color: "rgb(85.4, 129.4, 160.6)", rank: 9 },
  { group: "ปริมาณน้ำฝน (P)", short: "P", name: "Covariate", color: "rgb(45.0, 100.0, 139.0)", rank: 10 },
  
  { group: "ดัชนี SPI-3", short: "SPI", name: "Baseline", color: "rgb(198.8, 216.4, 205.8)", rank: 11 },
  { group: "ดัชนี SPI-3", short: "SPI", name: "Trend", color: "rgb(150.6, 185.8, 164.6)", rank: 12 },
  { group: "ดัชนี SPI-3", short: "SPI", name: "Seasonal", color: "rgb(102.4, 155.2, 123.4)", rank: 13 },
  { group: "ดัชนี SPI-3", short: "SPI", name: "Idiosyncratic", color: "rgb(54.2, 124.6, 82.2)", rank: 14 },
  { group: "ดัชนี SPI-3", short: "SPI", name: "Covariate", color: "rgb(6.0, 94.0, 41.0)", rank: 15 },
];

const CATEGORIES = ["หนี้เสียใหม่", "หนี้เสีย", "จ่ายเงินต้น"];

const REGION_CONFIG = [
  { name: "ภาคกลาง", suffix: "", domain: [0.78, 1.0], bdata: ["g555IVjKfj9GMmhpCjCiP2glnD+cZXc/", "PY+RyIB3sz9UiICnUzWlP4qkW8fqI6A/", "nrYIvkondT8QlejslYOCPysDjWJiUnQ/", "CrN2sl69lj/dTjnOvrOlP52sA8oGArE/", "fncQ/EE0fj80MZcI7gqZP79S08XqlJE/", "pQr2MXxYjz/P1Cns5Q6mP14NxPzqQ4A/", "xI9P6JmIij8I0TQbTDeCP8eJPywDWZc/", "39B10Ny6eT/qPi+r8SGOP9H5P28d63Y/", "fVCiCM1Wfz+AE2Ik7S2WP9c5meIrc3o/", "qZqm1sB2cz9DfXr0QiiuP/JCF519zrQ/", "Q0wCA1dWgT980ktqDRKMP7LeWF41TY4/", "NVnk2VVLnD/AXnPKYLh0Pwr6a3UjIZM/", "HFWEc+CPdD9IkS5slvCBP3nzhunWBXs/", "8GoXIrGFZT+7GDldSm2YP21u7KjTGJg/", "ev9bmbyxlT8NRr4CKrhSP9e8ogyx5cU/"] },
  { name: "ภาคเหนือ", suffix: "2", domain: [0.52, 0.74], bdata: ["4/KSMAK1ej+AMkS9q4+XP7Dg5EzcDXc/", "30y0BI/0sj8qupD9nZiXP5fIjngRh6Y/", "UDIXG3mkZz/bkAqNf1iOP5jGyXkxu3M/", "KZA9sR9toT/kM3VD3tWgP1FiZBPT6qc/", "nzAvoqGXlT+hscDY94KQP58AQMUPrZI/", "5lp0FV8hkT/gRAjrs+mkP84CXFf/qIg/", "/zcyMqUqkz96l/pARpeWP0YtDLSf2GM/", "sGTm84Ihmz8NuBFymYq0P4NIkaik7n8/", "ft6I2le5hz/Qi3ulNRd2P7MGArGjnZ4/", "OHAjw9zvpT/XWqV+M8S/P88A76HZDL4/", "SB92VDiGaT8k8OHAm696P1ZCXnuyqGg/", "ZSuxJT9SmD8HfOG5hwWFP5M0ha/+zoE/", "l1fdRRX2iD+WVvmClS6gP/9gJ0QTcpM/", "ofP6IwKDkD+QLDDIeDSBP6ppdQFGFq4/", "a8tDjxNQsD+2wwrRZCB2P/rG7PufJ8o/"] },
  { name: "ภาคตะวันออก<br>เฉียงเหนือ", suffix: "3", domain: [0.26, 0.48], bdata: ["x238XaSzij8Jy8wQgLKLP2XTRxB454A/", "jxjYx11DoD+tWwgW6A+xPynH171M9MA/", "idL5u3XSdT8GrGB3JiV2P5QDjuU/tJA/", "bYlsdRdUpj8U+oER6H+lPwXxhuPG1qE/", "VKq8jZphjT+d2TXbDCKOPyAp4H/WXoo/", "xKWNE1GJiD+m8NM/59SbP4EG7kBy2no/", "sPT+8oPhkz8zHMY8J1aLP7U4yjCOxJM/", "tXc9Fe8jhz+QRZsUGAWbP5WdGUE/jYU/", "2KbJiB4dfz9j4Q/UNt55Pz8gb1XW7Gs/", "hsTCTzEahz83tw5aqfGwPy3mWdnFaKo/", "D24tPDCjhT9TEjT47UV5P+FXFcHfU4M/", "HiNZfQK2hD/+jBAxoeiYP6KQASIhUKE/", "rP6G7sOrgD/Xge50ca+HP2WuddMLQJg/", "EuQKRO/ZZD/bfSsLvzd3PwtH1EhWcXU/", "/ukwLz37sz+OaVD05TyGPxEJlO2VK8M/"] },
  { name: "ภาคใต้", suffix: "4", domain: [0.0, 0.22], bdata: ["+TCpeocmiT/CGPixVGeZP2hU4wlloHY/", "y6FZzFf6oD9sYmsS30+aP68TUNJ90KE/", "oCkV1inoiT9+vUSHmNyZP7jZWUWoWIs/", "DQxinhSnmD8gggufcVWQP99oVtME4ns/", "8/iRHiCziz9yJRzNtmZ6P180BeowuIM/", "w61iaEOdYz+737qGYlGOPx9HWQGpU3k/", "sxEydWwDgT8REs5alw+hP3+gjyFxsKk/", "XP3AnvFVaD+WGfB4cTR9PwLXL0mKy4U/", "gy+M2i2tfT+MsF3V8W5/P0zMBh+DJZo/", "6fWXfOJQkD8oTP5HDTyfP36PqyjxrrA/", "hUNkbfxfcD+s+2u9PbKTP58LTD3ZDJc/", "h3u2gbtCgz8NnAGUG1eyP6HuZKslqr8/", "wS3NiixhiD+6DNH4/dqZP5iBVTAzm6o/", "XMq9jg2vqT9ogtfKdVS4P8smy/ngVGc/", "sENzoEtZjT+hQIkMfLeCP8BbjmrRnak/"] }
];

export default function Ab202516Fig9() {
  const traces = [];
  REGION_CONFIG.forEach((reg, rIdx) => {
    VAR_DEFS.forEach((v, vIdx) => {
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
        showlegend: rIdx === 0,
        marker: { color: v.color },
        xaxis: `x${reg.suffix}`,
        yaxis: `y${reg.suffix}`,
        y: CATEGORIES,
        x: { dtype: "f8", bdata: reg.bdata[vIdx] },
        hovertemplate: `Region: ${reg.name}<br>%{y}<br>${v.short} ${v.name}: %{x:.2%}<extra></extra>`,
      });
    });
  });

  return (
    <LazyPlotly
      data={traces}
      layout={{
        barmode: "stack",
        font: { size: 18, color: "black" },
        paper_bgcolor: "white",
        plot_bgcolor: "white",
        margin: { l: 200},
        legend: {
          x: 1.02,
          xanchor: "left",
          y: 1,
          yanchor: "top",
          font: { size: 12 },
          tracegroupgap: 15,
          traceorder: "grouped", 
        },
        ...REGION_CONFIG.reduce((acc, reg) => {
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
            tickfont: { size: 14, color: "black" },
          };
          return acc;
        }, {}),
        annotations: REGION_CONFIG.map((reg) => ({
          text: `<b>${reg.name}</b>`,
          font: { size: 16, color: "black" },
          showarrow: false,
          textangle: -90,
          x: -0.25, // Adjusted to fit vertical text closer to axis
          xanchor: "center",
          xref: "paper",
          y: 0.5,
          yref: `y${reg.suffix} domain`,
        })),
      }}
    />
  );
}