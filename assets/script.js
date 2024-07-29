document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const hiddenHeader = document.querySelector(".hidden-header");

  menuToggle.addEventListener("click", function () {
    let nav = document.querySelector(".hidden-header");
    if (nav.style.display === "block") {
      nav.style.display = "none";
    } else {
      nav.style.display = "block";
    }
  });
  window.addEventListener("resize", function () {
    if (window.innerWidth > 750) {
      hiddenHeader.style.display = "none";
    }
  });
});


// document.addEventListener("DOMContentLoaded", function () {
//   const LinkedIn = document.getElementById("LinkedIn"); // Use document directly
//   LinkedIn.addEventListener("click", function () {
//     const url = "https://www.yourwebsite.com";
//     window.open("https://www.linkedin.com/sharing/share-offsite/?url=" + encodeURIComponent(url),
//         "linkedin-share-dialog",
//         "width=800,height=600");
//     return false;
//   });
// });

function shareOnFacebook(){
  const url = "https://www.yourwebsite.com";
  window.open(
    "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(url),
    "facebook-share-dialog",
    "width=800,height=600"
  );
  return false;

}

function shareOnLinkedIn() {
  const url = "https://www.yourwebsite.com";
  window.open("https://www.linkedin.com/sharing/share-offsite/?url=" + encodeURIComponent(url),
      "linkedin-share-dialog",
      "width=800,height=600");
  return false;
}

// document.addEventListener("DOMContentLoaded", function () {
//   const facebook = document.getElementById("Facebook");

//   if (facebook) {
//     facebook.addEventListener("click", function () {
//       const url = "https://www.yourwebsite.com";
//       window.open(
//         "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(url),
//         "facebook-share-dialog",
//         "width=800,height=600"
//       );
//       return false;
//     });
//   } else {
//     console.error("Element with ID 'Facebook' not found.");
//   }
// });




