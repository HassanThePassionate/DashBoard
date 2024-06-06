import {
    Card,
    CardContent,
  } from "@/components/ui/card"
import { LucideIcon } from "lucide-react";
interface DashboardProps{
    title : string;
    count: number;
    icon: React.ReactElement<LucideIcon>
}
const DashboardCard = ({title,count,icon}:DashboardProps) => {
    return ( <Card className="bg-slate-100 dark:bg-slate-800 p-4 pb-0">
        <CardContent>
            <h3 className="text-3xl mb-4 text-center font-bold text-slate-500 dark:text-slate-200">
              {title}
            </h3>
            <div className="flex items-center justify-center gap-5">
                {icon}

            <h3 className="text-5xl font-semibold text-slate-500 dark:text-slate-200">
                {count}
            </h3>
            </div>
        </CardContent>
    </Card> );
}
 
export default DashboardCard;