import React, {useEffect} from 'react';
import './Category.css';

import img1 from '../../images/cat1.jpg';
import img2 from '../../images/cat2.jpg';
import img3 from '../../images/cat3.jpg';
import img4 from '../../images/cat4.jpg';
import img5 from '../../images/cat5.png';
import img6 from '../../images/cat6.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Category() {

  useEffect(()=>{
    Aos.init({duration:2000})
  }, [])
  return (
    <div className='category container'>
        <section>
          <div data-aos='fade-right' className="secTitle">
            <h3 className="title">
              Categories Available
            </h3>
          </div>
          <div class="pic-ctn">
            <img src={img1} alt="" class="pic"/>
            <img src={img2} alt="" class="pic"/>
            <img src={img3} alt="" class="pic"/>
            <img src={img4} alt="" class="pic"/>
            <img src={img5} alt="" class="pic"/>
            <img src={img6} alt="" class="pic"/>
          </div>
      </section>
    </div>
  )
}
