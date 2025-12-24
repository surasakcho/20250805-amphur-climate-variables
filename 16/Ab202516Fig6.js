import React from "react";
import { LazyPlotly } from "../../../../src/components/Plots";

const CROP_LABELS = [
  "ข้าวหอมมะลิ",
  "ข้าวเจ้า",
  "ข้าวเหนียว",
  "มันสำปะหลัง",
  "อ้อย",
  "ข้าวโพดเลี้ยงสัตว์",
  "ยางพารา",
  "ทุเรียน",
];

const PLOT_CONFIG = [
  {
    group: "อุณหภูมิ (T)",
    short: "T",
    name: "Baseline",
    color: "rgb(214.0, 199.6, 223.6)",
    bdata:
      "0Q31IK44hD8/yDqU1letP1X+xC4OjpM/ncXxGi9fYj/Z2/DW7so0P5izpyc+Gn4/gAmq5H6lUz+kS8m/wzWtPw==",
  },
  {
    group: "อุณหภูมิ (T)",
    short: "T",
    name: "Trend",
    color: "rgb(181.0, 152.2, 200.2)",
    bdata:
      "ZS3H7+pohj+XZSCXkISPPxnJN04fi5E/vmXEzuR2rT/j3BKiDV63P3f5IIBR34w/xMbEs1/jsT8fglWb4C1nPw==",
  },
  {
    group: "อุณหภูมิ (T)",
    short: "T",
    name: "Seasonal",
    color: "rgb(148.0, 104.8, 176.8)",
    bdata:
      "KsJE1OiCiz8zvs0I3z6cP6TaWJaWjoM/r9Olxbobjj9exutoyL9SP5lM4aY4ZZU/gY1G1qBebT/cDbOwupWRPw==",
  },
  {
    group: "อุณหภูมิ (T)",
    short: "T",
    name: "Idiosyncratic",
    color: "rgb(115.0, 57.4, 153.4)",
    bdata:
      "LAbzpSBMbT9xraeF3Pu3P3s+f50si2E/BOLd9VI/Xz9AgCYOxG1gPy+bM+vYNX0/8u8mLCzrYz/GruhNWFp/Pw==",
  },
  {
    group: "อุณหภูมิ (T)",
    short: "T",
    name: "Covariate",
    color: "rgb(82.0, 10.0, 130.0)",
    bdata:
      "aQTSpbKZQD8XisBivSCHP9+XdJU2zGk/JTdqv708cz/+zLrephWiPx0PQhEkzIM/GH41eUg7mD8M4KsaJMFKPw==",
  },
  {
    group: "ปริมาณน้ำฝน (P)",
    short: "P",
    name: "Baseline",
    color: "rgb(206.6, 217.6, 225.4)",
    bdata:
      "OvPSgN/LhT/qtgw399uuP2owPM9eRpE/2t5Cirveij9k8gmvtY1bP0hCj08yXnM/8bux1FeDdj/SQBEl0J6nPw==",
  },
  {
    group: "ปริมาณน้ำฝน (P)",
    short: "P",
    name: "Trend",
    color: "rgb(166.2, 188.2, 203.8)",
    bdata:
      "qMkjebyEkD9K0+FAgGavP22j4O0r1LI/39s4uzEAkj8WCeMUL1+HPwiKLn3H0Xs/yvv5HzKUYz+LgHFugXSXPw==",
  },
  {
    group: "ปริมาณน้ำฝน (P)",
    short: "P",
    name: "Seasonal",
    color: "rgb(125.8, 158.8, 182.2)",
    bdata:
      "j6JGHTC2aD/qCUTivBOTP5RKR7GcGnQ/Szf60KCpcD9cktIioU1QPzhWb0D/h3o/65GAtUIuXz8meGIvIN6sPw==",
  },
  {
    group: "ปริมาณน้ำฝน (P)",
    short: "P",
    name: "Idiosyncratic",
    color: "rgb(85.4, 129.4, 160.6)",
    bdata:
      "OubomcIcmj9e+5QupbKHP/DFyHb0q5g/sXqXADnCTz+sIiNn5RRqPwzNIGcKHmE/PvyobLDSgD/Ass0ejRNwPw==",
  },
  {
    group: "ปริมาณน้ำฝน (P)",
    short: "P",
    name: "Covariate",
    color: "rgb(45.0, 100.0, 139.0)",
    bdata:
      "8p5MtCJzTz9Fn9vg/05ZP5tmbJZmoFQ/xyIiyAQKiT8sfOfpHGW2P/zRvPOHH4Q/WsolvgifpD/NX5+Dh91NPw==",
  },
  {
    group: "ดัชนี SPI-3",
    short: "SPI",
    name: "Baseline",
    color: "rgb(198.8, 216.4, 205.8)",
    bdata:
      "Nwhiy+k2vj/AabcsAtOmP20b6Ebioco/PChj3BuTgT+WCOUREDl7P5JEQl3916I/SNY2+HiHdj8m62CeCOqkPw==",
  },
  {
    group: "ดัชนี SPI-3",
    short: "SPI",
    name: "Trend",
    color: "rgb(150.6, 185.8, 164.6)",
    bdata:
      "u1MoNsj1qz+ZwLT25VCiP7NCaFtZ7Lg/Mll71f3goz/i3W6w60acP2bQoIUORJU/mVTQGeEAhT+Vi+l1VKKaPw==",
  },
  {
    group: "ดัชนี SPI-3",
    short: "SPI",
    name: "Seasonal",
    color: "rgb(102.4, 155.2, 123.4)",
    bdata:
      "hptMvKS1nD/iB86sjzWxP+WDiB/M2qk/ehC1figMlj83XozsqFFTP3xZmGKusXE/KA/vJpuWVT9Xw3CI/bmhPw==",
  },
  {
    group: "ดัชนี SPI-3",
    short: "SPI",
    name: "Idiosyncratic",
    color: "rgb(54.2, 124.6, 82.2)",
    bdata:
      "kBX4XMj1aj/psfMxOLRiP1Mx/tTRSnk/sArYMiyMUz/QNoWjgOtxP3+5fC/tMXg/k9kiTdaDnT+75CDWkk6IPw==",
  },
  {
    group: "ดัชนี SPI-3",
    short: "SPI",
    name: "Covariate",
    color: "rgb(6.0, 94.0, 41.0)",
    bdata:
      "T6w0MZn1Uz9gJfXdPNhnP+9JU/bd/10/Zta1Ery4gD9OdxVr6KSRP4Oqdy/NVVY/yZsSWQZ9hD9IcDwVJGxLPw==",
  },
];

