import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  CheckCircle,
  ChevronRight,
  MessageSquare,
  BarChart3,
  Target,
  Users,
  Award,
  ArrowUpRight,
  Lightbulb,
  TrendingUp,
  LineChart,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ContactForm } from "@/components/contact-form"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-dogma-dark">
      <header className="sticky top-0 z-50 w-full border-b border-dogma-dark-lighter bg-dogma-dark/90 backdrop-blur supports-[backdrop-filter]:bg-dogma-dark/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/images/logo.png" alt="Dogma Marketing" width={120} height={40} className="h-8 w-auto" />
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#servicos" className="text-sm font-medium text-white hover:text-dogma-orange transition-colors">
              Serviços
            </Link>
            <Link
              href="#resultados"
              className="text-sm font-medium text-white hover:text-dogma-orange transition-colors"
            >
              Resultados
            </Link>
            <Link href="#cases" className="text-sm font-medium text-white hover:text-dogma-orange transition-colors">
              Cases
            </Link>
            <Link href="#sobre" className="text-sm font-medium text-white hover:text-dogma-orange transition-colors">
              Sobre
            </Link>
            <Link href="#contato" className="text-sm font-medium text-white hover:text-dogma-orange transition-colors">
              Contato
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button asChild className="hidden md:flex bg-dogma-orange hover:bg-dogma-orange-light text-white">
              <Link href="#contato">
                Fale Conosco <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="icon" className="md:hidden border-dogma-orange text-dogma-orange">
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="relative overflow-hidden bg-dogma-dark pt-16 md:pt-24 lg:pt-32">
          <div className="container relative z-10 mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                    Transforme sua presença digital com estratégias que{" "}
                    <span className="gradient-text">realmente funcionam</span>
                  </h1>
                  <p className="max-w-[600px] text-gray-300 md:text-xl">
                    Somos especialistas em criar estratégias personalizadas que geram resultados mensuráveis para o seu
                    negócio.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" asChild className="bg-dogma-orange hover:bg-dogma-orange-light text-white group">
                    <Link href="#contato">
                      Agende uma Consultoria Gratuita{" "}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    asChild
                    className="border-dogma-orange text-dogma-orange hover:bg-dogma-orange/10"
                  >
                    <Link href="#servicos">Conheça Nossos Serviços</Link>
                  </Button>
                </div>
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="inline-block h-8 w-8 rounded-full border-2 border-dogma-dark bg-dogma-dark-light overflow-hidden"
                      >
                        <Image
                          src={`/placeholder.svg?height=32&width=32&text=${i}`}
                          alt="Avatar"
                          width={32}
                          height={32}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="text-gray-400">
                    <span className="font-medium text-dogma-orange">+150</span> clientes satisfeitos
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center orange-glow">
                <div className="relative h-[350px] w-[350px] sm:h-[450px] sm:w-[450px] lg:h-[500px] lg:w-[500px]">
                  <Image
                    src="/placeholder.svg?height=500&width=500&text=Dogma"
                    alt="Hero"
                    width={500}
                    height={500}
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-grid-white/5 bg-[bottom_1px_center]" />
        </section>

        <section className="bg-dogma-dark-light py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-dogma-orange px-3 py-1 text-sm text-white">
                  Clientes que confiam em nós
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-white">
                  Empresas que transformamos
                </h2>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6 items-center justify-center py-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="flex items-center justify-center">
                  <Image
                    src={`/placeholder.svg?height=60&width=120&text=Logo ${i}`}
                    alt={`Cliente ${i}`}
                    width={120}
                    height={60}
                    className="h-12 w-auto object-contain opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="servicos" className="py-12 md:py-16 lg:py-20 bg-dogma-dark relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-glow opacity-20 rounded-full blur-3xl"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-dogma-orange px-3 py-1 text-sm text-white">
                  Nossos Serviços
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-white">
                  Soluções completas para o seu negócio
                </h2>
                <p className="max-w-[700px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Oferecemos estratégias personalizadas para cada fase do seu negócio
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: <BarChart3 className="h-10 w-10 text-dogma-orange" />,
                  title: "Marketing Digital",
                  description:
                    "Estratégias completas para aumentar sua visibilidade online e gerar mais leads qualificados.",
                },
                {
                  icon: <Target className="h-10 w-10 text-dogma-orange" />,
                  title: "SEO Avançado",
                  description:
                    "Otimização para mecanismos de busca que coloca sua empresa nas primeiras posições do Google.",
                },
                {
                  icon: <MessageSquare className="h-10 w-10 text-dogma-orange" />,
                  title: "Gestão de Redes Sociais",
                  description: "Criação de conteúdo estratégico e gestão completa das suas redes sociais.",
                },
                {
                  icon: <Users className="h-10 w-10 text-dogma-orange" />,
                  title: "Tráfego Pago",
                  description: "Campanhas de anúncios otimizadas para maximizar seu ROI e converter mais clientes.",
                },
                {
                  icon: <Award className="h-10 w-10 text-dogma-orange" />,
                  title: "Branding",
                  description: "Desenvolvimento e fortalecimento da sua marca para se destacar no mercado.",
                },
                {
                  icon: <ArrowUpRight className="h-10 w-10 text-dogma-orange" />,
                  title: "Consultoria Estratégica",
                  description: "Análise completa do seu negócio e desenvolvimento de estratégias personalizadas.",
                },
              ].map((service, i) => (
                <Card
                  key={i}
                  className="group relative overflow-hidden transition-all hover:shadow-lg border-dogma-dark-lighter bg-dogma-dark-light hover:border-dogma-orange/30"
                >
                  <CardContent className="p-6">
                    <div className="mb-4">{service.icon}</div>
                    <h3 className="mb-2 text-xl font-bold text-white">{service.title}</h3>
                    <p className="text-gray-400">{service.description}</p>
                    <div className="mt-4 flex items-center text-dogma-orange">
                      <span className="text-sm font-medium">Saiba mais</span>
                      <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="resultados" className="bg-dogma-dark-light py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-dogma-orange px-3 py-1 text-sm text-white">
                  Resultados Comprovados
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-white">
                  Números que falam por si
                </h2>
                <p className="max-w-[700px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Veja o que conseguimos alcançar para nossos clientes
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                { value: "300%", label: "Aumento médio em tráfego orgânico", icon: <TrendingUp /> },
                { value: "150%", label: "Crescimento em conversões", icon: <LineChart /> },
                { value: "200+", label: "Projetos entregues com sucesso", icon: <CheckCircle /> },
                { value: "95%", label: "Taxa de retenção de clientes", icon: <Users /> },
              ].map((stat, i) => (
                <Card
                  key={i}
                  className="text-center border-dogma-dark-lighter bg-gradient-to-b from-dogma-dark to-dogma-dark-light"
                >
                  <CardContent className="p-6">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-dogma-orange/10 text-dogma-orange">
                      {stat.icon}
                    </div>
                    <div className="text-4xl font-bold text-dogma-orange">{stat.value}</div>
                    <p className="mt-2 text-gray-400">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="cases" className="py-12 md:py-16 lg:py-20 bg-dogma-dark relative">
          <div className="absolute top-1/2 right-0 w-[300px] h-[500px] bg-orange-glow opacity-10 rounded-full blur-3xl"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-dogma-orange px-3 py-1 text-sm text-white">
                  Cases de Sucesso
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-white">
                  Transformações reais para negócios reais
                </h2>
                <p className="max-w-[700px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Conheça algumas histórias de sucesso dos nossos clientes
                </p>
              </div>
            </div>
            <Tabs defaultValue="case1" className="mx-auto max-w-5xl py-8">
              <TabsList className="grid w-full grid-cols-3 bg-dogma-dark-light">
                <TabsTrigger
                  value="case1"
                  className="data-[state=active]:bg-dogma-orange data-[state=active]:text-white"
                >
                  E-commerce
                </TabsTrigger>
                <TabsTrigger
                  value="case2"
                  className="data-[state=active]:bg-dogma-orange data-[state=active]:text-white"
                >
                  Serviços B2B
                </TabsTrigger>
                <TabsTrigger
                  value="case3"
                  className="data-[state=active]:bg-dogma-orange data-[state=active]:text-white"
                >
                  Startup SaaS
                </TabsTrigger>
              </TabsList>
              {[
                {
                  id: "case1",
                  title: "Aumento de 250% em vendas para e-commerce",
                  description:
                    "Implementamos uma estratégia completa de marketing digital para uma loja online de moda, resultando em um aumento significativo nas vendas em apenas 6 meses.",
                  results: [
                    "250% de aumento nas vendas online",
                    "300% de crescimento em tráfego orgânico",
                    "Redução de 40% no custo de aquisição de clientes",
                    "Aumento de 85% na taxa de conversão",
                  ],
                },
                {
                  id: "case2",
                  title: "Geração de leads qualificados para empresa B2B",
                  description:
                    "Desenvolvemos uma estratégia de inbound marketing para uma empresa de consultoria empresarial, gerando leads altamente qualificados e aumentando o ticket médio.",
                  results: [
                    "180% de aumento na geração de leads qualificados",
                    "200% de crescimento em tráfego orgânico",
                    "Redução de 35% no ciclo de vendas",
                    "Aumento de 60% no ticket médio",
                  ],
                },
                {
                  id: "case3",
                  title: "Lançamento de produto SaaS com sucesso",
                  description:
                    "Criamos uma estratégia completa para o lançamento de um novo software como serviço, desde o posicionamento de marca até a aquisição dos primeiros clientes.",
                  results: [
                    "1.500 usuários adquiridos no primeiro mês",
                    "400% de ROI nas campanhas de mídia paga",
                    "Posicionamento entre os top 3 resultados para palavras-chave principais",
                    "Taxa de conversão de 12% em landing pages",
                  ],
                },
              ].map((caseStudy) => (
                <TabsContent key={caseStudy.id} value={caseStudy.id} className="space-y-4">
                  <div className="grid gap-6 lg:grid-cols-2">
                    <div>
                      <Image
                        src={`/placeholder.svg?height=400&width=600&text=Case ${caseStudy.id}`}
                        alt={caseStudy.title}
                        width={600}
                        height={400}
                        className="rounded-lg object-cover"
                      />
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-white">{caseStudy.title}</h3>
                      <p className="text-gray-300">{caseStudy.description}</p>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-white">Resultados alcançados:</h4>
                        <ul className="space-y-2">
                          {caseStudy.results.map((result, i) => (
                            <li key={i} className="flex items-start">
                              <CheckCircle className="mr-2 h-5 w-5 text-dogma-orange" />
                              <span className="text-gray-300">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Button className="bg-dogma-orange hover:bg-dogma-orange-light text-white group">
                        Ver Estudo de Caso Completo
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        <section id="sobre" className="py-12 md:py-16 lg:py-20 bg-dogma-dark-light">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-dogma-orange px-3 py-1 text-sm text-white">
                    Sobre a Dogma
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-white">
                    Uma assessoria de marketing focada em resultados
                  </h2>
                  <p className="text-gray-300 md:text-xl/relaxed">
                    Fundada em 2015, a Dogma Marketing nasceu com o propósito de transformar a maneira como as empresas
                    abordam o marketing digital.
                  </p>
                </div>
                <div className="space-y-2 text-gray-400">
                  <p>
                    Nossa equipe é formada por especialistas em diversas áreas do marketing digital, com vasta
                    experiência em diferentes segmentos de mercado.
                  </p>
                  <p>
                    Trabalhamos com metodologias próprias, desenvolvidas ao longo de anos de experiência e constante
                    aprimoramento, sempre focadas em gerar resultados mensuráveis para nossos clientes.
                  </p>
                  <p>
                    Acreditamos que cada negócio é único e merece uma estratégia personalizada, por isso desenvolvemos
                    soluções sob medida para cada cliente, considerando seus objetivos, público-alvo e mercado de
                    atuação.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild className="bg-dogma-orange hover:bg-dogma-orange-light text-white group">
                    <Link href="#contato">
                      Fale com um Especialista{" "}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=500&width=500&text=Equipe Dogma"
                  alt="Equipe Dogma"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 lg:py-20 bg-dogma-dark relative">
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[300px] bg-orange-glow opacity-10 rounded-full blur-3xl"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-dogma-orange px-3 py-1 text-sm text-white">Depoimentos</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-white">
                  O que nossos clientes dizem
                </h2>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Carlos Silva",
                  position: "CEO, TechSolutions",
                  testimonial:
                    "A Dogma transformou completamente nossa presença digital. Em apenas 3 meses, vimos um aumento significativo em leads qualificados e vendas.",
                },
                {
                  name: "Ana Oliveira",
                  position: "Diretora de Marketing, FashionStore",
                  testimonial:
                    "Trabalhar com a Dogma foi um divisor de águas para nossa empresa. Eles não só entenderam nosso negócio, mas também desenvolveram estratégias que realmente funcionam.",
                },
                {
                  name: "Roberto Santos",
                  position: "Fundador, StartupInova",
                  testimonial:
                    "A equipe da Dogma é extremamente profissional e dedicada. Eles foram fundamentais para o sucesso do lançamento do nosso produto.",
                },
              ].map((testimonial, i) => (
                <Card
                  key={i}
                  className="text-center glass-card hover:border-dogma-orange/30 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="mb-4 flex justify-center">
                      <div className="h-16 w-16 rounded-full bg-dogma-dark-light overflow-hidden border border-dogma-orange/20">
                        <Image
                          src={`/placeholder.svg?height=64&width=64&text=${testimonial.name[0]}`}
                          alt={testimonial.name}
                          width={64}
                          height={64}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>
                    <p className="mb-4 text-gray-300">"{testimonial.testimonial}"</p>
                    <div>
                      <h4 className="font-semibold text-white">{testimonial.name}</h4>
                      <p className="text-sm text-gray-400">{testimonial.position}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contato"
          className="bg-gradient-to-br from-dogma-orange-dark via-dogma-orange to-dogma-orange-light text-white py-12 md:py-16 lg:py-20"
        >
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                    Pronto para transformar seu negócio?
                  </h2>
                  <p className="md:text-xl/relaxed">
                    Entre em contato conosco hoje mesmo e descubra como podemos ajudar sua empresa a alcançar novos
                    patamares.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-dogma-orange">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold">Telefone</h3>
                      <p>(11) 9999-9999</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-dogma-orange">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p>contato@dogmamarketing.com.br</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-dogma-orange">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold">Endereço</h3>
                      <p>Av. Paulista, 1000 - São Paulo, SP</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-lg bg-white p-6 text-dogma-dark">
                <h3 className="mb-4 text-xl font-bold">Fale Conosco</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 lg:py-20 bg-dogma-dark relative">
          <div className="absolute inset-0 bg-gradient-to-b from-dogma-dark-light to-dogma-dark opacity-50"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="flex items-center justify-center mb-6">
                  <Lightbulb className="h-16 w-16 text-dogma-orange" />
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-white">
                  Pronto para começar?
                </h2>
                <p className="max-w-[700px] text-gray-300 md:text-xl/relaxed">
                  Agende uma consultoria gratuita e descubra como podemos transformar seu negócio
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" asChild className="bg-dogma-orange hover:bg-dogma-orange-light text-white group">
                  <Link href="#contato">
                    Agendar Consultoria Gratuita{" "}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="border-dogma-orange text-dogma-orange hover:bg-dogma-orange/10"
                >
                  <Link href="#servicos">Conhecer Serviços</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-dogma-dark-lighter py-6 md:py-8 border-t border-dogma-dark-light">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Image src="/images/logo.png" alt="Dogma Marketing" width={120} height={40} className="h-8 w-auto" />
              </div>
              <p className="max-w-[400px] text-gray-400">
                Transformando negócios através de estratégias de marketing digital inovadoras e eficientes.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-dogma-orange transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-dogma-orange transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-dogma-orange transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-dogma-orange transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
              <div className="space-y-3">
                <h3 className="text-sm font-medium text-white">Empresa</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="#sobre" className="text-sm text-gray-400 hover:text-dogma-orange transition-colors">
                      Sobre Nós
                    </Link>
                  </li>
                  <li>
                    <Link href="#cases" className="text-sm text-gray-400 hover:text-dogma-orange transition-colors">
                      Cases
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm text-gray-400 hover:text-dogma-orange transition-colors">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm text-gray-400 hover:text-dogma-orange transition-colors">
                      Carreiras
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-sm font-medium text-white">Serviços</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="#servicos" className="text-sm text-gray-400 hover:text-dogma-orange transition-colors">
                      Marketing Digital
                    </Link>
                  </li>
                  <li>
                    <Link href="#servicos" className="text-sm text-gray-400 hover:text-dogma-orange transition-colors">
                      SEO
                    </Link>
                  </li>
                  <li>
                    <Link href="#servicos" className="text-sm text-gray-400 hover:text-dogma-orange transition-colors">
                      Redes Sociais
                    </Link>
                  </li>
                  <li>
                    <Link href="#servicos" className="text-sm text-gray-400 hover:text-dogma-orange transition-colors">
                      Tráfego Pago
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-sm font-medium text-white">Legal</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-sm text-gray-400 hover:text-dogma-orange transition-colors">
                      Termos de Serviço
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm text-gray-400 hover:text-dogma-orange transition-colors">
                      Política de Privacidade
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm text-gray-400 hover:text-dogma-orange transition-colors">
                      Cookies
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-dogma-dark pt-8 text-center text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Dogma Marketing. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  )
}
