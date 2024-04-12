import Character from "./character";
import Loading from "./Loading";
const Characters = ({data,isLoading}) => {
    return (
        <div className="d-flex flex-row flex-wrap gap-2 mx-auto justify-content-around mt-5 container">
            {isLoading ? <Loading /> : data.map((item) => <Character  data={item} key={item.name} />)}
        </div>
    )
}
export default Characters;