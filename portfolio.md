---
layout: default
title: Portfolio
description: "My data analysis work"
---

<input id="search" class="search-bar" placeholder="Search projects...">

<h2>⭐ Pinned Projects</h2>
<div class="project-grid">
{% for proj in site.data.projects.pinned %}
  <a class="project-card" href="{{ proj.file }}">
    <h3>{{ proj.title }}</h3>
    <p>{{ proj.description }}</p>
  </a>
{% endfor %}
</div>

<h2>All Projects</h2>
<div class="project-grid">
{% for proj in site.data.projects.projects %}
  <a class="project-card" href="{{ proj.file }}">
    <h3>{{ proj.title }}</h3>
    <p>{{ proj.description }}</p>
  </a>
{% endfor %}
</div>

<script src="js/search.js"></script>
