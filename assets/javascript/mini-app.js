var isNavDisplayed=false;var isConnectDisplayed=false;var focused=null;function hideConnectModal(){$( "#connect-footer-modal" ).addClass("display-none");$("body").removeClass("modal-open");$("main").unbind('click');isConnectDisplayed=false;}function hideNavBar(){$( "#navbar-modal" ).addClass("display-none");$("body").removeClass("modal-open");$("main").unbind('click');isNavDisplayed=false;}function showConnectModal(){$( "#connect-footer-modal" ).removeClass("display-none");var offset=window.pageYOffset;$("body").addClass("modal-open");window.scrollTo(0, offset);document.getElementById("Vimeo-link").focus();$("main").click(function(e){return false;});isConnectDisplayed=true;}function showNavBar(){$( "#navbar-modal" ).removeClass("display-none");var offset=window.pageYOffset;$("body").addClass("modal-open");window.scrollTo(0, offset);document.getElementById("highlights-navbar-link").focus();$("main").click(function(e){return false;});isNavDisplayed=true;}$(document).ready(function (){$(document).keyup(function (e){if (e.keyCode===27){if (isNavDisplayed){hideNavBar();}if (isConnectDisplayed){hideConnectModal();}}});$( "#home-button" ).click(function(){window.location.replace("../index.html");});$( "#navbar-modal-trigger" ).click(function(){if (!isNavDisplayed && !isConnectDisplayed){showNavBar();}else if (isConnectDisplayed && !isNavDisplayed){hideConnectModal();showNavBar();}else if (isNavDisplayed){hideNavBar();}});$( ".navbar-individual-link-container" ).click(function(){hideNavBar();});$( "#navbar-modal-close-trigger" ).click(function(){hideNavBar();});$( "#connect-modal-trigger" ).click(function(){if (!isConnectDisplayed && !isNavDisplayed){showConnectModal();}else if (!isConnectDisplayed && isNavDisplayed){hideNavBar();showConnectModal();}else if (isConnectDisplayed){hideConnectModal();}});$( "#connect-modal-close-trigger").click(function(){hideConnectModal();});$( "#homepage-project-details-modal-close-trigger" ).click(function(){hideHomepageProjectModal();});$('#gform').on('submit', function(e){var formContent={message: $("#entry\\.282615151").val(),firstName: $("#entry\\.1804477893").val(),lastName: $("#entry\\.779358458").val(),email: $("#entry\\.1973645689").val()};if (formContent.message.length > 144 || formContent.message.length===0){alert("Oops! Please make sure your message length is between 1 and 144 characters, and try again~");return false;}else{$('#gform *').fadeOut(1000);$('#gform').prepend('Thank you! Talk to you soon~');}});});