<script lang="ts">
  import { formatDate } from "$lib/utils";
  import * as config from "$lib/config";
  import "./globals.css";
  export let data;
  import Footer from "../../components/Footer.svelte";
</script>

<body>
  <div class="explorepage" id="blur">
    <div class="Maingrid">
      <div class="Myskills">
        <h1 class="Skillstitle">My Skills</h1>

        <div class="buttonblock">
          <div class="VFX">
            <button class="Firstbutton">
              <p class="button3">3D and Visual FX</p>
              <div class="logos-container">
                <div class="logo1">
                  <img
                    class="img1"
                    src="/icons/skills/blender.svg"
                    alt="Blender"
                  />
                </div>
                <div class="logo2">
                  <img
                    class="img2"
                    src="/icons/skills/fusion.svg"
                    alt="Fusion"
                  />
                </div>
                <div class="logo3">
                  <img
                    class="img3"
                    src="/icons/skills/aftereffects.svg"
                    alt="after effects"
                  />
                </div>
              </div>
            </button>
          </div>

          <div class="VFX">
            <button class="Secondbutton"
              ><p class="button3">Graphic Design</p>
              <div class="logos-container">
                <div class="logo1">
                  <img class="img1" src="/icons/skills/figma.svg" alt="Figma" />
                </div>
                <div class="logo2">
                  <img
                    class="img2"
                    src="/icons/skills/illustrator.svg"
                    alt="illustrator"
                  />
                </div>
                <div class="logo3">
                  <img class="img3" src="/icons/skills/XD.svg" alt="XD" />
                </div>
              </div>
            </button>
          </div>

          <div class="Development">
            <button class="Thirdbutton">
              <p class="button3">Development</p>
              <div class="logos-container">
                <div class="logo1">
                  <img
                    class="img1"
                    src="/icons/skills/python.svg"
                    alt="Python"
                  />
                </div>
                <div class="logo2">
                  <img
                    class="img2"
                    src="/icons/skills/unreal.svg"
                    alt="Unreal Engine"
                  />
                </div>
                <div class="logo3">
                  <img class="img3" src="/icons/skills/unity.svg" alt="Unity" />
                </div>
              </div>
            </button>
          </div>
        </div>

        <div>
          <button class="Learnmorebutton"> Learn More </button>
        </div>
      </div>
      <div class="Aboutme">
        <img class="cfdlogo" src="/icons/logos/circle.svg" alt="logo" />

        <div class="Nameandtitle">
          <h1>Charlie Fox</h1>
          <h2 class="DesignerandDev">and</h2>
          <p class="Description">
           <strong> Hi 👋, i’m Charlie.</strong>
            <br />
            I am a 3D Artist, Developer and Graphic Designer.
            <br />

            

        </div>
      </div>
      <div class="techchunk">
        <div class="techchunkwrapper">
          <h1>Check Out</h1>
          <a href="https://google.com"><button class="techchunklink">TechChunk.</button></a>
        </div>
      </div>
      <div class="Contactme">
        <div class="Contactwrapper">
          <h1>Contact Me</h1>
          <a><button class="contactbutton"><img src="/icons/arrow.svg"></button></a>
        </div>
      </div>
      <div class="Followme">
        <h1>Follow Me</h1>

        <div class="Followbuttons">
          <button class="Youtubebutton">
            <img src="/icons/socials/youtube.svg" alt="youtube" />
          </button>

          <button class="Githubbutton">
            <img src="/icons/socials/github.svg" alt="github" />
          </button>

          <button class="Behancebutton">
            <img src="/icons/socials/behance.svg" alt="behance" />
          </button>

          <button class="Tiktokbutton">
            <img src="/icons/socials/tiktok.svg" alt="tiktok" />
          </button>
        </div>
      </div>
      <div class="Latestwork">
        <h1>My Latest Work</h1>
        <div class="Latestworkwrapper">
          <div class="Latest_content">
            <p>A Custom, Bespoke kitchen completely made in blender!</p>
            <button><h2>Learn More</h2></button>
          </div>
        </div>
      </div>
      <div class="Latestblog">
        <h1>Latest Blog posts!</h1>
        <div class="blogcontainer">
          {#each data.posts.slice(0, 1) as post}
            <div class="blogpost1">
              <a href="blog/{post.slug}" class="Latestpost">
                <div class="latestpost">
                  <div class="information">
                    <h2>{post.title}</h2>
                  </div>
                </div></a
              >
            </div>
          {/each}

          {#each data.posts.slice(1, 2) as post}
          <div class="blogpost1">
            <a href="blog/{post.slug}" class="Latestpost">
              <div class="latestpost">
                <div class="information">
                  <h2>{post.title}</h2>
                </div>
              </div></a
            >
          </div>
        {/each}

        {#each data.posts.slice(2, 3) as post}
        <div class="blogpost1">
          <a href="blog/{post.slug}" class="Latestpost">
            <div class="latestpost">
              <div class="information">
                <h2>{post.title}</h2>
              </div>
            </div></a
          >
        </div>
      {/each}

        </div>
      </div>
    </div>
  </div>
</body>

<Footer />
