import './Layout.css'
import a from './pictures/a.png'
import Rectangle3 from './pictures/Rectangle3.png'
import aaaaa from './pictures/aaaaa.png'
import graph from './pictures/graph.png'
import wallet from './pictures/wallet.png'
import Tools from './pictures/Tools.png'
import Future_Technology from './pictures/Future_Technology.png'
import Container from './pictures/Container.png'
import b from './pictures/b.png' 
import c from './pictures/c.png' 
import d from './pictures/d.png'  
import instagram from './pictures/instagram.png' 
import f from './pictures/f.png' 
import vector from './pictures/vector.png' 
import Vector2 from './pictures/vector2.png' 
import vector3 from './pictures/vector3.png' 
import Frame_ from './pictures/Frame_.png'
import image from './pictures/image.png'
import bcgv from './pictures/bcgv.mp4'


 

function Layout(){
    return(
        <>
       <nav  className="Container">
        <video src={bcgv} alt="" />
        <div className='navbar flex justify-around items-center'>
            <p><a>Features</a></p>
            <p><a>Why Us</a></p>
            <p><a>Tokenomics</a></p>
            <p><a>Roadmap</a></p>
        </div>
        <div className='LogIn'>
       <p><a href="">Log in</a></p>
       <button>Whitepaper</button>
        </div>
        <div className='nav_heading'>
        <p>When Innovation Meets <span>Investment</span></p>
        </div>
        <div className='nav_heading2'>
            <p>Empowering Trading Through Advanced Technology</p>
        </div>
        <div className='navb'><button className='nav_Buttton'>Open dApp</button></div>
       </nav>
       <main>
        <div className='main1'>
            <div>
            <div>
                <div><img src={Rectangle3} alt="" /></div>
                <div>
                <p>Trade Optimizer</p>
                <p>Find the right moments to buy or sell, with personalized trade suggestions designed to help you make the most of every opportunity. </p>
                </div>
            </div>
            <div>
            <p>Market Insight</p>
            <p>Stay ahead of the market. Get real-time updates on market trends, track top traders' movements, and spot signals from key influencers.</p>
            </div>
            <div></div>
            <div>
                <div>
                    <img src={aaaaa} alt="" />
                </div>
                <p>Risk Guard </p>
                <p>Get alerts on market swings and potential risks before they impact your portfolio. This agent helps you navigate volatility and stay prepared for anything.</p>
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            </div>
            </div>
            
            <div className='flex1'>
                <div>
                    <p>Portfolio Sync </p>
                    <p>Easily manage your portfolio. You'll always know what you own, how it's performing, and where it’s headed.</p>
                </div>
                <div>
                    <p>Opportunity Scout </p>
                    <p>Find exciting new projects, events and tokens that others might be missing. Identifying promising opportunities early, so you never miss out on the next big thing.</p>

                </div>
            </div>
            <div className="main2">
                <p>About EthAi</p>
                <p>At EthAi, we’re all about making crypto trading easier and more intuitive. We provide tools that help traders keep up with all new market trends, track top traders’ movements.</p>
                <div><button>Read More</button></div>
                <div className='flax2'>
                    <div>
                        <img src={graph} alt="" />
                        <p>Stay Ahead</p>
                        <p>No more guesswork—get clear, trustable insights.</p>
                    </div>
                    <div>
                        <img src={wallet} alt="" />
                        <p>Know Your Assets</p>
                        <p>Always stay on top of how your investments are performing.</p>
                    </div>
                    <div>
                        <img src={Tools} alt="" />
                        <p>Simple, Not Overwhelming</p>
                        <p>Our tools are designed to make complex market analysis easy to understand and act on.</p>
                    </div>
                    <div>
                        <img src={Future_Technology} alt="" />
                        <p>Future-Proof</p>
                        <p>We’re constantly improving, adding new features to help you make the most informed decisions possible.</p>
                    </div>
                </div>
            </div>
            <div className="main3">
                <img src={Container} alt="" />
            </div>
            <div className='main4'>
                <p>Roadmap</p>
                <div className='grid3'>
                <div>
                    <p><span>phase1</span></p>
                    <p>Kicking Off</p>
                    <div className='para'>
                    <p><img src={image} alt=""/> Launch of EthAi: Officially</p>
                    <p><img src={image} alt=""/> Development of Core AI Agents</p>
                    <p><img src={image} alt=""/> User Onboarding Campaign</p>
                    <p><img src={image} alt=""/> Community Engagement Initiatives</p>
                    </div>
                </div>
                
                <div><img src={b} alt="" />
                </div>
                <div>
                    <img src={c} alt="" />
                </div>
                <div>
                <p><span>phase2</span></p>
                    <p>Bigger Insights</p>
                    <div className='para'>
                    <p><img src={image} alt=""/> Introduction of Advanced AI Agents</p>
                    <p><img src={image} alt=""/>Strategic Partnerships</p>
                    <p><img src={image} alt=""/> User Interface Optimization</p>
                    <p><img src={image} alt=""/> Comprehensive Marketing Campaign</p>
                    </div>
                </div>
                <div>
                <p><span>phase3</span></p>
                    <p>Full Power</p>
                    <div className='para'>
                    <p><img src={image} alt=""/> Introduction of Enhanced Features</p>
                    <p><img src={image} alt=""/> API Integration for Data Access</p>
                    <p><img src={image} alt=""/> Launch of Community-Driven Initiatives</p>
                    <p><img src={image} alt=""/> Continuous Improvement and Updates</p>
                    </div>
                </div>
                <div>
                    <img src={d} alt="" />
                </div>
                

                </div>
            </div>
            <div className='main_5'>
                <div>
                    <p>Frequently Asked 
                    Questions</p>
                </div>
                <div>
                    <p><span>+</span> What is EthAi?</p>
                    <p><span>+</span> How can EthAi can help me as a Trader?</p>
                    <p><span>+</span> Who can use EthAi?</p>
                    <p><span>+</span> How does EthAi track smart money flow?</p>
                    <p><span>+</span> How does ensure data security?</p>
                </div>
            </div>
            <div className="main6">
                <p>Explore Our <span>dApp</span></p>
                <p>EthAi is an AI-powered dApp designed to help traders make smarter, data-driven decisions. By tracking smart money flows, monitoring key wallets, and providing real-time market insights, EthAi empowers users to stay ahead of trends. The platform offers intuitive AI features for asset recommendations, market analysis, and personalized crypto Q&A, making it the ultimate tool for both novice and experienced traders.</p>
                <div><button>Open dApp</button></div>
            </div>
                    
       </main>

       <footer className='Footer'>
        <div>
            <div>
                <div className='imgs'><img src={Frame_} alt="" /></div>
            </div>
            <div>
            <img src={vector3} alt="" />
            <img src={instagram} alt="" />
            <img src={f} alt="" />
            <img src={vector} alt="" />
            <img src={Vector2} alt="" />
            </div>
            
        </div>
        <div>
            <p>“Designed for traders of today, just like you."</p>
            <div><input type="text"  placeholder='Whats your work email?'/>
            <button>Get Started</button>
            </div>
        </div>
       </footer>
       

        </>
    )

}
export default Layout