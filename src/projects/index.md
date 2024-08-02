---
    title: Porfolio
    layout: layouts/base.njk
    eleventyNavigation:
        key: Portfolio
        order: 5
    permalink: /projects/
    override:tags: []
---

<div class="default-container">
{% for project in collections.projects %}
    <a href="{{ project.url }}">
        {{ project.data.title }}
    </a>
{% endfor %}
</div>
