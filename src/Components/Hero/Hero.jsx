import './Hero.css';
import profile from '..//Hero//aaryan.jpeg'

const Hero = () =>{
    return(
        <div className='hero'>
            <div className='left'>
                <h1 className='h1'>My Name Vyas Aaryan</h1>
                <h2>Frontend Developer</h2>
                    <div>
                        <button className='btn'>Contact Me</button>
                        <button>My Resume</button>
                    </div>
            </div>
            <div className='right'>
                <img src={profile} alt='' className='img'/>
            </div>
            
        </div>
    )
}
export default Hero;