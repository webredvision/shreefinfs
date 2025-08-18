"use client";

import { TrendingUp } from "lucide-react";
import { Area, AreaChart, CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import React from "react";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";
import { Button } from "../ui/button";
import { FaFilePdf } from "react-icons/fa6";

export const description = "An area chart with gradient fill";

const chartConfig = {
    amount: {
        label: "Remaining Invested Amount",
        color: "hsl(var(--rv-fourth))",
    },
    currentvalue: {
        label: "Remaining Fund Value",
        color: "hsl(var(--rv-fourth))",
    },
};

// Function to filter data based on the given range
const filterDataByRange = (sipData) => {
    // Check if sipData is valid
    if (!sipData || !Array.isArray(sipData)) return [];


    return sipData.map((item) => ({
        date: item.navDate || new Date().toISOString(), // Use current date if navDate is not defined
        amount: item.netAmount || 0, // Default to 0 if amount is undefined
        currentvalue: item.currentValue || 0, // Default to 0 if currentValue is undefined
    }));
};

export function SwpPerformanceChart({ piedata, startDate, endDate, title }) {
    const [chartData, setChartData] = React.useState([]);

    // Effect to update chart data whenever piedata changes
    React.useEffect(() => {
        setChartData(filterDataByRange(piedata?.resData));
    }, [piedata]);

    return (
        <Card className="dark:text-[var(--rv-fourth)]">
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>
                    {startDate} to {endDate} (Current Value As on {endDate})
                </CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig} className="h-56 w-full">
                    <LineChart
                        accessibilityLayer
                        data={chartData}
                        margin={{
                            left: 12,
                            right: 12,
                        }}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="date" // Use the correct key for date
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tickFormatter={(value) =>
                                new Date(value).toLocaleDateString("en-US", {
                                    month: "short",
                                    year: "numeric",
                                })
                            }
                        />
                        <YAxis
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tickCount={7}
                        />
                        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                        <defs>
                            <linearGradient id="fillAmount" x1="0" y1="0" x2="0" y2="1">
                                <stop
                                    offset="105%"
                                    stopColor="var(--rv-fourth)"
                                    stopOpacity={1}
                                />
                                <stop
                                    offset="95%"
                                    stopColor="var(--rv-fourth)"
                                    stopOpacity={1}
                                />
                            </linearGradient>
                            <linearGradient id="fillCurrentvalue" x1="0" y1="0" x2="0" y2="1">
                                <stop
                                    offset="105%"
                                    stopColor="var(--rv-secondary)"
                                    stopOpacity={1}
                                />
                                <stop
                                    offset="105%"
                                    stopColor="var(--rv-secondary)"
                                    stopOpacity={0.1}
                                />
                            </linearGradient>
                        </defs>
                        <Line
                            dataKey="amount"
                            type="natural"
                            fill="url(#fillAmount)"
                            fillOpacity={0.7}
                            stroke="var(--rv-fourth)"
                            stackId="a"
                        />
                        <Line
                            dataKey="currentvalue"
                            type="natural"
                            fill="url(#fillCurrentvalue)"
                            fillOpacity={0.7}
                            stroke="var(--rv-secondary)"
                            stackId="a"
                        />
                    </LineChart>
                </ChartContainer>
            </CardContent>
            <CardFooter>
                <div className="flex w-full items-start gap-2 text-sm">
                    <div className="grid gap-2">
                        <div className="flex items-center gap-2 font-medium leading-none">
                            Trending up by {piedata?.xirrRate}%<TrendingUp className="h-4 w-4" />
                        </div>
                        <div className="flex items-center gap-2 leading-none text-muted-foreground">
                            {startDate} - {endDate}
                        </div>
                    </div>
                </div>
            </CardFooter>
        </Card>
    );
}
