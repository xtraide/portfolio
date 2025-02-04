import '../../../assets/styles/Intro.css';


const Intro = () => {

    return (
        <div className="col-12 h-100 p-0">
            <div className="intro d-flex flex-column justify-content-between h-100">
                <div className="d-flex flex-column justify-content-center align-items-center flex-grow-1 p-0">
                    <h1 className='display-1 display-4-sm display-3-md display-2-lg display-1-xl title text-center'>Nicolas Thieblemont</h1>
                    <p className="p-font-color">Développeur Fullstack</p>
                    {/* <div className="stars">
                        {[...Array(50)].map((_, i) => (
                            <div key={i} className="star"></div>
                        ))}
                    </div> */}
                </div>
                <a href="#about" >
                    <div className="d-flex flex-column align-items-center mb-5 ">
                        <span className="m_scroll_arrows un"></span>
                        <span className="m_scroll_arrows deux"></span>
                    </div>
                </a>
            </div>
        </div>
    );
}
export default Intro;
