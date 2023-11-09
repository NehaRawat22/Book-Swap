import React, {useEffect} from 'react';
import './Main.css';

import { MdLocationPin } from 'react-icons/md';
import img1 from '../../images/img1.jpg';
import img2 from '../../images/img2.jpg';
import img3 from '../../images/img3.jpg';
import img4 from '../../images/img4.jpg';
import img5 from '../../images/img5.jpg';
import img6 from '../../images/img6.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';


const Data = [
  {
    id: 1,
    imgSrc: img1,
    bookTitle: 'The Midnight Library',
    author: 'Matt Haig',
    genre: 'Fiction',
    location: 'Lucknow',
    price: 'Rs.200',
    description: 'Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived. To see how things would be if you had made other choices . . . Would you have done anything different, if you had the chance to undo your regrets? A novel about all the choices that go into a life well lived.'
  },
  {
    id: 2,
    imgSrc: img2,
    bookTitle: 'Black Holes & Baby Universes',
    author: 'Stephen Hawking',
    genre: 'Science',
    location: 'Kashipur',
    price: 'Rs.250',
    description: "Building on his earlier work, Hawking discusses imaginary time, how black holes can give birth to baby universes, and scientists' efforts to find a complete unified theory that would predict everything in the universe. With his characteristic mastery of language, his sense of humor and commitment to plain speaking, Stephen Hawking invites us to know him better—and to share his passion for the voyage of intellect and imagination that has opened new ways to understanding the very nature of the cosmos."
  },
  {
    id: 3,
    imgSrc: img3,
    bookTitle: 'The Alchemist',
    author: 'Paulo Coelho',
    genre: 'Philosophy',
    location: 'Sultanpur',
    price: 'Rs.190',
    description: "Paulo Coelho's masterpiece tells the mystical story of Santiago, an Andalusian shepherd boy who yearns to travel in search of a worldly treasure. His quest will lead him to riches far different—and far more satisfying—than he ever imagined."
  },
  {
    id: 4,
    imgSrc: img4,
    bookTitle: 'The Kite Runner',
    author: 'Khaled Hosseini',
    genre: 'Literary Fiction',
    location: 'Delhi',
    price: 'Rs.220',
    description: "Twelve-year-old Amir is desperate to win the local kite-fighting tournament and his loyal friend Hassan promises to help him. But neither of the boys can foresee what would happen to Hassan that afternoon, an event that is to shatter their lives. After the Russians invade and the family is forced to flee to America, Amir realises that one day he must return to an Afghanistan under Taliban rule to find the one thing that his new world cannot grant him: redemption."
  },
  {
    id: 5,
    imgSrc: img5,
    bookTitle: 'A Brief History of Time',
    author: 'Stephen Hawking',
    genre: 'Physics',
    location: 'Noida',
    price: 'Rs.400',
    description: "Told in language we all can understand, A Brief History of Time plunges into the exotic realms of black holes and quarks, of antimatter and “arrows of time,” of the big bang and a bigger God—where the possibilities are wondrous and unexpected. With exciting images and profound imagination, Stephen Hawking brings us closer to the ultimate secrets at the very heart of creation."
  },
  {
    id: 6,
    imgSrc: img6,
    bookTitle: 'Think Like A Programmer',
    author: 'V. Anton Spraul',
    genre: 'Computer Science',
    location: 'Kashipur',
    price: 'Rs.900',
    description: "The real challenge of programming isn't learning a language's syntax—it's learning to creatively solve problems so you can build something great. In this one-of-a-kind text, author V. Anton Spraul breaks down the ways that programmers solve problems and teaches you what other introductory books often ignore: how to Think Like a Programmer."
  }
]

const Main = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
  }, [])

  return (
      <section className='main container section'>
        <div data-aos='fade-right' className="secTitle">
          <h3 className="title">
            Most Popular Books
          </h3>
        </div>

        <div className="secContent grid">

          {
            Data.map(({id, imgSrc, bookTitle, author, genre, location, price, description})=>{
              return(
                <div key={id} data-aos='fade-up' className="singleBook">
                  <div className="imgDiv">
                    <img src={imgSrc} alt={bookTitle} />
                  </div>
                  <div className="cardInfo">
                    <h4 className="bookTitle">{bookTitle}</h4>
                    <span className="location flex">
                      <MdLocationPin className='icon'/>
                      <span className="name">{location}</span>
                    </span>

                    <div className="fees flex">
                      <div className="grade">
                        <span>{genre}<small>+1</small></span>
                      </div>
                      <div className="price">
                        <h5>{price}</h5>
                      </div>
                    </div>

                    <div className="desc">
                      <p>{description}</p>
                    </div>
                    <button className="btn flex">VIEW</button>
                  </div>
                </div>
              )
            })
          }

        </div>
      </section>
  )
}

export default Main
