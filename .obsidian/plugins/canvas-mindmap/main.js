/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var _=Object.defineProperty;var pe=Object.getOwnPropertyDescriptor;var fe=Object.getOwnPropertyNames;var me=Object.prototype.hasOwnProperty;var Ce=(n,i)=>{for(var s in i)_(n,s,{get:i[s],enumerable:!0})},ye=(n,i,s,t)=>{if(i&&typeof i=="object"||typeof i=="function")for(let e of fe(i))!me.call(n,e)&&e!==s&&_(n,e,{get:()=>i[e],enumerable:!(t=pe(i,e))||t.enumerable});return n};var Te=n=>ye(_({},"__esModule",{value:!0}),n);var Me={};Ce(Me,{default:()=>X});module.exports=Te(Me);var f=require("obsidian");function L(n,i){let s=Object.keys(i).map(t=>ve(n,t,i[t]));return s.length===1?s[0]:function(){s.forEach(t=>t())}}function ve(n,i,s){let t=n[i],e=n.hasOwnProperty(i),o=e?t:function(){return Object.getPrototypeOf(n)[i].apply(this,arguments)},a=s(o);return t&&Object.setPrototypeOf(a,t),Object.setPrototypeOf(r,a),n[i]=r,d;function r(...l){return a===o&&n[i]===r&&d(),a.apply(this,l)}function d(){n[i]===r&&(e?n[i]=o:delete n[i]),a!==o&&(a=o,Object.setPrototypeOf(r,t||Function))}}var F=n=>{let i=[];for(let s=0;s<n;s++)i.push((16*Math.random()|0).toString(16));return i.join("")},te=(n,i,s,t,e)=>{let o=U(n,F(16),{x:i.x+i.width+200,y:e,width:i.width,height:i.height*.6,type:"file",content:s.path,subpath:t});return j(n,F(16),{fromOrTo:"from",side:"right",node:i},{fromOrTo:"to",side:"left",node:o}),n.requestSave(),o},U=(n,i,{x:s,y:t,width:e,height:o,type:a,content:r,subpath:d})=>{if(!n)return;let l=n.getData();if(!l)return;let h={id:i,x:s,y:t,width:e,height:o,type:a};switch(a){case"text":h.text=r;break;case"file":h.file=r,d&&(h.subpath=d);break}return n.importData({nodes:[...l.nodes,h],edges:l.edges}),n.requestFrame(),h},j=(n,i,s,t)=>{if(!n)return;let e=n.getData();!e||(n.importData({edges:[...e.edges,{id:i,fromNode:s.node.id,fromSide:s.side,toNode:t.node.id,toSide:t.side}],nodes:e.nodes}),n.requestFrame())},se=(n,i,s)=>{let t=n.getEdgesForNode(i),e=E(s),o=w(e);return t.some(a=>a.from.node.id===i.id&&a.from.side===e&&a.to.side===o)},ie=(n,i,s)=>{let t=[i],e=new Set([i]),o=E(s),a=w(o);for(;t.length>0;){let l=t.pop();n.getEdgesForNode(l).forEach(h=>{h.from.node.id===l.id&&h.from.side===o&&h.to.side===a&&!e.has(h.to.node)&&(e.add(h.to.node),t.push(h.to.node))})}let r=n.nodes;return Array.from(e.values()).filter(l=>r.has(l.id))},ne=(n,i,s)=>{let t=ie(n,i,s);return n.deselectAll(),t.forEach(e=>{n.select(e)}),t},oe=(n,i,s)=>{let t=ie(n,i,s),e=Math.min(...t.map(d=>d.x-d.width/2)),o=Math.min(...t.map(d=>d.y-d.height/2)),a=Math.max(...t.map(d=>d.x+d.width/2)),r=Math.max(...t.map(d=>d.y+d.height/2));return{minX:e,minY:o,maxX:a,maxY:r}},xe=(n,i,s)=>{let t=i.settings.layout.direction,e=t==="TB"||t==="BT",o=E(t),a=w(o),r=e?i.settings.create.parentChildGapForVertical:i.settings.create.parentChildGapForHorizontal,d=i.settings.create.siblingTolerance||10,l=(g,u)=>{if(e){let y=Math.abs(u.y-(g.y+g.height));return y>=r&&y<=r+d}else{let y=Math.abs(u.x-(g.x+g.width));return y>=r&&y<=r+d}},h=n.getEdgesForNode(s).find(g=>g.to.node.id===s.id&&g.from.side===o&&g.to.side===a);if(h){let g=h.from.node;return n.getEdgesForNode(g).filter(u=>u.from.node.id===g.id&&u.from.side===o&&u.to.side===a).map(u=>u.to.node).filter(u=>l(g,u)&&u.id!==s.id).sort((u,y)=>e?u.x-y.x:u.y-y.y)}return[]},ae=(n,i,s)=>{let t=i.settings.layout.direction,e=t==="TB"||t==="BT",o=E(t),a=w(o),r=xe(n,i,s);if(r.length>0){let d=e?s.x:s.y;return r.reduce((l,h)=>{let g=Math.abs((e?l.x:l.y)-d);return Math.abs((e?h.x:h.y)-d)<g?h:l})}else{let d=n.getEdgesForNode(s).find(l=>l.to.node.id===s.id&&l.from.side===o&&l.to.side===a);if(d)return d.from.node;{let l=Array.from(n.nodes.values()).filter(h=>!n.getEdgesForNode(h).some(g=>g.to.node.id===h.id&&g.from.side===o&&g.to.side===a));return l.length>0?l[0]:null}}},w=n=>{switch(n){case"top":return"bottom";case"bottom":return"top";case"left":return"right";case"right":return"left"}},E=n=>{switch(n){case"TB":return"bottom";case"BT":return"top";case"LR":return"right";case"RL":return"left"}};function be(n,i){let s=n.x,t=n.x+n.width,e=n.y,o=n.y+n.height,a=i.x,r=i.x+i.width,d=i.y,l=i.y+i.height;return Math.abs(o-d)<=20&&s<r&&t>a}function Se(n,i){let s=n.x,t=n.x+n.width,e=n.y,o=n.y+n.height,a=i.x,r=i.x+i.width,d=i.y,l=i.y+i.height;return Math.abs(t-a)<=20&&e<l&&o>d}function P({movedNode:n,nodes:i},{adjustedHeight:s,adjustedWidth:t}){let e=[];for(let o of i){let a=o.bbox.minX,r=o.bbox.minY;o.label||(be(n,o)&&s!==0?(e.push({node:o,moveTo:{x:a,y:r+s+20}}),P({movedNode:o,nodes:i.filter(d=>d.id!==n.id)},{adjustedHeight:s,adjustedWidth:0})):Se(n,o)&&t!==0&&(e.push({node:o,moveTo:{x:a+t,y:r}}),P({movedNode:o,nodes:i.filter(d=>d.id!==n.id)},{adjustedHeight:0,adjustedWidth:t})))}e.forEach(({node:o,moveTo:a})=>{o.moveTo(a)})}var p=require("obsidian"),re={navigate:{useNavigate:!0,modifierKey:["Alt"]},hotkey:{hotkeyMode:"Space"},create:{createFloat:!0,createCustomChildNode:!0,childNodeWidth:200,childNodeHeight:100,floatGap:100,floatWidth:200,floatHeight:100,parentChildGapForVertical:160,parentChildGapForHorizontal:200,siblingGapForVertical:50,siblingGapForHorizontal:40,siblingTolerance:50},layout:{direction:"LR",autoLayout:!0,autoLayoutDirection:"LR",autoHeight:!0,ignoreFilesRegex:""},resize:{autoResize:!1,widthAutoResize:!1,maxWidth:500},advanced:{transferToCommands:!1,showChangelogAutomatically:!0,lastUpdatedVersion:"0.0.0"}},Y=class extends p.PluginSettingTab{constructor(s,t){super(s,t);this.applySettingsUpdate=(0,p.debounce)(async()=>{await this.plugin.saveSettings(),console.log("debounce")},300,!0);this.plugin=t}updateSettings(s,t){this.plugin.settings={...this.plugin.settings,[s.split(".")[0]]:{...this.plugin.settings[s.split(".")[0]],[s.split(".")[1]]:t}},this.applySettingsUpdate()}display(){let{containerEl:s}=this;s.empty(),new p.Setting(s).setName("Donate").setDesc("If you like this plugin, consider donating to support continued development:").addButton(t=>{t.setButtonText("Buy me a coffee").setCta(),t.onClick(()=>{window.open("https://www.buymeacoffee.com/boninall","_blank")})}),this.useNavigateHotkeySetting(s,this.plugin.settings),this.layoutSettings(s,this.plugin.settings),this.hotkeySettings(s,this.plugin.settings),this.createFloatSetting(s,this.plugin.settings),this.resizeSettings(s,this.plugin.settings),new p.Setting(s).setName("Changelog").setDesc("Auto show the changelog of the plugin when the plugin is updated.").addToggle(t=>{t.setValue(this.plugin.settings.advanced.showChangelogAutomatically),t.onChange(e=>{this.updateSettings("advanced.showChangelogAutomatically",e)})})}useNavigateHotkeySetting(s,t){let e=document.createDocumentFragment();e.createDiv({cls:"mind-map-setting-desc"},o=>{o.createEl("span",{text:"You can use the hotkey to navigate the mind map."}),o.createEl("ul",{},a=>{a.createEl("li",{},r=>{r.setText("Arrow: Move selected node")})}),o.createEl("ul",{},a=>{a.createEl("li",{},r=>{r.setText("Alt+Arrow: Select nearest node in the direction")})})}),new p.Setting(s).setName("Use navigate hotkey").setDesc(e).addToggle(o=>{o.setValue(t.navigate.useNavigate),o.onChange(a=>{this.updateSettings("navigate.useNavigate",a),setTimeout(()=>{this.display()},700)})})}hotkeySettings(s,t){new p.Setting(s).setName("Hotkey").setHeading();let e=document.createDocumentFragment();e.createDiv({cls:"mind-map-setting-desc"},o=>{o.createEl("span",{text:"You can change the hotkey mode to control how you edit the node."})}),e.createDiv({cls:"mind-map-setting-desc"},o=>{o.setText("When you choose 'Space': "),o.createEl("ul",{},a=>{a.createEl("li",{},r=>{r.setText("Space: Edit node")}),a.createEl("li",{},r=>{r.setText("Enter: Create new sibling node")}),a.createEl("li",{},r=>{r.setText("Mod+Enter: Create new previous sibling node")})})}),e.createDiv({cls:"mind-map-setting-desc"},o=>{o.setText("When you choose 'Enter': "),o.createEl("ul",{},a=>{a.createEl("li",{},r=>{r.setText("Enter: Edit node")}),a.createEl("li",{},r=>{r.setText("Mod+Enter: Create new sibling node")}),a.createEl("li",{},r=>{r.setText("Mod+Shift+Enter: Create new previous sibling node")})})}),new p.Setting(s).setName("Hotkey mode").setDesc(e).addDropdown(o=>{o.addOption("Space","Space"),o.addOption("Enter","Enter"),o.setValue(t.hotkey.hotkeyMode||"Space"),o.onChange(a=>{a!==t.hotkey.hotkeyMode&&this.app.workspace.getLeavesOfType("canvas").forEach(r=>{r.rebuildView()}),this.updateSettings("hotkey.hotkeyMode",a)})})}layoutSettings(s,t){new p.Setting(s).setName("Layout").setDesc("Set the layout of the mind map. Notice: any changes will take effect after creating a new node/deleting a node.").setHeading(),new p.Setting(s).setName("Width of new node").setDesc("The width of the new node").addSlider(e=>{e.setLimits(100,500,10),e.setDynamicTooltip(),e.setValue(t.create.childNodeWidth||200),e.onChange(o=>{this.updateSettings("create.childNodeWidth",o)})}),new p.Setting(s).setName("Height of new node").setDesc("The height of the new node").addSlider(e=>{e.setLimits(50,300,10),e.setDynamicTooltip(),e.setValue(t.create.childNodeHeight||100),e.onChange(o=>{this.updateSettings("create.childNodeHeight",o)})}),new p.Setting(s).setName("Auto Layout").setDesc("Auto layout the mind map").addToggle(e=>{e.setValue(t.layout.autoLayout),e.onChange(o=>{this.updateSettings("layout.autoLayout",o),setTimeout(()=>{this.display()},700)})}),t.layout.autoLayout&&(new p.Setting(s).setName("Direction").setDesc("Set the direction of the mind map.").addDropdown(e=>{e.addOption("TB","Top to bottom"),e.addOption("BT","Bottom to top"),e.addOption("LR","Left to right"),e.addOption("RL","Right to left"),e.setValue(t.layout.direction||"LR"),e.onChange(o=>{this.updateSettings("layout.direction",o),setTimeout(()=>{this.display()},400)})}),s.createDiv({cls:"mind-map-demo"},e=>{let a=`flowchart ${t.layout.direction==="TB"?"TB":t.layout.direction==="BT"?"BT":t.layout.direction==="LR"?"LR":"RL"}`;p.MarkdownRenderer.render(this.plugin.app,"```mermaid\n"+a+'\n    I("Parent") --> D("B Children")\n    I --> H("A Children")\n```',e,"",this.plugin)}),this.createGapSettings(s,t),new p.Setting(s).setName("Sibling Tolerance").setDesc("The tolerance of the sibling node. Used to determine if a node is a valid child.").addSlider(e=>{e.setLimits(20,200,1),e.setDynamicTooltip(),e.setValue(t.create.siblingTolerance||50),e.onChange(o=>{this.updateSettings("create.siblingTolerance",o)})}),new p.Setting(s).setName("Ignore Files").setDesc("The files that will be ignored when auto layout. Use regex to filter the files.").addText(e=>{e.setPlaceholder("e.g. He(.*)ld"),e.setValue(t.layout.ignoreFilesRegex||""),e.onChange(o=>{this.updateSettings("layout.ignoreFilesRegex",o)})}))}createGapSettings(s,t){switch(t.layout.direction){case"TB":case"BT":this.createVerticalGapSettings(s,t);break;case"LR":case"RL":this.createHorizontalGapSettings(s,t);break}}createVerticalGapSettings(s,t){new p.Setting(s).setName("Parent Child Gap (Vertical)").setDesc("The gap between parent and child node").addSlider(e=>{e.setLimits(100,500,10),e.setDynamicTooltip(),e.setValue(t.create.parentChildGapForVertical||160),e.onChange(o=>{this.updateSettings("create.parentChildGapForVertical",o)})}),new p.Setting(s).setName("Sibling Gap (Vertical)").setDesc("The gap between sibling node").addSlider(e=>{e.setLimits(10,100,10),e.setDynamicTooltip(),e.setValue(t.create.siblingGapForVertical||50),e.onChange(o=>{this.updateSettings("create.siblingGapForVertical",o)})})}createHorizontalGapSettings(s,t){new p.Setting(s).setName("Parent Child Gap (Horizontal)").setDesc("The gap between parent and child node").addSlider(e=>{e.setLimits(100,500,10),e.setDynamicTooltip(),e.setValue(t.create.parentChildGapForHorizontal||200),e.onChange(o=>{this.updateSettings("create.parentChildGapForHorizontal",o)})}),new p.Setting(s).setName("Sibling Gap (Horizontal)").setDesc("The gap between sibling node").addSlider(e=>{e.setLimits(10,100,10),e.setDynamicTooltip(),e.setValue(t.create.siblingGapForHorizontal||40),e.onChange(o=>{this.updateSettings("create.siblingGapForHorizontal",o)})})}createFloatSetting(s,t){new p.Setting(s).setName("Float").setHeading(),new p.Setting(s).setName("Create floating node").setDesc("Create a floating node").addToggle(e=>{e.setValue(t.create.createFloat),e.onChange(o=>{this.updateSettings("create.createFloat",o)})}),new p.Setting(s).setName("Create custom child node").setDesc("Create a custom child node with link to it. But cannot be used with auto layout.").addToggle(e=>{e.setValue(t.create.createCustomChildNode),e.onChange(o=>{this.updateSettings("create.createCustomChildNode",o)})}),new p.Setting(s).setName("Floating node gap").setDesc("The gap between floating node").addSlider(e=>{e.setLimits(0,500,10),e.setDynamicTooltip(),e.setValue(t.create.floatGap||100),e.onChange(o=>{this.updateSettings("create.floatGap",o)})}),new p.Setting(s).setName("Floating node width").setDesc("The width of the floating node").addSlider(e=>{e.setLimits(60,500,10),e.setDynamicTooltip(),e.setValue(t.create.floatWidth||200),e.onChange(o=>{this.updateSettings("create.floatWidth",o)})}),new p.Setting(s).setName("Floating node height").setDesc("The height of the floating node").addSlider(e=>{e.setLimits(60,500,10),e.setDynamicTooltip(),e.setValue(t.create.floatHeight||100),e.onChange(o=>{this.updateSettings("create.floatHeight",o)})})}resizeSettings(s,t){if(this.app.plugins.getPlugin("node-auto-resize"))return;let o=document.createDocumentFragment();o.createDiv({cls:"mind-map-setting-desc"},a=>{a.createEl("span",{text:"You can resize the node when you edit the node."}),a.createEl("span",{text:'Notice: if you already have "Node Auto Resize" plugin enabled, you can ignore this setting.'})}),new p.Setting(s).setName("Resize").setDesc(o).setHeading(),new p.Setting(s).setName("Auto resize").setDesc("If true, the node will be automatically resized when you edit the node.").addToggle(a=>{a.setValue(t.resize.autoResize),a.onChange(r=>{this.updateSettings("resize.autoResize",r)})}),new p.Setting(s).setName("Width auto resize").setDesc("If true, the width of the node will be automatically resized when you edit the node.").addToggle(a=>{a.setValue(t.resize.widthAutoResize),a.onChange(r=>{this.updateSettings("resize.widthAutoResize",r)})}),new p.Setting(s).setName("Max width").setDesc("The max width of the node. If the width of the node is greater than this value, the width of the node will be automatically resized to this value.").addSlider(a=>{a.setLimits(200,800,20),a.setDynamicTooltip(),a.setValue(t.resize.maxWidth||400),a.onChange(r=>{this.updateSettings("resize.maxWidth",r)})})}};var de=async(n,i,s,t,e)=>{j(s,F(16),{fromOrTo:"from",side:t,node:n},{fromOrTo:"to",side:e,node:i})},H=(n,i,s)=>{var h;if(i.readonly)return;let t=i.selection,e=n.settings;if(t.size!==1||t.values().next().value.isEditing)return;let o=t.values().next().value,a=s==="left"?o.x-o.width-e.create.floatGap:s==="right"?o.x+o.width+e.create.floatGap:o.x,r=s==="top"?o.y-o.height-e.create.floatGap:s==="bottom"?o.y+o.height+e.create.floatGap:o.y,d=U(i,F(16),{x:a,y:r,width:e.create.floatWidth||o.width,height:e.create.floatHeight||o.height,type:"text",content:""});i==null||i.requestSave();let l=(h=i.nodes)==null?void 0:h.get(d==null?void 0:d.id);if(!!l)return i.selectOnly(l),i.zoomToSelection(),setTimeout(()=>{l.startEditing()},100),d},K=async(n,i,s,t,e,o="default")=>{var v,C;let a={x:0,y:0},r=n.settings,d=r.create.childNodeWidth?r.create.childNodeWidth:s.width,l=r.create.childNodeHeight?r.create.childNodeHeight:s.height;if(e)switch(t){case"TB":a={x:s.x,y:s.y+s.height/2+n.settings.create.parentChildGapForVertical+l/2};break;case"BT":a={x:s.x,y:s.y-s.height/2-n.settings.create.parentChildGapForVertical-l/2};break;case"LR":a={x:s.x+s.width/2+n.settings.create.parentChildGapForHorizontal+d/2,y:s.y};break;case"RL":a={x:s.x-s.width/2-n.settings.create.parentChildGapForHorizontal-d/2,y:s.y};break}else{let b=t==="TB"||t==="BT"?n.settings.create.siblingGapForVertical:n.settings.create.siblingGapForHorizontal;switch(t){case"TB":case"BT":a={x:s.x+(o==="prev"?-1:1)*(s.width/2+b+d/2),y:s.y};break;case"LR":case"RL":a={x:s.x,y:s.y+(o==="prev"?-1:1)*(s.height/2+b+l/2)};break}}let h=U(i,F(16),{x:a.x-(!e&&(t==="BT"||t==="TB")?1:0)*(o==="prev"?-1:1),y:a.y-(!e&&(t==="LR"||t==="RL")?1:0)*(o==="prev"?-1:1),width:d,height:l,type:"text",content:""}),g=E(t),u=w(g);if(!h)return;if(e)await de(s,h,i,g,u);else{let b=(v=i.getEdgesForNode(s).find(S=>S.to.node.id===s.id&&S.from.side===g&&S.to.side===u))==null?void 0:v.from.node;b&&await de(b,h,i,g,u)}i.deselectAll();let y=(C=i.nodes)==null?void 0:C.get(h==null?void 0:h.id);if(!!y)return i.selectOnly(y),i.requestSave(),h},M=async(n,i,s,t="default")=>{var g;if(i.readonly||i.selection.size!==1)return;let e=i.selection.entries().next().value[1];if(e.isEditing&&!s)return;let o=n.settings.layout.direction,a=E(o),r=w(a),d=i.getEdgesForNode(e).filter(u=>u.to.node.id===e.id&&u.from.side===a&&u.to.side===r);if(d.length===0)return;let l=d[0].from.node,h=await K(n,i,e,o,!1,t);if(h){let u=B(i,l,o);V(n,i,u,o),i.deselectAll();let y=(g=i.nodes)==null?void 0:g.get(h.id);y&&i.selectOnly(y),i.requestSave()}return h},q=async(n,i,s)=>{if(i.readonly||i.selection.size!==1)return;let t=i.selection.entries().next().value[1];if(t.isEditing&&!s)return;let e=n.settings.layout.direction,o=await K(n,i,t,e,!0),a=B(i,t,e);return V(n,i,a,e),o},A=async(n,i,s)=>{if(i.readonly||i.selection.size!==1)return;let t=i.selection.entries().next().value[1];return t.isEditing?void 0:await K(n,i,t,s,!0)},V=(n,i,s,t)=>{if(!n.settings.layout.autoLayout)return;let e=n.settings.layout.ignoreFilesRegex,o=i.view.file;if(o&&e&&new RegExp(e).test(o.path))return;let a=t==="TB"||t==="BT",r=E(t),d=w(r),l=a?n.settings.create.parentChildGapForVertical:n.settings.create.parentChildGapForHorizontal,h=a?n.settings.create.siblingGapForVertical:n.settings.create.siblingGapForHorizontal,g=n.settings.create.siblingTolerance||10,u=n.settings.create.childNodeWidth?n.settings.create.childNodeWidth:s.width,y=n.settings.create.childNodeHeight?n.settings.create.childNodeHeight:s.height,v=(c,m)=>{if(a){let T=t==="TB"?m.y-c.y:c.y-m.y,x=c.height/2+l+m.height/2;return Math.abs(T-x)<=g}else{let T=t==="LR"?m.x-c.x:c.x-m.x,x=c.width/2+l+m.width/2;return console.log(m.x,c.x,m.x-c.x,x,g,Math.abs(m.x-c.x-x),Math.abs(m.x-c.x-x)<=g),Math.abs(T-x)<=g}},C=c=>{let m=i.getEdgesForNode(c).filter(T=>T.from.node.id===c.id&&T.from.side===r&&T.to.side===d).map(T=>T.to.node).filter(T=>v(c,T)).sort((T,x)=>a?T.x-x.x:T.y-x.y);return console.log(m),{node:c,children:m.map(C),width:c.width,height:c.height,subtreeWidth:0,subtreeHeight:0,x:0,y:0}},b=c=>{if(c.children.length===0){c.subtreeWidth=c.width,c.subtreeHeight=c.height;return}c.children.forEach(b),a?(c.subtreeWidth=Math.max(c.width,c.children.reduce((m,T)=>m+T.subtreeWidth,0)+h*(c.children.length-1)),c.subtreeHeight=c.height+l+Math.max(...c.children.map(m=>m.subtreeHeight))):(c.subtreeWidth=c.width+l+Math.max(...c.children.map(m=>m.subtreeWidth)),c.subtreeHeight=Math.max(c.height,c.children.reduce((m,T)=>m+T.subtreeHeight,0)+h*(c.children.length-1)))},S=(c,m,T,x=!1)=>{var Z,ee;if(x?(c.x=c.node.x,c.y=c.node.y):a?(c.x=m+(c.subtreeWidth-c.width)/2,c.y=T):(c.x=m,c.y=T+(c.subtreeHeight-c.height)/2),a){let I=x?c.x-c.subtreeWidth/2+u/2:m,W=t==="TB"?c.y+c.height+l:c.y-l-(((Z=c.children[0])==null?void 0:Z.subtreeHeight)||0);c.children.forEach(k=>{S(k,I,W),I+=k.subtreeWidth+(c.children.length>1?h:0)})}else{let I=t==="LR"?c.x+c.width+l:c.x-l-(((ee=c.children[0])==null?void 0:ee.subtreeWidth)||0),W=x?c.y-c.subtreeHeight/2+y/2:T;c.children.forEach(k=>{S(k,I,W),W+=k.subtreeHeight+(c.children.length>1?h:0)})}},D=c=>{(c.x!==c.node.x||c.y!==c.node.y)&&c.node.moveTo({x:c.x,y:c.y}),c.children.forEach(D)},N=C(s);return b(N),S(N,s.x,s.y,!0),D(N),N},B=(n,i,s)=>{let t=E(s),e=w(t),o=i;for(;;){let a=n.getEdgesForNode(o).find(r=>r.to.node.id===o.id&&r.from.side===t&&r.to.side===e);if(!a)return o;o=a.from.node}};var G={up:{dx:0,dy:-1},down:{dx:0,dy:1},left:{dx:-1,dy:0},right:{dx:1,dy:0}},O=(n,i)=>{if(!G[i]){console.error(`Invalid direction: ${i}`);return}let s=n.selection;if(s.size!==1)return;let t=s.values().next().value;if(t.isEditing)return;let{x:e,y:o,width:a,height:r}=t,d=n.getViewportNodes();n.deselectAll();let l=e+a/2,h=o+r/2,u=d.filter(C=>C!==t).map(C=>{let b=C.x+C.width/2,S=C.y+C.height/2,D=b-l,N=S-h,c=D*G[i].dx+N*G[i].dy,m=Math.sqrt(D*D+N*N),T=Math.abs(D*G[i].dy-N*G[i].dx),x=-1/0;return c>0&&(x=1/(m*(T+1))),{node:C,score:x,distance:m}}).filter(C=>C.score>-1/0);if(u.length===0)return console.log("No valid nodes found in the specified direction"),null;let v=u.sort((C,b)=>Math.abs(C.score-b.score)<1e-4?C.distance-b.distance:b.score-C.score)[0].node;return v&&(n.selectOnly(v),n.zoomToSelection()),v};var ce=require("obsidian");var le=require("@codemirror/view"),he=n=>le.EditorView.updateListener.of(i=>{if(i.docChanged){let s=i.state.field(ce.editorInfoField);if(s.node){let t=i.view.contentHeight;if(s.node.height===t)return;let e=s.node.width;n.settings.resize.widthAutoResize&&(e=i.view.defaultCharacterWidth*i.view.state.doc.line(1).length+120);let o=s.node.height,a=s.node.width,r=Array.from(s.node.canvas.nodes.values());P({movedNode:s.node,nodes:r},{adjustedHeight:t-o,adjustedWidth:(e>n.settings.resize.maxWidth?s.node.width:e)-a}),s.node.resize({width:e>n.settings.resize.maxWidth?s.node.width:e,height:t+20}),n.debounceSaveCanvas(s.node.canvas,s.node)}}});var $=new Intl.Collator(0,{numeric:1}).compare;function ge(n,i,s){return n=n.split("."),i=i.split("."),$(n[0],i[0])||$(n[1],i[1])||(i[2]=i.slice(2).join("."),s=/[.-]/.test(n[2]=n.slice(2).join(".")),s==/[.-]/.test(i[2])?$(n[2],i[2]):s?-1:1)}var Ne=(n,i)=>{if(n.selection.size!==1)return!1;let s=n.selection.entries().next().value[1];if(s.isEditing)return!1;let t=n.getEdgesForNode(s).filter(l=>l.to.node.id===s.id);if(t.length===0)return!1;let e=t[0].from.node,o=i.settings.layout.direction,a=B(n,e,o),r=ae(n,i,s),d=oe(n,a,o);return{parentNode:e,rootNode:a,direction:o,deletedNode:s,nodeToFocus:r,bbox:d}},we=(n,i,s,t,e,o)=>{V(i,n,s,t),e&&(n.selectOnly(e),n.zoomToSelection()),n.requestSave()},ue=(n,i)=>{!i.scope||(n.settings.create.createFloat&&(i.scope.register(["Mod"],"ArrowUp",()=>{H(n,i.canvas,"top")}),i.scope.register(["Mod"],"ArrowDown",()=>{H(n,i.canvas,"bottom")}),i.scope.register(["Mod"],"ArrowLeft",()=>{H(n,i.canvas,"left")}),i.scope.register(["Mod"],"ArrowRight",()=>{H(n,i.canvas,"right")})),n.settings.create.createCustomChildNode&&(i.scope.register(["Mod","Shift"],"ArrowUp",async()=>{let s=await A(n,i.canvas,"BT");!s||(n.settings.layout.direction="BT",await n.saveSettings(),setTimeout(()=>{var e;let t=(e=i.canvas.nodes)==null?void 0:e.get(s.id);t==null||t.startEditing(),i.canvas.zoomToSelection()},0))}),i.scope.register(["Mod","Shift"],"ArrowDown",async()=>{let s=await A(n,i.canvas,"TB");!s||(n.settings.layout.direction="TB",await n.saveSettings(),setTimeout(()=>{var e;let t=(e=i.canvas.nodes)==null?void 0:e.get(s.id);t==null||t.startEditing(),i.canvas.zoomToSelection()},0))}),i.scope.register(["Mod","Shift"],"ArrowLeft",async()=>{let s=await A(n,i.canvas,"RL");!s||(n.settings.layout.direction="RL",await n.saveSettings(),setTimeout(()=>{var e;let t=(e=i.canvas.nodes)==null?void 0:e.get(s.id);t==null||t.startEditing(),i.canvas.zoomToSelection()},0))}),i.scope.register(["Mod","Shift"],"ArrowRight",async()=>{let s=await A(n,i.canvas,"LR");!s||(n.settings.layout.direction="LR",await n.saveSettings(),setTimeout(()=>{var e;let t=(e=i.canvas.nodes)==null?void 0:e.get(s.id);t==null||t.startEditing(),i.canvas.zoomToSelection()},0))})),n.settings.navigate.useNavigate&&(i.scope.register(["Alt"],"ArrowUp",()=>{O(i.canvas,"up")}),i.scope.register(["Alt"],"ArrowDown",()=>{O(i.canvas,"down")}),i.scope.register(["Alt"],"ArrowLeft",()=>{O(i.canvas,"left")}),i.scope.register(["Alt"],"ArrowRight",()=>{O(i.canvas,"right")})),n.settings.hotkey.hotkeyMode==="Space"?(i.scope.register(["Mod"],"Enter",async()=>{let s=await M(n,i.canvas,!1,"prev");!s||setTimeout(()=>{var e;let t=(e=i.canvas.nodes)==null?void 0:e.get(s.id);t==null||t.startEditing(),i.canvas.zoomToSelection()},0)}),i.scope.register([],"Enter",async()=>{let s=await M(n,i.canvas,!1);!s||setTimeout(()=>{var e;let t=(e=i.canvas.nodes)==null?void 0:e.get(s.id);t==null||t.startEditing(),i.canvas.zoomToSelection()},0)}),i.scope.register([]," ",async s=>{if(i.canvas.readonly)return;let t=i.canvas.selection;if(t.size!==1)return;let e=t.entries().next().value[1];(e==null?void 0:e.label)||(e==null?void 0:e.url)||e.isEditing||e.startEditing()})):(i.scope.register(["Mod","Shift"],"Enter",async()=>{let s=await M(n,i.canvas,!1,"prev");!s||setTimeout(()=>{var e;let t=(e=i.canvas.nodes)==null?void 0:e.get(s.id);t==null||t.startEditing(),i.canvas.zoomToSelection()},0)}),i.scope.register(["Mod"],"Enter",async()=>{let s=await M(n,i.canvas,!1);!s||setTimeout(()=>{var e;let t=(e=i.canvas.nodes)==null?void 0:e.get(s.id);t==null||t.startEditing(),i.canvas.zoomToSelection()},0)}),i.scope.register([],"Enter",async s=>{if(i.canvas.readonly)return;let t=i.canvas.selection;if(t.size!==1)return;let e=t.entries().next().value[1];(e==null?void 0:e.label)||(e==null?void 0:e.url)||e.isEditing||e.startEditing()})),i.scope.register([],"Tab",async s=>{let t=await q(n,i.canvas,!1);!t||setTimeout(()=>{var o;let e=(o=i.canvas.nodes)==null?void 0:o.get(t.id);e==null||e.startEditing(),i.canvas.zoomToSelection()},20)}))},Ee=(n,i)=>{ue(n,i);let s=i.canvas,t=L(i.constructor.prototype,{onOpen:r=>async function(){return ue(n,this),r.call(this)}}),e=L(s.constructor.prototype,{deleteSelection:r=>function(){if(this.selection.size>1)return r.call(this);{let d=Ne(this,n);r.call(this),d&&typeof d=="object"&&we(this,n,d.rootNode,d.direction,d.nodeToFocus,d.bbox)}}}),o=r=>{let d=L(r.constructor.prototype,{setColor:g=>function(u,y){g.call(this,u,y),this.canvas.getEdgesForNode(this).forEach(v=>{v.from.node===this&&(v.setColor(u,!0),v.render())}),s.requestSave()}}),l=Object.getPrototypeOf(r.constructor.prototype),h=L(l,{moveAndResize:g=>function({x:u,y,width:v,height:C}){(this.width!==v||this.height!==C)&&(g.call(this,{x:u,y,width:v,height:C}),n.debounceSaveCanvas(this.canvas,this)),g.call(this,{x:u,y,width:v,height:C})}});n.register(d),n.register(h)},a=L(s.constructor.prototype,{selectOnly:r=>function(d){return d&&(o(d),a()),r.call(this,d)}});n.register(t),n.register(e),n.register(a),console.log("Obsidian-Canvas-MindMap: canvas view patched")},R={TB:{icon:"layout-panel-top",reverse:!1,title:"Top-Bottom"},BT:{icon:"layout-panel-top",reverse:!0,title:"Bottom-Top"},LR:{icon:"layout-panel-left",reverse:!1,title:"Left-Right"},RL:{icon:"layout-panel-left",reverse:!0,title:"Right-Left"}},X=class extends f.Plugin{constructor(){super(...arguments);this.debounceSaveCanvas=(0,f.debounce)((s,t)=>{let e=B(s,t,this.settings.layout.direction);V(this,s,e,this.settings.layout.direction),s.requestSave()},1e3)}async onload(){await this.registerSettings(),this.registerChangelogView(),this.registerCommands(),this.aroundCanvasMethods(this),this.patchMarkdownFileInfo(),this.registerCanvasMenus(),this.registerStatusBar(),this.registerStatusBarEvent(),this.registerEditorExtensions()}onunload(){}async registerSettings(){this.settingTab=new Y(this.app,this),this.addSettingTab(this.settingTab),await this.loadSettings()}registerChangelogView(){this.registerView(z,s=>new J(this.app,s,this)),this.checkForUpdates()}async checkForUpdates(){let s=this.manifest.version,t=this.settings.advanced.lastUpdatedVersion||"0.0.0";ge(s,t)===1&&(this.settings.advanced.lastUpdatedVersion=s,await this.saveSettings(),this.app.workspace.getLeaf("tab").setViewState({type:z}))}registerCommands(){this.addCommand({id:"split-heading-into-mindmap",name:"Split Heading into mindmap based on H1",checkCallback:s=>{var e;let t=this.app.workspace.getActiveViewOfType(f.ItemView);if((t==null?void 0:t.getViewType())==="canvas"){if(!s){let o=t==null?void 0:t.canvas,a=o==null?void 0:o.selection;if(a.size>1)return!1;let r=a.values().next().value;if(!r.filePath)return!1;let d=r.file;if(d.extension!=="md")return!1;let l=(e=this.app.metadataCache.getFileCache(d))==null?void 0:e.headings;if(!l)return!1;let h=l.filter(v=>v.level===1);if(h.length===0)return!1;let g=(r.height*.6+20)*h.length,u=-1,y=r.y+r.height/2+g/2*u;h.forEach((v,C)=>{te(o,r,d,"#"+v.heading,y-u*(r.height*.6+20)*C)})}return!0}}}),this.addCommand({id:"create-floating-node",name:"Create floating node",checkCallback:s=>{let t=this.app.workspace.getActiveViewOfType(f.ItemView);if((t==null?void 0:t.getViewType())==="canvas"){if(!s){let e=t==null?void 0:t.canvas,o=e.createTextNode({pos:{x:0,y:0,height:500,width:400},size:{x:0,y:0,height:500,width:400},text:"",focus:!0,save:!0});if(e.addNode(o),e.requestSave(),!o)return;setTimeout(()=>{o.startEditing(),e.zoomToSelection()},0)}return!0}}}),this.addCommand({id:"create-child-node",name:"Create child node",checkCallback:s=>{let t=this.app.workspace.getActiveViewOfType(f.ItemView);if((t==null?void 0:t.getViewType())==="canvas"){if(!s){let e=t==null?void 0:t.canvas;q(this,e,!0).then(o=>{!o||setTimeout(()=>{var r;let a=(r=e.nodes)==null?void 0:r.get(o.id);e.zoomToSelection(),a==null||a.startEditing()},0)})}return!0}}}),this.addCommand({id:"create-next-sibling-node",name:"Create next sibling node",checkCallback:s=>{let t=this.app.workspace.getActiveViewOfType(f.ItemView);if((t==null?void 0:t.getViewType())==="canvas"){let e=t==null?void 0:t.canvas;if(e.selection.size!==1)return!1;let o=e.selection.entries().next().value[1],a=B(e,o,this.settings.layout.direction);return a&&a.id===o.id||!a?(new f.Notice("You can only create sibling node for non-root node"),!1):(s||M(this,e,!0,"default").then(r=>{!r||setTimeout(()=>{var l;let d=(l=e.nodes)==null?void 0:l.get(r.id);e.zoomToSelection(),d==null||d.startEditing()},0)}),!0)}}}),this.addCommand({id:"create-previous-sibling-node",name:"Create previous sibling node",checkCallback:s=>{let t=this.app.workspace.getActiveViewOfType(f.ItemView);if((t==null?void 0:t.getViewType())==="canvas"){if(!s){let e=t==null?void 0:t.canvas;if(e.selection.size!==1)return!1;let o=e.selection.entries().next().value[1],a=B(e,o,this.settings.layout.direction);if(a&&a.id===o.id||!a)return new f.Notice("You can only create sibling node for non-root node"),!1;M(this,e,!0,"prev").then(r=>{!r||setTimeout(()=>{var l;let d=(l=e.nodes)==null?void 0:l.get(r.id);e.zoomToSelection(),d==null||d.startEditing()},0)})}return!0}}}),this.addCommand({id:"enter-edit-mode",name:"Enter edit mode",callback:()=>{let s=this.app.workspace.getActiveViewOfType(f.ItemView);if((s==null?void 0:s.getViewType())==="canvas"){let t=s==null?void 0:s.canvas;if(t.selection.size!==1)return;t.selection.entries().next().value[1].startEditing()}}}),this.addCommand({id:"exit-edit-mode",name:"Exit edit mode",callback:()=>{let s=this.app.workspace.getActiveViewOfType(f.ItemView);if((s==null?void 0:s.getViewType())==="canvas"){let t=s==null?void 0:s.canvas;if(t.selection.size!==1)return;let e=t.selection.entries().next().value[1];e.setIsEditing(!1),e.canvas.wrapperEl.focus(),t.requestSave()}}}),this.addCommand({id:"change-direction",name:"Change direction",callback:()=>{new Q(this).open()}}),this.addCommand({id:"open-changelog",name:"Open changelog",callback:()=>{this.app.workspace.getLeavesOfType(z).length>0?this.app.workspace.getLeavesOfType(z)[0].rebuildView():this.app.workspace.getLeaf().setViewState({type:z})}})}aroundCanvasMethods(s){let t=L(f.WorkspaceLeaf.prototype,{setViewState(e){return function(o,...a){var r,d,l;return(r=o.state)!=null&&r.file&&((d=o.state)==null?void 0:d.file)&&((l=o.state)==null?void 0:l.file).endsWith(".canvas")&&setTimeout(()=>{this.view.canvas&&(Ee(s,this.view),t())},400),e.apply(this,[o,...a])}}});this.register(t)}registerCanvasMenus(){this.registerEvent(this.app.workspace.on("canvas:node-menu",(s,t)=>{if(t.canvas.readonly)return;let e=t.canvas;s.addItem(a=>{a.setSection("canvas").setIcon("layout-panel-top").setTitle("Create child node").onClick(()=>{q(this,e,!0).then(r=>{!r||setTimeout(()=>{var l;let d=(l=e.nodes)==null?void 0:l.get(r.id);d==null||d.startEditing(),e.zoomToSelection()},0)})})});let o=B(e,t,this.settings.layout.direction);o&&o.id!==t.id&&(s.addItem(a=>{a.setSection("canvas").setIcon("layout-panel-left").setTitle("Create next sibling node").onClick(()=>{M(this,e,!0,"next").then(r=>{!r||setTimeout(()=>{var l;let d=(l=e.nodes)==null?void 0:l.get(r.id);d==null||d.startEditing(),e.zoomToSelection()},0)})})}),s.addItem(a=>{a.setSection("canvas").setIcon("layout-panel-left").setTitle("Create previous sibling node").onClick(()=>{M(this,e,!0,"prev").then(r=>{!r||setTimeout(()=>{var l;let d=(l=e.nodes)==null?void 0:l.get(r.id);d==null||d.startEditing(),e.zoomToSelection()},0)})})})),se(e,t,this.settings.layout.direction)&&(s.addSeparator(),s.addItem(a=>{a.setSection("canvas").setIcon("lasso-select").setTitle("Select tree").onClick(()=>{ne(e,t,this.settings.layout.direction)})}))}))}registerStatusBar(){var s,t;this.statusBar?(s=this.statusBar)==null||s.empty():this.statusBar=this.addStatusBarItem(),(t=this.statusBar)==null||t.toggleClass("mind-map-status-bar",!0),this.statusBar.createSpan({cls:"text-container"}).setText("Canvas mindmap: "),this.statusBar.createSpan({cls:"icon-container"},e=>{(0,f.setIcon)(e,R[this.settings.layout.direction].icon),e.toggleClass("reverse",R[this.settings.layout.direction].reverse)}),(0,f.setTooltip)(this.statusBar,"Current direction: "+R[this.settings.layout.direction].title)}registerStatusBarEvent(){this.registerDomEvent(this.statusBar,"click",s=>{let t=new f.Menu;Object.entries(R).forEach(([e,o])=>{t.addItem(a=>{a.setChecked(this.settings.layout.direction===e).setDisabled(this.settings.layout.direction===e).setIcon(o.icon).setTitle(o.title).onClick(()=>{this.settings.layout.direction=e,this.saveSettings(),this.registerStatusBar()}),a.iconEl&&a.iconEl.toggleClass("reverse",o.reverse)})}),t.showAtPosition({x:s.clientX,y:s.clientY})})}registerEditorExtensions(){let s=this.app.plugins.getPlugin("node-auto-resize");!this.settings.resize.autoResize||s||this.registerEditorExtension([he(this)])}patchMarkdownFileInfo(){let s=()=>{let t=this.app.workspace.activeEditor;if(!t||!t.node||!t||!t.containerEl||t.containerEl.closest(".common-editor-inputer"))return!1;let e=t.constructor,o=L(e.prototype,{showPreview:a=>function(r){var l,h;let d=a.call(this,r);return r&&((l=this.node)==null||l.canvas.wrapperEl.focus(),(h=this.node)==null||h.setIsEditing(!1)),d}});return this.register(o),console.log("Obsidian-Canvas-MindMap: markdown file info patched"),!0};this.app.workspace.onLayoutReady(()=>{if(!s()){let t=this.app.workspace.on("file-open",()=>{setTimeout(()=>{s()&&this.app.workspace.offref(t)},100)});this.registerEvent(t)}})}async loadSettings(){this.settings=Object.assign({},re,await this.loadData())}async saveSettings(){await this.saveData(this.settings),this.registerStatusBar()}},Q=class extends f.SuggestModal{constructor(s){super(s.app);this.plugin=s}getSuggestions(){return Object.keys(R)}getItemText(s){return R[s].title}renderSuggestion(s,t){t.createSpan({cls:"icon-container"},e=>{(0,f.setIcon)(e,R[s].icon),e.toggleClass("reverse",R[s].reverse)}),t.createSpan({cls:"text-container"}).setText(this.getItemText(s))}async onChooseSuggestion(s,t){this.plugin.settings.layout.direction=s,this.plugin.saveSettings(),this.plugin.registerStatusBar()}},z="cm-changelog-view",J=class extends f.ItemView{constructor(s,t,e){super(t);this.plugin=e,this.app=s,this.leaf=t}getViewType(){return z}getDisplayText(){return"Changelog of Canvas Mindmap"}getIcon(){return"rocket"}async onOpen(){this.contentEl.toggleClass(["changelog-content"],!0),this.contentEl.setText("Loading changelog..."),this.titleEl.setText("Canvas Mindmap v"+this.plugin.manifest.version);try{let t=await(0,f.requestUrl)({url:"https://raw.githubusercontent.com/quorafind/Obsidian-Canvas-MindMap/master/CHANGELOG.md",method:"GET"});if(t.status===200){let e=t.text,o=this.extractLatestChangelog(e);this.contentEl.empty(),await f.MarkdownRenderer.render(this.app,o,this.contentEl,"",this),await this.plugin.saveSettings()}else throw new Error(`Failed to fetch changelog: ${t.status}`)}catch(s){console.error("Error fetching changelog:",s),this.contentEl.setText("Failed to load changelog. Please try again later.")}}async onClose(){this.containerEl.empty()}extractLatestChangelog(s){let t=s.split(/^# /m);return t.length>1?"## "+t[1].trim():s}};

/* nosourcemap */