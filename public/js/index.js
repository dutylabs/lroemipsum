$(document).ready(function() {
  $('.dropdown-content .dropdown-item').click(function() {
    $(this).parent().find('.is-active').removeClass('is-active');
    $(this).addClass('is-active')
  })
})

function change() {
  console.log('changed')
  sourceSelected = $('#source .is-active').first();
  sourceIndex = $('#source .dropdown-item').index(sourceSelected);
  lengthSelected = $('#length .is-active').first();
  lengthIndex = $('#length .dropdown-item').index(lengthSelected);
  console.log(sourceIndex)
  console.log(lengthIndex)
  lipsum = new LoremIpsum(sourceIndex, lengthIndex);
  document.getElementById('text').innerHTML = lipsum.generate();
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
