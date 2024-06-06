import BackButton from "@/components/BackButton";
import PostPagnation from "@/components/posts/PostPagination";
import Poststable from "@/components/posts/Poststable";

const Postpage = () => {
    return ( <>
    <BackButton text="Go Back" link="/"/>
        <Poststable/>    
    <PostPagnation/>
    </> );
}
 
export default Postpage;