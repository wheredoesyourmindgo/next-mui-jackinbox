import e,{useState as n,useCallback as t,useEffect as a}from"react";import i from"clsx";import{makeStyles as r,createStyles as o,Box as l}from"@material-ui/core";function p(){return(p=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}const d=["children","className","animate","name","prefix","hideUntilAnimate","noDisplayUntilAnimate","hideAfterAnimate","noDisplayAfterAnimate","delayBy","speedBy","repeatBy","speed","infinite","delay","repeat","onAnimateEnd","onAnimateStart"],m="animate__",s=r(()=>o({root:({hidden:e,noDisplay:n,delayBy:t,speedBy:a,repeatBy:i})=>p({"--animate-delay":t,"--animate-duration":a,"--animate-repeat":i},e&&{visibility:"hidden"},n&&{display:"none"})}));function y(r){let{children:o,className:y,animate:f=!0,name:c,prefix:A=m,hideUntilAnimate:u=!1,noDisplayUntilAnimate:h=!1,hideAfterAnimate:B=!1,noDisplayAfterAnimate:$=!1,delayBy:D="1s",speedBy:g="1s",repeatBy:v=1,speed:x,infinite:O,delay:b=!1,repeat:E=!1,onAnimateEnd:U,onAnimateStart:j}=r,N=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n.indexOf(t=r[a])>=0||(i[t]=e[t]);return i}(r,d);const P=!0===b?1:b,S=!0===E?1:E,[_,k]=n(!!u&&!f),[w,q]=n(!!h&&!f),z=s({hidden:_,noDisplay:w,delayBy:D,speedBy:g,repeatBy:v}),C=t(e=>{B&&k(!0),$&&q(!0),null==U||U(e),null==e||e.stopPropagation()},[U,B,$]);a(()=>{f&&(u&&k(!1),h&&q(!1))},[f,u,h]);const F=t(e=>{null==j||j(e),null==e||e.stopPropagation()},[j]);return e.createElement(l,p({className:i([{[`${A}animated`]:f,[`${A}${c}`]:f&&c,[`${A}${x}`]:f&&x,[`${A}infinite`]:f&&O,[`${A}repeat-${S}`]:f&&S,[`${A}delay-${P}s`]:f&&P},z.root,y]),onAnimationEnd:C,onAnimationStart:F},N),o)}export default y;
//# sourceMappingURL=index.modern.js.map
