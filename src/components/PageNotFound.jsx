import image from "../../assets/img/error.png"
import styles from "../../assets/styles/error.module.css"
const Error = () => {
    return (
        <section className={styles.body} style={{height:"100vh"}}>
            <div className="col-12 col-md-9 position-absolute start-50 top-50 translate-middle">
                <div className="w-75 d-flex align-items-center justify-content-center mx-auto" style={{borderRadius : "18px 18px 0 0",overflow : "hidden"}}>
                    <img src={image} className="w-100" alt="404" />
                </div>
                <div className="text-light w-75 mx-auto d-flex align-items-center justify-content-center" style={{height : 70,borderRadius : "0 0 18px 18px",backgroundColor : "rgb(31, 4, 120)"}}>
                    <h2 className="text-center fs-1">Page Not Found</h2>
                </div>
            </div>
        </section>
    )
}
export default Error;