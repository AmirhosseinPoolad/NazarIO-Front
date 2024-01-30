import { useState } from 'react';
import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';

export default function ViewPoll() {
    const [chartType, setChartType] = useState("Bar")

    function handlePieButton() {
        setChartType("Pie")
    }

    function handleBarButton() {
        setChartType("Bar")
    }
    //TODO: USE API
    const title = "hello this is poll"
    const optionList = ["A", "B", "C"]
    const optionCount = [2, 5, 3]

    const barChartXAxis = [
        {
            id: "Options",
            data: optionList,
            scaleType: 'band',
        }
    ]

    const barChartSeries = [
        {
            data: optionCount,
        }
    ]

    let zip = (a1, a2) => a1.map((x, i) => ({
        value: x,
        label: a2[i],
    }));

    const pieChartSeries = [
        {
            data: zip(optionCount, optionList)
        }
    ]

    return (
        <>
            <h1>{title}</h1>
            {chartType == "Bar" && (
                <>
                <BarChart
                    xAxis={barChartXAxis}
                    series={barChartSeries}
                    width={500}
                    height={300}
                />
                <input
                className={"inputButton"}
                type="button"
                onClick={handlePieButton}
                value={"Pie Chart"} />
                </>
            )}
            {chartType == "Pie" && (
                <>
                    <PieChart
                        series={pieChartSeries}
                        width={400}
                        height={200}
                    />
                    <input
                        className={"inputButton"}
                        type="button"
                        onClick={handleBarButton}
                        value={"Bar Chart"} />
                </>
            )}

        </>
    )
}