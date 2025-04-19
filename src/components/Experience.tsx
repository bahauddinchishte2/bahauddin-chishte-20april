import React, { useState } from 'react';
import { experiences } from '../data';
import { 
  Calendar, 
  MapPin, 
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Clock,
  Trophy
} from 'lucide-react';

export default function Experience() {
  const [expandedIds, setExpandedIds] = useState<number[]>([]);

  const toggleExpand = (index: number) => {
    setExpandedIds(prev => {
      if (prev.includes(index)) {
        return prev.filter(id => id !== index);
      } else {
        return [...prev, index];
      }
    });
  };

  const getTypeColor = (type: string) => {
    const colors = {
      'full-time': 'bg-green-500/20 text-green-400',
      'part-time': 'bg-blue-500/20 text-blue-400',
      'freelance': 'bg-purple-500/20 text-purple-400',
      'contract': 'bg-orange-500/20 text-orange-400'
    };
    return colors[type as keyof typeof colors] || 'bg-slate-500/20 text-slate-400';
  };

  return (
    <section className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 sm:p-8 lg:p-12 border border-slate-700/50" id="experience">
      <div className="max-w-2xl mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2 relative inline-block">
          Experience
          <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full opacity-50" />
        </h2>
        <p className="text-slate-400 text-lg mt-4">
          My professional journey in technology and entrepreneurship.
        </p>
      </div>

      <div className="space-y-4">
        {experiences.map((experience, index) => (
          <div 
            key={index}
            className="bg-slate-900/50 rounded-lg border border-slate-800/50 hover:border-blue-500/30 transition-all duration-300"
          >
            {/* Header - Always Visible */}
            <button
              onClick={() => toggleExpand(index)}
              className="w-full px-6 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-left"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-slate-800/50 flex items-center justify-center flex-shrink-0 overflow-hidden">
                  <img 
                    src={experience.logo} 
                    alt={`${experience.company} logo`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                    {experience.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 mt-1">
                    {experience.url ? (
                      <a 
                        href={experience.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {experience.company}
                      </a>
                    ) : (
                      <span className="text-blue-400">{experience.company}</span>
                    )}
                    <span className={`px-2 py-0.5 rounded-full text-xs ${getTypeColor(experience.type)}`}>
                      {experience.type}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm text-slate-400">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  <span>{experience.period}</span>
                </div>
                {expandedIds.includes(index) ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </div>
            </button>

            {/* Expanded Content */}
            {expandedIds.includes(index) && (
              <div className="px-6 py-5 border-t border-slate-800/50">
                <div className="pl-16">
                  {/* Description */}
                  <p className="text-slate-300 leading-relaxed mb-6">
                    {experience.description}
                  </p>

                  {/* Key Achievements */}
                  <div className="mb-6">
                    <h4 className="text-white font-medium mb-3 flex items-center gap-2">
                      <Trophy className="w-4 h-4 text-blue-400" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {experience.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-center gap-2 text-slate-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {experience.skills.map((skill, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-slate-800/50 text-slate-300 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}