import { CDN_URL } from "../utils/constant";

const MovieCard = ({posterPath}) => {

    if(!posterPath) return null ;
    return <div className="md:w-48 sm:w-24 w-16 m-2 cursor-pointer hover:opacity-80  hover:scale-105 transition-transform delay-100">
        <img className=" rounded-md " src={CDN_URL + posterPath} alt="Movie card"></img>

    </div>
}

export default MovieCard ;