import React from "react"
import { LazyPlotly } from "../../../../src/components/Plots"

export default function Ab202516Fig1A() {
  return (
    <div style={{ clear: 'both', marginBottom: '20px' }}>
      <LazyPlotly
        data={[
          {
            customdata: [
              [21.51, 25.45],
              [21.26, 25.28],
              [21.25, 25.21],
              [21.49, 25.46],
              [21.27, 25.22],
              [21.47, 25.37],
              [21.18, 25.26],
              [21.43, 25.63],
              [21.54, 25.52],
              [21.58, 25.44],
              [21.52, 25.49],
              [21.61, 25.59],
              [21.58, 25.67],
              [21.69, 25.61],
              [21.45, 25.54],
              [21.79, 25.74],
              [21.89, 25.91],
              [22.03, 26.0],
              [21.78, 25.77],
              [21.86, 25.9],
              [21.91, 25.81],
              [21.62, 25.67],
              [21.9, 25.85],
              [21.94, 25.96],
              [22.1, 25.99],
              [21.9, 25.84],
              [22.06, 26.24],
              [22.11, 26.05],
              [21.96, 25.97],
              [21.98, 26.01],
              [21.92, 25.88],
              [22.34, 26.25],
              [22.21, 26.37],
              [22.49, 26.49],
              [22.51, 26.48],
              [22.05, 26.11],
              [22.2, 26.11],
              [22.43, 26.39],
              [22.51, 26.38],
              [22.35, 26.4],
              [22.46, 26.39],
              [22.13, 26.15],
              [22.45, 26.43],
              [22.39, 26.38],
              [22.4, 26.4],
              [22.44, 26.34],
              [22.64, 26.61],
              [22.39, 26.37],
              [22.78, 26.7],
              [22.68, 26.81],
              [22.81, 26.72],
              [23.11, 26.96],
              [22.95, 26.94],
              [22.83, 26.83],
              [23.04, 27.01],
              [22.69, 26.68],
              [22.67, 26.68],
              [22.99, 26.91],
              [22.7, 26.61],
              [23.0, 26.85],
              [23.46, 27.4],
              [23.38, 27.34],
              [23.07, 27.1],
              [23.31, 27.22],
              [23.16, 27.18],
              [23.4, 27.31],
              [22.94, 27.11],
              [23.47, 27.55],
              [23.42, 27.48],
              [23.53, 27.79],
              [23.7, 27.77],
              [23.79, 27.72],
              [23.65, 27.63],
              [23.71, 27.61],
              [23.59, 27.55],
              [23.86, 27.86],
              [23.98, 27.87],
              [24.14, 28.13],
              [23.83, 27.9],
              [23.96, 27.88],
              [23.76, 27.67],
            ],
            fillcolor: "rgba(0,0,0,0)",
            hovertemplate:
              "Max: %{upperfence}<br>P95: %{customdata[1]}<br>Q3: %{q3}<br>Median: %{median}<br>Q1: %{q1}<br>P5: %{customdata[0]}<br>Min: %{lowerfence}<extra></extra>",
            line: {
              color: "#520a82",
              width: 1,
            },
            lowerfence: {
              dtype: "f8",
              bdata:
                "mpmZmZmZMkBxPQrXo3AyQI/C9ShcTzJAw/UoXI+CMkDXo3A9ClcyQIXrUbgehTJAhetRuB5FMkCF61G4HoUyQOF6FK5HoTJAMzMzMzOzMkDXo3A9CpcyQGZmZmZmpjJApHA9CtejMkAK16NwPcoyQI/C9ShcjzJA7FG4HoXrMkAzMzMzM/MyQBSuR+F6FDNA16NwPQrXMkDXo3A9CtcyQD0K16Nw/TJAAAAAAADAMkAK16NwPQozQHE9Ctej8DJA9ihcj8I1M0Bcj8L1KBwzQK5H4XoULjNAPQrXo3A9M0DXo3A9ChczQM3MzMzMDDNAmpmZmZkZM0DsUbgehWszQEjhehSuRzNAj8L1KFyPM0DhehSuR6EzQClcj8L1KDNAmpmZmZlZM0CuR+F6FG4zQOF6FK5HoTNA9ihcj8J1M0DXo3A9CpczQLgehetRODNAAAAAAACAM0DD9Shcj4IzQM3MzMzMjDNACtejcD2KM0AzMzMzM7MzQHsUrkfhejNAXI/C9SjcM0Bcj8L1KNwzQB+F61G43jNA9ihcj8I1NEDD9ShcjwI0QKRwPQrX4zNApHA9CtcjNEDhehSuR+EzQIXrUbgexTNAUrgehesRNEDNzMzMzMwzQPYoXI/CNTRAhetRuB6FNEBxPQrXo3A0QLgehetRODRA7FG4HoVrNECF61G4HkU0QBSuR+F6lDRA4XoUrkchNEBSuB6F65E0QI/C9ShcjzRA16NwPQqXNECamZmZmdk0QKRwPQrX4zRA16NwPQrXNEDXo3A9Ctc0QFK4HoXr0TRASOF6FK4HNUBmZmZmZiY1QD0K16NwPTVAmpmZmZnZNEDhehSuRyE1QK5H4XoU7jRA",
            },
            median: {
              dtype: "f8",
              bdata:
                "7FG4HoUrOECuR+F6FO43QGZmZmZm5jdAZmZmZmYmOED2KFyPwvU3QBSuR+F6FDhAuB6F61H4N0CPwvUoXE84QClcj8L1KDhAZmZmZmYmOEA9CtejcD04QJqZmZmZWThAj8L1KFxPOEBSuB6F61E4QArXo3A9SjhA7FG4HoVrOEBcj8L1KJw4QPYoXI/CtThAexSuR+F6OEBcj8L1KJw4QMP1KFyPgjhA16NwPQpXOEBI4XoUroc4QFyPwvUonDhAuB6F61G4OEDD9Shcj4I4QKRwPQrX4zhAexSuR+G6OECuR+F6FK44QAAAAAAAwDhAFK5H4XqUOEAAAAAAAAA5QJqZmZmZGTlAPQrXo3A9OUCkcD0K1yM5QArXo3A9yjhAFK5H4XrUOECkcD0K1yM5QOF6FK5HITlAH4XrUbgeOUAfhetRuB45QJqZmZmZ2ThArkfhehQuOUDXo3A9Chc5QI/C9ShcDzlAj8L1KFwPOUCamZmZmVk5QBSuR+F6FDlAMzMzMzNzOUDD9Shcj4I5QIXrUbgehTlAMzMzMzOzOUBcj8L1KJw5QOxRuB6FqzlAPQrXo3C9OUDsUbgehWs5QOxRuB6FazlAMzMzMzOzOUApXI/C9Wg5QOF6FK5HoTlAj8L1KFwPOkCPwvUoXA86QClcj8L16DlAKVyPwvXoOUAzMzMzM/M5QEjhehSuBzpAXI/C9SjcOUDD9Shcj0I6QPYoXI/CNTpAKVyPwvVoOkBxPQrXo3A6QGZmZmZmZjpAmpmZmZlZOkBxPQrXo3A6QM3MzMzMTDpACtejcD2KOkDhehSuR6E6QB+F61G43jpApHA9CtejOkCamZmZmZk6QHsUrkfhejpA",
            },
            name: "",
            opacity: 0.5,
            q1: {
              dtype: "f8",
              bdata:
                "mpmZmZmZN0BSuB6F61E3QFyPwvUoXDdAFK5H4XqUN0BmZmZmZmY3QAAAAAAAgDdA16NwPQpXN0AAAAAAAMA3QJqZmZmZmTdAj8L1KFyPN0BmZmZmZqY3QMP1KFyPwjdArkfhehSuN0A9CtejcL03QOxRuB6FqzdASOF6FK7HN0DD9ShcjwI4QB+F61G4HjhA4XoUrkfhN0BSuB6F6xE4QClcj8L16DdAexSuR+G6N0D2KFyPwvU3QFK4HoXrEThAKVyPwvUoOEAzMzMzM/M3QM3MzMzMTDhAKVyPwvUoOEDNzMzMzAw4QGZmZmZmJjhArkfhehTuN0BxPQrXo3A4QMP1KFyPgjhArkfhehSuOEDXo3A9Cpc4QDMzMzMzMzhAhetRuB5FOEBI4XoUroc4QFK4HoXrkThAzczMzMyMOEAAAAAAAIA4QLgehetRODhA4XoUrkehOECF61G4HoU4QIXrUbgehThAPQrXo3B9OECF61G4HsU4QKRwPQrXYzhApHA9CtfjOEAfhetRuN44QKRwPQrX4zhAZmZmZmYmOUBI4XoUrgc5QJqZmZmZGTlAZmZmZmYmOUCamZmZmdk4QNejcD0K1zhAXI/C9SgcOUBI4XoUrsc4QJqZmZmZGTlASOF6FK6HOUB7FK5H4Xo5QHsUrkfhOjlA16NwPQpXOUDNzMzMzEw5QLgehetReDlAcT0K16MwOUBmZmZmZqY5QOF6FK5HoTlAFK5H4XrUOUAUrkfhetQ5QNejcD0K1zlAPQrXo3C9OUCkcD0K1+M5QLgehetRuDlAuB6F61H4OUCPwvUoXA86QBSuR+F6VDpACtejcD0KOkAK16NwPQo6QFyPwvUo3DlA",
            },
            q3: {
              dtype: "f8",
              bdata:
                "j8L1KFwPOUApXI/C9eg4QJqZmZmZ2ThACtejcD0KOUCamZmZmdk4QMP1KFyPAjlA4XoUrkfhOEC4HoXrUTg5QClcj8L1KDlASOF6FK4HOUAfhetRuB45QLgehetRODlAhetRuB5FOUCF61G4HkU5QGZmZmZmJjlAXI/C9ShcOUA9CtejcH05QNejcD0KlzlAKVyPwvVoOUAAAAAAAIA5QClcj8L1aDlASOF6FK5HOUC4HoXrUXg5QI/C9ShcjzlAXI/C9SicOUDD9Shcj4I5QFK4HoXr0TlAMzMzMzOzOUDhehSuR6E5QOF6FK5HoTlAAAAAAACAOUAfhetRuN45QPYoXI/C9TlACtejcD0KOkDXo3A9Chc6QHE9CtejsDlAhetRuB7FOUAAAAAAAAA6QHsUrkfh+jlAuB6F61H4OUAK16NwPQo6QEjhehSuxzlAhetRuB4FOkA9CtejcP05QFK4HoXrETpAAAAAAAAAOkB7FK5H4To6QLgehetR+DlAhetRuB5FOkDsUbgehWs6QJqZmZmZWTpAzczMzMyMOkDNzMzMzIw6QK5H4XoUbjpAH4XrUbieOkAK16NwPUo6QFK4HoXrUTpAPQrXo3B9OkCF61G4HkU6QHsUrkfhejpAMzMzMzPzOkDsUbgehes6QHsUrkfhujpA16NwPQrXOkAK16NwPco6QFyPwvUo3DpAcT0K16OwOkCamZmZmRk7QFK4HoXrETtAFK5H4XpUO0AUrkfhelQ7QMP1KFyPQjtAuB6F61E4O0B7FK5H4To7QDMzMzMzMztA9ihcj8J1O0D2KFyPwnU7QDMzMzMzsztAAAAAAACAO0CF61G4HoU7QI/C9ShcTztA",
            },
            showlegend: false,
            upperfence: {
              dtype: "f8",
              bdata:
                "CtejcD0KO0D2KFyPwvU6QHsUrkfhujpAAAAAAAAAO0CkcD0K1+M6QPYoXI/C9TpAH4XrUbjeOkAUrkfhehQ7QLgehetRODtAPQrXo3D9OkCamZmZmRk7QFyPwvUoHDtAUrgehetRO0CkcD0K1yM7QDMzMzMzMztAUrgehetRO0CF61G4HkU7QHsUrkfhOjtAKVyPwvVoO0BxPQrXozA7QD0K16NwPTtAUrgehetRO0DD9Shcj0I7QOF6FK5HYTtArkfhehRuO0AfhetRuF47QOF6FK5HoTtA16NwPQqXO0AzMzMzM7M7QHsUrkfhejtAj8L1KFyPO0ApXI/C9ag7QMP1KFyPwjtASOF6FK6HO0DXo3A9Ctc7QD0K16NwvTtACtejcD2KO0DNzMzMzMw7QD0K16NwvTtAuB6F61G4O0D2KFyPwvU7QK5H4XoUrjtACtejcD3KO0BxPQrXo/A7QIXrUbgeBTxAXI/C9SjcO0AAAAAAAAA8QArXo3A9CjxAuB6F61H4O0A9CtejcD08QFyPwvUoHDxArkfhehQuPEAzMzMzM3M8QB+F61G4HjxArkfhehRuPECamZmZmRk8QFyPwvUoHDxAAAAAAABAPEDsUbgehSs8QEjhehSuRzxA4XoUrkehPEA9CtejcL08QOxRuB6FqzxAH4XrUbiePEBI4XoUroc8QHE9CtejcDxAPQrXo3C9PEAzMzMzM7M8QDMzMzMz8zxA7FG4HoXrPEC4HoXrUfg8QHE9Ctej8DxAXI/C9SjcPEAzMzMzM/M8QHsUrkfh+jxAPQrXo3A9PUA9CtejcD09QI/C9ShcTz1AMzMzMzMzPUDsUbgehSs9QGZmZmZmJj1A",
            },
            x: {
              dtype: "i2",
              bdata:
                "xgfHB8gHyQfKB8sHzAfNB84HzwfQB9EH0gfTB9QH1QfWB9cH2AfZB9oH2wfcB90H3gffB+AH4QfiB+MH5AflB+YH5wfoB+kH6gfrB+wH7QfuB+8H8AfxB/IH8wf0B/UH9gf3B/gH+Qf6B/sH/Af9B/4H/wcACAEIAggDCAQIBQgGCAcICAgJCAoICwgMCA0IDggPCBAIEQgSCBMIFAgVCBYI",
            },
            type: "box",
          },
          {
            line: {
              color: "#520a82",
              width: 4,
            },
            mode: "lines",
            name: "Median",
            showlegend: false,
            x: {
              dtype: "i2",
              bdata:
                "xgfHB8gHyQfKB8sHzAfNB84HzwfQB9EH0gfTB9QH1QfWB9cH2AfZB9oH2wfcB90H3gffB+AH4QfiB+MH5AflB+YH5wfoB+kH6gfrB+wH7QfuB+8H8AfxB/IH8wf0B/UH9gf3B/gH+Qf6B/sH/Af9B/4H/wcACAEIAggDCAQIBQgGCAcICAgJCAoICwgMCA0IDggPCBAIEQgSCBMIFAgVCBYI",
            },
            y: {
              dtype: "f8",
              bdata:
                "7FG4HoUrOECuR+F6FO43QGZmZmZm5jdAZmZmZmYmOED2KFyPwvU3QBSuR+F6FDhAuB6F61H4N0CPwvUoXE84QClcj8L1KDhAZmZmZmYmOEA9CtejcD04QJqZmZmZWThAj8L1KFxPOEBSuB6F61E4QArXo3A9SjhA7FG4HoVrOEBcj8L1KJw4QPYoXI/CtThAexSuR+F6OEBcj8L1KJw4QMP1KFyPgjhA16NwPQpXOEBI4XoUroc4QFyPwvUonDhAuB6F61G4OEDD9Shcj4I4QKRwPQrX4zhAexSuR+G6OECuR+F6FK44QAAAAAAAwDhAFK5H4XqUOEAAAAAAAAA5QJqZmZmZGTlAPQrXo3A9OUCkcD0K1yM5QArXo3A9yjhAFK5H4XrUOECkcD0K1yM5QOF6FK5HITlAH4XrUbgeOUAfhetRuB45QJqZmZmZ2ThArkfhehQuOUDXo3A9Chc5QI/C9ShcDzlAj8L1KFwPOUCamZmZmVk5QBSuR+F6FDlAMzMzMzNzOUDD9Shcj4I5QIXrUbgehTlAMzMzMzOzOUBcj8L1KJw5QOxRuB6FqzlAPQrXo3C9OUDsUbgehWs5QOxRuB6FazlAMzMzMzOzOUApXI/C9Wg5QOF6FK5HoTlAj8L1KFwPOkCPwvUoXA86QClcj8L16DlAKVyPwvXoOUAzMzMzM/M5QEjhehSuBzpAXI/C9SjcOUDD9Shcj0I6QPYoXI/CNTpAKVyPwvVoOkBxPQrXo3A6QGZmZmZmZjpAmpmZmZlZOkBxPQrXo3A6QM3MzMzMTDpACtejcD2KOkDhehSuR6E6QB+F61G43jpApHA9CtejOkCamZmZmZk6QHsUrkfhejpA",
            },
            type: "scatter",
          },
        ]}
        layout={{
          template: {
            data: {
              barpolar: [
                {
                  marker: {
                    line: {
                      color: "white",
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
                      color: "white",
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
              carpet: [
                {
                  aaxis: {
                    endlinecolor: "#2a3f5f",
                    gridcolor: "#C8D4E3",
                    linecolor: "#C8D4E3",
                    minorgridcolor: "#C8D4E3",
                    startlinecolor: "#2a3f5f",
                  },
                  baxis: {
                    endlinecolor: "#2a3f5f",
                    gridcolor: "#C8D4E3",
                    linecolor: "#C8D4E3",
                    minorgridcolor: "#C8D4E3",
                    startlinecolor: "#2a3f5f",
                  },
                  type: "carpet",
                },
              ],
              choropleth: [
                {
                  colorbar: {
                    outlinewidth: 0,
                    ticks: "",
                  },
                  type: "choropleth",
                },
              ],
              contourcarpet: [
                {
                  colorbar: {
                    outlinewidth: 0,
                    ticks: "",
                  },
                  type: "contourcarpet",
                },
              ],
              contour: [
                {
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
                  type: "contour",
                },
              ],
              heatmap: [
                {
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
                  type: "heatmap",
                },
              ],
              histogram2dcontour: [
                {
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
                  type: "histogram2dcontour",
                },
              ],
              histogram2d: [
                {
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
                  type: "histogram2d",
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
              mesh3d: [
                {
                  colorbar: {
                    outlinewidth: 0,
                    ticks: "",
                  },
                  type: "mesh3d",
                },
              ],
              parcoords: [
                {
                  line: {
                    colorbar: {
                      outlinewidth: 0,
                      ticks: "",
                    },
                  },
                  type: "parcoords",
                },
              ],
              pie: [
                {
                  automargin: true,
                  type: "pie",
                },
              ],
              scatter3d: [
                {
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
                  type: "scatter3d",
                },
              ],
              scattercarpet: [
                {
                  marker: {
                    colorbar: {
                      outlinewidth: 0,
                      ticks: "",
                    },
                  },
                  type: "scattercarpet",
                },
              ],
              scattergeo: [
                {
                  marker: {
                    colorbar: {
                      outlinewidth: 0,
                      ticks: "",
                    },
                  },
                  type: "scattergeo",
                },
              ],
              scattergl: [
                {
                  marker: {
                    colorbar: {
                      outlinewidth: 0,
                      ticks: "",
                    },
                  },
                  type: "scattergl",
                },
              ],
              scattermapbox: [
                {
                  marker: {
                    colorbar: {
                      outlinewidth: 0,
                      ticks: "",
                    },
                  },
                  type: "scattermapbox",
                },
              ],
              scattermap: [
                {
                  marker: {
                    colorbar: {
                      outlinewidth: 0,
                      ticks: "",
                    },
                  },
                  type: "scattermap",
                },
              ],
              scatterpolargl: [
                {
                  marker: {
                    colorbar: {
                      outlinewidth: 0,
                      ticks: "",
                    },
                  },
                  type: "scatterpolargl",
                },
              ],
              scatterpolar: [
                {
                  marker: {
                    colorbar: {
                      outlinewidth: 0,
                      ticks: "",
                    },
                  },
                  type: "scatterpolar",
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
              scatterternary: [
                {
                  marker: {
                    colorbar: {
                      outlinewidth: 0,
                      ticks: "",
                    },
                  },
                  type: "scatterternary",
                },
              ],
              surface: [
                {
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
                  type: "surface",
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
            },
            layout: {
              annotationdefaults: {
                arrowcolor: "#2a3f5f",
                arrowhead: 0,
                arrowwidth: 1,
              },
              autotypenumbers: "strict",
              coloraxis: {
                colorbar: {
                  outlinewidth: 0,
                  ticks: "",
                },
              },
              colorscale: {
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
              },
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
              geo: {
                bgcolor: "white",
                lakecolor: "white",
                landcolor: "white",
                showlakes: true,
                showland: true,
                subunitcolor: "#C8D4E3",
              },
              hoverlabel: {
                align: "left",
              },
              hovermode: "closest",
              mapbox: {
                style: "light",
              },
              paper_bgcolor: "white",
              plot_bgcolor: "white",
              polar: {
                angularaxis: {
                  gridcolor: "#EBF0F8",
                  linecolor: "#EBF0F8",
                  ticks: "",
                },
                bgcolor: "white",
                radialaxis: {
                  gridcolor: "#EBF0F8",
                  linecolor: "#EBF0F8",
                  ticks: "",
                },
              },
              scene: {
                xaxis: {
                  backgroundcolor: "white",
                  gridcolor: "#DFE8F3",
                  gridwidth: 2,
                  linecolor: "#EBF0F8",
                  showbackground: true,
                  ticks: "",
                  zerolinecolor: "#EBF0F8",
                },
                yaxis: {
                  backgroundcolor: "white",
                  gridcolor: "#DFE8F3",
                  gridwidth: 2,
                  linecolor: "#EBF0F8",
                  showbackground: true,
                  ticks: "",
                  zerolinecolor: "#EBF0F8",
                },
                zaxis: {
                  backgroundcolor: "white",
                  gridcolor: "#DFE8F3",
                  gridwidth: 2,
                  linecolor: "#EBF0F8",
                  showbackground: true,
                  ticks: "",
                  zerolinecolor: "#EBF0F8",
                },
              },
              shapedefaults: {
                line: {
                  color: "#2a3f5f",
                },
              },
              ternary: {
                aaxis: {
                  gridcolor: "#DFE8F3",
                  linecolor: "#A2B1C6",
                  ticks: "",
                },
                baxis: {
                  gridcolor: "#DFE8F3",
                  linecolor: "#A2B1C6",
                  ticks: "",
                },
                bgcolor: "white",
                caxis: {
                  gridcolor: "#DFE8F3",
                  linecolor: "#A2B1C6",
                  ticks: "",
                },
              },
              title: {
                x: 0.05,
              },
              xaxis: {
                automargin: true,
                gridcolor: "#EBF0F8",
                linecolor: "#EBF0F8",
                ticks: "",
                title: {
                  standoff: 15,
                },
                zerolinecolor: "#EBF0F8",
                zerolinewidth: 2,
              },
              yaxis: {
                automargin: true,
                gridcolor: "#EBF0F8",
                linecolor: "#EBF0F8",
                ticks: "",
                title: {
                  standoff: 15,
                },
                zerolinecolor: "#EBF0F8",
                zerolinewidth: 2,
              },
            },
          },
          yaxis: {
            range: [18, 30],
            title: {
              font: {
                size: 20,
              },
              text: "",
            },
            tickfont: {
              size: 16,
            },
            showgrid: true,
            gridwidth: 0.2,
            gridcolor: "#BEBEBE",
            zeroline: false,
          },
          shapes: [
            {
              line: {
                color: "#970A0A",
                dash: "dot",
                width: 2,
              },
              type: "line",
              x0: 2024.5,
              x1: 2024.5,
              xref: "x",
              y0: 0,
              y1: 1,
              yref: "y domain",
            },
          ],
          annotations: [
            {
              align: "center",
              font: {
                color: "black",
                size: 16,
              },
              showarrow: false,
              text: "<b>Historical</b>",
              x: 2007.0,
              xref: "x",
              y: 1,
              yref: "paper",
            },
            {
              align: "center",
              font: {
                color: "black",
                size: 16,
              },
              showarrow: false,
              text: "<b>Projected</b>",
              x: 2047.0,
              xref: "x",
              y: 1,
              yref: "paper",
            },
            {
              align: "center",
              font: {
                color: "black",
                size: 16,
              },
              showarrow: false,
              text: "Mean: 24.36 | SD: 1.36",
              x: 2007.0,
              xref: "x",
              y: -0.22,
              yref: "paper",
            },
            {
              align: "center",
              font: {
                color: "black",
                size: 16,
              },
              showarrow: false,
              text: "Mean: 25.63 | SD: 1.43",
              x: 2047.0,
              xref: "x",
              y: -0.22,
              yref: "paper",
            },
          ],
          margin: {
            b: 120,
            t: 120,
            l: 100,
          },
          title: {
            font: {
              size: 24,
            },
            text: "อุณหภูมิเฉลี่ยต่อปีรายอำเภอ (°C)",
          },
          xaxis: {
            title: {
              font: {
                size: 20,
              },
              text: "Year",
            },
            tickfont: {
              size: 16,
            },
            showgrid: false,
          },
          plot_bgcolor: "white",
          paper_bgcolor: "white",
          height: 600,
          width: 800,
        }}
      />
    </div>
  )
}
