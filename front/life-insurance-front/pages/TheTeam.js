import Head from "next/head";
import Header from "../components/Header";

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
                <section style={{textAlign: 'center'}}>
                    <h2>
                        The Team
                    </h2>
                    <img src="" width={1500} height={400}></img>
                    <p>
                        /\ image of all of us /\
                    </p>
                    <p>
                        here you'll find the development team who worked 
                        tirelessly over the last 12 weeks in creating this site
                    </p>
                    <section style={{textAlign: 'left'}}>
                        <br></br>
                        <h1> Front-End Team</h1>

                        <div style={{ display: 'flex', marginBottom: '20px' }}>
                            <img src="/empty-profile.jpg" alt="karolina" width={150} height={150} style={{ marginRight: '20px' }} />
                            <div>
                                <p>Karolina Raczynska - Team Lead</p>
                                <br />
                                <p>She does things</p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', marginBottom: '20px' }}>
                        <img src="/empty-profile.jpg" alt="Hamza" widht={150} height={150} style={{ marginRight: '20px' }}></img>
                            <div>
                                <p>Hamza Bana - Developer</p>
                                <br />
                                <p>He does things</p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', marginBottom: '20px' }}>
                        <img src="/empty-profile.jpg" alt="Justin" widht={150} height={150} style={{ marginRight: '20px' }}></img>
                        
                        
                            <div>
                            <p>Justin Ikechukwu Cunningham - Developer</p>
                                <br />
                                <p>He does things</p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', marginBottom: '20px' }}>
                        <img src="/empty-profile.jpg" alt="Ben" widht={150} height={150} style={{ marginRight: '20px' }}></img>
                            <div>
                            <p>Ben Byrne - Developer</p>
                                <br />
                                <p>He does things</p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', marginBottom: '20px' }}>
                        <img src="/empty-profile.jpg" alt="Luke" widht={150} height={150} style={{ marginRight: '20px' }}></img>
                            <div>
                            <p>Luke Boylan - Developer</p>
                                <br />
                                <p>He does things</p>
                            </div>
                        </div>

                        <br></br>
                        <h1> Back-end Team</h1>
                        <br></br>

                        <div style={{ display: 'flex', marginBottom: '20px' }}>
                            <img src="/empty-profile.jpg" alt="Nouxi" width={150} height={150} style={{ marginRight: '20px' }} />
                            <div>
                                <p>Nouxi Zhang - Team Lead</p>
                                <br />
                                <p>He does things</p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', marginBottom: '20px' }}>
                            <img src="/empty-profile.jpg" alt="Jake" width={150} height={150} style={{ marginRight: '20px' }} />
                            <div>
                                <p>Jake McKenna - developer</p>
                                <br />
                                <p>He does things</p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', marginBottom: '20px' }}>
                        <img src="/empty-profile.jpg" alt="Mia" widht={150} height={150} style={{ marginRight: '20px' }}></img>
                            <div>
                            <p>Mia Rolfe - Developer</p>
                                <br />
                                <p>She does things</p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', marginBottom: '20px' }}>
                        <img src="/empty-profile.jpg" alt="Reece" widht={150} height={150} style={{ marginRight: '20px' }}></img>
                            <div>
                            <p>Reece Webb - Developer</p>
                                <br />
                                <p>He does things</p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', marginBottom: '20px' }}>
                        <img src="/empty-profile.jpg" alt="kate" widht={150} height={150} style={{ marginRight: '20px' }}></img>
                            <div>
                            <p>Kate Byrne - Developer</p>
                                <br />
                                <p>She does things</p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', marginBottom: '20px' }}>
                        <img src="/empty-profile.jpg" alt="Essien" width={150} height={150} style={{ marginRight: '20px' }} />
                            <div>
                                <p>Essien Thompson - Team Lead</p>
                                <br />
                                <p>He does things</p>
                            </div>
                        </div>

                        
                    </section>

                </section>
            </main>
        </div>
    );
}
export default TheTeam;