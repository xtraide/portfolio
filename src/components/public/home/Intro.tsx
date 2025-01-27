import '../../../assets/styles/Intro.css';


const Intro = () => {

    return (
        <div className="intro d-flex flex-column justify-content-between vh-100">
            <div className="d-flex flex-column justify-content-center align-items-center flex-grow-1">
                <h1>Nicolas Thieblemont</h1>
                <p className="text">Développeur Fullstack</p>
                <div className="stars">
                    {[...Array(50)].map((_, i) => (
                        <div key={i} className="star"></div>
                    ))}
                </div>
            </div>
            <a href="#about" >
                <div className="d-flex flex-column align-items-center mb-5 ">
                    <span className="m_scroll_arrows un"></span>
                    <span className="m_scroll_arrows deux"></span>
                </div>
            </a>
        </div>
    );
}
export default Intro;
