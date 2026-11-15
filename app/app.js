'use strict';
const paths={menu:'M4 6h16M4 12h16M4 18h16',back:'M10 5 4 11l6 6M4 11h9a7 7 0 0 1 7 7v3',bill:'M6 3h8l4 4v14H6zm8 0v5h4M9 11h6m-6 4h6',chart:'M5 19V9m7 10V5m7 14V2',contract:'M5 3h14v18H5zm3 5h8m-8 4h8m-8 4h5',headset:'M4 12v-1a8 8 0 0 1 16 0v8h-4v-7h4M4 12h4v7H4zm16 7q0 3-8 3',chevron:'m9 5 6 7-6 7',home:'m3 10 9-8 9 8M5 8v13h14V8m-10 13v-8h6v8',search:'M17 17l5 5M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0',check:'M6 3h8l4 4v14H6zm8 0v5h4M8 14l3 3 5-7',solar:'M3 12h16l3 9H1zm0 4h17M8 12l-1 9m7-9 2 9M12 21v3M8 24h8M14 5a3 3 0 1 1 6 0 3 3 0 0 1-6 0M17 0v-1m6 6h2',grid:'M12 2v20M4 7h16M6 12h12M5 22 12 7l7 15M5 17h14M4 7 1 13m19-6 3 6',mail:'M2 4h20v16H2zm0 0 10 9L22 4',chat:'M3 3h18v14H9l-6 5zm4 5h10m-10 4h7',gift:'M3 9h18v5H3zm2 5v9h14v-9M12 9v14m0-14C0 9 4-3 9 3l3 6c12 0 8-12 3-6z',share:'M6 3h12v20H6zm6 4v10m-4-6 4-4 4 4M10 20h4',money:'M2 5h20v14H2zm14 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0M5 12h1m12 0h1',inbox:'M3 10 6 4h12l3 6v11H3zm0 0h6l2 4h2l2-4h6'};
const icon=(name,cl='')=>`<svg class="ico ${cl}" viewBox="0 0 24 26" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${paths[name]||paths.bill}"/></svg>`;
const link=(route,title,ico='bill',tone='')=>`<a class="shortcut ${tone}" href="#${route}"><span class="icon-wrap">${icon(ico)}</span><span>${title}</span>${icon('chevron')}</a>`;
const action=(title,notice)=>`<button class="primary" data-notice="${notice}">${title}</button>`;
const steps=(items,compact=false)=>`<div class="illustrated connected ${compact?'compact':''}">${items.map(([ico,title,copy='',status=''])=>`<div class="step ${status}"><div class="drawing">${icon(ico)}</div><strong>${title}</strong><p>${copy}</p></div>`).join('')}</div>`;
const card=(title,body,id='',className='')=>`<section class="card ${className}" ${id?`id="${id}"`:''}><h2>${title}</h2>${body}</section>`;
const row=(label,value)=>`<div class="row"><span>${label}</span><strong>${value}</strong></div>`;
const history=()=>['Setembro/26|212,20|12/10','Agosto/26|252,06|12/09','Julho/26|242,59|12/08'].map(s=>{const [m,v,d]=s.split('|');return `<div class="history-item"><span class="status paid">${m} · paga</span>${row('Venceu em '+d,'R$ '+v)}</div>`}).join('');
const screens={
 economia:{area:'economia',label:'ECONOMIA',title:'Minha economia',subtitle:'Seu benefício, em valores claros',greeting:'Lucas, confira outubro/2026.',body:()=>card('Economia em outubro','<p class="amount">R$ 46,01</p><p style="font-size:12px;font-weight:600">15% sobre a energia elegível</p>','resultado','green')+link('contrato','Contratado: 15% · aplicado: 15%','contract')+'<p class="tiny" style="margin:0 12px">Base do desconto: R$ 306,73</p>'+card('Resumo do período','<div class="bars"><div class="label"><span>Sem o benefício</span><strong>R$ 379,13</strong></div><div class="bar"></div><div class="label"><span>Com o benefício</span><strong>R$ 333,12</strong></div><div class="bar result"><span></span></div><p class="savings">R$ 46,01 de economia</p></div>','comparacao')+link('atendimento','Dúvida sobre a economia','headset','teal')},
 conferencia:{area:'economia',label:'ECONOMIA',title:'Conferindo economia',internal:true,greeting:'Outubro/2026 · dados incompletos.',body:()=>card('Aguardando dados','<p>Faltam dados da fatura e do contrato.</p>')+card('Falta conferir',steps([['money','Valor','sem Bulbe'],['bill','Fatura','do mesmo ciclo'],['contract','Desconto','contratado']])+'<a class="link" href="#contrato">Consultar minha contratação →</a>')+link('atendimento','Pedir conferência dos dados','headset')},
 contas:{area:'faturas',label:'VISÃO GERAL',title:'Minhas contas',subtitle:'Valores, vencimentos e pagamentos',greeting:'Marina, sua próxima conta está aqui.',body:()=>card('Próxima conta a vencer','<div class="status-row"><span class="status">Em aberto</span><span class="invoice-month">Outubro/2026</span></div><p class="amount">R$ 260,72</p>'+row('Vencimento','<span class="due-date">12/11/2026</span>')+'<a class="primary" href="#fatura">Abrir conta para pagar</a>','proxima')+link('historico','Histórico de contas','bill')+link('duas-contas','Entenda suas contas','contract')+link('economia','Minha economia','chart')+'<a class="link" href="#atendimento">Pedir ajuda →</a>'},
 fatura:{area:'faturas',label:'FATURAS',title:'Minha fatura',internal:true,greeting:'Outubro/2026 · instalação 3013588579',body:()=>card('Sua conta Bulbe','<div class="status-row"><span class="status">Em aberto</span><span class="due-date">Vence em 12/11</span></div><p class="amount">R$ 260,72</p><p class="tiny">Protótipo · pagamento indisponível</p>'+action('Pagar com Pix','pix')+'<button class="secondary" data-notice="boleto" style="margin-top:9px">Pagar com boleto</button>')+card('Valores da fatura',row('Energia elegível','R$ 306,73')+row('Desconto Bulbe','− R$ 46,01')+'<div class="divider"></div>'+row('Total Bulbe','R$ 260,72'),'detalhe')+link('duas-contas','Entender esta conta','contract')+'<a class="link" href="#contas">Voltar para minhas contas →</a>'},
 historico:{area:'faturas',label:'FATURAS',title:'Histórico de contas',internal:true,greeting:'Instalação 3013588579 · 2026',body:()=>card('Contas mais recentes','<div class="history-item"><span class="status">Outubro/26 · em aberto</span>'+row('Vence em 12/11','R$ 260,72')+'<a class="secondary" href="#fatura">Abrir fatura atual</a></div>'+history(),'historico')+'<a class="link" href="#atendimento">Não encontro uma conta →</a>'},
 primeira:{area:'faturas',label:'FATURAS',title:'Primeira fatura',internal:true,greeting:'Acompanhe a emissão.',body:()=>card('Nenhuma fatura disponível','<span class="status">AGUARDANDO EMISSÃO</span><p>Sem valor a pagar por enquanto.</p>'+row('Previsão de emissão','Não informada'))+card('Etapas',steps([['check','Cadastro','Concluído','done'],['search','Análise','Em andamento','current'],['home','Conexão','Pendente','pending']])+'<p class="tiny">Prazo de conclusão ainda não informado.</p>','etapas')+link('contrato','Consultar andamento','contract')},
 vencida:{area:'faturas',label:'FATURAS',title:'Fatura vencida',internal:true,greeting:'Referência: setembro/2026',body:()=>card('Valor original da fatura','<span class="status overdue">VENCIDA</span><p class="amount">R$ 212,20</p>'+row('Vencimento','<span class="due-date">12/10/2026</span>')+'<p class="muted">Consulte o valor atualizado no canal oficial.</p>')+card('Já pagou?','<p>Envie o comprovante ao atendimento para conferir.</p>')+link('atendimento','Conferir pagamento ou segunda via','headset')},
 contrato:{area:'contrato',label:'CONTRATO',title:'Minha contratação',subtitle:'Seu vínculo, em um só lugar',greeting:'Rafael, confira seu contrato.',body:()=>card('Contratação ativa',row('Adesão','2026-000123')+row('Data','20/09/2026')+row('Instalação','3013588579')+'<span class="status paid">15% sobre a energia elegível</span>')+'<button class="shortcut" data-notice="contrato"><span class="icon-wrap">'+icon('contract')+'</span><span>Solicitar meu contrato<br><small class="tiny">PDF pendente</small></span>'+icon('chevron')+'</button>'+link('atendimento','Não reconheço esta adesão','headset','teal')+card('Serviço ativo','<p class="muted">20/09 Cadastro → 01/10 Conectado</p><p class="muted">1ª fatura: out/2026 · vence em 12/11</p><a class="link" href="#fatura">Consultar a primeira fatura →</a>','andamento')+card('Condições registradas',row('Início do serviço','01/10/2026')+row('Permanência mínima','Não informada')+row('Prazo de cancelamento','Não informado')+row('Multa','Não informada')+'<p class="tiny">Faltou algum dado? Fale com a equipe.</p>','condicoes')+'<a class="link" href="#cancelar">Como solicitar cancelamento →</a>'},
 servico:{area:'servico',label:'SOBRE O SERVIÇO',title:'Como a Bulbe<br>funciona',subtitle:'Entenda antes de decidir',greeting:'Camila, veja o que muda para sua casa.',body:()=>card('De onde vem a economia?',steps([['solar','Bulbe','gera energia'],['grid','Cemig','distribui'],['check','Sua conta','com desconto','done']])+'<p class="muted">Taxas e encargos continuam.</p>','origem')+card('Quando começa?',steps([['bill','Cadastro'],['search','Análise'],['home','Conexão'],['bill','Fatura']],true)+'<p class="muted">Veja etapa e prazo no contrato.</p>','etapas')+'<a class="primary" href="#atendimento">Falar com a equipe</a><a class="link" href="#contrato">Ver meu contrato →</a>'},
 'duas-contas':{area:'faturas',label:'FATURAS',title:'Entenda suas contas',subtitle:'Cada cobrança, sem confusão',greeting:'André, duas contas com funções diferentes.',body:()=>card('Outubro/2026','<div class="comparison"><div class="scenario"><div class="caption">SEM BULBE</div><div class="bills">'+icon('bill')+'</div><div class="bill-labels">Cemig · 1 conta</div><p class="total">R$ 379,13</p></div><div class="scenario with"><div class="caption">COM BULBE</div><div class="bills">'+icon('bill')+'<b>+</b>'+icon('bill')+'</div><div class="bill-labels"><span>Bulbe</span><span>Cemig</span></div><small>260,72 + 72,40</small><p class="total">R$ 333,12</p><small>total das 2 contas</small></div></div><div class="saving-banner">R$ 46,01 a menos no mês</div><p class="tiny">Vencimentos: Bulbe 12/11 · Cemig 18/11</p><p class="tiny">Exemplo ilustrativo · pagamentos separados</p>','comparacao')+link('fatura','Fatura Bulbe','bill')+card('Cemig · rede e taxas','<p class="amount">R$ 72,40</p>'+row('Disponibilidade da rede','R$ 48,30')+row('Iluminação pública','R$ 16,90')+row('Tributos e encargos','R$ 7,20')+'<p class="tiny">Valores ilustrativos. Dúvidas: canais da Cemig.</p>','cemig')+card('Ainda parece duplicado?','<a class="link" href="#atendimento">Pedir conferência ao atendimento →</a>')},
 atendimento:{area:'ajuda',label:'AJUDA',title:'Atendimento',subtitle:'Sua dúvida, no caminho certo',greeting:'Seu pedido, sem repetir o problema.',body:()=>card('Seu último atendimento','<span class="status">EM ANÁLISE</span><p><strong>Dúvida sobre o valor de outubro</strong></p><p class="muted">#202610280042 · aberto em 28/10<br>Prazo não informado</p><a class="link" href="#indisponivel">Continuar atendimento →</a>','pedido')+card('Fale com a equipe','<div class="illustrated">'+[['chat','WhatsApp'],['mail','E-mail'],['headset','Telefone / chat']].map(([ico,label])=>'<div class="step"><button class="channel" data-notice="canais"><span class="drawing">'+icon(ico)+'</span><strong>'+label+'</strong></button></div>').join('')+'</div><p class="tiny">Canais ilustrativos. Consulte os oficiais.</p>','canais')+card('Não encontrou seu pedido?','<p class="muted">Retome pelo canal onde abriu. Use seu protocolo.</p>')+link('cancelar','Quero cancelar','contract','teal')},
 cancelar:{area:'ajuda',label:'AJUDA',title:'Cancelar assinatura',internal:true,greeting:'Confira as condições antes de solicitar.',body:()=>card('Como solicitar',steps([['contract','Confira','prazo e multa'],['headset','Solicite','ao atendimento'],['check','Acompanhe','pelo protocolo']])+'<p class="tiny">Solicitar não confirma o cancelamento.</p>')+link('contrato','Consultar minhas condições','contract')+link('atendimento','Falar com o atendimento','headset','teal')},
 'sem-pedidos':{area:'ajuda',label:'AJUDA',title:'Atendimento',internal:true,greeting:'Como podemos ajudar?',body:()=>link('atendimento','Falar com a equipe','headset','teal')+link('cancelar','Quero cancelar','contract')+card('Nenhum pedido no app','<p class="muted">Pedido externo? Use o protocolo no canal de origem.</p>','vazio').replace('<h2>',icon('inbox','empty-illustration')+'<h2>')},
 indisponivel:{area:'ajuda',label:'AJUDA',title:'Andamento<br>indisponível',internal:true,greeting:'Seu pedido continua registrado.',body:()=>card('Protocolo 202610280042','<p>Dúvida sobre o valor de outubro</p><p class="muted">Instalação 3013588579</p>')+card('Não conseguimos consultar agora','<p class="muted">Tente novamente ou fale com o atendimento usando o protocolo.</p>')+'<a class="primary" href="#atendimento">Falar com a equipe</a><button class="secondary" data-notice="consulta">Tentar novamente</button>'},
 indicacao:{area:'faturas',label:'INDICAÇÕES',title:'Indique e ganhe',internal:true,greeting:'Economize mais compartilhando.',body:()=>card('Como funciona',steps([['share','Compartilhe','seu link'],['gift','Benefício','conforme a campanha','done']])+'<p class="muted">Consulte as regras no app.</p>')+card('Seu link de indicação','<p>Acesse seu link no aplicativo oficial.</p><p class="tiny">Exemplo sem envio de convites.</p>','','purple')}
};
const areas=[['contas','Minhas contas','bill'],['economia','Minha economia','chart'],['contrato','Minha contratação','contract'],['servico','Como funciona a Bulbe','solar'],['duas-contas','Entenda suas contas','bill'],['atendimento','Atendimento','headset'],['indicacao','Indique e ganhe','gift']];
document.querySelector('#menu-items').innerHTML=areas.map(([id,label,ico])=>link(id,label,ico)).join('');
const viewport=document.querySelector('#viewport');
const compactHeader=document.querySelector('#compact-header');
const headerButton=compactHeader.querySelector('button');
headerButton.innerHTML='<span class="menu-glyph" aria-hidden="true">'+icon('menu')+'</span><span class="back-glyph" aria-hidden="true">'+icon('back')+'</span>';
const headerAvatar=compactHeader.querySelector('.header-avatar');
let headerInternal=false,headerCollapsed=false,headerStartX=-116.5,navigationTrail=[],navigatingBack=false;
function measureCompactHeader(){
 headerInternal=Boolean(screens[route].internal);
 // Same logo node stays in place; only its transform changes as we scroll.
 const originalLeft=viewport.clientWidth/2-51.5;
 const targetLeft=viewport.clientWidth-23-99;
 headerStartX=headerInternal?0:originalLeft-targetLeft;
 headerAvatar.setAttribute('aria-hidden',String(headerInternal));
 updateCompactHeader();
}
function updateCompactHeader(){
 // Trigger a complete animation; separate thresholds prevent flickering near the switch.
 headerCollapsed=viewport.scrollTop>=(headerCollapsed?24:56);
 const progress=headerCollapsed?1:0;
 compactHeader.style.setProperty('--logo-x',(headerStartX*(1-progress))+'px');
 compactHeader.style.setProperty('--header-y',(3*(1-progress))+'px');
 compactHeader.style.setProperty('--header-height',(70-6*progress)+'px');
 compactHeader.style.setProperty('--header-shadow',(progress*.12).toFixed(3));
 compactHeader.style.setProperty('--menu-opacity',headerInternal?0:1-progress);
 compactHeader.style.setProperty('--back-opacity',headerInternal?1:progress);
 compactHeader.style.setProperty('--avatar-opacity',headerInternal?0:1-progress);
 const back=headerInternal||headerCollapsed;
 headerButton.toggleAttribute('data-back',back);headerButton.toggleAttribute('data-menu',!back);
 headerButton.setAttribute('aria-label',back?'Voltar':'Abrir menu');
 headerAvatar.setAttribute('aria-hidden',String(back));
}
window.addEventListener('resize',measureCompactHeader);

