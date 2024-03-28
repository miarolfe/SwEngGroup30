import Head from "next/head";
import Header from "../components/Header";
import '../app/globals.css'
import Footer from "../components/Footer";
import TeamMember from "../components/TeamMember";
import Center from "next"

const TheTeam = () => {

    return (
        <div className="main-bg">
            <Header />
            <Head>
                <title>
                    The Team
                </title>
            </Head>

            <div className="py-2"/>

            <section className="text-center team-page grid grid-cols-1 gap-4">
                <div class="team-page-heading">
                    <h2 className="text-4xl">
                        <b>The Team</b>
                    </h2>
                </div>
                
                <img src="team.jpg" class="team-image"></img>

                <div className="flex-row">
                    <div alt="backend profiles" className="team-member-list content-center grid grid-cols-1 
                    md:grid-cols-2 2xl:grid-cols-3 gap-4 inline-block float-center 
                                                            text-left ">
                        
                        <TeamMember
                            name="Hamza Bana"
                            position="Project Lead"
                            imageSrc="/Headshots/Hamza.jpg"
                            bio="Organised meetings, worked on AWS"
                        />

                        <TeamMember
                            name="Karolina Raczynska"
                            position="Front-end Lead"
                            imageSrc="/Headshots/Karolina.jpg"
                            bio="Worked on AWS login applications"
                        />

                        <TeamMember
                            name="Mia Rolfe"
                            position="DevOps Lead"
                            imageSrc="/Headshots/Mia.jpeg"
                            bio="She does things"
                        />

                        <TeamMember
                            name="Nuoxi Zhang"
                            position="Back-end Lead"
                            imageSrc="/empty-profile.jpg"
                            bio="Back end lead: Worked on AI implementation, mongoDB"
                        />                    

                        <TeamMember
                            name="Luke Boylan"
                            position="Front-end Developer"
                            imageSrc="/Headshots/Luke.jpg"
                            bio="Worked on page layout and styling, such as our team and login page"
                        />

                        <TeamMember
                            name="Ben Byrne"
                            position="Front-end Developer"
                            imageSrc="/Headshots/Ben.png"
                            bio="Worked mainly on team and login pages"
                        />

                        <TeamMember
                            name="Kate Byrne"
                            position="Back-end Developer"
                            imageSrc="/empty-profile.jpg"
                            bio="She does things"
                        />

                        <TeamMember
                            name="Justin Ikechukwu Cunningham"
                            position="Front-end Developer"
                            imageSrc="/Headshots/Justin.png"
                            bio="Worked on the questionnaire page, progress bar"
                        />

                        <TeamMember
                            name="Jake McKenna"
                            position="Back-end Developer"
                            imageSrc="/empty-profile.jpg"
                            bio="Worked on authentication"
                        />

                        <TeamMember
                            name="Essien Thompson"
                            position="Back-end Developer"
                            imageSrc="/Headshots/Essien.jpg"
                            bio="He does things"
                        />

                        <TeamMember
                            name="Reece Webb"
                            position="Back-end Developer"
                            imageSrc="/empty-profile.jpg"
                            bio="He does things"
                        />
                    </div>
                </div>


            </section>
            <div className="bottom-0">
                <Footer />
            </div>
        </div>
    );
}
export default TheTeam;