import { Component } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {
  visionMision = `
  En Máquinas de Gimnasio Express, nuestra visión es transformar vidas facilitando el acceso a equipos de gimnasio de alta calidad. Nos esforzamos por ofrecer soluciones innovadoras que promuevan la salud y el bienestar, apoyando a nuestros clientes en su búsqueda de una vida activa y saludable.
`;

  historia = `
  Fundada en 2010 por entusiastas del fitness, Máquinas de Gimnasio Express comenzó como un pequeño negocio local en la ciudad de Springfield. Con el tiempo, hemos crecido y nos hemos convertido en un referente nacional en la venta de equipos de gimnasio, manteniendo siempre nuestro compromiso con la calidad y la satisfacción del cliente.
`;

  valores = [
    'Calidad: Nos comprometemos a ofrecer equipos de gimnasio de la más alta calidad, garantizando durabilidad y rendimiento.',
    'Excelencia en el Servicio: Nuestro equipo está dedicado a proporcionar un servicio al cliente excepcional, brindando asesoramiento experto y soluciones personalizadas.',
    'Innovación: Buscamos constantemente nuevas tecnologías y tendencias en el mercado para ofrecer a nuestros clientes las últimas innovaciones en equipos de fitness.',
    'Integridad: Operamos con honestidad y transparencia en todas nuestras relaciones comerciales y operaciones.'
  ];

  equipo = `
  Detrás de Máquinas de Gimnasio Express hay un equipo apasionado y experimentado que está comprometido con el éxito de nuestros clientes. Desde nuestros consultores de ventas hasta nuestros técnicos de servicio, todos comparten la misma dedicación a proporcionar una experiencia de compra y uso de equipos excepcional.
`;
}
