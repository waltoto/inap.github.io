---
layout: home
title: Evolution of the network of actors in the film industry through time 
subtitle: ImportNumpyAsPd
cover-img: /assets/img/Image_chatgpt_network_time.jpg
---

## DATA exploration 
First, we present a general visualization of the data available in the datasets we use. All these pieces of information could be used at some point in the line of analysis presented below.  
We have created a dataset called `Movie`. The `Movie` contains Metadata information originally from the Freebase database that is extracted from the [*CMU Movie Summary Corpus*][CMU] dataset. We added information for each film from the [IMDb Non-Commercial Database][IMDB]. By doing so, we have in our possession a single dataset of approximately 61000 films, where for each film we have information such as the genres, ratings, directors, etc. 
In parallel, we have created another dataset called `Actor` from the *CMU Movie Summary Corpus*. This dataset has for index one actor and has for features every films that he plaid in, at which age, and there is also other features. 
### Distribution of data in the Movie dataset
The dataset contains films between 1910 and 2020. We observe almost twice as many films as usual in the 2000-2015 period.
![Distribution of Film Release Dates][img1]
634 different genres are present. We would typically consider only the 10 most popular genres in our analysis.
![Number of Films in Each Genre][img2]
145 different countries of origin are present in the dataset. We could group certain countries together (such as European or African countries, for example) to consider only the ~10 most prolific countries. Another possibility is to group the countries by their continent for the analysis.
![Number of Movies by Country of Origin][img3]
### Distribution of data about actors and directors
After reconverting the ethnicity data, we conclude that we won't be able to do any further analysis using ethnicity as we only have this information for less than 6% of actors. We could typically focus the analysis on the most popular actors (larger networks/careers). We would then double-check whether information on the ethnic origin of this subset of actors could be used.
![Most represented ethnic groups][img4]
We have a clear imbalance between actor's gender in the dataset with 45 % Male and only 26 % Female. Note that we lack this information for 29% of actors.
![Distribution of Actor Genders][img5]
The dataset includes actors and directors born between 1850 and 2000, reaching a maximum around 1970.
![Distribution of Actor Birth Years][img6]
Keeping track of the ages of the directors and actors during their careers could be interesting. As for ages at movie release, the data is nicely distributed for both actors and directors. We can observe that directors are typically older than the actors. 
![Distribution of Actor ages at Movie Release][img7]
We then plot the ages of the director and actor at their debut :
![Distribution of Actor age at their debut][img8]
Both distributions have the same shape but we observe that the director distribution is less spread out. The most represented age is around 25 years old for the actors and 37 years old for the directors.  
Then we plot the number of films directed/played by directors/actors.
![Distribution of number of films per actor][img9]
Typically, the graph for the actor shows that around $10^5$ actors have played in one single film, around $2 \times 10^4$ have played in only two different films,... These two curves are as expected decreasing pretty fast : directors who have directed more than 50 movies or actors who have played in more than 100 movies are isolated cases. <br>We can notice that directors tend to participate in fewer films than actors.

Now that we have a more clear view on our database, lets begin the analysis.

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


## Try to plot an interactive graph (2nd test)

{% include_relative plotly_graph.html %} 

## Try to plot interactive plot from jupyter notebook
{% include_relative iris_plot.html %} 

## Try image time scrolling

Click on the `start` button to see the evolution of the newtork over time. 

<div id="image-container">
    <img id="image-display" src="assets/img/distribution-actor-director-age-1-film.png" alt="Image 1" style="width:100%; max-width:600px;">
</div>

<button id="action-button"> start </button>

<script src="script.js"></script>


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
