import React from "react";
import { LazyPlotly } from "../../../../src/components/Plots";

export default function Ab202516Fig1C() {
  return (
    <LazyPlotly
      data={[
        {
          fillcolor: "#65aa81ff",
          hovertemplate:
            "Max: %{upperfence}<br>P95: %{customdata[1]}<br>Q3: %{q3}<br>Median: %{median}<br>Q1: %{q1}<br>P5: %{customdata[0]}<br>Min: %{lowerfence}<extra></extra>",
          line: {
            color: "#065e29",
            width: 1,
          },
          lowerfence: {
            dtype: "f8",
            bdata:
              "7FG4HoXr5b++nxov3STyv7pJDAIrh/K/mG4Sg8DK5b+Nl24Sg8DavwisHFpkO+O/j8L1KFyP6r+F61G4HoXzvzvfT42Xbva/O99PjZdu8L9mZmZmZmbiv0Jg5dAi2/G/qvHSTWIQ9L8fhetRuB7hv+kmMQisHNq/rBxaZDvf77++nxov3STmv4XrUbgehfu/fT81XrpJ8L8v3SQGgZX5v2iR7Xw/NfK/BoGVQ4ts+b/8qfHSTWL0vwaBlUOLbOu/VOOlm8Qg9r/NzMzMzMzyv8UgsHJokfG/FK5H4XoU9L/b+X5qvHTxv9V46SYxCPy/EFg5tMh29L9eukkMAiv3v5ZDi2zn+/m/2c73U+Ol+b/pJjEIrBzyvycxCKwcWuS/6SYxCKwc9L8hsHJoke3yv9ejcD0K1+O/f2q8dJMY9L+mm8QgsHL0v2iR7Xw/NfK/WmQ730+N77/jpZvEILDyv9Ei2/l+avC/8tJNYhBY8b8fhetRuB71v4cW2c73U++/okW28/3U9L9iEFg5tMjuv8uhRbbz/fK/TDeJQWDl9r9U46WbxCD6v83MzMzMzPq/BoGVQ4ts8b8UrkfhehTmv2ZmZmZmZvq/pHA9Ctej/L8K16NwPQr1vxfZzvdT4/G/lkOLbOf78797FK5H4Xr2vzMzMzMzM/G/MzMzMzMz878UrkfhehTyv5zEILByaPm/EoPAyqFF1j8AAAAAAAD0vycxCKwcWuy/yXa+nxovA8DLoUW28/32v166SQwCK/m/f2q8dJMY+r+amZmZmZn9v4PAyqFFtvW/c2iR7Xw/+b/8qfHSTWL6vx+F61G4Hu2/SgwCK4cW9b93vp8aL938v4GVQ4ts5/2/",
          },
          median: {
            dtype: "f8",
            bdata:
              "pHA9Ctej0D9zaJHtfD/Vv2Q730+Nl+K/K4cW2c73oz/TTWIQWDngP0oMAiuHFrk/001iEFg5tL/6fmq8dJOIv8HKoUW28+G/aJHtfD81zr97FK5H4XrgP3Noke18P9U/K4cW2c7327/2KFyPwvXIP1g5tMh2vt8/ZmZmZmZmxr/sUbgehevBP90kBoGVQ8u/WmQ730+Nlz9GtvP91HjhvzeJQWDl0MK/4XoUrkfhuj/NzMzMzMzgv8dLN4lBYMU/fT81XrpJ5L+0yHa+nxrPv9Ei2/l+arw/KVyPwvUorD89CtejcD3ivzEIrBxaZOO/TmIQWDm04L/6fmq8dJOIP1pkO99Pje+/7nw/NV666b/NzMzMzMzUv1TjpZvEIMA/1XjpJjEIzL/VeOkmMQjgv+Olm8QgsNI/ppvEILBy2L956SYxCKycvwisHFpkO7+/fT81XrpJ1L/8qfHSTWJgv5zEILByaOE/2c73U+Ol078bL90kBoHFv7bz/dR46ca/Gy/dJAaB4b/b+X5qvHSzP+XQItv5fsq/x0s3iUFgxb/ZzvdT46Xjv+XQItv5ftK/CtejcD0Kt7/pJjEIrBzaP9Ei2/l+ary/5dAi2/l+5r+Nl24Sg8DSP/p+arx0k4i/sp3vp8ZLt7+wcmiR7Xzjvylcj8L1KMw/+n5qvHST2L/6fmq8dJOIv8l2vp8aL62/KVyPwvUo9j/D9Shcj8K1P9nO91PjpdM/1XjpJjEI7L8bL90kBoHhv2ZmZmZmZua/+n5qvHSTeD8ZBFYOLbLNv23n+6nx0t0/i2zn+6nx0r8hsHJoke3kv/p+arx0k3i/iUFg5dAi079/arx0kxjUvycxCKwcWsS/",
          },
          name: "",
          opacity: 0.5,
          q1: {
            dtype: "f8",
            bdata:
              "yXa+nxovrT+yne+nxkvfv5HtfD81Xua/AAAAAAAAwL/HSzeJQWDVP3Noke18P7W/1XjpJjEI1L83iUFg5dDav3WTGARWDum/vp8aL90k3r8bL90kBoHFPxkEVg4tsp2/pHA9Ctej5L8rhxbZzvejv/YoXI/C9dA/UrgehetR4L956SYxCKycv/hT46WbxOC/z/dT46WbxL+4HoXrUbjqv+f7qfHSTdq/5dAi2/l+yr+cxCCwcmjpvyGwcmiR7cy/x0s3iUFg6b/b+X5qvHTbv23n+6nx0s2/TmIQWDm0yL9oke18PzXmv6AaL90kBum/RIts5/up5b+TGARWDi3Svz0K16NwPfK/LbKd76fG8b+uR+F6FK7fv8l2vp8aL72/lkOLbOf72b9KDAIrhxblv0w3iUFg5aA/KVyPwvUo5L8rhxbZzvfTvx1aZDvfT9W/ZmZmZmZm3r/+1HjpJjHQv05iEFg5tNA/sp3vp8ZL379iEFg5tMjev2Dl0CLb+da/vp8aL90k5r+6SQwCK4fGv9NNYhBYOdy/EoPAyqFF1r/ufD81Xrrpv8l2vp8aL+W/MQisHFpk27+6SQwCK4fGP166SQwCK9e/46WbxCCw8r+LbOf7qfGiv5HtfD81XtK/f2q8dJMY1L9g5dAi2/nqv4lBYOXQItO/tvP91Hjp4r9GtvP91HjRv/hT46WbxNi/CKwcWmQ78T93vp8aL93Uv0w3iUFg5aC/MQisHFpk9b/0/dR46Sbpv/YoXI/C9ey/YhBYObTI1r9oke18PzXiv3npJjEIrIy/ObTIdr6f4r8pXI/C9SjsvzMzMzMzM9O/YOXQItv54r81XrpJDALjv3npJjEIrOC/",
          },
          q3: {
            dtype: "f8",
            bdata:
              "FK5H4XoU3j+R7Xw/NV66v3e+nxov3dy/ZDvfT42Xzj91kxgEVg7pP0a28/3UeNE/QmDl0CLbyT9I4XoUrkfRPwisHFpkO8+/SgwCK4cWqT9g5dAi2/nqP9Ei2/l+auQ/UI2XbhKD0L+HFtnO91PbP3sUrkfheug/46WbxCCw0j8ZBFYOLbLVP3Noke18P7U/6SYxCKwcyj9KDAIrhxbRv4lBYOXQIrs/1XjpJjEI1D9OYhBYObTIvxBYObTIdt4/f2q8dJMY3L9U46WbxCCwvw4tsp3vp+I/j8L1KFyP0j8nMQisHFrUv8l2vp8aL92/arx0kxgE1r/NzMzMzMzMP9ejcD0K1+e/f2q8dJMY4L+yne+nxku3v4PAyqFFttM/2c73U+Oluz+4HoXrUbjOv4ts5/up8eY/8tJNYhBYub8AAAAAAADQP2Dl0CLb+b4/+n5qvHSTiL9Ei2zn+6nRP+f7qfHSTeo/UrgehetRuL956SYxCKyMP4ts5/up8bI/1XjpJjEI1L/LoUW28/3UP3E9CtejcL0/Gy/dJAaBpT91kxgEVg7dv0w3iUFg5cA/kxgEVg4t0j/b+X5qvHTnPxkEVg4tss0/eekmMQis1L/n+6nx0k3iPx1aZDvfT9U/16NwPQrXwz+6SQwCK4fWv/Cnxks3ieU/AiuHFtnOx7+gGi/dJAbRP6jGSzeJQdA/MQisHFpk+z9Ei2zn+6nZPwisHFpkO+c/ppvEILBy4L9SuB6F61HQvzvfT42Xbtq/WDm0yHa+zz8730+Nl27CPwaBlUOLbOs/ukkMAiuHhj+e76fGSzfZvylcj8L1KNQ/6SYxCKwcqj/8qfHSTWJQv6rx0k1iEMg/",
          },
          showlegend: false,
          upperfence: {
            dtype: "f8",
            bdata:
              "EoPAyqFF8j9/arx0kxjoP0jhehSuR+E/WDm0yHa+7z9zaJHtfD//P/yp8dJNYuw/HVpkO99P7T/FILByaJHzP42XbhKDwOY/WDm0yHa+7z9MN4lBYOX6P7pJDAIrh/Y/bxKDwMqh4T/jpZvEILDwPwAAAAAAAABAZDvfT42X/D99PzVeukn0PzeJQWDl0Oo/arx0kxgE7j8730+Nl27iP5ZDi2zn+/E/ukkMAiuH6j9YObTIdr7nP9NNYhBYOfg/bxKDwMqh4T8K16NwPQrrP2ZmZmZmZv4/16NwPQrX+T9WDi2yne/xPwRWDi2ynd8/ukkMAiuH1j+e76fGSzfzP7gehetRuM4/ppvEILBy0D9mZmZmZmbwP4GVQ4ts5+8/oBov3SQG7T9qvHSTGATqPx+F61G4HgFASOF6FK5H7T9oke18PzXyPwRWDi2yne8/kxgEVg4t8j+DwMqhRbb7P3e+nxov3fg/hetRuB6F8T9zaJHtfD/lP4ts5/up8fQ/rkfhehSu4z/P91PjpZvyPylcj8L1KPQ/UI2XbhKD5D+JQWDl0CLTP2IQWDm0yPA/2c73U+Ol9T9QjZduEoP8P3Noke18P/c/sp3vp8ZL1z/dJAaBlUPzP99PjZduEvc/qvHSTWIQ9D8K16NwPQrfP/YoXI/C9fo/kxgEVg4t5j+q8dJNYhD4Pz0K16NwPfY/3SQGgZVDBECWQ4ts5/v1P7pJDAIrh/o/+n5qvHST8D/4U+Olm8ToP28Sg8DKod0/UI2XbhKD8D8OLbKd76fyPw4tsp3vp/w/NV66SQwC7z/NzMzMzMzcP+xRuB6F6/M/gZVDi2zn8z/VeOkmMQjwPyUGgZVDi/g/",
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
            color: "#065e29",
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
              "pHA9Ctej0D9zaJHtfD/Vv2Q730+Nl+K/K4cW2c73oz/TTWIQWDngP0oMAiuHFrk/001iEFg5tL/6fmq8dJOIv8HKoUW28+G/aJHtfD81zr97FK5H4XrgP3Noke18P9U/K4cW2c7327/2KFyPwvXIP1g5tMh2vt8/ZmZmZmZmxr/sUbgehevBP90kBoGVQ8u/WmQ730+Nlz9GtvP91HjhvzeJQWDl0MK/4XoUrkfhuj/NzMzMzMzgv8dLN4lBYMU/fT81XrpJ5L+0yHa+nxrPv9Ei2/l+arw/KVyPwvUorD89CtejcD3ivzEIrBxaZOO/TmIQWDm04L/6fmq8dJOIP1pkO99Pje+/7nw/NV666b/NzMzMzMzUv1TjpZvEIMA/1XjpJjEIzL/VeOkmMQjgv+Olm8QgsNI/ppvEILBy2L956SYxCKycvwisHFpkO7+/fT81XrpJ1L/8qfHSTWJgv5zEILByaOE/2c73U+Ol078bL90kBoHFv7bz/dR46ca/Gy/dJAaB4b/b+X5qvHSzP+XQItv5fsq/x0s3iUFgxb/ZzvdT46Xjv+XQItv5ftK/CtejcD0Kt7/pJjEIrBzaP9Ei2/l+ary/5dAi2/l+5r+Nl24Sg8DSP/p+arx0k4i/sp3vp8ZLt7+wcmiR7Xzjvylcj8L1KMw/+n5qvHST2L/6fmq8dJOIv8l2vp8aL62/KVyPwvUo9j/D9Shcj8K1P9nO91PjpdM/1XjpJjEI7L8bL90kBoHhv2ZmZmZmZua/+n5qvHSTeD8ZBFYOLbLNv23n+6nx0t0/i2zn+6nx0r8hsHJoke3kv/p+arx0k3i/iUFg5dAi079/arx0kxjUvycxCKwcWsS/",
          },
          type: "scatter",
        },
      ]}
      layout={{
        yaxis: {
          range: [-2.5, 2.5],
          showgrid: true,
          title: {
            text: "ดัชนี SPI-3 เฉลี่ยต่อปีรายอำเภอ",
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
            text: "<b>Historical</b><br />Mean: -0.14 | SD: 0.53",
            x: 2007.0,
            xref: "x",
            y: 1,
            yref: "paper",
          },
          {
            align: "center",
            showarrow: false,
            text: "<b>Projected</b><br />Mean: -0.12 | SD: 0.59",
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
