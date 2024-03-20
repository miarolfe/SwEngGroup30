import Head from "next/head";
import Header from "../components/Header";
import '../app/globals.css'

const TheTeam = () => {

    return (
        <div>
            <Head>
                <title>
                    The Team
                </title>
            </Head>
            <Header />
            <main>
                <br />
                <br />
                <section className="text-center">
                    <h2 className="text-4xl">
                        The Team
                    </h2>
                    <img src="" width={1500} height={200}></img>
                    <p>
                        /\ image of all of us /\
                    </p>
                    <p>
                        here you'll find the development team who worked 
                        tirelessly over the last 12 weeks in creating this site
                    </p>
                    <div className = "flex-row">
                        <section alt="front end profiles" className="flex-column inline-block float-left text-left bg-gray-100 p-8 rounded-lg shadow-md">
                            <br></br>
                            <h1 className="text-3xl font-mono text-right"> Front-End Team</h1>

                            <div className="flex ">
                                <img src="/empty-profile.jpg" alt="karolina" width={150} height={150} className="mx-5 mb-5"/>
                                <div>
                                    <p>Karolina Raczynska - Team Lead</p>
                                    <br />
                                    <p>She does things</p>
                                </div>
                            </div>

                            <div className="flex ">
                            <img src="/headshots/Hamza.jpg" alt="Hamza" width={150} height={150} className="mx-5 mb-5"></img>
                                <div>
                                    <p>Hamza Bana - Developer</p>
                                    <br />
                                    <p>He does things</p>
                                </div>
                            </div>

                            <div className="flex ">
                            <img src="/empty-profile.jpg" alt="Justin" width={150} height={150} className="mx-5 mb-5"></img>
                                <div>
                                <p>Justin Ikechukwu Cunningham - Developer</p>
                                    <br />
                                    <p>He does things</p>
                                </div>
                            </div>

                            <div className="flex ">
                            <img src="/empty-profile.jpg" alt="Ben" width={150} height={150} className="mx-5 mb-5"></img>
                                <div>
                                <p>Ben Byrne - Developer</p>
                                    <br />
                                    <p>He does things</p>
                                </div>
                            </div>

                            <div className="flex ">
                            <img src="/empty-profile.jpg" alt="Luke" width={150} height={150} className="mx-5 mb-5"></img>
                                <div>
                                <p>Luke Boylan - Developer</p>
                                    <br />
                                    <p>He does things</p>
                                </div>
                            </div>
                        </section>

                            <section alt="backend profiles" className=" flex-column inline-block float-right text-right justify-right bg-gray-100 p-8 rounded-lg shadow-md">
                                <h1 className =" text-3xl font-mono text-left"> Back-end Team</h1>
                                <br></br>

                                <div className="flex ">
                                    <div>
                                        <p>Nouxi Zhang - Team Lead</p>
                                        <br />
                                        <p>He does things </p>
                                    </div>
                                    <img src="/empty-profile.jpg" alt="Nouxi" width={150} height={150} className="float right mx-5 mb-5" />
                                </div>

                                <div className="flex ">
                                    <div>
                                        <p>Jake McKenna - developer</p>
                                        <br />
                                        <p>He does things</p>
                                    </div>
                                    <img src="/empty-profile.jpg" alt="Jake" width={150} height={150} className="mx-5 mb-5" />
                                </div>

                                <div className="flex ">
                                    <div>
                                    <p>Mia Rolfe - Developer</p>
                                        <br />
                                        <p>She does things</p>
                                    </div>
                                    <img src="/empty-profile.jpg" alt="Mia" width={150} height={150} className="mx-5 mb-5"></img>
                                </div>

                                <div className="flex ">
                                    <div>
                                    <p>Reece Webb - Developer</p>
                                        <br />
                                        <p>He does things</p>
                                    </div>
                                    <img src="/empty-profile.jpg" alt="Reece" width={150} height={150} className="mx-5 mb-5"></img>
                                </div>

                                <div className="flex ">
                                    <div>
                                    <p>Kate Byrne - Developer</p>
                                        <br />
                                        <p>She does things</p>
                                    </div>
                                    <img src="/empty-profile.jpg" alt="kate" width={150} height={150} className="mx-5 mb-5"></img>
                                </div>

                                <div className="flex ">
                                    <div>
                                        <p>Essien Thompson - Developer</p>
                                        <br />
                                        <p>He does things</p>
                                    </div>
                                    <img src="/empty-profile.jpg" alt="Essien" width={150} height={150} className="mx-5 mb-5" />
                                </div>
                            </section>
                    </div>

                </section>
            </main>
        </div>
    );
}
export default TheTeam;