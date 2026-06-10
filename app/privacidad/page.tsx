import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Política de privacidad — Garden Eco Pool",
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <LegalLayout title="Política de privacidad">
      <p>Garden Eco Pool se compromete a proteger la privacidad de los usuarios y a tratar sus datos personales conforme al Reglamento (UE) 2016/679 (RGPD) y a la Ley Orgánica 3/2018 (LOPDGDD).</p>
      
      <h2>1. Responsable del tratamiento</h2>
      <div className="box">
      <p><strong>Responsable:</strong> GARDEN ECO POOL S.L. — CIF B22598569<br />
      <strong>Dirección:</strong> Cortijo El León, 31, 29790 Vélez-Málaga (Málaga)<br />
      <strong>Email:</strong> info@gardenecopool.es · <strong>Teléfono:</strong> +34 687 537 441</p>
      </div>
      
      <h2>2. ¿Qué datos recogemos y con qué finalidad?</h2>
      <p>A través del formulario de contacto, recogemos los datos que el usuario nos facilita voluntariamente (nombre, teléfono y, en su caso, el contenido del mensaje) con la finalidad de atender su solicitud de presupuesto o información y poder contactar con él.</p>
      <p>El envío del formulario redirige a la aplicación WhatsApp para que el usuario inicie la conversación con nosotros. El tratamiento de los mensajes intercambiados a través de WhatsApp se rige adicionalmente por la política de privacidad de dicha plataforma.</p>
      
      <h2>3. Legitimación</h2>
      <p>La base legal para el tratamiento es el consentimiento del usuario, que se entiende otorgado al cumplimentar y enviar voluntariamente el formulario, así como el interés legítimo en atender las consultas recibidas.</p>
      
      <h2>4. Conservación de los datos</h2>
      <p>Los datos se conservarán durante el tiempo necesario para atender la solicitud y, posteriormente, durante los plazos legalmente exigibles. Una vez dejen de ser necesarios, se suprimirán de forma segura.</p>
      
      <h2>5. Destinatarios</h2>
      <p>No se cederán datos a terceros, salvo obligación legal. La comunicación a través de WhatsApp implica el uso de un servicio prestado por Meta Platforms, Inc., con sus propias condiciones.</p>
      
      <h2>6. Derechos del usuario</h2>
      <p>El usuario puede ejercer en cualquier momento sus derechos de acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad, dirigiéndose por escrito a info@gardenecopool.es, indicando el derecho que desea ejercer. Asimismo, tiene derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es) si considera que sus datos no han sido tratados correctamente.</p>
      
      <h2>7. Seguridad</h2>
      <p>Aplicamos las medidas técnicas y organizativas necesarias para garantizar la seguridad de los datos personales y evitar su alteración, pérdida o acceso no autorizado.</p>
    </LegalLayout>
  );
}
