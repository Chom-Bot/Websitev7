

<body>
    <div class="navgrid">
        <nav class='Navbar'>
        <ul>
            <li>
                <a href="/home">Home</a>
            </li>
            <li>
                <a href="/work">My Work</a>
            </li>
            <li>
                <a href="/blog">Blog</a>
            </li>

        </ul>
        </nav>
</div>
</body>


<style>
    .navgrid {
        display: grid;
        grid-template-columns: 555px 500px 260px 260px;
        column-gap: 35px;
        align-items: center;
        justify-content: center;
    }
    
    .Navbar {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-items: center;
        text-align: center;
        height: 50px;
        gap: 10px;
        font-size: 10px;
        margin: 0;
        
    }

    ul {
        text-align: center;
        align-items: center;
        align-content: center;
        margin: 0;
    }

    .Navbar ul {
        display: flex;
        flex-direction: row;
        gap: 10px;
        text-align: center;
        align-items: center;
        margin: 0;
        padding: 0;

    }

    .Navbar li {
        display: inline-block;
        gap: 10px;
        text-align: center;
    }

    .Navbar a {
        font-weight: 600;
        display: block;
        padding: 10px 15px;
        text-decoration: none;
        color: white;
        background-color: transparent;
        border: none;
        cursor: pointer;
        transition: 0.4s;
        border-radius: 100px;
        font-size: 20px;
    }
    .Navbar a:hover {
        color: yellow;
    }

</style>