<template>
    <section id="about" class="about">

      <div class="row">

         <div class="three columns">

            <img class="profile-pic"  src="../../public/img/profilePic.jpg" alt="" />

         </div>

         <div class="nine columns main-col">

            <h2>About Me</h2>

            <p>Hello! My name is Sofia Saavedra and I am a <a>Computer Engineering student</a> from the University of Puerto Rico at Mayaguez. 
                Technology became my north when I got my hands on the gameboy advance my parents gifted me. It was an immediate spark;
                I knew right there I wanted to learn how exactly it and all other electronic systems worked. This curiosity led me to
                participate in my school's <a>robotics team</a>. I became the <a>leader</a>, designing
                the robot (thank you, you tube) and later programming and building it with the help of my colleages. This experienced 
                fortified my <a>resolve</a> to become a computer engineer and showed me how fulfulling it is to <a>learn</a> and <a>apply</a> that knowledge 
                to <a>creating</a> something. 
                <br/> Once in University I tried to gain as much experience as I could, getting my <a>first Co-op in my second year</a>
                and engaging in many <a>projects</a>, <a>research</a> groups and <a>internships</a>. Now in my senior year, I'm about to <a>graduate</a> 
                with a <a>B.S. in Computer Engineering, specializing in Software</a>. 
            </p>

            <div class="row">

               <div class="columns contact-details">

                  <h2>Contact Details</h2>
                  <p class="address">
						   <span>Sofia Saavedra</span><br>
						   <span>PO Box 894<br>
						         Quebradillas, PR 00678
                     </span><br>
						   <span>(787) 363-4554</span><br>
                     <span>sofia.saavedra1@upr.edu</span>
					   </p>

               </div>

               <div class="columns download">
                  <p class='download-icon'>
                     <a href="#" class="button"><font-awesome-icon class="download-icon" icon="download" size="lg" />Download Resume</a>
                  </p>
               </div>

            </div> <!-- end row -->

         </div> <!-- end .main-col -->

      </div>

   </section> <!-- About Section End-->
</template>

<script>

require('@/css/custom.css')
//require('@/css/default.css')

export default {
    
}
</script>

<style lang="sass" scoped>
section
    display: block

.about 
    background: #2B2B2B
    padding-top: 50px
    padding-bottom: 66px
    overflow: hidden
    line-height: 30px

    &:visited
        color: #fff

    a 
        color: #48bb7a
        &:hover, &:focus
            color: #11ABB0

    h2 
        font: 22px/30px 
        color: #48bb7a
        margin-bottom: 12px
        font-weight: bolder

    p 
        line-height: 30px
        color: #AFAFAF

    .row
        width: 96%
        max-width: 1020px
        margin: -10 auto

    .profile-pic 
        position: relative
        width: 200px
        height: 200px
        border-radius: 100%

    .contact-details 
        width: 41.66667%


    .download 
        width: 58.33333%
        padding: 50px 50px
        margin-top: 6px
        background: #2B2B2B
        color: #2B2B2B
        font-size: 20px

    .main-col
        padding-right: 5%

    .button
        margin-top: 6px
        background: #444
        color: #11ABB0

        &:hover 
            background: white
            color: #48bb7a
        
        .download-icon
            margin-right: 15px
            font-size: 20px

            
</style>