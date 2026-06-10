"use client";

import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [navScrolled, setNavScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [form, setForm] = useState({ nombre: "", tel: "", servicio: "Mantenimiento de piscina", msg: "" });
  const heroBgRef = useRef<HTMLDivElement | null>(null);

  // Nav scroll state + hero parallax
  useEffect(() => {
    const onScroll = () => {
      setNavScrolled(window.scrollY > 60);
      if (heroBgRef.current && window.scrollY < window.innerHeight) {
        heroBgRef.current.style.transform = `translateY(${window.scrollY * 0.25}px)`;
      }
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Reveal on scroll
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const sendWhatsApp = () => {
    if (!form.nombre.trim() || !form.tel.trim()) {
      alert("Por favor, indícanos al menos tu nombre y teléfono.");
      return;
    }
    let texto = `Hola, soy ${form.nombre}.%0A`;
    texto += `Me interesa: ${form.servicio}.%0A`;
    texto += `Mi teléfono: ${form.tel}.`;
    if (form.msg.trim()) texto += `%0AMensaje: ${form.msg}`;
    window.open(`https://wa.me/34687537441?text=${texto}`, "_blank");
  };

  const faqs = [
    { q: "¿Qué servicios ofrecéis?", a: "Mantenimiento y limpieza de piscinas (tratamiento del agua, reparaciones, puesta a punto), jardinería integral (diseño, poda, riego automático, césped natural y artificial), reformas integrales y servicios de electricidad para piscinas y jardines." },
    { q: "¿Cómo sé qué servicio necesito para mi vivienda o comunidad?", a: "Realizamos una visita personalizada y un diagnóstico gratuito para evaluar las necesidades de tu espacio. Así te asesoramos sobre la mejor solución, siempre adaptada a tu presupuesto." },
    { q: "¿Con qué frecuencia se recomienda el mantenimiento?", a: "Depende de la temporada y el uso. En general, las piscinas requieren mantenimiento semanal o quincenal para asegurar un agua limpia y segura, y los jardines revisiones mensuales para conservar el césped, las plantas y el riego en buen estado." },
    { q: "¿Ofrecéis garantía en vuestros trabajos?", a: "Sí. Garantizamos un servicio de calidad, confianza y durabilidad en todos nuestros trabajos de piscinas, jardinería, reformas y electricidad. Tu satisfacción es nuestra prioridad." },
  ];

  return (
    <>
      {/* NAV */}
      <nav className={`nav ${navScrolled ? "scrolled" : "top"}`} id="nav">
        <div className="nav-inner">
          <a href="#inicio" className="brand"><img src="/logo.png" alt="Garden Eco Pool" /><span>Garden <b>Eco Pool</b></span></a>
          <ul className={`nav-links ${menuOpen ? "open" : ""}`} id="navLinks" onClick={() => setMenuOpen(false)}>
            <li><a href="#servicios">Servicios</a></li>
            <li><a href="#nosotros">Nosotros</a></li>
            <li><a href="#resenas">Reseñas</a></li>
            <li><a href="#proyectos">Proyectos</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="tel:+34687537441" className="nav-phone">📞 687 537 441</a></li>
            <li><a href="#contacto" className="btn btn-primary">Pedir presupuesto</a></li>
          </ul>
          <button className="burger" id="burger" onClick={() => setMenuOpen((o) => !o)} aria-label="Menú"><span></span><span></span><span></span></button>
        </div>
      </nav>
      
      {/* HERO */}
      <header className="hero" id="inicio">
        <div className="hero-bg" ref={heroBgRef}><img src="/hero.svg" alt="Piscina con jardín cuidado" /></div>
        <div className="wrap hero-content">
          <span className="eyebrow reveal" style={{"color": "var(--green-light)"}}>Vélez-Málaga · Málaga · Costa del Sol</span>
          <h1 className="reveal d1">Tu piscina y tu jardín <em>perfectos</em> todo el año, sin preocupaciones</h1>
          <p className="lead reveal d2">Mantenimiento profesional de piscinas y jardines, reformas integrales y servicios para comunidades. Soluciones eficientes, sostenibles y a medida.</p>
          <div className="hero-cta reveal d3">
            <a href="#contacto" className="btn btn-primary">Pedir presupuesto gratis</a>
            <a href="https://wa.me/34687537441" className="btn btn-ghost">💬 Escríbenos por WhatsApp</a>
          </div>
        </div>
        </header>
      
      {/* TRUST */}
      <section className="trust">
        <div className="trust-inner">
          <div className="trust-item reveal"><span className="num">+<b>426</b></span><span className="lbl">Proyectos realizados</span></div>
          <div className="trust-item reveal d1"><span className="num">+<b>400</b></span><span className="lbl">Clientes satisfechos</span></div>
          <div className="trust-item reveal d2"><span className="num"><b>3</b></span><span className="lbl">Años de experiencia</span></div>
          <div className="trust-item reveal d3"><span className="num"><b>✓</b></span><span className="lbl">Presupuesto sin compromiso</span></div>
        </div>
      </section>
      
      {/* SERVICES */}
      <section className="block services" id="servicios">
        <div className="wrap">
          <div className="sec-head center reveal">
            <span className="eyebrow">Lo que hacemos</span>
            <h2>Servicios pensados para que no tengas que preocuparte de nada</h2>
            <p>Cuidamos tus espacios exteriores e interiores con un servicio integral, profesional y cercano.</p>
          </div>
          <div className="svc-grid">
            <article className="svc-card s1 reveal">
              <div className="ic">💧</div>
              <h3>Mantenimiento de piscinas</h3>
              <p>Limpieza del vaso, control del agua, filtración, cloración y prevención de averías. Agua siempre limpia y cristalina.</p>
              <a href="#contacto" className="more">Pedir presupuesto →</a>
            </article>
            <article className="svc-card s2 reveal d1">
              <div className="ic">🌿</div>
              <h3>Jardinería integral</h3>
              <p>Poda, césped natural y artificial, riego automático y control de plagas. Jardines sanos durante todo el año.</p>
              <a href="#contacto" className="more">Pedir presupuesto →</a>
            </article>
            <article className="svc-card s3 reveal d2">
              <div className="ic">🏠</div>
              <h3>Reformas integrales</h3>
              <p>Reformas parciales o completas en viviendas, locales y comunidades. Acabados duraderos y de calidad.</p>
              <a href="#contacto" className="more">Pedir presupuesto →</a>
            </article>
            <article className="svc-card s4 reveal">
              <div className="ic">🏢</div>
              <h3>Comunidades de vecinos</h3>
              <p>Mantenimiento de zonas comunes, piscinas y jardines para urbanizaciones y complejos turísticos.</p>
              <a href="#contacto" className="more">Pedir presupuesto →</a>
            </article>
            <article className="svc-card s5 reveal d1">
              <div className="ic">⚡</div>
              <h3>Electricidad</h3>
              <p>Instalaciones, reparaciones, iluminación LED y sistemas eléctricos para piscinas y exteriores.</p>
              <a href="#contacto" className="more">Pedir presupuesto →</a>
            </article>
            <article className="svc-card reveal d2" style={{"background": "linear-gradient(135deg,var(--green),var(--green-deep))", "display": "flex", "flexDirection": "column", "justifyContent": "center", "alignItems": "flex-start"}}>
              <h3 style={{"fontSize": "1.7rem"}}>¿No ves lo que buscas?</h3>
              <p style={{"marginBottom": "20px"}}>Cuéntanos qué necesitas. Hacemos soluciones a medida para cada cliente.</p>
              <a href="#contacto" className="btn btn-ghost" style={{"borderColor": "#fff"}}>Consúltanos sin compromiso</a>
            </article>
          </div>
        </div>
      </section>
      
      {/* WHY */}
      <section className="block why" id="nosotros">
        <div className="wrap why-grid">
          <div className="reveal">
            <span className="eyebrow">Por qué elegirnos</span>
            <h2>Profesionalidad, confianza y compromiso en cada proyecto</h2>
            <div className="why-points">
              <div className="why-point"><div className="pic">👷</div><div><h4>Equipo cualificado</h4><p>Profesionales con experiencia en piscinas, jardinería, reformas y electricidad.</p></div></div>
              <div className="why-point"><div className="pic">🔍</div><div><h4>Diagnóstico gratuito</h4><p>Visita personalizada para evaluar tu espacio y proponerte la mejor solución, sin compromiso.</p></div></div>
              <div className="why-point"><div className="pic">⭐</div><div><h4>Materiales de primera</h4><p>Trabajamos con materiales contrastados y tecnología avanzada para resultados duraderos.</p></div></div>
              <div className="why-point"><div className="pic">🛡️</div><div><h4>Garantía en los trabajos</h4><p>Respondemos por la calidad de cada servicio. Tu satisfacción es nuestra prioridad.</p></div></div>
            </div>
          </div>
          <div className="why-visual reveal d2">
            <img src="/why.svg" alt="Trabajo profesional" />
            <div className="why-badge"><div className="stars">★★★★★</div><p>"Nos han prestado servicios de mantenimiento en nuestra comunidad: jardinería y tratamiento de la piscina muy eficientes. Trabajo profesional, buen servicio y buen precio."</p><span style={{"display": "block", "marginTop": "10px", "fontFamily": "'Outfit'", "fontStyle": "normal", "fontWeight": "600", "fontSize": ".85rem", "color": "var(--green-deep)"}}>— Francisco Rodríguez · Google</span></div>
          </div>
        </div>
      </section>
      
      {/* PROCESS */}
      <section className="block process">
        <div className="wrap">
          <div className="sec-head center reveal">
            <span className="eyebrow">Así de fácil</span>
            <h2>Pedir tu presupuesto es muy sencillo</h2>
          </div>
          <div className="proc-grid">
            <div className="proc-card reveal"><span className="step">01</span><h4>Contactas</h4><p>Nos escribes por WhatsApp o rellenas el formulario con lo que necesitas.</p></div>
            <div className="proc-card reveal d1"><span className="step">02</span><h4>Visita y diagnóstico</h4><p>Vamos a ver tu espacio y evaluamos las necesidades. Gratis y sin compromiso.</p></div>
            <div className="proc-card reveal d2"><span className="step">03</span><h4>Presupuesto a medida</h4><p>Te damos una propuesta clara, ajustada a tu caso y a tu presupuesto.</p></div>
            <div className="proc-card reveal d3"><span className="step">04</span><h4>Ejecución</h4><p>Realizamos el trabajo cumpliendo plazos y, si quieres, nos encargamos del mantenimiento.</p></div>
          </div>
        </div>
      </section>
      
      {/* REVIEWS */}
      <section className="block reviews" id="resenas">
        <div className="wrap">
          <div className="sec-head center reveal">
            <span className="eyebrow">Lo que dicen nuestros clientes</span>
            <h2>Valorados con la máxima puntuación en Google</h2>
          </div>
          <div className="reviews-top reveal d1">
            <div className="g-rating">
              <span className="g-logo"><span className="b">G</span><span className="r">o</span><span className="y">o</span><span className="b">g</span><span className="g">l</span><span className="r">e</span></span>
              <span className="score">5,0</span>
              <span className="gstars">★★★★★</span>
              <span className="count">12 reseñas</span>
            </div>
          </div>
          <div className="rev-grid">
            <article className="rev-card reveal">
              <div className="rstars">★★★★★</div>
              <p className="rtext">"Nos han prestado servicios de mantenimiento en nuestra comunidad, tanto en jardinería como en tratamiento de la piscina, muy eficientes. Trabajo profesional, buen servicio y buen precio. Seguiremos trabajando con ellos."</p>
              <div className="rwho"><div className="ravatar">F</div><div><div className="rname">Francisco Rodríguez</div><div className="rmeta">Local Guide · Google</div></div></div>
            </article>
            <article className="rev-card reveal d1">
              <div className="rstars">★★★★★</div>
              <p className="rtext">"Contacté con ellos para la poda de una buganvilla en mi patio y quedé encantada. Los dos jardineros han sido muy profesionales, lo han dejado todo barrido y limpio. Un placer, sin duda los volveré a llamar."</p>
              <div className="rwho"><div className="ravatar">C</div><div><div className="rname">Cristina G.P.</div><div className="rmeta">Google</div></div></div>
            </article>
            <article className="rev-card reveal d2">
              <div className="rstars">★★★★★</div>
              <p className="rtext">"Excelente servicio al cliente. Siempre atentos y dispuestos a ayudar. Competentes en instalación, reparación y consejos en variadas áreas: piscina, casa, jardín, instalación eléctrica… Los recomendamos absolutamente."</p>
              <div className="rwho"><div className="ravatar">S</div><div><div className="rname">Solo Hay Una</div><div className="rmeta">Local Guide · Google</div></div></div>
            </article>
            <article className="rev-card reveal">
              <div className="rstars">★★★★★</div>
              <p className="rtext">"Fernando y Rubén son profesionales, trabajadores y honrados. Todo un placer contar con su ayuda para un montón de cosas, no sólo las labores de la finca sino también fontanería, electricidad, albañilería… Totalmente recomendables."</p>
              <div className="rwho"><div className="ravatar">V</div><div><div className="rname">Victoria Alma</div><div className="rmeta">Google</div></div></div>
            </article>
            <article className="rev-card reveal d1">
              <div className="rstars">★★★★★</div>
              <p className="rtext">"Maravilloso servicio. Fernando y su equipo son súper atentos y profesionales, súper contentos con el resultado del trabajo que realizaron. Los recomendamos muchísimo."</p>
              <div className="rwho"><div className="ravatar">X</div><div><div className="rname">Ximena Sula</div><div className="rmeta">Google</div></div></div>
            </article>
            <article className="rev-card reveal d2">
              <div className="rstars">★★★★★</div>
              <p className="rtext">"En mi comunidad han hecho muchos trabajos. Bien realizados, rápidos y económicos. Un acierto cada vez que se les contrata."</p>
              <div className="rwho"><div className="ravatar">C</div><div><div className="rname">Cristóbal A.</div><div className="rmeta">Google</div></div></div>
            </article>
          </div>
        </div>
      </section>
      
      {/* GALLERY */}
      <section className="block gallery" id="proyectos">
        <div className="wrap">
          <div className="sec-head center reveal">
            <span className="eyebrow" style={{"color": "var(--green-light)"}}>Nuestro trabajo</span>
            <h2>Proyectos que hablan por nosotros</h2>
            <p>Una muestra de piscinas, jardines y espacios que hemos transformado.</p>
          </div>
          <div className="gal-grid">
            <div className="gal-item tall reveal"><img src="/gal-pool.svg" alt="" /></div>
            <div className="gal-item wide reveal d1"><img src="/gal-garden.svg" alt="" /></div>
            <div className="gal-item reveal d2"><img src="/gal-terrace.svg" alt="" /></div>
            <div className="gal-item reveal"><img src="/gal-garden.svg" alt="" /></div>
            <div className="gal-item wide reveal d1"><img src="/gal-aerial.svg" alt="" /></div>
            <div className="gal-item tall reveal d2"><img src="/gal-pool.svg" alt="" /></div>
            <div className="gal-item reveal"><img src="/gal-terrace.svg" alt="" /></div>
            <div className="gal-item reveal d1"><img src="/gal-garden.svg" alt="" /></div>
          </div>
        </div>
      </section>
      
      {/* ZONE */}
      <section className="block zone">
        <div className="wrap zone-inner">
          <div className="reveal">
            <span className="eyebrow">Dónde trabajamos</span>
            <h2>Vélez-Málaga, Málaga y toda la Costa del Sol</h2>
            <p style={{"color": "#52606b", "fontWeight": "300", "fontSize": "1.05rem"}}>Damos servicio a particulares, comunidades y empresas en Vélez-Málaga y municipios cercanos. ¿No estás seguro de si llegamos a tu zona? Pregúntanos.</p>
            <div className="zone-list">
              <span>Vélez-Málaga</span><span>Torre del Mar</span><span>Benajarafe</span><span>Rincón de la Victoria</span><span>Nerja</span><span>Torrox</span><span>Málaga capital</span><span>Algarrobo</span>
            </div>
          </div>
          <div className="zone-map reveal d2">
            <iframe src="https://www.google.com/maps?q=Cortijo+El+Le%C3%B3n+31+29790+V%C3%A9lez-M%C3%A1laga&output=embed" loading="lazy"></iframe>
          </div>
        </div>
      </section>
      
      {/* FAQ */}
      <section className="block faq" id="faq">
        <div className="wrap">
          <div className="sec-head center reveal">
            <span className="eyebrow">Dudas frecuentes</span>
            <h2>Resolvemos tus preguntas</h2>
          </div>
          <div className="faq-wrap reveal d1">
            {faqs.map((f, i) => (
              <div className={`faq-item ${openFaq === i ? "open" : ""}`} key={i}>
                <button className="faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  {f.q}<span className="pm">+</span>
                </button>
                <div className="faq-a" style={{ maxHeight: openFaq === i ? "300px" : "0" }}>
                  <p>{f.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CONTACT */}
      <section className="block contact" id="contacto">
        <div className="wrap contact-grid">
          <div className="reveal">
            <span className="eyebrow" style={{"color": "var(--green-light)"}}>Hablemos</span>
            <h2>¿Hablamos sobre tu próximo proyecto?</h2>
            <p className="lead">Cuéntanos qué necesitas y te responderemos lo antes posible con una solución personalizada y sin compromiso.</p>
            <div className="contact-info">
              <a href="tel:+34687537441" className="ci-item"><div className="ic">📞</div><div className="t"><small>Teléfono</small><b>+34 687 537 441</b></div></a>
              <a href="https://wa.me/34687537441" className="ci-item"><div className="ic">💬</div><div className="t"><small>WhatsApp</small><b>Respuesta rápida</b></div></a>
              <a href="mailto:info@gardenecopool.es" className="ci-item"><div className="ic">✉️</div><div className="t"><small>Email</small><b>info@gardenecopool.es</b></div></a>
              <div className="ci-item"><div className="ic">📍</div><div className="t"><small>Dirección</small><b>Cortijo El León, 31 · Vélez-Málaga</b></div></div>
            </div>
          </div>
          <div className="form-card reveal d2">
            <h3>Pide tu presupuesto gratis</h3>
            <p className="sub">Rellena estos datos y te escribimos enseguida por WhatsApp.</p>
            <div className="fld"><label>Nombre</label><input type="text" placeholder="Tu nombre" value={form.nombre} onChange={(e) => setForm({ ...form, nombre: e.target.value })} /></div>
            <div className="fld"><label>Teléfono</label><input type="tel" placeholder="Tu teléfono" value={form.tel} onChange={(e) => setForm({ ...form, tel: e.target.value })} /></div>
            <div className="fld"><label>¿Qué servicio necesitas?</label><select value={form.servicio} onChange={(e) => setForm({ ...form, servicio: e.target.value })}><option>Mantenimiento de piscina</option><option>Jardinería</option><option>Reforma</option><option>Servicio para comunidad</option><option>Electricidad</option><option>Otro / No estoy seguro</option></select></div>
            <div className="fld"><label>Mensaje (opcional)</label><textarea placeholder="Cuéntanos un poco sobre lo que necesitas..." value={form.msg} onChange={(e) => setForm({ ...form, msg: e.target.value })}></textarea></div>
            <button className="btn btn-wa" onClick={sendWhatsApp}>💬 Enviar por WhatsApp</button>
            <p className="form-note">Al enviar se abrirá WhatsApp con tu mensaje ya preparado.</p>
          </div>
        </div>
      </section>
      
      {/* FOOTER */}
      <footer>
        <div className="wrap">
          <div className="foot-grid">
            <div>
              <div className="foot-brand"><img src="/logo.png" alt="Garden Eco Pool" /><span>Garden <b>Eco Pool</b></span></div>
              <p className="foot-desc">Especialistas en mantenimiento de piscinas, jardinería, reformas y electricidad en Vélez-Málaga y la Costa del Sol. Soluciones eficientes, sostenibles y a medida.</p>
            </div>
            <div className="foot-col">
              <h5>Servicios</h5>
              <ul><li><a href="#servicios">Piscinas</a></li><li><a href="#servicios">Jardinería</a></li><li><a href="#servicios">Reformas</a></li><li><a href="#servicios">Comunidades</a></li><li><a href="#servicios">Electricidad</a></li></ul>
            </div>
            <div className="foot-col">
              <h5>Contacto</h5>
              <ul><li><a href="tel:+34687537441">+34 687 537 441</a></li><li><a href="mailto:info@gardenecopool.es">info@gardenecopool.es</a></li><li><a href="https://wa.me/34687537441">WhatsApp</a></li><li>Cortijo El León, 31<br />29790 Vélez-Málaga</li></ul>
            </div>
          </div>
          <div className="foot-bottom">
            <span>© 2026 Garden Eco Pool. Todos los derechos reservados.</span>
            <div><a href="/privacidad">Política de privacidad</a><a href="/cookies">Cookies</a><a href="/aviso-legal">Aviso legal</a></div>
          </div>
        </div>
      </footer>
      
      <a href="https://wa.me/34687537441" className="wa-float" aria-label="WhatsApp">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="#fff"><path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.945C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
      </a>
    </>
  );
}
