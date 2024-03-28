import Logo from './../../assets/img/logoGrandeSinFondo.png'
import { NavLink } from 'react-router-dom';
import './home.css'

function Home () {
    return (
        <body className='home'>
            <section className="heroHome">
                <img src={Logo} alt="" />
                <h2>Your <span>AI</span>, Your Adventure, <span>Just a Call Away</span></h2>
            </section>
            <section className='info'>
                <div>
                    <h2 className='miniTitle'>CADEIRA AI</h2>
                    <h1>When artificial intelligence 
                    finds your <span>perfect table.</span></h1>
                    <p>Through our reservation platform, we feed the creativity of chefs and diners, proportioning the necessary tools to prepare the perfect dinner.</p>
                </div>
                <div>
                    <h1>What we <span>do.</span></h1>
                    <h2 className='miniTitle'>CADEIRA AI</h2>
                    <p>In the development of our innovative call handler software, we have seamlessly integrated cutting-edge technologies to enhance the user experience and streamline communication processes. With all the work the result is a robust web application interface, empowering call handlers with real-time transcriptions, user intent insights, and efficient tools for effective call handling.</p>
                </div>
                <div>
                    <h1>About <span>Ethics.</span></h1>
                    <h2 className='miniTitle'>NOTHING TO HIDE</h2>
                    <p>Ethics will be at the forefront of our operations and doing the right thing is critical to our operations. As with any Al service we must guarantee our customers have complete privacy and disclose what exactly we do with the information of our customers. As with any reservation we will be requesting their name, phone number, and email address. Making sure our databases are secure is our number one priority. At the beginning of every conversation with restaurant goers we will let them know they are speaking with an Al and that their conversation is recorded and transcribed.</p>
                    <NavLink to="/about">Learn more <span>about us</span> and <span>our process.</span></NavLink> 
                </div>
                
            </section>
        </body>
    )
}

export default Home