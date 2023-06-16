<footer>

    <div class="footer">
        
        <div class="linkcontainer">
            <ul>
                <a href='/'>Home</a>
            </ul>

            <ul>
                <a href='/'>My Work</a>
            </ul>

            <ul>
                <a href='/'>Contact</a>
            </ul>

        </div>
        <div class="Copyright">
            <p>© 2023 Charlie Design</p>
        </div>
    </div>


</footer>


<style>

    footer {
        display: grid;
        grid-template-columns: 555px 566px 572px;
        align-items: center;
        justify-content: center;
        column-gap: 50px;
    }

    .footer {
        display: flex;
        flex-direction: row;
        border-radius: 70px;
        padding-left: 60px;
        padding-right: 60px;
        justify-content: space-between;
        background-color: black;
        grid-column: 1/4;
        color: white;
        align-items: center;
        font-size: 20px;
        font-weight: 600;
        padding-top: 20px;
        padding-bottom: 20px;
    }

    .linkcontainer {
        display: flex;
        flex-direction: column;
        gap: 10px;
        color: white;
    }

    ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
    }

    a {
        text-decoration: none;
        color: white;
        font-weight: 600;
        font-size: 16px;
    }

</style>