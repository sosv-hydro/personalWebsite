<template>
  <div>
  <header class="about-card">
    <div class="card-content">
      <!--<img src="../../public/img/mountains.jpg" width=100% height=512px>-->
     <div class="banner">
      <div class="banner-text">
            <h1 class="responsive-headline">I'm Sofia Saavedra</h1>
            <h3><a>Computer Engineering Student </a><br/> Let's start scrolling
            and learn more <a class="smoothscroll" >about me</a>.</h3>
            <hr />
      </div>
      </div>
      <p class="scrolldown">
        <a><font-awesome-icon icon="arrow-circle-down" size="lg" :style="{color:white}"/></a>
      </p>

    </div>
  </header>
  <about-me id="about-me"></about-me>
  <resume id="resume"></resume>
  <skills id="skills"></skills> 
  </div>
</template>

<script>
import AboutMe from '@/components/AboutMe'
import Resume from '@/components/Resume'
import Skills from '@/components/Skills'

export default {
  components: {
    AboutMe,
    Resume, 
    Skills
  }
}
</script>

<style lang="sass" scoped>
header
  position: relative
  height: 850px
  min-height: 500px
  width: 100%
  background: #161415 url('../../public/img/riverW.jpg') no-repeat top center
  background-size: cover !important
  -webkit-background-size: cover !important
  text-align: center
  overflow: hidden

  &:before
    opacity: 0.5

  .banner 
    display: inline-block
    vertical-align: middle
    margin: 40px auto
    width: 85%
    max-width: 1020px
    padding-bottom: 30px
    text-align: center

  .text-background
    width: 100%
    margin: 50px auto 18px auto
    background: rgba(171,175,169,.5)
    padding: 5px

  .banner-text 
    width: 100%
    h1 
      font-size: 80px
      color: #765d3b
      letter-spacing: -2px
      margin: 50px auto 18px auto
      text-shadow: 0px 1px 3px rgba(0, 0, 0, .8)
    
    h2
      font-size: 50px
      color: rgb(79,103,66)
      letter-spacing: -2px
      margin: 50px auto 18px auto
      text-shadow: 0px 1px 3px rgba(0, 0, 0, .8)

    h3 
      font: 18px/1.9em 'librebaskerville-regular', serif
      color: #74807d
      margin: 0 auto
      width: 70%
      text-shadow: 0px 1px 1px rgba(0, 0, 0, .5)

      span, a
        color: #b2784c
        color: #48bb7a

    hr 
      width: 60%
      margin: 18px auto 24px auto
      border-color: #2F2D2E
      border-color: rgba(150, 150, 150, .1)

.about-card
  color: white

  .card-title
    display: flex
    align-items: center
    background: #222
    border-radius: 10px

    .avatar
      border: 2px solid rgba(255,255,255,0.3)
      border-radius: 50%
      margin: 10px 30px

  .title-text-content
    p
      margin-bottom: 0
      color: rgb(210,210,210)
    h2
      margin-top: 0

.card-content 
  p
    line-height: 1.5
    margin: 5px auto

  .scrolldown a
    bottom: 30px
    display: block;
    margin-left: auto;
    margin-right: auto;
    left: 50%
    color: #444
    display: block
    height: 42px
    width: 42px
    font-size: 42px
    line-height: 42px
    border-radius: 100%

    -webkit-transition: all .3s ease-in-out
    -moz-transition: all .3s ease-in-out
    -o-transition: all .3s ease-in-out
    transition: all .3s ease-in-out

    &:hover 
      color: #4F6742

table
  border-spacing: 0px
  margin: 50px auto
  tr th, tr td 
    border: 1px solid white
    border-top: none
    padding: 10px
    text-align: center
    &:first-of-type
      border-left: none
    &:nth-of-type(2)
      border-right: none

  
</style>
