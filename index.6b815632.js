// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"lSgxL":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "0cf78e626b815632";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"kuM8f":[function(require,module,exports) {
var _boardComponent = require("./board.component");
var _scoreboardComponent = require("./scoreboard.component");
var _room = require("./room");
var _vocabularies = require("./vocabularies");
// --- DOM refs ---
const lobbyEl = document.querySelector("#lobby");
const gameEl = document.querySelector("#game");
const nameInput = document.querySelector("#name-input");
const roomInput = document.querySelector("#room-input");
const vocabSelect = document.querySelector("#vocab-select");
const playBtn = document.querySelector("#play-btn");
const randomRoomBtn = document.querySelector("#random-room-btn");
const lobbyError = document.querySelector("#lobby-error");
const roomLabel = document.querySelector("#room-label");
const selfLabel = document.querySelector("#self-label");
const shareLinkEl = document.querySelector("#share-link");
const shareLinkText = document.querySelector("#share-link-text");
const shareLinkCopied = document.querySelector("#share-link-copied");
// --- Populate vocab selector ---
(0, _vocabularies.vocabularies).forEach((v)=>{
    const opt = document.createElement("option");
    opt.value = v.key;
    opt.textContent = v.label;
    vocabSelect.appendChild(opt);
});
// --- Pre-fill from URL ---
const params = new URLSearchParams(location.search);
const urlRoom = params.get("room");
const urlVocab = params.get("vocab");
const isCreator = !urlRoom || params.get("creator") === "1";
if (urlRoom) {
    roomInput.value = urlRoom;
    if (!isCreator) roomInput.disabled = true;
}
if (urlVocab) {
    vocabSelect.value = urlVocab;
    if (!isCreator) vocabSelect.disabled = true;
}
randomRoomBtn.addEventListener("click", ()=>{
    roomInput.value = Math.random().toString(36).slice(2, 8).toUpperCase();
});
playBtn.textContent = isCreator ? "Create" : "Join";
// --- Components ---
const board = new (0, _boardComponent.Board)(document.querySelector("#board"));
const scoreboard = new (0, _scoreboardComponent.Scoreboard)(document.querySelector("#scoreboard"));
// --- Game state ---
const participants = {};
let myId = "";
let roomVocabKey = "";
let room = null;
let stateReceived = false;
function renderScoreboard() {
    scoreboard.render(participants, myId);
}
function buildShareUrl(roomCode, vocabKey) {
    const url = new URL(location.href);
    url.searchParams.set("room", roomCode);
    url.searchParams.set("vocab", vocabKey);
    url.searchParams.delete("creator");
    return url.toString();
}
function pushCreatorUrl(roomCode, vocabKey) {
    const url = new URL(location.href);
    url.searchParams.set("room", roomCode);
    url.searchParams.set("vocab", vocabKey);
    url.searchParams.set("creator", "1");
    history.replaceState(null, "", url);
}
// --- Play ---
playBtn.addEventListener("click", ()=>{
    const name = nameInput.value.trim();
    const roomCode = roomInput.value.trim().toUpperCase();
    const vocabKey = vocabSelect.value;
    if (!name) {
        lobbyError.textContent = "Please enter your name.";
        return;
    }
    if (!roomCode) {
        lobbyError.textContent = "Please enter a room code.";
        return;
    }
    lobbyError.textContent = "";
    const vocabulary = (0, _vocabularies.vocabularies).find((v)=>v.key === vocabKey);
    roomVocabKey = vocabKey;
    if (isCreator) pushCreatorUrl(roomCode, vocabKey);
    // Transition to game screen
    lobbyEl.hidden = true;
    gameEl.hidden = false;
    roomLabel.textContent = `Room: ${roomCode}`;
    selfLabel.textContent = name;
    const shareUrl = buildShareUrl(roomCode, vocabKey);
    shareLinkText.textContent = shareUrl;
    let copyTimeout;
    shareLinkEl.addEventListener("click", ()=>{
        navigator.clipboard.writeText(shareUrl);
        shareLinkText.hidden = true;
        shareLinkCopied.hidden = false;
        clearTimeout(copyTimeout);
        copyTimeout = setTimeout(()=>{
            shareLinkCopied.hidden = true;
            shareLinkText.hidden = false;
        }, 2000);
    });
    // Connect to room
    room = new (0, _room.Room)(roomCode);
    myId = (0, _room.selfId);
    board.initializeWithVocabulary(vocabulary.words, roomCode + myId);
    participants[myId] = {
        id: myId,
        name,
        markedCount: 0,
        hasBingo: false
    };
    renderScoreboard();
    // Board mark → broadcast
    board.addEventListener("mark", (e)=>{
        const { markedCount , hasBingo  } = e.detail;
        participants[myId].markedCount = markedCount;
        participants[myId].hasBingo = hasBingo;
        renderScoreboard();
        room.broadcastMark({
            name,
            markedCount,
            hasBingo
        });
    });
    // Peer announces themselves → add to scoreboard + send them state
    room.addEventListener("peer-join-msg", (e)=>{
        const { peerId , name: peerName  } = e.detail;
        participants[peerId] = {
            id: peerId,
            name: peerName,
            markedCount: 0,
            hasBingo: false
        };
        renderScoreboard();
        room.sendStateTo(peerId, {
            vocabularyKey: roomVocabKey,
            participants: {
                ...participants
            }
        });
    });
    // Receive room state when joining an existing room
    room.addEventListener("state", (e)=>{
        if (stateReceived) return;
        stateReceived = true;
        const { participants: peers  } = e.detail;
        for (const p of Object.values(peers))if (p.id !== myId) participants[p.id] = p;
        renderScoreboard();
    });
    // Peer marks a word → update scoreboard (name included as fallback if join was missed)
    room.addEventListener("peer-mark", (e)=>{
        const { peerId , name: peerName , markedCount , hasBingo  } = e.detail;
        if (!participants[peerId]) participants[peerId] = {
            id: peerId,
            name: peerName,
            markedCount: 0,
            hasBingo: false
        };
        participants[peerId].markedCount = markedCount;
        participants[peerId].hasBingo = hasBingo;
        renderScoreboard();
    });
    // Peer disconnects → remove from scoreboard
    room.addEventListener("peer-left", (e)=>{
        delete participants[e.detail.peerId];
        renderScoreboard();
    });
    // When a new WebRTC connection is established, introduce ourselves directly.
    // broadcastJoin() below fires before connections exist, so this covers latecomers
    // and the case where signaling completes after the initial broadcast.
    room.addEventListener("peer-connected", (e)=>{
        room.sendJoinTo(e.detail.peerId, {
            name
        });
    });
    // Initial broadcast (catches peers already connected when we join)
    room.broadcastJoin({
        name
    });
});

},{"./board.component":"51ZnX","./scoreboard.component":"esDEU","./room":"eQYsX","./vocabularies":"281Lm"}],"51ZnX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Board", ()=>Board);
var _seededRandom = require("./seeded-random");
const randomWords = (num, vocabulary, rand = Math.random)=>{
    const pool = [
        ...vocabulary
    ];
    const selection = [];
    while(num-- > 0){
        const i = Math.floor(rand() * pool.length);
        selection.push(pool.splice(i, 1)[0]);
    }
    return selection;
};
const winningSequences = (cells)=>{
    const winSequences = [];
    const isWinning = (idxs)=>idxs.every((i)=>cells[i].selected || cells[i].bonus);
    const seq = (start, step, len = 5)=>Array.from({
            length: len
        }, (_, i)=>start + i * step);
    for(let r = 0; r < 5; r++)if (isWinning(seq(r * 5, 1))) winSequences.push(seq(r * 5, 1));
    for(let c = 0; c < 5; c++)if (isWinning(seq(c, 5))) winSequences.push(seq(c, 5));
    if (isWinning(seq(0, 6))) winSequences.push(seq(0, 6));
    if (isWinning(seq(20, -4))) winSequences.push(seq(20, -4));
    return winSequences;
};
const winningCells = (seqs)=>[
        ...new Set(seqs.flat())
    ];
