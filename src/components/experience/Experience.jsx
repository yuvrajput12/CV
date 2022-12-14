import React from 'react'
import './experience.css'
import {BsFillBookmarkCheckFill} from 'react-icons/bs'

const experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>MY Skills</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsFillBookmarkCheckFill className='experience__details-icon'/>
             <div>
             <h4>HTML5</h4>
              <small className='text-light'>Intermediate</small>
             </div>
            </article>
            <article className='experience__details'>
              <BsFillBookmarkCheckFill className='experience__details-icon'/>
              <div>
              <h4>CSS</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillBookmarkCheckFill className='experience__details-icon'/>
             <div>
             <h4>JAVA Script</h4>
              <small className='text-light'>Intermediate</small>
             </div>
            </article>
            <article className='experience__details'>
              <BsFillBookmarkCheckFill className='experience__details-icon'/>
             <div>
             <h4>BOOtstrap</h4>
              <small className='text-light'>Intermediate</small>
             </div>
            </article>
            <article className='experience__details'>
              <BsFillBookmarkCheckFill className='experience__details-icon'/>
              <div>
              <h4>react JS</h4>
              <small className='text-light'>intermediate</small>
              </div>
            </article>
          </div>
        </div>



        <div className="experience__backend">
        <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsFillBookmarkCheckFill className='experience__details-icon' />
             <div>
             <h4>HTML5</h4>
              <small className='text-light'>intermediate</small>
             </div>
            </article>
            <article className='experience__details'>
              <BsFillBookmarkCheckFill className='experience__details-icon'/>
             <div>
             <h4>CSS</h4>
              <small className='text-light'>intermediate</small>
             </div>
            </article>
            <article className='experience__details'>
              <BsFillBookmarkCheckFill className='experience__details-icon'/>
              <div>
              <h4>JAVA Script</h4>
              <small className='text-light'>intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillBookmarkCheckFill className='experience__details-icon'/>
              <div>
              <h4>BOOtstrap</h4>
              <small className='text-light'>intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillBookmarkCheckFill className='experience__details-icon'/>
             <div>
             <h4>react JS</h4>
              <small className='text-light'>intermediate</small>
             </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default experience