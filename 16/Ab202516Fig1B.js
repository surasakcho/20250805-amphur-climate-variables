import React from "react";
import { LazyPlotly } from "../../../../src/components/Plots";

export default function Ab202516Fig1B() {
  return (
    <LazyPlotly
      data={[
        {
          fillcolor: "#6487a0ff",
          hovertemplate:
            "Max: %{upperfence}<br>P95: %{customdata[1]}<br>Q3: %{q3}<br>Median: %{median}<br>Q1: %{q1}<br>P5: %{customdata[0]}<br>Min: %{lowerfence}<extra></extra>",
          line: {
            color: "#2D648B",
            width: 1,
          },
          lowerfence: {
            dtype: "f8",
            bdata:
              "FK5H4XqegkBmZmZmZpyDQHE9CtejLoFA16NwPQqbg0B7FK5H4QaEQPYoXI/Ch4JAw/UoXI8OgkAfhetRuP6AQI/C9ShcX4BArkfhehRWgkDD9Shcj4qCQMP1KFyPUIVAUrgehesVgkDXo3A9CiOFQM3MzMzMfIVA16NwPQrVgkCPwvUoXAGEQDMzMzMz4YJA7FG4HoXlgkCamZmZmb+CQOxRuB6FhYFA7FG4HoU9g0DsUbgehU2BQI/C9ShcK4RAKVyPwvWkgEAK16NwPfiCQMP1KFyP6oRA16NwPQoHg0AAAAAAALyBQArXo3A9woJAXI/C9SjegUAfhetRuEaAQIXrUbgedYBAhetRuB5fgEAAAAAAAEKBQEjhehSuX4JAXI/C9Sh2gkAzMzMzMymCQClcj8L15oNACtejcD2QgUA9CtejcMmBQPYoXI/CCYRAcT0K16N8gUDD9Shcj2CGQClcj8L1KoNAexSuR+FugUAzMzMzM4mDQBSuR+F6OoFArkfhehQCf0DD9Shcj8SCQPYoXI/CzYJAuB6F61E+hEBcj8L1KAyAQPYoXI/CaYRAzczMzMwKg0BI4XoUrpWEQMP1KFyPuIJAw/UoXI8me0DNzMzMzJiEQNejcD0KnYJACtejcD1Qg0C4HoXrUXSBQLgehetR6IRAZmZmZmYYgkCuR+F6FICDQKRwPQrXv4JAPQrXo3DJjECuR+F6FOaEQOxRuB6FO4ZAzczMzMywf0BxPQrXo0CAQDMzMzMz939A7FG4HoVvg0AzMzMzM9GBQI/C9Shcp4ZAj8L1KFy/gUDsUbgehZmBQClcj8L1voFAw/UoXI+6gUDD9ShcjwaEQArXo3A9roNA",
          },
          median: {
            dtype: "f8",
            bdata:
              "MzMzMzNTjUBI4XoUrpeMQClcj8L1JIlAcT0K16MwjEBmZmZmZmiPQEjhehSuvYtAexSuR+EwjEBmZmZmZlSNQEjhehSuJYlAuB6F61HujECPwvUoXLeOQClcj8L1s5BAcT0K16Mwi0CamZmZmU2QQNejcD0K3Y9AhetRuB6rjUDXo3A9CleMQOxRuB6FuYpAmpmZmZl/jEAUrkfheiyLQArXo3A9rItAuB6F61Eqj0CuR+F6FFKLQB+F61G41o5AcT0K16PMiUCuR+F6FACMQJqZmZmZfY5APQrXo3AxjEAAAAAAANSJQNejcD0K04lAFK5H4XqSiEBxPQrXo6CMQIXrUbgec4lAmpmZmZlpiUBcj8L1KEyKQKRwPQrXAYxAXI/C9Sj2i0BI4XoUruGLQArXo3A9ro5A7FG4HoUJi0DsUbgeheeMQHE9Ctej4ItAj8L1KFyvi0AK16NwPWaPQPYoXI/CNYxAXI/C9Si2ikAfhetRuFKNQClcj8L1HotA7FG4HoUriUBmZmZmZqaNQLgehetR0IpApHA9CtcrjEAAAAAAAHaJQFK4HoXrI41AuB6F61HQjEB7FK5H4XqPQPYoXI/CuY1AKVyPwvVoh0DXo3A9CliQQKRwPQrX9Y5AuB6F61GwjEBxPQrXoxyIQJqZmZmZ4Y9AcT0K16NiiUBcj8L1KLiNQMP1KFyPcI5AZmZmZmZilECkcD0K1y2NQMP1KFyP45BAZmZmZmYGiEBxPQrXo0KJQB+F61G4sodA9ihcj8JljkAzMzMzM1WMQClcj8L1rJFASOF6FK5DjEB7FK5H4biIQOF6FK5Hy4tAexSuR+EuikAfhetRuFaNQEjhehSuGY1A",
          },
          name: "",
          opacity: 0.5,
          q1: {
            dtype: "f8",
            bdata:
              "ZmZmZmZ0iUCkcD0K13GJQHE9CtejloZAXI/C9ShciUCkcD0K1z+LQOF6FK5HQYlAPQrXo3CHiEBSuB6F67GIQLgehetRGIZAZmZmZmZuiUBSuB6F62+KQM3MzMzMro1AuB6F61Gkh0BxPQrXowCMQD0K16NwpYtAexSuR+EgiUCPwvUoXPOIQM3MzMzMpIdAw/UoXI+ciUCamZmZmemHQMP1KFyPzodA9ihcj8IJi0DsUbgehSeHQB+F61G4GopAAAAAAACKhkA9CtejcMWIQFK4HoXrjYpAj8L1KFx7iUDXo3A9Cs+GQB+F61G4CIdAZmZmZmY+hkCF61G4HvWIQFyPwvUogIVASOF6FK5xhUAAAAAAAFCGQHE9CtejvodAH4XrUbjuh0DXo3A9CmGHQGZmZmZmXIpAKVyPwvWoh0B7FK5H4eyIQMP1KFyPmohACtejcD1Oh0AUrkfherKLQEjhehSub4hA7FG4HoXthkDhehSuR72JQEjhehSuX4hA16NwPQqxhUDD9ShcjxiJQOxRuB6F74dAZmZmZmYsiUBI4XoUrmOGQM3MzMzMbIhAH4XrUbjeiEAAAAAAALyJQArXo3A9dolAH4XrUbiagkCuR+F6FEqNQPYoXI/Ce4tApHA9Ctc5iUBI4XoUrq+FQIXrUbgedYpAuB6F61G0hkCuR+F6FL6JQFK4HoXrrYpAexSuR+HWkUA9CtejcB2KQHE9CtejTIxASOF6FK7jg0DhehSuR6mFQHE9CtejGIRAKVyPwvXeiUA9CtejcMmHQHsUrkfhSI5AUrgehevXh0AUrkfhepKFQEjhehSutYdAcT0K16PehkBcj8L1KD6JQJqZmZmZu4dA",
          },
          q3: {
            dtype: "f8",
            bdata:
              "AAAAAAAvk0A9CtejcBmSQD0K16Nw/Y9AFK5H4XpJkkCamZmZmXSTQJqZmZmZPJFAZmZmZmY4kkCPwvUoXHWRQPYoXI/CNJBAw/UoXI/0kUCkcD0K12eTQIXrUbgeO5NA9ihcj8LpkEC4HoXrUfuTQIXrUbgeOZRAFK5H4Xp5kUDsUbgehWSSQEjhehSuQpBAuB6F61EDkkBcj8L1KEaQQFyPwvUoSZFAzczMzMzikUAAAAAAANSRQGZmZmZm3JJAZmZmZmYqkEDXo3A9CvKQQHsUrkfhF5NAj8L1KFytkUBI4XoUrmmRQD0K16NwI5BAPQrXo3AXkEDNzMzMzC6SQJqZmZmZ/49AXI/C9Sjyj0DNzMzMzKSQQHsUrkfh1JFAAAAAAAAzkUDsUbgehbiQQIXrUbgeW5NASOF6FK5ZkUB7FK5H4fyQQLgehetRZ5FAH4XrUbhykUCF61G4HiyTQEjhehSu55BAj8L1KFzdkECkcD0K1zKRQHsUrkfhFZFACtejcD1NkEAzMzMzM1mSQOF6FK5HcpFAH4XrUbiwkEB7FK5H4f6PQIXrUbgeqZFApHA9CtfEkUAUrkfheqKTQI/C9Shc45JA4XoUrketjkC4HoXrUWGSQHE9CtejGpNA4XoUrkebkUDhehSuR0WPQLgehetRG5NArkfhehQSkEApXI/C9YaTQClcj8L1P5JAj8L1KFzkmUBmZmZmZrGRQHsUrkfh45NAmpmZmZlbjkAfhetRuOqPQNejcD0K249AZmZmZmbXkUAUrkfhenCRQPYoXI/CQZRAuB6F61ElkUCamZmZmSmPQMP1KFyPtZJAKVyPwvV1kUAfhetRuASRQJqZmZmZcZFA",
          },
          showlegend: false,
          upperfence: {
            dtype: "f8",
            bdata:
              "CtejcD0BpEBSuB6Fa22lQAAAAAAAt59A9ihcj0LnpkAK16NwvSelQFK4HoXrPKFAH4XrUTi8okCPwvUoXNWgQAAAAAAAsKFA16NwPYqmoUD2KFyPwpKkQI/C9SjcDqNAKVyPwnWqoUBxPQrXI+2oQB+F61G4haVAw/UoXI9CokCF61G4nmWkQI/C9ShcsZ5AhetRuJ6RpEB7FK5HYbCgQKRwPQrXn6FACtejcL2XoEAzMzMzMzilQLgehetRtaRArkfhepT6oEBxPQrXo4WiQIXrUbievaZA7FG4HoVHpEA9Ctej8IqlQHsUrkfhVqRA7FG4HoVLn0AK16Nwvf+iQNejcD2KEKJAXI/C9SjooEDNzMzMzF+jQFK4HoXrJaNAMzMzMzMEoUCF61G4nkuhQFyPwvWoFKRAexSuR+F0o0AzMzMzswGhQFK4HoXrE6NAj8L1KNx6okBxPQrXI3yhQArXo3A9VZ9AhetRuB5dokBcj8L1qLqgQDMzMzMz2qJA9ihcj8Jso0ApXI/C9YmiQIXrUbied6FAZmZmZuauokCamZmZmSyfQIXrUbgeI6NAZmZmZubEoUCamZmZmZeiQHsUrkdhIKNA4XoUrkfhoUBmZmZm5syhQNejcD2KF6dAhetRuJ5TokCuR+F6lIuiQDMzMzMzAaVAAAAAAADeoEBcj8L1KDyjQPYoXI/C+qVAXI/C9agusUCPwvUo3ECiQI/C9ShcbqVA7FG4HoU6o0BmZmZmZq+eQNejcD2Kf6NAzczMzExSokDD9ShcD6mlQLgehetRw6ZAAAAAAIDdpECPwvUoXKmgQGZmZmbmCaRAexSuR+EHo0BI4XoULs+iQPYoXI/CUKZA",
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
            color: "#2D648B",
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
              "MzMzMzNTjUBI4XoUrpeMQClcj8L1JIlAcT0K16MwjEBmZmZmZmiPQEjhehSuvYtAexSuR+EwjEBmZmZmZlSNQEjhehSuJYlAuB6F61HujECPwvUoXLeOQClcj8L1s5BAcT0K16Mwi0CamZmZmU2QQNejcD0K3Y9AhetRuB6rjUDXo3A9CleMQOxRuB6FuYpAmpmZmZl/jEAUrkfheiyLQArXo3A9rItAuB6F61Eqj0CuR+F6FFKLQB+F61G41o5AcT0K16PMiUCuR+F6FACMQJqZmZmZfY5APQrXo3AxjEAAAAAAANSJQNejcD0K04lAFK5H4XqSiEBxPQrXo6CMQIXrUbgec4lAmpmZmZlpiUBcj8L1KEyKQKRwPQrXAYxAXI/C9Sj2i0BI4XoUruGLQArXo3A9ro5A7FG4HoUJi0DsUbgeheeMQHE9Ctej4ItAj8L1KFyvi0AK16NwPWaPQPYoXI/CNYxAXI/C9Si2ikAfhetRuFKNQClcj8L1HotA7FG4HoUriUBmZmZmZqaNQLgehetR0IpApHA9CtcrjEAAAAAAAHaJQFK4HoXrI41AuB6F61HQjEB7FK5H4XqPQPYoXI/CuY1AKVyPwvVoh0DXo3A9CliQQKRwPQrX9Y5AuB6F61GwjEBxPQrXoxyIQJqZmZmZ4Y9AcT0K16NiiUBcj8L1KLiNQMP1KFyPcI5AZmZmZmZilECkcD0K1y2NQMP1KFyP45BAZmZmZmYGiEBxPQrXo0KJQB+F61G4sodA9ihcj8JljkAzMzMzM1WMQClcj8L1rJFASOF6FK5DjEB7FK5H4biIQOF6FK5Hy4tAexSuR+EuikAfhetRuFaNQEjhehSuGY1A",
          },
          type: "scatter",
        },
      ]}
      layout={{
        yaxis: {
          range: [0, 3200],
          showgrid: true,
          title: {
            text: "ปริมาณน้ำฝนสะสมต่อปีรายอำเภอ (มม./ปี)",
          },
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
            text: "<b>Historical</b><br />Mean: 988.74 | SD: 287.78",
            x: 2007.0,
            xref: "x",
            y: 1,
            yref: "paper",
          },
          {
            align: "center",
            showarrow: false,
            text: "<b>Projected</b><br />Mean: 994.01 | SD: 305.16",
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
  );
}
