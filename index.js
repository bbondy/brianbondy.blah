var express = require('express');
var app = express.createServer();
var _ = require('underscore')._;
var dump = console.log;

app.set('view engine', 'jade');
app.set('view options', { layout: false, pretty: true });
app.use(express.static(__dirname + '/public'));
app.use(express.bodyParser());
app.use(express.limit('1mb'));

app.get('/', function(req, res) {
  res.render('index', { pageTitle: 'Blog', id: 0, bodyID: 'body_blog'});
});
app.get('/:id(\\d+)*', function(req, res, next) {
  if (req.params.id == 0) {
    next(new Error('Could not find blog ID ' + req.params.id));
    return;
  }
  res.render('index', { pageTitle: 'Blog', id: req.params.id, bodyID: 'body_blog'});
});

app.get('/compression', function(req, res) {
  res.render('compression', { pageTitle: 'Compression', bodyID: 'body_compression' });
});
app.get('/compression/huffman', function(req, res) {
  res.render('huffman', { pageTitle: 'Huffman', bodyID: 'body_compression' });
});
app.get('/compression/BWT', function(req, res) {
  res.render('BWT', { pageTitle: 'BWT', bodyID: 'body_compression' });
});
app.get('/compression/PPM', function(req, res) {
  res.render('PPM', { pageTitle: 'PPM', bodyID: 'body_compression' });
});
app.get('/math', function(req, res) {
  res.render('math', { pageTitle: 'Mathematics', bodyID: 'body_math' });
});
app.get('/math/pi', function(req, res) {
  res.render('pi', { pageTitle: 'Mathematics - Pi', bodyID: 'body_math' });
});
app.get('/math/primes', function(req, res) {
  res.render('primes', { pageTitle: 'Mathematics - Primes', bodyID: 'body_math' });
});
app.get('/math/numberTheory', function(req, res) {
  res.render('number_theory', { pageTitle: 'Mathematics - Number Theory', bodyID: 'body_math' });
});
app.get('/math/graphTheory', function(req, res) {
  res.render('graph_theory', { pageTitle: 'Mathematics - Graph Theory', bodyID: 'body_math' });
});
app.get('/math/mathTricks', function(req, res) {
  res.render('math_tricks', { pageTitle: 'Mathematics - Math Tricks', bodyID: 'body_math' });
});
app.get('/mozilla', function(req, res) {
  res.render('mozilla', { pageTitle: 'Mozilla', bodyID: 'body_mozilla' });
});
app.get('/mozilla/new', function(req, res) {
  res.render('mozilla_new', { pageTitle: 'New to Mozilla', bodyID: 'body_mozilla' });
});
app.get('/mozilla/cheatsheet', function(req, res) {
  res.render('mozilla_cheatsheet', { pageTitle: 'Mozilla Development Cheatsheet', bodyID: 'body_mozilla' });
});
app.get('/stackexchange', function(req, res) {
  res.render('stackexchange', { pageTitle: 'StackExchange', bodyID: 'body_stackexchange' });
});
app.get('/khanacademy', function(req, res) {
  res.render('khanacademy', { pageTitle: 'Khan Academy', bodyID: 'body_khanacademy' });
});
app.get('/khanacademy/cheatsheet', function(req, res) {
  res.render('khanacademy_cheatsheet', { pageTitle: 'Khan Academy', bodyID: 'body_khanacademy' });
});
app.get('/projects', function(req, res) {
  res.render('projects', { pageTitle: 'Projects', bodyID: 'body_projects' });
});
app.get('/resume', function(req, res) {
  res.render('resume', { pageTitle: 'Resume', bodyID: 'body_resume' });
});
app.get('/about', function(req, res) {
  res.render('about', { pageTitle: 'About', bodyID: 'body_about' });
});
app.get('/contact', function(req, res) {
  res.render('contact', { pageTitle: 'Contact', bodyID: 'body_contact' });
});
app.get('/other', function(req, res) {
  res.render('other', { pageTitle: 'Other', bodyID: 'body_other' });
});
app.get('/other/faq', function(req, res) {
  res.render('faq', { pageTitle: 'FAQ', bodyID: 'body_other' });
});
app.get('/other/advice', function(req, res) {
  res.render('advice', { pageTitle: 'Advice', bodyID: 'body_other' });
});
app.get('/other/articles', function(req, res) {
  res.render('articles', { pageTitle: 'Articles', bodyID: 'body_other' });
});
app.get('/other/books', function(req, res) {
  res.render('books', { pageTitle: 'Books', bodyID: 'body_other' });
});
app.get('/other/braille', function(req, res) {
  res.render('braille', { pageTitle: 'Brailled', bodyID: 'body_other' });
});
app.get('/other/links', function(req, res) {
  res.render('links', { pageTitle: 'Links', bodyID: 'body_other' });
});
app.get('/other/morseCode', function(req, res) {
  res.render('morse_code', { pageTitle: 'Links', bodyID: 'body_other' });
});
app.get('/other/universityClasses', function(req, res) {
  res.render('university_classes', { pageTitle: 'Links', bodyID: 'body_other' });
});
app.get('/other/whatsMyIP', function(req, res) {
  res.render('whats_my_ip', { pageTitle: 'Links', bodyID: 'body_other' });
});
app.listen(8088);

