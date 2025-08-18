"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {

    ChartContainer,
    ChartLegend,
    ChartLegendContent,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A stacked bar chart with a legend";


export function CalculatorReturnChart({ data, title, chartConfig }) {
    return (
        <Card className="border border-[var(--rv-primary)] bg-[var(--rv-secondary)] text-center">
            <CardHeader>
                <CardTitle >{title} Projected Value</CardTitle>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig} className="h-full w-full">
                    <BarChart
                        accessibilityLayer
                        data={data}
                        height={200}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="year"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                        />
                        <YAxis />
                        <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                        <ChartLegend content={<ChartLegendContent />} />
                        <Bar
                            dataKey="investedAmount"
                            stackId="a"
                            fill="var(--primary)"
                            radius={[0, 0, 4, 4]}
                        />
                        <Bar
                            dataKey="growth"
                            stackId="a"
                            fill="var(--rv-white)"
                            radius={[4, 4, 0, 0]}
                        />
                    </BarChart>
                </ChartContainer>
            </CardContent>
        </Card>
    );
}

