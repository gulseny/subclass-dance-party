var MovingDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
};

MovingDancer.prototype = Object.create(Dancer.prototype);

MovingDancer.prototype.constructor = MovingDancer;

MovingDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);

  var top = this.$node.css('top');
  var newTop = parseInt(top);
  newTop += Math.round(Math.random() * 20 - 10);
  this.$node.css('top', newTop);

  var left = this.$node.css('left');
  var newleft = parseInt(left);
  newleft += Math.round(Math.random() * 20 - 10);
  this.$node.css('left', newleft);

};