let route='economia',sectionMap={},scrollTimer=0,focusFrame=0,suppressScroll=true,lastContext='';
function cancelPendingFocus(){if(focusFrame)cancelAnimationFrame(focusFrame);focusFrame=0;}
function reportContext(focus=''){
 const key=route+'|'+focus;if(key===lastContext)return;
 lastContext=key;parent.postMessage({type:'bulbe:context',route,focus},location.origin);
}
function visibleFocus(){
 if(viewport.scrollTop<=1)return '';
 const bounds=viewport.getBoundingClientRect();
 const atBottom=viewport.scrollTop+viewport.clientHeight>=viewport.scrollHeight-2;
 const covered=compactHeader.offsetHeight;
 const threshold=covered+(viewport.clientHeight-covered)*(atBottom?.8:.45);
 let focus='';
 for(const id of sectionMap[route]||[]){
  const section=document.getElementById(id);if(!section)continue;
  if(section.getBoundingClientRect().top-bounds.top<=threshold)focus=id;
 }
 return focus;
}
function reportVisibleContext(){if(!suppressScroll)reportContext(visibleFocus());}
function beginManualInteraction(){cancelPendingFocus();suppressScroll=false;}
for(const event of ['wheel','touchstart','pointerdown','keydown'])document.addEventListener(event,beginManualInteraction,{capture:true,passive:true});
viewport.addEventListener('scroll',()=>{
 updateCompactHeader();
 clearTimeout(scrollTimer);if(suppressScroll)return;
 scrollTimer=setTimeout(reportVisibleContext,120);
},{passive:true});
function render(id,{report=false}={}){cancelPendingFocus();clearTimeout(scrollTimer);suppressScroll=true;lastContext='';route=screens[id]?id:'economia';const s=screens[route];document.title='Bulbe · '+s.title.replace(/<br>/g,' ');viewport.innerHTML=`<header class="hero ${s.internal?'internal':''}"><svg class="sun" viewBox="0 0 200 200" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><circle cx="115" cy="100" r="66"/><path d="M115 20V3M115 180v17M35 100H18M195 100h15M58 43 46 31M58 157l-12 12M172 43l12-12M172 157l12 12"/></svg><div class="topbar" aria-hidden="true"></div><p class="eyebrow">${s.label}</p><h1>${s.title}</h1>${s.subtitle?`<p class="subtitle">${s.subtitle}</p>`:''}<p class="greeting">${s.greeting}</p>${s.internal?'':'<span class="installation">Instalação 3013588579 <span aria-hidden="true">⌄</span></span>'}</header><div class="stack">${s.body()}<p class="disclaimer">Dados fictícios · demonstração acadêmica</p></div>`;
document.querySelector('#bottom').innerHTML=[['contas','Faturas','bill','faturas'],['economia','Economia','chart','economia'],['contrato','Contrato','contract','contrato'],['atendimento','Ajuda','headset','ajuda']].map(([r,label,ico,area])=>`<a href="#${r}" data-area="${area}" ${s.area===area?'aria-current="page"':''}>${icon(ico)}<span>${label}</span></a>`).join('');viewport.scrollTo({top:0,behavior:'instant'});document.querySelector('#menu').close();measureCompactHeader();if(report)reportContext('');}
function navigate(id){if(location.hash==='#'+id)render(id,{report:true});else location.hash=id;}
function goBack(){
 const previous=navigationTrail.pop();
 if(previous){navigatingBack=true;navigate(previous);return;}
 const fallback=screens[route].area==='ajuda'?'atendimento':screens[route].area==='economia'?'economia':'contas';
 if(route===fallback){document.querySelector('#menu').showModal();return;}
 navigatingBack=true;navigate(fallback);
}
const notices={pix:['Pagamento de demonstração','O protótipo permite consultar a fatura, mas não gera Pix nem realiza pagamentos.'],boleto:['Boleto de demonstração','Nenhum boleto real é emitido nesta apresentação.'],contrato:['Documento ainda não disponível','O contrato não está anexado ao protótipo. A interface orienta solicitar o documento ao atendimento.'],canais:['Canal de demonstração','Esta ação ilustra o acesso ao atendimento. Não envia mensagens nem liga para números reais.'],consulta:['Consulta indisponível','O pedido continua registrado. Neste cenário demonstrativo, o andamento não está disponível.']};
document.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;if(b.hasAttribute('data-menu'))document.querySelector('#menu').showModal();if(b.hasAttribute('data-close'))b.closest('dialog').close();if(b.hasAttribute('data-back'))goBack();if(b.dataset.notice){const section=b.closest('section[id]');reportContext(section&&(sectionMap[route]||[]).includes(section.id)?section.id:visibleFocus());const [title,copy]=notices[b.dataset.notice];document.querySelector('#notice-title').textContent=title;document.querySelector('#notice-copy').textContent=copy;document.querySelector('#notice').showModal();}});
window.addEventListener('hashchange',()=>{const next=location.hash.slice(1);if(next!==route&&!navigatingBack)navigationTrail.push(route);navigatingBack=false;render(next,{report:true});});
window.addEventListener('message',e=>{
 if(e.origin!==location.origin||e.source!==parent)return;
 const d=e.data;
 if(d?.type==='bulbe:show'&&typeof d.route==='string'&&Object.hasOwn(screens,d.route)){
  if(d.sections&&typeof d.sections==='object')sectionMap=Object.fromEntries(Object.entries(d.sections).filter(([id,ids])=>Object.hasOwn(screens,id)&&Array.isArray(ids)).map(([id,ids])=>[id,ids.filter(value=>typeof value==='string'&&value)]));
  for(const dialog of document.querySelectorAll('dialog'))dialog.close();
  if(d.route!==route)navigationTrail=[];navigatingBack=false;
  window.history.replaceState(null,'','#'+d.route);
  render(d.route,{report:false});
  const focus=typeof d.focus==='string'?d.focus:'';
  lastContext=route+'|'+focus;
  focusFrame=requestAnimationFrame(()=>{
   focusFrame=0;
   const target=focus&&document.getElementById(focus);
   if(target)viewport.scrollTo({top:viewport.scrollTop+target.getBoundingClientRect().top-viewport.getBoundingClientRect().top-compactHeader.offsetHeight-15,behavior:'instant'});
   updateCompactHeader();
  });
 }
 if(d?.type==='bulbe:scroll'&&Number.isFinite(d.amount)){
  beginManualInteraction();viewport.scrollBy({top:d.amount,behavior:'smooth'});
  clearTimeout(scrollTimer);scrollTimer=setTimeout(reportVisibleContext,120);
 }
});
render(location.hash.slice(1));parent.postMessage({type:'bulbe:ready'},location.origin);
document.addEventListener('keydown',e=>{if(['ArrowRight','ArrowLeft'].includes(e.key)&&!document.querySelector('dialog[open]')&&!/INPUT|TEXTAREA|SELECT/.test(e.target.tagName)){e.preventDefault();parent.postMessage({type:'bulbe:key',key:e.key},location.origin);}});
