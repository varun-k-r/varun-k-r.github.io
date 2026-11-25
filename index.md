---
title: "Varun Karekurve-Ramachandra"
permalink: /
classes: "wide bio-page single-scroll"
---

{% for section in site.data.home_sections %}
<section id="{{ section.id }}" class="site-section" tabindex="-1" {% if section.id == 'bio' %}aria-label="Bio"{% else %}aria-labelledby="{{ section.id }}-heading"{% endif %}>
{% unless section.id == 'bio' %}<h2 id="{{ section.id }}-heading">{{ section.title }}</h2>{% endunless %}
{% capture section_content %}{% include {{ section.file }} %}{% endcapture %}
{{ section_content | markdownify | replace: '<h3', '<h4' | replace: '</h3>', '</h4>' | replace: '<h2', '<h3' | replace: '</h2>', '</h3>' }}
</section>
{% endfor %}
