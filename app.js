
angular.directive('ng:enterkeydown', function(expression, compiledElement) {
    var compiler = this;
    return function(linkElement) {
        var currentScope = this;
        linkElement.bind('keydown', function(event){
          if (event.which == 13) {
            currentScope.$tryEval(expression);
          }
          event.stopPropagation();
        });
    };
});

function ExpList() {
  var scope = this;
  scope.$onEval('evaluateExpressions()');
  scope.expressions = initialExpressions.map(function (el) {
    return {expression: el};
  });
  scope.evaluateExpressions = function () {
    scope.expressions.forEach(function (el) {
      try {
        el.result = eval("with (Math) {" + el.expression + "}");
      }
      catch (error) {
        el.result = "error (" + error + ")";
      }
    });
  };
  scope.addExpression = function () {
    scope.expressions.push({expression: scope.placeholder});
    scope.placeholder = '';
  };
  scope.clear = function () {
    scope.expressions = [];
  };
}

function Help() {
  var scope = this;
  scope.urlBase = 'http://www.w3schools.com/jsref/';
  scope.constants = constants;
  scope.functions = functions;
}
