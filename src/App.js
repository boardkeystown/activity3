import ReactECharts from "echarts-for-react";
import "./styles.css";
function App() {
  const data = [
    { category: "Apples", value: 10 },
    { category: "Oranges", value: 20 },
    { category: "Bananas", value: 30 },
    { category: "Grapes", value: 25 },
    { category: "Pears", value: 15 }
  ];

  const options = {
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    },
    yAxis: {
      type: "value"
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: "line",
        symbol: "triangle",
        symbolSize: 20,
        lineStyle: {
          color: "#5470C6",
          width: 4,
          type: "dashed"
        },
        itemStyle: {
          borderWidth: 3,
          borderColor: "#EE6666",
          color: "yellow"
        }
      }
    ]
  };

  return (
    <div className="vizContainer">
      <ReactECharts option={options} />;
    </div>
  );
}
export default App;
