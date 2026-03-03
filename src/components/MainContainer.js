import { useSelector } from "react-redux";
import BgMovie from "./BgMovie";
import BgTitle from "./BgTitle";


const MainContainer = () => {
    const movies  = useSelector(store => store.movies?.nowPlayingMovies) ;
    if(!movies) return ; // this is known as early return


    const mainMovie = movies[2] ;
    // console.log(mainMovie) ;

    const {original_title ,overview ,id} = mainMovie ;

    return <div>
        <BgTitle title={original_title} overview={overview}/>        
        <BgMovie movieID={id}/>
    </div>
}

export default MainContainer ;