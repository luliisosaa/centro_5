// ════════════════ DATA ════════════════
const ROLES={
  estudiante:  {nombre:'Juan Pérez',     email:'juan@instituto.edu',    dni:'12345678',usr:'@jperez',  carrera:'Ciencia de Datos e IA'},
  docente: {nombre:'Prof. García',   email:'garcia@instituto.edu',  dni:'87654321',usr:'@pgarcia', carrera:''},
  delegado:{nombre:'María Delegada', email:'maria@instituto.edu',   dni:'11223344',usr:'@mdelegada',carrera:'Administración'},
  directivo:   {nombre:'Admin Instituto',email:'admin@instituto.edu',   dni:'99887766',usr:'@admin57', carrera:''},
};
const ALUMNOS=[
  {n:'Ana Martínez',    d:'30111222',e:'ana@instituto.edu',    c:'Tecnicatura en Ciencia de Datos e IA',est:'Regular'},
  {n:'Lucas Rodríguez', d:'32333444',e:'lucas@instituto.edu',  c:'Tecnicatura en Ciencia de Datos e IA',est:'Regular'},
  {n:'Sofía López',     d:'34555666',e:'sofia@instituto.edu',  c:'Tecnicatura en Ciencia de Datos e IA',est:'Regular'},
  {n:'Facundo Peralta', d:'27334455',e:'facu@instituto.edu',   c:'Tecnicatura en Ciencia de Datos e IA',est:'Regular'},
  {n:'Nicolás Vega',    d:'31990011',e:'nico@instituto.edu',   c:'Tecnicatura en Ciencia de Datos e IA',est:'Libre'},
  {n:'Mateo Díaz',      d:'29777888',e:'mateo@instituto.edu',  c:'Tecnicatura en Administración Financiera',        est:'Regular'},
  {n:'Valentina Torres',d:'33999000',e:'valen@instituto.edu',  c:'Tecnicatura en Administración Financiera',        est:'Libre'},
  {n:'Tomás Fernández', d:'31112233',e:'tomas@instituto.edu',  c:'Tecnicatura en Administración Financiera',        est:'Regular'},
  {n:'Luciana Castro',  d:'38667788',e:'luci@instituto.edu',   c:'Tecnicatura en Enfermería',            est:'Regular'},
  {n:'Camila Suárez',   d:'35445566',e:'camila@instituto.edu', c:'Tecnicatura en Enfermería',            est:'Regular'},
  {n:'Agustín Romero',  d:'28778899',e:'agustin@instituto.edu',c:'Tecnicatura en Enfermería',            est:'Recursante'},
  {n:'Julieta Morales', d:'36001122',e:'julieta@instituto.edu',c:'Tecnicatura en Enfermería',            est:'Regular'},
];

// Gallery items
let IG_ITEMS=[
  {id:1,type:'img',album:'jornada',desc:'Jornada IA — Exposición Final',emoji:'🤖',bg:'linear-gradient(135deg,#dce8ff,#93c5fd)',likes:24,time:'Hace 3 días'},
  {id:2,type:'img',album:'jornada',desc:'Presentación de Proyectos',emoji:'💻',bg:'linear-gradient(135deg,#f0fdf4,#86efac)',likes:18,time:'Hace 3 días'},
  {id:3,type:'img',album:'jornada',desc:'Workshop de Programación',emoji:'🎓',bg:'linear-gradient(135deg,#fff0e6,#fdba74)',likes:31,time:'Hace 4 días'},
  {id:4,type:'img',album:'bienvenida',desc:'Recepción de Ingresantes',emoji:'🎉',bg:'linear-gradient(135deg,#fef9c3,#fde047)',likes:47,time:'Hace 1 semana'},
  {id:5,type:'img',album:'bienvenida',desc:'Primera jornada',emoji:'👋',bg:'linear-gradient(135deg,#fdf2f8,#f0abfc)',likes:29,time:'Hace 1 semana'},
  {id:6,type:'img',album:'examen',desc:'Mesa de Examen — Junio 2025',emoji:'📝',bg:'linear-gradient(135deg,#dcfce7,#4ade80)',likes:11,time:'Hace 5 días'},
  {id:7,type:'doc',album:'docs',desc:'Programa de Matemáticas 2025',ext:'PDF',likes:6,time:'Hace 2 días'},
  {id:8,type:'img',album:'examen',desc:'Parcial de Programación',emoji:'⌨️',bg:'linear-gradient(135deg,#eff6ff,#93c5fd)',likes:15,time:'Hace 6 días'},
  {id:9,type:'doc',album:'docs',desc:'Material de Inglés — Unidad 3',ext:'DOCX',likes:9,time:'Hace 1 día'},
];
let galTab='grid', igTempUrl=null, igTempType='img';

// Posts feed
let POSTS=[
  {id:1,author:'Prof. García',role:'Docente',cat:'ac',car:'datos',title:'Inscripción a Materias — 2do Cuatrimestre 2025',body:'¡Atención! A partir del 1° de agosto abrirá la inscripción. Asegúrense de tener todo al día con secretaría.',time:'Hace 2 horas',likes:14,liked:false,comments:3,emoji:'🎓',bg:'linear-gradient(135deg,#dce8ff,#93c5fd)',imgUrls:[],docs:[],isNew:true},
  {id:2,author:'Centro de Estudiantes',role:'Delegado',cat:'so',car:'todas',title:'Jornada de Bienvenida — 25 de Junio',body:'Organizamos una jornada especial para los ingresantes. ¡Vengan todos! Salón principal a las 18hs.',time:'Ayer',likes:32,liked:false,comments:7,emoji:'🎉',bg:'linear-gradient(135deg,#f0fdf4,#86efac)',imgUrls:[],docs:[],isNew:false},
  {id:3,author:'Dirección',role:'Directivo',cat:'in',car:'todas',title:'Actualización del Reglamento de Convivencia 2025',body:'Se actualizaron las pautas. El nuevo documento ya está disponible en Reglamentación.',time:'Hace 3 días',likes:8,liked:false,comments:1,emoji:'📋',bg:'linear-gradient(135deg,#fff7ed,#fdba74)',imgUrls:[],docs:['Reglamento_2025.pdf'],isNew:false},
  {id:4,author:'Prof. Ramírez',role:'Docente',cat:'ac',car:'admin',title:'Cambio de Aula — Contabilidad General',body:'A partir de esta semana Contabilidad General en el Aula 12 (1er piso). Miércoles y Viernes 19hs.',time:'Hace 4 días',likes:5,liked:false,comments:0,emoji:'🏫',bg:'linear-gradient(135deg,#fdf2f8,#f0abfc)',imgUrls:[],docs:[],isNew:false},
  {id:5,author:'Dpto. Enfermería',role:'Docente',cat:'so',car:'enferm',title:'Campaña de Vacunación — Semana 23',body:'Jornada de vacunación en el campus. Traigan libreta sanitaria. Lunes 10 y Martes 11 de junio, 17:30–20:00.',time:'Hace 5 días',likes:19,liked:false,comments:4,emoji:'💉',bg:'linear-gradient(135deg,#dcfce7,#4ade80)',imgUrls:[],docs:[],isNew:false},
];

