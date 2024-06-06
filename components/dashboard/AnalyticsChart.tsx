'use client'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    ResponsiveContainer,
} from 'recharts'
import {
    Card,
    CardHeader,
    CardDescription,
    CardContent,
    CardTitle,
} from '@/components/ui/card'
import data from '@/data/analytics';
const AnalyticsChart = () => {
    return ( <>
        <Card>
            <CardTitle className='px-4 py-6  pb-0'>Analyics For this Year</CardTitle>
            <CardDescription className='px-4 py-6  pt-1 '>Views Per Mouth</CardDescription>
            <CardContent>
                <div style={{width : '100%' , height: 300}}>
                <ResponsiveContainer>
                    <LineChart width={1100} height={300} data={data}>
                        <Line type='monotone' dataKey='uv' stroke='#8884d8' />
                        <CartesianGrid stroke='#ccc'/>
                        <XAxis dataKey='name'/>
                        <YAxis/>
                    </LineChart>
                </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    </> );
}
 
export default AnalyticsChart;