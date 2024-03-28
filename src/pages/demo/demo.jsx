import './demo.css'
import MainIMG from './../../assets/img/3.png'

function Demo () {
    return (
        <body className='product'>
            <section className="heroProduct">
                <h1>TRY OUR <span>DEMO</span></h1>
                <a href="mailto:" className='emailButton'>TRY IT!</a>
            </section>
            <section className='aboutSection'>
                <h2 className='miniTitle'>SEE CADEIRA AI WORKING</h2>
                    <p>
                    Our AI assistant is streamlined for efficiency, able to handle numerous calls simultaneously to simplify the reservation process. Trained on a broad vocabulary and a large language model, it accommodates various languages and dialects, ensuring inclusivity. It's designed to alert staff of any issues, maintaining a smooth operation and allowing personnel to focus on in-person customer service. We're proud to innovate in the restaurant reservation space globally with our AI technology.
                    </p>
                    <img src={MainIMG} alt="" />
            </section>
        </body>
    )
}

export default Demo