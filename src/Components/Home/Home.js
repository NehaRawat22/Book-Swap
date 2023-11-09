import React, {useEffect} from 'react';
import './Home.css';
import img from '../../images/Back.jpg';
import { FaBookReader } from 'react-icons/fa';
import { BsFillPenFill } from 'react-icons/bs';
import { ImSearch } from 'react-icons/im';
import { PiListNumbersBold } from 'react-icons/pi';
import { BsCashCoin } from 'react-icons/bs';
import { BiSolidDonateHeart } from 'react-icons/bi';
import { MdTravelExplore } from 'react-icons/md';
import { BsListUl } from 'react-icons/bs';
import { RiAppsFill } from 'react-icons/ri';
import { BiCategoryAlt } from 'react-icons/bi';

import Aos from 'aos';
import 'aos/dist/aos.css';

const Home = () => {

    useEffect(()=>{
        Aos.init({duration:2000})
    }, [])

  return (
    <div>
      <section className="home">
        <div className="overlay"></div>
        <img className='backGround' src={img} alt="" />

        <div className="homeContent container">
            <div className="textDiv">

                <span data-aos='fade-up' className="smallText">
                    Explore
                </span>

                <h1 data-aos='fade-up' className="homeTitle">
                    It can't just be a book
                </h1>
                </div>

                <div data-aos='fade-up' className="cardDiv grid">
                    <div className="bookInput">
                        <label htmlFor="book">Search Your Destined Book: </label>
                        <div className="input flex">
                            <input type="text" placeholder='Which Book Are You Looking For...' />
                            <FaBookReader className='icon'/>
                        </div>
                    </div>

                    <div className="authorInput">
                        <label htmlFor="author">Search Author Name:  </label>
                        <div className="input flex">
                            <input type="text" placeholder='Author Name...' />
                            <BsFillPenFill className='icon'/>
                        </div>
                    </div>
                    <div className="categoryInput">
                        <label htmlFor="category">Search Category:  </label>
                        <div className="input flex">
                        <select className="categories">
                          <option value="fc">Fiction</option>
                          <option value="sc">Science</option>
                          <option value="fn">Fantansy</option>
                          <option value="ms">Mystery</option>
                          <option value="fi">Finance</option>
                          <option value="com">Competitive Exams</option>
                          <option value="ma">Mathematics</option>
                          <option value="nfn">Non-Fiction</option>
                          <option value="sc">Sci-Fi</option>
                          <option value="un">University</option>
                          <option value="en">Engineering</option>
                        </select>
                        <BiCategoryAlt className='icon'/>
                        </div>
                    </div>
                    <div className="priceInput">
                            <label htmlFor="price">Max Price: </label> 
                        <div className="input flex">
                            <input type='number' placeholder='Enter Maximum Price Of Book...'/>
                        </div>
                    </div>
                    <div className="editionInput">
                        <label htmlFor="edition">Search for Edition:  </label>
                        <div className="input flex">
                            <input type="number" placeholder='Enter Edition' />
                            <PiListNumbersBold className='icon'/> 
                        </div>
                    </div>

                    <div className="searchOptions flex">
                    <ImSearch/>
                    <span>Search</span>
                    </div>
                </div>

                <div data-aos='fade-up' className="homeFooterIcons flex">
                    <div className="rightIcons">
                        <BsCashCoin className='icons'/>
                        <BiSolidDonateHeart className='icons'/>
                        <MdTravelExplore className='icons'/>
                    </div>
                    <div className="leftIcons">
                        <BsListUl className='icons'/>
                        <RiAppsFill className='icons'/>
                    </div>
                </div>
            </div>
      </section>
    </div>
  )
}

export default Home