class Board extends EventTarget {
    constructor(rootElement){
        super();
        this.rootElement = rootElement;
        this.cells = [];
        this.initializeListeners();
    }
    render() {
        this.rootElement.innerHTML = `
      <div class="board-grid">
        ${this.cells.map((c, i)=>`
          <div data-i="${i}" class="cell${c.bonus ? " bonus" : ""}${c.selected ? " selected" : ""}">
            <span class="word">${c.word}</span>
          </div>
        `).join("")}
      </div>
    `;
    }
    initializeListeners() {
        this.rootElement.addEventListener("click", (e)=>{
            const target = e.target.closest(".cell");
            if (!target) return;
            const index = parseInt(target.dataset["i"] ?? "");
            const cell = this.cells[index];
            if (!cell || cell.bonus) return;
            cell.selected = !cell.selected;
            target.classList.toggle("selected");
            const winCells = winningCells(winningSequences(this.cells));
            this.rootElement.querySelectorAll(".cell").forEach((el, i)=>{
                el.classList.toggle("winning", winCells.includes(i));
            });
            const markedCount = this.cells.filter((c)=>c.selected && !c.bonus).length;
            const hasBingo = winCells.length > 0;
            this.dispatchEvent(new CustomEvent("mark", {
                detail: {
                    markedCount,
                    hasBingo
                }
            }));
        });
    }
    initializeWithVocabulary(vocabulary, seed) {
        const rand = seed ? (0, _seededRandom.makeSeededRandom)(seed) : Math.random;
        const words = randomWords(24, vocabulary, rand);
        this.cells = words.map((word)=>({
                word,
                bonus: false,
                selected: false
            }));
        this.cells.splice(12, 0, {
            word: "FREE",
            bonus: true,
            selected: true
        });
        this.render();
    }
}

},{"./seeded-random":"5sexV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5sexV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "makeSeededRandom", ()=>makeSeededRandom);
function hashString(str) {
    let h = 0x811c9dc5;
    for(let i = 0; i < str.length; i++){
        h ^= str.charCodeAt(i);
        h = Math.imul(h, 0x01000193) >>> 0;
    }
    return h;
}
function makeSeededRandom(seed) {
    let s = hashString(seed);
    return ()=>{
        s = s + 0x9e3779b9 | 0;
        let t = s ^ s >>> 16;
        t = Math.imul(t, 0x21f0aaad);
        t = t ^ t >>> 15;
        t = Math.imul(t, 0x735a2d97);
        return ((t ^ t >>> 15) >>> 0) / 4294967296;
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"esDEU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Scoreboard", ()=>Scoreboard);
class Scoreboard {
    constructor(rootElement){
        this.rootElement = rootElement;
        this.rootElement.innerHTML = '<h3>Players</h3><ul class="scoreboard-list"></ul>';
    }
    render(participants, selfId) {
        const sorted = Object.values(participants).sort((a, b)=>b.markedCount - a.markedCount);
        this.rootElement.innerHTML = `
      <h3>Players</h3>
      <ul class="scoreboard-list">
        ${sorted.map((p)=>`
          <li class="scoreboard-entry${p.id === selfId ? " self" : ""}${p.hasBingo ? " bingo" : ""}">
            <span class="player-name">${escapeHtml(p.name)}${p.id === selfId ? " (you)" : ""}</span>
            <span class="player-score">${p.markedCount}/24${p.hasBingo ? " — BINGO!" : ""}</span>
          </li>
        `).join("")}
      </ul>
    `;
    }
}
function escapeHtml(str) {
    return str.replace(/[&<>"']/g, (c)=>({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        })[c]);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eQYsX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "selfId", ()=>(0, _torrent.selfId));
parcelHelpers.export(exports, "Room", ()=>Room);
var _torrent = require("@trystero-p2p/torrent");
class Room extends EventTarget {
    constructor(roomCode){
        super();
        this._room = (0, _torrent.joinRoom)({
            appId: "buzzword-bingo-v1"
        }, roomCode);
        const [sendMark, getMark] = this._room.makeAction("mark");
        const [sendJoin, getJoin] = this._room.makeAction("join");
        const [sendState, getState] = this._room.makeAction("state");
        this._sendMark = sendMark;
        this._sendJoin = sendJoin;
        this._sendState = sendState;
        getMark((data, peerId)=>this.dispatchEvent(new CustomEvent("peer-mark", {
                detail: {
                    ...data,
                    peerId
                }
            })));
        getJoin((data, peerId)=>this.dispatchEvent(new CustomEvent("peer-join-msg", {
                detail: {
                    ...data,
                    peerId
                }
            })));
        getState((data, _peerId)=>this.dispatchEvent(new CustomEvent("state", {
                detail: data
            })));
        this._room.onPeerJoin((peerId)=>this.dispatchEvent(new CustomEvent("peer-connected", {
                detail: {
                    peerId
                }
            })));
        this._room.onPeerLeave((peerId)=>this.dispatchEvent(new CustomEvent("peer-left", {
                detail: {
                    peerId
                }
            })));
    }
    broadcastMark(data) {
        this._sendMark(data);
    }
    broadcastJoin(data) {
        this._sendJoin(data);
    }
    sendJoinTo(peerId, data) {
        this._sendJoin(data, peerId);
    }
    sendStateTo(peerId, data) {
        this._sendState(data, peerId);
    }
    getPeerIds() {
        return Object.keys(this._room.getPeers());
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@trystero-p2p/torrent":"Uii0l"}],"Uii0l":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
//#endregion
parcelHelpers.export(exports, "defaultRelayUrls", ()=>defaultRelayUrls);
parcelHelpers.export(exports, "getRelaySockets", ()=>getRelaySockets);
parcelHelpers.export(exports, "joinRoom", ()=>joinRoom);
parcelHelpers.export(exports, "pauseRelayReconnection", ()=>(0, _core.pauseRelayReconnection));
parcelHelpers.export(exports, "resumeRelayReconnection", ()=>(0, _core.resumeRelayReconnection));
parcelHelpers.export(exports, "selfId", ()=>(0, _core.selfId));
var _core = require("@trystero-p2p/core");
//#region src/index.ts
const relayManager = (0, _core.createRelayManager)((client)=>client.socket);
const topicToInfoHash = {};
const infoHashToTopic = {};
const announceIntervals = relayManager.scoped();
const announceFns = relayManager.scoped();
const subscriptionTokens = relayManager.scoped();
const trackerAnnounceMs = {};
const handledSignals = {};
const msgHandlers = relayManager.scoped();
const roomOutstandingOffers = {};
const roomOfferGenerationPromises = {};
const roomSubscriberCounts = {};
const trackerAction = "announce";
const hashLimit = 20;
const offerPoolSize = 3;
const defaultAnnounceMs = 1e4;
const maxAnnounceMs = 2e4;
const offerRetentionMs = 12e4;
const signalDedupeWindowMs = 4e3;
const defaultRedundancy = 3;
const getInfoHash = async (topic)=>{
    if (topicToInfoHash[topic]) return topicToInfoHash[topic];
    const hash = (await (0, _core.sha1)(topic)).slice(0, hashLimit);
    topicToInfoHash[topic] = hash;
    infoHashToTopic[hash] = topic;
    return hash;
};
const send = async (client, topic, payload)=>client.send((0, _core.toJson)({
        action: trackerAction,
        info_hash: await getInfoHash(topic),
        peer_id: (0, _core.selfId),
        ...payload
    }));
const warn = (url, msg, didFail = false)=>console.warn(`${(0, _core.libName)}: torrent tracker ${didFail ? "failure" : "warning"} from ${url} - ${msg}`);
const getRoomOutstandingOffers = (rootTopic)=>roomOutstandingOffers[rootTopic] ??= {};
const deleteRoomOfferBookkeeping = (rootTopic)=>{
    delete roomOutstandingOffers[rootTopic];
    delete roomOfferGenerationPromises[rootTopic];
};
const claimOutstandingOffer = (rootTopic, offerId)=>{
    const outstandingOffers = roomOutstandingOffers[rootTopic];
    const offer = outstandingOffers?.[offerId];
    if (!offer) return;
    delete outstandingOffers[offerId];
    offer.claim?.();
    if (!(0, _core.keys)(outstandingOffers).length && !roomSubscriberCounts[rootTopic]) deleteRoomOfferBookkeeping(rootTopic);
    return offer;
};
const reclaimOutstandingOffer = (rootTopic, offerId)=>{
    const outstandingOffers = roomOutstandingOffers[rootTopic];
    const offer = outstandingOffers?.[offerId];
    if (!offer) return;
    delete outstandingOffers[offerId];
    offer.reclaim?.();
    if (!(0, _core.keys)(outstandingOffers).length && !roomSubscriberCounts[rootTopic]) deleteRoomOfferBookkeeping(rootTopic);
};
const reclaimAllOutstandingOffers = (rootTopic)=>{
    (0, _core.keys)(getRoomOutstandingOffers(rootTopic)).forEach((offerId)=>reclaimOutstandingOffer(rootTopic, offerId));
    deleteRoomOfferBookkeeping(rootTopic);
};
const pruneOutstandingOffers = (rootTopic)=>{
    const now = Date.now();
    (0, _core.entries)(getRoomOutstandingOffers(rootTopic)).forEach(([offerId, offer])=>{
        if (now - offer.createdAt > offerRetentionMs) reclaimOutstandingOffer(rootTopic, offerId);
    });
};
const ensureOutstandingOffers = async (rootTopic, getOffers)=>{
    while(roomOfferGenerationPromises[rootTopic])await roomOfferGenerationPromises[rootTopic];
    const nextPromise = (async ()=>{
        pruneOutstandingOffers(rootTopic);
        const outstandingOffers = getRoomOutstandingOffers(rootTopic);
        const outstandingCount = (0, _core.keys)(outstandingOffers).length;
        const missingOffers = Math.max(0, offerPoolSize - outstandingCount);
        if (missingOffers > 0) (await getOffers(missingOffers)).forEach((peerAndOffer)=>{
            outstandingOffers[(0, _core.genId)(hashLimit)] = {
                ...peerAndOffer,
                createdAt: Date.now()
            };
        });
    })().finally(()=>{
        if (roomOfferGenerationPromises[rootTopic] === nextPromise) delete roomOfferGenerationPromises[rootTopic];
    });
    roomOfferGenerationPromises[rootTopic] = nextPromise;
    await nextPromise;
    return getRoomOutstandingOffers(rootTopic);
};
const joinRoomStrategy = (0, _core.createStrategy)({
    init: (config)=>(0, _core.getRelays)(config, defaultRelayUrls, defaultRedundancy).map((rawUrl)=>{
            const client = relayManager.register(rawUrl, (0, _core.makeSocket)(rawUrl, (rawData)=>{
                const data = (0, _core.fromJson)(rawData);
                const errMsg = data["failure reason"];
                const warnMsg = data["warning message"];
                const { interval  } = data;
                const topic = data.info_hash ? infoHashToTopic[data.info_hash] : void 0;
                if (errMsg) {
                    warn(client.url, errMsg, true);
                    return;
                }
                if (warnMsg) warn(client.url, warnMsg);
                if (interval && interval * 1e3 > (trackerAnnounceMs[client.url] ?? defaultAnnounceMs) && topic && announceFns.forKey(rawUrl)[topic]) {
                    const nextInterval = Math.min(interval * 1e3, maxAnnounceMs);
                    const relayIntervals = announceIntervals.forKey(rawUrl);
                    const relayFns = announceFns.forKey(rawUrl);
                    if (relayIntervals[topic]) clearInterval(relayIntervals[topic]);
                    trackerAnnounceMs[client.url] = nextInterval;
                    const relayFn = relayFns[topic];
                    if (relayFn) relayIntervals[topic] = setInterval(()=>{
                        relayFn();
                    }, nextInterval);
                }
                if ((data.offer || data.answer) && topic && data.offer_id) {
                    if (data.peer_id === (0, _core.selfId)) return;
                    const signalKey = `${topic}:${data.offer ? "offer" : "answer"}:${data.offer_id}:${data.peer_id ?? ""}`;
                    const nowMs = Date.now();
                    const lastHandledMs = handledSignals[signalKey];
                    if (typeof lastHandledMs === "number" && nowMs - lastHandledMs < signalDedupeWindowMs) return;
                    handledSignals[signalKey] = nowMs;
                    (0, _core.entries)(handledSignals).forEach(([key, handledAtMs])=>{
                        if (nowMs - handledAtMs > signalDedupeWindowMs * 6) delete handledSignals[key];
                    });
                    msgHandlers.forKey(rawUrl)[topic]?.(data);
                }
            }));
            return client.ready;
        }),
    subscribe: (client, rootTopic, _, onMessage, getOffers)=>{
        const handlers = msgHandlers.forRelay(client);
        const relayFns = announceFns.forRelay(client);
        const relayIntervals = announceIntervals.forRelay(client);
        const activeTokens = subscriptionTokens.forRelay(client);
        const subscriptionToken = Symbol(rootTopic);
        activeTokens[rootTopic] = subscriptionToken;
        roomSubscriberCounts[rootTopic] = (roomSubscriberCounts[rootTopic] ?? 0) + 1;
        const topicHandler = (data)=>{
            if (data.offer && data.peer_id && data.offer_id) onMessage(rootTopic, {
                offer: data.offer.sdp,
                peerId: data.peer_id,
                hasOutgoingOffer: (0, _core.keys)(getRoomOutstandingOffers(rootTopic)).length > 0
            }, (_, signal)=>void send(client, rootTopic, {
                    answer: {
                        type: "answer",
                        sdp: (0, _core.fromJson)(signal).answer
                    },
                    offer_id: data.offer_id,
                    to_peer_id: data.peer_id
                }));
            else if (data.answer && data.offer_id && data.peer_id) {
                const offer = claimOutstandingOffer(rootTopic, data.offer_id);
                if (offer) onMessage(rootTopic, {
                    answer: data.answer.sdp,
                    peerId: data.peer_id,
                    peer: offer.peer
                }, ()=>{});
            }
        };
        handlers[rootTopic] = topicHandler;
        const announce = async ()=>{
            if (activeTokens[rootTopic] !== subscriptionToken) return;
            send(client, rootTopic, {
                numwant: offerPoolSize,
                offers: (0, _core.entries)(await ensureOutstandingOffers(rootTopic, getOffers)).map(([id, { offer  }])=>({
                        offer_id: id,
                        offer: {
                            type: "offer",
                            sdp: offer
                        }
                    }))
            });
        };
        trackerAnnounceMs[client.url] = defaultAnnounceMs;
        relayFns[rootTopic] = announce;
        relayIntervals[rootTopic] = setInterval(announce, trackerAnnounceMs[client.url]);
        announce();
        return ()=>{
            roomSubscriberCounts[rootTopic] = Math.max(0, (roomSubscriberCounts[rootTopic] ?? 1) - 1);
            if (!roomSubscriberCounts[rootTopic]) delete roomSubscriberCounts[rootTopic];
            if (activeTokens[rootTopic] !== subscriptionToken) {
                if (!roomSubscriberCounts[rootTopic]) reclaimAllOutstandingOffers(rootTopic);
                return;
            }
            const interval = relayIntervals[rootTopic];
            if (interval) {
                clearInterval(interval);
                delete relayIntervals[rootTopic];
            }
            if (handlers[rootTopic] === topicHandler) delete handlers[rootTopic];
            if (relayFns[rootTopic] === announce) delete relayFns[rootTopic];
            delete activeTokens[rootTopic];
            if (!roomSubscriberCounts[rootTopic]) reclaimAllOutstandingOffers(rootTopic);
        };
    },
    announce: (client)=>trackerAnnounceMs[client.url]
});
const joinRoom = (config, roomId, callbacks)=>joinRoomStrategy({
        ...config,
        trickleIce: config.trickleIce ?? false
    }, roomId, callbacks);
const getRelaySockets = relayManager.getSockets;
const defaultRelayUrls = [
    "tracker.webtorrent.dev",
    "tracker.openwebtorrent.com",
    "tracker.btorrent.xyz",
    "tracker.files.fm:7073/announce"
].map((url)=>"wss://" + url);

},{"@trystero-p2p/core":"20wDp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"20wDp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "all", ()=>(0, _utilsMjs.all));
parcelHelpers.export(exports, "createRelayManager", ()=>(0, _utilsMjs.createRelayManager));
parcelHelpers.export(exports, "createStrategy", ()=>(0, _strategyMjsDefault.default));
parcelHelpers.export(exports, "decodeBytes", ()=>(0, _utilsMjs.decodeBytes));
parcelHelpers.export(exports, "encodeBytes", ()=>(0, _utilsMjs.encodeBytes));
parcelHelpers.export(exports, "entries", ()=>(0, _utilsMjs.entries));
parcelHelpers.export(exports, "fromJson", ()=>(0, _utilsMjs.fromJson));
parcelHelpers.export(exports, "genId", ()=>(0, _utilsMjs.genId));
parcelHelpers.export(exports, "getRelays", ()=>(0, _utilsMjs.getRelays));
parcelHelpers.export(exports, "hashWith", ()=>(0, _cryptoMjs.hashWith));
parcelHelpers.export(exports, "keys", ()=>(0, _utilsMjs.keys));
parcelHelpers.export(exports, "libName", ()=>(0, _utilsMjs.libName));
parcelHelpers.export(exports, "makeSocket", ()=>(0, _utilsMjs.makeSocket));
parcelHelpers.export(exports, "pauseRelayReconnection", ()=>(0, _utilsMjs.pauseRelayReconnection));
parcelHelpers.export(exports, "resumeRelayReconnection", ()=>(0, _utilsMjs.resumeRelayReconnection));
parcelHelpers.export(exports, "selfId", ()=>(0, _utilsMjs.selfId));
parcelHelpers.export(exports, "sha1", ()=>(0, _cryptoMjs.sha1));
parcelHelpers.export(exports, "socketGetter", ()=>(0, _utilsMjs.socketGetter));
parcelHelpers.export(exports, "strToNum", ()=>(0, _utilsMjs.strToNum));
parcelHelpers.export(exports, "toHex", ()=>(0, _utilsMjs.toHex));
parcelHelpers.export(exports, "toJson", ()=>(0, _utilsMjs.toJson));
parcelHelpers.export(exports, "values", ()=>(0, _utilsMjs.values));
var _utilsMjs = require("./utils.mjs");
var _cryptoMjs = require("./crypto.mjs");
var _strategyMjs = require("./strategy.mjs");
var _strategyMjsDefault = parcelHelpers.interopDefault(_strategyMjs);

},{"./utils.mjs":"dHdo5","./crypto.mjs":"lEcMG","./strategy.mjs":"8KzlH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dHdo5":[function(require,module,exports) {
//#region src/utils.ts
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
//#endregion
parcelHelpers.export(exports, "all", ()=>all);
parcelHelpers.export(exports, "alloc", ()=>alloc);
parcelHelpers.export(exports, "candidateType", ()=>candidateType);
parcelHelpers.export(exports, "createRelayManager", ()=>createRelayManager);
parcelHelpers.export(exports, "decodeBytes", ()=>decodeBytes);
parcelHelpers.export(exports, "encodeBytes", ()=>encodeBytes);
parcelHelpers.export(exports, "entries", ()=>entries);
parcelHelpers.export(exports, "fromEntries", ()=>fromEntries);
parcelHelpers.export(exports, "fromJson", ()=>fromJson);
parcelHelpers.export(exports, "genId", ()=>genId);
parcelHelpers.export(exports, "getRelays", ()=>getRelays);
parcelHelpers.export(exports, "isBrowser", ()=>isBrowser);
parcelHelpers.export(exports, "keys", ()=>keys);
parcelHelpers.export(exports, "libName", ()=>libName);
parcelHelpers.export(exports, "log", ()=>log);
parcelHelpers.export(exports, "makeSocket", ()=>makeSocket);
parcelHelpers.export(exports, "mkErr", ()=>mkErr);
parcelHelpers.export(exports, "noOp", ()=>noOp);
parcelHelpers.export(exports, "pauseRelayReconnection", ()=>pauseRelayReconnection);
parcelHelpers.export(exports, "resetTimer", ()=>resetTimer);
parcelHelpers.export(exports, "resumeRelayReconnection", ()=>resumeRelayReconnection);
parcelHelpers.export(exports, "selfId", ()=>selfId);
parcelHelpers.export(exports, "socketGetter", ()=>socketGetter);
parcelHelpers.export(exports, "strToNum", ()=>strToNum);
parcelHelpers.export(exports, "toError", ()=>toError);
parcelHelpers.export(exports, "toErrorMessage", ()=>toErrorMessage);
parcelHelpers.export(exports, "toHex", ()=>toHex);
parcelHelpers.export(exports, "toJson", ()=>toJson);
parcelHelpers.export(exports, "topicPath", ()=>topicPath);
parcelHelpers.export(exports, "values", ()=>values);
parcelHelpers.export(exports, "watchOnline", ()=>watchOnline);
const { floor , random , sin  } = Math;
const libName = "Trystero";
const alloc = (n, f)=>Array(n).fill(void 0).map(f);
const charSet = "0123456789AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";
const genId = (n)=>alloc(n, ()=>charSet[floor(random() * 62)] ?? "").join("");
const selfId = genId(20);
const all = Promise.all.bind(Promise);
const isBrowser = typeof window !== "undefined";
const { entries , fromEntries , keys , values  } = Object;
const noOp = ()=>{};
const candidateType = "candidate";
const resetTimer = (timer)=>{
    if (timer !== null) clearTimeout(timer);
    return null;
};
const mkErr = (msg)=>/* @__PURE__ */ new Error(`${libName}: ${msg}`);
const toErrorMessage = (reason, fallback)=>{
    if (reason instanceof Error && reason.message) return reason.message;
    if (typeof reason === "string" && reason) return reason;
    return toJson(reason ?? fallback);
};
const toError = (reason, fallback)=>reason instanceof Error ? reason : mkErr(toErrorMessage(reason, fallback));
const encoder = new TextEncoder();
const decoder = new TextDecoder();
const encodeBytes = (txt)=>encoder.encode(txt);
const decodeBytes = (buffer)=>decoder.decode(buffer);
const toHex = (buffer)=>buffer.reduce((a, c)=>a + c.toString(16).padStart(2, "0"), "");
const topicPath = (...parts)=>parts.join("@");
const shuffle = (xs, seed)=>{
    const a = [
        ...xs
    ];
    const rand = ()=>{
        const x = sin(seed++) * 1e4;
        return x - floor(x);
    };
    let i = a.length;
    while(i){
        const j = floor(rand() * i--);
        const tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
    return a;
};
const getRelays = (config, defaults, defaultN, deriveFromAppId = false)=>config.relayConfig?.urls || (deriveFromAppId ? shuffle(defaults, strToNum(config.appId)) : defaults).slice(0, config.relayConfig?.redundancy ?? defaultN);
const toJson = JSON.stringify;
const fromJson = (s)=>{
    try {
        return JSON.parse(s);
    } catch  {
        throw mkErr(`failed to parse JSON: ${s}`);
    }
};
const strToNum = (str, limit = Number.MAX_SAFE_INTEGER)=>str.split("").reduce((a, c)=>a + c.charCodeAt(0), 0) % limit;
const defaultRetryMs = 3333;
const socketRetryPeriods = {};
let reconnectionLockingPromise = null;
let resolver = null;
const pauseRelayReconnection = ()=>{
    if (!reconnectionLockingPromise) reconnectionLockingPromise = new Promise((resolve)=>{
        resolver = resolve;
    }).finally(()=>{
        resolver = null;
        reconnectionLockingPromise = null;
    });
};
const resumeRelayReconnection = ()=>{
    resolver?.();
};
const makeSocket = (url, onMessage)=>{
    const client = {};
    const init = ()=>{
        const socket = new WebSocket(url);
        socket.onclose = ()=>{
            if (reconnectionLockingPromise) {
                reconnectionLockingPromise.then(init);
                return;
            }
            socketRetryPeriods[url] ??= defaultRetryMs;
            setTimeout(init, socketRetryPeriods[url]);
            socketRetryPeriods[url] *= 2;
        };
        socket.onmessage = (e)=>onMessage(String(e.data));
        client.socket = socket;
        client.url = socket.url;
        client.ready = new Promise((res)=>socket.onopen = ()=>{
                res(client);
                socketRetryPeriods[url] = defaultRetryMs;
            });
        client.send = (data)=>{
            if (socket.readyState === 1) socket.send(data);
        };
    };
    init();
    return client;
};
const socketGetter = (clientMap)=>()=>fromEntries(entries(clientMap).map(([url, client])=>[
                url,
                client.socket
            ]));
const createRelayManager = (getSocket)=>{
    const relays = {};
    const keysByRelay = /* @__PURE__ */ new WeakMap();
    const keyOf = (relay)=>{
        const key = keysByRelay.get(relay);
        if (!key) throw mkErr("relay bookkeeping missing registration for relay client");
        return key;
    };
    const scoped = ()=>{
        const store = {};
        const forKey = (key)=>store[key] ??= {};
        return {
            forKey,
            forRelay: (relay)=>forKey(keyOf(relay))
        };
    };
    return {
        register: (key, relay)=>{
            relays[key] = relay;
            keysByRelay.set(relay, key);
            return relay;
        },
        keyOf,
        scoped,
        getSockets: ()=>fromEntries(entries(relays).flatMap(([key, relay])=>{
                const socket = getSocket(relay);
                return socket ? [
                    [
                        key,
                        socket
                    ]
                ] : [];
            }))
    };
};
const watchOnline = ()=>{
    if (isBrowser) {
        const controller = new AbortController();
        addEventListener("online", resumeRelayReconnection, {
            signal: controller.signal
        });
        addEventListener("offline", pauseRelayReconnection, {
            signal: controller.signal
        });
        return ()=>controller.abort();
    }
    return noOp;
};
const log = (...args)=>console.log(...args);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lEcMG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
//#endregion
parcelHelpers.export(exports, "decrypt", ()=>decrypt);
parcelHelpers.export(exports, "deriveRoomNamespace", ()=>deriveRoomNamespace);
parcelHelpers.export(exports, "encrypt", ()=>encrypt);
parcelHelpers.export(exports, "genKey", ()=>genKey);
parcelHelpers.export(exports, "hashWith", ()=>hashWith);
parcelHelpers.export(exports, "sha1", ()=>sha1);
var _utilsMjs = require("./utils.mjs");
//#region src/crypto.ts
const algo = "AES-GCM";
const strToSha1 = {};
const pack = (buff)=>btoa(String.fromCharCode.apply(null, Array.from(new Uint8Array(buff))));
const unpack = (packed)=>{
    const str = atob(packed);
    return new Uint8Array(str.length).map((_, i)=>str.charCodeAt(i)).buffer;
};
const hashWith = async (algorithm, str)=>new Uint8Array(await crypto.subtle.digest(algorithm, (0, _utilsMjs.encodeBytes)(str)));
const sha1 = async (str)=>strToSha1[str] ??= Array.from(await hashWith("SHA-1", str)).map((b)=>b.toString(36)).join("");
const genKey = async (secret, appId, roomId)=>crypto.subtle.importKey("raw", await crypto.subtle.digest({
        name: "SHA-256"
    }, (0, _utilsMjs.encodeBytes)(`${secret}:${appId}:${roomId}`)), {
        name: algo
    }, false, [
        "encrypt",
        "decrypt"
    ]);
const deriveRoomNamespace = async (appId, roomId)=>(0, _utilsMjs.toHex)(await hashWith("SHA-256", `${(0, _utilsMjs.libName)}:${appId}:${roomId}`));
const joinChar = "$";
const ivJoinChar = ",";
const encrypt = async (keyP, plaintext)=>{
    const iv = crypto.getRandomValues(new Uint8Array(16));
    return iv.join(ivJoinChar) + joinChar + pack(await crypto.subtle.encrypt({
        name: algo,
        iv
    }, await keyP, (0, _utilsMjs.encodeBytes)(plaintext)));
};
const decrypt = async (keyP, raw)=>{
    const [iv, c] = raw.split(joinChar);
    return (0, _utilsMjs.decodeBytes)(await crypto.subtle.decrypt({
        name: algo,
        iv: new Uint8Array(iv?.split(ivJoinChar).map(Number) ?? [])
    }, await keyP, unpack(c ?? "")));
};

},{"./utils.mjs":"dHdo5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8KzlH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
//#endregion
parcelHelpers.export(exports, "default", ()=>strategy_default);
var _utilsMjs = require("./utils.mjs");
var _cryptoMjs = require("./crypto.mjs");
var _offerPoolMjs = require("./offer-pool.mjs");
var _handshakeMjs = require("./handshake.mjs");
var _peerMjs = require("./peer.mjs");
var _peerMjsDefault = parcelHelpers.interopDefault(_peerMjs);
var _roomMjs = require("./room.mjs");
var _roomMjsDefault = parcelHelpers.interopDefault(_roomMjs);
var _sharedPeerMjs = require("./shared-peer.mjs");
var _signalHandlerMjs = require("./signal-handler.mjs");
//#region src/strategy.ts
const announceIntervalMs = 5333;
const announceWarmupIntervalsMs = [
    233,
    533,
    1333
];
const sharedPeerIdleMsDefault = 123333;
var strategy_default = ({ init , subscribe , announce  })=>{
    const occupiedRooms = {};
    const roomRegistrations = {};
    const roomIdsByToken = {};
    const roomPresenceHandlerCleanups = {};
    const sharedPeers = new (0, _sharedPeerMjs.SharedPeerManager)();
    const hasActiveRooms = ()=>(0, _utilsMjs.values)(occupiedRooms).some((rooms)=>(0, _utilsMjs.keys)(rooms).length > 0);
    const getRoomRegistrations = (appId)=>roomRegistrations[appId] ??= {};
    const getRoomIdsByToken = (appId)=>roomIdsByToken[appId] ??= {};
    const advertiseRoomPresence = (shared, roomToken, isPresent)=>{
        if (sharedPeers.getHealth(shared.peer) === "live") sharedPeers.sendRoomPresence(shared, roomToken, isPresent);
    };
    const advertiseKnownRoomsToShared = (appId, shared)=>{
        (0, _utilsMjs.entries)(roomRegistrations[appId] ?? {}).forEach(([roomId, registration])=>{
            const { roomToken , roomTokenPromise  } = registration;
            if (roomToken) {
                advertiseRoomPresence(shared, roomToken, true);
                return;
            }
            roomTokenPromise.then((token)=>{
                if (roomRegistrations[appId]?.[roomId] !== registration) return;
                if (registration.roomToken !== token) return;
                if (sharedPeers.get(appId, shared.peerId) !== shared || shared.isClosing) return;
                advertiseRoomPresence(shared, token, true);
            });
        });
    };
    const advertiseRoomPresenceToAll = (appId, roomToken, isPresent)=>(0, _utilsMjs.values)(sharedPeers.getMap(appId)).forEach((shared)=>advertiseRoomPresence(shared, roomToken, isPresent));
    const ensureRoomPresenceHandler = (appId)=>{
        if (roomPresenceHandlerCleanups[appId]) return;
        roomPresenceHandlerCleanups[appId] = sharedPeers.setRoomPresenceHandler(appId, (peerId, roomToken, isPresent)=>{
            if (!isPresent) return;
            const shared = sharedPeers.get(appId, peerId);
            const roomId = roomIdsByToken[appId]?.[roomToken];
            if (!shared || !roomId) return;
            roomRegistrations[appId]?.[roomId]?.attachSharedPeerToRoom(peerId, shared);
        });
    };
    const cleanupRoomPresenceHandler = (appId)=>{
        if (occupiedRooms[appId] && (0, _utilsMjs.keys)(occupiedRooms[appId]).length > 0) return;
        roomPresenceHandlerCleanups[appId]?.();
        delete roomPresenceHandlerCleanups[appId];
        delete roomRegistrations[appId];
        delete roomIdsByToken[appId];
    };
    let didInit = false;
    let initPromises = [];
    let offerPool = null;
    let cleanupWatchOnline = (0, _utilsMjs.noOp);
    return (config, roomId, callbacks)=>{
        if (!config) throw (0, _utilsMjs.mkErr)("requires a config map as the first argument");
        if (callbacks && typeof callbacks !== "object") throw (0, _utilsMjs.mkErr)("third argument must be a callbacks object");
        const { appId  } = config;
        const onJoinError = callbacks?.onJoinError;
        const onPeerHandshake = callbacks?.onPeerHandshake;
        const handshakeTimeoutMs = callbacks?.handshakeTimeoutMs;
        if (!appId) throw (0, _utilsMjs.mkErr)("config map is missing appId field");
        if (!roomId) throw (0, _utilsMjs.mkErr)("roomId argument required");
        if (handshakeTimeoutMs !== void 0 && (!Number.isFinite(handshakeTimeoutMs) || handshakeTimeoutMs <= 0)) throw (0, _utilsMjs.mkErr)("handshakeTimeoutMs must be a positive number");
        if (occupiedRooms[appId]?.[roomId]) return occupiedRooms[appId][roomId];
        ensureRoomPresenceHandler(appId);
        const rootTopicPlaintext = (0, _utilsMjs.topicPath)((0, _utilsMjs.libName), appId, roomId);
        const rootTopicP = (0, _cryptoMjs.sha1)(rootTopicPlaintext);
        const selfTopicP = (0, _cryptoMjs.sha1)((0, _utilsMjs.topicPath)(rootTopicPlaintext, (0, _utilsMjs.selfId)));
        const key = (0, _cryptoMjs.genKey)(config.password ?? "", appId, roomId);
        const roomNamespacePromise = (0, _cryptoMjs.deriveRoomNamespace)(appId, roomId);
        const sharedPeerIdleMs = config._test_only_sharedPeerIdleMs ?? sharedPeerIdleMsDefault;
        let didLeaveRoom = false;
        const withKey = (f)=>async (signal)=>({
                    type: signal.type,
                    sdp: await f(key, signal.sdp)
                });
        const toPlain = withKey((0, _cryptoMjs.decrypt));
        const toCipher = withKey((0, _cryptoMjs.encrypt));
        const sharedPeerMap = sharedPeers.getMap(appId);
        const makeOffer = ()=>(0, _peerMjsDefault.default)(true, config);
        offerPool ||= new (0, _offerPoolMjs.OfferPool)(makeOffer);
        const pool = offerPool;
        const encryptOffer = async (peer)=>{
            const plainOffer = await peer.getOffer(Date.now() - peer.created > (0, _offerPoolMjs.offerTtl));
            if (!plainOffer || plainOffer.type !== "offer") throw (0, _utilsMjs.mkErr)("failed to get offer for peer");
            return (await toCipher(plainOffer)).sdp;
        };
        const attachSharedPeerToRoom = (peerId, shared)=>{
            const state = (0, _signalHandlerMjs.getState)(ctx.peerStates, peerId);
            state.answeringExpiryTimer = (0, _utilsMjs.resetTimer)(state.answeringExpiryTimer);
            state.answeringPeer = null;
            const { proxy , isNew  } = sharedPeers.bind(roomId, roomNamespacePromise, shared, {
                onDetach: ()=>{
                    const current = ctx.peerStates[peerId];
                    if (current?.connectedPeer === shared.peer) {
                        current.connectedPeer = null;
                        current.connectedPeerUnhealthySinceMs = null;
                        (0, _signalHandlerMjs.updateStatus)(current);
                    }
                }
            });
            state.connectedPeer = shared.peer;
            state.connectedPeerUnhealthySinceMs = null;
            (0, _signalHandlerMjs.updateStatus)(state);
            if (isNew) onPeerConnect(proxy, peerId);
            (0, _signalHandlerMjs.resetOfferState)(state, pool);
        };
        const connectPeer = (peer, peerId, _relayId)=>{
            if (didLeaveRoom) {
                peer.destroy();
                return;
            }
            const state = (0, _signalHandlerMjs.getState)(ctx.peerStates, peerId);
            if (state.connectedPeer) {
                const shared = sharedPeerMap[peerId];
                if (shared && state.connectedPeer === shared.peer && shared.bindings[roomId]) return;
                if (state.connectedPeer !== peer && !peer.isDead) peer.destroy();
                return;
            }
            let shared = sharedPeerMap[peerId];
            if (shared && sharedPeers.getHealth(shared.peer) === "stale") {
                sharedPeers.clear(appId, peerId, {
                    destroyPeer: true
                });
                shared = void 0;
            }
            if (shared && shared.peer !== peer) {
                if (!peer.isDead) peer.destroy();
                attachSharedPeerToRoom(peerId, shared);
                return;
            }
            const isNewShared = !shared;
            shared ||= sharedPeers.register(appId, peerId, peer, sharedPeerIdleMs);
            attachSharedPeerToRoom(peerId, shared);
            if (isNewShared) advertiseKnownRoomsToShared(appId, shared);
        };
        const disconnectPeer = (peer, peerId)=>{
            if (didLeaveRoom) return;
            const state = ctx.peerStates[peerId];
            if (state?.connectedPeer === peer) (0, _signalHandlerMjs.clearConnectedPeer)(state, peerId, "close-event");
        };
        const ctx = {
            appId,
            roomId,
            config,
            peerStates: {},
            rootTopicPlaintext,
            rootTopicP,
            selfTopicP,
            toPlain,
            toCipher,
            isLeaving: ()=>didLeaveRoom,
            onJoinError,
            sharedPeers,
            offerPool: pool,
            encryptOffer,
            initPeer: (0, _peerMjsDefault.default),
            connectPeer,
            disconnectPeer,
            attachSharedPeerToRoom,
            announceIntervals: [],
            announceIntervalMs
        };
        const handleMessage = (0, _signalHandlerMjs.createSignalHandler)(ctx);
        if (!didInit) {
            const initRes = init(config);
            pool.warmup();
            initPromises = (Array.isArray(initRes) ? initRes : [
                initRes
            ]).map((value)=>Promise.resolve(value));
            didInit = true;
            cleanupWatchOnline = config.relayConfig?.manualReconnection ? (0, _utilsMjs.noOp) : (0, _utilsMjs.watchOnline)();
        }
        ctx.announceIntervals = initPromises.map(()=>announceIntervalMs);
        const announceAttemptCounts = initPromises.map(()=>0);
        const announceTimeouts = [];
        const unsubFns = initPromises.map(async (relayP, i)=>subscribe(await relayP, await rootTopicP, await selfTopicP, handleMessage(i), (n)=>pool.getOffers(n, encryptOffer)));
        (0, _utilsMjs.all)([
            rootTopicP,
            selfTopicP
        ]).then(([rootTopic, selfTopic])=>{
            if (didLeaveRoom) return;
            const queueAnnounce = async (relay, i)=>{
                if (didLeaveRoom) return;
                const ms = await announce(relay, rootTopic, selfTopic);
                if (didLeaveRoom) return;
                if (typeof ms === "number") ctx.announceIntervals[i] = ms;
                const announceAttempt = announceAttemptCounts[i] ?? 0;
                announceAttemptCounts[i] = announceAttempt + 1;
                const currentInterval = ctx.announceIntervals[i] ?? announceIntervalMs;
                const warmupDelay = announceWarmupIntervalsMs[announceAttempt];
                announceTimeouts[i] = setTimeout(()=>{
                    queueAnnounce(relay, i);
                }, typeof warmupDelay === "number" ? Math.min(currentInterval, warmupDelay) : currentInterval);
            };
            unsubFns.forEach(async (didSub, i)=>{
                await didSub;
                if (didLeaveRoom) return;
                const relay = await initPromises[i];
                if (relay && !didLeaveRoom) queueAnnounce(relay, i);
            });
        });
        let onPeerConnect = (0, _utilsMjs.noOp);
        const { compose  } = (0, _handshakeMjs.createPasswordHandshake)(config.password ?? "", appId, roomId);
        const composedPeerHandshake = compose(onPeerHandshake);
        const roomOptions = {
            ...composedPeerHandshake ? {
                onPeerHandshake: composedPeerHandshake
            } : {},
            ...handshakeTimeoutMs === void 0 ? {} : {
                handshakeTimeoutMs
            },
            onHandshakeError: (peerId, error)=>onJoinError?.({
                    error: error.replace(/^handshake failed: /, ""),
                    appId,
                    peerId,
                    roomId
                })
        };
        occupiedRooms[appId] ??= {};
        const appRoomRegistrations = getRoomRegistrations(appId);
        const joinedRoom = (0, _roomMjsDefault.default)((f)=>onPeerConnect = f, (id)=>{
            if (didLeaveRoom) return;
            const state = ctx.peerStates[id];
            if (state?.connectedPeer) {
                state.connectedPeer = null;
                (0, _signalHandlerMjs.updateStatus)(state);
            }
        }, ()=>{
            didLeaveRoom = true;
            onPeerConnect = (0, _utilsMjs.noOp);
            const registration = roomRegistrations[appId]?.[roomId];
            if (registration?.roomToken) {
                advertiseRoomPresenceToAll(appId, registration.roomToken, false);
                delete roomIdsByToken[appId]?.[registration.roomToken];
                if (roomIdsByToken[appId] && !(0, _utilsMjs.keys)(roomIdsByToken[appId]).length) delete roomIdsByToken[appId];
            }
            if (roomRegistrations[appId]) {
                delete roomRegistrations[appId][roomId];
                if (!(0, _utilsMjs.keys)(roomRegistrations[appId]).length) delete roomRegistrations[appId];
            }
            (0, _utilsMjs.entries)(ctx.peerStates).forEach(([peerId, state])=>{
                state.answeringExpiryTimer = (0, _utilsMjs.resetTimer)(state.answeringExpiryTimer);
                if (state.connectedPeer && !state.connectedPeer.isDead) {
                    const shared = sharedPeerMap[peerId];
                    if (!shared || shared.peer !== state.connectedPeer) state.connectedPeer.destroy();
                }
                if (state.answeringPeer && !state.answeringPeer.isDead) state.answeringPeer.destroy();
                (0, _signalHandlerMjs.resetOfferState)(state, pool);
                state.connectedPeer = null;
                state.answeringPeer = null;
                (0, _signalHandlerMjs.updateStatus)(state);
            });
            if (occupiedRooms[appId]) {
                delete occupiedRooms[appId][roomId];
                if ((0, _utilsMjs.keys)(occupiedRooms[appId]).length === 0) delete occupiedRooms[appId];
            }
            announceTimeouts.forEach((0, _utilsMjs.resetTimer));
            unsubFns.forEach(async (f)=>{
                (await f)();
            });
            if (hasActiveRooms()) return;
            didInit = false;
            pool.destroy();
            offerPool = null;
            cleanupWatchOnline();
            cleanupRoomPresenceHandler(appId);
        }, roomOptions);
        const roomRegistration = {
            roomToken: null,
            roomTokenPromise: roomNamespacePromise,
            attachSharedPeerToRoom
        };
        appRoomRegistrations[roomId] = roomRegistration;
        roomNamespacePromise.then((roomToken)=>{
            if (didLeaveRoom || roomRegistrations[appId]?.[roomId] !== roomRegistration) return;
            roomRegistration.roomToken = roomToken;
            getRoomIdsByToken(appId)[roomToken] = roomId;
            (0, _utilsMjs.values)(sharedPeerMap).forEach((shared)=>{
                if (shared.remoteRoomTokens.has(roomToken)) attachSharedPeerToRoom(shared.peerId, shared);
            });
            advertiseRoomPresenceToAll(appId, roomToken, true);
        });
        return occupiedRooms[appId][roomId] = joinedRoom;
    };
};

},{"./utils.mjs":"dHdo5","./crypto.mjs":"lEcMG","./offer-pool.mjs":"3rjj0","./handshake.mjs":"2Tg3W","./peer.mjs":"a7rsu","./room.mjs":"3fXBY","./shared-peer.mjs":"chgut","./signal-handler.mjs":"5EMI2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3rjj0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
//#endregion
parcelHelpers.export(exports, "OfferPool", ()=>OfferPool);
parcelHelpers.export(exports, "offerTtl", ()=>offerTtl);
var _utilsMjs = require("./utils.mjs");
//#region src/offer-pool.ts
const offerTtl = 57333;
const offerLeaseTtlMs = 18e4;
const poolSize = 20;
var OfferPool = class {
    pool = [];
    pooled = /* @__PURE__ */ new Set();
    leased = /* @__PURE__ */ new Map();
    recycling = /* @__PURE__ */ new Set();
    cleanupTimer = null;
    active = false;
    constructor(makeOffer){
        this.makeOffer = makeOffer;
    }
    get isActive() {
        return this.active;
    }
    warmup() {
        this.pool = [];
        this.pooled.clear();
        (0, _utilsMjs.alloc)(poolSize, this.makeOffer).forEach((p)=>this.push(p));
        this.active = true;
        this.cleanupTimer = setInterval(()=>{
            this.pool = this.pool.filter((peer)=>{
                if (peer.isDead) {
                    this.pooled.delete(peer);
                    return false;
                }
                return true;
            });
        }, offerTtl);
    }
    push(peer) {
        if (peer.isDead || this.pooled.has(peer) || this.leased.has(peer)) return;
        this.pool.push(peer);
        this.pooled.add(peer);
    }
    shift(n) {
        const peers = [];
        while(peers.length < n && this.pool.length > 0){
            const peer = this.pool.shift();
            if (!peer) break;
            this.pooled.delete(peer);
            peers.push(peer);
        }
        return peers;
    }
    claimLeased(peer) {
        const timer = this.leased.get(peer);
        if (timer) {
            (0, _utilsMjs.resetTimer)(timer);
            this.leased.delete(peer);
        }
    }
    recycle(peer) {
        if (peer.isDead || this.recycling.has(peer)) return;
        if (peer.connection.remoteDescription) {
            peer.destroy();
            return;
        }
        if (!this.active) {
            peer.destroy();
            return;
        }
        this.recycling.add(peer);
        peer.setHandlers({
            connect: (0, _utilsMjs.noOp),
            close: (0, _utilsMjs.noOp),
            error: (0, _utilsMjs.noOp)
        });
        peer.getOffer(true).then((offer)=>{
            if (!offer || offer.type !== "offer" || peer.isDead || !this.active) {
                peer.destroy();
                return;
            }
            this.push(peer);
        }).catch(()=>peer.destroy()).finally(()=>this.recycling.delete(peer));
    }
    reclaimLeased(peer) {
        const timer = this.leased.get(peer);
        if (!timer) return;
        (0, _utilsMjs.resetTimer)(timer);
        this.leased.delete(peer);
        this.recycle(peer);
    }
    lease(peer) {
        this.claimLeased(peer);
        this.leased.set(peer, setTimeout(()=>{
            this.leased.delete(peer);
            this.recycle(peer);
        }, offerLeaseTtlMs));
    }
    checkout(n, leaseOffers, encryptOffer) {
        const peers = this.shift(n);
        const missing = Math.max(0, n - peers.length);
        if (missing > 0) peers.push(...(0, _utilsMjs.alloc)(missing, this.makeOffer));
        const toRecord = async (candidate, didRetry = false)=>{
            try {
                const offer = await encryptOffer(candidate);
                if (leaseOffers) {
                    this.lease(candidate);
                    return {
                        peer: candidate,
                        offer,
                        claim: ()=>this.claimLeased(candidate),
                        reclaim: ()=>this.reclaimLeased(candidate)
                    };
                }
                return {
                    peer: candidate,
                    offer
                };
            } catch (err) {
                this.claimLeased(candidate);
                this.pooled.delete(candidate);
                candidate.destroy();
                if (!didRetry) return toRecord(this.makeOffer(), true);
                throw err;
            }
        };
        return (0, _utilsMjs.all)(peers.map((peer)=>toRecord(peer)));
    }
    getOffers(n, encryptOffer) {
        return this.checkout(n, true, encryptOffer);
    }
    destroy() {
        this.active = false;
        if (this.cleanupTimer) {
            clearInterval(this.cleanupTimer);
            this.cleanupTimer = null;
        }
        this.pool.forEach((peer)=>peer.destroy());
        this.pool = [];
        this.pooled.clear();
        this.leased.forEach((timeout, peer)=>{
            (0, _utilsMjs.resetTimer)(timeout);
            peer.destroy();
        });
        this.leased.clear();
        this.recycling.forEach((peer)=>peer.destroy());
        this.recycling.clear();
    }
};

},{"./utils.mjs":"dHdo5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2Tg3W":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
//#endregion
parcelHelpers.export(exports, "createPasswordHandshake", ()=>createPasswordHandshake);
var _utilsMjs = require("./utils.mjs");
var _cryptoMjs = require("./crypto.mjs");
//#region src/handshake.ts
const overlapRoomPasswordErr = (0, _utilsMjs.mkErr)("incorrect password for overlapping room");
const createPasswordHandshake = (password, appId, roomId)=>{
    const hashChallenge = (challenge)=>(0, _cryptoMjs.hashWith)("SHA-256", `${challenge}:${password}:${appId}:${roomId}`).then((0, _utilsMjs.toHex));
    const run = async (send, receive, isInitiator)=>{
        if (!password) return;
        if (isInitiator) {
            const challenge = (0, _utilsMjs.genId)(36);
            await send({
                __trystero_pw: "challenge",
                c: challenge
            });
            const { data  } = await receive();
            if (!data || typeof data !== "object" || data.__trystero_pw !== "response" || typeof data.h !== "string") throw overlapRoomPasswordErr;
            const expected = await hashChallenge(challenge);
            if (data.h !== expected) throw overlapRoomPasswordErr;
            return;
        }
        const { data  } = await receive();
        if (!data || typeof data !== "object" || data.__trystero_pw !== "challenge" || typeof data.c !== "string") throw overlapRoomPasswordErr;
        await send({
            __trystero_pw: "response",
            h: await hashChallenge(data.c)
        });
    };
    const compose = (userHandshake)=>password || userHandshake ? async (peerId, send, receive, isInitiator)=>{
            await run(send, receive, isInitiator);
            await userHandshake?.(peerId, send, receive, isInitiator);
        } : void 0;
    return {
        run,
        compose
    };
};

},{"./utils.mjs":"dHdo5","./crypto.mjs":"lEcMG","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a7rsu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
//#endregion
parcelHelpers.export(exports, "default", ()=>peer_default);
var _utilsMjs = require("./utils.mjs");
//#region src/peer.ts
const iceTimeout = 15e3;
const disconnectedCloseDelayMs = 5e3;
const iceStateEvent = "icegatheringstatechange";
const offerType = "offer";
const answerType = "answer";
const outOfRangePattern = /out of range/i;
const rewriteMdnsCandidatesToLoopback = (sdp)=>sdp.replace(/ (\S+\.local) (\d+) typ host/g, " 127.0.0.1 $2 typ host");
var peer_default = (initiator, { trickleIce , rtcConfig , rtcPolyfill , turnConfig , _test_only_mdnsHostFallbackToLoopback  })=>{
    const pc = new (rtcPolyfill ?? RTCPeerConnection)({
        iceServers: defaultIceServers.concat(turnConfig ?? []),
        ...rtcConfig
    });
    const handlers = {};
    const pendingSignals = [];
    const pendingData = [];
    const shouldTrickleIce = trickleIce !== false;
    const pendingRemoteCandidates = [];
    const pendingTracks = [];
    let makingOffer = false;
    let isSettingRemoteAnswerPending = false;
    let dataChannel = null;
    let disconnectedCloseTimer = null;
    let didEmitClose = false;
    const clearDisconnectedCloseTimer = ()=>disconnectedCloseTimer = (0, _utilsMjs.resetTimer)(disconnectedCloseTimer);
    const emitClose = ()=>{
        if (didEmitClose) return;
        didEmitClose = true;
        clearDisconnectedCloseTimer();
        handlers.close?.();
    };
    const emitSignal = (signal)=>{
        if (handlers.signal) handlers.signal(signal);
        else pendingSignals.push(signal);
    };
    const appendSignalHandler = (handler)=>{
        const previousSignalHandler = handlers.signal;
        handlers.signal = (signal)=>{
            previousSignalHandler?.(signal);
            handler(signal);
        };
        if (pendingSignals.length > 0) pendingSignals.splice(0).forEach((signal)=>handlers.signal?.(signal));
    };
    const normalizeSdp = (sdp)=>_test_only_mdnsHostFallbackToLoopback ? rewriteMdnsCandidatesToLoopback(sdp) : sdp;
    const normalizeCandidate = (candidate)=>{
        if (!_test_only_mdnsHostFallbackToLoopback || typeof candidate.candidate !== "string") return candidate;
        const normalizedCandidate = rewriteMdnsCandidatesToLoopback(candidate.candidate);
        return normalizedCandidate === candidate.candidate ? candidate : {
            ...candidate,
            candidate: normalizedCandidate
        };
    };
    const localDescriptionSignal = (peerConnection)=>({
            type: peerConnection.localDescription?.type ?? offerType,
            sdp: normalizeSdp(peerConnection.localDescription?.sdp ?? "")
        });
    const getRemoteUfrag = ()=>{
        const sdp = pc.remoteDescription?.sdp;
        if (!sdp) return null;
        return sdp.match(/a=ice-ufrag:([^\s]+)/)?.[1] ?? null;
    };
    const getRemoteMediaSectionCount = ()=>(pc.remoteDescription?.sdp?.match(/^m=/gm) ?? []).length;
    const canApplyRemoteCandidate = (candidate)=>{
        if (!pc.remoteDescription) return false;
        const remoteMLineCount = getRemoteMediaSectionCount();
        if (typeof candidate.sdpMLineIndex === "number" && remoteMLineCount > 0 && candidate.sdpMLineIndex >= remoteMLineCount) return false;
        const remoteUfrag = getRemoteUfrag();
        if (remoteUfrag && candidate.usernameFragment && candidate.usernameFragment !== remoteUfrag) return false;
        return true;
    };
    const addIceCandidateSafe = async (candidate)=>{
        try {
            await pc.addIceCandidate(candidate);
            return true;
        } catch (err) {
            if (err instanceof Error && outOfRangePattern.test(err.message) && typeof candidate.sdpMLineIndex === "number") return false;
            throw err;
        }
    };
    const flushPendingRemoteCandidates = async ()=>{
        if (!pc.remoteDescription || pendingRemoteCandidates.length === 0) return;
        const queuedCandidates = pendingRemoteCandidates.splice(0);
        const stillPending = [];
        for (const candidate of queuedCandidates){
            if (!canApplyRemoteCandidate(candidate)) {
                stillPending.push(candidate);
                continue;
            }
            if (!await addIceCandidateSafe(candidate)) stillPending.push(candidate);
        }
        if (stillPending.length > 0) pendingRemoteCandidates.push(...stillPending);
    };
    const addRemoteCandidate = async (candidate)=>{
        if (canApplyRemoteCandidate(candidate)) {
            if (!await addIceCandidateSafe(candidate)) pendingRemoteCandidates.push(candidate);
            return;
        }
        pendingRemoteCandidates.push(candidate);
    };
    const setupDataChannel = (channel)=>{
        channel.binaryType = "arraybuffer";
        channel.bufferedAmountLowThreshold = 65535;
        channel.onmessage = (e)=>{
            const data = e.data;
            if (handlers.data) handlers.data(data);
            else pendingData.push(data);
        };
        channel.onopen = ()=>handlers.connect?.();
        channel.onclose = emitClose;
        channel.onerror = ({ error  })=>handlers.error?.((0, _utilsMjs.toError)(error, "data channel error"));
    };
    const waitForIceGathering = async (peerConnection)=>{
        let timeout = null;
        try {
            await Promise.race([
                new Promise((res)=>{
                    const checkState = ()=>{
                        if (peerConnection.iceGatheringState === "complete") {
                            peerConnection.removeEventListener(iceStateEvent, checkState);
                            res();
                        }
                    };
                    peerConnection.addEventListener(iceStateEvent, checkState);
                    checkState();
                }),
                new Promise((res)=>{
                    timeout = setTimeout(res, iceTimeout);
                })
            ]);
        } finally{
            (0, _utilsMjs.resetTimer)(timeout);
        }
        return localDescriptionSignal(peerConnection);
    };
    const emitLocalDescriptionSignal = async ()=>{
        const signal = shouldTrickleIce ? localDescriptionSignal(pc) : await waitForIceGathering(pc);
        emitSignal(signal);
        return signal;
    };
    if (initiator) {
        dataChannel = pc.createDataChannel("data");
        setupDataChannel(dataChannel);
    } else pc.ondatachannel = ({ channel  })=>{
        dataChannel = channel;
        setupDataChannel(channel);
    };
    const createOffer = async (restartIce = false)=>{
        if (pc.connectionState === "closed") return;
        try {
            makingOffer = true;
            if (restartIce) {
                if (pc.signalingState !== "stable" && pc.signalingState !== "closed" && pc.localDescription?.type === offerType) await pc.setLocalDescription({
                    type: "rollback"
                });
                if (typeof pc.restartIce === "function") pc.restartIce();
            }
            await pc.setLocalDescription(restartIce ? await pc.createOffer({
                iceRestart: true
            }) : void 0);
            return await emitLocalDescriptionSignal();
        } catch (err) {
            handlers.error?.((0, _utilsMjs.toError)(err, "failed to create local offer"));
        } finally{
            makingOffer = false;
        }
    };
    pc.onnegotiationneeded = async ()=>createOffer(false);
    pc.onicecandidate = ({ candidate  })=>{
        if (!shouldTrickleIce || !candidate) return;
        const candidatePayload = normalizeCandidate(typeof candidate.toJSON === "function" ? candidate.toJSON() : {
            candidate: candidate.candidate,
            sdpMid: candidate.sdpMid,
            sdpMLineIndex: candidate.sdpMLineIndex,
            usernameFragment: candidate.usernameFragment
        });
        emitSignal({
            type: (0, _utilsMjs.candidateType),
            sdp: JSON.stringify(candidatePayload)
        });
    };
    pc.onconnectionstatechange = ()=>{
        if (pc.connectionState === "connected" || pc.connectionState === "connecting") {
            clearDisconnectedCloseTimer();
            return;
        }
        if (pc.connectionState === "disconnected") {
            if (!disconnectedCloseTimer) disconnectedCloseTimer = setTimeout(()=>{
                disconnectedCloseTimer = null;
                if (pc.connectionState === "disconnected") emitClose();
            }, disconnectedCloseDelayMs);
            return;
        }
        if (pc.connectionState === "failed" || pc.connectionState === "closed") emitClose();
    };
    pc.ontrack = (e)=>{
        const stream = e.streams[0];
        if (stream) {
            if (!handlers.track && !handlers.stream) {
                pendingTracks.push({
                    track: e.track,
                    stream
                });
                return;
            }
            handlers.track?.(e.track, stream);
            handlers.stream?.(stream);
        }
    };
    pc.onremovestream = (e)=>handlers.stream?.(e.stream);
    const offerPromise = initiator ? new Promise((res)=>appendSignalHandler((signal)=>{
            if (signal.type === offerType) res(signal);
        })) : Promise.resolve();
    if (initiator) queueMicrotask(()=>{
        if (!makingOffer && pc.signalingState === "stable" && !pc.localDescription && pc.connectionState !== "closed") pc.onnegotiationneeded?.(new Event("negotiationneeded"));
    });
    return {
        created: Date.now(),
        connection: pc,
        get channel () {
            return dataChannel;
        },
        get isDead () {
            return pc.connectionState === "closed";
        },
        getOffer: async (restartIce = false)=>{
            if (!initiator) return;
            if (restartIce) return createOffer(true);
            if (pc.localDescription?.type === offerType) return shouldTrickleIce ? localDescriptionSignal(pc) : waitForIceGathering(pc);
            return offerPromise;
        },
        async signal (sdp) {
            if (sdp.type === "candidate") {
                try {
                    const candidate = JSON.parse(sdp.sdp);
                    if (candidate && typeof candidate === "object") await addRemoteCandidate(normalizeCandidate(candidate));
                } catch (err) {
                    handlers.error?.((0, _utilsMjs.toError)(err, "failed to parse remote candidate"));
                }
                return;
            }
            if (dataChannel?.readyState === "open" && !sdp.sdp?.includes("a=rtpmap")) return;
            try {
                const rtcSdp = {
                    ...sdp,
                    sdp: normalizeSdp(sdp.sdp)
                };
                if (sdp.type === offerType) {
                    if (makingOffer || pc.signalingState !== "stable" && !isSettingRemoteAnswerPending) {
                        if (initiator) return;
                        await (0, _utilsMjs.all)([
                            pc.setLocalDescription({
                                type: "rollback"
                            }),
                            pc.setRemoteDescription(rtcSdp)
                        ]);
                    } else await pc.setRemoteDescription(rtcSdp);
                    await flushPendingRemoteCandidates();
                    await pc.setLocalDescription();
                    return await emitLocalDescriptionSignal();
                }
                if (sdp.type === answerType) {
                    isSettingRemoteAnswerPending = true;
                    try {
                        await pc.setRemoteDescription(rtcSdp);
                        await flushPendingRemoteCandidates();
                    } finally{
                        isSettingRemoteAnswerPending = false;
                    }
                }
            } catch (err) {
                handlers.error?.((0, _utilsMjs.toError)(err, "failed to apply remote signal"));
            }
        },
        sendData: (data)=>dataChannel?.send(data),
        destroy: ()=>{
            clearDisconnectedCloseTimer();
            dataChannel?.close();
            pc.close();
            makingOffer = false;
            isSettingRemoteAnswerPending = false;
            emitClose();
        },
        setHandlers: (newHandlers)=>{
            const { signal , ...restHandlers } = newHandlers;
            Object.assign(handlers, restHandlers);
            if (handlers.data && pendingData.length > 0) pendingData.splice(0).forEach((data)=>handlers.data?.(data));
            if (signal) appendSignalHandler(signal);
            if ((handlers.track || handlers.stream) && pendingTracks.length > 0) pendingTracks.splice(0).forEach(({ track , stream  })=>{
                handlers.track?.(track, stream);
                handlers.stream?.(stream);
            });
        },
        offerPromise,
        addStream: (stream)=>stream.getTracks().forEach((track)=>pc.addTrack(track, stream)),
        removeStream: (stream)=>pc.getSenders().filter((sender)=>sender.track && stream.getTracks().includes(sender.track)).forEach((sender)=>pc.removeTrack(sender)),
        addTrack: (track, stream)=>pc.addTrack(track, stream),
        removeTrack: (track)=>{
            const sender = pc.getSenders().find((s)=>s.track === track);
            if (sender) pc.removeTrack(sender);
        },
        replaceTrack: (oldTrack, newTrack)=>{
            const sender = pc.getSenders().find((s)=>s.track === oldTrack);
            if (sender) return sender.replaceTrack(newTrack);
        }
    };
};
const defaultIceServers = [
    ...(0, _utilsMjs.alloc)(3, (_, i)=>`stun:stun${i || ""}.l.google.com:19302`),
    "stun:stun.cloudflare.com:3478"
].map((url)=>({
        urls: url
    }));

},{"./utils.mjs":"dHdo5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3fXBY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
//#endregion
parcelHelpers.export(exports, "default", ()=>room_default);
var _utilsMjs = require("./utils.mjs");
//#region src/room.ts
const TypedArray = Object.getPrototypeOf(Uint8Array);
const typeByteLimit = 32;
const nonceByteLimit = 2;
const typeIndex = 0;
const nonceIndex = typeIndex + typeByteLimit;
const tagIndex = nonceIndex + nonceByteLimit;
const progressIndex = tagIndex + 1;
const payloadIndex = progressIndex + 1;
const chunkSize = 16384 - payloadIndex;
const oneByteMax = 255;
const twoByteMax = 65535;
const buffLowEvent = "bufferedamountlow";
const channelCloseEvent = "close";
const channelErrorEvent = "error";
const unloadEvent = "beforeunload";
const defaultHandshakeTimeoutMs = 1e4;
const backpressureWaitTimeoutMs = 1e4;
const internalNs = (ns)=>"@_" + ns;
const beforeUnloadRoomCleanups = /* @__PURE__ */ new Set();
const cleanupActiveRoomsOnBeforeUnload = ()=>beforeUnloadRoomCleanups.forEach((cleanup)=>cleanup());
const registerBeforeUnloadCleanup = (cleanup)=>{
    beforeUnloadRoomCleanups.add(cleanup);
    if (beforeUnloadRoomCleanups.size === 1) addEventListener(unloadEvent, cleanupActiveRoomsOnBeforeUnload);
    return ()=>{
        beforeUnloadRoomCleanups.delete(cleanup);
        if (!beforeUnloadRoomCleanups.size) removeEventListener(unloadEvent, cleanupActiveRoomsOnBeforeUnload);
    };
};
const toByteArray = (value)=>value instanceof ArrayBuffer ? new Uint8Array(value) : new Uint8Array(value.buffer, value.byteOffset, value.byteLength);
const toHandshakeErrorMessage = (error)=>{
    const message = (0, _utilsMjs.toErrorMessage)(error, "unknown error");
    return message.startsWith("handshake ") ? message : `handshake failed: ${message}`;
};
const waitForBufferedAmountLow = (channel, timeoutMs = backpressureWaitTimeoutMs)=>{
    if (channel.readyState !== "open" || channel.bufferedAmount <= channel.bufferedAmountLowThreshold) return Promise.resolve(channel.readyState === "open");
    return new Promise((res)=>{
        let settled = false;
        let timeout = null;
        const finish = (didDrain)=>{
            if (settled) return;
            settled = true;
            channel.removeEventListener(buffLowEvent, onBufferLow);
            channel.removeEventListener(channelCloseEvent, onCloseOrError);
            channel.removeEventListener(channelErrorEvent, onCloseOrError);
            (0, _utilsMjs.resetTimer)(timeout);
            res(didDrain);
        };
        const onBufferLow = ()=>finish(true);
        const onCloseOrError = ()=>finish(false);
        channel.addEventListener(buffLowEvent, onBufferLow);
        channel.addEventListener(channelCloseEvent, onCloseOrError);
        channel.addEventListener(channelErrorEvent, onCloseOrError);
        timeout = setTimeout(()=>finish(false), timeoutMs);
        if (channel.readyState !== "open") {
            finish(false);
            return;
        }
        if (channel.bufferedAmount <= channel.bufferedAmountLowThreshold) finish(true);
    });
};
var room_default = (onPeer, onPeerLeave, onSelfLeave, { onPeerHandshake , onHandshakeError , handshakeTimeoutMs =defaultHandshakeTimeoutMs  } = {})=>{
    const peerMap = {};
    const activePeerMap = {};
    const peerStates = {};
    const actions = {};
    const actionsCache = {};
    const pendingTransmissions = {};
    const pendingActionPayloads = {};
    const pendingPongs = {};
    const pendingStreamMetas = {};
    const pendingTrackMetas = {};
    const localStreamKeys = /* @__PURE__ */ new WeakMap();
    const localTrackKeys = /* @__PURE__ */ new WeakMap();
    const listeners = {
        onPeerJoin: (0, _utilsMjs.noOp),
        onPeerLeave: (0, _utilsMjs.noOp),
        onPeerStream: (0, _utilsMjs.noOp),
        onPeerTrack: (0, _utilsMjs.noOp)
    };
    let unregisterBeforeUnloadCleanup = (0, _utilsMjs.noOp);
    const iterate = (targets, f, { includePending =false  } = {})=>(targets ? Array.isArray(targets) ? targets : [
            targets
        ] : (0, _utilsMjs.keys)(includePending ? peerMap : activePeerMap)).flatMap((id)=>{
            const peer = includePending ? peerMap[id] : activePeerMap[id];
            if (!peer) {
                console.warn(`${(0, _utilsMjs.libName)}: no peer with id ${id} found`);
                return [];
            }
            return [
                Promise.resolve(f(id, peer))
            ];
        });
    const applyMediaOp = (targets, key, metadata, sendMeta, op, mediaIds = {})=>{
        const payload = {
            k: key,
            ...mediaIds,
            ...metadata === void 0 ? {} : {
                m: metadata
            }
        };
        return iterate(targets, async (id, peer)=>{
            await sendMeta(payload, id);
            op(peer);
        });
    };
    const makeKeyGetter = (map)=>(item)=>{
            let key = map.get(item);
            if (!key) {
                key = (0, _utilsMjs.genId)(20);
                map.set(item, key);
            }
            return key;
        };
    const getStreamKey = makeKeyGetter(localStreamKeys);
    const getTrackKey = makeKeyGetter(localTrackKeys);
    const getSharedMediaPeer = (id)=>peerMap[id] ?? null;
    const emitStream = (id, key, stream, metadata)=>{
        if (!activePeerMap[id]) return;
        getSharedMediaPeer(id)?.__trysteroSetRemoteStreamByKey?.(key, stream);
        if (typeof stream.id === "string") getSharedMediaPeer(id)?.__trysteroSetRemoteStreamById?.(stream.id, stream);
        listeners.onPeerStream(stream, id, metadata);
    };
    const emitTrack = (id, key, track, stream, metadata)=>{
        if (!activePeerMap[id]) return;
        getSharedMediaPeer(id)?.__trysteroSetRemoteTrackByKey?.(key, track, stream);
        if (typeof stream.id === "string") getSharedMediaPeer(id)?.__trysteroSetRemoteStreamById?.(stream.id, stream);
        if (typeof track.id === "string") getSharedMediaPeer(id)?.__trysteroSetRemoteTrackById?.(track.id, track, stream);
        listeners.onPeerTrack(track, stream, id, metadata);
    };
    const clearPeerState = (id, reason = (0, _utilsMjs.mkErr)("peer disconnected"))=>{
        const state = peerStates[id];
        const err = (0, _utilsMjs.toError)(reason, "peer disconnected");
        if (state) {
            (0, _utilsMjs.resetTimer)(state.handshakeTimer);
            state.pendingHandshakePayloads.length = 0;
            state.handshakeWaiters.splice(0).forEach((waiter)=>waiter.reject(err));
            delete peerStates[id];
        }
        delete peerMap[id];
        delete activePeerMap[id];
        delete pendingTransmissions[id];
        pendingPongs[id]?.splice(0).forEach((waiter)=>waiter.reject(err));
        delete pendingPongs[id];
        delete pendingStreamMetas[id];
        delete pendingTrackMetas[id];
    };
    const exitPeer = (id, peer, reason)=>{
        const current = peerMap[id];
        if (!current) return;
        if (peer && current !== peer) return;
        const wasActive = Boolean(activePeerMap[id]);
        clearPeerState(id, reason);
        current.destroy();
        if (wasActive) listeners.onPeerLeave(id);
        onPeerLeave(id);
    };
    const makeActionInternal = (type, options = {})=>{
        const cached = actionsCache[type];
        if (actions[type] && cached) {
            const cachedOptions = actions[type].options;
            if (cachedOptions.sendToPending !== Boolean(options.sendToPending) || cachedOptions.receiveWhilePending !== Boolean(options.receiveWhilePending)) throw (0, _utilsMjs.mkErr)(`action type "${type}" cannot be redefined`);
            return cached;
        }
        if (!type) throw (0, _utilsMjs.mkErr)("action type argument is required");
        const typeBytes = (0, _utilsMjs.encodeBytes)(type);
        if (typeBytes.byteLength > typeByteLimit) throw (0, _utilsMjs.mkErr)(`action type string "${type}" (${typeBytes.byteLength}b) exceeds byte limit (${typeByteLimit}). Hint: choose a shorter name.`);
        const normalizedOptions = {
            sendToPending: Boolean(options.sendToPending),
            receiveWhilePending: Boolean(options.receiveWhilePending)
        };
        const typeBytesPadded = new Uint8Array(typeByteLimit);
        typeBytesPadded.set(typeBytes);
        let nonce = 0;
        actions[type] = {
            onComplete: (0, _utilsMjs.noOp),
            onProgress: (0, _utilsMjs.noOp),
            setOnComplete: (f)=>{
                actions[type].onComplete = f;
                const pending = pendingActionPayloads[type];
                if (pending?.length) {
                    delete pendingActionPayloads[type];
                    pending.forEach(({ payload , peerId , metadata  })=>f(payload, peerId, metadata));
                }
            },
            setOnProgress: (f)=>{
                actions[type].onProgress = f;
            },
            send: async (data, targets, meta, onProgress)=>{
                const dataType = typeof data;
                if (dataType === "undefined") throw (0, _utilsMjs.mkErr)("action data cannot be undefined");
                const isJson = dataType !== "string";
                const isBlob = data instanceof Blob;
                const isBinary = isBlob || data instanceof ArrayBuffer || data instanceof TypedArray;
                const hasMeta = meta !== void 0;
                const buffer = isBinary ? toByteArray(isBlob ? await data.arrayBuffer() : data) : (0, _utilsMjs.encodeBytes)(isJson ? (0, _utilsMjs.toJson)(data) : data);
                const metaEncoded = hasMeta ? (0, _utilsMjs.encodeBytes)((0, _utilsMjs.toJson)(meta)) : null;
                const chunkTotal = Math.ceil(buffer.byteLength / chunkSize) + (hasMeta ? 1 : 0) || 1;
                const chunks = (0, _utilsMjs.alloc)(chunkTotal, (_, i)=>{
                    const isLast = i === chunkTotal - 1;
                    const isMeta = Boolean(hasMeta && i === 0);
                    const chunk = new Uint8Array(payloadIndex + (isMeta ? metaEncoded?.byteLength ?? 0 : isLast ? buffer.byteLength - chunkSize * (chunkTotal - (hasMeta ? 2 : 1)) : chunkSize));
                    chunk.set(typeBytesPadded);
                    chunk.set([
                        nonce >> 8,
                        nonce & oneByteMax
                    ], nonceIndex);
                    chunk.set([
                        Number(isLast) | Number(isMeta) << 1 | Number(isBinary) << 2 | Number(isJson) << 3
                    ], tagIndex);
                    chunk.set([
                        Math.round((i + 1) / chunkTotal * oneByteMax)
                    ], progressIndex);
                    chunk.set(hasMeta ? isMeta ? metaEncoded ?? new Uint8Array() : buffer.subarray((i - 1) * chunkSize, i * chunkSize) : buffer.subarray(i * chunkSize, (i + 1) * chunkSize), payloadIndex);
                    return chunk;
                });
                nonce = nonce + 1 & twoByteMax;
                await (0, _utilsMjs.all)(iterate(targets, async (id, peer)=>{
                    const { channel  } = peer;
                    let chunkN = 0;
                    while(chunkN < chunkTotal){
                        const chunk = chunks[chunkN];
                        if (!chunk) break;
                        if (channel && channel.bufferedAmount > channel.bufferedAmountLowThreshold) {
                            if (!await waitForBufferedAmountLow(channel)) break;
                        }
                        const currentPeer = normalizedOptions.sendToPending ? peerMap[id] : activePeerMap[id];
                        if (!currentPeer || currentPeer !== peer) break;
                        peer.sendData(chunk);
                        chunkN++;
                        const progressByte = chunk[progressIndex] ?? oneByteMax;
                        onProgress?.(progressByte / oneByteMax, id, meta);
                    }
                }, {
                    includePending: normalizedOptions.sendToPending
                }));
                return [];
            },
            options: normalizedOptions
        };
        return actionsCache[type] = [
            actions[type].send,
            actions[type].setOnComplete,
            actions[type].setOnProgress
        ];
    };
    const makeAction = (type)=>makeActionInternal(type);
    const handleData = (id, data)=>{
        const state = peerStates[id];
        if (!state) return;
        const buffer = new Uint8Array(data);
        const type = (0, _utilsMjs.decodeBytes)(buffer.subarray(typeIndex, nonceIndex)).replaceAll("\0", "");
        const action = actions[type];
        if (!state.isActive && !action?.options.receiveWhilePending) return;
        const nonce = (buffer[nonceIndex] ?? 0) << 8 | (buffer[nonceIndex + 1] ?? 0);
        const tag = buffer[tagIndex] ?? 0;
        const progress = buffer[progressIndex] ?? 0;
        const payload = buffer.subarray(payloadIndex);
        const isLast = Boolean(tag & 1);
        const isMeta = Boolean(tag & 2);
        const isBinary = Boolean(tag & 4);
        const isJson = Boolean(tag & 8);
        pendingTransmissions[id] ??= {};
        pendingTransmissions[id][type] ??= {};
        const target = pendingTransmissions[id][type][nonce] ??= {
            chunks: []
        };
        if (isMeta) target.meta = (0, _utilsMjs.fromJson)((0, _utilsMjs.decodeBytes)(payload));
        else target.chunks.push(payload);
        action?.onProgress(progress / oneByteMax, id, target.meta);
        if (!isLast) return;
        const full = new Uint8Array(target.chunks.reduce((a, c)=>a + c.byteLength, 0));
        target.chunks.reduce((a, c)=>{
            full.set(c, a);
            return a + c.byteLength;
        }, 0);
        delete pendingTransmissions[id][type][nonce];
        if (isBinary) {
            if (action) action.onComplete(full, id, target.meta);
            else (pendingActionPayloads[type] ??= []).push({
                payload: full,
                peerId: id,
                ...target.meta === void 0 ? {} : {
                    metadata: target.meta
                }
            });
        } else {
            const text = (0, _utilsMjs.decodeBytes)(full);
            const decoded = isJson ? (0, _utilsMjs.fromJson)(text) : text;
            if (action) action.onComplete(decoded, id, target.meta);
            else (pendingActionPayloads[type] ??= []).push({
                payload: decoded,
                peerId: id,
                ...target.meta === void 0 ? {} : {
                    metadata: target.meta
                }
            });
        }
    };
    const leave = async ()=>{
        await sendLeave("");
        await new Promise((res)=>setTimeout(res, 99));
        (0, _utilsMjs.entries)(peerMap).forEach(([id, peer])=>{
            peer.destroy();
            clearPeerState(id, (0, _utilsMjs.mkErr)("room left"));
        });
        unregisterBeforeUnloadCleanup();
        onSelfLeave();
    };
    const [sendPing, getPing] = makeActionInternal(internalNs("ping"));
    const [sendPong, getPong] = makeActionInternal(internalNs("pong"));
    const [sendSignal, getSignal] = makeActionInternal(internalNs("signal"));
    const [sendStreamMeta, getStreamMeta] = makeActionInternal(internalNs("stream"));
    const [sendTrackMeta, getTrackMeta] = makeActionInternal(internalNs("track"));
    const [sendLeave, getLeave] = makeActionInternal(internalNs("leave"), {
        sendToPending: true,
        receiveWhilePending: true
    });
    const [sendHandshakeData, getHandshakeData] = makeActionInternal(internalNs("hsdata"), {
        sendToPending: true,
        receiveWhilePending: true
    });
    const [sendHandshakeReady, getHandshakeReady] = makeActionInternal(internalNs("hsready"), {
        sendToPending: true,
        receiveWhilePending: true
    });
    const maybeActivatePeer = (id, peer)=>{
        const state = peerStates[id];
        if (!state || peer && state.peer !== peer || state.isActive) return;
        if (!state.didLocalHandshakePass || !state.didReceiveRemoteReady) return;
        state.isActive = true;
        activePeerMap[id] = state.peer;
        state.handshakeTimer = (0, _utilsMjs.resetTimer)(state.handshakeTimer);
        listeners.onPeerJoin(id);
    };
    const failPeerHandshake = (id, peer, reason)=>{
        const state = peerStates[id];
        if (!state || state.peer !== peer) return;
        const error = toHandshakeErrorMessage(reason);
        onHandshakeError?.(id, error);
        exitPeer(id, peer, (0, _utilsMjs.mkErr)(error));
    };
    const markLocalHandshakePassed = (id, peer)=>{
        const state = peerStates[id];
        if (!state || state.peer !== peer || state.isActive) return;
        state.didLocalHandshakePass = true;
        sendHandshakeReady("", id).catch((err)=>failPeerHandshake(id, peer, (0, _utilsMjs.mkErr)(`failed sending handshake readiness: ${(0, _utilsMjs.toErrorMessage)(err, "unknown send failure")}`)));
        maybeActivatePeer(id, peer);
    };
    const startPeerHandshake = (id, peer)=>{
        const state = peerStates[id];
        if (!state || state.peer !== peer) return;
        state.handshakeTimer = setTimeout(()=>failPeerHandshake(id, peer, (0, _utilsMjs.mkErr)(`handshake timed out after ${handshakeTimeoutMs}ms`)), handshakeTimeoutMs);
        const sendHandshake = async (data, metadata)=>{
            await sendHandshakeData(data, id, metadata);
        };
        const receiveHandshake = ()=>new Promise((resolve, reject)=>{
                const current = peerStates[id];
                if (!current || current.peer !== peer) {
                    reject((0, _utilsMjs.mkErr)("peer disconnected during handshake"));
                    return;
                }
                const payload = current.pendingHandshakePayloads.shift();
                if (payload) {
                    resolve(payload);
                    return;
                }
                current.handshakeWaiters.push({
                    resolve,
                    reject: (error)=>reject(error)
                });
            });
        const isInitiator = (0, _utilsMjs.selfId) < id;
        Promise.resolve(onPeerHandshake?.(id, sendHandshake, receiveHandshake, isInitiator)).then(()=>markLocalHandshakePassed(id, peer)).catch((err)=>failPeerHandshake(id, peer, (0, _utilsMjs.toError)(err, "handshake failed")));
    };
    const toPendingMediaMeta = (value)=>{
        if (value && typeof value === "object" && !Array.isArray(value) && typeof value.k === "string") return {
            key: value.k,
            ...typeof value.s === "string" ? {
                streamId: value.s
            } : {},
            ...typeof value.t === "string" ? {
                trackId: value.t
            } : {},
            ...Object.hasOwn(value, "m") ? {
                metadata: value.m
            } : {}
        };
        return null;
    };
    getPing((_, id)=>sendPong("", id));
    getPong((_, id)=>{
        const queue = pendingPongs[id];
        queue?.shift()?.resolve();
        if (queue && !queue.length) delete pendingPongs[id];
    });
    getSignal((sdp, id)=>{
        if (!activePeerMap[id]) return;
        peerMap[id]?.signal(sdp);
    });
    getStreamMeta((meta, id)=>{
        if (!activePeerMap[id]) return;
        const parsed = toPendingMediaMeta(meta);
        if (!parsed) return;
        const sharedPeer = getSharedMediaPeer(id);
        const cached = sharedPeer?.__trysteroGetRemoteStreamByKey?.(parsed.key) ?? (parsed.streamId ? sharedPeer?.__trysteroGetRemoteStreamById?.(parsed.streamId) : void 0);
        if (cached) {
            emitStream(id, parsed.key, cached, parsed.metadata);
            return;
        }
        (pendingStreamMetas[id] ??= []).push(parsed);
    });
    getTrackMeta((meta, id)=>{
        if (!activePeerMap[id]) return;
        const parsed = toPendingMediaMeta(meta);
        if (!parsed) return;
        const sharedPeer = getSharedMediaPeer(id);
        const cached = sharedPeer?.__trysteroGetRemoteTrackByKey?.(parsed.key) ?? (parsed.trackId ? sharedPeer?.__trysteroGetRemoteTrackById?.(parsed.trackId) : void 0);
        if (cached) {
            emitTrack(id, parsed.key, cached.track, cached.stream, parsed.metadata);
            return;
        }
        (pendingTrackMetas[id] ??= []).push(parsed);
    });
    getLeave((_, id)=>exitPeer(id, void 0, (0, _utilsMjs.mkErr)("peer left room")));
    getHandshakeData((data, id, metadata)=>{
        const state = peerStates[id];
        if (!state || state.isActive) return;
        const payload = metadata === void 0 ? {
            data
        } : {
            data,
            metadata
        };
        const pending = state.handshakeWaiters.shift();
        if (pending) {
            pending.resolve(payload);
            return;
        }
        state.pendingHandshakePayloads.push(payload);
    });
    getHandshakeReady((_, id)=>{
        const state = peerStates[id];
        if (!state || state.isActive) return;
        state.didReceiveRemoteReady = true;
        maybeActivatePeer(id);
    });
    onPeer((peer, id)=>{
        const existingPeer = peerMap[id];
        if (existingPeer) {
            if (existingPeer === peer) return;
            existingPeer.destroy();
            clearPeerState(id, (0, _utilsMjs.mkErr)("peer replaced"));
        }
        peerMap[id] = peer;
        peerStates[id] = {
            peer,
            isActive: false,
            didLocalHandshakePass: false,
            didReceiveRemoteReady: false,
            handshakeTimer: null,
            pendingHandshakePayloads: [],
            handshakeWaiters: []
        };
        peer.setHandlers({
            data: (d)=>handleData(id, d),
            stream: (stream)=>{
                if (!activePeerMap[id]) return;
                const next = pendingStreamMetas[id]?.shift();
                if (!next) return;
                emitStream(id, next.key, stream, next.metadata);
            },
            track: (track, stream)=>{
                if (!activePeerMap[id]) return;
                const next = pendingTrackMetas[id]?.shift();
                if (!next) return;
                emitTrack(id, next.key, track, stream, next.metadata);
            },
            signal: (sdp)=>{
                if (!activePeerMap[id]) return;
                sendSignal(sdp, id);
            },
            close: ()=>exitPeer(id, peer, (0, _utilsMjs.mkErr)("peer disconnected")),
            error: (err)=>{
                console.error(`${(0, _utilsMjs.libName)} peer error:`, err);
                exitPeer(id, peer, err);
            }
        });
        startPeerHandshake(id, peer);
    });
    if (0, _utilsMjs.isBrowser) unregisterBeforeUnloadCleanup = registerBeforeUnloadCleanup(()=>leave().catch((0, _utilsMjs.noOp)));
    return {
        makeAction,
        leave,
        ping: async (id)=>{
            if (!activePeerMap[id]) throw (0, _utilsMjs.mkErr)(`no active peer with id ${id}`);
            const start = Date.now();
            await new Promise((resolve, reject)=>{
                const queue = pendingPongs[id] ??= [];
                const clearFromQueue = ()=>{
                    const currentQueue = pendingPongs[id];
                    if (!currentQueue) return;
                    const i = currentQueue.indexOf(waiter);
                    if (i > -1) currentQueue.splice(i, 1);
                    if (!currentQueue.length) delete pendingPongs[id];
                };
                const waiter = {
                    resolve: ()=>{
                        clearFromQueue();
                        resolve();
                    },
                    reject: (reason)=>{
                        clearFromQueue();
                        reject(reason);
                    }
                };
                queue.push(waiter);
                sendPing("", id).catch((err)=>waiter.reject((0, _utilsMjs.toError)(err, "peer disconnected")));
            });
            return Date.now() - start;
        },
        getPeers: ()=>(0, _utilsMjs.fromEntries)((0, _utilsMjs.entries)(activePeerMap).map(([id, peer])=>[
                    id,
                    peer.connection
                ])),
        addStream: (stream, targets, meta)=>applyMediaOp(targets, getStreamKey(stream), meta, sendStreamMeta, (peer)=>peer.addStream(stream), {
                s: stream.id
            }),
        removeStream: (stream, targets)=>{
            iterate(targets, (_, peer)=>peer.removeStream(stream));
        },
        addTrack: (track, stream, targets, meta)=>applyMediaOp(targets, getTrackKey(track), meta, sendTrackMeta, (peer)=>peer.addTrack(track, stream), {
                s: stream.id,
                t: track.id
            }),
        removeTrack: (track, targets)=>{
            iterate(targets, (_, peer)=>peer.removeTrack(track));
        },
        replaceTrack: (oldTrack, newTrack, targets, meta)=>applyMediaOp(targets, getTrackKey(newTrack), meta, sendTrackMeta, (peer)=>peer.replaceTrack(oldTrack, newTrack), {
                t: oldTrack.id
            }),
        onPeerJoin: (f)=>{
            listeners.onPeerJoin = f;
            (0, _utilsMjs.keys)(activePeerMap).forEach((peerId)=>f(peerId));
        },
        onPeerLeave: (f)=>listeners.onPeerLeave = f,
        onPeerStream: (f)=>listeners.onPeerStream = f,
        onPeerTrack: (f)=>listeners.onPeerTrack = f
    };
};

},{"./utils.mjs":"dHdo5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"chgut":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
//#endregion
parcelHelpers.export(exports, "SharedPeerManager", ()=>SharedPeerManager);
parcelHelpers.export(exports, "getConnectedPeerHealth", ()=>getConnectedPeerHealth);
var _utilsMjs = require("./utils.mjs");
//#region src/shared-peer.ts
const roomFrameVersion = 1;
const roomPresenceFrameVersion = 2;
const wrapRoomFrame = (roomToken, data)=>{
    const tokenBytes = (0, _utilsMjs.encodeBytes)(roomToken);
    const frame = new Uint8Array(3 + tokenBytes.byteLength + data.byteLength);
    frame[0] = roomFrameVersion;
    frame[1] = tokenBytes.byteLength >>> 8 & 255;
    frame[2] = tokenBytes.byteLength & 255;
    frame.set(tokenBytes, 3);
    frame.set(data, 3 + tokenBytes.byteLength);
    return frame;
};
const wrapRoomPresenceFrame = (roomToken, isPresent)=>{
    const tokenBytes = (0, _utilsMjs.encodeBytes)(roomToken);
    const frame = new Uint8Array(4 + tokenBytes.byteLength);
    frame[0] = roomPresenceFrameVersion;
    frame[1] = Number(isPresent);
    frame[2] = tokenBytes.byteLength >>> 8 & 255;
    frame[3] = tokenBytes.byteLength & 255;
    frame.set(tokenBytes, 4);
    return frame;
};
const unwrapFrame = (data)=>{
    const buffer = new Uint8Array(data);
    if (buffer.byteLength < 3) return null;
    if (buffer[0] === roomFrameVersion) {
        const tokenSize = (buffer[1] ?? 0) << 8 | (buffer[2] ?? 0);
        const headerSize = 3 + tokenSize;
        if (tokenSize <= 0 || buffer.byteLength < headerSize) return null;
        return {
            type: "room",
            roomToken: (0, _utilsMjs.decodeBytes)(buffer.subarray(3, headerSize)),
            payload: buffer.subarray(headerSize).slice().buffer
        };
    }
    if (buffer[0] !== roomPresenceFrameVersion || buffer.byteLength < 4) return null;
    const tokenSize = (buffer[2] ?? 0) << 8 | (buffer[3] ?? 0);
    const headerSize = 4 + tokenSize;
    if (tokenSize <= 0 || buffer.byteLength < headerSize) return null;
    return {
        type: "presence",
        roomToken: (0, _utilsMjs.decodeBytes)(buffer.subarray(4, headerSize)),
        isPresent: buffer[1] === 1
    };
};
const isPeerUnderlyingStale = (peer)=>{
    const { connection , channel  } = peer;
    return peer.isDead || connection.connectionState === "closed" || connection.connectionState === "failed" || connection.iceConnectionState === "closed" || connection.iceConnectionState === "failed" || channel?.readyState === "closing" || channel?.readyState === "closed";
};
const getConnectedPeerHealth = (peer)=>{
    if (isPeerUnderlyingStale(peer)) return "stale";
    const { channel  } = peer;
    if (!channel || channel.readyState !== "open") return "transient";
    return "live";
};
var SharedPeerManager = class {
    byApp = {};
    roomPresenceHandlers = {};
    getMap(appId) {
        return this.byApp[appId] ??= {};
    }
    get(appId, peerId) {
        return this.byApp[appId]?.[peerId];
    }
    isPeerStale(peer) {
        return isPeerUnderlyingStale(peer);
    }
    getHealth(peer) {
        return this.isPeerStale(peer) ? "stale" : "live";
    }
    setRoomPresenceHandler(appId, handler) {
        this.roomPresenceHandlers[appId] = handler;
        return ()=>{
            if (this.roomPresenceHandlers[appId] === handler) delete this.roomPresenceHandlers[appId];
        };
    }
    sendRoomPresence(shared, roomToken, isPresent) {
        if (shared.isClosing || shared.peer.isDead) return;
        shared.peer.sendData(wrapRoomPresenceFrame(roomToken, isPresent));
    }
    clear(appId, peerId, { destroyPeer  }) {
        const map = this.byApp[appId];
        const shared = map?.[peerId];
        if (!shared || shared.isClosing) return;
        shared.idleTimer = (0, _utilsMjs.resetTimer)(shared.idleTimer);
        shared.isClosing = true;
        if (destroyPeer && !shared.peer.isDead) shared.peer.destroy();
        const bindings = (0, _utilsMjs.values)(shared.bindings);
        shared.bindings = {};
        shared.bindingsByToken = {};
        shared.controlRoomId = null;
        delete map[peerId];
        bindings.forEach((binding)=>{
            binding.handlers.close?.();
            binding.pendingData.length = 0;
            binding.pendingSendData.length = 0;
            binding.pendingTracks.length = 0;
        });
        shared.remoteStreamsByKey.clear();
        shared.remoteStreamsById.clear();
        shared.remoteTracksByKey.clear();
        shared.remoteTracksById.clear();
        shared.pendingDataByToken.clear();
        shared.remoteRoomTokens.clear();
        if ((0, _utilsMjs.keys)(map).length === 0) delete this.byApp[appId];
    }
    register(appId, peerId, peer, idleMs) {
        const map = this.getMap(appId);
        const existing = map[peerId];
        if (existing) {
            existing.idleTimer = (0, _utilsMjs.resetTimer)(existing.idleTimer);
            if (existing.peer === peer) return existing;
            this.clear(appId, peerId, {
                destroyPeer: true
            });
        }
        const shared = {
            appId,
            peerId,
            peer,
            bindings: {},
            bindingsByToken: {},
            pendingDataByToken: /* @__PURE__ */ new Map(),
            remoteRoomTokens: /* @__PURE__ */ new Set(),
            idleTimer: null,
            controlRoomId: null,
            streamOwners: /* @__PURE__ */ new Map(),
            trackOwners: /* @__PURE__ */ new Map(),
            remoteStreamsByKey: /* @__PURE__ */ new Map(),
            remoteStreamsById: /* @__PURE__ */ new Map(),
            remoteTracksByKey: /* @__PURE__ */ new Map(),
            remoteTracksById: /* @__PURE__ */ new Map(),
            idleMs,
            isClosing: false
        };
        peer.setHandlers({
            data: (data)=>this.dispatchData(shared, data),
            signal: (signal)=>this.dispatchSignal(shared, signal),
            close: ()=>this.clear(appId, peerId, {
                    destroyPeer: false
                }),
            error: (err)=>{
                console.error(`${(0, _utilsMjs.libName)} peer error:`, err);
                this.clear(appId, peerId, {
                    destroyPeer: false
                });
            },
            track: (track, stream)=>this.dispatchTrack(shared, track, stream)
        });
        map[peerId] = shared;
        return shared;
    }
    bind(roomId, roomTokenPromise, shared, { onDetach  }) {
        const existingBinding = shared.bindings[roomId];
        if (existingBinding) {
            shared.idleTimer = (0, _utilsMjs.resetTimer)(shared.idleTimer);
            return {
                proxy: existingBinding.proxy,
                isNew: false
            };
        }
        const binding = {
            roomId,
            roomToken: null,
            roomTokenPromise,
            handlers: {},
            pendingData: [],
            pendingSendData: [],
            pendingTracks: [],
            detach: (0, _utilsMjs.noOp),
            proxy: {}
        };
        const detachBinding = ()=>{
            if (!shared.bindings[roomId]) return;
            this.pruneRoomOwnership(shared, roomId);
            delete shared.bindings[roomId];
            if (binding.roomToken && shared.bindingsByToken[binding.roomToken] === binding) delete shared.bindingsByToken[binding.roomToken];
            if (shared.controlRoomId === roomId) shared.controlRoomId = (0, _utilsMjs.keys)(shared.bindings)[0] ?? null;
            onDetach();
            this.scheduleIdleTimer(shared);
        };
        const proxy = {
            created: shared.peer.created,
            get connection () {
                return shared.peer.connection;
            },
            get channel () {
                return shared.peer.channel;
            },
            get isDead () {
                return shared.peer.isDead;
            },
            getOffer: (restartIce)=>shared.peer.getOffer(restartIce),
            signal: (sdp)=>shared.peer.signal(sdp),
            sendData: (data)=>{
                if (!binding.roomToken) {
                    binding.pendingSendData.push(data);
                    return;
                }
                shared.peer.sendData(wrapRoomFrame(binding.roomToken, data));
            },
            destroy: ()=>detachBinding(),
            setHandlers: (newHandlers)=>{
                const { signal , ...rest } = newHandlers;
                Object.assign(binding.handlers, rest);
                if (signal) binding.handlers.signal = signal;
                this.flushBindingQueues(binding);
            },
            offerPromise: shared.peer.offerPromise,
            addStream: (stream)=>{
                const owners = shared.streamOwners.get(stream) ?? /* @__PURE__ */ new Set();
                const shouldAttach = owners.size === 0;
                owners.add(roomId);
                shared.streamOwners.set(stream, owners);
                if (shouldAttach) shared.peer.addStream(stream);
            },
            removeStream: (stream)=>{
                const owners = shared.streamOwners.get(stream);
                if (!owners) return;
                owners.delete(roomId);
                if (owners.size === 0) {
                    shared.streamOwners.delete(stream);
                    shared.peer.removeStream(stream);
                }
            },
            addTrack: (track, stream)=>{
                const entry = shared.trackOwners.get(track) ?? {
                    stream,
                    rooms: /* @__PURE__ */ new Set()
                };
                const shouldAttach = entry.rooms.size === 0;
                entry.stream = stream;
                entry.rooms.add(roomId);
                shared.trackOwners.set(track, entry);
                if (shouldAttach) return shared.peer.addTrack(track, stream);
                return shared.peer.connection.getSenders().find((s)=>s.track === track) ?? shared.peer.addTrack(track, stream);
            },
            removeTrack: (track)=>{
                const entry = shared.trackOwners.get(track);
                if (!entry) return;
                entry.rooms.delete(roomId);
                if (entry.rooms.size === 0) {
                    shared.trackOwners.delete(track);
                    shared.peer.removeTrack(track);
                }
            },
            replaceTrack: (oldTrack, newTrack)=>{
                const oldEntry = shared.trackOwners.get(oldTrack);
                if (oldEntry) {
                    shared.trackOwners.delete(oldTrack);
                    const nextEntry = shared.trackOwners.get(newTrack) ?? {
                        stream: oldEntry.stream,
                        rooms: /* @__PURE__ */ new Set()
                    };
                    oldEntry.rooms.forEach((room)=>nextEntry.rooms.add(room));
                    shared.trackOwners.set(newTrack, nextEntry);
                }
                return shared.peer.replaceTrack(oldTrack, newTrack);
            },
            __trysteroGetRemoteStreamByKey: (key)=>shared.remoteStreamsByKey.get(key),
            __trysteroSetRemoteStreamByKey: (key, stream)=>void shared.remoteStreamsByKey.set(key, stream),
            __trysteroGetRemoteStreamById: (id)=>shared.remoteStreamsById.get(id),
            __trysteroSetRemoteStreamById: (id, stream)=>void shared.remoteStreamsById.set(id, stream),
            __trysteroGetRemoteTrackByKey: (key)=>shared.remoteTracksByKey.get(key),
            __trysteroSetRemoteTrackByKey: (key, track, stream)=>void shared.remoteTracksByKey.set(key, {
                    track,
                    stream
                }),
            __trysteroGetRemoteTrackById: (id)=>shared.remoteTracksById.get(id),
            __trysteroSetRemoteTrackById: (id, track, stream)=>void shared.remoteTracksById.set(id, {
                    track,
                    stream
                })
        };
        binding.proxy = proxy;
        binding.detach = detachBinding;
        shared.bindings[roomId] = binding;
        shared.controlRoomId ??= roomId;
        shared.idleTimer = (0, _utilsMjs.resetTimer)(shared.idleTimer);
        roomTokenPromise.then((roomToken)=>{
            if (shared.isClosing || shared.bindings[roomId] !== binding) return;
            binding.roomToken = roomToken;
            shared.bindingsByToken[roomToken] = binding;
            const pendingData = shared.pendingDataByToken.get(roomToken);
            if (pendingData?.length) {
                binding.pendingData.push(...pendingData);
                shared.pendingDataByToken.delete(roomToken);
            }
            binding.pendingSendData.splice(0).forEach((payload)=>shared.peer.sendData(wrapRoomFrame(roomToken, payload)));
            this.flushBindingQueues(binding);
        });
        return {
            proxy,
            isNew: true
        };
    }
    pruneRoomOwnership(shared, roomIdToRemove) {
        shared.streamOwners.forEach((rooms, stream)=>{
            rooms.delete(roomIdToRemove);
            if (rooms.size === 0) {
                shared.streamOwners.delete(stream);
                shared.peer.removeStream(stream);
            }
        });
        shared.trackOwners.forEach((entry, track)=>{
            entry.rooms.delete(roomIdToRemove);
            if (entry.rooms.size === 0) {
                shared.trackOwners.delete(track);
                shared.peer.removeTrack(track);
            }
        });
    }
    scheduleIdleTimer(shared) {
        if (shared.isClosing || (0, _utilsMjs.keys)(shared.bindings).length > 0) return;
        shared.idleTimer = (0, _utilsMjs.resetTimer)(shared.idleTimer);
        shared.idleTimer = setTimeout(()=>{
            const current = this.byApp[shared.appId]?.[shared.peerId];
            if (!current || (0, _utilsMjs.keys)(current.bindings).length > 0) return;
            this.clear(shared.appId, shared.peerId, {
                destroyPeer: true
            });
        }, shared.idleMs);
    }
    getSignalBinding(shared) {
        if (shared.controlRoomId) {
            const selected = shared.bindings[shared.controlRoomId];
            if (selected?.handlers.signal) return selected;
        }
        const fallback = (0, _utilsMjs.values)(shared.bindings).find((binding)=>Boolean(binding.handlers.signal));
        if (!fallback) return null;
        shared.controlRoomId = fallback.roomId;
        return fallback;
    }
    flushBindingQueues(binding) {
        const { handlers  } = binding;
        if (handlers.data && binding.pendingData.length > 0) binding.pendingData.splice(0).forEach((payload)=>handlers.data?.(payload));
        if ((handlers.track || handlers.stream) && binding.pendingTracks.length) binding.pendingTracks.splice(0).forEach(({ track , stream  })=>{
            handlers.track?.(track, stream);
            handlers.stream?.(stream);
        });
    }
    dispatchData(shared, data) {
        const decoded = unwrapFrame(data);
        if (!decoded) return;
        if (decoded.type === "presence") {
            if (decoded.isPresent) shared.remoteRoomTokens.add(decoded.roomToken);
            else shared.remoteRoomTokens.delete(decoded.roomToken);
            this.roomPresenceHandlers[shared.appId]?.(shared.peerId, decoded.roomToken, decoded.isPresent);
            return;
        }
        const binding = shared.bindingsByToken[decoded.roomToken];
        if (!binding) {
            const pending = shared.pendingDataByToken.get(decoded.roomToken) ?? [];
            pending.push(decoded.payload);
            shared.pendingDataByToken.set(decoded.roomToken, pending);
            return;
        }
        if (binding.handlers.data) binding.handlers.data(decoded.payload);
        else binding.pendingData.push(decoded.payload);
    }
    dispatchSignal(shared, signal) {
        this.getSignalBinding(shared)?.handlers.signal?.(signal);
    }
    dispatchTrack(shared, track, stream) {
        (0, _utilsMjs.values)(shared.bindings).forEach((binding)=>{
            if (binding.handlers.track || binding.handlers.stream) {
                binding.handlers.track?.(track, stream);
                binding.handlers.stream?.(stream);
                return;
            }
            binding.pendingTracks.push({
                track,
                stream
            });
        });
    }
};

},{"./utils.mjs":"dHdo5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5EMI2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
//#endregion
parcelHelpers.export(exports, "clearConnectedPeer", ()=>clearConnectedPeer);
parcelHelpers.export(exports, "createSignalHandler", ()=>createSignalHandler);
parcelHelpers.export(exports, "getState", ()=>getState);
parcelHelpers.export(exports, "resetOfferState", ()=>resetOfferState);
parcelHelpers.export(exports, "updateStatus", ()=>updateStatus);
var _utilsMjs = require("./utils.mjs");
var _cryptoMjs = require("./crypto.mjs");
var _offerPoolMjs = require("./offer-pool.mjs");
var _sharedPeerMjs = require("./shared-peer.mjs");
//#region src/signal-handler.ts
const offerPostAnswerTtlMs = 23333;
const offerIdSize = 12;
const disconnectedPeerGraceMs = 7533;
const answeringTtlMs = 23333;
const legacyCandidateKey = "__legacy__";
const offerRelayPlaceholder = "offer-placeholder";
const publishCipheredSignalingMessage = (ctx, signal, peerTopic, signalPeer, buildPayload, stillValid)=>{
    ctx.toCipher(signal).then((encryptedSignal)=>{
        if (ctx.isLeaving() || !stillValid()) return;
        signalPeer(peerTopic, (0, _utilsMjs.toJson)(buildPayload(encryptedSignal.sdp)));
    });
};
const makeState = ()=>({
        status: "idle",
        offerPeer: null,
        offerId: null,
        offerSdp: null,
        offerInitPromise: null,
        offerAnswered: false,
        offerRelays: [],
        offerSignalRelays: [],
        offerSignalBacklog: [],
        offerRelayTimers: [],
        offerExpiryTimer: null,
        connectedPeer: null,
        connectedPeerUnhealthySinceMs: null,
        answeringExpiryTimer: null,
        answeringPeer: null,
        pendingCandidates: {}
    });
const getState = (peerStates, peerId)=>peerStates[peerId] ??= makeState();
const updateStatus = (state)=>{
    if (state.connectedPeer) state.status = "connected";
    else if (state.answeringPeer) state.status = "answering";
    else if (state.offerPeer || state.offerRelays.some(Boolean)) state.status = "offering";
    else state.status = "idle";
};
const clearAnswering = (state, peer)=>{
    if (state.answeringPeer === peer) {
        state.answeringExpiryTimer = (0, _utilsMjs.resetTimer)(state.answeringExpiryTimer);
        state.answeringPeer = null;
        updateStatus(state);
    }
};
const clearConnectedPeer = (state, peerId, _reason)=>{
    if (!state.connectedPeer) return;
    if (!state.connectedPeer.isDead) state.connectedPeer.destroy();
    state.connectedPeer = null;
    state.connectedPeerUnhealthySinceMs = null;
    updateStatus(state);
};
const clearOfferRelay = (state, relayId)=>{
    state.offerRelayTimers[relayId] = (0, _utilsMjs.resetTimer)(state.offerRelayTimers[relayId]);
    if (state.offerRelays[relayId]) {
        state.offerRelays[relayId] = void 0;
        updateStatus(state);
    }
};
const clearOfferRelayIfPlaceholder = (state, relayId)=>{
    if (state?.offerRelays[relayId] === offerRelayPlaceholder) clearOfferRelay(state, relayId);
};
const hasRemoteDescription = (peer)=>{
    if (peer.isDead || peer.connection.connectionState === "closed") return true;
    try {
        return Boolean(peer.connection.remoteDescription);
    } catch  {
        return true;
    }
};
const resetOfferState = (state, offerPool)=>{
    const previousOfferAnswered = state.offerAnswered;
    state.offerExpiryTimer = (0, _utilsMjs.resetTimer)(state.offerExpiryTimer);
    state.offerInitPromise = null;
    state.offerRelays.forEach((_, relayId)=>clearOfferRelay(state, relayId));
    state.offerRelays = [];
    state.offerSignalRelays = [];
    state.offerRelayTimers = [];
    state.offerSignalBacklog = [];
    if (state.offerPeer && state.offerPeer !== state.connectedPeer) {
        if (previousOfferAnswered || hasRemoteDescription(state.offerPeer)) {
            if (!state.offerPeer.isDead) state.offerPeer.destroy();
        } else offerPool.recycle(state.offerPeer);
    }
    state.offerPeer = null;
    state.offerId = null;
    state.offerSdp = null;
    state.offerAnswered = false;
    updateStatus(state);
};
const scheduleAnsweringExpiry = (ctx, state, peerId, peer)=>{
    (0, _utilsMjs.resetTimer)(state.answeringExpiryTimer);
    state.answeringExpiryTimer = setTimeout(()=>{
        const current = ctx.peerStates[peerId];
        if (!current || current.connectedPeer || current.answeringPeer !== peer) return;
        peer.destroy();
        clearAnswering(current, peer);
    }, answeringTtlMs);
};
const flushBufferedCandidates = async (state, peer, offerId)=>{
    const bufferKeys = offerId ? [
        offerId,
        legacyCandidateKey
    ] : [
        legacyCandidateKey
    ];
    for (const key of bufferKeys){
        const buffered = state.pendingCandidates[key];
        if (!buffered?.length) continue;
        delete state.pendingCandidates[key];
        for (const candidate of buffered)await peer.signal(candidate);
    }
};
const scheduleOfferExpiry = (ctx, state, peerId, ttlMs = (0, _offerPoolMjs.offerTtl))=>{
    (0, _utilsMjs.resetTimer)(state.offerExpiryTimer);
    const offerId = state.offerId;
    state.offerExpiryTimer = setTimeout(()=>{
        const current = ctx.peerStates[peerId];
        if (!current || current.connectedPeer || current.offerId !== offerId) return;
        resetOfferState(current, ctx.offerPool);
    }, ttlMs);
};
const ensureOffer = (ctx, state, peerId, relayId)=>{
    if (state.offerPeer && state.offerId && state.offerSdp) return Promise.resolve({
        peer: state.offerPeer,
        offer: state.offerSdp,
        offerId: state.offerId
    });
    if (state.offerInitPromise) return state.offerInitPromise;
    state.offerInitPromise = (async ()=>{
        const firstOffer = (await ctx.offerPool.checkout(1, false, ctx.encryptOffer))[0];
        if (!firstOffer) throw (0, _utilsMjs.mkErr)("failed to allocate offer peer");
        const { peer , offer  } = firstOffer;
        state.offerPeer = peer;
        state.offerId = (0, _utilsMjs.genId)(offerIdSize);
        state.offerSdp = offer;
        state.offerAnswered = false;
        state.offerSignalBacklog = [];
        updateStatus(state);
        const onOfferPeerClosedOrError = ()=>{
            if (state.offerPeer === peer && !state.connectedPeer) resetOfferState(state, ctx.offerPool);
            ctx.disconnectPeer(peer, peerId);
        };
        peer.setHandlers({
            connect: ()=>ctx.connectPeer(peer, peerId, relayId),
            signal: (signal)=>{
                if (state.offerPeer !== peer) return;
                state.offerSignalBacklog.push(signal);
                state.offerSignalRelays.forEach((sendSignal)=>sendSignal?.(signal));
            },
            close: onOfferPeerClosedOrError,
            error: onOfferPeerClosedOrError
        });
        scheduleOfferExpiry(ctx, state, peerId);
        return {
            peer,
            offer,
            offerId: state.offerId
        };
    })().finally(()=>state.offerInitPromise = null);
    return state.offerInitPromise;
};
const handleAnnouncement = async (ctx, relayId, peerId, shared, signalPeer)=>{
    if (shared) {
        ctx.attachSharedPeerToRoom(peerId, shared);
        return;
    }
    const state = ctx.peerStates[peerId];
    if (!state || state.connectedPeer || state.answeringPeer || state.offerAnswered) {
        clearOfferRelayIfPlaceholder(state, relayId);
        return;
    }
    if (state.offerRelays[relayId] !== offerRelayPlaceholder) return;
    const [peerTopic, offerInfo] = await (0, _utilsMjs.all)([
        (0, _cryptoMjs.sha1)((0, _utilsMjs.topicPath)(ctx.rootTopicPlaintext, peerId)),
        ensureOffer(ctx, state, peerId, relayId)
    ]);
    if (ctx.isLeaving()) return;
    if (state.connectedPeer || state.answeringPeer || state.offerAnswered || state.offerRelays[relayId] !== offerRelayPlaceholder) {
        clearOfferRelayIfPlaceholder(state, relayId);
        return;
    }
    state.offerRelayTimers[relayId] = (0, _utilsMjs.resetTimer)(state.offerRelayTimers[relayId]);
    state.offerRelays[relayId] = true;
    updateStatus(state);
    state.offerRelayTimers[relayId] = setTimeout(()=>prunePendingOffer(ctx, peerId, relayId), (ctx.announceIntervals[relayId] ?? ctx.announceIntervalMs) * .9);
    let didSendOffer = false;
    state.offerSignalRelays[relayId] = (signal)=>{
        if (!didSendOffer) return;
        if (ctx.isLeaving() || state.connectedPeer || state.offerPeer !== offerInfo.peer || state.offerId !== offerInfo.offerId || signal.type !== "candidate") return;
        publishCipheredSignalingMessage(ctx, signal, peerTopic, signalPeer, (sdp)=>({
                peerId: (0, _utilsMjs.selfId),
                offerId: offerInfo.offerId,
                candidate: sdp
            }), ()=>!state.connectedPeer && state.offerPeer === offerInfo.peer && state.offerId === offerInfo.offerId);
    };
    signalPeer(peerTopic, (0, _utilsMjs.toJson)({
        peerId: (0, _utilsMjs.selfId),
        offerId: offerInfo.offerId,
        offer: offerInfo.offer
    }));
    didSendOffer = true;
    state.offerSignalBacklog.forEach((signal)=>state.offerSignalRelays[relayId]?.(signal));
};
const handleOffer = async (ctx, relayId, peerId, offer, offerId, hasOutgoingOfferHint, signalPeer)=>{
    const state = getState(ctx.peerStates, peerId);
    if (state.answeringPeer || state.offerAnswered) return;
    const hasTrackedOutgoingOffer = Boolean(state.offerPeer || state.offerRelays.some(Boolean));
    if ((hasTrackedOutgoingOffer || hasOutgoingOfferHint) && (0, _utilsMjs.selfId) < peerId) return;
    if (hasTrackedOutgoingOffer) resetOfferState(state, ctx.offerPool);
    const answerPeer = ctx.initPeer(false, ctx.config);
    state.answeringPeer = answerPeer;
    scheduleAnsweringExpiry(ctx, state, peerId, answerPeer);
    updateStatus(state);
    const onAnswerPeerClosedOrError = ()=>{
        clearAnswering(state, answerPeer);
        ctx.disconnectPeer(answerPeer, peerId);
    };
    answerPeer.setHandlers({
        connect: ()=>ctx.connectPeer(answerPeer, peerId, relayId),
        close: onAnswerPeerClosedOrError,
        error: onAnswerPeerClosedOrError
    });
    let plainOffer;
    try {
        plainOffer = await ctx.toPlain({
            type: "offer",
            sdp: offer
        });
    } catch  {
        clearAnswering(state, answerPeer);
        ctx.onJoinError?.({
            error: "incorrect room password when decrypting offer",
            appId: ctx.appId,
            peerId,
            roomId: ctx.roomId
        });
        return;
    }
    if (answerPeer.isDead) {
        clearAnswering(state, answerPeer);
        return;
    }
    const peerTopic = await (0, _cryptoMjs.sha1)((0, _utilsMjs.topicPath)(ctx.rootTopicPlaintext, peerId));
    if (ctx.isLeaving()) return;
    answerPeer.setHandlers({
        signal: (signal)=>{
            if (ctx.isLeaving() || state.answeringPeer !== answerPeer || answerPeer.isDead) return;
            if (signal.type !== "answer" && signal.type !== "candidate") return;
            publishCipheredSignalingMessage(ctx, signal, peerTopic, signalPeer, (sdp)=>{
                const payloadToSend = {
                    peerId: (0, _utilsMjs.selfId)
                };
                if (signal.type === "answer") payloadToSend["answer"] = sdp;
                else payloadToSend["candidate"] = sdp;
                if (offerId) payloadToSend["offerId"] = offerId;
                return payloadToSend;
            }, ()=>state.answeringPeer === answerPeer && !answerPeer.isDead);
        }
    });
    await answerPeer.signal(plainOffer);
    await flushBufferedCandidates(state, answerPeer, offerId);
};
const handleCandidate = async (ctx, peerId, candidate, offerId, peer)=>{
    let plainCandidate;
    try {
        plainCandidate = await ctx.toPlain({
            type: (0, _utilsMjs.candidateType),
            sdp: candidate
        });
    } catch  {
        return;
    }
    const state = getState(ctx.peerStates, peerId);
    const offerPeerMatch = offerId && state?.offerPeer && state.offerId === offerId ? state.offerPeer : null;
    const answeringPeer = state?.answeringPeer ?? null;
    const fallbackOfferPeer = !offerId && state?.offerPeer ? state.offerPeer : null;
    const targetPeer = peer && !peer.isDead ? peer : offerPeerMatch ?? answeringPeer ?? fallbackOfferPeer;
    if (!targetPeer || targetPeer.isDead) {
        const pendingKey = offerId ?? legacyCandidateKey;
        (state.pendingCandidates[pendingKey] ??= []).push(plainCandidate);
        return;
    }
    targetPeer.signal(plainCandidate);
};
const handleAnswer = async (ctx, relayId, peerId, answer, offerId, peer)=>{
    let plainAnswer;
    try {
        plainAnswer = await ctx.toPlain({
            type: "answer",
            sdp: answer
        });
    } catch  {
        ctx.onJoinError?.({
            error: "incorrect room password when decrypting answer",
            appId: ctx.appId,
            peerId,
            roomId: ctx.roomId
        });
        return;
    }
    if (peer) {
        ctx.offerPool.claimLeased(peer);
        peer.setHandlers({
            connect: ()=>ctx.connectPeer(peer, peerId, relayId),
            close: ()=>ctx.disconnectPeer(peer, peerId)
        });
        peer.signal(plainAnswer);
    } else {
        const state = ctx.peerStates[peerId];
        if (!state || !state.offerPeer || state.offerAnswered || offerId && state.offerId && offerId !== state.offerId || state.offerPeer.isDead) return;
        state.offerAnswered = true;
        scheduleOfferExpiry(ctx, state, peerId, offerPostAnswerTtlMs);
        state.offerPeer.signal(plainAnswer);
    }
};
const prunePendingOffer = (ctx, peerId, relayId)=>{
    const state = ctx.peerStates[peerId];
    if (!state || state.connectedPeer) return;
    if (state.offerRelays[relayId]) clearOfferRelay(state, relayId);
};
const createSignalHandler = (ctx)=>(relayId)=>async (topic, msg, signalPeer)=>{
            if (ctx.isLeaving()) return;
            const payload = typeof msg === "string" ? (0, _utilsMjs.fromJson)(msg) : msg;
            const peerId = typeof payload["peerId"] === "string" ? payload["peerId"] : "";
            const offer = payload["offer"];
            const answer = payload["answer"];
            const candidate = payload["candidate"];
            const offerId = payload["offerId"];
            const peer = payload["peer"];
            const hasOutgoingOfferHint = payload["hasOutgoingOffer"] === true;
            if (peerId === (0, _utilsMjs.selfId)) return;
            const state = ctx.peerStates[peerId];
            const connectedPeer = state?.connectedPeer;
            if (connectedPeer && state) {
                const health = (0, _sharedPeerMjs.getConnectedPeerHealth)(connectedPeer);
                if (health === "live") {
                    state.connectedPeerUnhealthySinceMs = null;
                    return;
                }
                if (health === "stale") clearConnectedPeer(state, peerId, "message-from-stale-peer");
                else {
                    const nowMs = Date.now();
                    const unhealthySinceMs = state.connectedPeerUnhealthySinceMs ?? nowMs;
                    state.connectedPeerUnhealthySinceMs = unhealthySinceMs;
                    if (nowMs - unhealthySinceMs < disconnectedPeerGraceMs) return;
                    clearConnectedPeer(state, peerId, "message-from-prolonged-disconnect");
                }
            }
            let shared = ctx.sharedPeers.get(ctx.appId, peerId);
            if (shared && ctx.sharedPeers.getHealth(shared.peer) === "stale") {
                ctx.sharedPeers.clear(ctx.appId, peerId, {
                    destroyPeer: true
                });
                shared = void 0;
            }
            const isAnnouncement = Boolean(peerId && !offer && !answer && !candidate);
            const [rootTopic, selfTopic] = await (0, _utilsMjs.all)([
                ctx.rootTopicP,
                ctx.selfTopicP
            ]);
            if (ctx.isLeaving()) return;
            if (topic !== rootTopic && topic !== selfTopic) return;
            if (isAnnouncement && !shared) {
                const announcePeerState = getState(ctx.peerStates, peerId);
                const shouldLeadOffer = (0, _utilsMjs.selfId) < peerId;
                if (announcePeerState.answeringPeer || announcePeerState.connectedPeer || announcePeerState.offerAnswered) return;
                if (!shouldLeadOffer && !announcePeerState.offerPeer) {
                    const peerSelfTopic = await (0, _cryptoMjs.sha1)((0, _utilsMjs.topicPath)(ctx.rootTopicPlaintext, peerId));
                    if (!ctx.isLeaving() && !announcePeerState.connectedPeer) signalPeer(peerSelfTopic, (0, _utilsMjs.toJson)({
                        peerId: (0, _utilsMjs.selfId)
                    }));
                    return;
                }
                if (announcePeerState.offerRelays[relayId]) return;
                announcePeerState.offerRelays[relayId] = offerRelayPlaceholder;
                updateStatus(announcePeerState);
            }
            if (shared && (offer || answer || candidate)) {
                if (shared.bindings[ctx.roomId]) return;
                ctx.attachSharedPeerToRoom(peerId, shared);
                return;
            }
            if (isAnnouncement) return handleAnnouncement(ctx, relayId, peerId, shared, signalPeer);
            if (offer) return handleOffer(ctx, relayId, peerId, offer, offerId, hasOutgoingOfferHint, signalPeer);
            if (candidate) return handleCandidate(ctx, peerId, candidate, offerId, peer);
            if (answer) return handleAnswer(ctx, relayId, peerId, answer, offerId, peer);
        };

},{"./utils.mjs":"dHdo5","./crypto.mjs":"lEcMG","./offer-pool.mjs":"3rjj0","./shared-peer.mjs":"chgut","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"281Lm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "vocabularies", ()=>vocabularies);
const architecture = {
    key: "architecture",
    label: "Architecture",
    words: [
        "business process",
        "consumer",
        "context",
        "decoupling",
        "enterprise-level",
        "facilitate",
        "focus",
        "hyper-personalization",
        "impacts",
        "integration layer",
        "journey",
        "lifecycle",
        "mindset",
        "off-line",
        "omni-channel",
        "orchestration",
        "ownership",
        "paradigm",
        "positioning",
        "proactive",
        "provider",
        "refactoring",
        "relevance",
        "restructuring",
        "reusability",
        "scalable",
        "shared",
        "strategy",
        "timeline"
    ]
};
const business = {
    key: "business",
    label: "Business",
    words: [
        "Ballpark",
        "Best practice",
        "Blamestorming",
        "Boil the ocean",
        "Brainstorming",
        "Core compentency",
        "Empowering",
        "Gap analysis",
        "Goal-oriented",
        "Impact assessment",
        "Innovative",
        "Inshore",
        "Lean & mean",
        "Leverage",
        "Mindset",
        "Mindshare",
        "Mission statement",
        "Open door",
        "Out of the loop",
        "Out of the loop",
        "Paradigm shift",
        "Proactive",
        "Projection",
        "Restructuring",
        "ROI",
        "Stakeholders",
        "Team building"
    ]
};
const vocabularies = [
    architecture,
    business
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["lSgxL","kuM8f"], "kuM8f", "parcelRequire94c2")

//# sourceMappingURL=index.6b815632.js.map
