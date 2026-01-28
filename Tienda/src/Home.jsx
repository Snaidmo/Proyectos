import './Home.css'
export function Home() {
    return (
        <div className="home-container">
            <div className="home-content">
                <h1 id="Titulo">Bienvenidos a la Mayor Tienda de Tecnologia del Perú</h1>
                <p className="home-description">
                    Descubre los últimos productos tecnológicos de las mejores marcas del mundo. 
                    Ofrecemos garantía, envío rápido y precios competitivos. Tu tienda de confianza 
                    para equipos de cómputo, smartphones, accesorios y mucho más.
                </p>
                <button className="btn-comenzar">Comenzar</button>
            </div>
            <div className="home-image">
                <img src="https://via.placeholder.com/400x400?text=Tienda+Tecnologica" alt="Tienda Tecnológica" />
            </div>
        </div>
    )
} 