let EVENTS=[
  {id:1,day:'18',mon:'Jun',title:'Parcial de Matemáticas',meta:'Aula 3 · 17:30 hs · Cupo: 40',car:'datos',calKey:'2025-4-18',done:false,bs:''},
  {id:2,day:'20',mon:'Ago',title:'Inscripción a Materias 2do Cuatrimestre',meta:'Online · Sin cupo · Todas',car:'general',calKey:'2025-7-20',done:false,bs:''},
  {id:3,day:'25',mon:'Jun',title:'Jornada Ciencia de Datos e IA',meta:'Salón Principal · 9:00 hs · Cupo: 80',car:'datos',calKey:'2025-4-25',done:false,bs:'background:#fff0e6;color:var(--accent)'},
  {id:4,day:'10',mon:'Jul',title:'Asamblea General',meta:'Aula Magna · 18:00 hs · Todas',car:'general',calKey:'2025-5-10',done:false,bs:'background:#f0fdf4;color:var(--success)'},
  {id:5,day:'15',mon:'Jul',title:'Parcial de Contabilidad',meta:'Aula 7 · 19:00 hs · Cupo: 35',car:'admin',calKey:'2025-5-15',done:false,bs:'background:#fdf2f8;color:#9d174d'},
];

const AVC=['#2D6BE4','#16A34A','#F97316','#9d174d','#854d0e','#166534','#1d4ed8','#7c3aed'];
let role='estudiante',user={...ROLES.estudiante},avUrl=null;
let calDate = new Date(2026, 0, 1);
let calDates = {};
let calendarioAPI = [];
let estudiantesAPI = [];
let notifs=[];
let stuQ='',stuC='todas';
let novCat='todas',novCar='todas',evCar='todas';
let novedadesAPI = [];
let reglamentacionAPI = [];
let pendingImgUrls=[],pendingDocs=[];
let lastCalEntry=null;

// ════════════════ ROLE SELECTOR ════════════════
document.querySelectorAll('.rbtn').forEach(b=>b.addEventListener('click',()=>{
  document.querySelectorAll('.rbtn').forEach(x=>x.classList.remove('active'));
  b.classList.add('active');role=b.dataset.r;
}));

// ════════════════ LOGIN ════════════════
async function doLogin() {
  const usuarioInput = document.getElementById("l-user").value.trim();
  const pass = document.getElementById("l-pass").value.trim();
  const rolSeleccionado = document.querySelector(".rbtn.active").dataset.r;
  const perfiles = {
  estudiante: 1,
  docente: 2,
  centro: 3,
  directivo: 4
};

  try {
    const usuarios = await obtenerUsuariosAPI();

    console.table(usuarios);

    const perfilID = perfiles[rolSeleccionado];

const foundUser = usuarios.find(u =>
  String(u.dni) === usuarioInput &&
  String(u.usuario) === pass &&
  Number(u.perfil_id) === perfilID &&
  u.activo === true
);

    if (foundUser) {

  foundUser.rol = rolSeleccionado;

  localStorage.setItem("usuario", JSON.stringify(foundUser));

  user = foundUser;
  role = rolSeleccionado;

      iniciarSesionUI(foundUser);
      applyRole();
      cargarPreguntasFrecuentes();
      await buildNotifs();
      await cargarReglamentacionAPI();
await cargarCalendarioAPI();
await cargarEstudiantesAPI();

      document.getElementById("login-screen").classList.remove("active");
      document.getElementById("main-screen").classList.add("active");
    } else {
      alert("Email o contraseña incorrectos");
    }

  } catch (error) {
    console.error(error);
    alert("No se pudo conectar con la API");
  }
}

// ════════════════ APPLY ROLE ════════════════
function applyRole(){
  const r=role;
  const ini=initials(user.nombre);
  setAv('s-av',ini,avUrl,false);
  document.getElementById('s-name').textContent=user.nombre;
  document.getElementById('s-role').textContent={estudiante:'Estudiante',docente:'Docente',delegado:'Delegado',directivo:'Directivo'}[r];
  document.getElementById('hw').textContent=`¡Bienvenido/a, ${user.nombre.split(' ')[0]}!`;
  setAv('av-prev',ini,avUrl,true);
  document.getElementById('p-nombre').textContent=user.nombre;
  document.getElementById('p-nom').value=user.nombre;
  document.getElementById('p-email').value=user.email;
  document.getElementById('p-dni').value=user.dni;
  document.getElementById('p-usr').value=user.usr||'';
  const bm={estudiante:'b-alumno',docente:'b-docente',delegado:'b-delegado',directivo:'b-admin'};
  const lm={estudiante:'Estudiante',docente:'Docente',delegado:'Delegado / Centro',directivo:'Directivo'};
  document.getElementById('p-badge').innerHTML=`<span class="br ${bm[r]}">${lm[r]}</span>`;
  const cc=['docente','delegado','directivo'].includes(r);
const isAdm=r==='directivo';
const isDoc=['docente','delegado','directivo'].includes(r);
  document.querySelectorAll('.can-create').forEach(e=>e.style.display=cc?'':'none');
  document.querySelectorAll('.can-admin').forEach(e=>e.style.display=isAdm?'':'none');
  document.querySelectorAll('.can-docente').forEach(e=>e.style.display=isDoc?'':'none');
  document.querySelectorAll('.admin-only').forEach(e=>e.style.display=isAdm?'':'none');
  renderFeed();renderEvents();renderHomeFeed();renderHomeEvents();renderGallery();cargarNovedadesAPI();
}
function initials(n){return n.split(' ').map(w=>w[0]).join('').toUpperCase().slice(0,2);}
function setAv(id,ini,url,block){
  const el=document.getElementById(id);if(!el)return;
  if(url){el.innerHTML=block?`<img src="${url}"/>`:`<img src="${url}" style="width:100%;height:100%;object-fit:cover;border-radius:50%"/>`;}
  else el.textContent=ini;
}

// ════════════════ NAVIGATION ════════════════
const PAGE_TITLES={home:'Inicio',novedades:'Novedades',eventos:'Eventos',calendario:'Calendario',reglamento:'Reglamentación',galeria:'Galería',estudiantes:'Estudiantes',perfil:'Mi Perfil'};
const SEARCH_PAGES=['eventos','reglamento'];

function nav(name){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.navi').forEach(n=>n.classList.remove('active'));
  const pg=document.getElementById('page-'+name);if(pg)pg.classList.add('active');
  document.getElementById('tb-title').textContent=PAGE_TITLES[name]||'';
  const nb=document.querySelectorAll('.navi');
  const mp={home:0,novedades:1,eventos:2,calendario:3,reglamento:4,galeria:5,estudiantes:6,perfil:7};
  if(mp[name]!==undefined&&nb[mp[name]])nb[mp[name]].classList.add('active');

  const cs=document.getElementById('ctx-search');
  const inp=document.getElementById('ctx-input');
  if(SEARCH_PAGES.includes(name)){
    cs.classList.add('visible');
    inp.value='';
    document.getElementById('ctx-results').classList.remove('open');
    inp.placeholder=name==='eventos'?'Buscar eventos…':'Buscar en reglamentación…';
  } else {
    cs.classList.remove('visible');
    document.getElementById('ctx-results').classList.remove('open');
  }
  document.getElementById('npanel').classList.remove('open');
  updateLastCal();
  if (name === 'reglamento') {
  cargarReglamentacionAPI();
}
if (name === 'calendario') {
  cargarCalendarioAPI();
}
if (name === 'estudiantes') {
  cargarEstudiantesAPI();
}
}

function tp(id){const el=document.getElementById(id);el.classList.toggle('open');if(el.classList.contains('open'))el.scrollIntoView({behavior:'smooth',block:'nearest'});}

