define(["marionette.custom","libs/rivets"],function(e,t){var n=e.ItemView.extend({template:"#topic-template",className:"topic",events:{},initialize:function(){},ui:{tags:".js-tags"},serializeData:function(){return{model:this.model}},onRender:function(){var e=this;t.bind(this.$el,{model:this.model})}});return n});