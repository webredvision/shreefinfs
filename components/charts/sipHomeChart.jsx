"use client"

import { Label, Pie, PieChart } from "recharts"
import {
    Card,
    CardContent,
} from "@/components/ui/card"

export const description = "A pie chart with a legend"

const chartConfig = {
    invested: {
        label: "Invested",
        color: "var(--rv-white)",
    },
    return: {
        label: "Returns",
        color: "var(--rv-primary)",
    },
}

export function SipHomeChart({ piedata, title, customLabels }) {

    const chartData = [
        { key: "invested", value: piedata?.totalInvestment, fill: chartConfig.invested.color },
        { key: "return", value: piedata?.futureValue, fill: chartConfig.return.color },
    ]

    const labels = customLabels || {
        invested: chartConfig.invested.label,
        return: chartConfig.return.label,
    }

    return (
        <Card className="bg-transparent border-none shadow-none">
            <CardContent className="flex flex-col md:flex-row items-center justify-center gap-6">
                {/* Chart */}
                <div className="w-[300px] h-[300px]">
                    <PieChart width={300} height={300}>
                        <Pie
                            data={chartData}
                            dataKey="value"
                            nameKey="key"
                            innerRadius={80}
                            outerRadius={140}
                            stroke="none"
                        >
                            <Label
                                content={({ viewBox }) => {
                                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                        return (
                                            <text
                                                x={viewBox.cx}
                                                y={viewBox.cy}
                                                textAnchor="middle"
                                                dominantBaseline="middle"
                                                className="text-sm fill-white"
                                            >
                                                SIP
                                            </text>
                                        )
                                    }
                                }}
                            />
                        </Pie>
                    </PieChart>
                </div>

                {/* Legend */}
                <div className="flex flex-col gap-2 text-sm">
                    {chartData.map((item) => (
                        <div key={item.key} className="flex items-center gap-3">
                            <div
                                className="w-4 h-4 rounded-full"
                                style={{ backgroundColor: item.fill }}
                            ></div>
                            <span className="text-[var(--rv-white)]">
                                {labels[item.key]}: ₹{Number(item.value).toLocaleString()}
                            </span>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}
