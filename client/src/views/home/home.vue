
<template>
    <div>

    <section id='mainHeader' class='mainHeader'>
        <nav class='flexContainer mainNav'>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#resume">Resume</a>
            <a href="#contact">Contact</a>
        </nav>
    </section>

    <div id='container' class='flexContainer stackAndCenter '>

        <section id='homeImage' class='homeImage'>
            <header class="masthead">
                <div class="flexContainer container fillViewPort centerIntro">
                    <div class="intro-text">
                        <div class="intro-lead-in">Welcome To My Site!</div>
                    </div>
                </div>
            </header>
        </section>
        <section id="mainContent" class="mainContentContainer">
            <div class='flexContainer sectionContainer'>
                <div class='vertLine'>&nbsp;</div>                
                <div class='sectionHeading'>
                    <p class='sectionTitle'>About Me</p>
                </div>
                <div class='vertLine'>&nbsp;</div>
                <div class='horizontalRight'>&nbsp;</div>

                <section class='lineRight'>
                    <section class='reduceForLines'>
                        <div class='mainSectionContent'>
                                hello world i am frank.
                        </div>
                    </section>
                </section>

                <div class='horizontalRight'>&nbsp;</div>            
                <div class='vertLine'>&nbsp;</div>            
                <div class='sectionHeading'>
                    <p class='sectionTitle'>Resume</p>
                </div>
                <div class='vertLine'>&nbsp;</div>
                <div class='horizontalLeft'>&nbsp;</div>

                <section class='lineLeft'>
                    <section class='reduceForLines'>
                        <div class='job'>
                            <div class='flexContainer jobHeader'>
                                <p class='jobHeader header'>Senior Software Developer</p>
                                <p class='jobHeader subHeader'>Mortgage Specialists International</p>
                            </div>
                            <div class='flexContainer jobHeader'>
                                <p class='jobHeader'>Sept 2011 - June 2018 (6yrs 10mos)</p>
                                <p class='jobHeader subHeader'>Hurst, Texas</p>
                            </div>
                            <br>
                            <br>
                            <section>
                                <div class='flexContainer'>
                                    <div>
                                        <p class='subHeader medWidth'>Technology Stack:</p>
                                    </div>
                                    <div class='flexContainer techCallout mg-l'>
                                        <p class='subHeader unl'>Day to Day</p>
                                        <br>
                                        <ul>
                                            <li>Node.js</li>
                                            <li>Javascript</li>
                                            <li>Web API</li>
                                            <li>HTML/CSS/FlexBox</li>
                                            <li>SQL</li>
                                        </ul>
                                    </div>
                                    <div class='mg-l'>
                                        <p class='subHeader unl'>Familar With</p>
                                        <br>
                                        <ul>
                                            <li>Vue.js</li>
                                            <li>MVC</li>
                                            <li>MySQL</li>
                                            <li>C#</li>
                                            <li>Feathers.js</li>
                                        </ul>
                                    </div>
                                </div>
                                <br>
                                <br>
                                <div class='flexContainer'>
                                    <div>
                                        <p class='subHeader medWidth'>Experience:</p>                            
                                    </div>
                                    <div class='mg-l'>
                                        <ul>
                                            <li>Created feature rich custom application modules to meet the needs of increasing business. </li>
                                            <li>Participated in all large-scale initiatives.  As one of the more senior members of the team, my role was to always provide insight into possible pitfalls that may be overlooked while planning is taking place. </li>
                                            <li>At the request of the CEO, relocated to Jacksonville Florida where I assembled a development team that would consume 100% support for 2 of the 4 business lines. 	</li>
                                            <li>Create and maintain TFS builds for a wide variety of applications.</li>
                                            <li>Plan, coordinate and execute production releases using multiple deployment mechanisms  </li>
                                            <li>Responsible for debugging and resolving production issues timely and effectively.</li>
                                            <li>Primary system administrator for on-prem hosted Jira ticketing system. Created and maintained all workflows to support the needs of the company.</li>
                                        </ul>                                            
                                    </div> 
                                </div>
                            </section>
                        </div>
                    </section>
                </section>
            </div>        
        </section>
    </div>
    </div>
</template>




<script>

import $ from 'jquery'
import jQuery from '../../../static/scripts/jquery.easing.js'

export default {
  data: function() {
    return {};
  },
  mounted() {
    this.test()
    
  },
  methods: {
    test() {
    // Collapse Navbar
    var navbarCollapse = function() {
        if ($("#mainHeader").offset().top > 100) {
        $("#mainHeader").addClass("navbar-shrink");
        } else {
        $("#mainHeader").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);



    }
  }
};
</script>