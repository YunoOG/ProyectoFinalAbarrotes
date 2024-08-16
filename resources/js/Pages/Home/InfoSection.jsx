import React from 'react';

const InfoSection = () => {
    return (
        <section className="sectionPhone" id="sectionPhone">
            <div className="containerPhone">
                <div className="phone-section">
                    <div className="phone-mockup">
                        <img src="/img/phone-mockup.png" alt="Phone Mockup" />
                    </div>
                </div>
                <div className="text-section">
                    <h1>Nuestros <span className="highlight">Servicios</span></h1>
                    <ul className="features-list">
                        <li>Surtido de Productos Frescos
                            <p>"Te ofrecemos una amplia variedad de productos frescos, desde frutas y verduras hasta carnes y lácteos, seleccionados con cuidado para que siempre encuentres lo mejor."</p>
                        </li>
                        <li>Pedidos en Línea
                            <p>"Haz tu compra desde la comodidad de tu hogar a través de nuestra tienda en línea. Simplemente selecciona los productos que necesitas, elige tu método de pago, y nosotros nos encargamos del resto."</p>
                        </li>
                        <li>Recogida en Tienda
                            <p>"¿Prefieres hacer tu pedido en línea pero recogerlo en la tienda? Ofrecemos un servicio de recogida rápida. Haz tu pedido, y estará listo para ti en poco tiempo, sin necesidad de hacer fila."</p>
                        </li>
                        <li>Asesoramiento Personalizado
                            <p>"¿Tienes dudas sobre qué producto elegir o necesitas recomendaciones? Nuestro equipo está aquí para ayudarte a encontrar lo que necesitas. No dudes en pedir consejo a nuestros amables empleados."</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default InfoSection;
