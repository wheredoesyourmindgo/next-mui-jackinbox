!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n(require("react"),require("clsx"),require("@material-ui/core")):"function"==typeof define&&define.amd?define(["react","clsx","@material-ui/core"],n):(e||self).muiJackinbox=n(e.react,e.clsx,e.core)}(this,function(e,n,i){function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=t(e),r=t(n);function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t])}return e}).apply(this,arguments)}var d=["children","className","animate","name","prefix","hideUntilAnimate","noDisplayUntilAnimate","hideAfterAnimate","noDisplayAfterAnimate","delayBy","speedBy","repeatBy","speed","infinite","delay","repeat","onAnimateEnd"],l=i.makeStyles(function(){return i.createStyles({root:function(e){return o({"--animate-delay":e.delayBy,"--animate-duration":e.speedBy,"--animate-repeat":e.repeatBy},e.hidden&&{visibility:"hidden"},e.noDisplay&&{display:"none"})}})});return function(n){var t,s=n.children,u=n.className,f=n.animate,y=void 0===f||f,p=n.name,c=n.prefix,m=void 0===c?"animate__":c,v=n.hideUntilAnimate,h=void 0!==v&&v,A=n.noDisplayUntilAnimate,B=void 0!==A&&A,b=n.hideAfterAnimate,x=void 0!==b&&b,g=n.noDisplayAfterAnimate,D=void 0!==g&&g,j=n.delayBy,O=void 0===j?"1s":j,k=n.speedBy,E=void 0===k?"1s":k,S=n.repeatBy,U=void 0===S?1:S,q=n.speed,N=n.infinite,P=n.delay,T=void 0!==P&&P,_=n.repeat,w=void 0!==_&&_,C=n.onAnimateEnd,J=function(e,n){if(null==e)return{};var i,t,a={},r=Object.keys(e);for(t=0;t<r.length;t++)n.indexOf(i=r[t])>=0||(a[i]=e[i]);return a}(n,d),z=!0===T?1:T,F=!0===w?1:w,G=e.useState(!!h&&!y),H=G[0],I=G[1],K=e.useState(!!B&&!y),L=K[1],M=l({hidden:H,noDisplay:K[0],delayBy:O,speedBy:E,repeatBy:U}),Q=e.useCallback(function(e){x&&I(!0),D&&L(!0),null==C||C(e),null==e||e.stopPropagation()},[C,x,D]);return a.default.createElement(i.Box,o({className:r.default([(t={},t[m+"animated"]=y,t[""+m+p]=y&&p,t[""+m+q]=y&&q,t[m+"infinite"]=y&&N,t[m+"repeat-"+F]=y&&F,t[m+"delay-"+z+"s"]=y&&z,t),M.root,u]),onAnimationEnd:Q},J),s)}});
//# sourceMappingURL=index.umd.js.map
