const ServiciosPage = () => {
    const servicios = [
      {
        title: "Automatización con IA",
        description: "Sistemas que procesan documentos, emails o tareas repetitivas usando LLMs.",
        icon: "🤖"
      },
      {
        title: "Chatbots Inteligentes",
        description: "Asistentes conversacionales entrenados para tu sector, con RAG y APIs específicas.",
        icon: "💬"
      },
      {
        title: "Auditorías de IA",
        description: "Diagnóstico de modelos existentes + plan de optimización.",
        icon: "🔍"
      }
    ];
  
    const tecnologias = [
      { name: "OpenAI", logo: "/openai.svg" },
      { name: "Azure AI", logo: "/azure.svg" },
      { name: "LangChain", logo: "/langchain.png" },
      { name: "Hugging Face", logo: "/huggingface.svg" },
      { name: "Deepseek", logo: "/deepseek.png" },
      { name: "Anthropic", logo: "/anthropic.svg" }
    ];
  
    return (
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-[#0A192F] text-center py-20 px-4">
          <h1 className="text-4xl font-bold text-[#00E0FF] mb-4">
            <span className="block">IA aplicada</span>
            <span className="text-[#B2FF59]">para negocios reales</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Especialista en implementar soluciones prácticas de Inteligencia Artificial para PYMES
          </p>
        </section>
  
        {/* Tecnologías */}
        <section className="py-16 bg-gradient-to-r from-[#00E0FF] to-[#0A192F]">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-white text-center mb-8">Tecnologías que domino</h2>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
              {tecnologias.map((tech, index) => (
                <div key={index} className="flex items-center justify-center p-4 bg-white rounded-lg shadow-lg hover:scale-105 transition-transform">
                  <img src={tech.logo} alt={tech.name} className="h-12 w-12 object-contain" />
                </div>
              ))}
            </div>
          </div>
        </section>
  
        {/* Servicios */}
        <section className="py-16 bg-[#F8FAFC]">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#0A192F] text-center mb-12">Servicios de IA</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {servicios.map((servicio, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-[#00E0FF]/20 hover:border-[#00E0FF] transition-all">
                  <div className="text-4xl mb-4">{servicio.icon}</div>
                  <h3 className="text-xl font-bold text-[#0A192F] mb-2">{servicio.title}</h3>
                  <p className="text-gray-600">{servicio.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
  
        {/* Casos de Éxito: contenidos removidos por limpieza de proyectos obsoletos */}
  
        {/* Contacto */}
        <section className="py-16 bg-[#F8FAFC]">
          <div className="max-w-2xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#0A192F] text-center mb-8">¿Listo para automatizar?</h2>
            <form className="space-y-6">
              <div>
                <input 
                  type="text" 
                  placeholder="Tu nombre"
                  className="w-full p-3 rounded-lg border border-[#00E0FF] focus:outline-none focus:ring-2 focus:ring-[#B2FF59]"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Email"
                  className="w-full p-3 rounded-lg border border-[#00E0FF] focus:outline-none focus:ring-2 focus:ring-[#B2FF59]"
                />
              </div>
              <div>
                <textarea
                  placeholder="Describe tu necesidad de IA"
                  rows={4}
                  className="w-full p-3 rounded-lg border border-[#00E0FF] focus:outline-none focus:ring-2 focus:ring-[#B2FF59]"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-[#B2FF59] text-[#0A192F] py-3 rounded-lg font-bold hover:bg-[#9EE548] transition-colors"
              >
                Enviar consulta
              </button>
            </form>
          </div>
        </section>
      </div>
    );
  };
  
  export default ServiciosPage;