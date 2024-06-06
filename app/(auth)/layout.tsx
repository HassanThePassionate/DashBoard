import { ThemeToggler } from "@/components/ThemeToggler";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='h-[100vh] flex items-center w-full justify-center relative'>
      <div className=' absolute right-0 bottom-5'>
        <ThemeToggler />
      </div>
      {children}
    </div>
  );
};

export default AuthLayout;
