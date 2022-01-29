"use strict";(self.webpackChunkrecoil=self.webpackChunkrecoil||[]).push([[588],{3905:function(e,n,r){r.d(n,{Zo:function(){return p},kt:function(){return d}});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=t.createContext({}),l=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},p=function(e){var n=l(e.components);return t.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},h=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=l(r),d=o,f=h["".concat(c,".").concat(d)]||h[d]||u[d]||a;return r?t.createElement(f,i(i({ref:n},p),{},{components:r})):t.createElement(f,i({ref:n},p))}));function d(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=h;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}h.displayName="MDXCreateElement"},5937:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return h}});var t=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],s={title:"useRecoilSnapshot()",sidebar_label:"useRecoilSnapshot()"},c=void 0,l={unversionedId:"api-reference/core/useRecoilSnapshot",id:"api-reference/core/useRecoilSnapshot",title:"useRecoilSnapshot()",description:"This hook synchronously returns a Snapshot object during rendering and subscribes the calling component for all Recoil state changes.  You may want to use this hook for debug tools, or for server-side rendering where you need to synchronously have the state during the initial render.",source:"@site/docs/api-reference/core/useRecoilSnapshot.md",sourceDirName:"api-reference/core",slug:"/api-reference/core/useRecoilSnapshot",permalink:"/docs/api-reference/core/useRecoilSnapshot",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/docs/api-reference/core/useRecoilSnapshot.md",tags:[],version:"current",frontMatter:{title:"useRecoilSnapshot()",sidebar_label:"useRecoilSnapshot()"},sidebar:"docs",previous:{title:"useRecoilTransactionObserver()",permalink:"/docs/api-reference/core/useRecoilTransactionObserver"},next:{title:"useGotoRecoilSnapshot()",permalink:"/docs/api-reference/core/useGotoRecoilSnapshot"}},p=[{value:"Debug Example",id:"debug-example",children:[],level:3},{value:"Error Boundary Example",id:"error-boundary-example",children:[],level:3},{value:"Link Example",id:"link-example",children:[],level:3}],u={toc:p};function h(e){var n=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This hook synchronously returns a ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/Snapshot"},(0,a.kt)("inlineCode",{parentName:"a"},"Snapshot"))," object during rendering and subscribes the calling component for all Recoil state changes.  You may want to use this hook for debug tools, or for server-side rendering where you need to synchronously have the state during the initial render."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"function useRecoilSnapshot(): Snapshot\n")),(0,a.kt)("p",null,"Be careful using this hook because it will cause the component to re-render for ",(0,a.kt)("em",{parentName:"p"},"all")," Recoil state changes.   In the future we hope to provide the ability to debounce for performance."),(0,a.kt)("h3",{id:"debug-example"},"Debug Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"function DebugObserver() {\n  const snapshot = useRecoilSnapshot();\n  const previousSnapshot = usePrevious(snapshot);\n  useEffect(() => {\n    console.debug('Changed Atoms:');\n    for (const node of snapshot.getNodes_UNSTABLE({isModified: true})) {\n      console.debug(node.key, snapshot.getLoadable(node));\n    }\n  }, [snapshot]);\n  return null;\n}\n\nfunction MyApp() {\n  return (\n    <RecoilRoot>\n      <DebugObserver />\n      ...\n    </RecoilRoot>\n  );\n}\n")),(0,a.kt)("h3",{id:"error-boundary-example"},"Error Boundary Example"),(0,a.kt)("p",null,"A ",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/asynchronous-data-queries#retry-query-from-error-message"},"fun little example")," using snapshots in an error boundary to find, display, and retry selectors that threw an error."),(0,a.kt)("h3",{id:"link-example"},"Link Example"),(0,a.kt)("p",null,"Define a ",(0,a.kt)("inlineCode",{parentName:"p"},"<LinkToNewView>")," component that renders an ",(0,a.kt)("inlineCode",{parentName:"p"},"<a>")," anchor with an ",(0,a.kt)("inlineCode",{parentName:"p"},"href")," based on the current state with a mutation applied.  In this example ",(0,a.kt)("inlineCode",{parentName:"p"},"uriFromSnapshot()")," is some user-defined function which encodes the current state in the URI which can be restored when loading the page."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"function LinkToNewView() {\n  const snapshot = useRecoilSnapshot();\n  const newSnapshot = snapshot.map(({set}) => set(viewState, 'New View'));\n  return <a href={uriFromSnapshot(newSnapshot)}>Click Me!</a>;\n}\n")),(0,a.kt)("p",null,"This is a simplified example.  We provide a helper like this for generating links in our browser history persistence library coming soon which is more extensible and optimized.  For example, it will hijack the click handler to update local state replacing the browser history."))}h.isMDXComponent=!0}}]);