/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShoppingBag, 
  Users, 
  Truck, 
  CheckCircle, 
  MessageCircle, 
  Phone, 
  Mail, 
  ChevronRight, 
  Package, 
  ArrowRight,
  Menu,
  X,
  Instagram,
  Facebook
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const PRODUCTS = [
  {
    id: 1,
    name: "Smartphone Topo de Gama",
    price: "250.000 Kz",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=800",
    description: "Importação direta. Mínimo de 10 pessoas para fechar o lote.",
    status: "Aberto",
    participants: 4,
    target: 10
  },
  {
    id: 2,
    name: "Kit de Ferramentas Profissional",
    price: "45.000 Kz",
    image: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&q=80&w=800",
    description: "Ideal para mecânicos e entusiastas. Alta durabilidade.",
    status: "Aberto",
    participants: 7,
    target: 15
  },
  {
    id: 3,
    name: "Eletrodomésticos de Cozinha",
    price: "85.000 Kz",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800",
    description: "Air Fryer e Liquidificador. Qualidade garantida.",
    status: "Aberto",
    participants: 12,
    target: 20
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappLink = "https://wa.me/244957120242";

  return (
    <div className="min-h-screen selection:bg-emerald-100 selection:text-emerald-900">
      {/* Navigation */}
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        scrolled ? "glass shadow-sm py-3" : "bg-transparent"
      )}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-emerald-200">
              <ShoppingBag size={24} />
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-emerald-950">
              Pandas <span className="text-emerald-600">Internacional</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#como-funciona" className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors">Como Funciona</a>
            <a href="#produtos" className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors">Produtos</a>
            <a href="#contacto" className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors">Contacto</a>
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-emerald-700 transition-all shadow-md hover:shadow-lg active:scale-95 flex items-center gap-2"
            >
              <MessageCircle size={18} />
              Entrar no Grupo
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6 text-center">
              <a href="#como-funciona" onClick={() => setIsMenuOpen(false)} className="text-2xl font-display font-medium text-slate-800">Como Funciona</a>
              <a href="#produtos" onClick={() => setIsMenuOpen(false)} className="text-2xl font-display font-medium text-slate-800">Produtos</a>
              <a href="#contacto" onClick={() => setIsMenuOpen(false)} className="text-2xl font-display font-medium text-slate-800">Contacto</a>
              <a 
                href={whatsappLink}
                className="bg-emerald-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold flex items-center justify-center gap-3"
              >
                <MessageCircle size={24} />
                WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-emerald-50/50 rounded-l-[100px] blur-3xl opacity-50" />
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-6">
              <Package size={14} />
              Importação Direta para Angola
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-slate-900 leading-[1.1] mb-6">
              Importe com <span className="text-emerald-600 italic">segurança</span> e economia.
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">
              Facilitamos a sua compra no estrangeiro. Unimos pedidos para reduzir custos e garantimos que a sua encomenda chegue às suas mãos em Angola.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#produtos"
                className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-slate-800 transition-all flex items-center gap-2 group"
              >
                Ver Produtos Atuais
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href={whatsappLink}
                className="border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-2xl font-semibold hover:bg-emerald-50 transition-all flex items-center gap-2"
              >
                <MessageCircle size={20} />
                Falar com a Equipa
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl shadow-emerald-200/50 aspect-[4/5] md:aspect-square">
              <img 
                src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaad5b?auto=format&fit=crop&q=80&w=1200" 
                alt="Logística e Importação"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/40 to-transparent" />
            </div>
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 glass p-6 rounded-3xl shadow-xl z-20 hidden md:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600">
                  <Users size={24} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900">+500</div>
                  <div className="text-xs text-slate-500 uppercase font-bold tracking-widest">Clientes Felizes</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How it Works */}
      <section id="como-funciona" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-4">Como Funciona?</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">O nosso processo é transparente e focado na sua comodidade.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: <ShoppingBag />, title: "Escolha", desc: "Lançamos produtos no grupo e você escolhe o que deseja." },
              { icon: <Users />, title: "Grupo", desc: "Criamos uma lista de interessados para baixar o custo." },
              { icon: <Truck />, title: "Envio", desc: "Solicitamos aos fornecedores. Prazo médio de 3 meses." },
              { icon: <CheckCircle />, title: "Entrega", desc: "Recebe a sua encomenda em mãos aqui em Angola." }
            ].map((step, i) => (
              <div key={i} className="relative group">
                <div className="mb-6 w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                {i < 3 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-slate-100 -z-10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="produtos" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-4">Lotes em Aberto</h2>
              <p className="text-slate-500">Junte-se a estes grupos de importação agora.</p>
            </div>
            <a href={whatsappLink} className="text-emerald-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
              Ver todos no WhatsApp <ArrowRight size={20} />
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {PRODUCTS.map((product) => (
              <motion.div 
                key={product.id}
                whileHover={{ y: -10 }}
                className="bg-white rounded-[32px] overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100"
              >
                <div className="relative h-64">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                    {product.status}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{product.name}</h3>
                  <p className="text-slate-500 text-sm mb-6 line-clamp-2">{product.description}</p>
                  
                  <div className="mb-6">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-slate-500">Participantes</span>
                      <span className="font-bold text-emerald-600">{product.participants}/{product.target}</span>
                    </div>
                    <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-emerald-600 rounded-full"
                        style={{ width: `${(product.participants / product.target) * 100}%` }}
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-slate-900">{product.price}</span>
                    <a 
                      href={whatsappLink}
                      className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-colors"
                    >
                      <ShoppingBag size={20} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-emerald-600 rounded-[48px] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-emerald-200">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-10 left-10 w-40 h-40 border-4 border-white rounded-full" />
            <div className="absolute bottom-10 right-10 w-60 h-60 border-4 border-white rounded-full" />
          </div>
          
          <h2 className="text-3xl md:text-6xl font-display font-bold text-white mb-8 relative z-10">
            Pronto para começar a importar?
          </h2>
          <p className="text-emerald-50 text-lg mb-12 max-w-2xl mx-auto relative z-10">
            Não perca mais tempo com processos complicados. Junte-se ao nosso grupo exclusivo e tenha acesso aos melhores fornecedores.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 relative z-10">
            <a 
              href={whatsappLink}
              className="bg-white text-emerald-600 px-10 py-5 rounded-2xl font-bold text-xl hover:scale-105 transition-transform shadow-xl"
            >
              Entrar no WhatsApp
            </a>
            <div className="text-white font-medium">
              Ou ligue para: <span className="font-bold">937 474 612</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-8">Fale Connosco</h2>
              <p className="text-slate-500 mb-12 text-lg">Estamos aqui para tirar todas as suas dúvidas sobre importação, pagamentos e prazos.</p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 shrink-0">
                    <MessageCircle size={28} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">WhatsApp</div>
                    <div className="text-xl font-bold text-slate-900">957 120 242</div>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 shrink-0">
                    <Phone size={28} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Chamadas</div>
                    <div className="text-xl font-bold text-slate-900">937 474 612</div>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 shrink-0">
                    <Mail size={28} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Email</div>
                    <div className="text-xl font-bold text-slate-900">lukenevunda@gmail.com</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-[40px] p-10 border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Envie uma mensagem</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Nome</label>
                    <input type="text" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all" placeholder="Seu nome" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Telefone</label>
                    <input type="text" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all" placeholder="9xx xxx xxx" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Mensagem</label>
                  <textarea rows={4} className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all resize-none" placeholder="Como podemos ajudar?"></textarea>
                </div>
                <button className="w-full bg-emerald-600 text-white font-bold py-4 rounded-xl hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-200">
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center text-white">
                  <ShoppingBag size={24} />
                </div>
                <span className="font-display font-bold text-2xl tracking-tight">
                  Pandas <span className="text-emerald-500">Internacional</span>
                </span>
              </div>
              <p className="text-slate-400 max-w-sm mb-8">
                Transformando a forma como os angolanos compram no estrangeiro. Qualidade, confiança e economia em cada pedido.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors">
                  <Facebook size={20} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-6">Links Rápidos</h4>
              <ul className="space-y-4 text-slate-400">
                <li><a href="#" className="hover:text-emerald-500 transition-colors">Início</a></li>
                <li><a href="#como-funciona" className="hover:text-emerald-500 transition-colors">Como Funciona</a></li>
                <li><a href="#produtos" className="hover:text-emerald-500 transition-colors">Produtos</a></li>
                <li><a href="#contacto" className="hover:text-emerald-500 transition-colors">Contacto</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6">Legal</h4>
              <ul className="space-y-4 text-slate-400">
                <li><a href="#" className="hover:text-emerald-500 transition-colors">Termos de Serviço</a></li>
                <li><a href="#" className="hover:text-emerald-500 transition-colors">Privacidade</a></li>
                <li><a href="#" className="hover:text-emerald-500 transition-colors">Política de Envio</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-sm">
            <p>© 2024 Pandas Internacional Trade. Todos os direitos reservados.</p>
            <p>Desenvolvido para o mercado Angolano.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
