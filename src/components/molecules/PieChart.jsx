import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { useMediaQuery } from '../../utils/hook/useMediaQuery'


const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 }
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const width = 400;
export default function PieChartComponent() {
    const isMobile = useMediaQuery(768);
    return (
        <ResponsiveContainer width="100%" height={isMobile ? 200 : width}>
            <PieChart >
                <Pie
                    data={data}
                    cx={180}
                    cy={isMobile ? 100 : 200}
                    innerRadius={isMobile ? 50 : 100}
                    outerRadius={isMobile ? 80 : 150}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    );
}
