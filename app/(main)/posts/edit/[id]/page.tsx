import BackButton from "@/components/BackButton";
import * as z from 'zod';
import {useForm} from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
const PostEditPage = () => {
    return ( <div>
        <BackButton text="Back to Posts" link="/posts"/>
        hy
    </div> );
}
 
export default PostEditPage;