"use strict";(self.webpackChunkcms=self.webpackChunkcms||[]).push([[9016],{9016:(x,g,u)=>{u.r(g),u.d(g,{ion_picker_internal:()=>f});var b=u(5861),a=u(4083),d=u(3577);const f=class{constructor(o){(0,a.r)(this,o),this.ionInputModeChange=(0,a.d)(this,"ionInputModeChange",7),this.useInputMode=!1,this.isInHighlightBounds=t=>{const{highlightEl:e}=this;if(!e)return!1;const n=e.getBoundingClientRect();return!(t.clientX<n.left||t.clientX>n.right||t.clientY<n.top||t.clientY>n.bottom)},this.onFocusOut=t=>{const{relatedTarget:e}=t;(!e||"ION-PICKER-COLUMN-INTERNAL"!==e.tagName&&e!==this.inputEl)&&this.exitInputMode()},this.onFocusIn=t=>{const{target:e}=t;if("ION-PICKER-COLUMN-INTERNAL"===e.tagName&&!this.actionOnClick){const n=e;n.numericInput?this.enterInputMode(n,!1):this.exitInputMode()}},this.onClick=()=>{const{actionOnClick:t}=this;t&&(t(),this.actionOnClick=void 0)},this.onPointerDown=t=>{const{useInputMode:e,inputModeColumn:n,el:r}=this;if(this.isInHighlightBounds(t))if(e)this.actionOnClick="ION-PICKER-COLUMN-INTERNAL"===t.target.tagName?n&&n===t.target?()=>{this.enterInputMode()}:()=>{this.enterInputMode(t.target)}:()=>{this.exitInputMode()};else{const i=1===r.querySelectorAll("ion-picker-column-internal.picker-column-numeric-input").length?t.target:void 0;this.actionOnClick=()=>{this.enterInputMode(i)}}else this.actionOnClick=()=>{this.exitInputMode()}},this.enterInputMode=(t,e=!0)=>{const{inputEl:n,el:r}=this;!n||!r.querySelector("ion-picker-column-internal.picker-column-numeric-input")||(this.useInputMode=!0,this.inputModeColumn=t,e?(this.destroyKeypressListener&&(this.destroyKeypressListener(),this.destroyKeypressListener=void 0),n.focus()):(r.addEventListener("keypress",this.onKeyPress),this.destroyKeypressListener=()=>{r.removeEventListener("keypress",this.onKeyPress)}),this.emitInputModeChange())},this.onKeyPress=t=>{const{inputEl:e}=this;if(!e)return;const n=parseInt(t.key,10);Number.isNaN(n)||(e.value+=t.key,this.onInputChange())},this.selectSingleColumn=()=>{const{inputEl:t,inputModeColumn:e,singleColumnSearchTimeout:n}=this;if(!t||!e)return;const r=e.items.filter(i=>!0!==i.disabled);if(n&&clearTimeout(n),this.singleColumnSearchTimeout=setTimeout(()=>{t.value="",this.singleColumnSearchTimeout=void 0},1e3),t.value.length>=3){const l=t.value.substring(t.value.length-2);return t.value=l,void this.selectSingleColumn()}const s=r.find(({text:i})=>i.replace(/^0+(?=[1-9])|0+(?=0$)/,"")===t.value);if(s)e.setValue(s.value);else if(2===t.value.length){const i=t.value.substring(t.value.length-1);t.value=i,this.selectSingleColumn()}},this.searchColumn=(t,e,n="start")=>{const r="start"===n?/^0+/:/0$/,s=t.items.find(({text:i,disabled:l})=>!0!==l&&i.replace(r,"")===e);s&&t.setValue(s.value)},this.selectMultiColumn=()=>{const{inputEl:t,el:e}=this;if(!t)return;const n=Array.from(e.querySelectorAll("ion-picker-column-internal")).filter(c=>c.numericInput),r=n[0],s=n[1];let l,i=t.value;switch(i.length){case 1:this.searchColumn(r,i);break;case 2:const c=t.value.substring(0,1);i="0"===c||"1"===c?t.value:c,this.searchColumn(r,i),1===i.length&&(l=t.value.substring(t.value.length-1),this.searchColumn(s,l,"end"));break;case 3:const h=t.value.substring(0,1);i="0"===h||"1"===h?t.value.substring(0,2):h,this.searchColumn(r,i),l=t.value.substring(1===i.length?1:2),this.searchColumn(s,l,"end");break;case 4:const p=t.value.substring(0,1);i="0"===p||"1"===p?t.value.substring(0,2):p,this.searchColumn(r,i);const v=t.value.substring(1===i.length?1:2,t.value.length);this.searchColumn(s,v,"end");break;default:const I=t.value.substring(t.value.length-4);t.value=I,this.selectMultiColumn()}},this.onInputChange=()=>{const{useInputMode:t,inputEl:e,inputModeColumn:n}=this;!t||!e||(n?this.selectSingleColumn():this.selectMultiColumn())},this.emitInputModeChange=()=>{const{useInputMode:t,inputModeColumn:e}=this;this.ionInputModeChange.emit({useInputMode:t,inputModeColumn:e})}}preventTouchStartPropagation(o){o.stopPropagation()}componentWillLoad(){(0,d.g)(this.el).addEventListener("focusin",this.onFocusIn),(0,d.g)(this.el).addEventListener("focusout",this.onFocusOut)}exitInputMode(){var o=this;return(0,b.Z)(function*(){const{inputEl:t,useInputMode:e}=o;!e||!t||(o.useInputMode=!1,o.inputModeColumn=void 0,t.blur(),t.value="",o.destroyKeypressListener&&(o.destroyKeypressListener(),o.destroyKeypressListener=void 0),o.emitInputModeChange())})()}render(){return(0,a.h)(a.H,{onPointerDown:o=>this.onPointerDown(o),onClick:()=>this.onClick()},(0,a.h)("input",{"aria-hidden":"true",tabindex:-1,inputmode:"numeric",type:"number",ref:o=>this.inputEl=o,onInput:()=>this.onInputChange(),onBlur:()=>this.exitInputMode()}),(0,a.h)("div",{class:"picker-before"}),(0,a.h)("div",{class:"picker-after"}),(0,a.h)("div",{class:"picker-highlight",ref:o=>this.highlightEl=o}),(0,a.h)("slot",null))}get el(){return(0,a.f)(this)}};f.style={ios:":host{display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:200px;direction:ltr;z-index:0}:host .picker-before,:host .picker-after{position:absolute;width:100%;-webkit-transform:translateZ(0);transform:translateZ(0);z-index:1;pointer-events:none}:host .picker-before{top:0;height:83px}@supports (inset-inline-start: 0){:host .picker-before{inset-inline-start:0}}@supports not (inset-inline-start: 0){:host .picker-before{left:0}:host-context([dir=rtl]){left:unset;right:unset;right:0}}:host .picker-after{top:116px;height:84px}@supports (inset-inline-start: 0){:host .picker-after{inset-inline-start:0}}@supports not (inset-inline-start: 0){:host .picker-after{left:0}:host-context([dir=rtl]){left:unset;right:unset;right:0}}:host .picker-highlight{border-radius:8px;left:0;right:0;top:50%;bottom:0;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:0;margin-bottom:0;position:absolute;width:calc(100% - 16px);height:34px;-webkit-transform:translateY(-50%);transform:translateY(-50%);z-index:-1}:host input{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}:host ::slotted(ion-picker-column-internal:first-of-type){text-align:start}:host ::slotted(ion-picker-column-internal:last-of-type){text-align:end}:host ::slotted(ion-picker-column-internal:only-child){text-align:center}:host .picker-before{background:-webkit-gradient(linear, left top, left bottom, color-stop(20%, var(--background, var(--ion-background-color, #fff))), to(rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0.8)));background:linear-gradient(to bottom, var(--background, var(--ion-background-color, #fff)) 20%, rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0.8) 100%)}:host .picker-after{background:-webkit-gradient(linear, left bottom, left top, color-stop(20%, var(--background, var(--ion-background-color, #fff))), to(rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0.8)));background:linear-gradient(to top, var(--background, var(--ion-background-color, #fff)) 20%, rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0.8) 100%)}:host .picker-highlight{background:var(--ion-color-step-150, #eeeeef)}",md:":host{display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:200px;direction:ltr;z-index:0}:host .picker-before,:host .picker-after{position:absolute;width:100%;-webkit-transform:translateZ(0);transform:translateZ(0);z-index:1;pointer-events:none}:host .picker-before{top:0;height:83px}@supports (inset-inline-start: 0){:host .picker-before{inset-inline-start:0}}@supports not (inset-inline-start: 0){:host .picker-before{left:0}:host-context([dir=rtl]){left:unset;right:unset;right:0}}:host .picker-after{top:116px;height:84px}@supports (inset-inline-start: 0){:host .picker-after{inset-inline-start:0}}@supports not (inset-inline-start: 0){:host .picker-after{left:0}:host-context([dir=rtl]){left:unset;right:unset;right:0}}:host .picker-highlight{border-radius:8px;left:0;right:0;top:50%;bottom:0;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:0;margin-bottom:0;position:absolute;width:calc(100% - 16px);height:34px;-webkit-transform:translateY(-50%);transform:translateY(-50%);z-index:-1}:host input{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}:host ::slotted(ion-picker-column-internal:first-of-type){text-align:start}:host ::slotted(ion-picker-column-internal:last-of-type){text-align:end}:host ::slotted(ion-picker-column-internal:only-child){text-align:center}:host .picker-before{background:-webkit-gradient(linear, left top, left bottom, color-stop(20%, var(--background, var(--ion-background-color, #fff))), color-stop(90%, rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0)));background:linear-gradient(to bottom, var(--background, var(--ion-background-color, #fff)) 20%, rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0) 90%)}:host .picker-after{background:-webkit-gradient(linear, left bottom, left top, color-stop(30%, var(--background, var(--ion-background-color, #fff))), color-stop(90%, rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0)));background:linear-gradient(to top, var(--background, var(--ion-background-color, #fff)) 30%, rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0) 90%)}"}}}]);