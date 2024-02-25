import{D as k,J as F,b as O,d as $,e as R,h as D,q as M,u as P,v as T,w as L}from"./chunk-JQ5II75R.js";import{c as o}from"./chunk-POLL2CVR.js";var I=(()=>{class s{constructor(t,e,i,a,n){this._legacyCanvasSize=s.DEFAULT_CANVAS_SIZE,this._preferredCamera="environment",this._maxScansPerSecond=25,this._lastScanTimestamp=-1,this._destroyed=this._flashOn=this._paused=this._active=!1,this.$video=t,this.$canvas=document.createElement("canvas"),i&&typeof i=="object"?this._onDecode=e:(console.warn(i||a||n?"You're using a deprecated version of the QrScanner constructor which will be removed in the future":"Note that the type of the scan result passed to onDecode will change in the future. To already switch to the new api today, you can pass returnDetailedScanResult: true."),this._legacyOnDecode=e),e=typeof i=="object"?i:{},this._onDecodeError=e.onDecodeError||(typeof i=="function"?i:this._onDecodeError),this._calculateScanRegion=e.calculateScanRegion||(typeof a=="function"?a:this._calculateScanRegion),this._preferredCamera=e.preferredCamera||n||this._preferredCamera,this._legacyCanvasSize=typeof i=="number"?i:typeof a=="number"?a:this._legacyCanvasSize,this._maxScansPerSecond=e.maxScansPerSecond||this._maxScansPerSecond,this._onPlay=this._onPlay.bind(this),this._onLoadedMetaData=this._onLoadedMetaData.bind(this),this._onVisibilityChange=this._onVisibilityChange.bind(this),this._updateOverlay=this._updateOverlay.bind(this),t.disablePictureInPicture=!0,t.playsInline=!0,t.muted=!0;let h=!1;if(t.hidden&&(t.hidden=!1,h=!0),document.body.contains(t)||(document.body.appendChild(t),h=!0),i=t.parentElement,e.highlightScanRegion||e.highlightCodeOutline){if(a=!!e.overlay,this.$overlay=e.overlay||document.createElement("div"),n=this.$overlay.style,n.position="absolute",n.display="none",n.pointerEvents="none",this.$overlay.classList.add("scan-region-highlight"),!a&&e.highlightScanRegion){this.$overlay.innerHTML='<svg class="scan-region-highlight-svg" viewBox="0 0 238 238" preserveAspectRatio="none" style="position:absolute;width:100%;height:100%;left:0;top:0;fill:none;stroke:#e9b213;stroke-width:4;stroke-linecap:round;stroke-linejoin:round"><path d="M31 2H10a8 8 0 0 0-8 8v21M207 2h21a8 8 0 0 1 8 8v21m0 176v21a8 8 0 0 1-8 8h-21m-176 0H10a8 8 0 0 1-8-8v-21"/></svg>';try{this.$overlay.firstElementChild.animate({transform:["scale(.98)","scale(1.01)"]},{duration:400,iterations:1/0,direction:"alternate",easing:"ease-in-out"})}catch{}i.insertBefore(this.$overlay,this.$video.nextSibling)}e.highlightCodeOutline&&(this.$overlay.insertAdjacentHTML("beforeend",'<svg class="code-outline-highlight" preserveAspectRatio="none" style="display:none;width:100%;height:100%;fill:none;stroke:#e9b213;stroke-width:5;stroke-dasharray:25;stroke-linecap:round;stroke-linejoin:round"><polygon/></svg>'),this.$codeOutlineHighlight=this.$overlay.lastElementChild)}this._scanRegion=this._calculateScanRegion(t),requestAnimationFrame(()=>{let c=window.getComputedStyle(t);c.display==="none"&&(t.style.setProperty("display","block","important"),h=!0),c.visibility!=="visible"&&(t.style.setProperty("visibility","visible","important"),h=!0),h&&(console.warn("QrScanner has overwritten the video hiding style to avoid Safari stopping the playback."),t.style.opacity="0",t.style.width="0",t.style.height="0",this.$overlay&&this.$overlay.parentElement&&this.$overlay.parentElement.removeChild(this.$overlay),delete this.$overlay,delete this.$codeOutlineHighlight),this.$overlay&&this._updateOverlay()}),t.addEventListener("play",this._onPlay),t.addEventListener("loadedmetadata",this._onLoadedMetaData),document.addEventListener("visibilitychange",this._onVisibilityChange),window.addEventListener("resize",this._updateOverlay),this._qrEnginePromise=s.createQrEngine()}static set WORKER_PATH(t){console.warn("Setting QrScanner.WORKER_PATH is not required and not supported anymore. Have a look at the README for new setup instructions.")}static hasCamera(){return o(this,null,function*(){try{return!!(yield s.listCameras(!1)).length}catch{return!1}})}static listCameras(t=!1){return o(this,null,function*(){if(!navigator.mediaDevices)return[];let e=()=>o(this,null,function*(){return(yield navigator.mediaDevices.enumerateDevices()).filter(a=>a.kind==="videoinput")}),i;try{t&&(yield e()).every(a=>!a.label)&&(i=yield navigator.mediaDevices.getUserMedia({audio:!1,video:!0}))}catch{}try{return(yield e()).map((a,n)=>({id:a.deviceId,label:a.label||(n===0?"Default Camera":`Camera ${n+1}`)}))}finally{i&&(console.warn("Call listCameras after successfully starting a QR scanner to avoid creating a temporary video stream"),s._stopVideoStream(i))}})}hasFlash(){return o(this,null,function*(){let t;try{if(this.$video.srcObject){if(!(this.$video.srcObject instanceof MediaStream))return!1;t=this.$video.srcObject}else t=(yield this._getCameraStream()).stream;return"torch"in t.getVideoTracks()[0].getSettings()}catch{return!1}finally{t&&t!==this.$video.srcObject&&(console.warn("Call hasFlash after successfully starting the scanner to avoid creating a temporary video stream"),s._stopVideoStream(t))}})}isFlashOn(){return this._flashOn}toggleFlash(){return o(this,null,function*(){this._flashOn?yield this.turnFlashOff():yield this.turnFlashOn()})}turnFlashOn(){return o(this,null,function*(){if(!this._flashOn&&!this._destroyed&&(this._flashOn=!0,this._active&&!this._paused))try{if(!(yield this.hasFlash()))throw"No flash available";yield this.$video.srcObject.getVideoTracks()[0].applyConstraints({advanced:[{torch:!0}]})}catch(t){throw this._flashOn=!1,t}})}turnFlashOff(){return o(this,null,function*(){this._flashOn&&(this._flashOn=!1,yield this._restartVideoStream())})}destroy(){this.$video.removeEventListener("loadedmetadata",this._onLoadedMetaData),this.$video.removeEventListener("play",this._onPlay),document.removeEventListener("visibilitychange",this._onVisibilityChange),window.removeEventListener("resize",this._updateOverlay),this._destroyed=!0,this._flashOn=!1,this.stop(),s._postWorkerMessage(this._qrEnginePromise,"close")}start(){return o(this,null,function*(){if(this._destroyed)throw Error("The QR scanner can not be started as it had been destroyed.");if((!this._active||this._paused)&&(window.location.protocol!=="https:"&&console.warn("The camera stream is only accessible if the page is transferred via https."),this._active=!0,!document.hidden))if(this._paused=!1,this.$video.srcObject)yield this.$video.play();else try{let{stream:t,facingMode:e}=yield this._getCameraStream();!this._active||this._paused?s._stopVideoStream(t):(this._setVideoMirror(e),this.$video.srcObject=t,yield this.$video.play(),this._flashOn&&(this._flashOn=!1,this.turnFlashOn().catch(()=>{})))}catch(t){if(!this._paused)throw this._active=!1,t}})}stop(){this.pause(),this._active=!1}pause(t=!1){return o(this,null,function*(){if(this._paused=!0,!this._active)return!0;this.$video.pause(),this.$overlay&&(this.$overlay.style.display="none");let e=()=>{this.$video.srcObject instanceof MediaStream&&(s._stopVideoStream(this.$video.srcObject),this.$video.srcObject=null)};return t?(e(),!0):(yield new Promise(i=>setTimeout(i,300)),this._paused?(e(),!0):!1)})}setCamera(t){return o(this,null,function*(){t!==this._preferredCamera&&(this._preferredCamera=t,yield this._restartVideoStream())})}static scanImage(t,e,i,a,n=!1,h=!1){return o(this,null,function*(){let c,g=!1;e&&("scanRegion"in e||"qrEngine"in e||"canvas"in e||"disallowCanvasResizing"in e||"alsoTryWithoutScanRegion"in e||"returnDetailedScanResult"in e)?(c=e.scanRegion,i=e.qrEngine,a=e.canvas,n=e.disallowCanvasResizing||!1,h=e.alsoTryWithoutScanRegion||!1,g=!0):console.warn(e||i||a||n||h?"You're using a deprecated api for scanImage which will be removed in the future.":"Note that the return type of scanImage will change in the future. To already switch to the new api today, you can pass returnDetailedScanResult: true."),e=!!i;try{let v,d;[i,v]=yield Promise.all([i||s.createQrEngine(),s._loadImage(t)]),[a,d]=s._drawToCanvas(v,c,a,n);let u;if(i instanceof Worker){let r=i;e||s._postWorkerMessageSync(r,"inversionMode","both"),u=yield new Promise((l,w)=>{let _,f,y,E=-1;f=p=>{p.data.id===E&&(r.removeEventListener("message",f),r.removeEventListener("error",y),clearTimeout(_),p.data.data!==null?l({data:p.data.data,cornerPoints:s._convertPoints(p.data.cornerPoints,c)}):w(s.NO_QR_CODE_FOUND))},y=p=>{r.removeEventListener("message",f),r.removeEventListener("error",y),clearTimeout(_),w("Scanner error: "+(p?p.message||p:"Unknown Error"))},r.addEventListener("message",f),r.addEventListener("error",y),_=setTimeout(()=>y("timeout"),1e4);let S=d.getImageData(0,0,a.width,a.height);E=s._postWorkerMessageSync(r,"decode",S,[S.data.buffer])})}else u=yield Promise.race([new Promise((r,l)=>window.setTimeout(()=>l("Scanner error: timeout"),1e4)),o(this,null,function*(){try{var[r]=yield i.detect(a);if(!r)throw s.NO_QR_CODE_FOUND;return{data:r.rawValue,cornerPoints:s._convertPoints(r.cornerPoints,c)}}catch(l){if(r=l.message||l,/not implemented|service unavailable/.test(r))return s._disableBarcodeDetector=!0,s.scanImage(t,{scanRegion:c,canvas:a,disallowCanvasResizing:n,alsoTryWithoutScanRegion:h});throw`Scanner error: ${r}`}})]);return g?u:u.data}catch(v){if(!c||!h)throw v;let d=yield s.scanImage(t,{qrEngine:i,canvas:a,disallowCanvasResizing:n});return g?d:d.data}finally{e||s._postWorkerMessage(i,"close")}})}setGrayscaleWeights(t,e,i,a=!0){s._postWorkerMessage(this._qrEnginePromise,"grayscaleWeights",{red:t,green:e,blue:i,useIntegerApproximation:a})}setInversionMode(t){s._postWorkerMessage(this._qrEnginePromise,"inversionMode",t)}static createQrEngine(t){return o(this,null,function*(){if(t&&console.warn("Specifying a worker path is not required and not supported anymore."),t=()=>import("./chunk-JTQEZ54C.js").then(i=>i.createWorker()),!(!s._disableBarcodeDetector&&"BarcodeDetector"in window&&BarcodeDetector.getSupportedFormats&&(yield BarcodeDetector.getSupportedFormats()).includes("qr_code")))return t();let e=navigator.userAgentData;return e&&e.brands.some(({brand:i})=>/Chromium/i.test(i))&&/mac ?OS/i.test(e.platform)&&(yield e.getHighEntropyValues(["architecture","platformVersion"]).then(({architecture:i,platformVersion:a})=>/arm/i.test(i||"arm")&&13<=parseInt(a||"13")).catch(()=>!0))?t():new BarcodeDetector({formats:["qr_code"]})})}_onPlay(){this._scanRegion=this._calculateScanRegion(this.$video),this._updateOverlay(),this.$overlay&&(this.$overlay.style.display=""),this._scanFrame()}_onLoadedMetaData(){this._scanRegion=this._calculateScanRegion(this.$video),this._updateOverlay()}_onVisibilityChange(){document.hidden?this.pause():this._active&&this.start()}_calculateScanRegion(t){let e=Math.round(.6666666666666666*Math.min(t.videoWidth,t.videoHeight));return{x:Math.round((t.videoWidth-e)/2),y:Math.round((t.videoHeight-e)/2),width:e,height:e,downScaledWidth:this._legacyCanvasSize,downScaledHeight:this._legacyCanvasSize}}_updateOverlay(){requestAnimationFrame(()=>{if(this.$overlay){var t=this.$video,e=t.videoWidth,i=t.videoHeight,a=t.offsetWidth,n=t.offsetHeight,h=t.offsetLeft,c=t.offsetTop,g=window.getComputedStyle(t),v=g.objectFit,d=e/i,u=a/n;switch(v){case"none":var r=e,l=i;break;case"fill":r=a,l=n;break;default:(v==="cover"?d>u:d<u)?(l=n,r=l*d):(r=a,l=r/d),v==="scale-down"&&(r=Math.min(r,e),l=Math.min(l,i))}var[w,_]=g.objectPosition.split(" ").map((y,E)=>{let S=parseFloat(y);return y.endsWith("%")?(E?n-l:a-r)*S/100:S});g=this._scanRegion.width||e,u=this._scanRegion.height||i,v=this._scanRegion.x||0;var f=this._scanRegion.y||0;d=this.$overlay.style,d.width=`${g/e*r}px`,d.height=`${u/i*l}px`,d.top=`${c+_+f/i*l}px`,i=/scaleX\(-1\)/.test(t.style.transform),d.left=`${h+(i?a-w-r:w)+(i?e-v-g:v)/e*r}px`,d.transform=t.style.transform}})}static _convertPoints(t,e){if(!e)return t;let i=e.x||0,a=e.y||0,n=e.width&&e.downScaledWidth?e.width/e.downScaledWidth:1;e=e.height&&e.downScaledHeight?e.height/e.downScaledHeight:1;for(let h of t)h.x=h.x*n+i,h.y=h.y*e+a;return t}_scanFrame(){!this._active||this.$video.paused||this.$video.ended||("requestVideoFrameCallback"in this.$video?this.$video.requestVideoFrameCallback.bind(this.$video):requestAnimationFrame)(()=>o(this,null,function*(){if(!(1>=this.$video.readyState)){var t=Date.now()-this._lastScanTimestamp,e=1e3/this._maxScansPerSecond;t<e&&(yield new Promise(a=>setTimeout(a,e-t))),this._lastScanTimestamp=Date.now();try{var i=yield s.scanImage(this.$video,{scanRegion:this._scanRegion,qrEngine:this._qrEnginePromise,canvas:this.$canvas})}catch(a){if(!this._active)return;this._onDecodeError(a)}!s._disableBarcodeDetector||(yield this._qrEnginePromise)instanceof Worker||(this._qrEnginePromise=s.createQrEngine()),i?(this._onDecode?this._onDecode(i):this._legacyOnDecode&&this._legacyOnDecode(i.data),this.$codeOutlineHighlight&&(clearTimeout(this._codeOutlineHighlightRemovalTimeout),this._codeOutlineHighlightRemovalTimeout=void 0,this.$codeOutlineHighlight.setAttribute("viewBox",`${this._scanRegion.x||0} ${this._scanRegion.y||0} ${this._scanRegion.width||this.$video.videoWidth} ${this._scanRegion.height||this.$video.videoHeight}`),this.$codeOutlineHighlight.firstElementChild.setAttribute("points",i.cornerPoints.map(({x:a,y:n})=>`${a},${n}`).join(" ")),this.$codeOutlineHighlight.style.display="")):this.$codeOutlineHighlight&&!this._codeOutlineHighlightRemovalTimeout&&(this._codeOutlineHighlightRemovalTimeout=setTimeout(()=>this.$codeOutlineHighlight.style.display="none",100))}this._scanFrame()}))}_onDecodeError(t){t!==s.NO_QR_CODE_FOUND&&console.log(t)}_getCameraStream(){return o(this,null,function*(){if(!navigator.mediaDevices)throw"Camera not found.";let t=/^(environment|user)$/.test(this._preferredCamera)?"facingMode":"deviceId",e=[{width:{min:1024}},{width:{min:768}},{}],i=e.map(a=>Object.assign({},a,{[t]:{exact:this._preferredCamera}}));for(let a of[...i,...e])try{let n=yield navigator.mediaDevices.getUserMedia({video:a,audio:!1}),h=this._getFacingMode(n)||(a.facingMode?this._preferredCamera:this._preferredCamera==="environment"?"user":"environment");return{stream:n,facingMode:h}}catch{}throw"Camera not found."})}_restartVideoStream(){return o(this,null,function*(){let t=this._paused;(yield this.pause(!0))&&!t&&this._active&&(yield this.start())})}static _stopVideoStream(t){for(let e of t.getTracks())e.stop(),t.removeTrack(e)}_setVideoMirror(t){this.$video.style.transform="scaleX("+(t==="user"?-1:1)+")"}_getFacingMode(t){return(t=t.getVideoTracks()[0])?/rear|back|environment/i.test(t.label)?"environment":/front|user|face/i.test(t.label)?"user":null:null}static _drawToCanvas(t,e,i,a=!1){i=i||document.createElement("canvas");let n=e&&e.x?e.x:0,h=e&&e.y?e.y:0,c=e&&e.width?e.width:t.videoWidth||t.width,g=e&&e.height?e.height:t.videoHeight||t.height;return a||(a=e&&e.downScaledWidth?e.downScaledWidth:c,e=e&&e.downScaledHeight?e.downScaledHeight:g,i.width!==a&&(i.width=a),i.height!==e&&(i.height=e)),e=i.getContext("2d",{alpha:!1}),e.imageSmoothingEnabled=!1,e.drawImage(t,n,h,c,g,0,0,i.width,i.height),[i,e]}static _loadImage(t){return o(this,null,function*(){if(t instanceof Image)return yield s._awaitImageLoad(t),t;if(t instanceof HTMLVideoElement||t instanceof HTMLCanvasElement||t instanceof SVGImageElement||"OffscreenCanvas"in window&&t instanceof OffscreenCanvas||"ImageBitmap"in window&&t instanceof ImageBitmap)return t;if(t instanceof File||t instanceof Blob||t instanceof URL||typeof t=="string"){let e=new Image;e.src=t instanceof File||t instanceof Blob?URL.createObjectURL(t):t.toString();try{return yield s._awaitImageLoad(e),e}finally{(t instanceof File||t instanceof Blob)&&URL.revokeObjectURL(e.src)}}else throw"Unsupported image type."})}static _awaitImageLoad(t){return o(this,null,function*(){t.complete&&t.naturalWidth!==0||(yield new Promise((e,i)=>{let a=n=>{t.removeEventListener("load",a),t.removeEventListener("error",a),n instanceof ErrorEvent?i("Image load error"):e()};t.addEventListener("load",a),t.addEventListener("error",a)}))})}static _postWorkerMessage(t,e,i,a){return o(this,null,function*(){return s._postWorkerMessageSync(yield t,e,i,a)})}static _postWorkerMessageSync(t,e,i,a){if(!(t instanceof Worker))return-1;let n=s._workerMessageId++;return t.postMessage({id:n,type:e,data:i},a),n}}return s.DEFAULT_CANVAS_SIZE=400,s.NO_QR_CODE_FOUND="No QR code found",s._disableBarcodeDetector=!1,s._workerMessageId=0,s})(),C=I;var x=["video"],H=(()=>{let m=class m{ngAfterViewInit(){this.videoEl&&this.videoEl.nativeElement&&this.readQRCode(this.videoEl.nativeElement)}ngOnDestroy(){this.videoEl&&this.videoEl.nativeElement&&this.stopStreaming(this.videoEl.nativeElement),this.stopScanning()}readQRCode(e){return o(this,null,function*(){let i=new C(e,n=>{alert(n.data)},{}),a=yield C.listCameras();return yield i.setCamera(this.chooseCam(a).id),yield i.start(),Promise.resolve()})}chooseCam(e){return e.length===1?e[0]:e.find(i=>/back/.test(i.label))||e[0]}stopScanning(){this.scanning&&(this.scanning.stop(),this.scanning.destroy())}stopStreaming(e){if(e){let i=e.srcObject;i instanceof MediaStream&&i.getTracks().forEach(a=>a.stop())}}};m.\u0275fac=function(i){return new(i||m)},m.\u0275cmp=$({type:m,selectors:[["agro-camera"]],viewQuery:function(i,a){if(i&1&&P(x,5,D),i&2){let n;T(n=L())&&(a.videoEl=n.first)}},decls:2,vars:0,consts:[["autoplay",""],["video",""]],template:function(i,a){i&1&&M(0,"video",0,1)},styles:["[_nghost-%COMP%], video[_ngcontent-%COMP%]{display:block;position:fixed;inset:0;height:100vh;width:100%;background-color:#000}"]});let s=m;return s})();var K=(()=>{let m=class m{};m.\u0275fac=function(i){return new(i||m)},m.\u0275mod=R({type:m}),m.\u0275inj=O({imports:[k,F.forChild([{path:"",component:H}])]});let s=m;return s})();export{K as CameraModule};
