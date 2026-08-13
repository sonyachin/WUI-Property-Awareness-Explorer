System.register(["jimu-core/emotion","jimu-core","jimu-for-builder","jimu-ui","jimu-layouts/layout-runtime","jimu-theme","jimu-ui/basic/list-tree"],function(e,t){var o={},n={},i={},l={},r={},a={},s={};return{setters:[function(e){o.jsx=e.jsx,o.jsxs=e.jsxs},function(e){n.AppMode=e.AppMode,n.Immutable=e.Immutable,n.LayoutType=e.LayoutType,n.React=e.React,n.ReactRedux=e.ReactRedux,n.WIDGET_PREFIX_FOR_A11Y_SKIP=e.WIDGET_PREFIX_FOR_A11Y_SKIP,n.classNames=e.classNames,n.css=e.css,n.getAppStore=e.getAppStore,n.hooks=e.hooks,n.i18n=e.i18n,n.lodash=e.lodash,n.polished=e.polished},function(e){i.getAppConfigAction=e.getAppConfigAction},function(e){l.Button=e.Button,l.NavButtonGroup=e.NavButtonGroup,l.Navigation=e.Navigation,l.PageNumber=e.PageNumber,l.Slider=e.Slider,l.TextAlignValue=e.TextAlignValue,l.Tooltip=e.Tooltip,l.defaultMessages=e.defaultMessages,l.utils=e.utils},function(e){r.LayoutItemSizeModes=e.LayoutItemSizeModes},function(e){a.ThemeSwitchComponent=e.ThemeSwitchComponent,a.getBoxStyles=e.getBoxStyles,a.getTheme=e.getTheme,a.getThemeModule=e.getThemeModule,a.mapping=e.mapping,a.useTheme=e.useTheme,a.useTheme2=e.useTheme2,a.useUseTheme2=e.useUseTheme2},function(e){s.List=e.List}],execute:function(){e((()=>{var e={22697(e){e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path fill="#000" fill-rule="evenodd" d="M1.25 2.5h17.5v11.25H1.25zM0 2.5c0-.69.56-1.25 1.25-1.25h17.5c.69 0 1.25.56 1.25 1.25v11.25c0 .69-.56 1.25-1.25 1.25H1.25C.56 15 0 14.44 0 13.75zm3.75 16.25h2.5V17.5h-2.5zm7.5 0h-2.5V17.5h2.5zm2.5 0h2.5V17.5h-2.5z" clip-rule="evenodd"></path></svg>'},60085(e){e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M11.347 2.146a.485.485 0 0 1 0 .708L5.76 8l5.587 5.146a.486.486 0 0 1 0 .708.54.54 0 0 1-.738 0l-5.956-5.5a.485.485 0 0 1 0-.708l5.956-5.5a.54.54 0 0 1 .738 0" clip-rule="evenodd"></path></svg>'},16024(e){e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M4.653 13.854a.485.485 0 0 1 0-.708L10.24 8 4.653 2.854a.485.485 0 0 1 0-.708.54.54 0 0 1 .738 0l5.956 5.5a.485.485 0 0 1 0 .708l-5.956 5.5a.54.54 0 0 1-.738 0" clip-rule="evenodd"></path></svg>'},11595(e){e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="m8.745 8 6.1 6.1a.527.527 0 1 1-.745.746L8 8.746l-6.1 6.1a.527.527 0 1 1-.746-.746l6.1-6.1-6.1-6.1a.527.527 0 0 1 .746-.746l6.1 6.1 6.1-6.1a.527.527 0 0 1 .746.746z"></path></svg>'},66610(e){e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 6"><circle cx="1104" cy="1049" r="3" fill="#000" fill-rule="nonzero" transform="translate(-1101 -1046)"></circle></svg>'},79244(e){"use strict";e.exports=n},67386(e){"use strict";e.exports=o},4108(e){"use strict";e.exports=i},41496(e){"use strict";e.exports=r},1888(e){"use strict";e.exports=a},14321(e){"use strict";e.exports=l},98640(e){"use strict";e.exports=s}},t={};function d(o){var n=t[o];if(void 0!==n)return n.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,d),i.exports}d.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return d.d(t,{a:t}),t},d.d=(e,t)=>{for(var o in t)d.o(t,o)&&!d.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},d.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),d.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.p="";var u={};return d.p=window.jimuConfig.baseUrl,(()=>{"use strict";d.r(u),d.d(u,{default:()=>V});var e,t=d(67386),o=d(79244),n=d(4108);!function(e){e.Auto="AUTO",e.Custom="CUSTOM"}(e||(e={}));var i=d(14321),l=d(41496);d(22697);const r=e=>{var t,o;return"nav"===(null==e?void 0:e.type)&&!(null===(t=null==e?void 0:e.standard)||void 0===t?void 0:t.alternateIcon)&&!(null===(o=null==e?void 0:e.standard)||void 0===o?void 0:o.activedIcon)};var a=d(1888);const s={_widgetLabel:"Views Navigation",widgetPlaceholder:"Please link to a Section to use this widget.",widgetPlaceholderWithNoView:"Please select a view to use this widget.",tabDefault:"Tab default",tabUnderline:"Tab underline",tabPills:"Tab pills",arrow1:"Arrow 1",arrow2:"Arrow 2",arrow3:"Arrow 3"};const{useEffect:c,useMemo:v,useCallback:p}=o.React,{useSelector:m,useDispatch:g}=o.ReactRedux,b=d(66610),h=d(60085),x=d(16024),y=e=>{if(!(null==e?void 0:e.value))return"";const t=e.value.split(",");return(null==t?void 0:t.length)?t[1]:""},f=e=>{var t,n,i,l;const{borderTop:r,borderBottom:a,borderLeft:s,borderRight:d}=e;return o.css`
    ${r&&`\n      border-top-width: ${r.width};\n      ${r.width&&`border-top-style: ${null!==(t=null==r?void 0:r.type)&&void 0!==t?t:"solid"};`}\n      border-top-color: ${r.color};\n    `}
    ${a&&`\n      border-bottom-width: ${a.width};\n      ${a.width&&`border-bottom-style: ${null!==(n=null==a?void 0:a.type)&&void 0!==n?n:"solid"};`}\n      border-bottom-color: ${a.color};\n    `}
    ${s&&`\n      border-left-width: ${s.width};\n      ${s.width&&`border-left-style: ${null!==(i=null==s?void 0:s.type)&&void 0!==i?i:"solid"};`}\n      border-left-color: ${s.color};\n    `}
    ${d&&`\n      border-right-width: ${d.width};\n      ${d.width&&`border-right-style: ${null!==(l=null==d?void 0:d.type)&&void 0!==l?l:"solid"};`}\n      border-right-color: ${d.color};\n    `}
  `},w=(e,t)=>{var n,i;const l=t?".jimu-nav-link-wrapper":"&.direction-button";return`\n    font-size: ${(null==e?void 0:e.size)?`${o.polished.rem(e.size)}!important`:""};\n    ${e.icon&&`${l} > .jimu-icon, .jimu-icon-img {\n      ${(null===(n=null==e?void 0:e.icon)||void 0===n?void 0:n.size)&&`\n        width: ${o.polished.rem(e.icon.size)};\n        height: ${o.polished.rem(e.icon.size)};\n      `};\n      ${(null===(i=null==e?void 0:e.icon)||void 0===i?void 0:i.color)&&`color: ${e.icon.color}`};\n    }`}\n `},$=(e,t)=>{var n,i,l,r,a,s;if(!e)return;const d=null===(n=null==e?void 0:e.item)||void 0===n?void 0:n.default,u=(null==d?void 0:d.merge((null===(i=null==e?void 0:e.item)||void 0===i?void 0:i.hover)||{},{deep:!0}))||(null===(l=null==e?void 0:e.item)||void 0===l?void 0:l.hover),c=(null==d?void 0:d.merge((null===(r=null==e?void 0:e.item)||void 0===r?void 0:r.active)||{},{deep:!0}))||(null===(a=null==e?void 0:e.item)||void 0===a?void 0:a.active),v=null===(s=null==e?void 0:e.item)||void 0===s?void 0:s.disabled;return o.css`
    .jimu-button {
      ${d&&`&:not(:hover):not(.active):not(:disabled):not(.disabled) {\n        ${w(d,t)}\n      }`}
      ${u&&`&:not(:disabled):not(.disabled):hover {\n        ${w(u,t)}\n      }`}
      ${c&&`\n        &:not(:disabled):not(.disabled).active,\n        &[aria-expanded="true"] {\n          ${w(c,t)}\n        }\n        &:not(:disabled):not(.disabled) {\n          cursor: pointer;\n        }\n      `}
      ${v&&`\n        &.disabled,\n        &:disabled {\n          ${w(v,t)}\n        }\n      `}
    }
  `},T=(e,t,n,i)=>{var l,r;return o.css`
    .jimu-nav{
      ${(null===(l=null==t?void 0:t.root)||void 0===l?void 0:l.bg)&&`background-color: ${t.root.bg};`}
      border-radius: ${(null===(r=null==t?void 0:t.root)||void 0===r?void 0:r.borderRadius)||"0px"};
      ${(e=>{if(!(null==e?void 0:e.item))return null;const{default:t,hover:n,active:i}=e.item,l=(null==t?void 0:t.merge(n||{},{deep:!0}))||n,r=(null==t?void 0:t.merge(i||{},{deep:!0}))||i;return o.css`
    .nav-item>.nav-link {
      ${t&&o.css`
        &:not(:hover):not(.active):not(:disabled):not(.disabled) {
          ${(0,a.getBoxStyles)(t)}
          ${f(t)}
        }
      `};
      ${l&&o.css`
        &:hover:not(.active),
        &[aria-expanded="true"] {
          ${(0,a.getBoxStyles)(l)};
          ${f(l)}
        }
      `}
      ${r&&o.css`
        &:not(:disabled):not(.disabled).active {
          ${(0,a.getBoxStyles)(r)}
          ${f(r)}
        }
      `}
    }
  `})(t)}
      ${((e,t)=>{const n=t?"right":"bottom",i=["top","bottom","left","right"].map(e=>n===e?"":`border-${e}-width: 0 !important;`).join("");return o.css`
    ${"underline"===e&&`\n      &.nav-underline {\n        ${i}\n        .nav-link {\n          ${i}\n        }\n        ${t&&`\n          .nav-item {\n            margin-right: -1px;\n          }\n          .nav-link {\n            ${i}\n          }\n        `}\n    `}
  `})(e,n)}
      ${$(t,!0)}
      ${(e=>{if(!e)return null;const{default:t,hover:n,disabled:i}=e;return o.css`
    .jimu-nav-button-group {
      .jimu-page-item {
        .direction-button {
          ${t&&`&:not(:hover):not(:disabled) {\n            color: ${t};\n          }`}
          ${n&&`&:hover {\n            color: ${n};\n          }`}
          ${i&&`&:disabled {\n            color: ${i};\n          }`}
        }
      }
    }
  `})(i)}
    }
`},j=e=>{var t;return o.css`
    .nav-button-group {
      ${(null===(t=null==e?void 0:e.root)||void 0===t?void 0:t.bg)&&`background-color: ${e.root.bg};`}
      .jimu-button {
        &.previous,
        &.next {
          ${(null==e?void 0:e.item)&&(e=>{if(!(null==e?void 0:e.item))return null;const{default:t,hover:n,disabled:i}=e.item,l=(null==t?void 0:t.merge(n||{},{deep:!0}))||n;return o.css`
    ${t&&o.css`
      &:not(:hover):not(:disabled):not(.disabled) {
        ${(0,a.getBoxStyles)(t)}
        ${f(t)}
      }
    `};
    ${l&&o.css`
      &:hover:not(:disabled):not(.disabled),
      &[aria-expanded="true"] {
        ${(0,a.getBoxStyles)(l)};
        ${f(l)}
      }
    `}
    ${i&&o.css`
      &.disabled,
      &:disabled {
        &,
        &:hover {
          ${(0,a.getBoxStyles)(i)}
          ${f(i)}
        }
      }`}
  `})(e)}
        }
      }
      ${$(e,!1)}
    }
 `},I=(e,t,n)=>{var i,l,r,a,s;const{track:d,thumb:u,progress:c}=e||{},v=(null==d?void 0:d.bg)||"var(--sys-color-divider-secondary)",p=(null===(i=null==u?void 0:u.default)||void 0===i?void 0:i.bg)||"var(--sys-color-primary-text)",m=(null===(r=null===(l=null==u?void 0:u.default)||void 0===l?void 0:l.border)||void 0===r?void 0:r.color)||"var(--sys-color-action-selected)",g=(null===(a=null==c?void 0:c.default)||void 0===a?void 0:a.bg)||"var(--sys-color-action-selected)",b=`\n    visibility: ${t?"hidden":"visible"};\n    background-color: ${p};\n    border-width: 2px;\n    border-style: solid;\n    border-color: ${m};\n    box-sizing: border-box;\n    transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out; /* $btn-transition */\n    &:hover {\n      border-color: ${g};\n    }\n  `;return o.css`
    ${(null===(s=null==e?void 0:e.root)||void 0===s?void 0:s.bg)&&`background-color: ${e.root.bg};`}
    .jimu-slider {
      display: block;
      width: 100%;
      -webkit-appearance: none;
      -moz-appearance: none;
      &:focus,
      &:active {
        outline: none;
      }
      &::-moz-focus-outer {
        border: none;
        outline: none;
      }
      padding: 0;
      cursor: pointer;
      &.rtl {
        transform: rotate(180deg);
      }

      &[type="range"] {
      /* thumb - webkit */
      &::-webkit-slider-thumb {
        -webkit-appearance: none;
        ${b}
      }
      /* thumb - moz */
      &::-moz-range-thumb {
        -moz-appearance: none;
        ${b}
      }
      /* thumb - ms */
      &::-ms-thumb {
        margin-top: 0;
        ${b}
      }
      /* track - webkit */
      &::-webkit-slider-runnable-track {
        border-radius: 50rem;
        background: linear-gradient(to ${n?"left":"right"}, ${g}, ${g}) ${v} no-repeat left;
        background-size: 50% 100%, 100% 100%;
      }
      /* track - moz */
      &::-moz-range-track {
        border-radius: 50rem;
        background-color: ${v};
      }
      /* track - ms */
      &::-ms-track {
        border-radius: 50rem;
        background-color: ${v};
      }
      /* fill - moz */
      &::-moz-range-progress {
        border-radius: 50rem;
        background-color: ${g};
      }
      /* fill - ms */
      &::-ms-fill-lower {
        border-radius: 50rem;
        background-color: ${g};
      }
      &::-ms-fill-upper {
        display: none;
      }
      /* tooltip - ms */
      &::-ms-tooltip {
        display: none;
      }
      &:focus {
        &::-webkit-slider-thumb {
          box-shadow: 0 0 0 2px ${p}, 0 0 0 3px ${m};
        }
        &::-moz-range-thumb {
          box-shadow: 0 0 0 2px ${p}, 0 0 0 3px ${m};
        }
      }
    }
  }
 `},S=e=>{var t,o;const{type:n,navStyle:i}=e||{},{showIcon:l,showText:r,alternateIcon:a,showPageNumber:s}=null!==(t=null==e?void 0:e.standard)&&void 0!==t?t:{};if("nav"===n){const{filename:e}=null!==(o=null==a?void 0:a.properties)&&void 0!==o?o:{};return`${n}-${i}-${l?"showIcon":"hideIcon"}-${r?"showText":"hideText"}-icon-${e}`}if("navButtonGroup"===n)return`${n}-${i}-${s?"showPageNumber":""}`};var k=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(o[n[i]]=e[n[i]])}return o};const C=o.css`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  .nav-button-group .jimu-page-number .page-span.current-page {
    color: inherit !important;
  }
  .nav-button-group {
    .jimu-page-link-outlined:disabled {
      &, &:hover {
        background-color: var(--sys-color-action-disabled);
        border-color: var(--sys-color-divider-secondary);
      }
    }
  }
`,A=e=>{const{className:n,data:l,progress:s=0,type:d,navStyle:u,vertical:c,advanced:p,variant:m,onChange:g,activeView:b,standard:h,paginationFontColor:x,navArrowColor:f,theme:w,a11yLandmark:$,addToA11ySkip:S,ariaLabel:A,widgetId:N}=e,P=k(e,["className","data","progress","type","navStyle","vertical","advanced","variant","onChange","activeView","standard","paginationFontColor","navArrowColor","theme","a11yLandmark","addToA11ySkip","ariaLabel","widgetId"]),{current:O,totalPage:R,showPageNumber:B,scrollable:M,disablePrevious:z,disableNext:L,previousText:_,previousIcon:E,nextText:V,nextIcon:G,showIcon:D,gap:F,alternateIcon:U,activedIcon:K,showText:W,showTitle:J,iconPosition:X,textAlign:Y,hideThumb:q}=h||{},H=o.React.useMemo(()=>{const e={role:$||("nav"===d?"tablist":void 0),"aria-label":A};if(S){const t=`${o.WIDGET_PREFIX_FOR_A11Y_SKIP}${N}`;return"slider"===d?Object.assign(Object.assign({},e),{id:t}):Object.assign(Object.assign({},e),{id:t,tabIndex:-1})}return e},[S,$,d,A,N]),Q=o.React.useRef(()=>0);o.React.useEffect(()=>(Q.current=o.lodash.throttle(e=>{let t=+e.target.value;t=Number((t/100).toFixed(2)),null==g||g("slider",t)},100),()=>{Q.current.cancel()}),[g]);const Z=o.React.useCallback(e=>b===y(e),[b]),ee=((e,t,n,i,l,r,a)=>v(()=>{var s,d,u;const c=null===(u=null===(d=null===(s=(0,o.getAppStore)())||void 0===s?void 0:s.getState())||void 0===d?void 0:d.appContext)||void 0===u?void 0:u.isRTL;return"slider"===e?I(i,r,c):n?"nav"===e?T(t,i,l,a):"navButtonGroup"===e?j(i):null:null},[n,i,e,t,l,a,r]))(d,u,p,m,c,q,f),te=o.React.useMemo(()=>{var e,t,n,i,l,r,s;const d=(0,a.getThemeModule)(null==w?void 0:w.uri);if(a.mapping.whetherIsNewTheme(d))return null;const c=(null===(s=null===(r=null===(l=null===(i=null===(n=null===(t=null===(e=null==d?void 0:d.variables)||void 0===e?void 0:e.components)||void 0===t?void 0:t.nav)||void 0===n?void 0:n.variants)||void 0===i?void 0:i[u])||void 0===l?void 0:l.item)||void 0===r?void 0:r.default)||void 0===s?void 0:s.color)||"";return o.css`
      ${c?"":".nav-link:not(:hover):not(.active) {\n        color: var(--sys-color-action-text);\n      }"}
      .direction-button:not(:hover):not(.active):not(:disabled) {
        color: var(--sys-color-action-text);
      }
      ${x?"":".jimu-page-number {\n        color: var(--sys-color-action-text);\n      }"}
    `},[u,x,null==w?void 0:w.uri]),oe=(e=>v(()=>o.css`
      ${"slider"===e&&"padding: 0.625rem 0.25rem;"}
      .nav-button-group >.direction-button {
        &:focus,
        &:focus-visible {
          outline-offset: -2px;
        }
      }
    `,[e]))(d),ne=o.hooks.useTranslation(i.defaultMessages);return(0,t.jsxs)("div",Object.assign({className:(0,o.classNames)("navigation",n),css:[C,ee,oe,te]},P,{children:["nav"===d&&(0,t.jsx)(i.Navigation,Object.assign({keepPaddingWhenOnlyIcon:r(e),onLinkClick:e=>{const t=y(e);null==g||g("nav",t)},vertical:c,isActive:Z,scrollable:M,data:l,gap:F,type:u,showIcon:D,alternateIcon:U,activedIcon:K,showText:W,showTitle:J||W||r(e)&&!W&&D,isUseNativeTitle:!0,iconPosition:X},H,{textAlign:Y})),"slider"===d&&(0,t.jsx)(i.Slider,Object.assign({className:"h-100",value:100*s,hideThumb:q,onChange:e=>{var t;null===(t=e.persist)||void 0===t||t.call(e),Q.current(e)},formatter:e=>{var t;const o=(null===(t=null==l?void 0:l.find(e=>y(e)===b))||void 0===t?void 0:t.name)||"";return`${ne("percentage")} ${Math.round(+e)}. ${o}`}},H)),"navButtonGroup"===d&&(0,t.jsx)(i.NavButtonGroup,Object.assign({variant:"tertiary"===u?"text":"outlined",previousText:_,previousIcon:E,nextText:V,nextIcon:G,vertical:c,disablePrevious:z,disableNext:L},H,{onChange:e=>{null==g||g("navButtonGroup",e)},children:B&&(0,t.jsx)(i.PageNumber,{current:O,totalPage:R,css:o.css`color: ${x}`})}))]}))},N=e=>{const{title:n,children:i,selected:l,onClick:r}=e,s=(()=>{const e=(0,a.useTheme)(),t=(0,a.useTheme2)(),n=(0,a.useUseTheme2)(),i=window.jimuConfig.isBuilder!==n?t:e,l=(window.jimuConfig.isBuilder!==n?e:t).sys.color.primary.light,r=i?i.sys.color.surface.background:"transparent",s=i?i.sys.color.surface.backgroundText:"inherit";return o.React.useMemo(()=>o.css`
      width: 100%;
      height:  ${o.polished.rem(50)};
      padding: ${o.polished.rem(8)}  ${o.polished.rem(12)};
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: ${r};
      position: relative;
      color: ${s};
      &.selected {
        outline: 3px solid ${l};
      }
      >.overlay {
        z-index: 1;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        cursor: pointer;
      }
  `,[l,r,s])})();return(0,t.jsxs)("div",{css:s,title:n,className:(0,o.classNames)("quick-style-item",{selected:l}),onClick:r,children:[(0,t.jsx)("div",{className:"overlay"}),i]})},P=(0,o.Immutable)([{name:"v1",value:"p1,v1"},{name:"v2"},{name:"v3"},{name:"v4"}]),O=o.css`
  &.body {
    display: flex;
    padding: var(--sys-spacing-5);
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    .quick-style-item:not(:last-of-type) {
      margin-bottom: 10px;
    }
  }
`,R=d=>{const{widgetId:u}=d,c=o.ReactRedux.useSelector(e=>{var t;return null===(t=(e.appStateInBuilder?e.appStateInBuilder:e).appConfig.widgets[u])||void 0===t?void 0:t.config}),p=(e=>{const t=o.i18n.getIntl(e,"runtime"),n=o.React.useCallback(e=>t.formatMessage({id:e,defaultMessage:i.defaultMessages[e]||s[e]}),[t]),l=i.utils.toIconResult(h,n("arrowLeft"),16);l.properties.originalName="outlined/directional/left.svg";const r=i.utils.toIconResult(x,n("arrowRight"),16);r.properties.originalName="outlined/directional/right.svg";const a=i.utils.toIconResult(b,n("drawToolDot"),8);return v(()=>[{label:n("tabDefault"),type:"nav",navStyle:"default",standard:{gap:"0px",scrollable:!0,showIcon:!1,showText:!0,iconPosition:"start",textAlign:i.TextAlignValue.CENTER}},{label:n("tabUnderline"),type:"nav",navStyle:"underline",standard:{gap:"0px",scrollable:!0,showIcon:!1,showText:!0,iconPosition:"start",textAlign:i.TextAlignValue.CENTER}},{label:n("tabPills"),type:"nav",navStyle:"pills",standard:{gap:"0px",scrollable:!0,showIcon:!1,showText:!0,iconPosition:"start",textAlign:i.TextAlignValue.CENTER}},{label:n("symbol"),type:"nav",navStyle:"default",standard:{scrollable:!1,gap:"10px",showIcon:!0,alternateIcon:a,activedIcon:a,showText:!1,iconPosition:"start",textAlign:i.TextAlignValue.CENTER}},{label:n("slider"),type:"slider",navStyle:"default"},{label:n("arrow1"),type:"navButtonGroup",navStyle:"default",standard:{showPageNumber:!0,previousText:"",previousIcon:l,nextText:"",nextIcon:r}},{label:n("arrow2"),type:"navButtonGroup",navStyle:"tertiary",standard:{previousText:n("prev"),previousIcon:l,nextText:n("next"),nextIcon:r}},{label:n("arrow3"),type:"navButtonGroup",navStyle:"tertiary",standard:{showPageNumber:!0,previousText:"",previousIcon:l,nextText:"",nextIcon:r}}],[n,a,l,r])})(u),m=null==c?void 0:c.display,g=o.ReactRedux.useSelector(e=>e.appRuntimeInfo.appMode),y=t=>{const i=(0,o.Immutable)(t).set("vertical",g===o.AppMode.Express).set("advanced",!1).without("variant");(0,n.getAppConfigAction)().editWidgetProperty(u,"config",c.setIn(["data","type"],e.Auto).set("display",i)).exec(),((e,t)=>{var n,i;if(!t)return;let a;const s=(0,o.getAppStore)().getState();a=window.jimuConfig.isBuilder?null==s?void 0:s.appStateInBuilder:s;const d=null===(n=null==a?void 0:a.appRuntimeInfo)||void 0===n?void 0:n.selection,u=null===(i=a.appConfig.layouts)||void 0===i?void 0:i[null==d?void 0:d.layoutId];if(u&&(null==u?void 0:u.type)===o.LayoutType.FixedLayout){const o=r(e),n=null==e?void 0:e.vertical;t().editLayoutItemSize(d,n?60:380,n?380:60).exec(),t().editLayoutItemProperty(d,"setting.autoProps",{width:o||n?l.LayoutItemSizeModes.Auto:l.LayoutItemSizeModes.Custom,height:o||!n?l.LayoutItemSizeModes.Auto:l.LayoutItemSizeModes.Custom}).exec()}})(t,n.getAppConfigAction)},f=(0,a.getTheme)();return(0,t.jsx)(a.ThemeSwitchComponent,{useTheme2:window.jimuConfig.isBuilder,children:(0,t.jsx)("div",{className:"body",css:O,children:p.map((e,n)=>{const i=Object.assign({},e),l=i.label;delete i.label;const r="navButtonGroup"===e.type?{current:1,totalPage:4,disablePrevious:!0,disableNext:!1}:{},a="nav"===e.type?{scrollable:!1}:{},s=o.lodash.assign({},i.standard,r,a);return(0,t.jsx)(N,{title:l,selected:!(null==m?void 0:m.advanced)&&S(i)===S(m),onClick:()=>{y(i)},children:(0,t.jsx)(A,{type:i.type,data:P,navStyle:i.navStyle,activeView:"v1",standard:s,theme:f})},n)})})})};var B=d(98640),M=d(11595),z=d.n(M),L=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(o[n[i]]=e[n[i]])}return o};const _=e=>{const n=window.SVG,{className:i}=e,l=L(e,["className"]),r=(0,o.classNames)("jimu-icon jimu-icon-component",i);return n?(0,t.jsx)(n,Object.assign({className:r,src:z()},l)):(0,t.jsx)("svg",Object.assign({className:r},l))},E=e=>o.css`
  width: 300px;
  height: 350px;
  overflow-y: auto;
  .jimu-tree-main {
    padding: 4px;
  }
  .jimu-tree-item__main-line {
    height: 32px;
    background-color: ${e.ref.palette.neutral[500]};
    &:hover {
      background-color: ${e.ref.palette.neutral[600]};
    }
    color: ${e.ref.palette.neutral[1100]};
  }
  .jimu-tree-item__body {
    border: none !important;
  }
`,V={NavQuickStyle:R,ManageViews:l=>{const{widgetId:r}=l,s=o.hooks.useTranslation(i.defaultMessages),d=(0,a.useTheme)(),u=o.ReactRedux.useSelector(e=>{var t;return null===(t=(e.appStateInBuilder?e.appStateInBuilder:e).appConfig.widgets[r])||void 0===t?void 0:t.config}),c=null==u?void 0:u.data,v=((t,n,i)=>{const l=m(e=>{var o,n,i,l,r,a,s;return(null==e?void 0:e.appStateInBuilder)?null===(l=null===(i=null===(n=null===(o=null==e?void 0:e.appStateInBuilder)||void 0===o?void 0:o.appConfig)||void 0===n?void 0:n.sections)||void 0===i?void 0:i[t])||void 0===l?void 0:l.views:null===(s=null===(a=null===(r=null==e?void 0:e.appConfig)||void 0===r?void 0:r.sections)||void 0===a?void 0:a[t])||void 0===s?void 0:s.views});return o.React.useMemo(()=>{const t=((i===e.Custom?n:l)||(0,o.Immutable)([])).asMutable();return t.sort((e,t)=>(null==l?void 0:l.indexOf(e))-(null==l?void 0:l.indexOf(t))),(0,o.Immutable)(t)},[n,l,i])})(null==c?void 0:c.section,null==c?void 0:c.views,null==c?void 0:c.type),p=(e=>{const t=m(e=>{var t,o,n;return(null==e?void 0:e.appStateInBuilder)?null===(o=null===(t=null==e?void 0:e.appStateInBuilder)||void 0===t?void 0:t.appConfig)||void 0===o?void 0:o.views:null===(n=null==e?void 0:e.appConfig)||void 0===n?void 0:n.views});return o.React.useMemo(()=>e.asMutable({deep:!0}).map(e=>{var o;return{id:e,label:null===(o=t[e])||void 0===o?void 0:o.label}}),[e,t])})(v),g=(null==c?void 0:c.type)===e.Auto;return(0,t.jsx)("div",{className:"p-3",css:E(d),children:(0,t.jsx)(B.List,{size:"default",itemsJson:p.map(e=>({itemKey:e.id,itemStateTitle:e.label,itemStateDisabled:1===(null==p?void 0:p.length)})),dndEnabled:g,isMultiSelection:!1,renderOverrideItemCommands:(e,o)=>{const l=o.props.itemJsons[0];return!(null==l?void 0:l.itemStateDisabled)?(0,t.jsx)(i.Tooltip,{title:s("deleteOption"),children:(0,t.jsx)(i.Button,{className:"p-0",onClick:()=>{(e=>{(0,n.getAppConfigAction)().removeView(e.itemKey,null==c?void 0:c.section).exec()})(l)},type:"tertiary",icon:!0,children:(0,t.jsx)(_,{size:"s"})})}):null},onDidDrop:(e,t)=>{const{itemJsons:o}=t.props,[,i]=o,l=i.map(e=>e.itemKey);var r;l.join(",")!==v.join(",")&&(r=l,(0,n.getAppConfigAction)().editSectionProperty(null==c?void 0:c.section,"views",r).exec())}})})}}})(),u})())}}});