(this.webpackJsonplibroteca=this.webpackJsonplibroteca||[]).push([[0],{143:function(e,a,o){"use strict";o.r(a);var n=o(0),r=o.n(n),s=o(9),i=o.n(s),t=o(32),l=o.n(t),c=o(40),u=o(58),d=o.n(u),m="https://349238f33342.ngrok.io/v1/",b="".concat(m,"books"),p="".concat(m,"categories"),h=function(){return function(){var e=Object(c.a)(l.a.mark((function e(a){var o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get(p);case 2:o=e.sent,a({type:"FETCH_CATEGORIES",payload:o.data});case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()},g=function(){return function(){var e=Object(c.a)(l.a.mark((function e(a){var o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(b),e.next=3,d.a.get(b);case 3:o=e.sent,a({type:"FETCH_BOOKS",payload:o.data});case 5:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()};function j(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}var v,f=function(){return function(){var e=Object(c.a)(l.a.mark((function e(a){var o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=j(),a({type:"GET_SIZE",payload:o});case 2:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()},y=o(37),O=o(38),q=Object(O.a)(v||(v=Object(y.a)(["\n    *{\n        margin: 0;\n        padding: 0;\n        box-sizing: border-box;\n        font-family: 'Roboto', sans-serif;\n        color: #424242;\n    }\n\n    body{\n        background: #ffffff;\n        overflow-x: hidden;\n    }\n\n    html{\n        @media (max-width: 1700px){\n            font-size: 75%;\n        }\n    }\n"]))),x=o(11),w=o(15),L=o(24),C=o(17),E=o(188),S=o(189),z=o(190),k=o(64),A=o(202),B=o(181),J=o(19),M=o(101),N=o.n(M),T=o(99),R=o.n(T),H=o(102),D=o.n(H),I=o(200),P=o(183),F=o(185),W=o(186),U=o(187),G=o(100),_=o.n(G),V=o(4),K=o(13),Y=o(31),Z=function(e){return e.slice(0,1).toUpperCase()+e.slice(1,e.length)},X=o(2),Q=Object(B.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(C.a)({flexGrow:1,display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(C.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(J.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(J.b)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(C.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}}));function $(){var e,a=Object(x.b)(),o=Object(K.f)(),s=Object(n.useCallback)((function(){return o.push("/LibroTeca/search")}),[o]),i=Q(),t=Object(x.c)((function(e){return e.categorias})),l=r.a.useState({left:!1}),c=Object(L.a)(l,2),u=c[0],d=c[1],m=function(e,a){return function(o){(!o||"keydown"!==o.type||"Tab"!==o.key&&"Shift"!==o.key)&&d(Object(w.a)(Object(w.a)({},u),{},Object(C.a)({},e,a)))}};return Object(X.jsx)("div",{className:i.root,children:Object(X.jsx)(E.a,{position:"fixed",children:Object(X.jsxs)(S.a,{children:[Object(X.jsx)(z.a,{edge:"start",className:i.menuButton,color:"inherit","aria-label":"open drawer",onClick:m("left",!0),children:Object(X.jsx)(N.a,{})}),Object(X.jsx)(I.a,{anchor:"left",open:u.left,onClose:m("left",!1),onOpen:m("left",!0),children:(e="left",Object(X.jsx)("div",{className:Object(V.a)(i.list,Object(C.a)({},i.fullList,"top"===e||"bottom"===e)),role:"presentation",onClick:m(e,!1),onKeyDown:m(e,!1),children:Object(X.jsxs)(P.a,{children:[Object(X.jsx)(Y.b,{to:"/LibroTeca/",style:{textDecoration:"none"},children:Object(X.jsxs)(F.a,{button:!0,children:[Object(X.jsx)(W.a,{children:Object(X.jsx)(R.a,{color:"primary"})}),Object(X.jsx)(U.a,{primary:"Inicio"})]},"Inicio")}),t.payload&&t.payload.map((function(e,a){return Object(X.jsx)(Y.b,{to:"/LibroTeca/category/".concat(e),style:{textDecoration:"none"},children:Object(X.jsxs)(F.a,{button:!0,children:[Object(X.jsx)(W.a,{children:Object(X.jsx)(_.a,{color:"primary"})}),Object(X.jsx)(U.a,{primary:Z(e)})]},e)})}))]})}))}),Object(X.jsx)(k.a,{className:i.title,variant:"h6",noWrap:!0,children:"LibroTeca"}),Object(X.jsxs)("div",{className:i.search,children:[Object(X.jsx)("div",{className:i.searchIcon,children:Object(X.jsx)(D.a,{})}),Object(X.jsx)(A.a,{onKeyDown:function(e){"Enter"!==e.code&&"Enter"!==e.key||(e.preventDefault(),""!==e.target.value&&(a({type:"SEARCH",payload:e.target.value}),s(),e.target.value=""))},placeholder:"Buscar\u2026",classes:{root:i.inputRoot,input:i.inputInput},inputProps:{"aria-label":"search"}})]})]})})})}var ee,ae,oe=o(197),ne=o(103),re=o.n(ne),se=o(199),ie={hidden:{opacity:0,width:"0%"},show:{opacity:1,width:"80%",transition:{duration:.5}}},te={hidden:{opacity:0,scale:0},show:{opacity:1,scale:1,transition:{duration:.5,ease:"easeOut"}}},le={hidden:{opacity:0,y:-100},show:{opacity:1,y:0,transition:{duration:.5}}},ce={hidden:{opacity:0},show:{opacity:1,transition:{duration:.5,when:"beforeChildren",staggerChildren:.5}}},ue=o(191),de=o(192),me=o(195),be=o(194),pe=o(193),he=o(196);function ge(e){var a=e.title,o=e.image,n=e.link,r=e.subtitulo,s=e.autor,i=Object(x.c)((function(e){return e.windowSize})),t=Object(B.a)({root:{maxWidth:445,minWidth:function(e){return e.screenWidth>750?400:200},height:380,display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",width:i.payload.width>750?"auto":"90vw"},media:{height:200}})({screenWidth:i.payload?i.payload.width:""});return Object(X.jsxs)(ue.a,{className:t.root,children:[Object(X.jsxs)(de.a,{children:[Object(X.jsx)(pe.a,{className:t.media,image:o,title:"Contemplative Reptile"}),Object(X.jsxs)(be.a,{children:[Object(X.jsx)(k.a,{gutterBottom:!0,variant:"h6",component:"h2",children:a}),Object(X.jsx)(k.a,{variant:"body2",color:"textSecondary",component:"p",children:r.lenght>4?r:""}),Object(X.jsx)(k.a,{variant:"body2",color:"textSecondary",component:"p",children:"Por ".concat(s)})]})]}),Object(X.jsx)(me.a,{children:Object(X.jsx)(he.a,{onClick:function(){window.open(n)},size:"small",color:"primary",children:"Descargar"})})]})}var je=Object(O.b)(se.a.div)(ee||(ee=Object(y.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin-top: ",";\n  padding: 5vw;\n  .GridCard {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  a {\n    align-self: flex-start;\n    width: auto;\n  }\n  .titulo {\n    font-size: 2rem;\n    margin-bottom: 0.5rem;\n    display: flex;\n    width: auto;\n    align-items: center;\n    align-self: flex-start;\n    cursor: pointer;\n    svg {\n      margin-left: 1rem;\n      font-size: 2rem;\n    }\n  }\n  .divider {\n    margin: 2rem 0;\n    width: 80%;\n    align-self: flex-start;\n  }\n  .pagIndex {\n    margin-top: 5rem;\n  }\n"])),(function(e){return e.screenWidth>750?"2rem":"5rem"})),ve=Object(O.b)(se.a.div)(ae||(ae=Object(y.a)(["\n  width: 80%;\n  height: 1rem;\n  border-bottom: 0.2rem solid #84c887;\n  border-radius: 5%;\n"]))),fe=o(203);function ye(e){var a,o=e.title,n=Object(x.c)((function(e){return e.libros})),r=Object(x.c)((function(e){return e.windowSize}));return void 0!==n.payload&&(a=n.payload.filter((function(e){return e.genero.includes(o)}))),Object(X.jsxs)(je,{children:[Object(X.jsx)(Y.b,{to:"/LibroTeca/category/".concat(o),style:{textDecoration:"none"},children:Object(X.jsxs)(se.a.h2,{variants:le,initial:"hidden",animate:"show",className:"titulo",children:[Z(o)," ",Object(X.jsx)(re.a,{})]})}),Object(X.jsx)(ve,{variants:ie,initial:"hidden",animate:"show",className:"divider"}),Object(X.jsx)(oe.a,{container:!0,justify:"center",direction:r.payload.width>750?"row":"column",alignItems:"center",spacing:1,children:a&&a.slice(0,4).map((function(e){return Object(X.jsx)(oe.a,{item:!0,alignItems:"center",justify:"center",xs:!0,children:Object(X.jsx)(se.a.div,{variants:te,initial:"hidden",animate:"show",children:Object(X.jsx)(ge,{title:e.titulo,image:e.portada,link:e.link1,subtitulo:e.subtitulo,autor:e.autor})})},Object(fe.a)())}))})]})}var Oe,qe=o(73),xe=o.n(qe),we=Object(O.b)(se.a.div)(Oe||(Oe=Object(y.a)(["\n  width: 100vw;\n  margin-top: 10rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  h2 {\n    font-size: ",';\n    font-weight: 800;\n    font-family: "Josefin Sans", sans-serif;\n  }\n  h3 {\n    text-align: center;\n    font-style: italic;\n    font-weight: 400;\n    width: ',";\n  }\n"])),(function(e){return e.screenWidth>750?"6vw":"15vw"}),(function(e){return e.screenWidth>750?"45vw":"80vw"})),Le=function(){var e=Object(x.c)((function(e){return e.windowSize})),a=Object(n.useState)(xe.a[Math.floor(Math.random()*xe.a.length)]),o=Object(L.a)(a,2),r=o[0];o[1];return Object(X.jsxs)(we,{screenWidth:e.payload?e.payload.width:"",variants:ce,className:"container",initial:"hidden",animate:"show",children:[Object(X.jsx)(se.a.div,{className:"item",variants:le,children:Object(X.jsx)(k.a,{gutterBottom:!0,variant:"h1",component:"h2",children:"\xa1Bienvenido!"})}),Object(X.jsx)(se.a.div,{className:"item",variants:le,children:Object(X.jsx)(k.a,{gutterBottom:!0,variant:"subtitle2",component:"h3",children:'"'.concat(r,'"')})})]})},Ce=function(){var e=Object(x.c)((function(e){return e.categorias}));return Object(X.jsxs)("div",{children:[Object(X.jsx)(Le,{}),e.payload&&e.payload.map((function(e){return Object(X.jsx)(ye,{title:e},e)}))]})},Ee=o(201),Se=function(){var e,a=Object(n.useState)({from:0,to:10}),o=Object(L.a)(a,2),r=o[0],s=o[1],i=Object(x.c)((function(e){return e.libros})),t=Object(x.c)((function(e){return e.windowSize})),l=Object(K.f)().location.pathname,c={numPages:0};void 0!==i.payload&&(e=i.payload.filter((function(e){return e.genero.includes(l.slice(20))})),c.numPages=Math.ceil(e.length/10));return Object(X.jsxs)(je,{screenWidth:t.payload?t.payload.width:"",children:[Object(X.jsx)(se.a.h2,{variants:le,initial:"hidden",animate:"show",className:"titulo",children:Z(l.slice(20))}),Object(X.jsx)(ve,{variants:ie,initial:"hidden",animate:"show",className:"divider"}),Object(X.jsx)(oe.a,{container:!0,justify:"center",direction:t.payload?t.payload.width>750?"row":"column":"",alignItems:"flex-start",spacing:1,children:e&&e.slice(r.from,r.to).map((function(e){return Object(X.jsx)(oe.a,{className:"GridCard",item:!0,xs:!0,children:Object(X.jsx)(se.a.div,{variants:te,initial:"hidden",animate:"show",children:Object(X.jsx)(ge,{title:e.titulo,image:e.portada,link:e.link1,subtitulo:e.subtitulo,autor:e.autor})})},Object(fe.a)())}))}),Object(X.jsx)(Ee.a,{onChange:function(a,o){var n=function(e,a,o,n){var r,s;return e===a?n%a===0?s=(r=o*(e-1))+o:(r=o*(e-1),s=n):1===e?(r=0,s=10):s=(r=o*(e-1))+o,[r,s]}(o,c.numPages,10,e.length),r=Object(L.a)(n,2),i=r[0],t=r[1];s({from:i,to:t})},className:"pagIndex",count:c.numPages,color:"primary"})]})},ze=function(){var e=Object(x.c)((function(e){return e.libros})),a=Object(x.c)((function(e){return e.buscar})),o=Object(x.c)((function(e){return e.windowSize})),n=[];return void 0!==e.payload&&null!==a&&(e.payload.filter((function(e){return e.titulo.toLowerCase().includes(a.payload.toLowerCase())})).map((function(e){return n.push(e)})),e.payload.filter((function(e){return e.autor.toLowerCase().includes(a.payload.toLowerCase())})).map((function(e){return n.push(e)}))),Object(X.jsxs)(je,{children:[Object(X.jsx)(se.a.h2,{variants:le,initial:"hidden",animate:"show",className:"titulo",children:Z(a.payload)}),Object(X.jsx)(ve,{variants:ie,initial:"hidden",animate:"show",className:"divider"}),Object(X.jsx)(oe.a,{container:!0,justify:"center",direction:o.payload.width>750?"row":"column",alignItems:"flex-start",spacing:1,children:n&&n.map((function(e){return Object(X.jsx)(oe.a,{item:!0,xs:!0,children:Object(X.jsx)(se.a.div,{variants:te,initial:"hidden",animate:"show",children:Object(X.jsx)(ge,{title:e.titulo,image:e.portada,link:e.link1,subtitulo:e.subtitulo,autor:e.autor})})},Object(fe.a)())}))})]})};var ke=function(){var e=Object(K.g)(),a=Object(x.b)();return Object(n.useEffect)((function(){function e(){a(f())}return a(f()),window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),Object(n.useEffect)((function(){a(h())}),[]),Object(n.useEffect)((function(){a(g())}),[]),Object(X.jsxs)("div",{className:"App",children:[Object(X.jsx)(q,{}),Object(X.jsxs)(K.c,{location:e,children:[Object(X.jsx)(K.a,{path:"/LibroTeca/",exact:!0,children:Object(X.jsx)(Ce,{})}),Object(X.jsx)(K.a,{path:"/LibroTeca/category/:category",exact:!0,children:Object(X.jsx)(Se,{})}),Object(X.jsx)(K.a,{path:"/LibroTeca/search",children:Object(X.jsx)(ze,{})})]},e.pathname),Object(X.jsx)($,{})]})},Ae=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,204)).then((function(a){var o=a.getCLS,n=a.getFID,r=a.getFCP,s=a.getLCP,i=a.getTTFB;o(e),n(e),r(e),s(e),i(e)}))},Be=o(105),Je=o(198),Me=o(35),Ne=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SIGN_IN":return!e;default:return e}},Te=[],Re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Te,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"FETCH_BOOKS":return Object(w.a)(Object(w.a)({},e),{},{payload:a.payload});default:return Object(w.a)({},e)}},He=[],De=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:He,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"FETCH_CATEGORIES":return Object(w.a)(Object(w.a)({},e),{},{payload:a.payload});default:return Object(w.a)({},e)}},Ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SEARCH":return Object(w.a)(Object(w.a)({},e),{},{payload:a.payload});default:return Object(w.a)({},e)}},Pe=[],Fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Pe,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"GET_SIZE":return Object(w.a)(Object(w.a)({},e),{},{payload:a.payload});default:return Object(w.a)({},e)}},We=Object(Me.c)({isLogged:Ne,libros:Re,categorias:De,buscar:Ie,windowSize:Fe}),Ue=o(104),Ge=Object(Be.a)({palette:{primary:{light:"#84c887",main:"#66bb6a",dark:"#47824a",contrastText:"#fff"},secondary:{light:"#ffee33",main:"#ffea00",dark:"#b2a300",contrastText:"#000"}}}),_e=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Me.d,Ve=Object(Me.e)(We,_e(Object(Me.a)(Ue.a)));i.a.render(Object(X.jsx)(r.a.StrictMode,{children:Object(X.jsx)(x.a,{store:Ve,children:Object(X.jsx)(Je.a,{theme:Ge,children:Object(X.jsx)(Y.a,{children:Object(X.jsx)(ke,{})})})})}),document.getElementById("root")),Ae()},73:function(e,a){e.exports=["Algunos libros son probados, otros devorados, poqu\xedsimos masticados y digeridos, Sir Francis Bacon.","All\xed donde se queman los libros, se acaba por quemar a los hombres, Heinrich Heine.","Amar la lectura es trocar horas de hast\xedo por horas de inefable y deliciosa compa\xf1\xeda, John Fitzgerald Kennedy.","Ante ciertos libros, uno se pregunta: \xbfqui\xe9n los leer\xe1? Y ante ciertas personas uno se pregunta: \xbfqu\xe9 leer\xe1n? Y al fin, libros y personas se encuentran, Andr\xe9 Gide.","Aprender a leer es lo m\xe1s importante que me ha pasado en la vida, Mario Vargas Llosa.","Carecer de libros propios es el colmo de la miseria, Benjamin Franklin.","Cuando oigo que un hombre tiene el h\xe1bito de la lectura, estoy predispuesto a pensar bien de \xe9l, Nicol\xe1s de Avellaneda.","Cuando rezamos hablamos con Dios, pero cuando leemos es Dios quien habla con nosotros, San Agust\xedn.","Cuanto menos se lee, m\xe1s da\xf1o hace lo que se lee, Miguel de Unamuno.","De los diversos instrumentos inventados por el hombre, el m\xe1s asombroso es el libro; todos los dem\xe1s son extensiones de su cuerpo\u2026 S\xf3lo el libro es una extensi\xf3n de la imaginaci\xf3n y la memoria, Jorge Luis Borges.","Detesto la vulgaridad del realismo en la literatura, Al que es capaz de llamarle pala a una pala, deber\xedan obligarle a usar una. Es lo \xfanico para lo que sirve, Oscar Wilde.","El estudio ha sido para m\xed el principal remedio contra las preocupaciones de la vida; no habiendo tenido nunca un disgusto que no me haya pasado despu\xe9s de una hora de lectura, Montesquieu.","El libro es fuerza, es valor, es fuerza, es alimento; antorcha del pensamiento y manantial del amor, Rub\xe9n Dar\xedo.","El que lee mucho y anda mucho, ve mucho y sabe mucho, Miguel de Cervantes.","El regalo de un libro, adem\xe1s de obsequio, es un delicado elogio, An\xf3nimo.","El verbo leer, como el verbo amar y el verbo so\xf1ar, no soporta el modo imperativo, Daniel Pennac.","En muchas ocasiones la lectura de un libro ha hecho la fortuna de un hombre, decidiendo el curso de su vida, Ralph Waldo Emerson.","Erotismo y poes\xeda: el primero es una met\xe1fora de la sexualidad, la segunda una erotizaci\xf3n del lenguaje, Octavio Paz.","Es un buen libro aquel que se abre con expectaci\xf3n y se cierra con provecho, Amos Bronson Alcott.","Hacer versos malos depara m\xe1s felicidad que leer los versos m\xe1s bellos, Hermann Hesse.","He buscado el sosiego en todas partes, y s\xf3lo lo he encontrado sentado en un rinc\xf3n apartado, con un libro en las manos, Thomas De Kempis.","La Biblioteca es una esfera cuyo centro cabal es cualquier hex\xe1gono, cuya circunferencia es inaccesible, Jorge Luis Borges.","La escritura es la pintura de la voz, Voltaire.","La lectura de un buen libro es un di\xe1logo incesante en que el libro habla y el alma contesta, Andr\xe9 Maurois.","La lectura es a la mente lo que el ejercicio al cuerpo, Joseph Addison.","La lectura es para m\xed algo as\xed como la barandilla en los balcones, Nuria Espert .","La lectura no da al hombre sabidur\xeda; le da conocimientos, William Somerset Maugham.","La lectura nos regala mucha compa\xf1\xeda, libertad para ser de otra manera y ser m\xe1s, Pedro La\xedn Entralgo.","La literatura es el arte de la palabra, Manuel Gayol Fern\xe1ndez.","La literatura es siempre una expedici\xf3n a la verdad, Franz Kafka.","La m\xe1s noble funci\xf3n de un escritor es dar testimonio, como acta notarial y como fiel cronista, del tiempo que le ha tocado vivir, Camilo Jos\xe9 Cela.","La pluma es la lengua del alma, Miguel de Cervantes.","La poes\xeda no quiere adeptos, quiere amantes, Federico Garc\xeda Lorca.","Lee y conducir\xe1s, no leas y ser\xe1s conducido, Santa Teresa de Jes\xfas.","Leer un libro ense\xf1a m\xe1s que hablar con su autor, porque el autor, en el libro, s\xf3lo ha puesto sus mejores pensamientos, Ren\xe9 Descartes.","Libros, caminos y d\xedas dan al hombre sabidur\xeda, Proverbio \xe1rabe.","Los libros no se han hecho para servir de adorno: sin embargo, nada hay que embellezca tanto como ellos en el interior del hogar, Harriet Beecher Stowe .","Los libros que el mundo llama inmorales son los que muestran su propia verg\xfcenza, Oscar Wilde.","Los libros son amigos que nunca decepcionan, Thomas Carlyle.","Los libros son el mejor vi\xe1tico que he encontrado para este humano viaje, Michel Eyquem de Montaigne.","Los libros son las abejas que llevan el polen de una inteligencia a otra, James Russell Lowell.","Los libros son, entre mis consejeros, los que m\xe1s me agradan, porque ni el temor ni la esperanza les impiden decirme lo que debo hacer, Alfonso V el Magn\xe1nimo.","Ning\xfan escritor joven desea tanto la cr\xedtica constructiva como la alabanza, William Hill.","Nunca releo mis libros, porque me da miedo, Gabriel Garc\xeda M\xe1rquez.","Ser escritor es robarle vida a la muerte, Alfredo Conde.","Si cerca de la biblioteca ten\xe9is un jard\xedn ya no os faltar\xe1 de nada,  Cicer\xf3n.","Un hogar sin libros es como un cuerpo sin alma, Cicer\xf3n.","Un libro abierto es un cerebro que habla; cerrado un amigo que espera; olvidado, un alma que perdona; destruido, un coraz\xf3n que llora, Proverbio hind\xfa.","Un libro es un regalo estupendo, porque muchas personas s\xf3lo leen para no tener que pensar, Andr\xe9 Maurois.","Uno no es lo que es por lo que escribe, sino por lo que ha le\xeddo, Jorge Luis Borges.","A veces lees un libro tan especial que quieres llevarlo contigo durante meses, incluso despu\xe9s de haberlo terminado, s\xf3lo para estar cerca de \xe9l, Marcus Zusak.","Adquirir el h\xe1bito de la lectura y rodearnos de buenos libros es construirnos un refugio moral que nos protege de casi todas las miserias de la vida, W., Somerset Maugham.","Aprender a leer es encender un fuego, cada s\xedlaba que se deletrea es una chispa, Victor Hugo.","Cada poema es \xfanico. En cada obra late, con mayor o menor grado, toda la poes\xeda. Cada lector busca algo en el poema. Y no es ins\xf3lito que lo encuentre: Ya lo llevaba dentro, Octavio Paz.","Con nuestros amigos los libros, si pasamos una velada en su compa\xf1\xeda, es solo y porque realmente nos apetece, Marcel Proust.","Creo que la literatura tiene algo m\xe1s que hacer que divertir: debe tener raz\xf3n, Max Aub.","Creo que parte de mi amor a la vida se lo debo a mi amor a los libros, Adolfo Bioy Casares.","Creo que vale la pena leer porque los libros ocultan pa\xedses maravillosos que ignoramos, contienen experiencias que no hemos vivido jam\xe1s. Uno es indudablemente m\xe1s rico despu\xe9s de la lectura, Adolfo Bioy Casares.","Cuando aprendas a leer ser\xe1s libre para siempre, Frederick Douglass.","Cuando leemos, creamos nuestras propias im\xe1genes y asociaciones. El libro vive dentro de nosotros, se reinventa en nosotros a medida que lo vamos leyendo, Jostein Gaarder.","Cuanto m\xe1s se lee, menos se imita, Jules Renard.","El arte de leer es, en gran parte, el arte de volver a encontrar la vida en los libros, y de comprenderla mejor gracias a ellos, Andr\xe9 Maurois.","El autor s\xf3lo escribe la mitad del libro. De la otra mitad debe ocuparse el lector, Joseph Conrad.","El escritor escribe su libro para explicarse a s\xed mismo lo que no se puede explicar, Gabriel Garc\xeda M\xe1rquez.","El gran inconveniente de los nuevos libros es que nos privan de leer los antiguos, Joseph Joubert.","El gusto por la lectura se adquiere casi siempre en la ni\xf1ez, y me sorprende que parezca tan dif\xedcil inculcarlo, Esther Tusquets.","El mundo est\xe1 lleno de libros preciosos que nadie lee, Umberto Eco.","El prop\xf3sito de la lectura no es conseguir que se vendan m\xe1s libros, sino que los lectores disfruten m\xe1s de la vida, Holbrook Jackson.","El tiempo para leer, al igual que el tiempo para amar, dilata el tiempo de vivir, Daniel Pennac.","En alg\xfan lugar de un libro hay una frase esper\xe1ndonos para darle un sentido a la existencia, Miguel de Cervantes.","Escribir es la manera m\xe1s profunda de leer la vida, Francisco Umbral.","Estamos habitados por libros y por amigos, Daniel Pennac.","Hablar de lectura obligatoria es como hablar de felicidad obligatoria, Jorge Luis Borges.","Estar a solas con un buen libro es ser capaz de comprenderte m\xe1s a ti mismo, Harold Bloom.","Hace muy poco tiempo, comprend\xed que la literatura no es algo menor, sino el arte supremo, C\xe9sar Aira.","Hay m\xe1s tesoros en los libros que en todo el bot\xedn de los piratas de la Isla del Tesoro, Walt Disney.","Hay peores cosas que quemar libros, una de ellas es no leerlos, Ray Bradbury.","Hay quienes no pueden imaginar un mundo sin p\xe1jaros; hay quienes no pueden imaginar un mundo sin agua; en lo que a mi se refiere, soy incapaz de imaginar un mundo sin libros, Jorge Luis Borges.","Hay solo dos cosas con las que uno se puede acostar: una persona y un libro, Ray Bradbury.","Junto con los libros debiera venderse el tiempo suficiente para leerlos, Arthur Schopenhauer.","La educaci\xf3n ha logrado que las personas aprendan a leer, pero es incapaz de se\xf1alar lo que vale la pena leer, George Trevelyan.","La ilusi\xf3n es hacer creer que la literatura es muy similar a la vida y es exactamente lo contrario. La vida es amorfa, la literatura es formal, Fran\xe7oise Sagan.","La lectura adelanta el tiempo de la vida y, parad\xf3jicamente, aleja el de la muerte. Leer es buscar otras realidades para comprender mejor esta realidad, Fabricio Caivano.","La lectura es el \xfanico medio a trav\xe9s del cual nos deslizamos, involuntariamente, a menudo sin poder hacer nada, a la piel de otro, a la voz de otro, al alma de otro, Joyce Carol Oates.","La lectura es el viaje de los que no pueden tomar el tren, Francis de Croisset.","La lectura es placer, conocimiento, emoci\xf3n, enajenaci\xf3n, Fernando Trueba.","La lectura es un acto de creaci\xf3n permanente, Daniel Pennac.","La lectura obligada es nefasta. Lean por placer, tengan una profunda sospecha, \xc1lvaro Mutis.","La lectura, como el amor, es la piedra ideal para afinar el alma, Paul Desalmand.","La literatura es esencialmente soledad. Se escribe en soledad, se lee en soledad y, pese a todo, el acto de la lectura permite una comunicaci\xf3n profunda entre los seres humanos, Paul Auster.","La literatura es la sinceridad misma, la \xfanica expresi\xf3n aut\xe9ntica de la vida, Joseph Roth.","La literatura es una extra\xf1a m\xe1quina que traga, que absorbe todos los placeres, todos los acontecimientos de la vida. Los escritores son vampiros, Bernard Henri Levy.","La literatura est\xe1 llena de cosas in\xfatiles absolutamente necesarias, Rosa Montero.","La literatura no es otra cosa que un sue\xf1o dirigido, Jorge Luis Borges.","La literatura nos permite comprender la vida, nos habla de lo que puede ser pero tambi\xe9n de lo que pudo haber sido\u2026 No hay nada m\xe1s subversivo que la literatura, Enrique Vila-Matas.","La mejor caracter\xedstica de un libro es que provoque reacciones en el lector y le empuje a actuar, Thomas Carlyle.","La mujer que lee, almacena su belleza para la vejez, Frida Kahlo.","La radio marca los minutos de la vida; el diario, las horas; el libro, los d\xedas, Jacques de Lacretelle.","Las personas libres jam\xe1s podr\xe1n concebir lo que los libros significan para quienes vivimos encerrados, Ana Frank.","Leemos para saber que no estamos solos, William Nicholson.","Leemos, pero tambi\xe9n somos le\xeddos por otro. Interferencias entre ambas lecturas. Obligar a alguien a que sea a s\xed mismo como le leen los dem\xe1s (esclavitud). Obligar a los dem\xe1s a que nos lean como nos leemos a nosotros mismos (conquista), Simone Weil.","Leer es encontrar algo que va a existir, Italo Calvino.","Leer lo es todo. La lectura me hace sentir que he logrado algo, he aprendido algo, que soy mejor persona, Nora Ephron.","Leer no es matar el tiempo, sino fecundarlo, Herminia Brumana.","Lo \xfanico que lamento es que nunca tendr\xe9 tiempo para leer todos los libros que quiero leer, Fran\xe7oise Sagan.","Los buenos libros son siempre campos magn\xe9ticos de cuya atracci\xf3n no se puede huir, Italo Calvino.","Los libros han ganado m\xe1s batallas que las armas, Lupercio Leonardo de Argensola.","Los libros solo se escriben para, por encima del propio aliento, unir a los seres humanos, y as\xed defendernos frente al inexorable reverso de la existencia : la fugacidad y el olvido, Stefan Zweig.","Los libros s\xf3lo tienen valor cuando conducen a la vida y le son \xfatiles, Hermann Hesse.","Los libros son como espejos: mir\xe1ndonos en ellos descubrimos qui\xe9nes somos, Jos\xe9 Luis de Villalonga.","Los libros son compa\xf1eros, maestros, magos y banqueros de los tesoros de la mente, B\xe1rbara Wertheim Tuckman.","Los libros tienen los mismos enemigos que los hombres: el fuego, la humedad, los animales y su propio contenido, Paul Val\xe9ry.","Los libros van siendo el \xfanico lugar de la casa donde todav\xeda se puede estar tranquilo, Julio Cort\xe1zar.","Los que escriben con claridad tienen lectores; los que escriben oscuramente tienen comentaristas, Albert Camus.","Los verdaderos escritores son aquellos que quieren escribir, necesitan escribir, tienen que escribir, Robert Penn Warren.","Me resisto a considerar el af\xe1n de leer una simple afici\xf3n entre otras: es una pasi\xf3n, a\xfan m\xe1s, una forma de vida, Fernando Savater.","Mis libros est\xe1n siempre a mi disposici\xf3n, nunca est\xe1n ocupados, Marco Tulio Cicer\xf3n.","No es cierto que tengamos s\xf3lo una vida: si leemos podemos vivir tantas y de tantos tipos como queramos, Samuel I. Hayakawa.","No existen m\xe1s que dos reglas para escribir: tener algo que decir y decirlo, Oscar Wilde.","No hay ninguna lectura peligrosa. El mal no entra nunca por la inteligencia cuando el coraz\xf3n est\xe1 sano, Jacinto Benavente.","No importa lo ocupado que creas que est\xe1s, debes encontrar un hueco para la lectura. De lo contrario habr\xe1s escogido sumirte en la m\xe1s absoluta ignorancia, Confucio.","No lean, como hacen los ni\xf1os, para divertirse, o como hacen los ambicioso, con el prop\xf3sito de la instrucci\xf3n. No, lee para vivir, Gustave Flaubert.","Nunca se termina de aprender a leer. Tal vez como nunca se termine de aprender a vivir, Jorge Luis Borges.","Ordenar bibliotecas es ejercer de un modo silencioso el arte de la cr\xedtica, Jorge Luis Borges.","Por grandes y profundos que sean los conocimientos de un hombre, el d\xeda menos pensado encuentra en el libro que menos valga a sus ojos, alguna frase que le ense\xf1a algo que ignora, Mariano Jos\xe9 de Larra.","Porque un libro que no abres es condenarlo a una especie de purgatorio esperando que alguien le de vida, Alberto Manguel.","Quien escribe lo que le gusta a los dem\xe1s puede ser un buen escritor pero nunca ser\xe1 un artista, Juan Carlos Onetti.","Sabes que has le\xeddo un buen libro cuando al cerrar la tapa despu\xe9s de haber le\xeddo la \xfaltima p\xe1gina te sientes como si hubieras perdido a un amigo, Paul Sweeney.","Si no pod\xe9is disfrutar leyendo un libro repetidas veces, de nada sirve leerlo ni una sola vez, Oscar Wilde.","Si piensas llegar a alguna parte en la vida, tienes que leer muchos libros, Roald Dahl.","Si un libro est\xe1 bien escrito, siempre me parece que es demasiado corto, Jane Austen.","Siempre imagin\xe9 que el Para\xedso ser\xeda alg\xfan tipo de biblioteca, Jorge Luis Borges.","Soy un lector que escribe libros; si fuera s\xf3lo escritor estar\xeda muerto, Arturo Perez-Reverte.","Soy una persona anticuada que cree que leer libros es el pasatiempo m\xe1s hermoso que la humanidad ha creado, Wislawa Szymborska.","Tienes que amar la lectura para poder ser un buen escritor, porque escribir no empieza contigo, Carlos Fuentes.","Todos los libros pueden dividirse en dos clases: libros del momento y libros de todo momento, John Ruskin.","Un buen libro no es aquel que piensa por ti, sino aquel que te hace pensar, James McCosh.","Un buen libro no s\xf3lo se escribe para multiplicar y transmitir la voz, sino tambi\xe9n para perpetuarla, John Ruskin.","Un escritor es algo extra\xf1o. Es una contradicci\xf3n y tambi\xe9n un sinsentido. Escribir tambi\xe9n es no hablar. Es callarse. Es aullar sin ruido, Marguerite Duras.","Un lector vive mil vidas antes de morir. Aquel que nunca lee vive solo una, George R. R. Martin.","Un libro de cabecera no se escoge, se enamora uno de \xe9l, Jos\xe9 Luis de Villalonga.","Un libro debe ser el hacha que rompa el mar helado que hay dentro de nosotros, Franz Kafka.","Un libro es la \xfanica cosa inmortal, Rufus Choate.","Un libro es una cosa entre las cosas, un volumen perdido entre los vol\xfamenes que pueblan el indiferente universo; hasta que da con su lector, con el hombre destinado a sus s\xedmbolos, Jorge Luis Borges.","Un libro es una prueba de que los seres humanos son capaces de hacer magia, Carl Sagan.","Un libro, un verdadero libro, no es alguien que nos hable, es alguien que nos oye, que sabe o\xedrnos, Christian Bobin.","Uno escribe pensando en el lector que lleva dentro. Escribes o intentas escribir el libro que te gustar\xeda leer, Rosa Montero.","Uno nunca termina de leer, aunque los libros se acaben, Roberto Bola\xf1o.","Usted no tiene que quemar libros para destruir una cultura. S\xf3lo tiene que hacer que la gente deje de leerlos, Ray Bradbury.","Vivir sin leer es peligroso, porque obliga a conformarse con la vida, Michael Houellebecq."]}},[[143,1,2]]]);
//# sourceMappingURL=main.54e52741.chunk.js.map