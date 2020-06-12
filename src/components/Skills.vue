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
#skills
    background: #ebeeee !important
    padding-top: 50px
    padding-bottom: 15px
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
        margin-bottom: 30px

.bars 
    width: 80%
    float: left
    padding: 0
    margin-left: 70px
    text-align: left

    .skills 
        margin-top: 36px
        list-style: none

    .li 
        position: relative
        margin-bottom: 60px
        background: #ccc
        height: 10px
        border-radius: 3px

        em 
            font: 15px 'Josefin Sans', sans-serif
            color: #313131
            text-transform: uppercase
            letter-spacing: 2px
            font-weight: normal
            position: relative
            top: -36px

.bar-expand 
    position: absolute
    left: 0
    top: 0

    margin: 0
    padding-right: 24px
    background: #48bb7a
    display: inline-block
    height: 10px
    line-height: 30px
    border-radius: 3px 0 0 3px


.python-lang 
    width: 85%
    -moz-animation: python-lang 2s ease
    -webkit-animation: python-lang 2s ease

.java-lang 
    width: 85%
    -moz-animation: java-lang 2s ease
    -webkit-animation: java-lang 2s ease

.c-lang 
    width: 70%
    -moz-animation: c-lang 2s ease
    -webkit-animation: c-lang 2s ease

.csharp-lang 
    width: 65%
    -moz-animation: csharp-lang 2s ease
    -webkit-animation: csharp-lang 2s ease

.html-css 
    width: 60%
    -moz-animation: html-css 2s ease
    -webkit-animation: html-css 2s ease

.sql 
    width: 65%
    -moz-animation: sql 2s ease
    -webkit-animation: sql 2s ease


@-moz-keyframes python-lang 
    0%   
        width: 0px
    100%
        width: 85%

@-moz-keyframes java-lang 
    0%    
        width: 0px  
    100% 
        width: 85%

@-moz-keyframes c-lang 
    0%   
        width: 0px
    100%
        width: 70%

@-moz-keyframes csharp-lang
    0%  
        width: 0px
    100% 
        width: 65%

@-moz-keyframes html-css 
    0%   
        width: 0px
    100% 
        width: 60%

@-moz-keyframes sql 
    0%   
        width: 0px
    100% 
        width: 65%


@-webkit-keyframes python-lang 
    0%   
        width: 0px
    100%
        width: 85%

@-webkit-keyframes java-lang 
    0%    
        width: 0px  
    100% 
        width: 85%

@-webkit-keyframes c-lang 
    0%   
        width: 0px
    100%
        width: 70%

@-webkit-keyframes csharp-lang 
    0%  
        width: 0px
    100% 
        width: 65%

@-webkit-keyframes html-css 
    0%  
        width: 0px
    100% 
        width: 60%

@-webkit-keyframes sql 
    0%  
        width: 0px
    100% 
        width: 65%

</style>