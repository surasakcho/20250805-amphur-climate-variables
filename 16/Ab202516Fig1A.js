import React from "react"
import { LazyPlotly } from "../../../../src/components/Plots"

export default function Ab202516Fig1A() {
  return (
    <LazyPlotly
      data={[
        {
          fillcolor: "#8f64acff",
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
        yaxis: {
          range: [17, 30],
          showgrid: true,
          title: {
            text: "อุณหภูมิเฉลี่ยรายอำเภอ (°C)",
          }
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
            showarrow: false,
            text: "<b>Historical</b><br />Mean: 24.36 | SD: 1.36",
            x: 2007.0,
            xref: "x",
            y: 1,
            yref: "paper",
          },
          {
            align: "center",
            showarrow: false,
            text: "<b>Projected</b><br />Mean: 25.63 | SD: 1.43",
            x: 2047.0,
            xref: "x",
            y: 1,
            yref: "paper",
          },
        ],
        xaxis: {
          title: {
            text: "Year",
          },
          showgrid: false,
        },
      }}
    />
  )
}