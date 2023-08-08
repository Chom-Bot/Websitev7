<script lang="ts">

  import "./styles.css";
  import { formatDate } from '$lib/utils'
  export let data


</script>


<body>
  <div class="herogrid">
    <div class="aboutme">
      <img src="/icons/logos/circle.svg" />
      <h2>
        Hi, my name is Charlie Fox
        <br />
        I am a VFX Artist, Designer and Developer
      </h2>
      <h2>Have a look at my showreel</h2>
      <div class="favtoolscontainer">
        <h2>My favourite tools:</h2>
        <div class="favtools">
          <img src="/icons/skills/blender.svg" />
          <img src="/icons/skills/unreal.svg" />
          <img src="/icons/skills/figma.svg" />
        </div>
        <div>
          <button class="button">See my CV</button>
        </div>
        <div class="showreel" />
      </div>
    </div>
    <div class="slideshow" style="background-image: url('thmbs/kitchen.png')">
        
    </div>
  </div>
  
<h2>My work</h2>

  <div class="Secondlayer">
      <a href="/homev2/kitchen" class="Lcard" style="background-image: url('thmbs/kitchen.png')">
      <div class="Lcard">  

      </div>
    </a>  
      <a href="/homev2/plane " class="Lcard" style="background-image: url('thmbs/plane.png')">
      <div class="Lcard">  

    </div>
    </a>
    <a href="/homev2/bar" class="Lcard" style="background-image: url('thmbs/bar.png')">
      <div class="Lcard">
      </div>
    </a>
  </div>
    <div class="Thirdlayer">
      {#each data.posts.slice(2, 3) as post}
      <a href="/homev2/{post.slug}" class="Pcard" style="background-image: url('{post.pbackground}')">
        <div class="Pcard">
        </div>
      </a>
      {/each}
        <div class="Pcard">
        </div>
        <div class="Pcard">
            <h1>6</h1>
        </div>
        <div class="Pcard">
            <h1>7</h1>
        </div>

</body>
