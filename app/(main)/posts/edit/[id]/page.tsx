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
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import posts from "@/data/posts";
import { useToast } from "@/components/ui/use-toast";

const formScheme = z.object({
  title: z.string().min(1, {
    message: "Title must be required",
  }),
  body: z.string().min(1, {
    message: "Body must be required",
  }),
  author: z.string().min(1, {
    message: "Author must be required",
  }),
  date: z.string().min(1, {
    message: "Date must be required",
  }),
});
interface PostEditPageProps {
  params: {
    id: string;
  };
}
const PostEditPage = ({ params }: PostEditPageProps) => {
  const { toast } = useToast();
  const post = posts.find((post) => post.id === params.id);
  const form = useForm<z.infer<typeof formScheme>>({
    resolver: zodResolver(formScheme),
    defaultValues: {
      title: post?.title || "",
      body: post?.body || "",
      author: post?.author || "",
      date: post?.date || "",
    },
  });
  const handleSubmit = (data: z.infer<typeof formScheme>) => {
    toast({
      title: "Your Post has been submitted",
      description: `Updated By ${post?.author} on ${post?.date}`,
    });
  };
  return (
    <div>
      <BackButton text='Back to Posts' link='/posts' />
      <h3 className='text-2xl mb-4'>Edit Post</h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className=' space-y-8'>
          <FormField
            control={form.control}
            name='title'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-xs font-bold uppercase text-zinc-500 dark:text-white'>
                  Title
                </FormLabel>
                <FormControl>
                  <Input
                    className='bg-slate-100 border-0 dark:bg-slate-500  dark:text-white focus-visible:ring-0 text-black focus-visible:ring-offset-0 '
                    placeholder='Enter Title Here'
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='body'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-xs font-bold uppercase text-zinc-500 dark:text-white'>
                  Body
                </FormLabel>
                <FormControl>
                  <Textarea
                    className='bg-slate-100 border-0 dark:bg-slate-500  dark:text-white focus-visible:ring-0 text-black focus-visible:ring-offset-0 '
                    placeholder='Enter Post Body Here'
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='author'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-xs font-bold uppercase text-zinc-500 dark:text-white'>
                  Author
                </FormLabel>
                <FormControl>
                  <Input
                    className='bg-slate-100 border-0 dark:bg-slate-500  dark:text-white focus-visible:ring-0 text-black focus-visible:ring-offset-0 '
                    placeholder='Enter Author Name'
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='date'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-xs font-bold uppercase text-zinc-500 dark:text-white'>
                  Date
                </FormLabel>
                <FormControl>
                  <Input
                    className='bg-slate-100 border-0 dark:bg-slate-500  dark:text-white focus-visible:ring-0 text-black focus-visible:ring-offset-0 '
                    placeholder='Enter Date Here'
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <Button className='w-full dark:bg-slate-800 dark:text-white'>
            Update Post
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default PostEditPage;
