
import React, { useEffect, useRef } from "react";
import { Briefcase, Book, Users, Award, GitBranch, GraduationCap, Flag, Map, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  
  // On va générer les services à partir des clés de traduction
  const services = [
    {
      icon: <GitBranch className="h-10 w-10 text-primary" />,
      title: currentLang === 'fr' ? "Immigration et résidence permanente" : "Immigration and Permanent Residence",
      description: currentLang === 'fr' ? "Accompagnement dans vos démarches d'immigration via Entrée Express, PRTQ, PEQ." : "Support in your immigration procedures via Express Entry, PRTQ, PEQ.",
      features: [
        currentLang === 'fr' ? "Analyse d'éligibilité" : "Eligibility analysis",
        currentLang === 'fr' ? "Préparation du dossier" : "File preparation",
        currentLang === 'fr' ? "Suivi des procédures" : "Procedure monitoring",
        currentLang === 'fr' ? "Intégration locale" : "Local integration"
      ],
      path: "/services/immigration"
    },
    {
      icon: <Briefcase className="h-10 w-10 text-primary" />,
      title: currentLang === 'fr' ? "Orientation professionnelle" : "Professional Guidance",
      description: currentLang === 'fr' ? "Support personnalisé pour identifier vos compétences et définir votre projet professionnel." : "Personalized support to identify your skills and define your professional project.",
      features: [
        currentLang === 'fr' ? "Bilan de compétences" : "Skills assessment",
        currentLang === 'fr' ? "Tests d'orientation" : "Career guidance tests",
        currentLang === 'fr' ? "Analyse de marché" : "Market analysis",
        currentLang === 'fr' ? "Plan d'action personnalisé" : "Personalized action plan"
      ],
      path: "/services/counseling"
    },
    {
      icon: <GraduationCap className="h-10 w-10 text-primary" />,
      title: currentLang === 'fr' ? "Accompagnement pour étudiants internationaux" : "Support for International Students",
      description: currentLang === 'fr' ? "Conseils et assistance pour les études au Canada." : "Advice and assistance for studies in Canada.",
      features: [
        currentLang === 'fr' ? "Choix d'établissement" : "Institution selection",
        currentLang === 'fr' ? "Demande d'admission" : "Admission application",
        currentLang === 'fr' ? "Visa étudiant" : "Student visa",
        currentLang === 'fr' ? "Intégration académique" : "Academic integration"
      ],
    },
    {
      icon: <Flag className="h-10 w-10 text-primary" />,
      title: currentLang === 'fr' ? "Demande de citoyenneté canadienne" : "Canadian Citizenship Application",
      description: currentLang === 'fr' ? "Assistance pour l'obtention de la citoyenneté après votre période de résidence permanente." : "Assistance for obtaining citizenship after your permanent residence period.",
      features: [
        currentLang === 'fr' ? "Vérification d'éligibilité" : "Eligibility verification",
        currentLang === 'fr' ? "Préparation du dossier" : "File preparation",
        currentLang === 'fr' ? "Préparation au test" : "Test preparation",
        currentLang === 'fr' ? "Assistance à l'entrevue" : "Interview assistance"
      ],
    },
  ];
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeIn");
          }
        });
      },
      { threshold: 0.1 }
    );

    const childElements = sectionRef.current?.querySelectorAll(".service-card");
    childElements?.forEach((el) => observer.observe(el));

    return () => {
      childElements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="services" className="py-24 px-6 bg-white relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-1/3 left-0 right-0 h-[500px] bg-[radial-gradient(circle_800px_at_100%_200px,rgba(120,119,198,0.1),transparent)]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("home.services.title")}</h2>
          <p className="text-lg text-muted-foreground">
            {t("home.services.description")}
          </p>
          <p className="mt-4 text-lg font-medium">
            {currentLang === 'fr' ? "📍 Nos services :" : "📍 Our services:"}
          </p>
        </div>

        <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={cn(
                "service-card opacity-0 hover-lift bg-white rounded-xl p-8 shadow-sm border border-gray-100",
                index % 2 === 0 ? "animate-delay-100" : "animate-delay-200"
              )}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="rounded-full w-16 h-16 flex items-center justify-center bg-primary/10 mb-6">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>
              
              <ul className="space-y-2 mb-6">
                {service.features && 
                  Array.isArray(service.features) &&
                  service.features.map((feature: string, idx: number) => (
                    <li key={idx} className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))
                }
              </ul>
              
              {service.path && (
                <Link to={service.path}>
                  <Button variant="outline" className="w-full flex items-center justify-center gap-2 border-primary/30 text-primary hover:bg-primary/10 hover:text-primary">
                    {t("services.viewDetails")}
                    <ChevronRight size={16} />
                  </Button>
                </Link>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button size="lg" className="bg-brown hover:bg-brown/90 text-white">
            {currentLang === 'fr' ? "Pré-évaluez votre admissibilité dès aujourd'hui 🚀" : "Pre-evaluate your eligibility today 🚀"}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
