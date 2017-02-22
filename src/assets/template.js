var Assets = {};
<% Object.keys(assets).forEach(function(key){%>
Assets['<%= key %>'] = '<%= this[key] %>';
<% }, assets); %> 
