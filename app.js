// Landing Page Event Countdown
(function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
  

    let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear(),
        nextYear = yyyy + 1,
        dayMonth = "09/30/",
        dayOfEvent = dayMonth + yyyy;
    
    today = mm + "/" + dd + "/" + yyyy;
    if (today > dayOfEvent) {
      dayOfEvent = dayMonth + nextYear;
    }
    //end
    
    const countDown = new Date(dayOfEvent).getTime(),
        x = setInterval(function() {    
  
            const now = new Date().getTime(),
            distance = countDown - now;
  
            document.getElementById("days").innerText = Math.floor(distance / (day)),
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

            if (distance < 0) {
                document.getElementById("headline_countdown").innerText = "Event is over!";
                clearInterval(x);
              }
          
        }, 0)
    }());
// ---------------------------------------------------Back to Top Button----------------------------------------------------

scrollTopButton = document.getElementById("scroll_to_top_btn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollTopButton.style.display = "block";
  } else {
    scrollTopButton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//---------------------------------------------------Link Buttons to Pages-----------------------------------------

document.getElementById("about_btn").addEventListener("click", goToAboutPage);
    function goToAboutPage() {
      window.location.href="/about-page.html";
    }
function goToHomePage() {
      window.location.href="/index.html";
    }
document.getElementById("register_btn_nav").addEventListener("click", goToRegisterPage);
    function goToRegisterPage() {
      window.location.href="registration-form.html";
    }