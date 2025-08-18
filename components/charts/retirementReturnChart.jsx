"use client";

import EChartsReact from "echarts-for-react";
import React, { useMemo } from "react";

const formatCurrency = (value) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);

const RetrementBarChart = ({
  years,
  Intrested,
  principalBarAmount,
  balance,
}) => {
  // ✅ Safely get CSS variables only on the client side
  const { rvPrimary, rvSecondary, rvTernary } = useMemo(() => {
    if (typeof window !== "undefined") {
      const styles = getComputedStyle(document.documentElement);
      return {
        rvPrimary: styles.getPropertyValue("--rv-primary").trim() || "#0066ff",
        rvSecondary:
          styles.getPropertyValue("--rv-secondary").trim() || "#ff9900",
        rvTernary:
          styles.getPropertyValue("--rv-fourth").trim() || "#66cc33",
      };
    }
    return {
      rvPrimary: "#0066ff",
      rvSecondary: "#ff9900",
      rvTernary: "#66cc33",
    };
  }, []);

  const option = useMemo(
    () => ({
      tooltip: {
        trigger: "axis",
        valueFormatter: (value) => formatCurrency(value),
        axisPointer: {
          type: "shadow",
        },
      },
      legend: {
        orient: "horizontal",
        top: "top",
        left: "center",
        itemGap: 20,
        padding: [10, 10],
        type: "scroll",
        textStyle: {
          fontSize: 14,
          color: "#ffffff",
        },
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      xAxis: [
        {
          type: "category",
          data: years,
          axisLabel: {
            color: "#ffffff",
          },
        },
      ],
      yAxis: [
        {
          type: "value",
          axisLabel: {
            formatter: (value) => formatCurrency(value),
            color: "#ffffff",
          },
        },
        {
          type: "value",
          axisLabel: {
            formatter: (value) => formatCurrency(value),
            color: "#ffffff",
          },
        },
      ],
      series: [
        {
          name: "Future Monthly Expense",
          type: "line",
          smooth: true,
          yAxisIndex: 1,
          data: Intrested,
          itemStyle: { color: rvPrimary },
        },
        {
          name: "Future Yearly Expense",
          type: "bar",
          stack: "Ad",
          emphasis: {
            focus: "series",
          },
          data: principalBarAmount,
          itemStyle: { color: rvSecondary },
        },
        {
          name: "Retirement Corpus Value",
          type: "line",
          smooth: true,
          yAxisIndex: 1,
          data: balance,
          itemStyle: { color: rvTernary },
        },
      ],
    }),
    [Intrested, principalBarAmount, balance, years, rvPrimary, rvSecondary, rvTernary]
  );

  return (
    <div className="col-12 bg-[var(--rv-primary)] py-4">
      <div className="w-auto mt-5 position-relative overflow-hidden bar-graph" id="echarts-containers">
        <EChartsReact option={option} />
      </div>
    </div>
  );
};

export default RetrementBarChart;
