define([],function(){return{get:"get",set:"set",getModelValue:function(){var e=this.getOption("attribute"),t=this.getOption("get");return this.model[t](e)},setModelValue:function(e){this.triggerMethod("change",e);var t=this.getOption("attribute"),n=this.getOption("set");return this.model[n](t,e)}}});