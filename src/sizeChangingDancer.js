var SizeChangingDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);  
};

SizeChangingDancer.prototype = Object.create(Dancer.prototype);

SizeChangingDancer.prototype.constructor = SizeChangingDancer;

SizeChangingDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  this.$node.css('border-width', Math.round(Math.random() * 100));
};