// ════════════════ CONTEXTUAL SEARCH ════════════════
function doCtxSearch(q){
  const res=document.getElementById('ctx-results');
  if(!q||q.length<2){res.classList.remove('open');return;}
  const currentPage=document.querySelector('.page.active').id.replace('page-','');
  let hits=[];

  if(currentPage==='eventos'){
    hits=EVENTS.filter(e=>
      e.title.toLowerCase().includes(q.toLowerCase())||
      e.meta.toLowerCase().includes(q.toLowerCase())
    ).map(e=>`<div class="cri" onclick="highlightEvent(${e.id})">
      <div class="cri-title">${hilite(e.title,q)}</div>
      <div class="cri-snippet">${hilite(e.meta,q)}</div>
    </div>`);
  } else if(currentPage==='reglamento'){
    document.querySelectorAll('#regl-content .dvw').forEach(dv=>{
      const txt=dv.getAttribute('data-text')||dv.textContent;
      const title=dv.previousElementSibling?.querySelector('[style*="font-weight:600"]')?.textContent||'Documento';
      if(txt.toLowerCase().includes(q.toLowerCase())){
        const snip=getSnippet(txt,q);
        hits.push(`<div class="cri" onclick="openReglResult('${dv.id}')">
          <div class="cri-title">${title}</div>
          <div class="cri-snippet">${hilite(snip,q)}</div>
        </div>`);
      }
    });
  }

  if(!hits.length){
    res.innerHTML=`<div class="cri" style="color:var(--muted)">Sin resultados para "<strong>${q}</strong>"</div>`;
  } else {
    res.innerHTML=hits.join('');
  }
  res.classList.add('open');
}

function hilite(str,q){
  const re=new RegExp('('+q.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+')','gi');
  return str.replace(re,'<span class="cri-match">$1</span>');
}
function getSnippet(txt,q){
  const idx=txt.toLowerCase().indexOf(q.toLowerCase());
  const start=Math.max(0,idx-40);
  const end=Math.min(txt.length,idx+q.length+60);
  return (start>0?'…':'')+txt.slice(start,end)+(end<txt.length?'…':'');
}
function highlightEvent(id){
  document.getElementById('ctx-results').classList.remove('open');
  document.getElementById('ctx-input').value='';
  const cards=document.querySelectorAll('#ev-list .ecard');
  cards.forEach(c=>c.style.outline='');
  const e=EVENTS.find(x=>x.id===id);if(!e)return;
  renderEvents();
  setTimeout(()=>{
    const el=document.querySelector(`#ev-list .ecard[data-eid="${id}"]`);
    if(el){el.style.outline='2px solid var(--primary)';el.scrollIntoView({behavior:'smooth',block:'nearest'});}
  },100);
}
function openReglResult(dvId){
  document.getElementById('ctx-results').classList.remove('open');
  document.getElementById('ctx-input').value='';
  const dv=document.getElementById(dvId);
  if(dv){dv.classList.add('open');dv.scrollIntoView({behavior:'smooth',block:'nearest'});}
}
document.addEventListener('click',e=>{
  if(!e.target.closest('.ctx-search'))document.getElementById('ctx-results').classList.remove('open');
  if(!e.target.closest('.topbar-right'))document.getElementById('npanel').classList.remove('open');
});

// ════════════════ NOTIFICATIONS ════════════════
async function buildNotifs() {
  try {
    const data = await obtenerNotificacionesAPI();

    notifs = data.map(n => ({
      id: n.id,
      dot: n.dot || n.tipo || "pub",
      text: n.text || n.mensaje || n.titulo || "Nueva notificación",
      time: n.time || n.fecha || "Ahora",
      read: n.read || n.leida || false
    }));

    renderNotifs();

  } catch (error) {
    console.error("Error al cargar notificaciones:", error);
    notifs = [];
    renderNotifs();
  }
}
function renderNotifs(){
  const list=document.getElementById('nlist');
  const u=notifs.filter(n=>!n.read).length;
  const b=document.getElementById('nbadge');b.textContent=u;b.style.display=u?'flex':'none';
  if(!notifs.length){list.innerHTML='<div style="padding:1rem;text-align:center;color:var(--muted);font-size:.85rem">Sin notificaciones</div>';return;}
  list.innerHTML=notifs.map((n,i)=>`<div class="nitem" onclick="mread(${i})" style="${n.read?'opacity:.5':''}"><div class="ndot ${n.dot}"></div><div><div class="ntext">${n.text}</div><div class="ntime">${n.time}</div></div></div>`).join('');
}
function toggleNP(){document.getElementById('npanel').classList.toggle('open');}
async function mread(i) {
  const n = notifs[i];

  n.read = true;
  renderNotifs();

  if (n.id) {
    try {
      await actualizarNotificacionAPI(n.id, {
        ...n,
        read: true,
        leida: true
      });
    } catch (error) {
      console.error("No se pudo marcar como leída:", error);
    }
  }
}
async function clearN() {
  const copia = [...notifs];

  notifs = [];
  renderNotifs();

  try {
    for (const n of copia) {
      if (n.id) {
        await eliminarNotificacionAPI(n.id);
      }
    }
  } catch (error) {
    console.error("No se pudieron eliminar las notificaciones:", error);
  }
}
async function pushN(dot, text) {
  const nueva = {
    dot: dot,
    text: text,
    time: "Ahora",
    read: false
  };

  notifs.unshift(nueva);
  renderNotifs();

  try {
    const creada = await crearNotificacionAPI(nueva);

    nueva.id = creada.id;

  } catch (error) {
    console.error("No se pudo guardar la notificación en la API:", error);
  }
}
// ════════════════ LAST CAL ENTRY (home banner) ════════════════
function updateLastCal(){
  const sec=document.getElementById('last-cal-section');
  if(lastCalEntry){
    sec.style.display='';
    document.getElementById('last-cal-title').textContent=lastCalEntry.title;
    document.getElementById('last-cal-meta').textContent=`${lastCalEntry.fecha} · Agregado por ${lastCalEntry.author}`;
  } else {
    sec.style.display='none';
  }
}

// ════════════════ FEED ════════════════
function catLabel(c){return{ac:'Académico',so:'Social',in:'Institucional',ur:'Urgente'}[c]||c;}
function catClass(c){return{ac:'bc-ac',so:'bc-so',in:'bc-in',ur:'bc-ur'}[c]||'bc-ac';}
function roleColor(r){return{Docente:'#2D6BE4',Delegado:'#16A34A',Admin:'#9d174d',Alumno:'#5a6a8a'}[r]||'#5a6a8a';}

