import Image from 'next/image';

interface Client {
  id: number;
  name: string;
  logo: string;
}

const clients: Client[] = [
  { id: 1, name: 'International Youth Fellowship', logo: '/images/clients/iyf-logo.png' },
  { id: 2, name: 'Weekend Academy', logo: '/images/clients/weekend-academy-logo.png' },
  { id: 3, name: 'Mahanaim International School', logo: '/images/clients/mahanaim-logo.png' },
  { id: 4, name: 'GBS TV Africa', logo: '/images/clients/gbs-tv-logo.png' },
  { id: 5, name: 'Talanta Hela', logo: '/images/clients/talanta-hela-logo.png' },
  { id: 6, name: 'Ministry of Youth Affairs', logo: '/images/clients/youth-affairs-logo.png' },
  { id: 7, name: 'Zinco Mabati Factory Limited', logo: '/images/clients/zinco-logo.png' },
  { id: 8, name: 'Mwananchi Credit Limited', logo: '/images/clients/mwananchi-logo.png' },
  { id: 9, name: 'Boomplay Music', logo: '/images/clients/boomplay-logo.png' },
  { id: 10, name: 'Kazicloud Careers', logo: '/images/clients/kazicloud-logo.png' },
  { id: 11, name: 'Derine Marketing', logo: '/images/clients/derine-logo.png' },
  { id: 12, name: 'Catholic University', logo: '/images/clients/catholic-logo.png' },
];

const individualBrands: Client[] = [
  { id: 101, name: 'Obinna', logo: '/images/clients/obinna-logo.png' },
  { id: 102, name: 'Guardian Angel', logo: '/images/clients/guardian-angel-logo.png' },
  { id: 103, name: 'Mercy Masika', logo: '/images/clients/mercy-masika-logo.png' },
  { id: 104, name: 'Moji Shortbaba', logo: '/images/clients/moji-logo.png' },
];

const ClientLogos = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-brand-gold font-bold text-xl mb-2 block">TRUSTED BY</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Clientele</h2>
          <div className="w-20 h-1 bg-brand-gold mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Trusted by leading organizations and brands across various industries.
          </p>
        </div>

        <div className="bg-gray-50 p-10 rounded-lg shadow-lg mb-16">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {clients.map((client) => (
              <div 
                key={client.id} 
                className="flex items-center justify-center p-4 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-24 w-full">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold mb-6">Individual Brands</h3>
            <div className="w-16 h-1 bg-brand-gold mx-auto mb-8"></div>
          </div>
          
          <div className="bg-gray-50 p-10 rounded-lg shadow-lg">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
              {individualBrands.map((brand) => (
                <div 
                  key={brand.id} 
                  className="flex items-center justify-center p-4 transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="relative h-20 w-full">
                    <Image
                      src={brand.logo}
                      alt={brand.name}
                      fill
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;