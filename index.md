---
layout: home
title: Evolution of the network of actors in the film industry through time 
subtitle: ImportNumpyAsPd
cover-img: /assets/img/maxresdefault.jpg
mathjax: true
---

## DATA exploration 
First, we present a general visualization of the data available in the datasets we use. All these pieces of information could be used at some point in the line of analysis presented below.  
We have created a dataset called `Movie`. The `Movie` contains Metadata information originally from the Freebase database that is extracted from the [*CMU Movie Summary Corpus*][CMU] dataset. We added information for each film from the [IMDb Non-Commercial Database][IMDB]. By doing so, we have in our possession a single dataset of approximately 61000 films, where for each film we have information such as the genres, ratings, directors, etc. 
In parallel, we have created another dataset called `Actor` from the *CMU Movie Summary Corpus*. This dataset has for index one actor and has for features every films that he plaid in, at which age, and there is also other features. 

<div id="actornetwork"></div>

## Actor Network: Career

<div style="width: 100%; height: 600px; margin: 0 auto;">
  {% include_relative assets/img/career_with_3_cluster.html %}
</div>

<div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px;">

  <div>
    <iframe src="assets/img/career_Johnny Depp.html" style="width:100%; height:300px; border:none;"></iframe>
  </div>

  <div>
    <iframe src="assets/img/career_Mel Blanc.html" style="width:100%; height:300px; border:none;"></iframe>
  </div>

  <div>
    <iframe src="assets/img/career_Samuel L. Jackson.html" style="width:100%; height:300px; border:none;"></iframe>
  </div>

  <div>
    <iframe src="assets/img/career_Yao Ming.html" style="width:100%; height:300px; border:none;"></iframe>
  </div>

</div>

<div class="totalnbrfilm">
    <img src="assets/img/Total_nbr_filmshisto.png" style="display: block; margin: 0 auto; width: 80%;"/>
</div>

<div class="heightactor">
    <img src="assets/img/actor_heighthisto.png" style="display: block; margin: 0 auto; width: 80%;"/>
</div>

<div class="startage">
    <img src="assets/img/Career_Start_agehisto.png" style="display: block; margin: 0 auto; width: 80%;"/>
</div>

<div class="careerlength">
    <img src="assets/img/Career_lengthhisto.png" style="display: block; margin: 0 auto; width: 80%;"/>
</div>

<div style="width: 100%; height: 600px; margin: 0 auto;">
  {% include_relative assets/img/gender_camembert_cluster.html %}
</div>

<div class="nxactorlanguage">
    <img src="assets/img/network_with_languages.png" style="display: block; margin: 0 auto; width: 80%;"/>
</div>

<div style="margin-top: 20px;">
  <h4 style="color: black; text-align: center;">Do actors who have performed in a particular language also perform in other languages? </h4>
  <hr style="border-top: 1px dotted #ccc;" />

  <div style="text-align: center;">
    <label for="choice1">Select a language:</label>
    <select id="choice1" onchange="changeImageHTML()" style="padding: 5px; margin-left: 10px;">
      <option value="histogram_English">English</option>
      <option value="histogram_French">French</option>
      <option value="histogram_Hindi">Hindi</option>
      <option value="histogram_Italian">Italian</option>
      <option value="histogram_Spanish">Spanish</option>
    </select>
  </div>

  <div id="result1" style="
      height: 400px; /* Augmentation de la hauteur */
      width: 80%; /* Augmentation de la largeur */
      margin: 0px auto; /* Ajout d'espace autour */
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #f9f9f9; /* Fond légèrement gris */
    ">
    <p style="color: gray;">Select a language !</p>
  </div>
</div>
<script src="img_list.js"></script>

<div style="width: 100%; height: 600px; margin: 0 auto;">
  {% include_relative assets/img/group_distribution_plot.html %}
</div>



### How to put mathematical equation 

Typically, you should write like this $$10^5$$ and not like this $10^5$.

## Quizz: Who has done the Impossible?

Who do you think has played in 9 different languages throughout their career?

-  **a)** Tom Cruise  
-  **b)** Jean Dujardin  
-  **c)** Jackie Chan  
-  **d)** No one can have done that  

---

#### Reveal the Answer  
<details>
  <summary>Click to show the answer</summary>
  
  <div style="display: flex; align-items: center; margin-top: 10px;">
    <img src="assets/img/jackie_chan.jpg" alt="Jackie Chan" style="width: 200px; height: auto; margin-right: 10px;">
    <div>
      <strong>Correct Answer:</strong> <strong>c) Jackie Chan</strong><br>
      Fun fact: Jackie Chan has acted in multiple languages, including Cantonese, Mandarin, English, Korean, Japanese, and more!
    </div>
  </div>
  
</details>



[CMU]: https://www.cs.cmu.edu/~ark/personas/
[IMDB]: https://developer.imdb.com/non-commercial-datasets/
[img1]: /assets/img/distribution-film.png
[img2]: /assets/img/nbr-film-genre.png
[img3]: /assets/img/nbr-film-country-origin.png
[img4]: /assets/img/most-rpz-ethnic.png
[img5]: /assets/img/distribution-actor-gender.png
[img6]: /assets/img/distribution-actor-director-DoB.png
[img7]: /assets/img/distribution-actor-director-age-movie.png
[img8]: /assets/img/distribution-actor-director-age-1-film.png
[img9]: /assets/img/distribution-nbr-film-actor-director.png
[img10]: /assets/img/network_with_languages.png