function postHTML(p){
  const ini=initials(p.author);const rc=roleColor(p.role);
  let media='';
  if(p.imgUrls&&p.imgUrls.length>0){
    media=p.imgUrls.length===1
      ?`<div class="post-img-box"><img src="${p.imgUrls[0]}" style="width:100%;max-height:300px;object-fit:cover"/></div>`
      :`<div style="display:grid;grid-template-columns:repeat(${Math.min(p.imgUrls.length,3)},1fr);gap:2px">${p.imgUrls.slice(0,6).map(u=>`<div style="aspect-ratio:1;overflow:hidden"><img src="${u}" style="width:100%;height:100%;object-fit:cover"/></div>`).join('')}</div>`;
  } else {
    media=`<div class="post-img-emoji" style="background:${p.bg}">${p.emoji}</div>`;
  }
  const docs=p.docs&&p.docs.length?`<div class="post-docs">${p.docs.map(d=>`<div class="post-doc-link" onclick="toast('Abriendo ${d}...')"><i class="bi bi-file-earmark-pdf-fill text-danger"></i>${d}<i class="bi bi-download ms-auto" style="font-size:.8rem"></i></div>`).join('')}</div>`:'';
  const badge=p.isNew?`<span class="new-post-badge ms-2">NUEVO</span>`:'';
  return `<div class="post-card" data-cat="${p.cat}" data-car="${p.car}" id="post-${p.id}">
  <div class="post-head"><div class="post-av" style="background:${rc}">${ini}</div><div><div class="post-author">${p.author}${badge}</div><div class="post-role">${p.role} · <span class="bc ${catClass(p.cat)}">${catLabel(p.cat)}</span></div></div><div class="post-time">${p.time}</div></div>
  ${media}
  <div class="post-body"><div class="post-tags"><span class="bc ${catClass(p.cat)}">${catLabel(p.cat)}</span></div><div class="post-title">${p.title}</div><div class="post-text">${p.body}</div>${docs}</div>
  <div class="post-footer">
    <button class="post-action ${p.liked?'liked':''}" onclick="likePost(${p.id},this)"><i class="bi ${p.liked?'bi-heart-fill':'bi-heart'}"></i> <span id="lc-${p.id}">${p.likes}</span></button>
    <button class="post-action"><i class="bi bi-chat"></i> ${p.comments}</button>
    <button class="post-action" onclick="toast('¡Compartido!')"><i class="bi bi-share"></i> Compartir</button>
  </div>
</div>`;
}
async function cargarNovedadesAPI() {
  try {
    const data = await obtenerNovedadesAPI();

    novedadesAPI = data.map(n => ({
      id: n.id,
      author: n.autor || n.owner || "Centro de Estudiantes",
      role: "Delegado",
      cat: convertirCategoriaAPI(n),
      car: convertirCarreraAPI(n),
      title: n.titulo || "Sin título",
      body: n.contenido || n.mensaje || "",
      time: n.fecha || "Ahora",
      likes: 0,
      liked: false,
      comments: 0,
      emoji: n.icono || "📢",
      bg: "linear-gradient(135deg,#dce8ff,#93c5fd)",
      imgUrls: [],
      docs: n.adjunto ? [n.adjunto] : [],
      isNew: false
    }));

    console.log("Novedades recibidas desde API:");
    console.table(novedadesAPI);

    renderFeed();
    renderHomeFeed();

  } catch (error) {
    console.error("Error cargando novedades:", error);
  }
}
function convertirCategoriaAPI(n) {
  if (n.categoria_id === 1 || n.categoria === "Académico") return "ac";
  if (n.categoria_id === 2 || n.categoria === "Social") return "so";
  if (n.categoria_id === 3 || n.categoria === "Institucional") return "in";
  if (n.categoria_id === 4 || n.categoria === "Urgente") return "ur";

  return "ac";
}

function convertirCarreraAPI(n) {
  if (!n.carrera_id || n.carrera_id === null) return "todas";

  const carreras = {
    1: "datos",
    2: "admin_financiera",
    3: "enferm"
  };

  return carreras[n.carrera_id] || "todas";
}
function renderFeed(){
  const el = document.getElementById('feed-main');
  if (!el) return;

  const fuente = novedadesAPI.length ? novedadesAPI : POSTS;

  const vis = fuente.filter(p =>
    (novCat === 'todas' || p.cat === novCat) &&
    (novCar === 'todas' || p.car === novCar || p.car === 'todas')
  );

  el.innerHTML = vis.length
    ? vis.map(postHTML).join('')
    : `<p style="color:var(--muted);text-align:center;padding:2rem">Sin publicaciones.</p>`;
}
function renderHomeFeed(){
  const el = document.getElementById('home-feed');
  if (!el) return;

  const fuente = novedadesAPI.length ? novedadesAPI : POSTS;

  el.innerHTML = fuente.slice(0,2).map(p => {
    const ini = initials(p.author);
    const rc = roleColor(p.role);

    return `<div class="post-card mb-2">
      <div class="post-head">
        <div class="post-av" style="background:${rc};width:32px;height:32px;font-size:.72rem">${ini}</div>
        <div>
          <div class="post-author" style="font-size:.85rem">${p.author}${p.isNew ? '<span class="new-post-badge ms-1">NUEVO</span>' : ''}</div>
          <div class="post-role">${p.time}</div>
        </div>
      </div>
      <div class="post-body" style="padding:.6rem 1rem .8rem">
        <div class="post-title" style="font-size:.88rem">${p.title}</div>
        <div class="post-text" style="font-size:.82rem;margin-top:.2rem">${p.body.substring(0,90)}…</div>
      </div>
    </div>`;
  }).join('');

  document.getElementById('home-nov-count').textContent = fuente.length;
}
function likePost(id,btn){
  const p=POSTS.find(x=>x.id===id);if(!p)return;
  p.liked=!p.liked;p.likes+=p.liked?1:-1;
  btn.classList.toggle('liked',p.liked);
  btn.querySelector('i').className=`bi ${p.liked?'bi-heart-fill':'bi-heart'}`;
  document.getElementById('lc-'+id).textContent=p.likes;
}
function fNov(cat,btn){document.querySelectorAll('#nov-fbar .qbtn').forEach(b=>b.classList.remove('active'));btn.classList.add('active');novCat=cat;renderFeed();}
function fCNov(car,el){document.querySelectorAll('#nov-cbar .ctag').forEach(t=>t.classList.remove('on'));el.classList.add('on');novCar=car;renderFeed();}

function previewImgs(inp){
  pendingImgUrls=[];const prev=document.getElementById('np-imgprev');prev.innerHTML='';
  Array.from(inp.files).forEach(f=>{const r=new FileReader();r.onload=e=>{pendingImgUrls.push(e.target.result);prev.innerHTML+=`<img src="${e.target.result}" style="width:70px;height:70px;object-fit:cover;border-radius:8px;border:1.5px solid var(--border)"/>`;};r.readAsDataURL(f);});
}
function previewDocs(inp){
  pendingDocs=[];const prev=document.getElementById('np-docprev');prev.innerHTML='';
  Array.from(inp.files).forEach(f=>{pendingDocs.push(f.name);prev.innerHTML+=`<div class="post-doc-link" style="margin-bottom:.3rem"><i class="bi bi-file-earmark-pdf-fill text-danger"></i>${f.name}</div>`;});
}
async function publishPost(){
  const tit = document.getElementById('np-tit').value.trim();
  const body = document.getElementById('np-body').value.trim();

  if (!tit || !body) {
    toast('Completá el título y el contenido');
    return;
  }

  const catV = document.getElementById('np-cat').value;
  const carV = document.getElementById('np-car').value;

  const categoriaID = {
    ac: 1,
    so: 2,
    in: 3,
    ur: 4
  }[catV] || 1;

  const carreraID = {
    todas: null,
    datos: 1,
    admin_financiera: 2,
    enferm: 3
  }[carV] || null;

  const nuevaNovedad = {
    titulo: tit,
    contenido: body,
    categoria_id: categoriaID,
    autor: user.nombre || "Centro de Estudiantes",
    carrera_id: carreraID,
    destacado: false,
    fecha: new Date().toISOString(),
    adjunto: "",
    icono: "📢",
    owner: "grupo5"
  };

  try {
    await crearNovedadAPI(nuevaNovedad);

    await crearNotificacionAPI({
      titulo: "Nueva novedad",
      mensaje: tit,
      usuario_id: user.id || 1,
      leida: false,
      fecha: new Date().toISOString()
    });

    await cargarNovedadesAPI();
    await buildNotifs();

    tp('pnl-nov');

    document.getElementById('np-tit').value = '';
    document.getElementById('np-body').value = '';
    document.getElementById('np-imgprev').innerHTML = '';
    document.getElementById('np-docprev').innerHTML = '';

    pendingImgUrls = [];
    pendingDocs = [];

    toast('Novedad publicada en la API ✓');

  } catch (error) {
    console.error("Error al publicar novedad:", error);
    toast('No se pudo publicar la novedad');
  }
}

