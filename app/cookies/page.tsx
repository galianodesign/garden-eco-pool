import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Política de cookies — Garden Eco Pool",
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <LegalLayout title="Política de cookies">
      <p>Esta página web utiliza exclusivamente cookies técnicas necesarias para su correcto funcionamiento. A continuación se explica qué son las cookies y qué uso hacemos de ellas.</p>
      
      <h2>1. ¿Qué son las cookies?</h2>
      <p>Una cookie es un pequeño archivo de texto que un sitio web almacena en el navegador del usuario cuando lo visita. Sirven para que la página funcione correctamente o para recordar información sobre la visita.</p>
      
      <h2>2. Cookies que utilizamos</h2>
      <p>Este sitio web utiliza <strong>únicamente cookies técnicas y necesarias</strong>, que permiten la navegación y el uso de las funcionalidades básicas de la página. Estas cookies están exentas del deber de consentimiento conforme al artículo 22.2 de la LSSI-CE, por ser imprescindibles para la prestación del servicio expresamente solicitado por el usuario.</p>
      <div className="box">
      <p><strong>No utilizamos</strong> cookies de análisis, publicidad, seguimiento ni perfiles. No recopilamos información sobre tu navegación con fines estadísticos ni comerciales.</p>
      </div>
      
      <h2>3. Cookies de terceros</h2>
      <p>Al pulsar los botones de contacto, podrás ser redirigido a servicios externos (como WhatsApp o el mapa de Google Maps integrado). Estos servicios pueden instalar sus propias cookies, sujetas a las políticas de privacidad de sus respectivos proveedores.</p>
      
      <h2>4. Gestión de cookies</h2>
      <p>El usuario puede configurar su navegador para aceptar, bloquear o eliminar las cookies instaladas. A continuación, los enlaces de ayuda de los navegadores más comunes:</p>
      <ul>
      <li>Google Chrome</li>
      <li>Mozilla Firefox</li>
      <li>Safari</li>
      <li>Microsoft Edge</li>
      </ul>
      <p>Ten en cuenta que el bloqueo de las cookies técnicas puede afectar al correcto funcionamiento de la web.</p>
      
      <h2>5. Cambios futuros</h2>
      <p>Si en el futuro se incorporan cookies de análisis u otras no esenciales, se actualizará esta política y se solicitará el consentimiento previo del usuario mediante un sistema de aviso de cookies.</p>
    </LegalLayout>
  );
}
