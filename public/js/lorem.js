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
    case 3:
      LoremIpsum.WORDS = WORDS_ELFUL;
      break;
    case 4:
      LoremIpsum.WORDS = WORDS_MANELE;
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
  'Va dau scandal cat nu puteti sa duceti', 'gaina zapacita', 'vrei ceas?',
  'vrei sa te iau ca pe rahova?', 'somaldoaca escroaca', 'arati ca o maimuta', 'pleaca din emisiune daca nu vrei sa afle poporul roman',
  'l-am calcat in picioare', 'infractor', 'analfabet', 'pe nume Liviu Giorgica Mihai',
  'a fost privatizat de Vantu', 'Cine-i Turcan?', 'sotul sotiei sale', 'aceeasi cocina este',
  'te dau in judecate', 'porcule de la Cluj', 'sarpele Funar', 'ai noroc ca nu esti langa mine ca ti-as carpi doua palme',
  'dobitocu dracului', 'momaia asta impaiata', 'de la ce balamuc transmiteti',
  'nu ai tu dialog cu mine', 'cand ai candidat singur ai avut 2%',
  'parca te ocupai de supozitoare si de lotiuni de par',
  'parca esti lipita ca abtibildul de micul ecran',
  'Cu cati barbati te-ai culcat?',
  'ii voi da patru zeci de suturi in fund si s-ar putea sa ii faca placere ca ala e locul foarte sensibil al acetui bulangiu',
  'iti mut dintii pe gat',
  'maimuta dracului',
  'esti urat si pentru o maimuta',
  'o sa intri la puscarie si o sa iti faca aia popoul prastie',
  'sa se fereasca de pumnul asta greu de aruncator de sulite',
  'Cum te mai rabda pamantul sa vorbesti cu mine',
  'traficant de copii in Italia',
  'poti sa te dai cu curul de pamant in fiecare zi',
  'Dar nu pot sa vorbesc singur?',
  'hai sictir',
  'ce dialog sa am eu cu un proxenet si traficant de copii',
  'ce dialog sa am cu un gunoi',
  'un vierme',
  'aia-o proba mai prostu dracului',
  'ma spurca pe mine si copii mei',
  'ma golanule',
  'l-am dat afara de golan ce e',
  'se rasuceste tactu in mormant',
  'esti in stare sa o vinzi si pe ma-ta',
  'el era maimuta dresata acolo',
  'cand mi-ai platit tu ma tampitule?',
  'cacaciosule',
  'milogul dracului',
  'asta-i publicitatea',
  'scoateti mizeria aia de pe ecran',
  'un puscarias',
  'derbedeule',
  'nu ti-e rusine',
  'Ce carte ai tu?',
  'l-am angajat din mila',
  'si l-am dat afara',
  'acum o sa aiba scoala de la Jilava',
  'uita-te in ce hal arati',
  'du-te ma si munceste',
  'din ce traiesti ma baiete ma',
  'ma judeci tu pe mine',
  'Cate clase ai tu ma idiotule?',
  'se drogheaza cu cocaina',
  'are un comportament deviant',
  'acest Gigi Becali pentru mine este un paduche',
  'are un limgaj cultural de urangutan',
  'o sluga',
  'un executant',
  'clanul Camparu, clanul Camataru',
  'vene ingrosate la gat',
  'il bat de se pisa pe el',
  'te pisi rumegus de la sifilis',
  'daca vrei sa vezi cat de viril e Vadim Tudor, pot sa o regulez pe ma-ta',
  'du-te domnule, cu mustata aia de frizer, la pensie',
  'va ia mama dracului de hoti',
  'ati nenorocit tara',
  'taci din gura cand vorbeste Vadim Tudor',
  'Marian',
  'hai mai repede imbecilul dracului',
  'Ma suna pe telefonul meu, da?',
  'nu pot dialoga cu nimeni',
  'Ma te-ai nascut chiar asa de imbecil?',
  'Ma suna pe telefonul meu, nu? Altminteri moare emisiunea, nu?',
  'deschide-l',
  'cretinul dracului',
];
WORDS_RO = [
  'niste pateu', 'o shaorma cu de toate va rog','la pachet','m-am facut manga','palinca aia blana','cea mai frumoasa femeie e aia de tace',
  'cand o zbura porcul','visinata','bere la pet','as bea o plasticata','ai bani, mananci, n-ai bani, nu ti-e foame','si-a murit dumitru',
  'as zice un banc cu bula','fratele Nicolae Guta','si cand mor am valoare',
  'as zice un banc cu bula','fratele Nicolae Guta','frec putin menta', 'pana am dat la rate','rad pe sub mustata','mi-am pierdut ochelarii de soare','merem la costinesti la manele',
  'hai in vama frate','am spart tot salaru la loft','de luni ma pun sa invat','m-as apuca de sala','mica mica dar ridica','hai plimba ursu','dupa ce ma uit la Dan Diaconescu',
  'nu am rabdare','am nevoie de hartie igienica','m-am saturat de camin','imi vand un rinichi si ma mut la chirie','vai ce scump e','nu mai am bani','tigari si bere',
  'mi-am baut salariul','spargem o samanta','boss cf?','as manca o shaorma','sunt constipat','blanao','blana',
  'bogda proste',
  'eu vara nu dorm',
  'mi-a cazut slanina de pe pita',
  'intre doua nu te ploua',
  'apleaca-te ca daca nu ma aplec eu',
  'tine spatele ala drept cand te apleci',
  'o beroasa doua trei, si ficatu e mai grei',
  'e prea bun, prea ca la tara',
  'ai sa-mi imprumuti 5 milioane pana la salar',
  'iara nu mai am bani',
  'din cauza la sotia mea',
  'din cauza sotului meu',
  'iara umblu pe la bagaboante',
  'pentru ca domnisoarele sunt de vina',
  'in peretele de sus',
  'sub montumentul lui Basescu',
  'si ma simt ca un zeu',
  'fiindca nu ma simt ca un zeu',
  'muie psd',
  'muie psd',
  'muie psd',
];
WORDS_NICUSOR = [
  'cacat','pisat','unt','mazga','coptura galbena','diarie','mandarie','aoaleu','sicutza','salam','mandarie de mandarie','apa plata','morena','n-ai un leu?',
];
WORDS_ELFUL = [
  'ONI-ul s-a terminat',
  'Indiferent de rezultat',
  'mai raman 2 lucruri pe care trebuie sa le faceti',
  'betia de dupa proba',
  'voiam si eu o betie linistita',
  'ajung sa cunosc 4 boschetari noi',
  'sper ca voi v-ati distrat mai bine',
  'despre teoria pensionarii',
  'o teorie economica alternativa',
  'teoria pensionarii sa va raspunda la orice intrebare',
  'te intrebi care ar fi cel mai util lucru de stiut pentru facultate',
  'si apoi pentru absolvire',
  'mai stiu eu ce alte cacaturi iti trec prin minte',
  'o maneluta sa ne incalzim',
  'supravietuirea',
  'sclavia si pensionarea',
  'nu ai bani sa iti faci nevoile si stai la mila parintilor',
  'faci meditatii la info',
  'sclavia reprezinta munca la o corporatie',
  'securist infect',
  'te pisi pentru ultima oara in chiuveta firmei',
  'termini sclavia pe viata',
  'imi doresc sa cumpar 10 ficati de rezerva, ca sa pot bea linistit',
  'cariera timpurie de alcoolist',
  'cum ar fi Tristu, Spartu',
  'Elvis, Moldoveanul sau pe Andrei Jamaica',
  'sa mergem in parcul Unirii sa bagam un pet',
  'castiga 18 milioane pe luna',
  'in timpul orelor de fizica de liceu mergeam sa beau',
  'beau bere de 1 leu si vb golaneala',
  'imi voi putea savura petul in sfarsit',
  'imi spune ca par cam tocilar',
  'sa-mi cresc smecheria',
];
WORDS_MANELE = [
  'si cand mor am valoare',
  'dai pe ei cu leii grei',
  'suna telefoanele ca dracii',
  'pentru toate femeile care are barbati producatori',
  'am norocul scris in frunte',
  'merge bine afacerea',
  'mai bine nu se putea',
  'toate diamanetele n-au valoarea mea',
  'si nici aurul din lume si nici platina',
  'si daca-mi vine mie la cap nebunia, cumpar toata Romania',
  'ii cumpar si pe dusmani, si-i vand la americani',
  'eu sunt capitanul, capitanul',
  'tot la mine vine banul',
  'eu fac legea, nu dusmanul',
  'pustoaico cu par roscat, in grea boala m-ai bagat',
  'tigane tu ai amanta',
  'sunt tare, si nimeni nu poate sa ma doboare',
  'Cine bate la fereastra mea?',
  'o gagica cu politia',
  'dar nu-i lege pentru asa ceva',
  'vrea gagica mea la mare, ca e alba pe picioare',
  'zana zanelor',
  'steaua stelelor',
  'am uitat si de nevasta, stau mereu plecat de acasa',
  'ce bine arata fata',
  'ma face sa-mi las nevasta',
  'tu esti fata de oras',
  'eu sunt fiu de bogatas',
  'tie-ti plac doar banii mei',
  'mie-mi plac multe femei',
  'pentru toti magnatii',
  'mai nou, briliantul Romaniei',
  'hai in vacante, pe la Saint Tropez',
  'prin America si prin Africa sa ne facem viata',
  'degeaba ai bani daca nu-ti faci viata, ca viata e frumoasa',
  'al vostru FS',
  'cea mai dulce si frumaosa fata',
  'parca e brazilianca',
  'cap si pajura noi suntem banu si stema',
  'Ce sa le fac la dusmani sa le  dau capul meu?',
  'a venit nebunul de Salam',
  'percutie ca la noi, nu vezi in toata Romania asta',
  'am vazut cine mi-e frate, buzunarul de la spate',
  'pentru cine arunc milioane',
  'Alexandra, Alexandra, Alexandra',
  'beau sange de taur, si ma transform in balaur',
  'fara numar in continuare',
  'Cuba cuba, cu banii vreau s-arunc',
  'as pleca la Roma sau Paris',
  'sau la Milano',
  'de talie mondiala m-a facut mama',
  'stie bine toata tara de valoarea mea',
  'suntem made in Romania',
  'oriunde merg, am mare valoare',
  'sunt cunoscut si peste hotare',
  'eu fac bani si-n Himalaya',
  'Cine bea la masa mea, dusmanii si mafia',
  'sunt inebunit in ce fel arata',
  'esti bomba',
  'uite cum se misca, aduce-ti o cusca',
  'misca-te ca o felina',
  'ochii tai, ca doua detectoare, la buzunare, la buzunare',
  'alaturi de Lucian printu, pentru  voi toti',
  'arbitru de eleganta',
  'smecher cu suprematie',
  'ma omoara, ma omoara, fata de pe scara',
  'daca ai femeie frumoasa, n-o tine legata-n casa',
  'haide cu mine sa-ti iau ce vrei din mall',
  'si nu ma refuza, stii ca esti viata mea',
  'nu sta ca in vitrina',
  'fa-ma fa-ma sa-mi fie dor',
  'si nu ma lasa sa mor',
  'a-nceput nunta, nunta number one, c-a venit de dimineata si Florin Salam',
  'hei mami',
  'hei iubita mea',
  'pe pamant, pe soare si pe luna',
  'bem si sapte zile bem',
  'si-o luna daca vrem',
  'manele pe sistem',
  'bine ma',
  'cate una, cate doua, cate trei, cate patru',
  'cate gagicute vreau atatea-mi iau',
  'ascultam, dansam si bem',
  'hai gagico misc-o misc-o',
  'Claudia',
  'Alessio',
  'Play AJ',
  'Denisa',
  'si Mr Juve aici la aparat',
  'ca asta e nebunia lui Juve',
  'unde mergem cand iesim din cluburi tari?',
  'la lautari, unde canta lautarii',
  'bautura bautura si manele',
  'si femei de 7 stele',
  'bautura bautura si gagici, nu as mai pleca de-aici',
  'hai in Mercedes, hai in avion',
  'si la sutien sa-ti bag un milion',
  'hai in Mercedes, ca vreau sa te iubesc',
  'noi bem spargem pahare',
  'haide sus pe mese, fara sa ne pese',
  'facem galagie, lumea sa ne stie',
  'ce gagica exploziva',
  'ce gagica atractiva',
  'cand iti sarut buzele, oh zalezalele ma trec toate apele',
  'Lume, lume din partea mea Romeo Fantastik, regele sexului',
  'in anul 2009, nu mai e loc in top, Romeo e peste tot',
  'sa se rupa discoteca maaaa shichishichi bum bum',
  'as dansa, as dansa, as dansa',
  'vreau cu tine ca sa mor, tu esti viata si amor',
  'sunt tiganca, dar sunt alba',
  'd-aia iti sunt tigane draga',
  'am ochi negri ca maslina',
  'd-aia ti-am furat inima',
  'adrtalala, adrtalalalala, adrtalaladradralala',
  'tigane tu ai amanta da',
  'ca prea te porti la cravata da da da',
  'si de-o saptamana in coace',
  'te imbraci la 4 ace',
  'tigane esti de belea',
  'doar asta ne mai lipsea',
  'ca in rest avem de toate da da da',
  'jura-mi ca amanta n-ai',
  'dar ai de belea sa dai, spune-mi unde ai fost azi noapte',
  'avion cu motor du-ma in America',
  'si bate tari tari tari cu piciorul in podea',
  'rita rita gargarita hai si joaca pe manea',
  'motoare motoare, cu turbo reactoare',
  'de-ar fi sa-ti fac un portret, nu-ti gasesc nici un defect',
  'cazino, manca-te-ar cainii',
];


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
