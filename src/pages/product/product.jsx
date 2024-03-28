import './product.css'
import Media1 from './../../assets/img/Ipad1.jpg'
import Media2 from './../../assets/img/Ipad2.jpg'
import Media3 from './../../assets/img/Ipad3.jpg'

function Product () {
    return (
        <body className="product">
            <section className="heroProduct">
                <h1>OUR <span>PRODUCT</span></h1>
                <a href="mailto:" className='emailButton'>TRY IT!</a>
            </section>
            <section className="aboutProduct">
                <article>
                    <h2 className='miniTitle'>WHAT IS CADEIRA AI</h2>
                    <div>
                        <p>
                            Cadeira AI was designed to facilitate the booking process for businesses. The most common way to make reservations is through phone calls and keeping someone on the phone all day is a time-consuming task. Restaurants encounter difficulties in managing incoming calls efficiently. This challenge is primarily due to the constrained availability of their phone lines. As a result, the phone lines often find themselves occupied, preventing the company from handling more than one call simultaneously. The combination of restricted operational hours and the limitation of handling only a single call at a time creates hurdles in providing timely and effective communication with customers, potentially leading to customer dissatisfaction.  
                        </p>
                        <img src={Media1} alt="" />
                    </div>
                </article>
                <article>
                    <h2 className='miniTitle'>WHY CADEIRA AI</h2>
                    <div>
                        <img src={Media2} alt="" />
                        <p>
                        This is where Cadeira AI comes in. By creating an Artificial Intelligence that takes care of the entire reservation process allows for employees to do more meaningful tasks. Training our AI to respond to all types of phrases and requests with a large language model (LLM) creates a seamless system that potentially doesn’t need to be overseen by staff. This design will be fully functional and be trained to notify a restaurant employee if the process has an issue. This model allows employees and hostesses to maintain their focus on customers who are present in the establishment. This improves customer satisfaction and streamlines the reservation process at a level that is unimaginable. We plan to redesign the reservation all around the world one restaurant at a time.
                        </p>
                    </div>
                </article>
            </section>
            <section className="media">
                <h1>MEDIA</h1>
                <div id="carouselExample" class="carousel slide">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src={Media1} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                    <img src={Media2} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                    <img src={Media3} class="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
                </div>
            </section>
        </body>
    )
}

export default Product