jQuery(document).ready(function () {
  jQuery(".slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  jQuery(".slider-video").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots:true,
  
  });

  
  jQuery(".slider1").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  });

  jQuery(".slider2").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  });
  jQuery(".sliderrecommended").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
  });
  jQuery(".sliderrecommendeds").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplayTimeout: 6000,
    arrows: false,
  });
});

var dashboard = document.querySelector(".left_dashboard");
var appDashboard = document.querySelector(".appdashBord_right");
var dashBord_right = document.querySelector(".dashBord_right");
var filtredarea = document.querySelector(".filtredarea");

var iconshow = document.querySelector(".iconshow");
var fullchat = document.querySelector(".fullchat");
var chaticonClick = document.querySelector(".chaticon-click");
var filtred = document.querySelector(".filtred");
var dashboardchat = document.querySelector(".dashboard-chat");
var chatremove = document.querySelector(".chatremove");
chatremove
window.addEventListener("DOMContentLoaded", (event) => {
  if (iconshow) {
    iconshow.addEventListener("click", () => {
      dashboardchat.classList.toggle("resized");
      dashBord_right.classList.toggle("resized");
    });
    
  }
 
});
var iconshowplay = document.querySelector(".iconexpand");
window.addEventListener("DOMContentLoaded", (event) => {
  if (iconshowplay) {
    iconshowplay.addEventListener("click", () => {
      dashboardchat.classList.toggle("resized");
      dashBord_right.classList.toggle("resized");
    });
  
  }
});

window.addEventListener("DOMContentLoaded", (event) => {
  chaticonClick.addEventListener("click", () => {
    filtred.classList.remove("active");
    chaticonClick.classList.add("active");
    fullchat.classList.remove("hidden");
    dashboardchat.classList.add("resized");
    dashBord_right.classList.add("resized");
  });
});

window.addEventListener("DOMContentLoaded", (event) => {
  filtred.addEventListener("click", () => {
    chaticonClick.classList.remove("active");
    filtred.classList.add("active");
    
    filtredarea.classList.remove("hidden");
    fullchat.classList.add("hidden");
    dashboardchat.classList.add("resized");
    dashBord_right.classList.add("resized");
  });
});
window.addEventListener("DOMContentLoaded", (event) => {
  chatremove.addEventListener("click", () => {
    chaticonClick.classList.remove("active");
     
    filtredarea.classList.add("hidden");
    fullchat.classList.add("hidden");
    dashboardchat.classList.remove("resized");
    dashBord_right.classList.remove("resized");
  });
});

var cdetails = document.querySelector(".c-details");
var instructorOverviews = document.querySelector(".instructor-overviews");
var chaticon = document.querySelector(".chaticon");
var course_area = document.querySelector(".course_area");
var fullchat = document.querySelector(".fullchat");
var instructor_area = document.querySelector(".instructor-area");
var instructorexpand = document.querySelector(".instructorexpand");
var courseexpand = document.querySelector(".courseexpand");
var videoon = document.querySelector(".videoon");
var video_onarea = document.querySelector(".video_onarea");
var chatexpand = document.querySelector(".chatexpand");
var slickactive = document.querySelectorAll('.slick')
var arrow = document.querySelectorAll('.slick-arrow')

//Edited

arrow.addEventListener("click", () => {
  slickactive.classList.add("slick-active");
});

window.addEventListener("DOMContentLoaded", (event) => {
  chaticon.addEventListener("click", () => {
    chaticon.classList.add("active");
    fullchat.classList.remove("hidden");
  });
});

window.addEventListener("DOMContentLoaded", (event) => {
  chatexpand.addEventListener("click", () => {
    chatexpand.classList.remove("active");
    fullchat.classList.add("hidden");
  });
});

window.addEventListener("DOMContentLoaded", (event) => {
  cdetails.addEventListener("click", () => {
    cdetails.classList.add("active");
    instructorOverviews.classList.remove("active");
    instructor_area.classList.add("hidden");
    course_area.classList.remove("hidden");
  });
});



window.addEventListener("DOMContentLoaded", (event) => {
  instructorOverviews.addEventListener("click", () => {
    instructorOverviews.classList.add("active");
    cdetails.classList.remove("active");
    instructor_area.classList.remove("hidden");
    course_area.classList.add("hidden");
  });
});
window.addEventListener("DOMContentLoaded", (event) => {
  instructorexpand.addEventListener("click", () => {
    instructorOverviews.classList.remove("active");
    cdetails.classList.add("active");
    instructor_area.classList.add("hidden");
    course_area.classList.remove("hidden");
  });
});

window.addEventListener("DOMContentLoaded", (event) => {
  courseexpand.addEventListener("click", () => {
    instructorOverviews.classList.add("active");
    cdetails.classList.remove("active");
    instructor_area.classList.remove("hidden");
    course_area.classList.add("hidden");
  });
});

window.addEventListener("DOMContentLoaded", (event) => {
  videoon.addEventListener("click", () => {
    videoon.classList.add("hidden");
    video_onarea.classList.remove("hidden");
    
  });
});
window.addEventListener("DOMContentLoaded", (event) => {
  video_onarea.addEventListener("click", () => {
    video_onarea.classList.add("hidden");
    videoon.classList.remove("hidden");
    
  });
});

