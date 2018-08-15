$(document).ready(function() {
  init();
  change();
  $('.dropdown-content .dropdown-item').click(function() {
    $(this).parent().find('.is-active').removeClass('is-active');
    $(this).addClass('is-active')
    sourceSelected = $('#source .is-active').first();
    sourceIndex = $('#source .dropdown-item').index(sourceSelected);
    lengthSelected = $('#length .is-active').first();
    lengthIndex = $('#length .dropdown-item').index(lengthSelected);
    sourceQueryString = getSourceQueryString(sourceIndex);
    lengthQueryString = getLengthQueryString(lengthIndex);
    new_uri = updateQueryStringParameter(window.location.href, "lungime", lengthQueryString);
    new_uri = updateQueryStringParameter(new_uri,  "sursa", sourceQueryString);
    if (history.pushState) {
      window.history.pushState({ path: new_uri }, '', new_uri);
    }
  })
})

function getSourceQueryString(sourceIndex) {
  switch(sourceIndex) {
    case 0:
      return "fraze-romanesti";
    case 1:
      return "vadim-tudor";
    case 2:
      return "nicusor-de-la-braila";
    case 3:
      return "elful";
    case 4:
      return "manele";
  }
}

function getSourceIndexFromString(sourceQueryString) {
  return [
    "fraze-romanesti",
    "vadim-tudor",
    "nicusor-de-la-braila",
    "elful",
    "manele"
  ].indexOf(sourceQueryString);
}

function getLengthIndexFromString(lengthQueryString) {
  return [
    "text-scurt",
    "text-mediu",
    "text-lung"
  ].indexOf(lengthQueryString);
}

function getLengthQueryString(sourceIndex) {
  switch(sourceIndex) {
    case 0:
      return "text-scurt";
    case 1:
      return "text-mediu";
    case 2:
      return "text-lung";
  }
}

function init() {
  sourceQueryString = getQueryStringParameter("sursa");
  lengthQueryString = getQueryStringParameter("lungime");
  $('#source .dropdown-item:eq(' + getSourceIndexFromString(sourceQueryString) + ')')
      .addClass('is-active');
  $('#length .dropdown-item:eq(' + getLengthIndexFromString(sourceQueryString) + ')')
      .addClass('is-active');
}

function change() {
  sourceSelected = $('#source .is-active').first();
  sourceIndex = $('#source .dropdown-item').index(sourceSelected);
  lengthSelected = $('#length .is-active').first();
  lengthIndex = $('#length .dropdown-item').index(lengthSelected);
  lipsum = new LoremIpsum(sourceIndex, lengthIndex);
  document.getElementById('text').innerHTML = lipsum.generate();
  sourceQueryString = getSourceQueryString(sourceIndex);
  lengthQueryString = getSourceQueryString(lengthIndex);
  new_uri = updateQueryStringParameter(window.location.href,  "sursa", sourceQueryString);
  new_uri = updateQueryStringParameter(new_uri, "lungime", lengthQueryString);
  if (history.pushState) {
    window.history.pushState({ path: new_uri }, '', new_uri);
  }
}

function copyTextToClipboard() {
  const str = document.getElementById('text').innerHTML;
  const el = document.createElement('textarea');
  el.value = str;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
}

function suggestPhrases() {
  var $options = $('#length').find('option'),
  random = ~~(Math.random() * $options.length);
  $options.eq(random).prop('selected', true);

  var $options = $('#source').find('option'),
  random = ~~(Math.random() * $options.length);
  $options.eq(random).prop('selected', true);

  $('#generate').click();
}

function getQueryStringParameter(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
  results = regex.exec(location.search);
  return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function updateQueryStringParameter(uri, key, value) {
  var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
  var separator = uri.indexOf('?') !== -1 ? "&" : "?";
  if (uri.match(re)) {
    return uri.replace(re, '$1' + key + "=" + value + '$2');
  }
  else {
    return uri + separator + key + "=" + value;
  }
}
