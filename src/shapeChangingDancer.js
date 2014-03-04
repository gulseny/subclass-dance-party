var ShapeChangingDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);  
};

ShapeChangingDancer.prototype = Object.create(Dancer.prototype);

ShapeChangingDancer.prototype.constructor = ShapeChangingDancer;

ShapeChangingDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  this.$node.css('border-radius', Math.round(Math.random() * 10));
};
