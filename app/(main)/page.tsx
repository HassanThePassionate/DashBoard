import AnalyticsChart from "@/components/dashboard/AnalyticsChart";
import DashboardCard from "@/components/dashboard/DashBoardCard";
import Poststable from "@/components/posts/Poststable";
import { Folder, MessageCircle, Newspaper, User } from "lucide-react";
export default function Home() {
  return (
    <>
      <div className='flex flex-col md:flex-row justify-between gap-5 mb-5'>
        <DashboardCard
          title='Posts'
          icon={<Newspaper className='text-slate-500' size={72} />}
          count={100}
        />
        <DashboardCard
          title='Catagories'
          icon={<Folder className='text-slate-500' size={72} />}
          count={12}
        />
        <DashboardCard
          title='Users'
          icon={<User className='text-slate-500' size={72} />}
          count={700}
        />
        <DashboardCard
          title='Comments'
          icon={<MessageCircle className='text-slate-500' size={72} />}
          count={1200}
        />
      </div>
      <AnalyticsChart />
      <Poststable title='Lastest Posts' limit={5} />
    </>
  );
}
