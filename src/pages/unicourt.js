import React from 'react'

import Layout from '../components/layout'

import img1 from "../static/img/secondary/unicourt_01.jpg"
import img2 from "../static/img/secondary/unicourt_02.jpg"
import img3 from "../static/img/secondary/unicourt_03.jpg"
//import img4 from "../static/img/secondary/unicourt_04.jpg"
//import img5 from "../static/img/secondary/unicourt_05.jpg"
//import img6 from "../static/img/secondary/unicourt_06.jpg"


export default function SuccessPage() {
  return (
    <Layout>
      <div class="row">
        <div class="col-sm-8 col-sm-offset-2 col-md-8 col-md-offset-1" id="service-name">
          <h1>Unicourt</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-8 col-sm-offset-2 col-md-8 col-md-offset-1">

          <div class="service-photo">
            <div><img src={img1}/></div>
            <div class="caption"></div>
          </div>

          <div class="service-photo">
            <div><img src={img2}/></div>
            <div class="caption"></div>
          </div>

          <div class="service-photo">
            <div><img src={img3}/></div>
            <div class="caption"></div>
          </div>

        </div>
      </div>
      <div class="row">
        <div class="col-sm-7 col-sm-offset-2 col-md-7 col-md-offset-1" id="service-description">
          <p><p><font face="Arial">Unicourt is ideal for backyard fun of
            sports/fitness/outdoor minded families. It's perfect as an activity
            center for motels, apartment complexes, playgrounds, clubs,
            institutions,
			and more. Unicourt is the solution for anywhere space is at a
            premium.</font></p>
			<p><font face="Arial">The Activity Center is a multi purpose
              outdoor recreation package that fits in a space as small as 30' x 64',
              or even smaller, by special design. Unicourt Activity Centers are an
              excellent home improvement investment and can be financed.
			  It is a value the entire family can enjoy all year round; even at
              night with the lighting option. This center is for just about any
              outdoor activity that's best on a dry, level, and firm surface.</font></p>

			<font face="Arial">
			  <p><em>Enjoy the benefits:</em></p>
			  <ol><li><font face="Arial">Entertain family and friends.</font></li><li><font face="Arial">Increase family gathering time.</font></li><li><font face="Arial">Know where your kids are.</font></li><li><font face="Arial">Add value to your home.</font></li><li><font face="Arial">Virtually maintenance free.</font></li><li><font face="Arial">Play up to 12 games.</font></li><li><font face="Arial">Unlimited Activities for your entertainment and enjoyment.</font></li></ol>
			</font>

			<font face="Arial">
			  <p><em>Customize your court with your choice of our components featuring:</em></p>
			  <ol><li><font face="Arial">The finest sports equipment available.</font></li><li><font face="Arial">Powder coated steel components.</font></li><li><font face="Arial">Weather treated netting.</font></li><li><font face="Arial">Adjustable basketball system.</font></li><li><font face="Arial">Suspended court tiles.</font></li></ol>
			</font></p>
        </div>
      </div>


      <div class="row subservice">
        <div class="col-sm-5 col-sm-offset-2 col-md-4 col-md-offset-1 col-lg-3">
          <div><img src={img1} /></div>
        </div>
        <div class="col-sm-5 col-md-5">
          <h2>Competitor Basketball Systems</h2>
          <div>Available in five custom units: 56, 54, 53, 46, and 45. Featuring a 5' or 4' overhang, a 2" x 4" lower extension arm and a one piece 6" or 5" square pole. All components are welded for uncompromised strength and durability. The Competitor has an easy to adjust height from 7 ½ to 10. The unit's anchor system is designed to provide extra strength and ease of installation. The exclusive series comes complete with a 42" x 60" or 42" x 72" acrylic backboard and a Pressure Flex Goal. Pole and Backboard padding is available. </div>
        </div>
      </div>

      <div class="row subservice">
        <div class="col-sm-5 col-sm-offset-2 col-md-4 col-md-offset-1 col-lg-3">
          <div><img src={img2} /></div>
        </div>
        <div class="col-sm-5 col-md-5">
          <h2>Inline Net System</h2>
          <div>Includes fittings to attach the Adjustable Net System to the Competitor basketball system. Opposite side post is 3 ½" square with adjustable collars.</div>
        </div>
      </div>

      <div class="row subservice">
        <div class="col-sm-5 col-sm-offset-2 col-md-4 col-md-offset-1 col-lg-3">
          <div><img src={img3} /></div>
        </div>
        <div class="col-sm-5 col-md-5">
          <h2>Rebounder</h2>
          <div>10' high x 20' wide frame constructed of 1.9" o.d. steel. Complete unit includes fittings, adjustable straps, bungee cords, vinyl ball retainer and heavy duty #420 1 3/4" weather treated net and PVC ground sleeves. </div>
        </div>
      </div>

      <div class="row subservice">
        <div class="col-sm-5 col-sm-offset-2 col-md-4 col-md-offset-1 col-lg-3">
          <div><img src={img1} /></div>
        </div>
        <div class="col-sm-5 col-md-5">
          <h2>Fence System</h2>
          <div>The 6' high fence system is constructed of 1.9" o.d. 16 gauge steel coated with black acrylic urethane finish. The system includes all fittings, #420 1 3/4" weather treated netting, lacing cord and PVC ground sleeves. Custom sizes are available. </div>
        </div>
      </div>

      <div class="row subservice">
        <div class="col-sm-5 col-sm-offset-2 col-md-4 col-md-offset-1 col-lg-3">
          <div><img src={img2} /></div>
        </div>
        <div class="col-sm-5 col-md-5">
          <h2>Adjustable Net System</h2>
          <div><p>Poles are 3 ½" square tubing with 3/16" wall thickness. The multipurpose net system includes two adjustable net collars that enable easy height adjustments. The unit offers the versatility to adjust from ground level to 8'. The net is also easy to remove for open court play. All hardware and brackets are included. A lightweight 4 sq aluminum net system is also available.

          </p><p>Play Volleyball, Paddle-ball, Tennis
            or remove the net for Basketball.</p></div>
        </div>
      </div>

      <div class="row subservice">
        <div class="col-sm-5 col-sm-offset-2 col-md-4 col-md-offset-1 col-lg-3">
          <div><img src={img3} /></div>
        </div>
        <div class="col-sm-5 col-md-5">
          <h2>Light System</h2>
          <div>The light system is available as a stand alone unit or as an extension to the adjustable net system. The system includes a 10 long, 3" sq. heavy wall steel pole &amp; 2 1500 watt, 240 volt quartz lamps with fixtures, extension arm and adapter. The stand alone unit also includes a 12 pole with hardware. </div>
        </div>
      </div>
    </Layout>
  )
}
