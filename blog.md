---
layout: default
title: Writing
description: "Blog Jekyll"
---

<div class="project-grid">
  {% for proj in site.data.projects.projects %}
    <a class="project-card" href="{{ proj.file }}">
      <h3>{{ proj.title }}</h3>
      <p>{{ proj.description }}</p>
    </a>
  {% endfor %}
</div>
