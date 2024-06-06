import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
    TableCaption,
  } from "@/components/ui/table"
  import Link from "next/link"
import posts from '@/data/posts'
import { Post } from "@/types/posts"
interface PosttableProps {
    limit?: number;
    title: string;
}
const Poststable = ({limit,title}:PosttableProps) => {
    const sortedPost:Post[] =  [...posts].sort((a,b)=> new Date(b.date).getTime()- new Date(a.date).getTime())
    const filteredPost = limit ? sortedPost.slice(0,limit): sortedPost
    return ( <div className="mt-10">
        <h3 className="text-2xl font-semibold mb-4">
            {title ? title : "Posts"}
        </h3>
        <Table>
            <TableCaption>A list of recent Posts</TableCaption>
            <TableHeader>
            <TableRow>
                <TableHead>Title</TableHead>
                <TableHead className="hidden md:table-cell">Author</TableHead>
                <TableHead className="hidden md:table-cell text-right">Date</TableHead>
                <TableHead className="hidden md:table-cell ">View</TableHead>
            </TableRow>
            </TableHeader>
            <TableBody>
                {filteredPost.map((e)=>{
                    return <TableRow key={e.id}>
                        <TableCell>{e.title}</TableCell>
                        <TableCell className="hidden md:table-cell">{e.author}</TableCell>
                        <TableCell className="hidden md:table-cell text-right">{e.date}</TableCell>
                        <TableCell>
                            <Link href={`/posts/edit/${e.id}`}>
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-xs">Edit</button>
                            </Link>
                        </TableCell>
                    </TableRow>
                })}
            </TableBody>
           
        </Table>
    </div> );
}
 
export default Poststable;