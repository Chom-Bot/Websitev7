<footer>

    <div class="footer">
        
        <div class="linkcontainer">
            <ul>
                <a href='/home'>Home</a>
            </ul>

            <ul>
                <a href='/work'>My Work</a>
            </ul>

            <ul>
                <a href='/contact'>Contact</a>
            </ul>

        </div>
        <div class="Copyright">
            <h2>© 2023 Charlie </h2>
        </div>
    </div>


</footer>


<style>

    footer {
        display: grid;
        grid-template-columns: 555px 500px 520px;
        grid-template-rows: 40px 150px;
        align-items: center;
        justify-content: center;
        column-gap: 50px;
        align-items: center;
    }

    .footer {
        height: 100%;
        grid-row: 2;
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
        text-align: left;
    }

    .linkcontainer a {
        font-size: 18px;
        font-weight: 600;
    }
    .Copyright h2{
        font-size: 18px;
        font-weight: 600;
    }
    .Copyright h2::after {
        content: " Design";
        color: #FAFF00;
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