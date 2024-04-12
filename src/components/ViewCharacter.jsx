import { useParams } from "react-router-dom"
import styles from "../../assets/styles/ViewCharacter.module.css"
import Error from "./PageNotFound"

const ViewCharacter = ({findCharacter}) => {
    const param = useParams()
    const character = findCharacter(param.characterId)
    console.log(character);
    return character ? (
        <div style={{height : "100vh", width : "100%"}} className={styles.body}>
            <div className={`d-flex flex-row gap-0 position-absolute top-50 start-50 translate-middle w-100`}>
                <div className={`col-11 col-md-9 col-lg-6 mx-auto d-flex flex-row bg-light`} style={{borderRadius : "18px", boxShadow : "5px 5px 25px black"}}>
                    <div style={{ width: "55%" }} className="pt-3 d-flex flex-column align-items-center justify-content-evenly">
                        <h1 className={`text-center ${styles.data}`}>{character.name}</h1>
                        <div className="d-flex flex-column align-items-center justify-content-around w-100" >
                            <p className={`text-center ${styles.info} ${styles.data}`}>species : {character.species}</p>
                            <p className={`text-center ${styles.info} ${styles.data}`}>origin : {character.origin.name.split(" ")[0]}</p>
                            <p className={`text-center ${styles.info} ${styles.data}`}>gender : {character.gender}</p>
                            <p className={`text-center ${styles.info} ${styles.data}`}>status : {character.status}</p>
                        </div>
                    </div>
                    <div style={{ width: "45%",borderRadius : "0 18px 18px 0",overflow : "hidden" }}>
                        <img src={character.image} className="w-100" alt="" />
                    </div>
                </div>
            </div>
        </div>
    ) : <Error />
}
export default ViewCharacter;