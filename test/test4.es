!function(){
  if (Error.restorePrepareStackTrace)
    return;

  var oldPrepareStackTrace = Error.prepareStackTrace;

  Error.restorePrepareStackTrace = function restorePrepareStackTrace(){
    Error.prepareStackTrace = oldPrepareStackTrace;
    delete Error.restorePrepareStackTrace;
  };

  Error.prepareStackTrace = function prepareStackTrace(e, callsites){
    return callsites.map(function(callsite){
      return new StackFrame(callsite);
    });
  };

  function StackFrame(callsite){
    this.function = callsite.getFunction();
    this.name = callsite.getFunctionName();
    this.inferredName = callsite.getMethodName();
    this.invocationType = callsite.isConstructor() ? 'construct' : 'call';
    try { this.arguments = [].slice.call(this.function.arguments); } catch (e) {}
    this.receiver =  callsite.getThis();
    this.inferredType = callsite.getTypeName();
    if (callsite.isEval()) {
      this.type = 'eval';
      this.origin = callsite.getEvalOrigin();
    } else if (callsite.isNative()) {
      this.type = 'native';
      this.origin = callsite.getFileName().slice(7);
    } else {
      this.type = 'file';
      this.origin = callsite.getFileName();
    }
    this.line = callsite.getLineNumber();
    this.column = callsite.getColumnNumber();
    this.position = callsite.getPosition();
  }
}();


!function test(){
  try { throw new Error('hi') } catch (e) { console.log(e.stack) }
}();
