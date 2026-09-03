import { esArticles } from "./i18n-es-articles";
import { esSpecialty } from "./i18n-es-specialty";

/** Spanish translations for site chrome, homepage, forms, tools and page copy. */
const core: Record<string, string> = {
  // Navigation
  Home: "Inicio",
  "Mortgage Solutions": "Soluciones Hipotecarias",
  "Loan Programs": "Programas de Préstamo",
  "Home Buyers": "Compradores",
  Investors: "Inversionistas",
  "Service Areas": "Áreas de Servicio",
  "About Jorge": "Sobre Jorge",
  Calculator: "Calculadora",
  Tools: "Herramientas",
  Resources: "Recursos",
  "Free Mortgage Quote": "Cotización Gratuita",
  Contact: "Contacto",
  "Toggle menu": "Abrir menú",
  "Get My Free Quote": "Obtener Mi Cotización",
  "Find your path": "Encuentre su camino",
  Breadcrumb: "Ruta de navegación",
  About: "Nosotros",
  Navigate: "Navegación",
  Compliance: "Cumplimiento",
  "Get in Touch": "Contáctenos",

  // Hero
  "North Carolina Mortgage Broker": "Bróker Hipotecario en Carolina del Norte",
  "Your Next Home": "Su Próxima Casa",
  "Starts With the": "Comienza Con la",
  "Right Mortgage.": "Hipoteca Correcta.",
  "Whether you're purchasing a home, refinancing, or exploring your next investment property, Premier Lending NC helps you navigate your financing options with clarity and confidence.":
    "Ya sea que esté comprando una casa, refinanciando o explorando su próxima propiedad de inversión, Premier Lending NC le ayuda a entender sus opciones de financiamiento con claridad y confianza.",
  "Get My Free Mortgage Quote": "Obtener Mi Cotización Gratuita",
  "Get my free mortgage quote": "Obtener mi cotización gratuita",
  "Calculate My Payment": "Calcular Mi Pago",
  "Home Purchase": "Compra de Vivienda",
  Refinance: "Refinanciamiento",
  Investment: "Inversión",
  "Start with a conversation. No pressure. No guesswork.":
    "Comience con una conversación. Sin presión. Sin adivinanzas.",

  // Trust bar / journey strip
  "Your Financing Journey": "Su Proceso de Financiamiento",
  "Understand your options": "Comprenda sus opciones",
  "Explore your buying power": "Explore su poder de compra",
  "Build your financing strategy": "Construya su estrategia de financiamiento",
  "Move toward closing": "Avance hacia el cierre",
  "North Carolina": "Carolina del Norte",
  Focused: "Enfocados",
  Personalized: "Guía",
  Guidance: "Personalizada",
  Residential: "Residencial",
  "& Investment": "e Inversión",
  Strategic: "Financiamiento",
  Financing: "Estratégico",

  // Find your path
  "Find Your Path": "Encuentre Su Camino",
  "Where are you": "¿En qué punto",
  "in the process?": "del proceso está?",
  "Select the situation that sounds closest to yours and we'll point you toward the right next step.":
    "Seleccione la situación más parecida a la suya y le indicaremos el siguiente paso adecuado.",
  "First-Time Buyer": "Comprador Primerizo",
  "Buying a Home": "Comprando una Casa",
  Refinancing: "Refinanciando",
  "Real Estate Investor": "Inversionista Inmobiliario",
  "Self-Employed": "Trabajador Independiente",
  "Not Sure Where to Start": "No Sé Por Dónde Empezar",
  "Not Sure": "No Estoy Seguro",
  "Start with what you can plan for.": "Comience con lo que sí puede planificar.",
  "Understand the steps involved in preparing for a first purchase, from documentation to estimated monthly costs.":
    "Comprenda los pasos para prepararse para una primera compra, desde la documentación hasta los costos mensuales estimados.",
  "Know your options before you offer.": "Conozca sus opciones antes de ofertar.",
  "Review the financing categories that may apply to your purchase so you can move with a clear plan.":
    "Revise las categorías de financiamiento que pueden aplicar a su compra para avanzar con un plan claro.",
  "Re-evaluate an existing loan.": "Reevalúe un préstamo existente.",
  "Look at how a refinance could fit your current goals, and what factors are worth reviewing first.":
    "Vea cómo un refinanciamiento podría encajar con sus metas actuales y qué factores conviene revisar primero.",
  "Financing as part of the strategy.": "El financiamiento como parte de la estrategia.",
  "Discuss how structure, timing and financing can factor into acquiring or refinancing investment property.":
    "Converse sobre cómo la estructura, el momento y el financiamiento influyen al adquirir o refinanciar propiedades de inversión.",
  "Non-traditional income, reviewed carefully.":
    "Ingresos no tradicionales, revisados con cuidado.",
  "Business owners and self-employed borrowers often need a closer look at documentation and structure.":
    "Los dueños de negocio y trabajadores independientes suelen necesitar una revisión más detallada de su documentación y estructura.",
  "Begin with a conversation.": "Comience con una conversación.",
  "If you're early in the process, a short discussion can help clarify what to look at first.":
    "Si está iniciando el proceso, una breve conversación puede aclarar qué revisar primero.",
  "First-time buyer guide": "Guía para compradores primerizos",
  "Estimate a monthly payment": "Estimar un pago mensual",
  "Home affordability calculator": "Calculadora de capacidad de compra",
  "See the buyer roadmap": "Ver la ruta del comprador",
  "Explore purchase financing": "Explorar financiamiento de compra",
  "Explore refinancing": "Explorar refinanciamiento",
  "Investment property financing": "Financiamiento de propiedad de inversión",
  "Refinancing overview": "Resumen de refinanciamiento",
  "Refinance break-even calculator": "Calculadora de punto de equilibrio",
  "Down payment calculator": "Calculadora de pago inicial",
  "Home buyer roadmap": "Ruta del comprador de vivienda",
  "Talk with Jorge": "Hablar con Jorge",
  "Talk With Jorge": "Hablar Con Jorge",
  "Loan programs": "Programas de préstamo",
  "Compare mortgage options": "Comparar opciones hipotecarias",
  "Payment calculator": "Calculadora de pagos",
  "Pre-approval overview": "Resumen de preaprobación",
  "Buyer resources": "Recursos para compradores",
  "NC home buyer checklist": "Lista de verificación para compradores en NC",
  "Resource center": "Centro de recursos",
  "Mortgage tools": "Herramientas hipotecarias",
  "Compare programs": "Comparar programas",
  "Browse resources": "Ver recursos",
  "Start a conversation": "Iniciar una conversación",
  "Estimate a payment": "Estimar un pago",

  // Difference
  "The Premier Difference": "La Diferencia Premier",
  "Mortgages aren't": "Las hipotecas no son",
  "one-size-fits-all.": "iguales para todos.",
  "Your financing strategy should reflect where you are today—and where you're trying to go next.":
    "Su estrategia de financiamiento debe reflejar dónde está hoy—y hacia dónde quiere ir.",
  Understand: "Comprender",
  "We start by understanding your goals, financial picture and property plans.":
    "Comenzamos por entender sus metas, su panorama financiero y sus planes de propiedad.",
  Strategize: "Planificar",
  "We help you explore financing options that may fit your situation and objectives.":
    "Le ayudamos a explorar opciones de financiamiento que puedan ajustarse a su situación y objetivos.",
  "Move Forward": "Avanzar",
  "Once you understand your options, you can make your next move with greater confidence.":
    "Una vez que entienda sus opciones, podrá dar su siguiente paso con mayor confianza.",

  // Solutions
  "Financing Options": "Opciones de Financiamiento",
  "The right loan": "El préstamo correcto",
  "for the right move.": "para el paso correcto.",
  "Explore financing solutions designed for different homeownership and real-estate goals.":
    "Explore soluciones de financiamiento diseñadas para distintas metas de vivienda e inversión inmobiliaria.",
  "Explore financing solutions designed for different homeownership and real-estate goals. Program availability is confirmed individually.":
    "Explore soluciones de financiamiento diseñadas para distintas metas de vivienda e inversión inmobiliaria. La disponibilidad de cada programa se confirma de forma individual.",
  "Explore financing options for purchasing your next home.":
    "Explore opciones de financiamiento para comprar su próxima casa.",
  "Who it's for": "Para quién es",
  "Who this fits": "Para quién aplica",
  "Buyers with a property in mind or a search underway":
    "Compradores con una propiedad en mente o una búsqueda en curso",
  "Worth considering": "Vale la pena considerar",
  "Down payment, timeline and estimated carrying costs":
    "Pago inicial, cronograma y costos estimados de mantenimiento",
  "Explore Home Loans": "Explorar Préstamos de Vivienda",
  "Take the first step toward understanding your path to homeownership.":
    "Dé el primer paso para entender su camino hacia la compra de vivienda.",
  "Anyone purchasing their first property": "Quienes compran su primera propiedad",
  "Documentation, budgeting and the order of the steps":
    "Documentación, presupuesto y el orden de los pasos",
  "Start Here": "Comience Aquí",
  "Explore whether refinancing may align with your current financial goals.":
    "Explore si refinanciar puede alinearse con sus metas financieras actuales.",
  "Homeowners reviewing an existing mortgage":
    "Propietarios que revisan una hipoteca existente",
  "Costs, time horizon and your overall objective":
    "Costos, horizonte de tiempo y su objetivo general",
  "Explore Refinancing": "Explorar Refinanciamiento",
  "Investment Property": "Propiedad de Inversión",
  "Explore financing possibilities for acquiring additional real-estate assets.":
    "Explore posibilidades de financiamiento para adquirir más activos inmobiliarios.",
  "Investors buying or refinancing rental property":
    "Inversionistas que compran o refinancian propiedades de alquiler",
  "Property type, structure and long-term strategy":
    "Tipo de propiedad, estructura y estrategia a largo plazo",
  "Explore Investor Financing": "Explorar Financiamiento para Inversionistas",
  "Explore mortgage solutions for borrowers with non-traditional income profiles.":
    "Explore soluciones hipotecarias para prestatarios con perfiles de ingreso no tradicionales.",
  "Business owners, contractors and 1099 earners":
    "Dueños de negocio, contratistas y personas con ingresos 1099",
  "How income is documented and reviewed":
    "Cómo se documentan y revisan los ingresos",
  "Discuss Your Options": "Converse Sus Opciones",
  "Other Loan Solutions": "Otras Soluciones de Préstamo",
  "Discover additional financing options that may fit your circumstances.":
    "Descubra opciones de financiamiento adicionales que puedan ajustarse a sus circunstancias.",
  "Situations that don't fit a standard category":
    "Situaciones que no encajan en una categoría estándar",
  "What you're trying to accomplish, first":
    "Primero, lo que usted quiere lograr",
  "These categories describe general types of financing and are not offers of credit. Specific program availability, eligibility and terms are confirmed directly with Premier Lending NC and are subject to lender approval.":
    "Estas categorías describen tipos generales de financiamiento y no son ofertas de crédito. La disponibilidad, elegibilidad y términos específicos se confirman directamente con Premier Lending NC y están sujetos a la aprobación del prestamista.",

  // Signature CTA
  "Before you shop,": "Antes de buscar,",
  "know your options.": "conozca sus opciones.",
  "A stronger understanding of your financing position can help you approach your next property with greater confidence.":
    "Entender mejor su posición de financiamiento le permite acercarse a su próxima propiedad con mayor confianza.",
  "Start My Pre-Qualification": "Iniciar Mi Precalificación",
  "Speak With Jorge": "Hablar Con Jorge",

  // Journey
  "The Home Buyer Journey": "El Camino del Comprador",
  "From first conversation": "De la primera conversación",
  "to closing day.": "al día del cierre.",
  Discover: "Descubrir",
  "Tell us where you are and what you're trying to accomplish.":
    "Cuéntenos dónde está y qué quiere lograr.",
  "Get oriented: what the process looks like, and which financing categories may apply to your goal.":
    "Oriéntese: cómo es el proceso y qué categorías de financiamiento pueden aplicar a su meta.",
  "Explore loan programs": "Explorar programas de préstamo",
  Prepare: "Preparar",
  "Review your financing position and potential options.":
    "Revise su posición de financiamiento y las opciones posibles.",
  "Look at price range, down payment and estimated monthly cost before you start touring homes.":
    "Analice el rango de precio, el pago inicial y el costo mensual estimado antes de comenzar a visitar casas.",
  "Get Qualified": "Calificar",
  "Move forward with a clearer understanding of your financing.":
    "Avance con una comprensión más clara de su financiamiento.",
  "Share your details so your options can be reviewed and a pre-qualification conversation can begin.":
    "Comparta sus datos para revisar sus opciones e iniciar una conversación de precalificación.",
  Shop: "Buscar",
  "Work with your real-estate team to pursue the right property.":
    "Trabaje con su equipo inmobiliario para encontrar la propiedad adecuada.",
  "Search with a defined budget, then align your offer with the financing you've reviewed.":
    "Busque con un presupuesto definido y alinee su oferta con el financiamiento que ya revisó.",
  Close: "Cerrar",
  "Complete the final steps toward ownership.":
    "Complete los últimos pasos hacia la propiedad.",
  "Documentation is finalised, figures are confirmed, and the loan moves toward closing.":
    "Se finaliza la documentación, se confirman las cifras y el préstamo avanza hacia el cierre.",

  // North Carolina section
  "Financing across": "Financiamiento en todo",
  "North Carolina.": "Carolina del Norte.",
  "Every market in the state moves a little differently. The goal is the same everywhere: a financing plan you understand before you commit to it.":
    "Cada mercado del estado se comporta de forma distinta. La meta es la misma en todos: un plan de financiamiento que usted entienda antes de comprometerse.",
  "Start Your Conversation": "Inicie Su Conversación",
  "Statewide by design": "Cobertura estatal por diseño",
  "Premier Lending NC works with clients across North Carolina, from the Piedmont to the coast and the mountains.":
    "Premier Lending NC trabaja con clientes en toda Carolina del Norte, desde el Piedmont hasta la costa y las montañas.",
  "Local market context": "Contexto del mercado local",
  "Property taxes, insurance and HOA costs vary widely by county — those details belong in the conversation early.":
    "Los impuestos, el seguro y las cuotas de HOA varían mucho por condado — esos detalles deben conversarse desde el inicio.",
  "Remote-friendly process": "Proceso a distancia",
  "Conversations, document review and updates can happen by phone, email or video wherever you are in the state.":
    "Las conversaciones, la revisión de documentos y las actualizaciones pueden hacerse por teléfono, correo o video desde cualquier parte del estado.",
  "Service areas and licensed jurisdictions are confirmed directly with Premier Lending NC.":
    "Las áreas de servicio y las jurisdicciones con licencia se confirman directamente con Premier Lending NC.",

  // Investors
  "For Real-Estate Investors": "Para Inversionistas Inmobiliarios",
  "Your next property": "Su próxima propiedad",
  "deserves a strategy.": "merece una estrategia.",
  "Real estate investing is about more than finding a property. Financing, structure and timing can all play an important role in your strategy.":
    "Invertir en bienes raíces es más que encontrar una propiedad. El financiamiento, la estructura y el momento juegan un papel importante en su estrategia.",
  "Financing, structure and timing can all play an important role in your real-estate strategy.":
    "El financiamiento, la estructura y el momento juegan un papel importante en su estrategia inmobiliaria.",
  "Property Acquisition": "Adquisición de Propiedades",
  "Explore financing possibilities for your next property.":
    "Explore posibilidades de financiamiento para su próxima propiedad.",
  "Portfolio Growth": "Crecimiento del Portafolio",
  "Explore strategies for expanding your real-estate holdings.":
    "Explore estrategias para expandir su portafolio inmobiliario.",
  "Evaluate financing options for an existing property.":
    "Evalúe opciones de financiamiento para una propiedad existente.",
  "Investment Strategy": "Estrategia de Inversión",
  "Start a conversation about your broader real-estate goals.":
    "Inicie una conversación sobre sus metas inmobiliarias generales.",
  "Talk About Investment Financing": "Hablar Sobre Financiamiento de Inversión",
  "For Investors": "Para Inversionistas",
  "For investors": "Para inversionistas",
  "For Home Buyers": "Para Compradores de Vivienda",
  "Understanding your financing early can make the rest of the process clearer. Here's how the journey typically unfolds.":
    "Entender su financiamiento desde el principio hace que el resto del proceso sea más claro. Así suele desarrollarse el camino.",

  // Founder
  "Meet Your Mortgage Broker": "Conozca a Su Bróker Hipotecario",
  "Financing is personal.": "El financiamiento es personal.",
  "NC Mortgage Broker · Economic Consultant":
    "Bróker Hipotecario en NC · Consultor Económico",
  '"Buying property is one of the biggest financial decisions many people make. My goal is to make the financing side easier to understand, easier to navigate and aligned with what you\'re trying to accomplish."':
    '"Comprar una propiedad es una de las decisiones financieras más grandes que muchas personas toman. Mi meta es hacer que el financiamiento sea más fácil de entender, más fácil de recorrer y alineado con lo que usted quiere lograr."',
  "Whether you're purchasing a home or exploring your next investment opportunity, Premier Lending NC is built around personal guidance—not a one-size-fits-all approach.":
    "Ya sea que esté comprando una casa o explorando su próxima oportunidad de inversión, Premier Lending NC se basa en la orientación personal—no en un enfoque igual para todos.",
  "Premier Lending NC is built around personal guidance—not a one-size-fits-all approach.":
    "Premier Lending NC se basa en la orientación personal—no en un enfoque igual para todos.",
  "Connect With Jorge": "Conectar Con Jorge",

  // Calculator
  "Mortgage Calculator": "Calculadora Hipotecaria",
  "See the numbers.": "Vea los números.",
  "Adjust the inputs to see how price, down payment, rate and carrying costs shape an estimated monthly payment.":
    "Ajuste los valores para ver cómo el precio, el pago inicial, la tasa y los costos asociados forman un pago mensual estimado.",
  "Adjust the inputs to explore how price, down payment, rate and term can affect an estimated monthly payment.":
    "Ajuste los valores para explorar cómo el precio, el pago inicial, la tasa y el plazo afectan un pago mensual estimado.",
  "Your Numbers": "Sus Números",
  Reset: "Reiniciar",
  "Home Price": "Precio de la Vivienda",
  "Down Payment": "Pago Inicial",
  "Down payment": "Pago inicial",
  "% down": "% inicial",
  "Interest Rate": "Tasa de Interés",
  "Loan Term (years)": "Plazo del Préstamo (años)",
  "Property Taxes / yr": "Impuestos a la Propiedad / año",
  "Homeowners Insurance / yr": "Seguro de Vivienda / año",
  "HOA / mo": "HOA / mes",
  "Home Price slider": "Control de precio de la vivienda",
  "Down Payment slider": "Control de pago inicial",
  "Interest Rate slider": "Control de tasa de interés",
  "Loan Term (years) slider": "Control de plazo del préstamo",
  "Property Taxes / yr slider": "Control de impuestos a la propiedad",
  "Homeowners Insurance / yr slider": "Control de seguro de vivienda",
  "HOA / mo slider": "Control de cuota HOA",
  "Estimated Monthly Payment": "Pago Mensual Estimado",
  "Principal & Interest": "Capital e Intereses",
  Taxes: "Impuestos",
  Insurance: "Seguro",
  "Estimated Principal & Interest": "Capital e Intereses Estimados",
  "Estimated Taxes": "Impuestos Estimados",
  "Estimated Insurance": "Seguro Estimado",
  "Estimated HOA": "HOA Estimado",
  "Loan Amount": "Monto del Préstamo",
  "These figures are estimates for educational purposes only and are not a commitment to lend. Actual payments may include mortgage insurance and other costs.":
    "Estas cifras son estimaciones con fines educativos y no constituyen un compromiso de préstamo. Los pagos reales pueden incluir seguro hipotecario y otros costos.",
  "Discuss My Financing Options": "Conversar Mis Opciones de Financiamiento",

  // Lead funnel
  "Get Pre-Qualified": "Precalifíquese",
  "Six short steps. No credit pull, no obligation.":
    "Seis pasos breves. Sin consulta de crédito, sin compromiso.",
  "Step 1 of 6 · Your Goal": "Paso 1 de 6 · Su Meta",
  "Your Goal": "Su Meta",
  Goal: "Meta",
  Credit: "Crédito",
  Price: "Precio",
  Timeline: "Plazo",
  Complete: "Listo",
  "What are you looking to accomplish?": "¿Qué desea lograr?",
  "This helps frame the rest of the conversation.":
    "Esto ayuda a enmarcar el resto de la conversación.",
  "Buy a Home": "Comprar una Casa",
  "Buy an Investment Property": "Comprar una Propiedad de Inversión",
  "Just Exploring": "Solo Explorando",
  Continue: "Continuar",
  Back: "Atrás",
  "How would you describe your credit?": "¿Cómo describiría su crédito?",
  "An estimate is fine — nothing here triggers a credit check.":
    "Una estimación es suficiente — nada aquí genera una consulta de crédito.",
  "Excellent (740+)": "Excelente (740+)",
  "Good (700–739)": "Bueno (700–739)",
  "Fair (640–699)": "Regular (640–699)",
  "Building (below 640)": "En construcción (menos de 640)",
  "What price range are you considering?": "¿Qué rango de precio está considerando?",
  "A rough range is all we need to start.":
    "Un rango aproximado es suficiente para empezar.",
  "Under $250k": "Menos de $250k",
  "Over $1.2M": "Más de $1.2M",
  "Price Range": "Rango de Precio",
  "Price range": "Rango de precio",
  "How much are you planning to put down?": "¿Cuánto planea dar de pago inicial?",
  "Down payment shapes which programs are worth reviewing first.":
    "El pago inicial define qué programas conviene revisar primero.",
  "Less than 3%": "Menos del 3%",
  "When are you looking to move?": "¿Cuándo planea mudarse?",
  "Timing shapes what's worth reviewing first.":
    "El momento define qué conviene revisar primero.",
  "As Soon As Possible": "Lo Antes Posible",
  "How can we reach you?": "¿Cómo podemos comunicarnos con usted?",
  "Last step — then we'll take it from here.":
    "Último paso — nosotros nos encargamos desde aquí.",
  "First Name": "Nombre",
  "Last Name": "Apellido",
  Email: "Correo Electrónico",
  Phone: "Teléfono",
  "ZIP Code (optional)": "Código Postal (opcional)",
  "Contact preference": "Preferencia de contacto",
  "Preferred contact method": "Método de contacto preferido",
  Either: "Cualquiera",
  "Submitting…": "Enviando…",
  "Sending…": "Enviando…",
  "Choose the range that fits best.": "Elija el rango que mejor se ajuste.",
  "Select what you're looking to accomplish.": "Seleccione lo que desea lograr.",
  "Select an estimated price range.": "Seleccione un rango de precio estimado.",
  "Select a down payment range.": "Seleccione un rango de pago inicial.",
  "Select a timeline.": "Seleccione un plazo.",
  "Enter your first name.": "Ingrese su nombre.",
  "Enter your last name.": "Ingrese su apellido.",
  "Enter a valid email address.": "Ingrese un correo electrónico válido.",
  "Enter a valid phone number.": "Ingrese un número de teléfono válido.",
  "Enter a 5-digit ZIP code.": "Ingrese un código postal de 5 dígitos.",
  "Message is too long.": "El mensaje es demasiado largo.",
  "We couldn't submit your request. Please try again.":
    "No pudimos enviar su solicitud. Por favor intente de nuevo.",

  // Lead magnet
  "Free Resource": "Recurso Gratuito",
  "Buying in North Carolina?": "¿Va a comprar en Carolina del Norte?",
  "Start with the numbers.": "Comience con los números.",
  "The North Carolina Home Buyer Starter Guide":
    "Guía Inicial para Compradores en Carolina del Norte",
  "A simple guide to help you understand the major steps involved in preparing for a home purchase.":
    "Una guía sencilla para entender los pasos principales al prepararse para comprar una casa.",
  "What to organize before you start looking":
    "Qué organizar antes de comenzar a buscar",
  "How monthly costs are typically estimated":
    "Cómo se estiman normalmente los costos mensuales",
  "Questions worth asking early in the process":
    "Preguntas que vale la pena hacer al inicio del proceso",
  "Get the Free Guide": "Obtener la Guía Gratuita",
  "We'll only use your email to send the guide and occasional updates. No sensitive financial information is collected here.":
    "Solo usaremos su correo para enviarle la guía y actualizaciones ocasionales. Aquí no se recopila información financiera confidencial.",

  // FAQ
  FAQ: "Preguntas Frecuentes",
  Questions: "Preguntas",
  "Frequently asked": "Preguntas frecuentes",
  "Related questions": "Preguntas relacionadas",
  "Questions before you move forward?": "¿Preguntas antes de avanzar?",
  "How does mortgage pre-qualification work?":
    "¿Cómo funciona la precalificación hipotecaria?",
  "Pre-qualification is an early conversation about your goals, income, assets and credit profile. It helps you understand what financing options may be available. It is not an approval or a commitment to lend.":
    "La precalificación es una conversación inicial sobre sus metas, ingresos, activos y perfil de crédito. Le ayuda a entender qué opciones de financiamiento podrían estar disponibles. No es una aprobación ni un compromiso de préstamo.",
  "What information should I have ready?": "¿Qué información debo tener lista?",
  "A general sense of your income, employment history, monthly debts, savings available for a down payment and the type of property you're considering is a good starting point.":
    "Una idea general de sus ingresos, historial laboral, deudas mensuales, ahorros disponibles para el pago inicial y el tipo de propiedad que considera es un buen punto de partida.",
  "How much should I put down?": "¿Cuánto debo dar de pago inicial?",
  "Down payment requirements vary by program, property type and lender guidelines. The right amount depends on your goals, cash reserves and monthly payment comfort — not a single universal number.":
    "Los requisitos de pago inicial varían según el programa, el tipo de propiedad y las políticas del prestamista. La cantidad adecuada depende de sus metas, reservas y comodidad con el pago mensual — no de un número universal.",
  "What types of properties can I finance?": "¿Qué tipos de propiedades puedo financiar?",
  "Financing may be available for primary residences, second homes and investment properties, subject to program guidelines, property condition and lender approval.":
    "Puede haber financiamiento disponible para residencias principales, segundas viviendas y propiedades de inversión, sujeto a las reglas del programa, la condición de la propiedad y la aprobación del prestamista.",
  "Can self-employed borrowers apply?":
    "¿Pueden solicitar los trabajadores independientes?",
  "Yes. Self-employed and business-owner borrowers can apply. Documentation requirements differ from W-2 income, so it's helpful to discuss your income structure early.":
    "Sí. Los trabajadores independientes y dueños de negocio pueden solicitar. Los requisitos de documentación difieren del ingreso W-2, por lo que conviene conversar su estructura de ingresos desde el inicio.",
  "Can I finance an investment property?": "¿Puedo financiar una propiedad de inversión?",
  "Investment property financing may be available and typically follows different guidelines than owner-occupied financing, including down payment and reserve requirements.":
    "El financiamiento de propiedades de inversión puede estar disponible y suele seguir reglas distintas a las de vivienda propia, incluyendo pago inicial y reservas.",
  "Should I speak with a mortgage broker before finding a home?":
    "¿Debo hablar con un bróker hipotecario antes de encontrar una casa?",
  "Many buyers find it helpful. Understanding your financing position first can make property search and offer conversations clearer.":
    "Muchos compradores lo encuentran útil. Entender primero su posición de financiamiento hace más claras la búsqueda y las negociaciones.",
  "How long can the mortgage process take?":
    "¿Cuánto puede tardar el proceso hipotecario?",
  "Timelines vary based on the loan type, documentation, appraisal, title work and lender turn times. Your timeline will be discussed once your situation is reviewed.":
    "Los plazos varían según el tipo de préstamo, la documentación, el avalúo, el título y los tiempos del prestamista. Su cronograma se conversará una vez revisada su situación.",
  "Can I refinance an existing mortgage?": "¿Puedo refinanciar una hipoteca existente?",
  "Refinancing may be an option depending on your equity, credit profile, current loan and goals. Whether it makes sense is an individual analysis.":
    "Refinanciar puede ser una opción según su plusvalía, perfil de crédito, préstamo actual y metas. Si conviene o no es un análisis individual.",
  "What happens after I submit my information?":
    "¿Qué ocurre después de enviar mi información?",
  "A member of the Premier Lending NC team can review your request and follow up to discuss next steps. Submitting a form does not mean you are approved or pre-qualified.":
    "Un miembro del equipo de Premier Lending NC revisará su solicitud y le dará seguimiento para conversar los próximos pasos. Enviar un formulario no significa que esté aprobado o precalificado.",

  // Credentials
  Credibility: "Credibilidad",
  "What we can actually stand behind.": "Lo que realmente podemos respaldar.",
  "No invented statistics, no borrowed logos, no promises made before a lender has reviewed your file. Only what can be verified.":
    "Sin estadísticas inventadas, sin logos prestados, sin promesas antes de que un prestamista revise su expediente. Solo lo que se puede verificar.",
  Licensing: "Licencias",
  "Licensed North Carolina mortgage brokerage":
    "Correduría hipotecaria con licencia en Carolina del Norte",
  "Premier Lending NC operates as a mortgage brokerage in North Carolina. Company and individual NMLS identifiers are provided on request and on the licensing & disclosures page.":
    "Premier Lending NC opera como correduría hipotecaria en Carolina del Norte. Los identificadores NMLS de la empresa y personales se proporcionan a solicitud y en la página de licencias y divulgaciones.",
  "Broker Model": "Modelo de Bróker",
  "Multiple lenders, one point of contact": "Varios prestamistas, un solo contacto",
  "As a broker, Premier Lending NC reviews financing options across lending partners rather than a single in-house product menu — and tells you plainly what fits and what doesn't.":
    "Como bróker, Premier Lending NC revisa opciones de financiamiento entre varios socios prestamistas en lugar de un solo menú interno de productos — y le dice claramente qué le sirve y qué no.",
  "Fair Housing": "Vivienda Justa",
  "Equal Housing Opportunity": "Igualdad de Oportunidad en la Vivienda",
  "Every inquiry is reviewed under the same standards. No approval, rate or outcome is promised before a lender review is complete.":
    "Cada consulta se revisa con los mismos estándares. No se promete ninguna aprobación, tasa ni resultado antes de completar la revisión del prestamista.",
  Privacy: "Privacidad",
  "Information handled carefully": "Información tratada con cuidado",
  "Forms on this site never request Social Security numbers, account numbers or financial documents. A secure application system is provided when it's actually needed.":
    "Los formularios de este sitio nunca piden números de Seguro Social, números de cuenta ni documentos financieros. Se proporciona un sistema seguro de solicitud cuando realmente se necesita.",
  "Licensing & Disclosures": "Licencias y Divulgaciones",
  "Licensing & disclosures": "Licencias y divulgaciones",
  "licensing & disclosures": "licencias y divulgaciones",

  // Testimonials
  "Client Stories": "Historias de Clientes",
  "Real experiences, published carefully.":
    "Experiencias reales, publicadas con cuidado.",
  "Experiences from clients we've helped navigate their financing journey — added here as they are collected and confirmed.":
    "Experiencias de clientes a quienes hemos acompañado en su proceso de financiamiento — se publican a medida que se recopilan y confirman.",
  "Verified reviews only": "Solo reseñas verificadas",
  "Client feedback appears here only after it has been provided by the client and confirmed by Premier Lending NC.":
    "Los comentarios aparecen aquí solo después de ser proporcionados por el cliente y confirmados por Premier Lending NC.",
  "No stock stories": "Sin historias genéricas",
  "No sample names, invented quotes or purchased testimonials are published on this site.":
    "En este sitio no se publican nombres de ejemplo, citas inventadas ni testimonios comprados.",
  "Straightforward claims": "Afirmaciones honestas",
  "No promises of approval, rates, savings or outcomes — only what can be supported.":
    "Sin promesas de aprobación, tasas, ahorros ni resultados — solo lo que se puede respaldar.",
  "Worked with Premier Lending NC? Your experience can be shared here with your approval.":
    "¿Trabajó con Premier Lending NC? Su experiencia puede publicarse aquí con su aprobación.",
  "Share Your Experience": "Comparta Su Experiencia",

  // Final CTA + footer
  "Ready to make": "¿Listo para dar",
  "your next move?": "su siguiente paso?",
  "Let's start with a conversation about where you are—and where you're going.":
    "Comencemos con una conversación sobre dónde está—y hacia dónde va.",
  "Estimate a Payment": "Estimar un Pago",
  "PREMIER LENDING NC": "PREMIER LENDING NC",
  "Mortgage financing with a strategy-first approach, serving clients across North Carolina.":
    "Financiamiento hipotecario con un enfoque estratégico, al servicio de clientes en toda Carolina del Norte.",
  "Home Loans": "Préstamos de Vivienda",
  "First-Time Buyers": "Compradores Primerizos",
  "FHA Loans": "Préstamos FHA",
  "VA Loans": "Préstamos VA",
  "Conventional Loans": "Préstamos Convencionales",
  "Investment Loans": "Préstamos de Inversión",
  "Pre-Approval": "Preaprobación",
  "USDA Loans": "Préstamos USDA",
  "Jumbo Loans": "Préstamos Jumbo",
  "Cash-Out Refinance": "Refinanciamiento con Retiro de Efectivo",
  "Cash-out refinance": "Refinanciamiento con retiro de efectivo",
  "Premier Lending NC is a mortgage brokerage operating in North Carolina. Information on this website is for general educational purposes only and is not a commitment to lend, an offer of credit, or financial advice. All loan programs, terms and availability are subject to lender approval, verification of information, credit review, property review and applicable law. Rates and figures shown by any calculator on this site are illustrative estimates only. Licensing and NMLS identifiers":
    "Premier Lending NC es una correduría hipotecaria que opera en Carolina del Norte. La información de este sitio es solo para fines educativos generales y no constituye un compromiso de préstamo, una oferta de crédito ni asesoría financiera. Todos los programas, términos y disponibilidad están sujetos a la aprobación del prestamista, la verificación de la información, la revisión de crédito, la revisión de la propiedad y la ley aplicable. Las tasas y cifras mostradas por cualquier calculadora de este sitio son estimaciones ilustrativas. Los identificadores de licencia y NMLS",
  "are provided on request and on the": "se proporcionan a solicitud y en la página de",
  "page. Equal Housing Opportunity.": ". Igualdad de Oportunidad en la Vivienda.",
  "Privacy Policy": "Política de Privacidad",
  "Privacy policy": "Política de privacidad",
  Terms: "Términos",

  // Contact
  "Start with": "Comience con",
  "a conversation.": "una conversación.",
  "No pressure. No guesswork. Tell us where you are and what you're trying to accomplish.":
    "Sin presión. Sin adivinanzas. Cuéntenos dónde está y qué quiere lograr.",
  "Direct Contact": "Contacto Directo",
  "Speak with someone": "Hable con alguien",
  "who does this every day.": "que hace esto todos los días.",
  "A direct line is shared as soon as your inquiry is received.":
    "Se comparte una línea directa apenas se recibe su consulta.",
  "Messages sent through the form below are routed directly to the team.":
    "Los mensajes enviados por el formulario llegan directamente al equipo.",
  Office: "Oficina",
  "Consultations are held by phone, video or in person by appointment across":
    "Las consultas se realizan por teléfono, video o en persona con cita en",
  Hours: "Horario",
  "Appointments are scheduled around your availability, including evenings and weekends.":
    "Las citas se programan según su disponibilidad, incluyendo tardes y fines de semana.",
  Schedule: "Agendar",
  "Schedule a conversation.": "Agende una conversación.",
  "A short call to understand your goals, your timeline and which financing paths are worth reviewing. No credit pull and no obligation.":
    "Una llamada breve para entender sus metas, su cronograma y qué caminos de financiamiento vale la pena revisar. Sin consulta de crédito y sin compromiso.",
  "Review your goal and timeline": "Revisar su meta y su cronograma",
  "Talk through realistic financing paths":
    "Conversar caminos de financiamiento realistas",
  "Agree on a clear next step": "Acordar un siguiente paso claro",
  "Schedule a Conversation": "Agendar una Conversación",
  "Requests are reviewed directly by Premier Lending NC. Submitting a request is not an application and is not a commitment to lend.":
    "Las solicitudes son revisadas directamente por Premier Lending NC. Enviar una solicitud no es una aplicación ni un compromiso de préstamo.",
  "Talk with a loan professional": "Hable con un profesional de préstamos",
  "Explore your options with a real conversation.":
    "Explore sus opciones con una conversación real.",
  "Premier Lending NC serves clients across": "Premier Lending NC atiende clientes en",
  ". Share your goals and timeline and we will walk through what may realistically fit.":
    ". Comparta sus metas y su cronograma y revisaremos qué puede ajustarse de forma realista.",
  "Request a Consultation": "Solicitar una Consulta",
  "Check Your Numbers": "Revise Sus Números",
  "Check your options.": "Revise sus opciones.",
  "Put this into practice.": "Póngalo en práctica.",
  "Next step": "Siguiente paso",
  "Ready when you are": "Listos cuando usted quiera",
  "How it works": "Cómo funciona",
  "The process, step by step.": "El proceso, paso a paso.",
  "Related programs": "Programas relacionados",
  "Local context": "Contexto local",
  "Local guides": "Guías locales",
  "Areas we work in": "Áreas donde trabajamos",
  "Other North Carolina areas we serve":
    "Otras áreas de Carolina del Norte que atendemos",
  Serving: "Atendiendo",
  Connect: "Conectar",

  // Mortgage tools
  "Mortgage Tools": "Herramientas Hipotecarias",
  "Model it before": "Analice los números",
  "you commit.": "antes de comprometerse.",
  "Four planning tools that turn assumptions into numbers you can talk through. Every result is an educational estimate, not a quote or a commitment to lend.":
    "Cuatro herramientas de planificación que convierten supuestos en números que se pueden conversar. Cada resultado es una estimación educativa, no una cotización ni un compromiso de préstamo.",
  Affordability: "Capacidad de Compra",
  "Rent vs. Buy": "Alquilar vs. Comprar",
  "Refinance Break-Even": "Punto de Equilibrio",
  "Estimate a price range from income, debts and down payment.":
    "Estime un rango de precio según ingresos, deudas y pago inicial.",
  "Annual Household Income": "Ingreso Anual del Hogar",
  "Gross income before taxes.": "Ingreso bruto antes de impuestos.",
  "Monthly Debt Payments": "Pagos Mensuales de Deuda",
  "Car loans, student loans, minimum credit card payments.":
    "Préstamos de auto, préstamos estudiantiles, pagos mínimos de tarjetas.",
  "Down Payment Available": "Pago Inicial Disponible",
  "Interest Rate Assumption": "Tasa de Interés Supuesta",
  "Enter a rate to model. This is not a quoted rate.":
    "Ingrese una tasa para modelar. No es una tasa cotizada.",
  "A hypothetical rate — not a quoted or available rate.":
    "Una tasa hipotética — no es una tasa cotizada ni disponible.",
  "A rate you choose to model — not a quote.":
    "Una tasa que usted elige para modelar — no es una cotización.",
  "Debt-to-Income Assumption": "Relación Deuda-Ingreso Supuesta",
  "Guidelines vary by program and lender.":
    "Las reglas varían según el programa y el prestamista.",
  "Taxes & Insurance (% of value / yr)": "Impuestos y Seguro (% del valor / año)",
  "Estimated Price Range": "Rango de Precio Estimado",
  "Monthly housing budget": "Presupuesto mensual de vivienda",
  "Estimated loan amount": "Monto estimado del préstamo",
  "Estimated principal & interest": "Capital e intereses estimados",
  "Estimated taxes & insurance": "Impuestos y seguro estimados",
  "Estimate for educational purposes only. Not a commitment to lend, an offer of credit or personalized financial advice.":
    "Estimación solo con fines educativos. No es un compromiso de préstamo, una oferta de crédito ni asesoría financiera personalizada.",
  "Actual qualifying amounts depend on full credit, income and program review.":
    "Los montos reales de calificación dependen de la revisión completa de crédito, ingresos y programa.",
  "Open the Payment Calculator": "Abrir la Calculadora de Pagos",
  "Annual Household Income slider": "Control de ingreso anual del hogar",
  "Monthly Debt Payments slider": "Control de pagos mensuales de deuda",
  "Down Payment Available slider": "Control de pago inicial disponible",
  "Interest Rate Assumption slider": "Control de tasa de interés supuesta",
  "Debt-to-Income Assumption slider": "Control de relación deuda-ingreso",
  "Taxes & Insurance (% of value / yr) slider": "Control de impuestos y seguro",
  "Down Payment Goal": "Meta de Pago Inicial",
  "Down Payment Target": "Objetivo de Pago Inicial",
  "Target Home Price": "Precio Objetivo de la Vivienda",
  "Saving Per Month": "Ahorro Mensual",
  "Already Saved": "Ya Ahorrado",
  "See your savings target and how long it may take to reach it.":
    "Vea su meta de ahorro y cuánto tiempo podría tomar alcanzarla.",
  "Minimums vary by program; some programs allow less.":
    "Los mínimos varían según el programa; algunos permiten menos.",
  "Goal reached": "Meta alcanzada",
  "Still to save": "Falta por ahorrar",
  "Months at current pace": "Meses al ritmo actual",
  "Estimated cash to close": "Efectivo estimado para cerrar",
  "Estimated closing costs": "Costos de cierre estimados",
  "Closing costs vary by lender, county and transaction and are shown here as a general range.":
    "Los costos de cierre varían según el prestamista, el condado y la transacción, y se muestran aquí como un rango general.",
  "Compare renting against owning over a period you choose.":
    "Compare alquilar con ser propietario durante el período que elija.",
  "Current Monthly Rent": "Alquiler Mensual Actual",
  "Annual Rent Increase": "Aumento Anual del Alquiler",
  "Years in the Home": "Años en la Vivienda",
  "Home Appreciation Assumption": "Apreciación Supuesta de la Vivienda",
  "Ownership Costs (% of value / yr)": "Costos de Propiedad (% del valor / año)",
  "Taxes, insurance and maintenance combined.":
    "Impuestos, seguro y mantenimiento combinados.",
  "Total rent paid": "Total de alquiler pagado",
  "Net cost of owning": "Costo neto de ser propietario",
  "Estimated equity gained": "Plusvalía estimada acumulada",
  "Estimate how long it takes to recover refinance costs.":
    "Estime cuánto tarda en recuperar los costos del refinanciamiento.",
  "Current Loan Balance": "Saldo Actual del Préstamo",
  "Current Rate": "Tasa Actual",
  "The rate on your existing loan.": "La tasa de su préstamo actual.",
  "Rate to Model": "Tasa a Modelar",
  "New Loan Term (years)": "Nuevo Plazo del Préstamo (años)",
  "Estimated Refinance Costs": "Costos Estimados de Refinanciamiento",
  "Estimated Break-Even": "Punto de Equilibrio Estimado",
  "Current payment (P&I)": "Pago actual (capital e intereses)",
  "Modeled payment (P&I)": "Pago modelado (capital e intereses)",
  "Monthly difference": "Diferencia mensual",
  "Costs to recover": "Costos por recuperar",
  "No monthly savings": "Sin ahorro mensual",
  "Estimated monthly P&I": "Capital e intereses mensuales estimados",
  "Resetting the term can change total interest paid even when the monthly payment drops.":
    "Reiniciar el plazo puede cambiar el interés total pagado aunque el pago mensual baje.",
  "Review a Refinance": "Revisar un Refinanciamiento",
  "Run the Numbers": "Calcule los Números",

  // Resource center
  "Clarity before commitment.": "Claridad antes del compromiso.",
  "Educational material to help you understand the financing side of your next move.":
    "Material educativo para ayudarle a entender el lado financiero de su próximo paso.",
  All: "Todos",
  "Home Buying": "Compra de Vivienda",
  Guide: "Guía",
  Interactive: "Interactivo",
  "Request the Guide": "Solicitar la Guía",
  "First-Time Buyer Roadmap": "Ruta del Comprador Primerizo",
  "A plain-language walkthrough of the buying process for anyone purchasing their first home in North Carolina.":
    "Un recorrido en lenguaje sencillo del proceso de compra para quienes adquieren su primera casa en Carolina del Norte.",
  "Read the Roadmap": "Leer la Ruta",
  "Mortgage Payment Calculator": "Calculadora de Pago Hipotecario",
  "Explore how price, down payment, rate, term, taxes and insurance shape an estimated monthly payment.":
    "Explore cómo el precio, el pago inicial, la tasa, el plazo, los impuestos y el seguro forman un pago mensual estimado.",
  "Open Calculator": "Abrir Calculadora",
  "Pre-Qualification Walkthrough": "Recorrido de Precalificación",
  "Six short steps that outline your goal, property, timeline and contact preferences — no credit pull, no obligation.":
    "Seis pasos breves sobre su meta, propiedad, cronograma y preferencia de contacto — sin consulta de crédito, sin compromiso.",
  "Start the Walkthrough": "Comenzar el Recorrido",
  "Financing Options Overview": "Resumen de Opciones de Financiamiento",
  "See the categories of financing that may fit different property goals and how brokers compare them across lenders.":
    "Vea las categorías de financiamiento que pueden ajustarse a distintas metas y cómo los brókers las comparan entre prestamistas.",
  "Explore Options": "Explorar Opciones",
  "When Refinancing Is Worth Reviewing": "Cuándo conviene revisar un refinanciamiento",
  "The questions worth asking before assuming a refinance makes sense — and the costs that belong in the math.":
    "Las preguntas que vale la pena hacer antes de asumir que refinanciar conviene — y los costos que deben entrar en el cálculo.",
  "Review the Basics": "Revisar lo Básico",
  "Investor Financing Basics": "Fundamentos del Financiamiento para Inversionistas",
  "How financing factors into a longer-term real-estate strategy, including what lenders typically look at on investment property.":
    "Cómo influye el financiamiento en una estrategia inmobiliaria de largo plazo, incluyendo lo que los prestamistas revisan en propiedades de inversión.",
  "Building a Portfolio in North Carolina":
    "Cómo construir un portafolio en Carolina del Norte",
  "Considerations for buyers moving from a single property toward multiple doors across NC markets.":
    "Consideraciones para quienes pasan de una sola propiedad a varias unidades en los mercados de NC.",
  "See the Approach": "Ver el Enfoque",
  "Free tool": "Herramienta gratuita",
  "The North Carolina home buyer checklist.":
    "La lista de verificación para compradores en Carolina del Norte.",
  "Every document lenders ask for and every step from pre-approval to closing — tick it off online or print it. Free to use and share.":
    "Todos los documentos que piden los prestamistas y cada paso desde la preaprobación hasta el cierre — márquelo en línea o imprímalo. Gratis para usar y compartir.",
  "Open the Checklist": "Abrir la Lista",

  // Loan programs page
  "Every path to": "Todos los caminos",
  "the right loan.": "al préstamo correcto.",
  "Programs differ in down payment, mortgage insurance, credit expectations and documentation. Start with the one closest to your situation.":
    "Los programas difieren en pago inicial, seguro hipotecario, expectativas de crédito y documentación. Comience con el más cercano a su situación.",
  Programs: "Programas",
  "Explore your options.": "Explore sus opciones.",
  "Want to see the major categories next to each other first?":
    "¿Quiere ver primero las categorías principales una al lado de la otra?",
  "Learn more": "Más información",
  "Explore home loan options across North Carolina with an independent mortgage broker. Compare programs, understand costs and see which structure may fit your purchase.":
    "Explore opciones de préstamos de vivienda en Carolina del Norte con un bróker hipotecario independiente. Compare programas, entienda los costos y vea qué estructura puede ajustarse a su compra.",
  "A first-time home buyer guide and loan review for North Carolina: down payment expectations, credit, documentation and what the mortgage process actually looks like.":
    "Una guía para compradores primerizos y revisión de préstamos en Carolina del Norte: expectativas de pago inicial, crédito, documentación y cómo es realmente el proceso hipotecario.",
  "FHA Financing": "Financiamiento FHA",
  "How FHA loans work for North Carolina buyers: down payment structure, mortgage insurance, property standards and who the program tends to fit.":
    "Cómo funcionan los préstamos FHA para compradores en Carolina del Norte: estructura del pago inicial, seguro hipotecario, normas de la propiedad y a quién suele convenir el programa.",
  "VA Financing": "Financiamiento VA",
  "VA home loan basics for North Carolina veterans and service members: entitlement, the funding fee, occupancy rules and how the benefit is typically used.":
    "Fundamentos del préstamo VA para veteranos y militares en Carolina del Norte: derecho, cargo de financiamiento, reglas de ocupación y cómo suele usarse el beneficio.",
  "Conventional Financing": "Financiamiento Convencional",
  "Conventional mortgage financing explained for North Carolina buyers: down payment options, private mortgage insurance, loan limits and how it compares to FHA.":
    "El financiamiento convencional explicado para compradores en Carolina del Norte: opciones de pago inicial, seguro hipotecario privado, límites de préstamo y cómo se compara con FHA.",
  "Refinance options for North Carolina homeowners: rate-and-term, cash-out and mortgage insurance removal, with a break-even analysis before you commit.":
    "Opciones de refinanciamiento para propietarios en Carolina del Norte: tasa y plazo, retiro de efectivo y eliminación del seguro hipotecario, con un análisis de punto de equilibrio antes de comprometerse.",
  "Investment Financing": "Financiamiento de Inversión",
  "Financing for North Carolina rental and investment property: down payment and reserve expectations, DSCR-style structures, and how portfolio growth is planned.":
    "Financiamiento para propiedades de alquiler e inversión en Carolina del Norte: expectativas de pago inicial y reservas, estructuras tipo DSCR y cómo se planifica el crecimiento del portafolio.",
  "What mortgage pre-approval involves in North Carolina, how it differs from pre-qualification, what documents are needed and how long it typically stays valid.":
    "Qué implica la preaprobación hipotecaria en Carolina del Norte, en qué se diferencia de la precalificación, qué documentos se necesitan y cuánto tiempo suele mantenerse vigente.",
  "How USDA rural development loans work in North Carolina: property eligibility maps, household income limits, guarantee fees and who the program tends to fit.":
    "Cómo funcionan los préstamos de desarrollo rural USDA en Carolina del Norte: mapas de elegibilidad, límites de ingreso del hogar, cargos de garantía y a quién suele convenir el programa.",
  "Jumbo mortgage financing in North Carolina: how loan limits work, what reserves and documentation lenders expect, and how jumbo underwriting differs from conforming loans.":
    "Financiamiento hipotecario jumbo en Carolina del Norte: cómo funcionan los límites, qué reservas y documentación esperan los prestamistas y en qué se diferencia la evaluación jumbo de los préstamos conformes.",
  "How a cash-out refinance works in North Carolina: equity and loan-to-value limits, what the funds are commonly used for, and how to weigh it against a second mortgage or HELOC.":
    "Cómo funciona un refinanciamiento con retiro de efectivo en Carolina del Norte: límites de plusvalía y préstamo-valor, usos comunes de los fondos y cómo compararlo con una segunda hipoteca o HELOC.",

  // Locations
  "Financing guidance,": "Orientación financiera,",
  "close to home.": "cerca de usted.",
  "Local market conditions change how a mortgage file is structured. Choose your area to see what matters where you're buying.":
    "Las condiciones del mercado local cambian cómo se estructura un expediente hipotecario. Elija su área para ver qué importa donde va a comprar.",
  "Where we work.": "Dónde trabajamos.",
  View: "Ver",
  guide: "guía",
  "Wake County": "Condado de Wake",
  "Durham County": "Condado de Durham",
  "Orange County": "Condado de Orange",
  "Independent mortgage broker serving Raleigh, NC. Compare home loan programs, review pre-qualification and plan financing for purchases across Wake County.":
    "Bróker hipotecario independiente que atiende Raleigh, NC. Compare programas de préstamo, revise la precalificación y planifique el financiamiento de compras en el condado de Wake.",
  "Mortgage broker serving Durham, NC. Financing review for historic homes, new construction and rental property purchases across Durham County.":
    "Bróker hipotecario que atiende Durham, NC. Revisión de financiamiento para casas históricas, construcción nueva y propiedades de alquiler en el condado de Durham.",
  "Mortgage broker serving Cary, NC. Home loan comparison for move-up buyers, relocating professionals and higher-balance purchases in Wake County.":
    "Bróker hipotecario que atiende Cary, NC. Comparación de préstamos para quienes cambian de casa, profesionales que se mudan y compras de mayor monto en el condado de Wake.",
  "Mortgage broker serving Apex, NC. New construction financing guidance, pre-qualification and loan program comparison for Wake County buyers.":
    "Bróker hipotecario que atiende Apex, NC. Orientación sobre financiamiento de construcción nueva, precalificación y comparación de programas para compradores del condado de Wake.",
  "Mortgage broker serving Garner, NC. First-time buyer financing, FHA and conventional comparison, and pre-qualification for southern Wake County.":
    "Bróker hipotecario que atiende Garner, NC. Financiamiento para compradores primerizos, comparación FHA y convencional, y precalificación para el sur del condado de Wake.",
  "Mortgage broker serving Wake Forest, NC. Financing for new construction, larger lots and move-up purchases in northern Wake County.":
    "Bróker hipotecario que atiende Wake Forest, NC. Financiamiento para construcción nueva, lotes más grandes y compras de mayor tamaño en el norte del condado de Wake.",
  "Mortgage broker serving Chapel Hill, NC. Financing guidance for university and healthcare professionals, condos and higher-balance purchases in Orange County.":
    "Bróker hipotecario que atiende Chapel Hill, NC. Orientación de financiamiento para profesionales universitarios y de la salud, condominios y compras de mayor monto en el condado de Orange.",
  "Mortgage broker serving Morrisville, NC. Townhome and condo financing, relocation guidance and pre-qualification near Research Triangle Park.":
    "Bróker hipotecario que atiende Morrisville, NC. Financiamiento de townhomes y condominios, orientación para mudanzas y precalificación cerca de Research Triangle Park.",
  "Mortgage broker serving Holly Springs, NC. New construction financing, first-time buyer programs and pre-qualification in southwestern Wake County.":
    "Bróker hipotecario que atiende Holly Springs, NC. Financiamiento de construcción nueva, programas para compradores primerizos y precalificación en el suroeste del condado de Wake.",

  // Compare programs
  "Compare Programs": "Comparar Programas",
  "Compare Options": "Comparar Opciones",
  "Compare mortgage": "Compare opciones",
  "options clearly.": "hipotecarias con claridad.",
  "See how the major loan program categories differ in purpose and in what they ask you to review — without the sales pitch.":
    "Vea cómo se diferencian las principales categorías de préstamos en su propósito y en lo que piden revisar — sin discurso de ventas.",
  "Compare Mortgage Options": "Comparar Opciones Hipotecarias",
  "Programs, side": "Programas, uno",
  "by side.": "junto al otro.",
  "Select the programs you want to look at. Each summary is educational and general — specific eligibility, costs and terms are determined by the lender and your full application.":
    "Seleccione los programas que desea revisar. Cada resumen es educativo y general — la elegibilidad, los costos y los términos específicos los determina el prestamista y su solicitud completa.",
  "Often considered by": "Frecuentemente considerado por",
  "Buyers with established credit histories":
    "Compradores con historial de crédito establecido",
  "Buyers planning to put down anywhere from a modest amount up to 20% or more":
    "Compradores que planean dar desde un pago inicial modesto hasta 20% o más",
  "Buyers of second homes and investment properties, which FHA and VA do not cover":
    "Compradores de segundas viviendas y propiedades de inversión, que FHA y VA no cubren",
  "What to review": "Qué revisar",
  "PMI is not permanent": "El PMI no es permanente",
  "Credit profile drives pricing": "El perfil de crédito determina el precio",
  "Full program details": "Detalles completos del programa",
  "Buyers with limited funds available for a down payment":
    "Compradores con fondos limitados para el pago inicial",
  "Buyers whose credit history includes past events that are now resolved":
    "Compradores cuyo historial incluye eventos pasados ya resueltos",
  "Buyers with higher debt-to-income ratios that conventional guidelines may treat differently":
    "Compradores con relación deuda-ingreso más alta que las reglas convencionales pueden tratar distinto",
  "Lower down payment, added insurance": "Menor pago inicial, seguro adicional",
  "Property condition matters": "La condición de la propiedad importa",
  "Eligible veterans, active-duty service members and certain surviving spouses":
    "Veteranos elegibles, militares en servicio activo y ciertos cónyuges sobrevivientes",
  "Buyers who want to purchase with no down payment where entitlement allows":
    "Compradores que desean comprar sin pago inicial cuando el derecho lo permite",
  "Service members relocating to or within North Carolina on orders":
    "Militares que se trasladan a o dentro de Carolina del Norte por órdenes",
  "No monthly mortgage insurance": "Sin seguro hipotecario mensual",
  "Entitlement and the Certificate of Eligibility":
    "El derecho y el Certificado de Elegibilidad",
  "Not sure which option may fit your situation?":
    "¿No está seguro de qué opción se ajusta a su situación?",
  "A short pre-qualification conversation is the fastest way to narrow the list to the structures that actually apply to you.":
    "Una breve conversación de precalificación es la forma más rápida de reducir la lista a las estructuras que realmente le aplican.",
  "Program characteristics are general and educational. Eligibility, costs and terms are set by the lender and confirmed only through a complete application.":
    "Las características de los programas son generales y educativas. La elegibilidad, los costos y los términos los establece el prestamista y se confirman solo mediante una solicitud completa.",
  "Select programs to compare": "Seleccione programas para comparar",

  // Image alt text
  "Elegant residential entrance": "Entrada residencial elegante",
  "Modern multi-unit residential property": "Propiedad residencial multifamiliar moderna",
  "North Carolina home exterior at dusk":
    "Exterior de una casa en Carolina del Norte al atardecer",

  // 404 + errors
  "This page couldn't be found.": "No se encontró esta página.",
  "The page you're looking for doesn't exist or has moved. Here are a few places that may help.":
    "La página que busca no existe o fue movida. Aquí hay algunos lugares que pueden ayudar.",
  "Return home": "Volver al inicio",
  "Mortgage calculator": "Calculadora hipotecaria",
  "Get my free mortgage quote ": "Obtener mi cotización gratuita ",
  "Not found": "No encontrado",
  "Talk With Us": "Hable Con Nosotros",
};

export const es: Record<string, string> = { ...core, ...esSpecialty, ...esArticles };
