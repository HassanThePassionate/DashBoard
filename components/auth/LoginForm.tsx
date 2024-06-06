"use client";
import BackButton from "@/components/BackButton";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const formScheme = z.object({
  email: z
    .string()
    .min(1, {
      message: "Email must be required",
    })
    .email({
      message: "Please enter valid Email",
    }),
  password: z.string().min(1, {
    message: "Password must be required",
  }),
});
const LoginForm = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formScheme>>({
    resolver: zodResolver(formScheme),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const handleSubmit = (data: z.infer<typeof formScheme>) => {
    router.push("/");
  };
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Login Form</CardTitle>
          <CardDescription>
            Login your account with your credentials.
          </CardDescription>
        </CardHeader>

        <CardContent className=' space-y-2'>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className=' space-y-6'
            >
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='text-xs font-bold uppercase text-zinc-500 dark:text-white'>
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        className='bg-slate-100 border-0 dark:bg-slate-500  dark:text-white focus-visible:ring-0 text-black focus-visible:ring-offset-0 '
                        placeholder='Enter email Here'
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='password'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='text-xs font-bold uppercase text-zinc-500 dark:text-white'>
                      Password
                    </FormLabel>
                    <FormControl>
                      <Input
                        className='bg-slate-100 border-0 dark:bg-slate-500  dark:text-white focus-visible:ring-0 text-black focus-visible:ring-offset-0 '
                        placeholder='Enter Password Here'
                        type='password'
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button className='w-full'>Login</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginForm;
