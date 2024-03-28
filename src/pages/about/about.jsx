import './about.css'

function About () {
    return (
        <body className='product'>
            <section className='heroAbout'>
                <h1><span>MEET</span> THE <span>TEAM</span></h1>
            </section>
            <section className='info'>
                <div>
                    <h2 className='miniTitle'>THE TEAM</h2>
                    <p>Cadeira AI was founded by a group of students from Universidad de Navarra and Universidad de Vigo, both in Spain. We are passionate about AI and programming.</p>
                </div>
            </section>
            <section className="aboutTeam">
                <article>
                    <div>
                        <h2 className='miniTitle'>DANTE</h2>
                        <p>
                            <a href="https://www.linkedin.com/in/dante-m-schrantz/" target='_blank'>Dante Schrantz</a>, pursuing studies in Business Administration and Data Analytics at Universidad de Navarra, bring a valuable blend of business acumen and analytical skills. Dante has proven his expertise in R and Python while creating various projects at the Universidad de Navarra. He has published a Data Analytics project tying together how people have spent their time in the past 100 years and connecting it with depression and loneliness. He also currently working on projects through Python and SQL. Dante has created webpages for different companies and personal projects.   
                        </p>
                    </div>
                    <img src="" alt="" />
                </article>
                <article>
                    <img src="" alt="" />
                    <div>
                        <h2 className='miniTitle'>CARLOS</h2>
                        <p>
                        Complementing this, <a href="https://www.linkedin.com/in/carlosmezquitalobato/" target='_blank'>Carlos Mezquita</a>, a student of Computer Science at Universidad de Vigo, contributes technical proficiency and hands-on coding expertise. This interdisciplinary collaboration fosters diverse perspectives, allowing us to approach challenges with creativity and innovation. Carlos is also currently interning at Denodo where he is putting his expertise to work. This has allowed him to become proficient in many programming languages such as Java, HTML and MySQL.                         </p>
                    </div>
                </article>
            </section>
            <section className='info'>
                <div>
                    <h2 className='miniTitle'>A NICE MIXTURE</h2>
                    <p>The fusion of business, analytics, and engineering skills positions us strategically to develop an AI-driven reservation system. The team's shared enthusiasm for AI serves as a unifying force, driving our commitment to delivering a cutting-edge solution. As students, we embrace continuous learning, ensuring adaptability in the dynamic AI landscape. Together, we form a cohesive unit ready to navigate the complexities of AI development and contribute to the success of our innovative business.</p>
                </div>
            </section>
        </body>
    )
}

export default About