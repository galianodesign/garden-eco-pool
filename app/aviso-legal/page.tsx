import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Aviso legal — Garden Eco Pool",
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <LegalLayout title="Aviso legal">
      <p>En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se facilitan a continuación los datos identificativos del titular de este sitio web.</p>
      
      <div className="box">
      <p><strong>Titular:</strong> <span className="todo">[DENOMINACIÓN SOCIAL S.L.]</span><br />
      <strong>CIF:</strong> <span className="todo">[CIF]</span><br />
      <strong>Domicilio social:</strong> Cortijo León, 31, 29790 Vélez-Málaga (Málaga)<br />
      <strong>Correo electrónico:</strong> info@gardenecopool.es<br />
      <strong>Teléfono:</strong> +34 687 537 441<br />
      <strong>Datos registrales:</strong> Inscrita en el Registro Mercantil de Málaga, <span className="todo">[Tomo, Folio, Hoja, Inscripción]</span></p>
      </div>
      
      <h2>1. Objeto</h2>
      <p>El presente aviso legal regula el uso del sitio web gardenecopool.es (en adelante, "el sitio web"), cuyo titular es la entidad indicada anteriormente. La navegación por el sitio web atribuye la condición de usuario e implica la aceptación plena de todas las cláusulas recogidas en este aviso legal.</p>
      
      <h2>2. Condiciones de uso</h2>
      <p>El usuario se compromete a hacer un uso adecuado de los contenidos y servicios del sitio web, y a no emplearlos para incurrir en actividades ilícitas o contrarias a la buena fe y al ordenamiento legal. Queda prohibido difundir contenidos de carácter ilícito, lesivo o que atenten contra los derechos de terceros.</p>
      
      <h2>3. Propiedad intelectual e industrial</h2>
      <p>Todos los contenidos del sitio web (textos, fotografías, gráficos, imágenes, logotipos, diseño y código fuente) son titularidad de Garden Eco Pool o de terceros que han autorizado su uso, y están protegidos por la normativa de propiedad intelectual e industrial. Queda prohibida su reproducción, distribución o modificación sin autorización expresa del titular.</p>
      
      <h2>4. Responsabilidad</h2>
      <p>El titular no se hace responsable de los daños o perjuicios que pudieran derivarse del uso del sitio web, ni de la presencia de virus u otros elementos que pudieran alterar los sistemas informáticos del usuario. El titular se reserva el derecho a modificar, suspender o interrumpir el acceso al sitio web sin previo aviso.</p>
      
      <h2>5. Enlaces externos</h2>
      <p>El sitio web puede contener enlaces a páginas de terceros. El titular no asume responsabilidad alguna sobre el contenido o las prácticas de dichos sitios.</p>
      
      <h2>6. Legislación aplicable</h2>
      <p>El presente aviso legal se rige por la legislación española. Para la resolución de cualquier controversia, las partes se someten a los juzgados y tribunales del domicilio del titular, salvo que la normativa de consumidores establezca otro fuero.</p>
    </LegalLayout>
  );
}
