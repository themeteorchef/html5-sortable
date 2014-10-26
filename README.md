## HTML5 Sortable for Meteor

Meteor implementation of [HTML5 Sortable](https://github.com/voidberg/html5sortable.git) for jQuery.

## Usage

Install via [Atmosphere](http://atmospherejs.com):

` meteor add themeteorchef:html5-sortable`

### Basic Implementation

To make any of your lists sortable, add a unique class to a list you'd like to make sortable. For example, we're adding the `.sortable` class to a [Bootstrap list group](http://getbootstrap.com/components/#list-group) here:

```
<template name="sortableExample">
  <ul class="list-group sortable">
    <li class="list-group-item">You can drag and drop me!</li>
    <li class="list-group-item">You can drag and drop me!</li>
    <li class="list-group-item">You can drag and drop me!</li>
    <li class="list-group-item">You can drag and drop me!</li>
    <li class="list-group-item">You can drag and drop me!</li>
  </ul>
</template>
```

And in our application code, we can call `$('.sortable').sortable()`:

```
Template.sortableExample.rendered = ->
  $('.sortable').sortable()
```

To test, just drag and drop items in the list!

For more customization options and configuration, check out the HTML5 Sortable documentation: [HTML5 Sortable by voidberg](https://github.com/voidberg/html5sortable.git).
