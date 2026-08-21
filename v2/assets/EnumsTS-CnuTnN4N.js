import{C as o}from"./CodeBlock-D7IvrU0d.js";import{R as i}from"./ReferenceSection-cXrbSKyi.js";import{d as a,c as r,b as e,e as n,f as t,o as l}from"./index-CvcSymSu.js";const d={class:"module-content"},c={class:"topic-section"},u={class:"card info"},p={class:"topic-section"},m={class:"cards-grid"},g={class:"card info"},v={class:"card info"},y={class:"topic-section"},f={class:"topic-section"},E={class:"card recommended"},x=a({__name:"EnumsTS",setup(S){return(b,s)=>(l(),r("div",d,[s[14]||(s[14]=e("div",{class:"header-section"},[e("h1",{class:"main-title typescript"},"Enums"),e("p",{class:"subtitle"},"Definiendo conjuntos de constantes con nombre para un código más legible y seguro.")],-1)),e("section",c,[s[1]||(s[1]=e("h2",{class:"section-title typescript"},"¿Qué son los Enums?",-1)),s[2]||(s[2]=e("p",{class:"section-desc"},[t("Los "),e("strong",null,"enum"),t(" son un tipo de dato en TypeScript. Esta característica no es una extensión de JavaScript, sino una peculiaridad propia de TypeScript. Se encargan de juntar en un solo tipo de dato un conjunto finito de constantes.")],-1)),s[3]||(s[3]=e("p",{class:"section-desc"},"Similar a un Array, al definir un enum, cada constante se le asigna por defecto un índice desde 0 y se incrementa automáticamente para el resto de las constantes.",-1)),e("div",u,[s[0]||(s[0]=e("div",{class:"card-header"},[e("h3",null,"Sintaxis Básica")],-1)),n(o,{language:"typescript",code:`enum Direccion {
  Norte,
  Sur,
  Este,
  Oeste
}`})])]),s[15]||(s[15]=e("hr",{class:"divider"},null,-1)),e("section",p,[s[8]||(s[8]=e("h2",{class:"section-title typescript"},"Tipos de Enums",-1)),e("div",m,[e("div",g,[s[4]||(s[4]=e("div",{class:"card-header"},[e("h3",null,"Numéricos")],-1)),s[5]||(s[5]=e("p",null,"Por defecto empiezan en 0, pero puedes asignar un valor inicial y el resto se autoincrementará.",-1)),n(o,{language:"typescript",code:`enum CodigoRespuesta {
  OK = 200,
  NotFound = 404,
  Error = 500
}`})]),e("div",v,[s[6]||(s[6]=e("div",{class:"card-header"},[e("h3",null,"Strings")],-1)),s[7]||(s[7]=e("p",null,"Obligan a asignar un valor a cada miembro. Son más legibles durante la depuración.",-1)),n(o,{language:"typescript",code:`enum Logs {
  Error = 'ERROR',
  Warning = 'WARN',
  Info = 'INFO'
}`})])])]),s[16]||(s[16]=e("hr",{class:"divider"},null,-1)),e("section",y,[s[9]||(s[9]=e("h2",{class:"section-title typescript"},"Mapeo Inverso",-1)),s[10]||(s[10]=e("p",{class:"section-desc"},[t("Solo disponible en enums "),e("strong",null,"numéricos"),t(". Permite obtener el nombre a partir del valor.")],-1)),n(o,{language:"typescript",code:`enum Estado { Activo = 1 }
const nombre = Estado[1]; // 'Activo'
const valor  = Estado.Activo; // 1`})]),s[17]||(s[17]=e("hr",{class:"divider"},null,-1)),e("section",f,[s[12]||(s[12]=e("h2",{class:"section-title typescript"},"Optimización: Const Enums",-1)),s[13]||(s[13]=e("p",{class:"section-desc"},[t("Para mejorar el rendimiento, los "),e("code",null,"const enums"),t(" se eliminan durante la compilación y sus valores se insertan directamente (inline) donde se usan.")],-1)),e("div",E,[s[11]||(s[11]=e("div",{class:"card-header"},[e("h3",null,"Eficiencia"),e("span",{class:"badge success"},"Recomendado")],-1)),n(o,{language:"typescript",code:`const enum Tallas {
  Small,
  Medium,
  Large
}
const miTalla = Tallas.Medium; // Se compila como: var miTalla = 1;`})])]),s[18]||(s[18]=e("hr",{class:"divider"},null,-1)),n(i,{references:[{techId:"typescript",moduleId:"tipos",text:"Tipos de Datos en TS"},{techId:"typescript",moduleId:"arrays",text:"Arrays & Tuplas"}]})]))}});export{x as default};
