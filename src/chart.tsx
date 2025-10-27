// An area chart demo taken from https://recharts.github.io/en-US/examples/SimpleAreaChart
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

export function FinancialProjectionChart({
  data,
}: {
  data: {
    age: number;
    assets: number;
  }[];
}) {
  return (
    <AreaChart
      style={{
        width: "100%",
        maxWidth: "700px",
        maxHeight: "70vh",
        aspectRatio: 1.618,
      }}
      responsive
      data={data}
      margin={{
        top: 20,
        right: 0,
        left: 0,
        bottom: 0,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="age" />
      <YAxis width="auto" />
      <Tooltip />
      <Area type="monotone" dataKey="assets" stroke="#8884d8" fill="#8884d8" />
    </AreaChart>
  );
}
