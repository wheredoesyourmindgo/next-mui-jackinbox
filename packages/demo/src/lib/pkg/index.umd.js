!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n(require("react"),require("clsx"),require("@material-ui/core")):"function"==typeof define&&define.amd?define(["react","clsx","@material-ui/core"],n):(e||self).muiJackinbox=n(e.react,e.clsx,e.core)}(this,function(e,n,i){function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=t(e),r=t(n);function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t])}return e}).apply(this,arguments)}var l=i.makeStyles(function(){return i.createStyles({root:function(e){return o({"--animate-delay":e.delayBy,"--animate-duration":e.speedBy,"--animate-repeat":e.repeatBy},e.hidden&&{visibility:"hidden"},e.noDisplay&&{display:"none"})}})});return function(n){var t,d=n.children,s=n.className,u=n.animate,y=void 0===u||u,f=n.name,c=n.prefix,p=void 0===c?"animate__":c,m=n.hideUntilAnimate,v=void 0!==m&&m,h=n.noDisplayUntilAnimate,B=void 0!==h&&h,b=n.delayBy,x=void 0===b?"1s":b,A=n.speedBy,g=void 0===A?"1s":A,j=n.repeatBy,O=void 0===j?1:j,k=n.speed,D=n.infinite,E=n.delay,U=void 0!==E&&E,q=n.repeat,N=void 0!==q&&q,P=n.onAnimateEnd,S=function(e,n){if(null==e)return{};var i,t,a={},r=Object.keys(e);for(t=0;t<r.length;t++)n.indexOf(i=r[t])>=0||(a[i]=e[i]);return a}(n,["children","className","animate","name","prefix","hideUntilAnimate","noDisplayUntilAnimate","delayBy","speedBy","repeatBy","speed","infinite","delay","repeat","onAnimateEnd"]),T=l({hidden:!!v&&!y,noDisplay:!!B&&!y,delayBy:x,speedBy:g,repeatBy:O}),_=!0===U?1:U,w=!0===N?1:N,C=e.useCallback(function(e){null==P||P(e),null==e||e.stopPropagation()},[P]);return a.default.createElement(i.Box,o({className:r.default([(t={},t[p+"animated"]=y,t[""+p+f]=y&&f,t[""+p+k]=y&&k,t[p+"infinite"]=y&&D,t[p+"repeat-"+w]=y&&w,t[p+"delay-"+_+"s"]=y&&_,t),T.root,s]),onAnimationEnd:C},S),d)}});
//# sourceMappingURL=index.umd.js.map
