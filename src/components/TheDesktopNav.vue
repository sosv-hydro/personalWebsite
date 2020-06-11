<template>
  <div class="nav-desktop">
      <div class="nav-logo">
        <img src="https://image.flaticon.com/icons/svg/1158/1158988.svg" alt="logo" width="200" height="200">
        <h2>Hedgehog</h2>
      </div>
      <div class="nav-menu">
          <ul class="nav-menu-list-desktop">
              <li class="nav-list-item-desktop">About me</li>
              <li class="nav-list-item-desktop">Git Hub</li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
    
}
</script>

<style lang="sass" scoped>
.nav-desktop   
    position: fixed
    left: 0
    top: 0
    bottom: 0
    background: #333
    display: flex
    flex-direction: column
    align-items: center
    width: 20vw

    -webkit-box-shadow: 8px 0 6px -6px black
    -moz-box-shadow: 8px 0 6px -6px black
    box-shadow: 8px 0 6px -6px black

    .nav-logo
        margin: 100px 100px
        h2
            color: white
            text-align: center
            font-size: 2em
            margin-top: 0
    .nav-menu
        color: white

.nav-menu-list-desktop
    list-style: none
    padding: none
    
    li
        background: #222
        padding: 10px 20px
        text-align: center
        margin: 10px auto
        cursor: pointer
        &:hover 
            width: 100% 
</style>