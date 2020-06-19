---
date: 2020-06-19
layout: post
title: Unit response oracle
subtitle: Lorem ipsum dolor sit amet, consectetur adipisicing elit.
status: In progress
github_repo: https://github.com/ds4es/unit-response-oracle
description: Predictive solution for the response time prediction of emergency service intervention units
image: assets/img/posts/esuro-big.jpg
optimized_image: assets/img/posts/esuro-small.jpg
category: machine learning model
tags:
  - books
  - read
author: ds4es
comments: true
---

The response time is one of the most important factors for emergency services because their ability to save lives and rescue people depends on it. A non-optimal choice of an emergency vehicle for a rescue request may lengthen the arrival time of the rescuers and impact the future of the victim. This choice is therefore highly critical for emergency services and directly rely on their ability to predict precisely the arrival time of the different units available.


## Objective and thanks
This project aims to predict the response time of the appliances of an emergency service and is ONLY made possible through the code sharing from Wenqi Shu-Quartier-dit-Maire _(wshuquar - rank 2 on the leaderboard)_, Antoine Moulin _(amoulin)_, [Julien Jerphanion & Edwige Cyffers](https://gitlab.com/jjerphan/challenge-data-paris-fire-brigade) _(edwige & jjerphan)_, Wassim Bouaziz & Elliot Vincent _(elliot.vincent & wesbz)_, [Quentin Gallouedec](https://github.com/quenting44/predicting_response_times) _(Quenting44)_, [Laurent Deborde](https://github.com/ljmdeb/Pompiers) _(Ljmdeb)_, François Paupier _(popszer)_, Léo Andéol _(leoandeol)_.

Thanks to all of them very much for the work carried out and shared.

## Performance

With the current stage of the model and the Paris Fire Brigade data, we reach the following performances:

| Metric                                      | Score                     |
| ------------------------------------------- |:-------------------------:|
| delta selection-presentation R² score       | 0.3519259513911971        |
| RMSLE (Root mean squared logarithmic error) | 0.24096136564976547       |
| Median error                                | 46.85853018331147 seconds |
| Mean error                                  | 79.88422875046562 seconds |

For instance we have only used the fantastic work of Wenqi Shu-Quartier-dit-Maire but we are eager to also exploit the work of the other participants quoted just above resealing wonderful ideas.

<div class="row center">
  <p>
    <a href="https://github.com/ds4es/unit-response-oracle" id="download-button" class="btn-large waves-effect waves-light blue"><span style="vertical-align:middle;font-family:Roboto,sans-serif;color: #FFF"><big><strong>Take a look to the repo</strong></big></span></a>
</p>
</div>

A data challenge on this problem is still on-going, feel free to participate: [ENS data challenge platform](https://challengedata.ens.fr/challenges/21)