// ════════════════ EVENTS ════════════════
function renderEvents(){
  const el=document.getElementById('ev-list');if(!el)return;
  const vis=EVENTS.filter(e=>evCar==='todas'||e.car===evCar||e.car==='general');
  el.innerHTML=vis.map(e=>`
<div class="ecard" data-c="${e.car}" data-eid="${e.id}">
  <div class="ebox" style="${e.bs}"><div class="ed">${e.day}</div><div class="em">${e.mon}</div></div>
  <div class="flex-grow-1">
    <div class="d-flex justify-content-between align-items-start flex-wrap gap-1">
      <div class="etitle">${e.title}</div><span class="be ${e.done?'be-ce':'be-ab'}">${e.done?'Inscripto':'Abierto'}</span>
    </div>
    <div class="emeta">${e.meta}</div>
  </div>
  <button class="bini ${e.done?'done':''}" onclick="inscr(${e.id},this)" ${e.done?'disabled':''}>${e.done?'✓ Inscripto':'Inscribirse'}</button>
</div>`).join('');
}
function renderHomeEvents(){
  const el=document.getElementById('home-events');if(!el)return;
  el.innerHTML=EVENTS.slice(0,3).map(e=>`<div class="ecard" style="padding:.7rem .9rem;margin-bottom:.5rem"><div class="ebox" style="${e.bs}"><div class="ed">${e.day}</div><div class="em">${e.mon}</div></div><div><div class="etitle" style="font-size:.85rem">${e.title}</div><div class="emeta">${e.meta.split('·')[0]}</div></div></div>`).join('');
}
function inscr(id,btn){
  const e=EVENTS.find(x=>x.id===id);if(!e||e.done)return;
  e.done=true;btn.classList.add('done');btn.textContent='✓ Inscripto';btn.disabled=true;
  pubDates[e.calKey]=e.title;renderCal();
  pushN('pub',`Inscripto en <strong>${e.title}</strong> — en el calendario.`);
  toast(`✓ Inscripto en "${e.title}" — marcado en el calendario`);renderEvents();
}
function fCEv(car,el){document.querySelectorAll('#page-eventos .ctag').forEach(t=>t.classList.remove('on'));el.classList.add('on');evCar=car;renderEvents();}
function clearEvSearch(){document.getElementById('ev-search-results').style.display='none';}

