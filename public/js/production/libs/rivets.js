define(["underscore.custom","vendors/rivets"],function(e,t){return t.adapters[":"]={subscribe:function(e,t,n){e.on("change:"+t,n)},unsubscribe:function(e,t,n){e.off("change:"+t,n)},read:function(e,t){return e.get(t)},publish:function(e,t,n){e.set(t,n)}},t.formatters.tags=function(t){var n='<span class="label label-success"><a href="/tags/<%= tag %>.html" style="color: rgb(255, 255, 255);"><%= tag %></a></span>',r=t.map(function(t){return e.template(n,{tag:t.get("name")})});return r.join(" ")},t});