import React, { useContext } from 'react'

import GlobalContext from '../../context/GlobalContext'
import creativity from '../../assets/image/milanka/creativity.png'
import photoshoot from '../../assets/image/milanka/photoshoot.png'

const Hero = ({ className, ...rest }) => {
  const gContext = useContext(GlobalContext)

  return (
    <div className={className} {...rest}>
      <div className="container">
        <div className="row align-items-center">
          {/* Hero Content */}
          <div className="col-lg-7 col-md-10 col-sm-12 order-2 order-lg-1">
            <div
              className="mt-8 mt-lg-0 mr-xl-13"
              data-aos="fade-right"
              data-aos-delay={500}
            >
              <h1 className="font-size-12 mb-9">Unleash your creativity.</h1>
              <p className="font-size-8 mb-lg-13 pr-sm-15 pr-lg-8 pr-xl-15">
                Professional photo studio for rent in OC. We offer a unique
                shooting space for professional photography and film
                productions.
              </p>
              <div className="d-flex align-items-center py-6 mr-xl-15">
                <div className="mr-7">
                  <a
                    href="/#"
                    className="bg-sunset text-white circle-76 video-btn"
                    onClick={e => {
                      e.preventDefault()
                      gContext.toggleVideoModal()
                    }}
                  >
                    <i className="fas fa-play" />
                  </a>
                </div>
                <div className="mt-0">
                  <h4 className="font-size-8 mb-0">See for yorself!</h4>
                  <p className="font-size-6 mb-0">
                    Watch the video tour
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* End Hero Content */}
          {/* Hero Image */}
          <div className="col-lg-5 col-md-7 col-xs-8 order-1 order-lg-2">
            <div className="pt-lg-3" data-aos="flip-right" data-aos-delay={900}>
              <img className="w-100" src={creativity} alt="" />
            </div>
          </div>
          {/* End Hero Image */}
        </div>
      </div>
    </div>
  )
}

export default Hero
