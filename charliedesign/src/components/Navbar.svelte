

<body>
    <nav>
        <div class="logo">
            <h1>Charlie Design</h1>
        </div>
        <ul class="menu-items">
            <li><a href="#">Home</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>

        </ul>
    </nav>
</body>


<style>
  body {
    margin: 0;
    padding: 0;
}

nav {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%; /* Set the width to 100% */
}

.logo {
    margin-right: 20px;
    font-size: 20px;
}

.logo img {
    height: 40px;
}

.menu-items {
    list-style-type: none;
    font-size: 20px;
    font-weight: 600;
    margin: 0;
    padding: 5px 20px;
    display: flex;
    background-color: #FE1038;
    border-radius: 50px;
}

.menu-items li {
    margin: 0;
    padding: 10px;
}

.menu-items a {
    text-decoration: none;
    color: #fff;
}

.menu-items a:hover {
    color: #ff0;
}

</style>
