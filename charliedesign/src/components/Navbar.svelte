

<body>
    <nav class='Navbar'>
    <ul>
        <li>
            <a href="/">Home</a>
        </li>
        <li>
            <a href="/work">My Work</a>
        </li>
        <li>
            <a href="/blog">Blog</a>
        </li>

    </ul>
    </nav>
</body>


<style>

       
    .Navbar {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-items: center;
        text-align: center;
        height: 50px;
        gap: 10px;
        font-size: 10px;
        
    }

    ul {
        text-align: center;
        align-items: center;
        align-content: center;
    }

    .Navbar ul {
        display: flex;
        flex-direction: row;
        gap: 10px;
        text-align: center;
        align-items: center;

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