define(["marionette.custom","collections/articles","views/approve_article/articles","views/common/article_edit_modal"],function(e,t,n,r){var i=e.Layout.extend({template:function(){},events:{},ui:{articles:".js-articles"},initialize:function(){this.articles=new t},onRender:function(){var e=this;this.articlesView=new n({collection:this.articles,el:this.ui.articles}),this.articlesView.render(),this.articles.fetch({data:{is_active:0}}).success(function(){})}});return i});