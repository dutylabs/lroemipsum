/**
 * @fileOverview Generates "Lorem ipsum" style text.
 * @author rviscomi@gmail.com Rick Viscomi,
 *    tinsley@tinsology.net Mathew Tinsley
 * @version 1.0
 */

/**
 *  Copyright (c) 2009, Mathew Tinsley (tinsley@tinsology.net)
 *  All rights reserved.
 *
 *  Redistribution and use in source and binary forms, with or without
 *  modification, are permitted provided that the following conditions are met:
 *    * Redistributions of source code must retain the above copyright
 *      notice, this list of conditions and the following disclaimer.
 *    * Redistributions in binary form must reproduce the above copyright
 *      notice, this list of conditions and the following disclaimer in the
 *      documentation and/or other materials provided with the distribution.
 *    * Neither the name of the organization nor the
 *      names of its contributors may be used to endorse or promote products
 *      derived from this software without specific prior written permission.
 *
 *  THIS SOFTWARE IS PROVIDED BY MATHEW TINSLEY ''AS IS'' AND ANY
 *  EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 *  WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 *  DISCLAIMED. IN NO EVENT SHALL <copyright holder> BE LIABLE FOR ANY
 *  DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 *  (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 *  LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 *  ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 *  (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 *  SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

/**
 * @class Jibborish generator.
 */
 var LoremIpsum = function(index, length) {
   LENGTH_INDEX= length;
      switch (index) {
         case 0:
             LoremIpsum.WORDS = WORDS_RO;
             break;
         case 1:
             LoremIpsum.WORDS = WORDS_VADIM;
             break;
         case 2:
             LoremIpsum.WORDS = WORDS_NICUSOR;
             break;
     }
 };

/**
 * Average number of words per sentence.
 * @constant {number}
 */
LoremIpsum.WORDS_PER_SENTENCE_AVG = 24.460;

/**
 * Standard deviation of the number of words per sentence.
 * @constant {number}
 */
LoremIpsum.WORDS_PER_SENTENCE_STD = 5.080;

/**
 * List of possible words.
 * @constant {Array.string}
 */
 LoremIpsum.WORDS =[
   'Bla'
 ];
LENGTH_INDEX=1;
WORDS_VADIM = [
  'Am mers ce am mers cu Viorica Dancila','Curva dracului!',
  'Da cine esti tu fetito', 'alo cine e zapacita asta','Nu faci dumneata ordine la mine in birou',
  'Escroaca','Vii cu politia aicia','vii cu gorilele','Scoteti-o din platou','c-o calc in picioare',
  'scoate-ti cioara asta borata din platou','Da cine esti tu?',
  'Du-te fa securisto, ti-ai bagat barbatul la puscarie', 'Hotiilor, hoata, da tu afara presa din partid',
  'In numele cui vorbiti?', 'Auzi fetito, te dau in judecata', 'pitica dracului','ai noroc ca nu esti langa mine ca ti-as carpi doua palme',
  'Va dau scandal cat nu puteti sa duceti'
];
WORDS_RO=[
  'niste pateu', 'o shaorma cu de toate va rog','la pachet','m-am facut manga','palinca aia blana','cea mai frumoasa femeie e aia de tace',
  'cand o zbura porcul','visinata','bere la pet','as bea o plasticata','ai bani, mananci, n-ai bani, nu ti-e foame','si-a murit dumitru',
  'as zice un banc cu bula','fratele Nicolae Guta','si cand mor am valoare'
];
WORDS_NICUSOR=[
  'cacat','pisat','unt','mazga','coptura galbena','diarie','mandarie','aoaleu','sicutza','salam','mandarie de mandarie','apa plata','morena','n-ai un leu?'
]


/**
 * Generate "Lorem ipsum" style words.
 * @param num_words {number} Number of words to generate.
 * @return {string} "Lorem ipsum..."
 */
LoremIpsum.prototype.generate = function () {
  var num_words = (LENGTH_INDEX+1)*150;
  var words, ii, position, word, current, sentences, sentence_length, sentence;

  /**
   * @default 100
   */
  num_words = num_words || 100;

  words = [LoremIpsum.WORDS[0], LoremIpsum.WORDS[1]];
  num_words -= 2;

  for (ii = 0; ii < num_words; ii++) {
    position = Math.floor(Math.random() * LoremIpsum.WORDS.length);
    word = LoremIpsum.WORDS[position];

    if (ii > 0 && words[ii - 1] === word) {
      ii -= 1;

    } else {
      words[ii] = word;
    }
  }

  sentences = [];
  current = 0;

  while (num_words > 0) {
    sentence_length = this.getRandomSentenceLength();

    if (num_words - sentence_length < 4) {
      sentence_length = num_words;
    }

    num_words -= sentence_length;

    sentence = [];

    for (ii = current; ii < (current + sentence_length); ii++) {
      sentence.push(words[ii]);
    }

    sentence = this.punctuate(sentence);
    current += sentence_length;
    sentences.push(sentence.join(' '));
  }

  return sentences.join(' ');
};

/**
 * Insert commas and periods in the given sentence.
 * @param {Array.string} sentence List of words in the sentence.
 * @return {Array.string} Sentence with punctuation added.
 */
LoremIpsum.prototype.punctuate = function (sentence) {
  var word_length, num_commas, ii, position;

  word_length = sentence.length;

  /* End the sentence with a period. */
  sentence[word_length - 1] += '.';

  if (word_length < 4) {
    return sentence;
  }

  num_commas = this.getRandomCommaCount(word_length);

  for (ii = 0; ii <= num_commas; ii++) {
    position = Math.round(ii * word_length / (num_commas + 1));

    if (position < (word_length - 1) && position > 0) {
      /* Add the comma. */
      sentence[position] += ',';
    }
  }

  /* Capitalize the first word in the sentence. */
  sentence[0] = sentence[0].charAt(0).toUpperCase() + sentence[0].slice(1);

  return sentence;
};

/**
 * Produces a random number of commas.
 * @param {number} word_length Number of words in the sentence.
 * @return {number} Random number of commas
 */
LoremIpsum.prototype.getRandomCommaCount = function (word_length) {
  var base, average, standard_deviation;

  /* Arbitrary. */
  base = 6;

  average = Math.log(word_length) / Math.log(base);
  standard_deviation = average / base;

  return Math.round(this.gaussMS(average, standard_deviation));
};

/**
 * Produces a random sentence length based on the average word length
 * of an English sentence.
 * @return {number} Random sentence length
 */
LoremIpsum.prototype.getRandomSentenceLength = function () {
  return Math.round(
      this.gaussMS(
          LoremIpsum.WORDS_PER_SENTENCE_AVG,
          LoremIpsum.WORDS_PER_SENTENCE_STD
      )
  );
};

/**
 * Produces a random number.
 * @return {number} Random number
 */
LoremIpsum.prototype.gauss = function () {
  return (Math.random() * 2 - 1) +
      (Math.random() * 2 - 1) +
      (Math.random() * 2 - 1);
};

/**
 * Produces a random number with Gaussian distribution.
 * @param {number} mean
 * @param {number} standard_deviation
 * @return {number} Random number
 */
LoremIpsum.prototype.gaussMS = function (mean, standard_deviation) {
  return Math.round(this.gauss() * standard_deviation + mean);
};
