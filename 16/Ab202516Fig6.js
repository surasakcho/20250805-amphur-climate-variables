import React from "react"
import { LazyPlotly } from "../../../../src/components/Plots"

export default function Ab202516Fig6() {
  return (
    <div style={{ clear: "both", marginBottom: "20px" }}>
      <LazyPlotly
        data={[
          {
            hovertemplate: "<b>%{y}</b><br>Baseline T: %{x:.2%}<extra></extra>",
            legendgroup: "อุณหภูมิ (T)",
            legendgrouptitle: {
              font: {
                color: "black",
              },
              text: "<b>อุณหภูมิ (T)</b>",
            },
            legendrank: 0,
            marker: {
              color: "rgb(214.0, 199.6, 223.6)",
            },
            name: "Baseline",
            orientation: "h",
            width: 0.5,
            x: {
              dtype: "f8",
              bdata:
                "0Q31IK44hD8/yDqU1letP1X+xC4OjpM/ncXxGi9fYj/Z2/DW7so0P5izpyc+Gn4/gAmq5H6lUz+kS8m/wzWtPw==",
            },
            y: [
              "ข้าวหอมมะลิ",
              "ข้าวเจ้า",
              "ข้าวเหนียว",
              "มันสำปะหลัง",
              "อ้อย",
              "ข้าวโพดเลี้ยงสัตว์",
              "ยางพารา",
              "ทุเรียน",
            ],
            type: "bar",
          },
          {
            hovertemplate: "<b>%{y}</b><br>T Trend: %{x:.2%}<extra></extra>",
            legendgroup: "อุณหภูมิ (T)",
            legendgrouptitle: {
              font: {
                color: "black",
              },
              text: "<b>อุณหภูมิ (T)</b>",
            },
            legendrank: 1,
            marker: {
              color: "rgb(181.0, 152.2, 200.2)",
            },
            name: "Trend",
            orientation: "h",
            width: 0.5,
            x: {
              dtype: "f8",
              bdata:
                "ZS3H7+pohj+XZSCXkISPPxnJN04fi5E/vmXEzuR2rT/j3BKiDV63P3f5IIBR34w/xMbEs1/jsT8fglWb4C1nPw==",
            },
            y: [
              "ข้าวหอมมะลิ",
              "ข้าวเจ้า",
              "ข้าวเหนียว",
              "มันสำปะหลัง",
              "อ้อย",
              "ข้าวโพดเลี้ยงสัตว์",
              "ยางพารา",
              "ทุเรียน",
            ],
            type: "bar",
          },
          {
            hovertemplate: "<b>%{y}</b><br>T Seasonal: %{x:.2%}<extra></extra>",
            legendgroup: "อุณหภูมิ (T)",
            legendgrouptitle: {
              font: {
                color: "black",
              },
              text: "<b>อุณหภูมิ (T)</b>",
            },
            legendrank: 2,
            marker: {
              color: "rgb(148.0, 104.80000000000001, 176.8)",
            },
            name: "Seasonal",
            orientation: "h",
            width: 0.5,
            x: {
              dtype: "f8",
              bdata:
                "KsJE1OiCiz8zvs0I3z6cP6TaWJaWjoM/r9Olxbobjj9exutoyL9SP5lM4aY4ZZU/gY1G1qBebT/cDbOwupWRPw==",
            },
            y: [
              "ข้าวหอมมะลิ",
              "ข้าวเจ้า",
              "ข้าวเหนียว",
              "มันสำปะหลัง",
              "อ้อย",
              "ข้าวโพดเลี้ยงสัตว์",
              "ยางพารา",
              "ทุเรียน",
            ],
            type: "bar",
          },
          {
            hovertemplate:
              "<b>%{y}</b><br>T Idiosyncratic: %{x:.2%}<extra></extra>",
            legendgroup: "อุณหภูมิ (T)",
            legendgrouptitle: {
              font: {
                color: "black",
              },
              text: "<b>อุณหภูมิ (T)</b>",
            },
            legendrank: 3,
            marker: {
              color: "rgb(115.0, 57.400000000000006, 153.4)",
            },
            name: "Idiosyncratic",
            orientation: "h",
            width: 0.5,
            x: {
              dtype: "f8",
              bdata:
                "LAbzpSBMbT9xraeF3Pu3P3s+f50si2E/BOLd9VI/Xz9AgCYOxG1gPy+bM+vYNX0/8u8mLCzrYz/GruhNWFp/Pw==",
            },
            y: [
              "ข้าวหอมมะลิ",
              "ข้าวเจ้า",
              "ข้าวเหนียว",
              "มันสำปะหลัง",
              "อ้อย",
              "ข้าวโพดเลี้ยงสัตว์",
              "ยางพารา",
              "ทุเรียน",
            ],
            type: "bar",
          },
          {
            hovertemplate:
              "<b>%{y}</b><br>T Covariate: %{x:.2%}<extra></extra>",
            legendgroup: "อุณหภูมิ (T)",
            legendgrouptitle: {
              font: {
                color: "black",
              },
              text: "<b>อุณหภูมิ (T)</b>",
            },
            legendrank: 4,
            marker: {
              color: "rgb(82.0, 10.0, 130.0)",
            },
            name: "Covariate",
            orientation: "h",
            width: 0.5,
            x: {
              dtype: "f8",
              bdata:
                "aQTSpbKZQD8XisBivSCHP9+XdJU2zGk/JTdqv708cz/+zLrephWiPx0PQhEkzIM/GH41eUg7mD8M4KsaJMFKPw==",
            },
            y: [
              "ข้าวหอมมะลิ",
              "ข้าวเจ้า",
              "ข้าวเหนียว",
              "มันสำปะหลัง",
              "อ้อย",
              "ข้าวโพดเลี้ยงสัตว์",
              "ยางพารา",
              "ทุเรียน",
            ],
            type: "bar",
          },
          {
            hovertemplate: "<b>%{y}</b><br>Baseline P: %{x:.2%}<extra></extra>",
            legendgroup: "ปริมาณน้ำฝน (P)",
            legendgrouptitle: {
              font: {
                color: "black",
              },
              text: "<b>ปริมาณน้ำฝน (P)</b>",
            },
            legendrank: 0,
            marker: {
              color: "rgb(206.6, 217.6, 225.4)",
            },
            name: "Baseline",
            orientation: "h",
            width: 0.5,
            x: {
              dtype: "f8",
              bdata:
                "OvPSgN/LhT/qtgw399uuP2owPM9eRpE/2t5Cirveij9k8gmvtY1bP0hCj08yXnM/8bux1FeDdj/SQBEl0J6nPw==",
            },
            y: [
              "ข้าวหอมมะลิ",
              "ข้าวเจ้า",
              "ข้าวเหนียว",
              "มันสำปะหลัง",
              "อ้อย",
              "ข้าวโพดเลี้ยงสัตว์",
              "ยางพารา",
              "ทุเรียน",
            ],
            type: "bar",
          },
          {
            hovertemplate: "<b>%{y}</b><br>P Trend: %{x:.2%}<extra></extra>",
            legendgroup: "ปริมาณน้ำฝน (P)",
            legendgrouptitle: {
              font: {
                color: "black",
              },
              text: "<b>ปริมาณน้ำฝน (P)</b>",
            },
            legendrank: 1,
            marker: {
              color: "rgb(166.2, 188.2, 203.8)",
            },
            name: "Trend",
            orientation: "h",
            width: 0.5,
            x: {
              dtype: "f8",
              bdata:
                "qMkjebyEkD9K0+FAgGavP22j4O0r1LI/39s4uzEAkj8WCeMUL1+HPwiKLn3H0Xs/yvv5HzKUYz+LgHFugXSXPw==",
            },
            y: [
              "ข้าวหอมมะลิ",
              "ข้าวเจ้า",
              "ข้าวเหนียว",
              "มันสำปะหลัง",
              "อ้อย",
              "ข้าวโพดเลี้ยงสัตว์",
              "ยางพารา",
              "ทุเรียน",
            ],
            type: "bar",
          },
          {
            hovertemplate: "<b>%{y}</b><br>P Seasonal: %{x:.2%}<extra></extra>",
            legendgroup: "ปริมาณน้ำฝน (P)",
            legendgrouptitle: {
              font: {
                color: "black",
              },
              text: "<b>ปริมาณน้ำฝน (P)</b>",
            },
            legendrank: 2,
            marker: {
              color: "rgb(125.80000000000001, 158.8, 182.2)",
            },
            name: "Seasonal",
            orientation: "h",
            width: 0.5,
            x: {
              dtype: "f8",
              bdata:
                "j6JGHTC2aD/qCUTivBOTP5RKR7GcGnQ/Szf60KCpcD9cktIioU1QPzhWb0D/h3o/65GAtUIuXz8meGIvIN6sPw==",
            },
            y: [
              "ข้าวหอมมะลิ",
              "ข้าวเจ้า",
              "ข้าวเหนียว",
              "มันสำปะหลัง",
              "อ้อย",
              "ข้าวโพดเลี้ยงสัตว์",
              "ยางพารา",
              "ทุเรียน",
            ],
            type: "bar",
          },
          {
            hovertemplate:
              "<b>%{y}</b><br>P Idiosyncratic: %{x:.2%}<extra></extra>",
            legendgroup: "ปริมาณน้ำฝน (P)",
            legendgrouptitle: {
              font: {
                color: "black",
              },
              text: "<b>ปริมาณน้ำฝน (P)</b>",
            },
            legendrank: 3,
            marker: {
              color: "rgb(85.4, 129.4, 160.6)",
            },
            name: "Idiosyncratic",
            orientation: "h",
            width: 0.5,
            x: {
              dtype: "f8",
              bdata:
                "OubomcIcmj9e+5QupbKHP/DFyHb0q5g/sXqXADnCTz+sIiNn5RRqPwzNIGcKHmE/PvyobLDSgD/Ass0ejRNwPw==",
            },
            y: [
              "ข้าวหอมมะลิ",
              "ข้าวเจ้า",
              "ข้าวเหนียว",
              "มันสำปะหลัง",
              "อ้อย",
              "ข้าวโพดเลี้ยงสัตว์",
              "ยางพารา",
              "ทุเรียน",
            ],
            type: "bar",
          },
          {
            hovertemplate:
              "<b>%{y}</b><br>P Covariate: %{x:.2%}<extra></extra>",
            legendgroup: "ปริมาณน้ำฝน (P)",
            legendgrouptitle: {
              font: {
                color: "black",
              },
              text: "<b>ปริมาณน้ำฝน (P)</b>",
            },
            legendrank: 4,
            marker: {
              color: "rgb(45.0, 100.0, 139.0)",
            },
            name: "Covariate",
            orientation: "h",
            width: 0.5,
            x: {
              dtype: "f8",
              bdata:
                "8p5MtCJzTz9Fn9vg/05ZP5tmbJZmoFQ/xyIiyAQKiT8sfOfpHGW2P/zRvPOHH4Q/WsolvgifpD/NX5+Dh91NPw==",
            },
            y: [
              "ข้าวหอมมะลิ",
              "ข้าวเจ้า",
              "ข้าวเหนียว",
              "มันสำปะหลัง",
              "อ้อย",
              "ข้าวโพดเลี้ยงสัตว์",
              "ยางพารา",
              "ทุเรียน",
            ],
            type: "bar",
          },
          {
            hovertemplate:
              "<b>%{y}</b><br>Baseline SPI: %{x:.2%}<extra></extra>",
            legendgroup: "ดัชนี SPI-3",
            legendgrouptitle: {
              font: {
                color: "black",
              },
              text: "<b>ดัชนี SPI-3</b>",
            },
            legendrank: 0,
            marker: {
              color: "rgb(198.8, 216.4, 205.8)",
            },
            name: "Baseline",
            orientation: "h",
            width: 0.5,
            x: {
              dtype: "f8",
              bdata:
                "Nwhiy+k2vj/AabcsAtOmP20b6Ebioco/PChj3BuTgT+WCOUREDl7P5JEQl3916I/SNY2+HiHdj8m62CeCOqkPw==",
            },
            y: [
              "ข้าวหอมมะลิ",
              "ข้าวเจ้า",
              "ข้าวเหนียว",
              "มันสำปะหลัง",
              "อ้อย",
              "ข้าวโพดเลี้ยงสัตว์",
              "ยางพารา",
              "ทุเรียน",
            ],
            type: "bar",
          },
          {
            hovertemplate: "<b>%{y}</b><br>SPI Trend: %{x:.2%}<extra></extra>",
            legendgroup: "ดัชนี SPI-3",
            legendgrouptitle: {
              font: {
                color: "black",
              },
              text: "<b>ดัชนี SPI-3</b>",
            },
            legendrank: 1,
            marker: {
              color: "rgb(150.6, 185.8, 164.6)",
            },
            name: "Trend",
            orientation: "h",
            width: 0.5,
            x: {
              dtype: "f8",
              bdata:
                "u1MoNsj1qz+ZwLT25VCiP7NCaFtZ7Lg/Mll71f3goz/i3W6w60acP2bQoIUORJU/mVTQGeEAhT+Vi+l1VKKaPw==",
            },
            y: [
              "ข้าวหอมมะลิ",
              "ข้าวเจ้า",
              "ข้าวเหนียว",
              "มันสำปะหลัง",
              "อ้อย",
              "ข้าวโพดเลี้ยงสัตว์",
              "ยางพารา",
              "ทุเรียน",
            ],
            type: "bar",
          },
          {
            hovertemplate:
              "<b>%{y}</b><br>SPI Seasonal: %{x:.2%}<extra></extra>",
            legendgroup: "ดัชนี SPI-3",
            legendgrouptitle: {
              font: {
                color: "black",
              },
              text: "<b>ดัชนี SPI-3</b>",
            },
            legendrank: 2,
            marker: {
              color: "rgb(102.39999999999998, 155.2, 123.39999999999999)",
            },
            name: "Seasonal",
            orientation: "h",
            width: 0.5,
            x: {
              dtype: "f8",
              bdata:
                "hptMvKS1nD/iB86sjzWxP+WDiB/M2qk/ehC1figMlj83XozsqFFTP3xZmGKusXE/KA/vJpuWVT9Xw3CI/bmhPw==",
            },
            y: [
              "ข้าวหอมมะลิ",
              "ข้าวเจ้า",
              "ข้าวเหนียว",
              "มันสำปะหลัง",
              "อ้อย",
              "ข้าวโพดเลี้ยงสัตว์",
              "ยางพารา",
              "ทุเรียน",
            ],
            type: "bar",
          },
          {
            hovertemplate:
              "<b>%{y}</b><br>SPI Idiosyncratic: %{x:.2%}<extra></extra>",
            legendgroup: "ดัชนี SPI-3",
            legendgrouptitle: {
              font: {
                color: "black",
              },
              text: "<b>ดัชนี SPI-3</b>",
            },
            legendrank: 3,
            marker: {
              color: "rgb(54.19999999999999, 124.6, 82.19999999999999)",
            },
            name: "Idiosyncratic",
            orientation: "h",
            width: 0.5,
            x: {
              dtype: "f8",
              bdata:
                "kBX4XMj1aj/psfMxOLRiP1Mx/tTRSnk/sArYMiyMUz/QNoWjgOtxP3+5fC/tMXg/k9kiTdaDnT+75CDWkk6IPw==",
            },
            y: [
              "ข้าวหอมมะลิ",
              "ข้าวเจ้า",
              "ข้าวเหนียว",
              "มันสำปะหลัง",
              "อ้อย",
              "ข้าวโพดเลี้ยงสัตว์",
              "ยางพารา",
              "ทุเรียน",
            ],
            type: "bar",
          },
          {
            hovertemplate:
              "<b>%{y}</b><br>SPI Covariate: %{x:.2%}<extra></extra>",
            legendgroup: "ดัชนี SPI-3",
            legendgrouptitle: {
              font: {
                color: "black",
              },
              text: "<b>ดัชนี SPI-3</b>",
            },
            legendrank: 4,
            marker: {
              color: "rgb(6.0, 94.0, 41.0)",
            },
            name: "Covariate",
            orientation: "h",
            width: 0.5,
            x: {
              dtype: "f8",
              bdata:
                "T6w0MZn1Uz9gJfXdPNhnP+9JU/bd/10/Zta1Ery4gD9OdxVr6KSRP4Oqdy/NVVY/yZsSWQZ9hD9IcDwVJGxLPw==",
            },
            y: [
              "ข้าวหอมมะลิ",
              "ข้าวเจ้า",
              "ข้าวเหนียว",
              "มันสำปะหลัง",
              "อ้อย",
              "ข้าวโพดเลี้ยงสัตว์",
              "ยางพารา",
              "ทุเรียน",
            ],
            type: "bar",
          },
        ]}
        layout={{
          template: {
            data: {
              histogram2dcontour: [
                {
                  type: "histogram2dcontour",
                  colorbar: {
                    outlinewidth: 0,
                    ticks: "",
                  },
                  colorscale: [
                    [0.0, "#0d0887"],
                    [0.1111111111111111, "#46039f"],
                    [0.2222222222222222, "#7201a8"],
                    [0.3333333333333333, "#9c179e"],
                    [0.4444444444444444, "#bd3786"],
                    [0.5555555555555556, "#d8576b"],
                    [0.6666666666666666, "#ed7953"],
                    [0.7777777777777778, "#fb9f3a"],
                    [0.8888888888888888, "#fdca26"],
                    [1.0, "#f0f921"],
                  ],
                },
              ],
              choropleth: [
                {
                  type: "choropleth",
                  colorbar: {
                    outlinewidth: 0,
                    ticks: "",
                  },
                },
              ],
              histogram2d: [
                {
                  type: "histogram2d",
                  colorbar: {
                    outlinewidth: 0,
                    ticks: "",
                  },
                  colorscale: [
                    [0.0, "#0d0887"],
                    [0.1111111111111111, "#46039f"],
                    [0.2222222222222222, "#7201a8"],
                    [0.3333333333333333, "#9c179e"],
                    [0.4444444444444444, "#bd3786"],
                    [0.5555555555555556, "#d8576b"],
                    [0.6666666666666666, "#ed7953"],
                    [0.7777777777777778, "#fb9f3a"],
                    [0.8888888888888888, "#fdca26"],
                    [1.0, "#f0f921"],
                  ],
                },
              ],
              heatmap: [
                {
                  type: "heatmap",
                  colorbar: {
                    outlinewidth: 0,
                    ticks: "",
                  },
                  colorscale: [
                    [0.0, "#0d0887"],
                    [0.1111111111111111, "#46039f"],
                    [0.2222222222222222, "#7201a8"],
                    [0.3333333333333333, "#9c179e"],
                    [0.4444444444444444, "#bd3786"],
                    [0.5555555555555556, "#d8576b"],
                    [0.6666666666666666, "#ed7953"],
                    [0.7777777777777778, "#fb9f3a"],
                    [0.8888888888888888, "#fdca26"],
                    [1.0, "#f0f921"],
                  ],
                },
              ],
              contourcarpet: [
                {
                  type: "contourcarpet",
                  colorbar: {
                    outlinewidth: 0,
                    ticks: "",
                  },
                },
              ],
              contour: [
                {
                  type: "contour",
                  colorbar: {
                    outlinewidth: 0,
                    ticks: "",
                  },
                  colorscale: [
                    [0.0, "#0d0887"],
                    [0.1111111111111111, "#46039f"],
                    [0.2222222222222222, "#7201a8"],
                    [0.3333333333333333, "#9c179e"],
                    [0.4444444444444444, "#bd3786"],
                    [0.5555555555555556, "#d8576b"],
                    [0.6666666666666666, "#ed7953"],
                    [0.7777777777777778, "#fb9f3a"],
                    [0.8888888888888888, "#fdca26"],
                    [1.0, "#f0f921"],
                  ],
                },
              ],
              surface: [
                {
                  type: "surface",
                  colorbar: {
                    outlinewidth: 0,
                    ticks: "",
                  },
                  colorscale: [
                    [0.0, "#0d0887"],
                    [0.1111111111111111, "#46039f"],
                    [0.2222222222222222, "#7201a8"],
                    [0.3333333333333333, "#9c179e"],
                    [0.4444444444444444, "#bd3786"],
                    [0.5555555555555556, "#d8576b"],
                    [0.6666666666666666, "#ed7953"],
                    [0.7777777777777778, "#fb9f3a"],
                    [0.8888888888888888, "#fdca26"],
                    [1.0, "#f0f921"],
                  ],
                },
              ],
              mesh3d: [
                {
                  type: "mesh3d",
                  colorbar: {
                    outlinewidth: 0,
                    ticks: "",
                  },
                },
              ],
              scatter: [
                {
                  fillpattern: {
                    fillmode: "overlay",
                    size: 10,
                    solidity: 0.2,
                  },
                  type: "scatter",
                },
              ],
              parcoords: [
                {
                  type: "parcoords",
                  line: {
                    colorbar: {
                      outlinewidth: 0,
                      ticks: "",
                    },
                  },
                },
              ],
              scatterpolargl: [
                {
                  type: "scatterpolargl",
                  marker: {
                    colorbar: {
                      outlinewidth: 0,
                      ticks: "",
                    },
                  },
                },
              ],
              bar: [
                {
                  error_x: {
                    color: "#2a3f5f",
                  },
                  error_y: {
                    color: "#2a3f5f",
                  },
                  marker: {
                    line: {
                      color: "#E5ECF6",
                      width: 0.5,
                    },
                    pattern: {
                      fillmode: "overlay",
                      size: 10,
                      solidity: 0.2,
                    },
                  },
                  type: "bar",
                },
              ],
              scattergeo: [
                {
                  type: "scattergeo",
                  marker: {
                    colorbar: {
                      outlinewidth: 0,
                      ticks: "",
                    },
                  },
                },
              ],
              scatterpolar: [
                {
                  type: "scatterpolar",
                  marker: {
                    colorbar: {
                      outlinewidth: 0,
                      ticks: "",
                    },
                  },
                },
              ],
              histogram: [
                {
                  marker: {
                    pattern: {
                      fillmode: "overlay",
                      size: 10,
                      solidity: 0.2,
                    },
                  },
                  type: "histogram",
                },
              ],
              scattergl: [
                {
                  type: "scattergl",
                  marker: {
                    colorbar: {
                      outlinewidth: 0,
                      ticks: "",
                    },
                  },
                },
              ],
              scatter3d: [
                {
                  type: "scatter3d",
                  line: {
                    colorbar: {
                      outlinewidth: 0,
                      ticks: "",
                    },
                  },
                  marker: {
                    colorbar: {
                      outlinewidth: 0,
                      ticks: "",
                    },
                  },
                },
              ],
              scattermap: [
                {
                  type: "scattermap",
                  marker: {
                    colorbar: {
                      outlinewidth: 0,
                      ticks: "",
                    },
                  },
                },
              ],
              scattermapbox: [
                {
                  type: "scattermapbox",
                  marker: {
                    colorbar: {
                      outlinewidth: 0,
                      ticks: "",
                    },
                  },
                },
              ],
              scatterternary: [
                {
                  type: "scatterternary",
                  marker: {
                    colorbar: {
                      outlinewidth: 0,
                      ticks: "",
                    },
                  },
                },
              ],
              scattercarpet: [
                {
                  type: "scattercarpet",
                  marker: {
                    colorbar: {
                      outlinewidth: 0,
                      ticks: "",
                    },
                  },
                },
              ],
              carpet: [
                {
                  aaxis: {
                    endlinecolor: "#2a3f5f",
                    gridcolor: "white",
                    linecolor: "white",
                    minorgridcolor: "white",
                    startlinecolor: "#2a3f5f",
                  },
                  baxis: {
                    endlinecolor: "#2a3f5f",
                    gridcolor: "white",
                    linecolor: "white",
                    minorgridcolor: "white",
                    startlinecolor: "#2a3f5f",
                  },
                  type: "carpet",
                },
              ],
              table: [
                {
                  cells: {
                    fill: {
                      color: "#EBF0F8",
                    },
                    line: {
                      color: "white",
                    },
                  },
                  header: {
                    fill: {
                      color: "#C8D4E3",
                    },
                    line: {
                      color: "white",
                    },
                  },
                  type: "table",
                },
              ],
              barpolar: [
                {
                  marker: {
                    line: {
                      color: "#E5ECF6",
                      width: 0.5,
                    },
                    pattern: {
                      fillmode: "overlay",
                      size: 10,
                      solidity: 0.2,
                    },
                  },
                  type: "barpolar",
                },
              ],
              pie: [
                {
                  automargin: true,
                  type: "pie",
                },
              ],
            },
            layout: {
              autotypenumbers: "strict",
              colorway: [
                "#636efa",
                "#EF553B",
                "#00cc96",
                "#ab63fa",
                "#FFA15A",
                "#19d3f3",
                "#FF6692",
                "#B6E880",
                "#FF97FF",
                "#FECB52",
              ],
              font: {
                color: "#2a3f5f",
              },
              hovermode: "closest",
              hoverlabel: {
                align: "left",
              },
              paper_bgcolor: "white",
              plot_bgcolor: "#E5ECF6",
              polar: {
                bgcolor: "#E5ECF6",
                angularaxis: {
                  gridcolor: "white",
                  linecolor: "white",
                  ticks: "",
                },
                radialaxis: {
                  gridcolor: "white",
                  linecolor: "white",
                  ticks: "",
                },
              },
              ternary: {
                bgcolor: "#E5ECF6",
                aaxis: {
                  gridcolor: "white",
                  linecolor: "white",
                  ticks: "",
                },
                baxis: {
                  gridcolor: "white",
                  linecolor: "white",
                  ticks: "",
                },
                caxis: {
                  gridcolor: "white",
                  linecolor: "white",
                  ticks: "",
                },
              },
              coloraxis: {
                colorbar: {
                  outlinewidth: 0,
                  ticks: "",
                },
              },
              colorscale: {
                sequential: [
                  [0.0, "#0d0887"],
                  [0.1111111111111111, "#46039f"],
                  [0.2222222222222222, "#7201a8"],
                  [0.3333333333333333, "#9c179e"],
                  [0.4444444444444444, "#bd3786"],
                  [0.5555555555555556, "#d8576b"],
                  [0.6666666666666666, "#ed7953"],
                  [0.7777777777777778, "#fb9f3a"],
                  [0.8888888888888888, "#fdca26"],
                  [1.0, "#f0f921"],
                ],
                sequentialminus: [
                  [0.0, "#0d0887"],
                  [0.1111111111111111, "#46039f"],
                  [0.2222222222222222, "#7201a8"],
                  [0.3333333333333333, "#9c179e"],
                  [0.4444444444444444, "#bd3786"],
                  [0.5555555555555556, "#d8576b"],
                  [0.6666666666666666, "#ed7953"],
                  [0.7777777777777778, "#fb9f3a"],
                  [0.8888888888888888, "#fdca26"],
                  [1.0, "#f0f921"],
                ],
                diverging: [
                  [0, "#8e0152"],
                  [0.1, "#c51b7d"],
                  [0.2, "#de77ae"],
                  [0.3, "#f1b6da"],
                  [0.4, "#fde0ef"],
                  [0.5, "#f7f7f7"],
                  [0.6, "#e6f5d0"],
                  [0.7, "#b8e186"],
                  [0.8, "#7fbc41"],
                  [0.9, "#4d9221"],
                  [1, "#276419"],
                ],
              },
              xaxis: {
                gridcolor: "white",
                linecolor: "white",
                ticks: "",
                title: {
                  standoff: 15,
                },
                zerolinecolor: "white",
                automargin: true,
                zerolinewidth: 2,
              },
              yaxis: {
                gridcolor: "white",
                linecolor: "white",
                ticks: "",
                title: {
                  standoff: 15,
                },
                zerolinecolor: "white",
                automargin: true,
                zerolinewidth: 2,
              },
              scene: {
                xaxis: {
                  backgroundcolor: "#E5ECF6",
                  gridcolor: "white",
                  linecolor: "white",
                  showbackground: true,
                  ticks: "",
                  zerolinecolor: "white",
                  gridwidth: 2,
                },
                yaxis: {
                  backgroundcolor: "#E5ECF6",
                  gridcolor: "white",
                  linecolor: "white",
                  showbackground: true,
                  ticks: "",
                  zerolinecolor: "white",
                  gridwidth: 2,
                },
                zaxis: {
                  backgroundcolor: "#E5ECF6",
                  gridcolor: "white",
                  linecolor: "white",
                  showbackground: true,
                  ticks: "",
                  zerolinecolor: "white",
                  gridwidth: 2,
                },
              },
              shapedefaults: {
                line: {
                  color: "#2a3f5f",
                },
              },
              annotationdefaults: {
                arrowcolor: "#2a3f5f",
                arrowhead: 0,
                arrowwidth: 1,
              },
              geo: {
                bgcolor: "white",
                landcolor: "#E5ECF6",
                subunitcolor: "white",
                showland: true,
                showlakes: true,
                lakecolor: "white",
              },
              title: {
                x: 0.05,
              },
              mapbox: {
                style: "light",
              },
            },
          },
          font: {
            size: 24,
            color: "black",
          },
          hoverlabel: {
            font: {
              size: 20,
              family: "Arial",
              color: "black",
            },
            bgcolor: "white",
          },
          legend: {
            font: {
              size: 20,
              color: "black",
            },
            orientation: "v",
            traceorder: "grouped",
            yanchor: "top",
            y: 1,
            xanchor: "left",
            x: 0.85,
            tracegroupgap: 25,
          },
          yaxis: {
            tickfont: {
              size: 24,
              color: "black",
            },
            autorange: "reversed",
            title: {},
            showgrid: false,
            ticksuffix: "  ",
          },
          xaxis: {
            tickfont: {
              size: 24,
              color: "black",
            },
            title: {},
            range: [0, 0.8],
            tickformat: ".0%",
            showgrid: true,
            gridcolor: "#BDBDBD",
            gridwidth: 1,
            zeroline: false,
          },
          margin: {
            l: 180,
            r: 40,
            t: 50,
            b: 50,
          },
          barmode: "stack",
          paper_bgcolor: "white",
          plot_bgcolor: "white",
          showlegend: true,
          height: 800,
          width: 1350,
        }}
      />
    </div>
  )
}
