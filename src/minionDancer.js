var MinionDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);

  this.$node.css('background-image', this.randomMinion());

  this.$node.css('background-size', '100%');
  this.$node.css('border-width', '0px');
  this.$node.css('width', '100px');
  this.$node.css('height', '100px');
};

MinionDancer.prototype = Object.create(Dancer.prototype);

MinionDancer.prototype.constructor = MinionDancer;

MinionDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);

  var top = this.$node.css('top');
  var newTop = parseInt(top);
  newTop += Math.round(Math.random() * 40 - 20);
  this.$node.css('top', newTop);

  var left = this.$node.css('left');
  var newleft = parseInt(left);
  newleft += Math.round(Math.random() * 4 - 2);
  this.$node.css('left', newleft);

};

MinionDancer.prototype.randomMinion = function() {
  var minions = [
    "url(images/minion_arms-up.png)", 
    "url(images/minion_fruit.png)", 
    "url(images/minion_hula.png)", 
    "url(images/minion_kicking.png)", 
    "url(images/minion_tongue.png)", 
    "url(images/minion_waving.png)"
  ];
  var randomNumber = Math.round(Math.random() * minions.length);
  return minions[randomNumber]; 
};