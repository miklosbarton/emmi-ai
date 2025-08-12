import { ScatterChart } from '@mui/x-charts/ScatterChart';
import { data } from "@/app/data/randomData";
const colors: string[] = ['#006BD6', '#EC407A'];

export default function ScatteredChartBox() {
    
    return (
        <div className="hover:bg-muted p-4 transition-colors duration-150"
        >

            <ScatterChart
                height={300}
                series={[
                    {
                        label: 'Series A',
                        data: data.map((v) => ({ x: v.x1, y: v.y1, id: v.id })),
                    },
                    {
                        label: 'Series B',
                        data: data.map((v) => ({ x: v.x1, y: v.y2, id: v.id })),
                    },
                ]}
                
                grid={{ vertical: true, horizontal: true }}
                colors={colors}
                slotProps={{
                    legend: {
                        sx: {
                            fontSize: 14,
                            color: "#ccc",
                        },
                    },
                }}
            />

        </div>
    )
}
