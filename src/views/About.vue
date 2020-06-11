<template>
  <div class="about-card">
    <div class="card-title">
      <img src="https://image.flaticon.com/icons/svg/141/141688.svg" alt="avatar" class="avatar" width="100" height="100">
      <div class="title-text-content">
        <p>About me</p>
        <h2>Name LastName</h2>
      </div>
    </div>
    <div class="card-content">
     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
       Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
       Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
       Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
     
     <table width="100%">
        <tr>
          <th>Requirement</th>
          <th>Solution</th> 
       </tr> 
       <tr>
          <td>Design</td>
          <td>Photoshop, Figma, Canva</td>
       </tr>
       <tr>
          <td>Front End</td>
          <td>React.js, Vuw.js, Nuxt.js, HTML, CSS, javascript</td>
       </tr>
       <tr>
          <td>Backend</td>
          <td>Node.js, Express.js, Mongo, GraphQL</td>
       </tr>
      </table>

       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
       Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
       Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
       Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>

      <p class="scrolldown">
        <a><font-awesome-icon icon="arrow-circle-down" size="lg" :hover="{color:blue}" :style="{color:white}"/></a>
      </p>

    </div>
  </div>
</template>

<style lang="sass" scoped>
.about-card
  background: #333
  padding: 3em
  border-radius: 10px
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
    margin: 30px auto

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
