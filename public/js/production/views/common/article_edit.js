define(["marionette.custom","views/common/markdown_editor","views/common/text_input","views/common/tags_input"],function(e,t,n,r){var i=e.ItemView.extend({template:"#article-edit-template",events:{},initialize:function(){},ui:{tags:".js-tags",title:".js-title",content:".js-content"},serializeData:function(){return{model:this.model}},onRender:function(){var e=this;this.markdownEditor=new t({el:this.ui.content,model:this.model,attribute:"content"}),this.markdownEditor.render(),this.textInput=new n({el:this.ui.title,model:this.model,attribute:"title"}),this.textInput.render(),this.tagsInput=new r({el:this.ui.tags,model:this.model,attribute:"tags",set:"setTags",get:"generateTagArray"}),this.tagsInput.render()}});return i});