export default function Ab202516Fig6() {
  const dataTraces = PLOT_CONFIG.map((item, index) => ({
    type: "bar",
    orientation: "h",
    width: 0.5,
    name: item.name,
    legendgroup: item.group,
    legendgrouptitle: {
      text: `<b>${item.group}</b>`,
      font: {size: 14, color: "black" },
    },
    legendrank: index % 5, // Maintains 0-4 rank within each group
    marker: { color: item.color },
    hovertemplate: `<b>%{y}</b><br>${item.short} ${item.name}: %{x:.2%}<extra></extra>`,
    y: CROP_LABELS,
    x: {
      dtype: "f8",
      bdata: item.bdata,
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
        hoverlabel: {
          bgcolor: "white",
          font: { size: 18, family: "Arial", color: "black" },
        },
                
        legend: {
          font: { size: 14, color: "black" },
          orientation: "v",
          traceorder: "grouped",        
          x: 1.02,           
          xanchor: "left",   
          y: 1,              
          yanchor: "top",          
          tracegroupgap: 15,  
        },
        yaxis: {
          tickfont: { size: 18, color: "black" },
          autorange: "reversed",
          showgrid: false,
          ticksuffix: "  ",
        },
        xaxis: {
          tickfont: { size: 18, color: "black" },
          range: [0, 0.8],
          tickformat: ".0%",
          showgrid: true,
          gridcolor: "#BDBDBD",
          gridwidth: 1,
          zeroline: false,
        },
      }}
    />
  );
}
