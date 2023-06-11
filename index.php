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
                    <p class="nav-item"><a href="#ac-container" class="nav-transi">A propos</a></p>
                    <p class="nav-item"><a href="#skill-container" class="nav-transi">Competences</a></p>
                    <p class="nav-item"><a href="#project-container" class="nav-transi">Projets</a></p>
                    <p class="nav-item"><a href="#contact-container" class="nav-transi">Contact</a></p>
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
                Bonjour je suis Nicolas Thieblemont, je suis actuellement étudiant en 1ere année de BUT MMI. Je suis passionné par la programmation et les technologies.<br><br>
                J'ai appris à utiliser PHP/MySQL, HTML/CSS, JAVASCRIPT, BASH, JAVA et PYTHON. Je suis curieux, ponctuelle, débrouillard, capable de travailler aussi bien en équipe que seul, j’adore découvrirez de nouvelle technologie.
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
                <div><img src="assets/img/js.png" height="256px" alt=""></div>
                <div><img src="assets/img/html.png" height="256px" alt=""></div>
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
                    <a href="https://github.com/xtraide/Sae205"><img src="assets/img/sae203.png" alt="Image 1" class="carousel-img"></a>
                </div>
                <div class="item">
                    <a href="https://github.com/xtraide/Sae205"><img src="assets/img/sae202.png" alt="Image 1" class="carousel-img"></a>
                </div>
                <div class="item">
                <a href="https://github.com/xtraide/sae105"><img src="assets/img/sae105.png" alt="Image 1" class="carousel-img"></a>
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
        <hr>
    </div>
    <h2 class="title">Contact</h2>
    <div id="contact-container">
        <form action="<?= basename(__FILE__) ?>">
            <div>
                <div>
                    <label for="email" class="contact-label">Email : </label>
                </div>
                <br>
                <div>
                    <input type="text" name="email" id="contact-email" placeholder="exemple@gmail.com">
                </div>
                <br>
                <div>
                    <label for="message" class="contact-label">Message : </label>
                </div>
                <br>

                <div>
                    <textarea name="message" id="contact-msg" cols="30" rows="10"></textarea>
                </div>
            </div>
            <div id="contact-container-button">
                <button type="submit" id="contact-send">Envoyer</button>
            </div>
        </form>
    </div>
</body>


</html>