function addEvento(){
  const tit=document.getElementById('ev-tit').value.trim();const fec=document.getElementById('ev-fec').value;
  if(!tit||!fec){toast('Completá título y fecha');return;}
  const d=new Date(fec);
  const mons=['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'];
  const car=document.getElementById('ev-car').value;
  const hor=document.getElementById('ev-hor').value||'—';
  const lug=document.getElementById('ev-lug').value||'Por definir';
  const cup=document.getElementById('ev-cup').value;
  const ck=`${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
  const newEv={id:Date.now(),day:d.getDate(),mon:mons[d.getMonth()],title:tit,meta:`${lug} · ${hor} hs${cup?' · Cupo:'+cup:''}`,car,calKey:ck,done:false,bs:''};
  EVENTS.unshift(newEv);
  pubDates[ck]=tit;renderCal();renderEvents();renderHomeEvents();
  tp('pnl-ev');['ev-tit','ev-fec','ev-hor','ev-cup','ev-lug'].forEach(i=>{const e=document.getElementById(i);if(e)e.value='';});
  pushN('pub',`Nuevo evento: <strong>${tit}</strong>`);toast(`Evento "${tit}" creado ✓`);
}
function toggleMat(el,name,calKey){
  const on=el.classList.toggle('on');
  if(on){privDates[calKey]='Inscripción: '+name;renderCal();pushN('priv',`Anotado/a a <strong>${name}</strong> — en tu calendario.`);toast(`Anotado/a a ${name} ✓`);}
  else{delete privDates[calKey];renderCal();}
}

// ════════════════ CALENDAR ════════════════
const MNS=['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
async function cargarCalendarioAPI() {
  try {
    const data = await obtenerCalendarioAPI();

    calendarioAPI = data;

    calDates = {};

    data.forEach(item => {
      const fecha = item.fecha || item.fecha_inicio || item.dia;

      if (!fecha) return;

      const partes = fecha.substring(0, 10).split("-");
      const anio = Number(partes[0]);
      const mes = Number(partes[1]);
      const dia = Number(partes[2]);

      const k = `${anio}-${mes}-${dia}`;

      calDates[k] = {
        id: item.id,
        titulo: item.titulo || item.nombre || "Sin título",
        tipo: item.tipo || item.rol || "docente",
        carrera: item.carrera || item.carrera_nombre || "Todas las carreras",
        autor: item.autor || item.owner || "Sistema",
        fecha: fecha
      };
    });

    console.log("Calendario recibido desde API:");
    console.table(calendarioAPI);

    renderCal();

  } catch (error) {
    console.error("Error cargando calendario:", error);
    toast("No se pudo cargar calendario desde la API");
  }
}
function renderCal(){
  const grid = document.getElementById('cal-grid');
  const y = calDate.getFullYear();
  const m = calDate.getMonth();

  document.getElementById('cal-title').textContent = `${MNS[m]} ${y}`;

  const first = new Date(y, m, 1).getDay();
  const days = new Date(y, m + 1, 0).getDate();
  const td = new Date();

  grid.innerHTML = '';

  for(let i = 0; i < first; i++){
    const d = document.createElement('div');
    d.className = 'cd om';
    d.textContent = new Date(y, m, -(first - 1 - i)).getDate();
    grid.appendChild(d);
  }

  for(let d = 1; d <= days; d++){
    const el = document.createElement('div');
    el.className = 'cd';

    const num = document.createElement('span');
    num.textContent = d;
    el.appendChild(num);

    const k = `${y}-${m + 1}-${d}`;
    const item = calDates[k];

    if(item){
      if(item.tipo === 'docente') el.classList.add('cal-docente');
      if(item.tipo === 'directivo') el.classList.add('cal-directivo');

      const dot = document.createElement('div');
      dot.className = 'cdots';

      const dt = document.createElement('div');
      dt.className = item.tipo === 'docente' ? 'cdt docente' : 'cdt directivo';

      dot.appendChild(dt);
      el.appendChild(dot);

      const tip = document.createElement('div');
      tip.className = 'cttip';
      tip.textContent = `${item.tipo === 'docente' ? '🟠' : '🌸'} ${item.titulo} · ${item.carrera}`;
      el.appendChild(tip);
    }

    if(d === td.getDate() && m === td.getMonth() && y === td.getFullYear()){
      el.classList.add('td');
    }

    grid.appendChild(el);
  }

  renderCalList(y, m);
}

function renderCalList(y, m){
  const el = document.getElementById('cal-list');
  const items = [];

  for(let d = 1; d <= new Date(y, m + 1, 0).getDate(); d++){
    const k = `${y}-${m + 1}-${d}`;
    if(calDates[k]){
      items.push({
  d,
  ...calDates[k]
});
    }
  }

  if(!items.length){
    el.innerHTML = '<p style="color:var(--muted);font-size:.85rem">Sin eventos este mes.</p>';
    return;
  }

  el.innerHTML = items.map(i => `
    <div style="display:flex;align-items:center;gap:.75rem;padding:.55rem 0;border-bottom:1px solid var(--border)">
      <div style="
        width:34px;
        height:34px;
        border-radius:9px;
        background:${i.tipo === 'docente' ? '#fff0e6' : '#fdf2f8'};
        color:${i.tipo === 'docente' ? '#F97316' : '#EC4899'};
        display:flex;
        align-items:center;
        justify-content:center;
        font-weight:700;
        font-size:.85rem;
        flex-shrink:0">
        ${i.d}
      </div>

      <div style="font-size:.87rem;font-weight:500;flex:1">
        ${i.titulo}
        <div style="font-size:.74rem;color:var(--muted)">
          ${i.carrera}
        </div>
      </div>

      <span style="
        font-size:.72rem;
        padding:.18rem .55rem;
        border-radius:20px;
        font-weight:600;
        background:${i.tipo === 'docente' ? '#fff0e6' : '#fdf2f8'};
        color:${i.tipo === 'docente' ? '#F97316' : '#EC4899'}">
        ${i.tipo === 'docente' ? 'Docente' : 'Directivo'}
      </span>
      <button
  class="btn btn-sm btn-outline-danger ms-2"
  onclick="eliminarFechaCalendario('${i.id}')"
  title="Eliminar fecha">
  <i class="bi bi-trash"></i>
</button>
    </div>
  `).join('');
}
function calNav(dir){calDate.setMonth(calDate.getMonth()+dir);renderCal();}
function calTipoChange(){document.getElementById('cal-notif-sec').style.display=document.getElementById('cal-tipo').value==='privada'?'':'none';}
function cnAll(cb){['cn15','cn7','cn3','cn0'].forEach(id=>{const e=document.getElementById(id);if(e)e.checked=cb.checked;});}

async function addCalFecha(){
  const tit = document.getElementById('cal-tit').value.trim();
  const fec = document.getElementById('cal-fec').value;
  const tipo = document.getElementById('cal-tipo').value;
  const carrera = document.getElementById('cal-carrera').value;

  if(!tit || !fec){
    toast('Completá el título y la fecha');
    return;
  }

  const nuevaFecha = {
    titulo: tit,
    fecha: fec,
    tipo: tipo,
    carrera: carrera,
    autor: user.nombre || "Usuario",
    owner: "grupo5"
  };

  try {
    await crearCalendarioAPI(nuevaFecha);

    await crearNotificacionAPI({
      titulo: "Nueva fecha en calendario",
      mensaje: tit,
      usuario_id: user.id || 1,
      leida: false,
      fecha: new Date().toISOString()
    });

    lastCalEntry = {
      title: tit,
      fecha: fec,
      author: user.nombre
    };

    updateLastCal();

    await cargarCalendarioAPI();
    await buildNotifs();

    tp('pnl-cal');

    document.getElementById('cal-tit').value = '';
    document.getElementById('cal-fec').value = '';
    document.getElementById('cal-carrera').value = 'todas';

    toast(`Fecha "${tit}" guardada en la API ✓`);

  } catch (error) {
    console.error("Error al guardar fecha en calendario:", error);
    toast("No se pudo guardar la fecha en la API");
  }
}
async function eliminarFechaCalendario(id) {
  if (!id) {
    toast("No se encontró el ID de la fecha");
    return;
  }

  if (!confirm("¿Eliminar esta fecha del calendario?")) return;

  try {
    await eliminarCalendarioAPI(id);

    await cargarCalendarioAPI();

    toast("Fecha eliminada del calendario ✓");

  } catch (error) {
    console.error("Error al eliminar fecha:", error);
    toast("No se pudo eliminar la fecha");
  }
}

// ════════════════ REGLAMENTO ════════════════
function dview(id){document.getElementById(id).classList.toggle('open');}
function clearReglSearch(){document.getElementById('regl-search-results').style.display='none';}

// ════════════════ GALLERY ════════════════
function toggleGalUpload(){
  const f=document.getElementById('gal-upload-form');
  f.classList.toggle('open');
  if(f.classList.contains('open'))f.scrollIntoView({behavior:'smooth',block:'nearest'});
}
function galTypeChange(){
  const t=document.getElementById('ig-type').value;
  document.getElementById('ig-file').accept=t==='img'?'image/*':'.pdf,.doc,.docx,.pptx,.xlsx';
  document.getElementById('ig-file-prev').innerHTML='';
  igTempUrl=null;
}

function renderGallery(){
  const imgs=IG_ITEMS.filter(x=>x.type==='img');
  const docs=IG_ITEMS.filter(x=>x.type==='doc');
  document.getElementById('home-img-count').textContent=imgs.length;

  if(galTab==='grid'){
    document.getElementById('gal-grid-view').style.display='';
    document.getElementById('gal-docs-view').style.display='none';
    const grid=document.getElementById('gal-grid');
    const empty=document.getElementById('gal-grid-empty');
    if(!imgs.length){grid.innerHTML='';empty.style.display='';return;}
    empty.style.display='none';
    grid.innerHTML=imgs.map(item=>{
      const hasReal=!!item.realUrl;
      return `<div class="gal-cell" onclick="openLB(${item.id})">
        ${hasReal?`<img src="${item.realUrl}" class="gthumb-img"/>`:`<div class="gthumb" style="background:${item.bg||'var(--surf2)'}">${item.emoji||'🖼️'}</div>`}
        <div class="gal-cell-ov"><i class="bi bi-heart-fill"></i>${item.likes}</div>
      </div>`;
    }).join('');
  } else {
    document.getElementById('gal-grid-view').style.display='none';
    document.getElementById('gal-docs-view').style.display='';
    const docList=document.getElementById('gal-doc-list');
    const empty=document.getElementById('gal-docs-empty');
    if(!docs.length){docList.innerHTML='';empty.style.display='';return;}
    empty.style.display='none';
    const extIcon={'PDF':'bi-file-earmark-pdf-fill text-danger','DOCX':'bi-file-earmark-word-fill text-primary','PPTX':'bi-file-earmark-ppt-fill text-warning','XLSX':'bi-file-earmark-excel-fill text-success'};
    docList.innerHTML=docs.map(d=>`
<div class="doc-row" onclick="toast('Abriendo ${d.desc}...')">
  <div class="doc-ic" style="background:#fef2f2"><i class="bi ${extIcon[d.ext]||'bi-file-earmark-fill text-muted'}" style="font-size:1.1rem"></i></div>
  <div class="flex-grow-1"><div style="font-weight:600;font-size:.9rem">${d.desc}</div><div style="font-size:.77rem;color:var(--muted)">${d.ext||'DOC'} · ${d.time} · ❤️ ${d.likes}</div></div>
  <i class="bi bi-download" style="color:var(--primary);font-size:1rem"></i>
</div>`).join('');
  }
}

function setGalTab(tab){
  galTab=tab;
  document.getElementById('gtab-grid').classList.toggle('active',tab==='grid');
  document.getElementById('gtab-docs').classList.toggle('active',tab==='docs');
  renderGallery();
}

function igPreview(inp){
  const f=inp.files[0];if(!f)return;
  const prev=document.getElementById('ig-file-prev');prev.innerHTML='';
  const type=document.getElementById('ig-type').value;
  if(type==='img'){
    const r=new FileReader();r.onload=e=>{igTempUrl=e.target.result;igTempType='img';prev.innerHTML=`<img src="${e.target.result}" style="max-height:100px;border-radius:8px;border:1.5px solid var(--border)"/>`;};r.readAsDataURL(f);
  } else {
    igTempUrl=f.name;igTempType='doc';
    prev.innerHTML=`<div class="post-doc-link"><i class="bi bi-file-earmark-pdf-fill text-danger"></i>${f.name}</div>`;
  }
}

function igUpload(){
  const desc=document.getElementById('ig-desc').value.trim();
  const album=document.getElementById('ig-album').value;
  const type=document.getElementById('ig-type').value;
  if(!desc){toast('Agregá una descripción');return;}
  if(!igTempUrl){toast('Seleccioná un archivo');return;}
  if(type==='img'){
    IG_ITEMS.unshift({id:Date.now(),type:'img',album,desc,realUrl:igTempUrl,likes:0,time:'Ahora mismo'});
  } else {
    const ext=(igTempUrl+'').split('.').pop().toUpperCase();
    IG_ITEMS.unshift({id:Date.now(),type:'doc',album:'docs',desc,ext,likes:0,time:'Ahora mismo'});
  }
  const roleLabel={alumno:'Alumno',docente:'Docente',delegado:'Delegado',admin:'Admin'}[role];
  POSTS.unshift({id:Date.now()+1,author:user.nombre,role:roleLabel,cat:'so',car:'todas',title:`📸 Nueva publicación en Galería: ${desc}`,body:`${user.nombre} publicó "${desc}" en la Galería del Centro.`,time:'Ahora mismo',likes:0,liked:false,comments:0,emoji:'🖼️',bg:'linear-gradient(135deg,#dce8ff,#93c5fd)',imgUrls:type==='img'&&igTempUrl?[igTempUrl]:[],docs:type==='doc'&&igTempUrl?[igTempUrl]:[],isNew:true});
  renderGallery();renderFeed();renderHomeFeed();
  toggleGalUpload();
  document.getElementById('ig-desc').value='';document.getElementById('ig-file').value='';
  document.getElementById('ig-file-prev').innerHTML='';igTempUrl=null;
  pushN('pub',`Nueva foto/doc en Galería: <strong>${desc}</strong>`);
  toast('✓ Publicado en la Galería y en Novedades');
}

function openLB(id){
  const item=IG_ITEMS.find(x=>x.id===id);if(!item)return;
  const hasReal=!!item.realUrl;
  document.getElementById('lb-media').innerHTML=hasReal
    ?`<img src="${item.realUrl}" class="lb-media-img"/>`
    :`<div class="lb-media-emoji" style="background:${item.bg||'var(--surf2)'}">${item.emoji||'🖼️'}</div>`;
  document.getElementById('lb-title').textContent=item.desc;
  document.getElementById('lb-meta').textContent=`❤️ ${item.likes} · ${item.time}`;
  document.getElementById('lb-ov').classList.add('open');
}
function closeLB(e){if(e.target===document.getElementById('lb-ov'))document.getElementById('lb-ov').classList.remove('open');}

// ════════════════ STUDENTS ════════════════
async function cargarEstudiantesAPI() {
  try {
    const usuarios = await obtenerUsuariosAPI();

    estudiantesAPI = usuarios
      .filter(u => Number(u.perfil_id) === 1)
      .map(u => ({
        id: u.id,
        n: u.nombre || "Sin nombre",
        d: String(u.dni || ""),
        e: u.email || "Sin email",
        c: carreraNombrePorID(u.carrera_id),
        est: u.activo === false ? "Inactivo" : "Regular"
      }));

    console.log("Estudiantes recibidos desde API:");
    console.table(estudiantesAPI);

    renderAlumnos();

  } catch (error) {
    console.error("Error cargando estudiantes:", error);
    toast("No se pudieron cargar los estudiantes desde la API");
  }
}
function carreraNombrePorID(id) {
  const carreras = {
    1: "Tecnicatura en Ciencia de Datos e IA",
    2: "Tecnicatura en Administración Financiera",
    3: "Tecnicatura en Enfermería",
    4: "Profesorado de Educación Inicial",
    5: "Profesorado de Ed. Secundaria en Matemática",
    6: "Profesorado de Ed. Secundaria en Lengua y Literatura",
    7: "Tecnicatura en Administración con Orientación en Marketing",
    8: "Especialización de Enfermería en Salud Mental",
    9: "Tecnicatura en Acompañamiento Terapéutico",
    10: "Tecnicatura en Psicopedagogía",
    11: "Tecnicatura en Trabajo Social",
    12: "Tecnicatura en Comunicación Multimedial",
    13: "Tecnicatura en Hotelería",
    14: "Tecnicatura en Higiene y Seguridad en el Trabajo"
  };

  return carreras[Number(id)] || "Sin carrera";
}
function renderAlumnos(){
  const tb = document.getElementById('stu-tbody');
  if(!tb) return;

  const fuente = estudiantesAPI.length ? estudiantesAPI : ALUMNOS;

  const fil = fuente.filter(a => {
    const nombre = (a.n || "").toLowerCase();
    const dni = String(a.d || "");
    const carrera = a.c || "";

    const mQ =
      !stuQ ||
      nombre.includes(stuQ.toLowerCase()) ||
      dni.includes(stuQ);

    const mC =
      stuC === 'todas' ||
      carrera === stuC;

    return mQ && mC;
  });

  document.getElementById('stu-cnt').textContent =
    `${fil.length} alumno${fil.length !== 1 ? 's' : ''}`;

  tb.innerHTML = fil.map((a, i) => {
    const ini = initials(a.n);
    const col = AVC[i % AVC.length];

    const sb =
      a.est === 'Regular' ? '#dcfce7' :
      a.est === 'Libre' ? '#fef2f2' :
      a.est === 'Inactivo' ? '#f1f5f9' :
      '#fff7ed';

    const sc =
      a.est === 'Regular' ? '#16a34a' :
      a.est === 'Libre' ? '#dc2626' :
      a.est === 'Inactivo' ? '#64748b' :
      '#c2410c';

    return `<tr>

<td>
  <div style="display:flex;align-items:center;gap:.6rem">
    <div class="sav" style="background:${col}">
      ${ini}
    </div>
    <span>${a.n}</span>
  </div>
</td>

<td>${a.d}</td>

<td style="font-size:.82rem;color:var(--muted)">
  ${a.e}
</td>

<td style="font-size:.83rem">
  ${a.c}
</td>

<td>
  <span style="
    padding:.15rem .55rem;
    border-radius:20px;
    font-size:.72rem;
    font-weight:600;
    background:${sb};
    color:${sc}">
    ${a.est}
  </span>
</td>

<td>
  <button
    class="btn btn-primary btn-sm"
    onclick="abrirMailAlumno('${a.e}')">
    <i class="bi bi-envelope-fill"></i>
    Enviar
  </button>
</td>

</tr>`;
  }).join('') ||
  '<tr><td colspan="6" style="text-align:center;padding:1.5rem;color:var(--muted)">Sin resultados</td></tr>';
}
function fStu(q){stuQ=q;renderAlumnos();}
function fStuC(v){stuC=v;renderAlumnos();}

// ════════════════ PROFILE ════════════════
function changeAv(inp){
  const f=inp.files[0];if(!f)return;
  const r=new FileReader();r.onload=e=>{avUrl=e.target.result;setAv('av-prev','',avUrl,true);setAv('s-av','',avUrl,false);toast('Foto actualizada ✓');};r.readAsDataURL(f);
}
function saveP(){
  user.nombre=document.getElementById('p-nom').value||user.nombre;
  user.email=document.getElementById('p-email').value||user.email;
  user.usr=document.getElementById('p-usr').value||user.usr;
  document.getElementById('s-name').textContent=user.nombre;
  document.getElementById('p-nombre').textContent=user.nombre;
  document.getElementById('hw').textContent=`¡Bienvenido/a, ${user.nombre.split(' ')[0]}!`;
  toast('Perfil guardado ✓');
}

// ════════════════ TOAST ════════════════
let toastT;
function toast(msg){
  const t=document.getElementById('toast');t.textContent=msg;t.style.display='block';
  clearTimeout(toastT);toastT=setTimeout(()=>t.style.display='none',3000);
}

// ════════════════ SESSION ════════════════
function iniciarSesionUI(u) {
  document.getElementById("s-name").textContent = u.nombre;
  document.getElementById("s-role").textContent = u.rol;
  document.getElementById("s-av").textContent = u.nombre.charAt(0);
}

window.onload = function () {
  const savedUser = JSON.parse(localStorage.getItem("usuario"));

  if (savedUser) {
    user = savedUser;
    role = savedUser.rol;
    iniciarSesionUI(savedUser);
    applyRole();
    cargarPreguntasFrecuentes();
    buildNotifs();
    renderCal();
    renderAlumnos();
    document.getElementById("login-screen").classList.remove("active");
    document.getElementById("main-screen").classList.add("active");
  }
};

function doLogout() {
  localStorage.removeItem("usuario");
  document.getElementById("main-screen").classList.remove("active");
  document.getElementById("login-screen").classList.add("active");
}
function toggleReglamentoFields() {

  const categoria = document.getElementById("doc-categoria").value;

  const faqBox = document.getElementById("faq-box");
  const pdfBox = document.getElementById("pdf-box");

  if(categoria === "faq") {
    faqBox.style.display = "block";
    pdfBox.style.display = "none";
  } else {
    faqBox.style.display = "none";
    pdfBox.style.display = "block";
  }

}
async function cargarReglamentacionAPI() {
  try {
    const data = await obtenerReglamentacionAPI();

    reglamentacionAPI = data;

    console.log("Reglamentación recibida desde API:");
    console.table(reglamentacionAPI);

    renderReglamentacionAPI();

  } catch (error) {
    console.error("Error cargando reglamentación:", error);
  }
}

function renderReglamentacionAPI() {
  const cont = document.getElementById("regl-content");
  if (!cont) return;

  cont.innerHTML = "";

  reglamentacionAPI.forEach(doc => {
      const tieneLink = doc.link && doc.link.trim() !== "";
    cont.insertAdjacentHTML("beforeend", `
      <div class="cc mb-3 d-flex justify-content-between align-items-center">
        <div>
          <div style="font-weight:600">${doc.titulo}</div>
          <div style="font-size:.8rem;color:var(--muted)">
            ${doc.descripcion || ""}
          </div>
        </div>

        <div class="d-flex gap-2">
  ${tieneLink ? `
    <a href="${doc.link}" target="_blank" class="btn btn-sm btn-outline-primary">
      <i class="bi bi-eye"></i>
    </a>

    <a href="${doc.link}" download class="btn btn-sm btn-primary">
      <i class="bi bi-download"></i>
    </a>
  ` : `
    <button class="btn btn-sm btn-outline-secondary" disabled title="Archivo no disponible">
      <i class="bi bi-eye"></i>
    </button>

    <button class="btn btn-sm btn-secondary" disabled title="Archivo no disponible">
      <i class="bi bi-download"></i>
    </button>
    
  `}
  <button
  class="btn btn-sm btn-danger can-admin"
  onclick="eliminarDocumentoAPI('${doc.id}')">
  <i class="bi bi-trash"></i>
</button>
</div>
      </div>
    `);
  });

  applyRole();
}
async function eliminarDocumentoAPI(id) {

  if (!confirm("¿Eliminar este documento?")) return;

  try {

    await eliminarReglamentacionAPI(id);

    await cargarReglamentacionAPI();

    toast("Documento eliminado ✓");

  } catch (error) {

    console.error(error);

    toast("Error al eliminar");

  }
}
async function addReglamentoItem() {
  const nombre = document.getElementById("doc-nombre").value.trim();
  const link = document.getElementById("doc-link").value.trim();

  if (!nombre) {
    toast("Escriba un título");
    return;
  }

  const nuevoDocumento = {
    tipo: "documento",
    titulo: nombre,
    descripcion: "Documento de reglamentación",
    archivo: nombre + ".pdf",
    link: link,
    categoria: "academica",
    palabras_clave: ["reglamento", "documento"],
    fecha_publicacion: new Date().toISOString().split("T")[0],
    version: "1.0"
  };

  try {
    await crearReglamentacionAPI(nuevoDocumento);

    await cargarReglamentacionAPI();

    tp("pnl-doc");

    document.getElementById("doc-nombre").value = "";
    document.getElementById("doc-link").value = "";

    toast("Reglamentación guardada en la API ✓");

  } catch (error) {
    console.error("Error al guardar reglamentación:", error);
    toast("No se pudo guardar en la API");
  }
}
async function cargarPreguntasFrecuentes() {
  const res = await fetch("preguntas.json");
  const preguntas = await res.json();

  const faqContainer = document.getElementById("faq-container");

  faqContainer.innerHTML = `
    <div class="mb-2" style="font-weight:700;font-size:.8rem;color:var(--muted)">
      Preguntas Frecuentes
    </div>
  `;

  preguntas.forEach(p => {
    const preguntaHTML = `
      <div class="ditem d-flex align-items-center justify-content-between">
        <div class="d-flex align-items-center flex-grow-1"
             onclick="dview('${p.id}')"
             style="cursor:pointer">
          <div class="dic" style="background:#dbeafe;color:#2563eb">
            <i class="bi bi-question-circle-fill"></i>
          </div>
          <div class="flex-grow-1">${p.pregunta}</div>
        </div>

        <button class="btn btn-sm btn-danger can-admin ms-2"
          style="display:none"
          onclick="this.parentElement.nextElementSibling.remove();this.parentElement.remove();toast('Pregunta eliminada ✓')">
          <i class="bi bi-trash"></i>
        </button>
      </div>

      <div class="dvw" id="${p.id}">
        ${p.respuesta}
      </div>
    `;

    faqContainer.insertAdjacentHTML("beforeend", preguntaHTML);
  });

  applyRole();
}
function mostrarRegistro() {
  const box = document.getElementById("registro-box");

  if (box.style.display === "none") {
    box.style.display = "block";
  } else {
    box.style.display = "none";
  }
}

async function registrarUsuario() {
  const dni = document.getElementById("reg-dni").value.trim();
  const usuario = document.getElementById("reg-usuario").value.trim();
  const nombre = document.getElementById("reg-nombre").value.trim();
  const email = document.getElementById("reg-email").value.trim();
  const carrera = document.getElementById("reg-carrera").value.trim();

  const rolSeleccionado = document.querySelector(".rbtn.active").dataset.r;

  const perfiles = {
    estudiante: 1,
    docente: 2,
    centro: 3,
    directivo: 4
  };

  const perfilID = perfiles[rolSeleccionado];

  if (!dni || !usuario || !nombre || !email || !carrera) {
    alert("Completa todos los campos");
    return;
  }

  const nuevoUsuario = {
    dni: Number(dni),
    nombre: nombre,
    usuario: usuario,
    email: email,
    perfil_id: perfilID,
    carrera_id: Number(carrera),
    activo: true
  };

  try {
    const usuarioCreado = await crearUsuarioAPI(nuevoUsuario);

    console.log("Usuario creado:", usuarioCreado);

    alert("Usuario creado correctamente. Ahora puedes iniciar sesión con tu DNI y usuario.");

  } catch (error) {
    console.error(error);
    alert("No se pudo crear el usuario");
  }
}
function abrirMailAlumno(email){

  document.getElementById("mail-destino").value = email;

  const modal =
    new bootstrap.Modal(
      document.getElementById("mailModal")
    );

  modal.show();
}

function confirmarEnvioAlumno(){

  toast("Correo enviado ✓");

  const modal =
    bootstrap.Modal.getInstance(
      document.getElementById("mailModal")
    );

  modal.hide();

  document.getElementById("mail-titulo").value = "";
  document.getElementById("mail-mensaje").value = "";
  document.getElementById("mail-adjunto").value = "";
}