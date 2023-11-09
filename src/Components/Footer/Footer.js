import React, {useEffect} from 'react';
import './Footer.css';

import video from '../../images/Footer.mp4';
import { FiSend } from 'react-icons/fi';
import { SiBookstack } from 'react-icons/si';
import { RiTwitterXFill } from 'react-icons/ri';
import { AiFillYoutube } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import { AiOutlineRight } from 'react-icons/ai';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
  }, [])
  return (
      <section className="footer">
        <div className="footerDiv">
          <video src={video} loop autoPlay muted typeof='video/mp4'></video>
        </div>

        <div className="secContent container">
          <div className="contactDiv flex">
            <div data-aos='fade-up' className="text">
              <small style={{color:"white"}}>Best Recycle is Book Recycle</small>
              <h2 style={{color:"white"}}>KEEP SWAPPING BOOKS WITH US</h2>
            </div>
            <div className="inputDiv flex">
              <input data-aos='fade-up' type="text" style={{color:"white", fontSize:"22px"}} placeholder='Enter Your Email' />
              <button data-aos='fade-up' className='btn flex' type='submit' style={{color:"white"}}> SEND
                <FiSend style={{color:"white"}}/>
              </button>
            </div>
          </div>

          <div className="footerCard flex">
            <div className="footerIntro flex">
              <div className="logoDiv">
                <a href="#" className='logo flex'>
                  <SiBookstack className='logo'/>
                  BookSwap
                </a>
              </div>

              <div data-aos='fade-up' className="footerParagraph">
                BookSwap is customer to customer platform like Olx for books. Sell and buy old books in India at zero commission. Click 'need help' for 24x7 customer care on WhatsApp.
              </div>

              <div data-aos='fade-up' className="footerSocials flex">
                <RiTwitterXFill className='icon'/>
                <AiFillYoutube className='icon'/>
                <AiFillInstagram className='icon'/>
                <AiFillGithub className='icon'/>
              </div>
            </div>

            <div className="footerLinks grid">

              {/* Group 1 */}
              <div data-aos='fade-up' className="linkGroup">
                <span className="groupTitle">
                  WE PROVIDE
                </span>

                <li className="footerList flex">
                  <AiOutlineRight className='icon'/>
                  Free Shipping
                </li>

                <li className="footerList flex">
                  <AiOutlineRight className='icon'/>
                  Easy Returns
                </li>

                <li className="footerList flex">
                  <AiOutlineRight className='icon'/>
                  Quality Check
                </li>

                <li className="footerList flex">
                  <AiOutlineRight className='icon'/>
                  Categorized Books
                </li>

                <li className="footerList flex">
                  <AiOutlineRight className='icon'/>
                  Low Prices
                </li>
              </div>

              {/* Group 2 */}
              <div data-aos='fade-up' data-aos-duration='4000' className="linkGroup">
                <span className="groupTitle">
                  CATEGORIES
                </span>

                <li className="footerList flex">
                  <AiOutlineRight className='icon'/>
                  Literature & Fiction
                </li>

                <li className="footerList flex">
                  <AiOutlineRight className='icon'/>
                  Science & Knowledge
                </li>

                <li className="footerList flex">
                  <AiOutlineRight className='icon'/>
                  Univeristy
                </li>

                <li className="footerList flex">
                  <AiOutlineRight className='icon'/>
                  Mystery & Thrill
                </li>

                <li className="footerList flex">
                  <AiOutlineRight className='icon'/>
                  Sci-Fi
                </li>

                <li className="footerList flex">
                  <AiOutlineRight className='icon'/>
                  Childrens'
                </li>

                <li className="footerList flex">
                  <AiOutlineRight className='icon'/>
                  Novels
                </li>
              </div>

              {/* Group 3 */}
              <div data-aos='fade-up' data-aos-duration='5000' className="linkGroup">
                <span className="groupTitle">
                  OUR AGENCY
                </span>

                <li className="footerList flex">
                  <AiOutlineRight className='icon'/>
                  Free Shipping
                </li>

                <li className="footerList flex">
                  <AiOutlineRight className='icon'/>
                  Return & Refund Policy
                </li>

                <li className="footerList flex">
                  <AiOutlineRight className='icon'/>
                  Quality Check
                </li>

                <li className="footerList flex">
                  <AiOutlineRight className='icon'/>
                  Categorized Books
                </li>

                <li className="footerList flex">
                  <AiOutlineRight className='icon'/>
                  Low Prices
                </li>
              </div>

            </div>

            <div className="footerDiv">
              <small>BUY & SELL BOOKS ONLINE</small>
              <br/>
              <small>Copyrights Reserved - BookSwap 2023</small>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Footer
