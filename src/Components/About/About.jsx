import Navbar from "../Navbar/Navbar";
import profile from '..//Hero//aaryan.jpeg'
import './About.css';
const About = () => {
    return (
        <div className="about">
            <div className="left1">
                <img src={profile} alt="" />
            </div>
            <div className="right1">
                <div>
                    <p>I am an experienced Frontend Developer with over
                        a decade of professional expertise in the field.
                        Throughout my career, I have had the privilege of
                        collaborating with prestigious organizations,
                        contributing to their success and growth.</p>
                    <p>
                        My passion for frontend development is not only
                        reflected in my extensive experience but also
                        in the enthusiasm and dedication I bring to each
                        project.
                    </p>
                </div>
                <div className="bt">
                    <h1>My Skill's</h1>
                    <hr className="hr"/>
                    <div className="skill">
                        <p>HTML & CSS</p>       

                    </div>
                    <div className="skill">
                        <p>JAVASCRIPT</p>       
                        
                    </div>
                    <div className="skill">
                        <p>REACT JS</p>       
                
                    </div>
                </div>

            </div>
        </div>
    )
}
export default About;