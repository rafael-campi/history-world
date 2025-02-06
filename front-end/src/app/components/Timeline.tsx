"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Book, Crown, Flag, Star, Globe } from "lucide-react";
import { Chrono } from "react-chrono";

// Tipos
type TimelineEvent = {
  date: string;
  title: string;
  description: string;
  icon: JSX.Element;
  color: string;
};

type TimelineCategory = {
  id: string;
  name: string;
  emoji: string;
  icon: JSX.Element;
  color: string;
  events: TimelineEvent[];
};

// Dados das timelines
const timelineCategories: TimelineCategory[] = [
  {
    id: 'brasil',
    name: 'História do Brasil',
    emoji: '🇧🇷',
    icon: <Globe className="w-5 h-5" />,
    color: '#009c3b',
    events: [
      {
        date: "1500",
        title: "Descobrimento do Brasil",
        description: "Pedro Álvares Cabral chega ao Brasil e inicia a colonização.",
        icon: <Flag />,
        color: "#3b82f6",
      },
      {
        date: "1822",
        title: "Independência do Brasil",
        description: "Dom Pedro I declara a independência do Brasil em 7 de setembro.",
        icon: <Crown />,
        color: "#facc15",
      },
      {
        date: "1888",
        title: "Abolição da Escravatura",
        description: "A Princesa Isabel assina a Lei Áurea, libertando os escravizados.",
        icon: <Book />,
        color: "#10b981",
      },
      {
        date: "1889",
        title: "Proclamação da República",
        description: "Marechal Deodoro da Fonseca proclama a República no Brasil.",
        icon: <Star />,
        color: "#ef4444",
      },
    ]
  },
  {
    id: 'usa',
    name: 'História dos EUA',
    emoji: '🇺🇸',
    icon: <Star className="w-5 h-5" />,
    color: '#3c3b6e',
    events: [
      {
        date: "1776",
        title: "Independência dos EUA",
        description: "Declaração de Independência é assinada.",
        icon: <Flag />,
        color: "#dc2626",
      },
      {
        date: "1861",
        title: "Guerra Civil",
        description: "Início da Guerra Civil Americana.",
        icon: <Crown />,
        color: "#2563eb",
      },
      {
        date: "1969",
        title: "Chegada à Lua",
        description: "Neil Armstrong se torna o primeiro homem a pisar na Lua.",
        icon: <Star />,
        color: "#9333ea",
      },
      {
        date: "2001",
        title: "11 de Setembro",
        description: "Ataques terroristas mudam a história dos EUA.",
        icon: <Book />,
        color: "#64748b",
      },
    ]
  },
];

const TimelineComponent = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>(timelineCategories[0].id);
  const currentCategory = timelineCategories.find(cat => cat.id === selectedCategory)!;

  const items = currentCategory.events.map(event => ({
    title: event.date,
    cardTitle: event.title,
    cardSubtitle: event.description,
    cardDetailedText: event.description,
  }));

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }}
      className="p-4 md:p-8"
    >
      {/* Seção de navegação */}
      <div className="max-w-4xl mx-auto mb-8">
        <div className="flex flex-wrap gap-3 justify-center">
          {timelineCategories.map((category) => (
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`
                flex items-center gap-3 px-6 py-3 rounded-xl transition-all
                ${selectedCategory === category.id
                  ? 'bg-white shadow-lg scale-105'
                  : 'bg-gray-100/80 hover:bg-gray-100'
                }
              `}
              style={{
                borderLeft: selectedCategory === category.id 
                  ? `4px solid ${category.color}`
                  : '4px solid transparent'
              }}
            >
              <span className="text-2xl">{category.emoji}</span>
              <span className="font-medium text-gray-700">{category.name}</span>
            </motion.button>
          ))}
        </div>
      </div>

      <motion.h1 
        key={currentCategory.id}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center mb-8"
      >
        {currentCategory.emoji} {currentCategory.name}
      </motion.h1>

      <div className="timeline-wrapper">
        <Chrono
          items={items}
          mode="HORIZONTAL"
          theme={{
            primary: currentCategory.color,
            secondary: "#fff",
            cardBgColor: "rgba(255, 255, 255, 0.95)",
            cardForeColor: "#1a1a1a",
            titleColor: "#4b5563",
            titleColorActive: currentCategory.color,
            // Cores dos botões
            buttonBgColor: currentCategory.color,
            buttonTextColor: "white",
            buttonHoverBg: `${currentCategory.color}dd`,
            buttonHoverColor: "white",
          }}
          cardHeight={280}
          slideShow={false}
          enableOutline
          classNames={{
            card: "timeline-card-3d",
            cardTitle: "timeline-card-title-3d",
            cardSubtitle: "timeline-card-subtitle-3d",
            title: "timeline-title-3d",
            button: "timeline-button"
          }}
          fontSizes={{
            cardSubtitle: '0.85rem',
            cardText: '0.8rem',
            cardTitle: '1.1rem',
            title: '1rem',
          }}
          buttonTexts={{
            first: "Início",
            last: "Fim",
            next: "Próximo",
            previous: "Anterior",
          }}
        />
      </div>
    </motion.div>
  );
};

export default TimelineComponent;
