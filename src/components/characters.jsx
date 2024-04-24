import { useSearchParams } from "react-router-dom";
import NotFound from "./NotFound";
import Character from "./character";
import Loading from "./Loading";
const Characters = ({ data, isLoading,isError }) => {
    const [search,setSearch] = useSearchParams({})
    const searching = (event) => {
        let value = event.target.value
        if (value) {
            setSearch({search : value})
        }
        else {
            setSearch({})
        }
    }
    return (
        <>  
            <div className="search-input col-8 mx-auto mt-5">
                <input type="text" onChange={searching} value={search.get("search") ? search.get("search") : ""} placeholder="search character" className="w-100 form-control border border-dark-subtle" />
            </div>    
            <div className="d-flex flex-row flex-wrap mx-auto gap-2 gap-lg-0 justify-content-around mt-5">
                {isLoading ? <Loading /> : data.filter((char) => {
                    const filtering = search.get("search")
                    return filtering ? char.name.toLowerCase().startsWith(filtering.toLowerCase()) : true
                }).length > 0 ? data.filter((char) => {
                    const filtering = search.get("search")
                    return filtering ? char.name.toLowerCase().startsWith(filtering.toLowerCase()) : true
                }).map((item) => <Character  data={item} key={item.name} />) : isError || <NotFound />}
            </div>
        </>
    )
}
export default Characters;