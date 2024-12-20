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

<div id="introduction"></div> 

## Introduction 

Scientists, let’s talk about networking. Oh, not the kind where you trade research ideas over stale coffee at conferences – no, this is Hollywood-level networking. You may think publishing papers and climbing the academic ladder is tough, but imagine trying to make it in the world of cinema. In both science and film, it seems like knowing the right people can open doors that talent alone cannot.

So, let’s ask ourselves: what does it take to land the lead role? A jaw-dropping audition? An exceptional physique?  Sure, but let’s be honest – your CV might need more social proof than anything else. For actors, the “connections” game isn’t just LinkedIn endorsements; it’s sharing the screen, the limelight, and the credit scroll with other stars.

Career analysis, gender inequality, relationships with directors and language barriers are just some of the obstacles on the road to the red carpet. "Ready, Set, Action!" Let the data speak !

<div id="actornetwork"></div> 

## Actor Network: Career

First step: career profiles! By charting the number of films each actor has appeared in every year since their career began, we’ve created career profiles. These profiles capture the ebbs and flows of their productivity, revealing fascinating insights. This should enable us to differentiate between the Sunday actor who made a film with his cousin and the Hollywood star. They take very different shapes and magnitude, highlighting some incredible careers. Let’s take a closer look at some of these extraordinary journey.  Who do you think is the most prolific actor of the decade?

<div style="width: 100%; height: 300px; margin: 0 auto;">
  <iframe src="assets/img/career_Mel Blanc.html" style="width:100%; height:300px; border:none;"></iframe>
</div>

<div style="display: flex; align-items: center; gap: 10px; width: 100%; margin: 0 auto;">
  
  <!-- Conteneur de l'iframe -->
  <div style="flex: 4; height: 300px;">
    <iframe src="assets/img/career_Mel Blanc.html" style="width:100%; height:100%; border:none;"></iframe>
  </div>
  
  <!-- Conteneur de l'image -->
  <div style="flex: 1; height: 300px; display: flex; justify-content: center; align-items: center;">
    <img src="assets/img/Mel_Blanc_portrait.jpg" alt="Mel Blanc Portrait" style="height: 60%; object-fit: cover; border-radius: 10px;">
  </div>
  
</div>

<div style="display: flex; align-items: center; gap: 10px; width: 100%; margin: 0 auto;">
  
  <!-- Conteneur de l'iframe -->
  <div style="flex: 4; height: 300px;">
    <iframe src="assets/img/career_Mel Blanc.html" style="width:100%; height:100%; border:none;"></iframe>
  </div>
  
  <!-- Conteneur du portrait -->
  <div style="flex: 1; display: flex; justify-content: center; align-items: center;">
    <div style="width: 100px; height: 100px; overflow: hidden; border-radius: 10px; background: #ccc;">
      <img src="assets/img/Mel_Blanc_portrait.jpg" alt="Mel Blanc Portrait" style="width: 100%; height: 100%; object-fit: cover;">
    </div>
  </div>
  
</div>

40 films in one year… that’s impressive! Okay, dubbing is a bit of a cheat ... so here are two career profiles of Hollywood superstars for comparison.

<div style="width: 100%; height: 300px; margin: 0 auto;">
  <iframe src="assets/img/career_Samuel L. Jackson.html" style="width:100%; height:300px; border:none;"></iframe>
</div>

<div style="width: 100%; height: 300px; margin: 0 auto;">
  <iframe src="assets/img/career_Johnny Depp.html" style="width:100%; height:300px; border:none;"></iframe>
</div>

One last example for the road, let's take a Sunday actor. In fact, the data set is mainly made up of profiles similar to that of our fourth candidate. We can't call his career a real one, but we have to consider all those people who have simply tried their hand at acting. 

<div style="width: 100%; height: 300px; margin: 0 auto;">
  <iframe src="assets/img/career_Yao Ming.html" style="width:100%; height:300px; border:none;"></iframe>
</div>

And yes, we're talking about the Chinese NBA basketball player featured in the film YYYY!  This data really does have it all.

As much fun as it is to inspect these career profiles by hand, we're going to use the power of clustering algorithms to classify these career types for us. Make way for KNN!  
A little elbow method to determine the number of clusters, while keeping the number of clusters low enough to facilitate interpretation... And here are the centroid profiles! 


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

<div style="width: 100%; height: 600px; margin: 0 auto;">
  {% include_relative assets/img/Total_nbr_filmshisto.html %}
</div>

<div style="width: 100%; height: 600px; margin: 0 auto;">
  {% include_relative assets/img/actor_heighthisto.html %}
</div>

<div style="width: 100%; height: 600px; margin: 0 auto;">
  {% include_relative assets/img/Career_Start_agehisto.html %}
</div>

<div style="width: 100%; height: 600px; margin: 0 auto;">
  {% include_relative assets/img/Career_lengthhisto.html %}
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
