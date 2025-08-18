"use client";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

// Default chart data (used if no data is provided)
const defaultChartData = [
  { month: "January", mobile: 80 },
  { month: "February", mobile: 200 },
  { month: "March", mobile: 120 },
  { month: "April", mobile: 190 },
  { month: "May", mobile: 130 },
  { month: "June", mobile: 140 },
];

const chartConfig = {
  mobile: {
    label: "Mobile",
    color: "var(--rv-primary)",
  },
};

export function BseReturnChart({ data }) {
  // Use provided data or fall back to default data
  const chartData = data && data.length > 0 ? data : defaultChartData;

  // Calculate the highest value of sensex_close (or mobile if using default data)
  const highestValue = Math.max(
    ...chartData.map((item) => item.sensex_close || item.mobile)
  );

  // Add some padding to the highest value for better visualization (e.g., 10% more)
  const maxYValue = highestValue * 1.1;

  return (
    <Card className="bg-gradient-to-br from-[var(--rv-bg-secondary)] to-[var(--rv-secondary)] border-0 rounded-xl">
      <CardHeader>
        <CardTitle className="text-[var(--rv-white)]">Sensex Data</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={chartConfig}
          className="h-[420px] w-full text-[var(--rv-white)]"
        >
          <AreaChart
            accessibilityLayer
            data={chartData}
          >
            <CartesianGrid horizontal={true} stroke="var(--rv-bg-primary)" />
            <XAxis
              dataKey={data && data.length > 0 ? "sensex_date" : "month"}
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 4)}
              tick={{ fill: "white" }} // <-- This sets the tick text color to white
            />
            <YAxis
              dataKey={data && data.length > 0 ? "sensex_close" : "mobile"}
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              domain={[0, 100000]}
              tick={{ fill: "white" }} // <-- This sets the tick text color to white
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <defs>
              <linearGradient id="fillGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--rv-white)" stopOpacity={1} />
                <stop offset="100%" stopColor="var(--rv-white)" stopOpacity={0.5} />
              </linearGradient>
            </defs>
            <Area
              dataKey={data && data.length > 0 ? "sensex_close" : "mobile"}
              type="monotone"
              stroke="var(--rv-white)"
              fill="url(#fillGradient)"
              strokeWidth={2}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
