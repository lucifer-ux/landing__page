import data from './footerSection.json';
import {FaInstagram} from 'react-icons/fa';
import {FiTwitter} from 'react-icons/fi';
import {IoLogoLinkedin} from 'react-icons/io';
import {SiDiscord} from 'react-icons/si';
import { SiGmail} from 'react-icons/si';
import {AiOutlineHeart} from 'react-icons/ai';
import {FcPrivacy,FcRules} from 'react-icons/fc';
import "./styles.css"

const add= 'privacy.html'
const add1= 'termsOfServices.html'
const style = {color:'#8E22F4'};
const heart ={color:'red'};
const Footer = () => {
    return (
        <>
        <footer>

            <div className="header-footer">
              <div className='footer-icons'> 
              <a href='https://instagram.com/bubl_hq?utm_medium=copy_link' target={'blank'}> <FaInstagram size={40} style={style}/></a>
              <a href='https://twitter.com/bubl_hq?s=21' target={'blank'}>  <FiTwitter size={40} style={style}/> </a>
              <a href='https://linkedin.com/company/bubl-hq' target={'blank'}> <IoLogoLinkedin size={40} style={style}/> </a>
              <a href='/'> <SiDiscord size={40} style={style}/> </a>
              <a target="blank" href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=Bubl.hq@gmail.com&body=my-text">  <SiGmail size={40} style={style}/> </a>
                </div>
                <br/>
               

                <h3>{data.title}</h3>
                <h5>{data.description}</h5>
            </div>

           
            
            <br/>
           
        </footer>
        <div className='end'>
        <a href={add} className='links'><FcPrivacy/><br/>Privacy Policy</a>
            
            <a href={add1} className='links'><FcRules/><br/>Terms of use</a>
        <div className='footer-heart' >made with <span className='hide'> </span><AiOutlineHeart style={heart}/><span className='hide'> </span> in India</div>
        </div>
        </>
    )
};

export default Footer;