import { useState } from "react"
import {useNavigate} from "react-router-dom"
const Character = ({ data }) => {
    const [imageLoading, setImageLoading] = useState(true)
    const navigate = useNavigate()
    return (
        <div className="col-9 col-md-3 col-sm-4 col-lg-2 d-flex flex-column justify-content-center align-items-center rounded-5" key={data.name} onClick={() => navigate(`/characters/${data.id}`)} style={{ overFlow: "hidden",cursor : "pointer" }}>
            <div style={{overFlow : "hidden",width : "100%",height : "75%"}} className="rounded-4 d-flex justify-content-center align-items-center">
                <span style={{display : imageLoading ? "flex" : "none",width : 200,height : 200,justifyContent : "center",alignItems : "center"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="black" className="bi bi-person-circle" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                        <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                    </svg>
                </span>
                <img src={data.image} onLoad={() => setImageLoading(false)} onError={()=>setImageLoading(false)} className="w-100 h-100 rounded-4" style={{overflow : "hidden",display : imageLoading ? "none" : "block",objectFit : "cover"}} alt={data.name} title={data.name} />
            </div>
            <div style={{height : "25%"}} className="d-flex justify-content-center align-items-center">
                <h2 className="text-center">{data.name}</h2>
            </div>
        </div>
    )
}
export default Character;