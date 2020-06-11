<template>
    <section id="skills">
        <div class="row skill">

         <div class="three columns header-col">
            <h1><span>Skills</span></h1>
         </div>

         <div class="nine columns main-col">

				<div class="bars">

				   <ul class="skills">
					   <li><span class="bar-expand python-lang"></span><em>Python</em></li>
                  <li><span class="bar-expand java-lang"></span><em>Java</em></li>
						<li><span class="bar-expand c-lang"></span><em>C</em></li>
						<li><span class="bar-expand csharp-lang"></span><em>C#</em></li>
						<li><span class="bar-expand html-css"></span><em>HTML - CSS</em></li>
                  <li><span class="bar-expand sql"></span><em>SQL</em></li>
					</ul>

				</div><!-- end skill-bars -->

			</div> <!-- main-col end -->

      </div> <!-- End skills -->

    </section>
</template>

<script>
export default {
    
}
</script>

<style lang="sass" scoped>
.skill 
    background: #ebeeee
    padding-top: 50px
    padding-bottom: 20px
    height: 630px 
    width: 100%

    h1 
        font: 18px/24px 
        text-transform: uppercase
        letter-spacing: 1px
        text-align: center
        margin-bottom: 48px

        span 
            border-bottom: 3px solid #11ABB0
            padding-bottom: 6px

.skill-wrapper 
    .columns
        margin-bottom: 36px

.portfolio-item 
    .item-wrap 
        background: #fff
        overflow: hidden
        position: relative

        -webkit-transition: all 0.3s ease-in-out
        -moz-transition: all 0.3s ease-in-out
        -o-transition: all 0.3s ease-in-out
        -ms-transition: all 0.3s ease-in-out
        transition: all 0.3s ease-in-out

        a 
            display: block
            cursor: pointer

</style>