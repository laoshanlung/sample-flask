define(["underscore.custom","marionette.custom"],function(e,t){return t.View.extend({render:function(){var t=this,n=$(this.template).html();n=$(e.template(n,this.serializeData())),$("body").append(n),this.setElement(n),this.$el.modal();var r=["shown","show","hidden","hide","loaded"];e.each(r,function(e){this.$el.on(e+".bs.modal",function(){t.triggerMethod(e)})},this),this.$el.on("hidden.bs.modal",function(){t.$el.remove()}),this.triggerMethod("render")},serializeData:function(){return{model:this.model}},hide:function(){this.$el.modal("hide")},show:function(){this.$el.modal("show")}})});