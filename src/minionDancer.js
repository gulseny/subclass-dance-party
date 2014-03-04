var MinionDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.css('background-image', 'url(images/minion_fruit.png)');
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
