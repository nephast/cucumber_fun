module.exports = function() {
  this.Before(function(callback) {
    this.doBeforeScenario();
callback();
});
this.After(function(callback) {
  this.doAfterScenario();
callback();
});
};

module.exports = function() {
  this.Before(function(scenario, callback) {
    this.doBeforeScenario();
console.log(scenario.getName(), '(' + scenario.getUri() + ':' + scenario.getLine() + ')');
callback();
});
this.After(function(scenario, callback) {
  this.doAfterScenario();
console.log(scenario.getName(), '(' + scenario.getUri() + ':' + scenario.getLine() + ')');
callback();
});
};

module.exports = function() {
  this.Before('@tag2', function(callback) {
    this.doBeforeScenario();
callback();
});
this.After('@tag3', function(callback) {
  this.doAfterScenario();
callback();
});
return;
module.exports = function() {};
this.registerHandler('AfterFeature', function(event, callback) {
  console.log('After feature cleanup code');
callback();
});
};

module.exports = function() {
  this.Around(function(runScenario) {
    this.doBeforeScenario();
runScenario(function(callback) {
  this.doAfterScenario();
callback();
});
});
};

// ---
// generated by coffee-script 1.9.2