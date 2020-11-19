import React from 'react'
import './MainArea.css'
import {MdHistory, MdHome, MdPlaylistPlay, MdRssFeed, MdVideoLibrary, MdWatchLater} from 'react-icons/md'
import {BsFillCollectionPlayFill} from 'react-icons/bs'
import {FaFutbol, FaGripfire, FaMusic, FaNewspaper} from 'react-icons/fa'
import {GiGamepad} from 'react-icons/gi'
import ReactPlayer from 'react-player'

function MainArea(){
    return(
        <div className="MainArea">
            <div className="Sidebar">
                <div className="Home">
                    <div className="Quick_Icon">
                        <MdHome color="red" fontSize="3rem"/>
                        <div>Home</div>
                    </div>
                    <div className="Quick_Icon">
                        <FaGripfire color="grey" fontSize="3rem"/>
                        <div>Trending</div>
                    </div>
                    <div className="Quick_Icon">
                        <BsFillCollectionPlayFill color="grey" fontSize="3rem"/>
                        <div>Subcription</div>
                    </div>
                    </div>
                <div className="Library">
                    
                    <div className="Quick_Icon">
                        <MdVideoLibrary color="grey" fontSize="3rem"/>
                        <div>Video Library</div>
                    </div>
                    <div className="Quick_Icon">
                        <MdHistory color="grey" fontSize="3rem"/>
                        <div>History</div>
                    </div>
                    <div className="Quick_Icon">
                        <MdWatchLater color="grey" fontSize="3rem"/>
                        <div>Watch Later</div>
                    </div>
                    <div className="Quick_Icon">
                        <MdPlaylistPlay color="grey" fontSize="3rem"/>
                        <div>PlayList</div>
                    </div>
                </div>
                <div className="More_From_Youtube">
                    <div className="Quick_Icon">
                        <GiGamepad color="grey" fontSize="3rem"/>
                        <div>Gaming</div>
                    </div>
                    <div className="Quick_Icon">
                        <MdRssFeed color="grey" fontSize="3rem"/>
                        <div>Live</div>
                    </div>
                    <div className="Quick_Icon">
                        <FaFutbol color="grey" fontSize="3rem"/>
                        <div>Sports</div>
                    </div>
                    <div className="Quick_Icon">
                        <FaMusic color="grey" fontSize="3rem"/>
                        <div>Musics</div>
                    </div>
                    <div className="Quick_Icon">
                        <FaNewspaper color="grey" fontSize="3rem"/>
                        <div>News</div>
                    </div>
                </div>
            </div>

            <div className="Main">
                <div className="Videos">
                    <div className="Video">
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=hVaxqWHiEpw&feature=emb_title"
                            heigth="170px"
                            width="280px"
                            controls/>
                            <br></br>
                            <div className="Logo">
                                <img src="/../public/logo192.png" alt="React" style={{height:"35px", width:"35px", borderRadius:"50%"}}/>
                                <div>Styled Components Partie I - Mise en Place, usage Classique</div>
                                <br></br>
                                <div className="view">
                                51 vues•24 avr. 2020
                                </div>
                            </div>
                    </div>

                    <div className="Video">
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=OpJJPb0azng&feature=emb_title"
                            heigth="170px"
                            width="280px"
                            controls/>
                            <br></br>
                            <div className="Logo">
                                <img src="/../public/logo192.png" alt="React" style={{height:"35px", width:"35px", borderRadius:"50%"}}/>
                                <div>Installation et presentation de projet React</div>
                                <br></br>
                                <div className="view">
                                51 vues•24 avr. 2020
                                </div>
                            </div>
                    </div>

                    <div className="Video">
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=8FqZZrbnwkM"
                            heigth="170px"
                            width="280px"
                            controls/>
                            <br></br>
                            <div className="Logo">
                                <img src="/../public/logo192.png" alt="React" style={{height:"35px", width:"35px", borderRadius:"50%"}}/>
                                <div>Installation et presentation de projet React</div>
                                <br></br>
                                <div className="view">
                                51 vues•24 avr. 2020
                                </div>
                            </div>
                    </div>
                    <div className="Video">
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=_ULB9PymcNI&feature=emb_title"
                            heigth="170px"
                            width="280px"
                            controls/>
                            <br></br>
                            <div className="Logo">
                                <img src="/../public/logo192.png" alt="React" style={{height:"35px", width:"35px", borderRadius:"50%"}}/>
                                <div>Correction Page Characters - Partie I - Call Api</div>
                                <br></br>
                                <div className="view">
                                46 vues•28 avr. 2020
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainArea