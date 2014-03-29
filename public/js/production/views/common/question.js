define(["marionette.custom","forms/question_display","forms/comment_edit","models/comment"],function(e,t,n,r){var i=e.ItemView.extend({template:"#question-template",className:"question preview",events:{"click .js-vote-up":"onVoteUp","click .js-vote-down":"onVoteDown","click .js-show-comment-form":"onClickShowCommentForm","click .js-send-comment":"onSend"},initialize:function(){this.form=new t({model:this.model}),this.comment=new r({question_id:this.model.id}),this.commentForm=new n({model:this.comment})},ui:{tags:".js-tags",title:".js-title",content:".js-content",author:".js-author",sidebar:".js-sidebar",votePoints:".js-vote-points",voteUp:".js-vote-up",voteDown:".js-vote-down",answerCount:".js-answer-count",commentList:".js-comment-list",commentForm:".js-comment-form",sendComment:".js-send-comment"},serializeData:function(){return{model:this.model,form:this.form}},onRender:function(){var e=this;this.form.buildControl("title",this.ui.title),this.form.buildControl("content",this.ui.content),this.form.buildControl("user.name",this.ui.author),this.form.buildControl("tags",this.ui.tags),this.form.buildControl("points",this.ui.votePoints),this.form.buildControl("answer_count",this.ui.answerCount)},onVoteUp:function(e){var t=$(e.currentTarget);this._vote(!0,t)},onVoteDown:function(e){var t=$(e.currentTarget);this._vote(!1,t)},_vote:function(e,t){var n=t.hasClass("voted");this.$(".voted").removeClass("voted"),n?this.model.unvote().success(function(){}):this.model.vote(e).success(function(){t.addClass("voted")})},onClickShowCommentForm:function(e){$(e.currentTarget).remove(),this.ui.sendComment.removeClass("hide"),this.commentForm.buildControl("content",this.ui.commentForm,{height:100})},onSend:function(e){var t=this,n=$(e.currentTarget);n.bsbutton("loading"),this.comment.save().complete(function(){n.bsbutton("reset")}).success(function(){t.commentForm.getControl("content").markdownEditor.setValue(""),t.comment.id=void 0})}});return i});