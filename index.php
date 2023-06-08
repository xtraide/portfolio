<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="assets/css/all.css">
    <title>Nicolas Thieblemont - Portfolio </title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">
</head>

<body>

    <header>
        <nav id="nav-container">
            <div class="test">
                <img src="assets/img/logo_b.png" alt="logo du site" id="logo">

                <div id="nav-text">
                    <p class="nav-item"><a href="">A propos</a></p>
                    <p class="nav-item"><a href="">Competences</a></p>
                    <p class="nav-item"><a href="">Projets</a></p>
                    <p class="nav-item"><a href="">Contact</a></p>
                </div>
                <div id="nav-link">
                    <a href="https://github.com/xtraide"><img class="logo-link" src="assets/img/github banc.png" alt="logo git"></a>
                    <a href="https://www.linkedin.com/in/nicolas-thieblemont-73b25a209/"><img class="logo-link" src="assets/img/linkedinlogoB.png" alt="logo linkedin"></a>
                </div>
            </div>
        </nav>
    </header>
    <div id="ac-container">
        <div>
            <h1 id="me">Je suis<br>
                Nicolas Thieblemont
                <br>Developpeur Back-End
            </h1>
        </div>
        <div id="ac-button">
            Passer a la suite
        </div>
        <br><br>
        <hr>
    </div>

    <div id="about-container">
        <h2 class="title">A propos</h2>
        <div id="about-content">
            <img src="assets/img/IMG_2955.jpg" alt="sefl picture" id="about-img">
            <p id="about-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo doloribus molestias non sit fuga architecto, quam vel obcaecati nisi consectetur temporibus dolor quasi quisquam expedita voluptatum. Officia at praesentium delectus!
            </p>
        </div>


        <hr>
    </div>
    <div id="skill-container">
        <h2 class="title">Competences</h2>
        <div id="skill-flex">
            <div class="skill-img">
                <div><img src="assets/img/phplogo.png" height="530px" alt=""></div>
            </div>
            <div class="flex-img">
                <div><img src="assets/img/photoshop.png" height="150px" alt=""></div>
                <div><img src="assets/img/photoshop.png" height="150px" alt=""></div>
                <div><img src="assets/img/html.png" height="256px" alt=""></div>
                <div></div>
            </div>
            <div class="skill-item">
                <p class="skill-text">PHP</p>
                <div class="container1">
                    <div class="skills php">90%</div>
                </div>

                <p class="skill-text">JavaScript</p>
                <div class="container1">
                    <div class="skills js">80%</div>
                </div>

                <p class="skill-text">HTML - CSS</p>
                <div class="container1">
                    <div class="skills html">70%</div>
                </div>

                <p class="skill-text">Photoshop</p>
                <div class="container1">
                    <div class="skills photoshop">50%</div>
                </div>
            </div>
        </div>
        <hr>
    </div>
    <div id="project-container">
        <h2 class="title">Projets</h2>
        <div class="carousel">
            <div class="carousel-items">
                <div class="item active">
                    <img src="assets/img/sae203.png" alt="Image 1" class="carousel-img">
                </div>
                <div class="item">
                    <img src="image2.jpg" alt="Image 2" class="carousel-img">
                </div>
                <div class="item">
                    <img src="image3.jpg" alt="Image 3">
                </div>
            </div>
            <ul class="carousel-menu">
                <li class="active"></li>
                <li></li>
                <li></li>
            </ul>
        </div>
        <script>
            document.addEventListener("DOMContentLoaded", function(event) {
                const carouselItems = document.querySelector(".carousel-items");
                const carouselMenuItems = document.querySelectorAll(".carousel-menu li");

                let currentItem = 0;

                function showItem(index) {
                    carouselItems.style.transform = `translateX(-${index * 100}%)`;
                    carouselMenuItems[currentItem].classList.remove("active");
                    carouselMenuItems[index].classList.add("active");
                    currentItem = index;
                }

                carouselMenuItems.forEach(function(item, index) {
                    item.addEventListener("click", function() {
                        showItem(index);
                    });
                });

                setInterval(function() {
                    let newIndex = (currentItem + 1) % carouselMenuItems.length;
                    showItem(newIndex);
                }, 3000);
            });
        </script>

    </div>
</body>


</html>