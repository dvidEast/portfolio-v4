import '../styles/ProjectsStyles/Projects.css'


function Projects(){
    return(
        <>
            <div class="container">
                <div class="top">
                    <h2>projects</h2>
                    <br></br>
                    <h4>a hub for all my personal projects</h4>
                </div>
                <br></br>
                <div class="bottom">
                    <ul>
                        <li class="project-title">statside (new version in development) w/ typscript, html, css --&gt; <a href='https://github.com/dvidEast/statside'>github</a></li>
                        <li class="project-summary">- web app implementing data analyses for hockey players in the NHL</li>
                        <li class="project-summary">- fetched the NHL API endpoint to access statistical stats for every active NHL player in an NHL roster</li>
                        <li class="project-summary">- wrangling the data to create insightful (and predictive) visualizations</li>
                        <li class="project-summary">- ideated, designed, and implemented a user interface</li>

                        <br></br>

                        <li class="project-title">self driving car w/ js, html, css --&gt; <a href='https://github.com/dvidEast/self-driving-car-js'>github</a></li>
                        <li class="project-summary">- implemented a digital, self driving car</li>
                        <li class="project-summary">-  utilizing a neural network and “sensors” to detect appropriate driving paths through supervised learning techniques</li>

                        <br></br>

                        <li class="project-title">clueless (Biztech HelloHacks Hackathon) w/ java, figma --&gt; <a href='https://github.com/dvidEast/clueless-hellohacks'>github</a> <a href='https://www.figma.com/file/HxdLtIxMJoTRCpONHCNDqi/Clueless?type=design&node-id=6%3A20&mode=design&t=fy0PSA28aV7EfagL-1'>figma</a></li>
                        <li class="project-summary">- competed in a beginner hackathon with an emphasis on the bridge between business and technology</li>
                        <li class="project-summary">- mentored by industry professionals from the likes AWS, creating a business proposal for a mobile app using Figma and Java</li>

                        <br></br>

                        <li class="project-title">sauce the aux w/ java --&gt; <a href='https://github.com/dvidEast/SauceTheAux'>github</a></li>
                        <li class="project-summary">- developed an app that allows users to create a playlist through an  integrated genre system, allowing you to customize how you want your next playlist to sound</li>
                        <li class="project-summary">-  utilized OOP techniques including abstraction, polymorphism, encapsulation and inheritance along with exhaustive testing</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Projects