var ColorfulDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);  
};

ColorfulDancer.prototype = Object.create(Dancer.prototype);

ColorfulDancer.prototype.constructor = ColorfulDancer;

ColorfulDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  this.$node.css('border-color', getRandomColor());
};

var getRandomColor = function() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.round(Math.random() * 15)];
    }
    console.log(color);
    return color;
};
