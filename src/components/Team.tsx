import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: string;
  linkedin?: string;
  twitter?: string;
  email?: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Kelvin Mosioma',
    position: 'Chairman',
    image: '/images/team/kelvin-mosioma.jpg',
    linkedin: 'https://linkedin.com/',
    twitter: 'https://twitter.com/',
    email: 'mailto:kelvin@sortbrands.com',
  },
  {
    id: 2,
    name: 'Yohan Kim',
    position: 'Chief Advisor',
    image: '/images/team/yohan-kim.jpg',
    linkedin: 'https://linkedin.com/',
    twitter: 'https://twitter.com/',
    email: 'mailto:yohan@sortbrands.com',
  },
  {
    id: 3,
    name: 'Evans Mutiga',
    position: 'Business Development Officer',
    image: '/images/team/evans-mutiga.jpg',
    linkedin: 'https://linkedin.com/',
    twitter: 'https://twitter.com/',
    email: 'mailto:evans@sortbrands.com',
  },
];

const Team = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-brand-gold font-bold text-xl mb-2 block">MEET OUR TEAM</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Leadership Team</h2>
          <div className="w-20 h-1 bg-brand-gold mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Meet the experts behind Sort Brands who are dedicated to helping your business succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamMembers.map((member) => (
            <div 
              key={member.id}
              className="group"
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg mb-6">
                {/* Team Member Image */}
                <div className="relative h-96 w-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                
                {/* Overlay with Social Links (visible on hover) */}
                <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-4">
                    {member.linkedin && (
                      <a 
                        href={member.linkedin}
                        className="bg-white text-brand-black hover:bg-brand-gold hover:text-white p-3 rounded-full transition duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name}'s LinkedIn`}
                      >
                        <FaLinkedin className="h-5 w-5" />
                      </a>
                    )}
                    
                    {member.twitter && (
                      <a 
                        href={member.twitter}
                        className="bg-white text-brand-black hover:bg-brand-gold hover:text-white p-3 rounded-full transition duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name}'s Twitter`}
                      >
                        <FaTwitter className="h-5 w-5" />
                      </a>
                    )}
                    
                    {member.email && (
                      <a 
                        href={member.email}
                        className="bg-white text-brand-black hover:bg-brand-gold hover:text-white p-3 rounded-full transition duration-300"
                        aria-label={`Email ${member.name}`}
                      >
                        <FaEnvelope className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Team Member Details */}
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                <p className="text-gray-600 mb-2">{member.position}</p>
                <div className="w-10 h-1 bg-brand-gold mx-auto"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;